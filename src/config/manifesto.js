/**
 * Configuration du lien dynamique vers le Manifeste Google Doc officiel de Force Commune.
 * 
 * Pour mettre à jour le manifeste sur le site :
 * 1. Modifiez votre Google Doc normalement
 * 2. Le site reflète automatiquement les modifications (chargement à chaque ouverture de la modale)
 * 
 * Si vous changez l'URL du document publié :
 * - Allez dans Google Docs → Fichier → Partager → Publier sur le Web → Lien publié
 * - Remplacez MANIFESTO_PUB_URL par la nouvelle URL ci-dessous
 */

export const MANIFESTO_CONFIG = {
  // URL de publication publique du Google Doc (version HTML)
  pubUrl: 'https://docs.google.com/document/d/e/2PACX-1vRaSkAfDC9AO6JGwFw-XEHzYvcdUnfj0QWkNAf-kKr7upUJ47a2BJcLGYFoA9Z5fHFHz3jAeo5PXk_P/pub',

  // URL d'embed pour l'iframe (format Google Docs auto-refresh)
  embedUrl: 'https://docs.google.com/document/d/e/2PACX-1vRaSkAfDC9AO6JGwFw-XEHzYvcdUnfj0QWkNAf-kKr7upUJ47a2BJcLGYFoA9Z5fHFHz3jAeo5PXk_P/pub?embedded=true',

  // Délai de rafraîchissement automatique si la page reste ouverte (ms)
  // 0 = pas de rafraîchissement automatique (chargement à l'ouverture uniquement)
  autoRefreshMs: 0,

  // Titre affiché dans la modale
  modalTitle: 'Manifeste de Force Commune',

  // Sous-titre
  modalSubtitle: '« D\'abord ceux qui font » — Document de référence officiel',
};
