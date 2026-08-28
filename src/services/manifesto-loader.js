import { MANIFESTO_CONFIG } from '../config/manifesto.js';

/**
 * Service de chargement dynamique du Manifeste depuis Google Docs.
 * 
 * - Charge le HTML brut du document publié via un proxy CORS natif
 * - Extrait et sanitise uniquement le contenu de l'article (sans les scripts Google)
 * - Applique le style Force Commune au contenu extrait
 * - Met en cache le résultat pour éviter les rechargements inutiles dans la même session
 */

let cachedContent = null;
let cacheTimestamp = null;
const CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes

/**
 * Extrait le contenu principal d'un HTML Google Docs publié
 */
function extractGoogleDocContent(rawHtml) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, 'text/html');

  // Google Docs met le contenu dans #contents > .doc-content ou directement dans .doc-content
  const contentEl = doc.querySelector('.doc-content') || doc.querySelector('#contents');

  if (!contentEl) {
    // Fallback : on retourne tout le body sans les scripts
    return doc.body?.innerHTML || '<p>Contenu non disponible.</p>';
  }

  // Supprimer les éléments non souhaités restants dans le contenu
  contentEl.querySelectorAll('script, style, link').forEach(el => el.remove());

  return contentEl.innerHTML;
}

/**
 * Applique le style Force Commune sur le contenu extrait
 */
function applyBrandStyles(rawHtml) {
  return rawHtml
    // Headings → style navy Force Commune
    .replace(/<h1([^>]*)>/g, '<h1$1 style="font-size:1.5rem;font-weight:800;color:#0A1F44;margin:1.5rem 0 0.75rem;font-family:\'Plus Jakarta Sans\',sans-serif;">')
    .replace(/<h2([^>]*)>/g, '<h2$1 style="font-size:1.25rem;font-weight:700;color:#0A1F44;margin:1.25rem 0 0.5rem;font-family:\'Plus Jakarta Sans\',sans-serif;">')
    .replace(/<h3([^>]*)>/g, '<h3$1 style="font-size:1.1rem;font-weight:700;color:#0A1F44;margin:1.25rem 0 0.5rem;border-left:3px solid #FF6B00;padding-left:0.75rem;font-family:\'Plus Jakarta Sans\',sans-serif;">')
    .replace(/<h4([^>]*)>/g, '<h4$1 style="font-size:1rem;font-weight:700;color:#FF6B00;margin:1rem 0 0.4rem;font-family:\'Plus Jakarta Sans\',sans-serif;">')
    // Paragraphes
    .replace(/<p([^>]*)>/g, '<p$1 style="margin:0.5rem 0 0.75rem;line-height:1.7;color:#334155;font-size:0.9375rem;">')
    // Listes
    .replace(/<ul([^>]*)>/g, '<ul$1 style="padding-left:1.5rem;margin:0.5rem 0 0.75rem;">')
    .replace(/<ol([^>]*)>/g, '<ol$1 style="padding-left:1.5rem;margin:0.5rem 0 0.75rem;">')
    .replace(/<li([^>]*)>/g, '<li$1 style="margin:0.35rem 0;color:#334155;font-size:0.9375rem;line-height:1.6;">')
    // Texte en gras → mise en valeur orange
    .replace(/<span class="c7">/g, '<span style="font-weight:700;color:#0A1F44;">')
    .replace(/<span class="c8 c7">/g, '<span style="font-weight:700;color:#0A1F44;">')
    .replace(/<span class="c10 c7">/g, '<span style="font-weight:700;color:#0A1F44;">')
    .replace(/<span class="c7 c10">/g, '<span style="font-weight:700;color:#0A1F44;">')
    .replace(/<span class="c7 c8">/g, '<span style="font-weight:700;color:#0A1F44;">')
    // HR stylisé
    .replace(/<hr>/g, '<hr style="border:none;border-top:2px solid #FF6B00;opacity:0.3;margin:1.5rem 0;">')
    // Supprimer les classes Google residuelles
    .replace(/class="[^"]*"/g, '')
    .replace(/id="[^"]*"/g, '');
}

/**
 * Charge le manifeste depuis Google Docs.
 * Retourne le HTML stylisé ou null en cas d'erreur.
 */
export async function loadManifesto() {
  // Vérifier le cache de session
  if (cachedContent && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_DURATION_MS)) {
    return { html: cachedContent, fromCache: true };
  }

  try {
    // Utiliser le proxy CORS public allorigins.win pour contourner les restrictions CORS Google
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(MANIFESTO_CONFIG.pubUrl)}`;
    
    const response = await fetch(proxyUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const rawHtml = data.contents;

    if (!rawHtml) {
      throw new Error('Contenu vide reçu du proxy');
    }

    const extracted = extractGoogleDocContent(rawHtml);
    const styled = applyBrandStyles(extracted);

    // Mettre en cache
    cachedContent = styled;
    cacheTimestamp = Date.now();

    return { html: styled, fromCache: false };

  } catch (err) {
    console.warn('[Force Commune] Chargement manifeste via proxy échoué, fallback iframe:', err);
    return null; // Signale d'utiliser le fallback iframe
  }
}

/**
 * Invalide le cache pour forcer un rechargement
 */
export function invalidateManifestoCache() {
  cachedContent = null;
  cacheTimestamp = null;
}
