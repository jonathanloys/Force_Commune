import { pillarsData } from './data/pillars.js';
import { proposalsData, categories } from './data/proposals.js';
import { newsData, regionalTourEvents } from './data/news.js';
import { testimonialsData } from './data/testimonials.js';
import { loadManifesto, invalidateManifestoCache } from './services/manifesto-loader.js';
import { MANIFESTO_CONFIG } from './config/manifesto.js';
import { 
  createIcons, 
  Compass, 
  TrendingUp, 
  ShieldCheck, 
  Scale, 
  GraduationCap, 
  Zap, 
  HeartPulse, 
  Heart,
  ArrowRight, 
  CheckCircle, 
  X, 
  Menu, 
  Home, 
  Users, 
  CheckSquare, 
  Newspaper, 
  Mail, 
  Send, 
  Lock, 
  Download, 
  Search, 
  Calendar, 
  MapPin, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  Layers,
  FileText,
  HelpCircle,
  Building,
  Briefcase,
  Sliders,
  DollarSign,
  RefreshCw,
  WifiOff,
  Info,
  Link
} from 'lucide';

// Lucide icons registration dictionary
const icons = {
  Compass,
  TrendingUp,
  ShieldCheck,
  Scale,
  GraduationCap,
  Zap,
  HeartPulse,
  Heart,
  ArrowRight,
  CheckCircle,
  X,
  Menu,
  Home,
  Users,
  CheckSquare,
  Newspaper,
  Mail,
  Send,
  Lock,
  Download,
  Search,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  ChevronRight,
  Layers,
  FileText,
  HelpCircle,
  Building,
  Briefcase,
  Sliders,
  DollarSign,
  RefreshCw,
  WifiOff,
  Info,
  Link
};

// Global App State
const state = {
  currentRoute: 'accueil',
  activeProposalCategory: 'all',
  proposalSearchQuery: '',
  activeNewsCategory: 'all',
  selectedDonationAmount: 50,
  calcGrossSalary: 3200,
  calcProfile: 'salarie'
};

// DOM References
const appRoot = document.getElementById('app-root');
const siteHeader = document.getElementById('site-header');
const mobileDrawer = document.getElementById('mobile-drawer');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');
const pillarModal = document.getElementById('pillar-modal');
const pillarModalContent = document.getElementById('pillar-modal-content');
const manifesteModal = document.getElementById('manifeste-modal');
const donationModal = document.getElementById('donation-modal');
const toastContainer = document.getElementById('toast-container');

// Show Toast Notification
export function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : 'sparkles'}" class="w-5 h-5 text-orange-500 flex-shrink-0"></i>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);
  createIcons({ icons, root: toast });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// -------------------------------------------------------------
// VIEW RENDERERS
// -------------------------------------------------------------

// 1. Accueil (Home) View
function renderAccueil() {
  return `
    <!-- Hero Section -->
    <section class="hero-wrapper min-h-[90vh] flex items-center relative py-20 lg:py-28">
      <img 
        src="/images/hero.jpg" 
        alt="Citoyens et travailleurs belges engagés pour Force Commune" 
        class="hero-bg-image"
      >
      <div class="hero-overlay"></div>

      <div class="section-container relative z-10 w-full">
        <div class="max-w-3xl space-y-6">
          
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/80 border border-navy-700/80 text-orange-400 text-xs font-semibold backdrop-blur-md">
            <span class="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            <span>🇧🇪 Mouvement Citoyen & Politique Belge</span>
          </div>

          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
            D’abord ceux <br class="hidden sm:inline" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300">
              qui font.
            </span>
          </h1>

          <p class="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
            Le rassemblement des salariés, artisans, indépendants, soignants et enseignants qui font tourner la Belgique. Pour la revalorisation du travail, un État sobre et exemplaire, et le retour du bon sens démocratique.
          </p>

          <!-- Quick Action Buttons -->
          <div class="pt-4 flex flex-wrap items-center gap-4">
            <a href="#nous-rejoindre" class="btn btn-primary text-base py-3.5 px-7 shadow-orange" data-route="nous-rejoindre">
              <span>Rejoindre le mouvement</span>
              <i data-lucide="arrow-right" class="w-5 h-5"></i>
            </a>
            
            <a href="#boussole" class="btn btn-outline bg-navy-900/80 text-white border-navy-700 hover:border-orange-500 hover:text-orange-400 text-base py-3.5 px-6 backdrop-blur-sm">
              <i data-lucide="compass" class="w-5 h-5 text-orange-500"></i>
              <span>Découvrir la Boussole</span>
            </a>

            <button id="btn-read-manifeste-hero" class="btn btn-ghost text-slate-300 hover:text-white text-base py-3.5">
              <i data-lucide="file-text" class="w-5 h-5 text-orange-400"></i>
              <span>Lire le Manifeste</span>
            </button>
          </div>

          <!-- Key Metrics Badges -->
          <div class="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-navy-800/80">
            <div class="space-y-0.5">
              <div class="text-2xl sm:text-3xl font-extrabold text-white font-display">+18 500</div>
              <div class="text-xs text-slate-400 font-medium">Citoyens adhérents</div>
            </div>
            <div class="space-y-0.5">
              <div class="text-2xl sm:text-3xl font-extrabold text-orange-400 font-display">100%</div>
              <div class="text-xs text-slate-400 font-medium">Autofinancement libre</div>
            </div>
            <div class="space-y-0.5">
              <div class="text-2xl sm:text-3xl font-extrabold text-white font-display">14</div>
              <div class="text-xs text-slate-400 font-medium">Fédérations locales</div>
            </div>
            <div class="space-y-0.5">
              <div class="text-2xl sm:text-3xl font-extrabold text-orange-400 font-display">+350 €</div>
              <div class="text-xs text-slate-400 font-medium">Net/mois visé par salarié</div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Section: Notre Boussole (5 Piliers) -->
    <section id="boussole" class="py-20 lg:py-28 bg-slate-50 relative">
      <div class="section-container">
        
        <div class="max-w-3xl mb-14 space-y-4">
          <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
            <i data-lucide="compass" class="w-4 h-4"></i>
            <span>Notre Ligne Fondatrice</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold text-navy-950 font-display tracking-tight">
            Notre Boussole : 5 Piliers d'Action
          </h2>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
            Face au découragement général et à la lourdeur des appareils politiques traditionnels, Force Commune s'organise autour de 5 principes cardinaux, concrets et inaltérables.
          </p>
        </div>

        <!-- 5 Pillars Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${pillarsData.map((pillar, idx) => `
            <div class="pillar-card group ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}">
              <div class="pillar-img-wrap">
                <img src="${pillar.image}" alt="${pillar.title}" class="pillar-img" loading="lazy">
                <div class="pillar-number">${pillar.number}</div>
                <div class="absolute bottom-3 left-3">
                  <span class="badge badge-dark">${pillar.badge}</span>
                </div>
              </div>
              <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div class="space-y-2.5">
                  <h3 class="text-xl font-bold text-navy-950 font-display group-hover:text-orange-600 transition-colors">
                    ${pillar.title}
                  </h3>
                  <p class="text-xs font-semibold text-orange-600">
                    ${pillar.subtitle}
                  </p>
                  <p class="text-sm text-slate-600 leading-relaxed">
                    ${pillar.summary}
                  </p>
                </div>

                <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button 
                    class="btn btn-navy text-xs py-2 px-4 w-full justify-between group-hover:border-orange-500" 
                    data-open-pillar="${pillar.id}"
                  >
                    <span>Consulter la feuille de route</span>
                    <i data-lucide="chevron-right" class="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>

    <!-- Section: Mesures Phares (Interactive Proposals Selector) -->
    <section class="py-20 bg-white border-y border-slate-200 relative">
      <div class="section-container">
        
        <div class="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div class="max-w-2xl space-y-3">
            <span class="badge badge-orange">Engagements Chiffrés</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display tracking-tight">
              Des mesures concrètes, financées et applicables
            </h2>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
              Pas de vœux pieux ni de promesses électorales irréalistes. Chaque mesure proposée par Force Commune a été élaborée par des professionnels du secteur et rigoureusement chiffrée.
            </p>
          </div>

          <a href="#propositions" class="btn btn-outline text-sm self-start lg:self-auto" data-route="propositions">
            <span>Voir tout le programme (11 mesures)</span>
            <i data-lucide="arrow-right" class="w-4 h-4 text-orange-500"></i>
          </a>
        </div>

        <!-- Featured Proposals Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${proposalsData.slice(0, 6).map(prop => `
            <div class="proposal-card">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="badge badge-navy">${prop.badge}</span>
                  <span class="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                    <i data-lucide="clock" class="w-3.5 h-3.5 text-orange-500"></i>
                    ${prop.timeline.slice(0, 20)}...
                  </span>
                </div>
                
                <h3 class="text-lg font-bold text-navy-950 font-display">
                  ${prop.title}
                </h3>
                
                <p class="text-xs text-orange-600 font-semibold">
                  ${prop.tagline}
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                  ${prop.summary}
                </p>
              </div>

              <div class="pt-4 mt-4 border-t border-slate-100 space-y-2">
                <div class="text-xs text-slate-500 flex items-center gap-1.5">
                  <i data-lucide="trending-up" class="w-3.5 h-3.5 text-green-600 flex-shrink-0"></i>
                  <span><strong>Impact :</strong> ${prop.costing}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>

    <!-- Section: Manifeste Extract (Atmospheric Navy Banner) -->
    <section class="py-20 lg:py-24 bg-navy-950 text-white relative overflow-hidden">
      <img src="/images/manifeste-bg.jpg" alt="Manifeste Force Commune" class="absolute inset-0 w-full height-full object-cover opacity-20 filter grayscale contrast-125">
      <div class="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-950"></div>

      <div class="section-container relative z-10">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-orange-400 mx-auto">
            <i data-lucide="file-text" class="w-7 h-7"></i>
          </div>

          <div class="space-y-4">
            <span class="text-xs uppercase font-bold tracking-widest text-orange-400">Extrait du Manifeste Fondateur</span>
            <blockquote class="text-2xl sm:text-3xl lg:text-4xl font-bold font-display leading-snug text-white">
              « Pendant trop longtemps, les décisions ont été prises par ceux qui parlent au détriment de ceux qui font. Force Commune est le réveil de la Belgique qui travaille, ose et prend ses responsabilités. »
            </blockquote>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button id="btn-read-manifeste-body" class="btn btn-primary text-base py-3 px-6 shadow-orange">
              <span>Lire le Manifeste Complet (4 chapitres)</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
            <a href="#le-mouvement" class="btn btn-outline text-white border-navy-700 bg-navy-900/60 hover:text-orange-400 text-base py-3 px-6" data-route="le-mouvement">
              <span>Découvrir la Charte Éthique</span>
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- Section: Pourquoi Force Commune (Comparison Grid) -->
    <section class="py-20 lg:py-24 bg-slate-50 relative">
      <div class="section-container">
        
        <div class="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <span class="badge badge-orange">La Rupture de Méthode</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display tracking-tight">
            Pourquoi Force Commune est différent
          </h2>
          <p class="text-slate-600 text-base leading-relaxed">
            Nous ne cherchons pas à recycler les vieux partis politiques. Nous bâtissons une coalition citoyenne pragmatique avec des règles éthiques strictes.
          </p>
        </div>

        <div class="comparison-grid max-w-5xl mx-auto">
          
          <!-- Old Model -->
          <div class="comparison-card-old space-y-4">
            <div class="flex items-center gap-3 pb-3 border-b border-rose-200 text-rose-900">
              <i data-lucide="x" class="w-6 h-6 text-rose-600"></i>
              <h3 class="text-xl font-bold font-display">Le Système des Partis Traditionnels</h3>
            </div>
            <ul class="space-y-3 text-sm text-rose-950">
              <li class="flex items-start gap-2.5">
                <i data-lucide="x" class="w-4 h-4 text-rose-600 mt-1 flex-shrink-0"></i>
                <span>Multiplication des parlements, ministres et cabinets rémunérés sans fin.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i data-lucide="x" class="w-4 h-4 text-rose-600 mt-1 flex-shrink-0"></i>
                <span>Taxes records sur le travail pour masquer les déficits publics chroniques.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i data-lucide="x" class="w-4 h-4 text-rose-600 mt-1 flex-shrink-0"></i>
                <span>Écologie punitive qui pénalise les travailleurs périurbains et ruraux.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i data-lucide="x" class="w-4 h-4 text-rose-600 mt-1 flex-shrink-0"></i>
                <span>Professionnels de la politique sans aucune expérience du monde du travail réel.</span>
              </li>
            </ul>
          </div>

          <!-- New Model: Force Commune -->
          <div class="comparison-card-new space-y-4">
            <div class="flex items-center gap-3 pb-3 border-b border-navy-700 text-orange-400">
              <i data-lucide="check-circle" class="w-6 h-6 text-orange-500"></i>
              <h3 class="text-xl font-bold font-display text-white">La Méthode Force Commune</h3>
            </div>
            <ul class="space-y-3 text-sm text-slate-200">
              <li class="flex items-start gap-2.5">
                <i data-lucide="check-circle" class="w-4 h-4 text-orange-500 mt-1 flex-shrink-0"></i>
                <span><strong>Exemplarité :</strong> Réduction de 30% des élus et transparence totale des dépenses.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i data-lucide="check-circle" class="w-4 h-4 text-orange-500 mt-1 flex-shrink-0"></i>
                <span><strong>Choc Net :</strong> +350 €/mois sur les salaires et heures supplémentaires défiscalisées.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i data-lucide="check-circle" class="w-4 h-4 text-orange-500 mt-1 flex-shrink-0"></i>
                <span><strong>Écologie d'adhésion :</strong> Souveraineté nucléaire, trains fiables et aides directes.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i data-lucide="check-circle" class="w-4 h-4 text-orange-500 mt-1 flex-shrink-0"></i>
                <span><strong>Citoyens de terrain :</strong> 100% de nos candidats ont un métier actif et vérifiable.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>

    <!-- Section: Témoignages Citoyens -->
    <section class="py-20 bg-white border-t border-slate-200">
      <div class="section-container">
        
        <div class="max-w-2xl mb-12 space-y-3">
          <span class="badge badge-navy">La Voix du Réel</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display tracking-tight">
            Ils font la Belgique au quotidien
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            Découvrez pourquoi artisans, infirmières, enseignants et entrepreneurs rejoignent massivement Force Commune partout en Belgique.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${testimonialsData.slice(0, 3).map(test => `
            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-orange-300 transition-colors">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="badge badge-orange text-[10px]">${test.tag}</span>
                  <span class="text-xs text-slate-400 font-medium">${test.location}</span>
                </div>
                <p class="text-slate-700 text-sm leading-relaxed italic">
                  « ${test.quote} »
                </p>
              </div>

              <div class="pt-4 border-t border-slate-200 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-navy-900 text-orange-400 font-bold flex items-center justify-center font-display text-sm">
                  ${test.name.charAt(0)}
                </div>
                <div>
                  <h4 class="font-bold text-navy-950 text-sm">${test.name}</h4>
                  <p class="text-xs text-slate-500">${test.profession} (${test.age})</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>

    <!-- Section: Actualités & Agenda Régional -->
    <section class="py-20 bg-slate-50 border-t border-slate-200">
      <div class="section-container">
        
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span class="badge badge-orange mb-2">Sur le Terrain</span>
            <h2 class="text-3xl font-extrabold text-navy-950 font-display">
              Actualités & Tournée Citoyenne
            </h2>
          </div>
          <a href="#actualites" class="btn btn-outline text-sm" data-route="actualites">
            <span>Toutes les dates & articles</span>
            <i data-lucide="arrow-right" class="w-4 h-4 text-orange-500"></i>
          </a>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Latest 2 News Cards -->
          <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            ${newsData.slice(0, 2).map(item => `
              <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                <div class="h-44 bg-navy-950 relative">
                  <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover opacity-85">
                  <span class="absolute top-3 left-3 badge badge-dark">${item.category}</span>
                </div>
                <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div class="space-y-2">
                    <span class="text-xs text-slate-400 font-medium">${item.date}</span>
                    <h3 class="font-bold text-base text-navy-950 line-clamp-2 hover:text-orange-600 transition-colors">
                      ${item.title}
                    </h3>
                    <p class="text-xs text-slate-600 line-clamp-3">
                      ${item.summary}
                    </p>
                  </div>
                  <a href="#actualites" class="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 pt-2" data-route="actualites">
                    <span>Lire l'article complet</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                  </a>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Upcoming Meetings Tour Agenda Box -->
          <div class="bg-navy-950 text-white rounded-2xl p-6 border border-navy-800 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="flex items-center justify-between border-b border-navy-800 pb-3">
                <div class="flex items-center gap-2">
                  <i data-lucide="calendar" class="w-5 h-5 text-orange-500"></i>
                  <h3 class="font-bold text-base font-display">Prochaines Réunions</h3>
                </div>
                <span class="badge badge-orange text-[10px]">Entrée Libre</span>
              </div>

              <div class="space-y-3.5">
                ${regionalTourEvents.slice(0, 3).map(ev => `
                  <div class="p-3 rounded-xl bg-navy-900 border border-navy-800 flex items-start justify-between gap-3">
                    <div>
                      <div class="font-bold text-sm text-white">${ev.city}</div>
                      <div class="text-xs text-slate-400">${ev.venue} • ${ev.date} (${ev.time})</div>
                      <div class="text-[11px] text-orange-400 font-medium mt-0.5">${ev.topic}</div>
                    </div>
                    <button class="btn-rsvp btn btn-primary text-[11px] py-1 px-2.5 rounded-md" data-city="${ev.city}">
                      S'inscrire
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>

            <a href="#actualites" class="btn btn-outline text-xs text-white border-navy-700 hover:text-orange-400 w-full justify-center mt-4" data-route="actualites">
              <span>Voir les 7 dates en Belgique</span>
            </a>
          </div>

        </div>

      </div>
    </section>

    <!-- Final Call to Action -->
    <section class="py-20 lg:py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden">
      <div class="section-container relative z-10">
        <div class="max-w-3xl mx-auto text-center space-y-6">
          <span class="badge badge-orange">Passez à l'Action</span>
          <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            La Belgique ne changera pas toute seule.
          </h2>
          <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
            Rejoignez des milliers de citoyens qui refusent la fatalité. Adhérez, devenez bénévole ou soutenez financièrement un mouvement 100% libre et indépendant.
          </p>

          <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a href="#nous-rejoindre" class="btn btn-primary text-base py-3.5 px-8 shadow-orange" data-route="nous-rejoindre">
              <i data-lucide="check-circle" class="w-5 h-5"></i>
              <span>Adhérer à Force Commune</span>
            </a>
            <button class="btn btn-outline text-white border-navy-700 bg-navy-900/80 hover:text-orange-400 text-base py-3.5 px-7" data-action="open-donation">
              <i data-lucide="heart" class="w-5 h-5 text-orange-500"></i>
              <span>Faire un don défiscalisé (45%)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 2. Le Mouvement View
function renderLeMouvement() {
  return `
    <div class="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
      <div class="section-container relative z-10">
        <div class="max-w-3xl space-y-4">
          <span class="badge badge-orange">Notre Histoire & Nos Valeurs</span>
          <h1 class="text-3xl sm:text-5xl font-extrabold font-display">
            Le Mouvement Force Commune
          </h1>
          <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
            Force Commune est né d'un constat simple mais impitoyable : notre pays est gouverné par des états-majors politiques déconnectés qui ne connaissent ni la réalité du travail, ni le coût de la vie.
          </p>
        </div>
      </div>
    </div>

    <!-- Charte Éthique & 10 Principes -->
    <section class="py-16 bg-white border-b border-slate-200">
      <div class="section-container">
        
        <div class="max-w-3xl mb-12 space-y-3">
          <span class="badge badge-navy">Exemplarité & Transparence</span>
          <h2 class="text-3xl font-bold text-navy-950 font-display">
            La Charte des 10 Engagements Inviolables
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            Tout candidat et représentant de Force Commune s'engage par serment écrit sur ces 10 règles strictes.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${[
            { num: "01", title: "Zéro Cumul des Mandats", desc: "Un élu, un seul mandat. Fin du cumul des fonctions de bourgmestre, député et administrateur d'intercommunale." },
            { num: "02", title: "Expérience Professionnelle Réelle", desc: "Tout candidat aux élections doit justifier d'au moins 5 années d'activité professionnelle rémunérée hors des partis." },
            { num: "03", title: "Plafonnement des Indemnités", desc: "Aucun représentant Force Commune ne percevra plus de 2 fois le salaire médian des travailleurs belges." },
            { num: "04", title: "Transparence Totale des Comptes", desc: "Publication trimestrielle en ligne de l'intégralité des dépenses et recettes du mouvement au centime près." },
            { num: "05", title: "Casier Judiciaire Vierge", desc: "Exclusion immédiate et inéligibilité à vie pour toute condamnation liée à la gestion publique ou à la fraude." },
            { num: "06", title: "Financement 100% Citoyen", desc: "Refus de tout financement opaque, lobby industriel ou subvention conditionnée." },
            { num: "07", title: "Commissions Citoyennes de Contrôle", desc: "Nos élus sont évalués annuellement par des jurys de citoyens tirés au sort parmi les adhérents." },
            { num: "08", title: "Suppression des Privilèges de Pension", desc: "Cotisation et calcul de pension identiques au régime général des salariés et indépendants." },
            { num: "09", title: "Discipline Républicaine & Respect", desc: "Condamnation sans concession de toute dérive violente ou communautariste." },
            { num: "10", title: "Obligation de Résultat", desc: "Chaque proposition adoptée fait l'objet d'une clause d'évaluation chiffrée après 24 mois." }
          ].map(c => `
            <div class="p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <span class="w-9 h-9 rounded-lg bg-navy-900 text-orange-400 font-bold font-display flex items-center justify-center flex-shrink-0 text-sm">
                ${c.num}
              </span>
              <div class="space-y-1">
                <h4 class="font-bold text-navy-950 text-base">${c.title}</h4>
                <p class="text-xs text-slate-600 leading-relaxed">${c.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>

    <!-- Fédérations & Carte d'Action -->
    <section class="py-16 bg-slate-50">
      <div class="section-container">
        <div class="max-w-3xl mb-10 space-y-3">
          <span class="badge badge-orange">Présence Territoriale</span>
          <h2 class="text-3xl font-bold text-navy-950 font-display">
            14 Fédérations Locales & Cercles Citoyens
          </h2>
          <p class="text-slate-600 text-sm">
            Notre force réside dans nos racines locales. Contactez vos coordinateurs de terrain.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${[
            { region: "Bruxelles-Capitale", head: "19 Communes", contact: "bruxelles@forcecommune.be", meetings: "Chaque 2e mardi du mois" },
            { region: "Liège & Métropole", head: "Bassin Liégeois & Verviers", contact: "liege@forcecommune.be", meetings: "Chaque 1er jeudi" },
            { region: "Namur & Condroz", head: "Grand Namur & Dinant", contact: "namur@forcecommune.be", meetings: "Chaque 3e mercredi" },
            { region: "Charleroi & Sambre", head: "Bassin Industriel", contact: "charleroi@forcecommune.be", meetings: "Chaque 2e jeudi" },
            { region: "Brabant Wallon", head: "Wavre, Nivelles, Waterloo", contact: "brabant@forcecommune.be", meetings: "Chaque 1er lundi" },
            { region: "Mons-Borinage & Centre", head: "Hainaut Occidental", contact: "mons@forcecommune.be", meetings: "Chaque 3e jeudi" },
            { region: "Luxembourg Belge", head: "Arlon, Libramont, Marche", contact: "luxembourg@forcecommune.be", meetings: "Chaque 4e samedi" },
            { region: "Wallonie Picarde", head: "Tournai, Mouscron, Ath", contact: "wapi@forcecommune.be", meetings: "Chaque 2e vendredi" }
          ].map(f => `
            <div class="p-5 bg-white rounded-xl border border-slate-200 space-y-2 hover:border-orange-400 transition-colors">
              <div class="font-bold text-navy-950 text-base">${f.region}</div>
              <div class="text-xs text-orange-600 font-semibold">${f.head}</div>
              <div class="text-xs text-slate-500 pt-2 border-t border-slate-100">${f.meetings}</div>
              <a href="mailto:${f.contact}" class="text-xs text-navy-700 hover:text-orange-600 flex items-center gap-1 font-medium">
                <i data-lucide="mail" class="w-3.5 h-3.5"></i>
                <span>${f.contact}</span>
              </a>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 3. Nos Propositions View (Interactive Program & Fiscal Simulator)
function renderPropositions() {
  const filteredProposals = proposalsData.filter(prop => {
    const matchesCategory = state.activeProposalCategory === 'all' || prop.category === state.activeProposalCategory;
    const matchesSearch = state.proposalSearchQuery === '' || 
      prop.title.toLowerCase().includes(state.proposalSearchQuery.toLowerCase()) ||
      prop.summary.toLowerCase().includes(state.proposalSearchQuery.toLowerCase()) ||
      prop.searchKeywords.toLowerCase().includes(state.proposalSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return `
    <div class="bg-navy-950 text-white py-14 relative overflow-hidden">
      <div class="section-container relative z-10">
        <div class="max-w-3xl space-y-4">
          <span class="badge badge-orange">Le Programme de l'Action</span>
          <h1 class="text-3xl sm:text-5xl font-extrabold font-display">
            Nos Propositions Concrètes
          </h1>
          <p class="text-slate-300 text-base leading-relaxed">
            Consultez nos 11 engagements chiffrés pour restaurer le pouvoir d'achat, réformer l'État, garantir la sécurité et soutenir ceux qui créent la valeur.
          </p>
        </div>
      </div>
    </div>

    <!-- Fiscal Gain Simulator -->
    <section class="py-12 bg-orange-50/60 border-b border-orange-200">
      <div class="section-container">
        <div class="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-orange-200 shadow-lg space-y-6">
          
          <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div class="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center flex-shrink-0">
              <i data-lucide="trending-up" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold font-display text-navy-950">Simulateur : Votre Gain avec la Réforme Force Commune</h3>
              <p class="text-xs text-slate-500">Estimez votre gain net annuel grâce à la baisse du précompte et la défiscalisation des heures sup.</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <!-- Controls -->
            <div class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Votre Statut Professionnel</label>
                <div class="grid grid-cols-3 gap-2" id="sim-status-buttons">
                  <button type="button" class="sim-btn text-xs py-2 px-3 rounded-lg border font-semibold ${state.calcProfile === 'salarie' ? 'bg-navy-900 text-white border-navy-900' : 'bg-slate-50 text-slate-700 border-slate-200'}" data-profile="salarie">Salarié</button>
                  <button type="button" class="sim-btn text-xs py-2 px-3 rounded-lg border font-semibold ${state.calcProfile === 'independant' ? 'bg-navy-900 text-white border-navy-900' : 'bg-slate-50 text-slate-700 border-slate-200'}" data-profile="independant">Indépendant</button>
                  <button type="button" class="sim-btn text-xs py-2 px-3 rounded-lg border font-semibold ${state.calcProfile === 'soignant' ? 'bg-navy-900 text-white border-navy-900' : 'bg-slate-50 text-slate-700 border-slate-200'}" data-profile="soignant">Soignant / Prof</button>
                </div>
              </div>

              <div>
                <div class="flex justify-between items-center mb-1">
                  <label class="text-xs font-bold text-slate-700 uppercase tracking-wider">Salaire Brut Mensuel :</label>
                  <span class="text-sm font-extrabold text-navy-900" id="sim-salary-display">${state.calcGrossSalary} € / mois</span>
                </div>
                <input 
                  type="range" 
                  min="2000" 
                  max="6500" 
                  step="100" 
                  value="${state.calcGrossSalary}" 
                  id="sim-salary-slider" 
                  class="w-full accent-orange-500 cursor-pointer"
                >
                <div class="flex justify-between text-[10px] text-slate-400">
                  <span>2 000 € (Smic/Début)</span>
                  <span>4 000 € (Moyen)</span>
                  <span>6 500 €</span>
                </div>
              </div>
            </div>

            <!-- Result Card -->
            <div class="p-6 rounded-xl bg-navy-950 text-white space-y-4 border border-navy-800">
              <span class="text-xs text-orange-400 font-bold uppercase tracking-widest block">Votre Gain Estimé</span>
              <div class="flex items-baseline gap-2">
                <span class="text-4xl font-extrabold font-display text-orange-500" id="sim-gain-month">+385 €</span>
                <span class="text-sm text-slate-300">/ mois net en plus</span>
              </div>
              <div class="text-xs text-slate-400 border-t border-navy-800 pt-3 space-y-1">
                <div>• Soit un gain net annuel direct de <strong class="text-white" id="sim-gain-year">+4 620 € / an</strong></div>
                <div>• 100% des heures sup exonérées de cotisations</div>
                <div>• Protection intégrale de votre pouvoir d'achat face à l'inflation</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- Search and Filters Bar -->
    <section class="py-12 bg-slate-50">
      <div class="section-container space-y-8">
        
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <!-- Category Pills -->
          <div class="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0" id="prop-category-pills">
            ${categories.map(cat => `
              <button 
                class="category-pill whitespace-nowrap text-xs font-bold py-2 px-3.5 rounded-xl border transition-all ${state.activeProposalCategory === cat.id ? 'bg-navy-900 text-white border-navy-900 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:border-orange-400'}"
                data-category="${cat.id}"
              >
                ${cat.name}
              </button>
            `).join('')}
          </div>

          <!-- Search Input -->
          <div class="relative w-full md:w-72 flex-shrink-0">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input 
              type="text" 
              id="prop-search-input" 
              placeholder="Rechercher une mesure..." 
              value="${state.proposalSearchQuery}"
              class="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-orange-500"
            >
          </div>

        </div>

        <!-- Proposals Results Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${filteredProposals.length > 0 ? filteredProposals.map(prop => `
            <div class="proposal-card">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="badge badge-navy">${prop.badge}</span>
                  <span class="text-[11px] text-slate-400 font-medium">${prop.timeline}</span>
                </div>

                <h3 class="text-lg font-bold text-navy-950 font-display">
                  ${prop.title}
                </h3>

                <p class="text-xs text-orange-600 font-semibold">
                  ${prop.tagline}
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                  ${prop.summary}
                </p>

                <ul class="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  ${prop.details.map(d => `
                    <li class="flex items-start gap-1.5">
                      <i data-lucide="check-circle" class="w-3.5 h-3.5 text-orange-500 mt-0.5 flex-shrink-0"></i>
                      <span>${d}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <div class="pt-4 mt-4 border-t border-slate-100 text-xs text-slate-500">
                <strong>Financement :</strong> ${prop.costing}
              </div>
            </div>
          `).join('') : `
            <div class="col-span-full py-12 text-center text-slate-500">
              <i data-lucide="search" class="w-8 h-8 text-slate-300 mx-auto mb-2"></i>
              <p>Aucune proposition ne correspond à votre recherche.</p>
            </div>
          `}
        </div>

      </div>
    </section>
  `;
}

// 4. Actualités & Terrain View
function renderActualites() {
  return `
    <div class="bg-navy-950 text-white py-14 relative overflow-hidden">
      <div class="section-container relative z-10">
        <div class="max-w-3xl space-y-4">
          <span class="badge badge-orange">Presse & Terrain</span>
          <h1 class="text-3xl sm:text-5xl font-extrabold font-display">
            Actualités & Rencontres Citoyennes
          </h1>
          <p class="text-slate-300 text-base leading-relaxed">
            Suivez les prises de position, les tribunes officielles et l'agenda des rencontres publiques de Force Commune à travers la Belgique.
          </p>
        </div>
      </div>
    </div>

    <section class="py-16 bg-slate-50">
      <div class="section-container space-y-12">
        
        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${newsData.map(item => `
            <article class="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all">
              <div class="h-48 bg-navy-950 relative">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover opacity-85">
                <span class="absolute top-3 left-3 badge badge-dark">${item.category}</span>
                <span class="absolute bottom-3 right-3 text-[10px] bg-navy-950/80 px-2 py-0.5 rounded text-slate-300">${item.readingTime}</span>
              </div>
              
              <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div class="space-y-2.5">
                  <div class="text-xs text-slate-400 font-semibold">${item.date} • ${item.author}</div>
                  <h3 class="text-lg font-bold text-navy-950 font-display hover:text-orange-600 transition-colors">
                    ${item.title}
                  </h3>
                  <div class="text-xs text-slate-600 leading-relaxed prose prose-sm">
                    ${item.summary}
                  </div>
                </div>

                <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span class="badge badge-orange text-[10px]">${item.badge}</span>
                  <button class="text-xs font-bold text-navy-900 hover:text-orange-600 flex items-center gap-1" onclick="alert('Article archivé dans la lettre officielle.')">
                    <span>Lire</span>
                    <i data-lucide="chevron-right" class="w-4 h-4 text-orange-500"></i>
                  </button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>

        <!-- Regional Tour Full Schedule Table -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 gap-2">
            <div>
              <span class="badge badge-orange text-[10px] mb-1">Calendrier Officiel</span>
              <h3 class="text-2xl font-bold text-navy-950 font-display">La Grande Tournée des Communes 2026</h3>
            </div>
            <span class="text-xs text-slate-500 font-medium">Inscription libre dans la limite des places disponibles</span>
          </div>

          <div class="divide-y divide-slate-100">
            ${regionalTourEvents.map(ev => `
              <div class="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-navy-950 text-base">${ev.city}</span>
                    <span class="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">${ev.topic}</span>
                  </div>
                  <div class="text-xs text-slate-500 flex items-center gap-2">
                    <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400"></i>
                    <span>${ev.venue}</span>
                    <span>•</span>
                    <i data-lucide="calendar" class="w-3.5 h-3.5 text-slate-400"></i>
                    <span>${ev.date} à ${ev.time}</span>
                  </div>
                </div>
                <button class="btn-rsvp btn btn-primary text-xs py-1.5 px-4 self-start sm:self-auto" data-city="${ev.city}">
                  <span>Réserver ma place</span>
                  <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </button>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </section>
  `;
}

// 5. Nous Rejoindre View (Interactive Membership & Donation Simulator)
function renderNousRejoindre() {
  return `
    <div class="bg-navy-950 text-white py-14 relative overflow-hidden">
      <div class="section-container relative z-10">
        <div class="max-w-3xl space-y-4">
          <span class="badge badge-orange">Adhésion & Engagement</span>
          <h1 class="text-3xl sm:text-5xl font-extrabold font-display">
            Rejoignez Force Commune
          </h1>
          <p class="text-slate-300 text-base leading-relaxed">
            Rejoignez une communauté de citoyens engagés, prenez part aux votes internes sur les propositions de loi et construisez avec nous l'alternative républicaine en Belgique.
          </p>
        </div>
      </div>
    </div>

    <section class="py-16 bg-slate-50">
      <div class="section-container">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <!-- Left: 3-Step Membership Form -->
          <div class="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div class="border-b border-slate-100 pb-4">
              <span class="badge badge-navy text-[10px] mb-1">Formulaire d'Adhésion</span>
              <h3 class="text-2xl font-bold font-display text-navy-950">Devenir Membre Actif</h3>
              <p class="text-xs text-slate-500">Adhésion annuelle libre à partir de 10 € (droit de vote aux assemblées générales inclus).</p>
            </div>

            <form id="membership-full-form" class="space-y-4">
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Prénom *</label>
                  <input type="text" required placeholder="ex: Laurent" class="form-input">
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Nom *</label>
                  <input type="text" required placeholder="ex: Dubois" class="form-input">
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Email *</label>
                  <input type="email" required placeholder="ex: l.dubois@gmail.com" class="form-input">
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Téléphone</label>
                  <input type="tel" placeholder="ex: +32 470 12 34 56" class="form-input">
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Code Postal & Commune *</label>
                  <input type="text" required placeholder="ex: 5000 Namur" class="form-input">
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Profession / Secteur d'activité</label>
                  <input type="text" placeholder="ex: Menuisier, Infirmière, Enseignant..." class="form-input">
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Comment souhaitez-vous vous impliquer ?</label>
                <select class="form-select">
                  <option>Adhérent votant (participation aux votes & assemblées)</option>
                  <option>Bénévole de terrain (tractage, affichage, logistique)</option>
                  <option>Expert métier / Groupe thématique (santé, école, fiscalité)</option>
                  <option>Porte-parole local ou candidat aux élections</option>
                  <option>Simple sympathisant de soutien</option>
                </select>
              </div>

              <div class="pt-2">
                <label class="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                  <input type="checkbox" required class="mt-1 accent-orange-500 rounded">
                  <span>J'accepte la Charte Éthique de Force Commune et certifie l'exactitude de mes informations.</span>
                </label>
              </div>

              <button type="submit" class="btn btn-primary w-full justify-center py-3.5 text-base shadow-orange">
                <i data-lucide="check-circle" class="w-5 h-5"></i>
                <span>Valider mon adhésion citoyenne</span>
              </button>
            </form>
          </div>

          <!-- Right: Donation Simulator (Tax deduction 45%) -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 space-y-6">
              <div class="border-b border-navy-800 pb-4">
                <span class="badge badge-orange text-[10px] mb-1">Financement Citoyen</span>
                <h3 class="text-xl font-bold font-display">Simulateur de Don Défiscalisé</h3>
                <p class="text-xs text-slate-400">En Belgique, tout don à partir de 40 €/an ouvre droit à une réduction d'impôt légale de 45%.</p>
              </div>

              <!-- Quick amounts -->
              <div class="grid grid-cols-3 gap-2.5" id="page-donation-pills">
                <button type="button" class="donation-pill ${state.selectedDonationAmount === 40 ? 'active' : ''}" data-val="40">
                  <span class="text-base font-bold">40 €</span>
                  <span class="text-[9px] text-slate-500 block">Coût: 22 €</span>
                </button>
                <button type="button" class="donation-pill ${state.selectedDonationAmount === 100 ? 'active' : ''}" data-val="100">
                  <span class="text-base font-bold">100 €</span>
                  <span class="text-[9px] text-slate-500 block">Coût: 55 €</span>
                </button>
                <button type="button" class="donation-pill ${state.selectedDonationAmount === 250 ? 'active' : ''}" data-val="250">
                  <span class="text-base font-bold">250 €</span>
                  <span class="text-[9px] text-slate-500 block">Coût: 137,50 €</span>
                </button>
              </div>

              <!-- Real Cost Calculation Box -->
              <div class="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-2">
                <div class="flex justify-between text-xs text-slate-300">
                  <span>Montant de votre versement :</span>
                  <strong class="text-white" id="page-don-initial">${state.selectedDonationAmount} €</strong>
                </div>
                <div class="flex justify-between text-xs text-orange-400">
                  <span>Déduction fiscale belge (-45%) :</span>
                  <strong id="page-don-deduct">-${(state.selectedDonationAmount * 0.45).toFixed(2)} €</strong>
                </div>
                <div class="flex justify-between text-sm font-bold text-white border-t border-navy-800 pt-2">
                  <span>Coût réel net pour vous :</span>
                  <strong class="text-orange-500 text-base" id="page-don-final">${(state.selectedDonationAmount * 0.55).toFixed(2)} €</strong>
                </div>
              </div>

              <button class="btn btn-primary w-full justify-center py-3" data-action="open-donation">
                <i data-lucide="lock" class="w-4 h-4"></i>
                <span>Procéder au don sécurisé</span>
              </button>
            </div>

            <!-- Guarantee Box -->
            <div class="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <h4 class="font-bold text-navy-950 text-sm flex items-center gap-2">
                <i data-lucide="shield-check" class="w-4 h-4 text-orange-500"></i>
                Garantie d'Indépendance
              </h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                Notre comptabilité est vérifiée par un réviseur d'entreprises indépendant et publiée chaque trimestre en Open Data sur notre site. Vos données personnelles restent strictement confidentielles (RGPD).
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

// 6. Contact & Presse View
function renderContact() {
  return `
    <div class="bg-navy-950 text-white py-14 relative overflow-hidden">
      <div class="section-container relative z-10">
        <div class="max-w-3xl space-y-4">
          <span class="badge badge-orange">Écoute & Médias</span>
          <h1 class="text-3xl sm:text-5xl font-extrabold font-display">
            Contact & Espace Presse
          </h1>
          <p class="text-slate-300 text-base leading-relaxed">
            Une question sur notre programme, une proposition de loi citoyenne à soumettre ou une demande d'interview presse ? Écrivez-nous directement.
          </p>
        </div>
      </div>
    </div>

    <section class="py-16 bg-slate-50">
      <div class="section-container">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <!-- Contact Form -->
          <div class="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div class="border-b border-slate-100 pb-4">
              <h3 class="text-xl font-bold font-display text-navy-950">Envoyer un Message au Mouvement</h3>
              <p class="text-xs text-slate-500">Réponse garantie sous 48 heures ouvrables par un coordinateur de terrain.</p>
            </div>

            <form id="contact-full-form" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Votre Nom & Prénom *</label>
                  <input type="text" required placeholder="ex: Valérie Martin" class="form-input">
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Votre Email *</label>
                  <input type="email" required placeholder="ex: v.martin@skynet.be" class="form-input">
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Objet de votre demande *</label>
                <select class="form-select">
                  <option>Demande d'information générale / Adhésion</option>
                  <option>Contact Presse & Interview de porte-parole</option>
                  <option>Proposition d'amendement citoyen au programme</option>
                  <option>Signalement d'un problème local dans ma commune</option>
                  <option>Invitation à un débat / table ronde</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Votre Message *</label>
                <textarea rows="5" required placeholder="Écrivez votre message détaillé ici..." class="form-textarea"></textarea>
              </div>

              <button type="submit" class="btn btn-primary w-full justify-center py-3 text-base shadow-orange">
                <i data-lucide="send" class="w-4 h-4"></i>
                <span>Envoyer mon message</span>
              </button>
            </form>
          </div>

          <!-- Press & Directory Cards -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="p-6 rounded-2xl bg-navy-950 text-white border border-navy-800 space-y-4">
              <span class="badge badge-orange text-[10px]">Espace Presse & Médias</span>
              <h4 class="font-bold text-lg font-display">Kit Presse Officiel 2026</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                Téléchargez notre dossier de presse officiel, les logos vectoriels, photos libres de droits et la biographie des porte-paroles de Force Commune.
              </p>
              <button class="btn btn-primary text-xs w-full justify-center" onclick="alert('Téléchargement du dossier de presse Force Commune (PDF 12 pages)')">
                <i data-lucide="download" class="w-4 h-4"></i>
                <span>Télécharger le Kit Média (PDF & Assets)</span>
              </button>
              <div class="text-[11px] text-slate-400 pt-2 border-t border-navy-800">
                Contact presse direct : <a href="mailto:presse@forcecommune.be" class="text-orange-400 underline">presse@forcecommune.be</a>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <h4 class="font-bold text-navy-950 text-sm">Siège & Secrétariat Général</h4>
              <div class="text-xs text-slate-600 space-y-1.5">
                <p><strong>Adresse :</strong> Boulevard du Régent 45, 1000 Bruxelles</p>
                <p><strong>Permanence :</strong> Du lundi au vendredi de 9h à 18h</p>
                <p><strong>Email :</strong> contact@forcecommune.be</p>
                <p><strong>N° Entreprise (BCE) :</strong> 0845.912.304</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

// -------------------------------------------------------------
// MANIFESTE DYNAMIQUE — Chargement depuis Google Docs
// -------------------------------------------------------------

/**
 * Orchestrateur d'affichage de la modale Manifeste.
 * Gère les états : loading → content | iframe-fallback | error
 * @param {boolean} forceReload — Si true, ignore le cache et recharge
 */
async function loadAndDisplayManifesto(forceReload = false) {
  const loadingEl = document.getElementById('manifeste-loading');
  const contentEl = document.getElementById('manifeste-content');
  const iframeEl  = document.getElementById('manifeste-iframe-fallback');
  const errorEl   = document.getElementById('manifeste-error');
  const liveBadge = document.getElementById('manifeste-live-badge');

  if (!loadingEl) return; // Modale non ouverte

  // Afficher l'état de chargement
  const showState = (state) => {
    loadingEl.style.display = state === 'loading' ? 'flex' : 'none';
    contentEl.style.display = state === 'content' ? 'block' : 'none';
    iframeEl.style.display  = state === 'iframe'  ? 'flex'  : 'none';
    errorEl.style.display   = state === 'error'   ? 'flex'  : 'none';
  };

  showState('loading');

  try {
    const result = await loadManifesto();

    if (result && result.html) {
      // Succès : contenu parsé et stylisé
      contentEl.innerHTML = result.html;
      showState('content');
      createIcons({ icons, root: contentEl });
      if (liveBadge) liveBadge.style.display = 'flex';
    } else {
      // Fallback : l'iframe Google Docs directement
      const iframeTag = document.getElementById('manifeste-iframe');
      if (iframeTag) {
        // Charger l'iframe seulement si pas déjà chargée (ou si forceReload)
        if (forceReload || !iframeTag.src || iframeTag.src === window.location.href) {
          iframeTag.src = MANIFESTO_CONFIG.embedUrl;
        }
      }
      showState('iframe');
      if (liveBadge) liveBadge.style.display = 'none';
    }
  } catch (err) {
    console.error('[Force Commune] Erreur chargement manifeste:', err);

    // Dernier recours : iframe
    const iframeTag = document.getElementById('manifeste-iframe');
    if (iframeTag && (!iframeTag.src || iframeTag.src === window.location.href)) {
      iframeTag.src = MANIFESTO_CONFIG.embedUrl;
      showState('iframe');
    } else {
      showState('error');
    }
  }
}

// -------------------------------------------------------------
// ROUTER & CONTROLLERS
// -------------------------------------------------------------

function navigateTo(route) {
  state.currentRoute = route;
  
  // Render View
  switch (route) {
    case 'le-mouvement':
      appRoot.innerHTML = renderLeMouvement();
      break;
    case 'propositions':
      appRoot.innerHTML = renderPropositions();
      break;
    case 'actualites':
      appRoot.innerHTML = renderActualites();
      break;
    case 'nous-rejoindre':
      appRoot.innerHTML = renderNousRejoindre();
      break;
    case 'contact':
      appRoot.innerHTML = renderContact();
      break;
    case 'boussole':
    case 'accueil':
    default:
      appRoot.innerHTML = renderAccueil();
      if (route === 'boussole') {
        setTimeout(() => {
          document.getElementById('boussole')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      break;
  }

  // Update Nav links active states
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    if (link.dataset.route === route) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Re-initialize Lucide icons
  createIcons({ icons, root: appRoot });
  
  // Scroll to top
  if (route !== 'boussole') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Close mobile menu if open
  closeMobileMenu();

  // Attach dynamic event listeners for the rendered view
  bindDynamicEvents();
}

function bindDynamicEvents() {
  // 1. Pillar modal openers
  document.querySelectorAll('[data-open-pillar]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pillarId = btn.dataset.openPillar;
      openPillarModal(pillarId);
    });
  });

  // 2. Manifeste modal openers — chargement dynamique depuis Google Docs
  async function openManifesteModal() {
    manifesteModal.showModal();
    createIcons({ icons, root: manifesteModal });
    await loadAndDisplayManifesto(false);
  }

  document.getElementById('btn-read-manifeste-hero')?.addEventListener('click', openManifesteModal);
  document.getElementById('btn-read-manifeste-body')?.addEventListener('click', openManifesteModal);

  // Bouton de rechargement forcé (invalide le cache)
  document.getElementById('btn-reload-manifeste')?.addEventListener('click', async () => {
    invalidateManifestoCache();
    const reloadBtn = document.getElementById('btn-reload-manifeste');
    if (reloadBtn) {
      reloadBtn.style.transform = 'rotate(360deg)';
      reloadBtn.style.transition = 'transform 0.5s ease';
      setTimeout(() => { reloadBtn.style.transform = ''; }, 600);
    }
    await loadAndDisplayManifesto(true);
  });

  // Bouton Réessayer (état erreur)
  document.getElementById('btn-retry-manifeste')?.addEventListener('click', async () => {
    await loadAndDisplayManifesto(true);
  });

  // 3. Donation modal openers
  document.querySelectorAll('[data-action="open-donation"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      donationModal.showModal();
      createIcons({ icons, root: donationModal });
    });
  });

  // 4. RSVP buttons for events
  document.querySelectorAll('.btn-rsvp').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const city = btn.dataset.city;
      showToast(`Votre place pour la réunion de ${city} a été pré-réservée avec succès !`, 'success');
      btn.innerText = 'Inscrit ✓';
      btn.classList.add('bg-green-600', 'border-green-600');
    });
  });

  // 5. Fiscal Simulator Bindings (Propositions page)
  const salarySlider = document.getElementById('sim-salary-slider');
  if (salarySlider) {
    salarySlider.addEventListener('input', (e) => {
      state.calcGrossSalary = parseInt(e.target.value);
      updateFiscalSimulator();
    });

    document.querySelectorAll('.sim-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.calcProfile = btn.dataset.profile;
        document.querySelectorAll('.sim-btn').forEach(b => {
          b.className = `sim-btn text-xs py-2 px-3 rounded-lg border font-semibold ${b.dataset.profile === state.calcProfile ? 'bg-navy-900 text-white border-navy-900' : 'bg-slate-50 text-slate-700 border-slate-200'}`;
        });
        updateFiscalSimulator();
      });
    });
  }

  // 6. Proposal Search & Filter Bindings
  const searchInput = document.getElementById('prop-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.proposalSearchQuery = e.target.value;
      // Re-render only propositions view content
      if (state.currentRoute === 'propositions') {
        appRoot.innerHTML = renderPropositions();
        createIcons({ icons, root: appRoot });
        bindDynamicEvents();
        // keep focus in search input
        const newSearch = document.getElementById('prop-search-input');
        newSearch.focus();
        newSearch.setSelectionRange(newSearch.value.length, newSearch.value.length);
      }
    });

    document.querySelectorAll('.category-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        state.activeProposalCategory = pill.dataset.category;
        if (state.currentRoute === 'propositions') {
          appRoot.innerHTML = renderPropositions();
          createIcons({ icons, root: appRoot });
          bindDynamicEvents();
        }
      });
    });
  }

  // 7. Page Donation Pills (Nous Rejoindre)
  document.querySelectorAll('#page-donation-pills .donation-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      state.selectedDonationAmount = parseInt(pill.dataset.val);
      document.querySelectorAll('#page-donation-pills .donation-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      
      const initEl = document.getElementById('page-don-initial');
      const deductEl = document.getElementById('page-don-deduct');
      const finalEl = document.getElementById('page-don-final');
      if (initEl) initEl.innerText = `${state.selectedDonationAmount} €`;
      if (deductEl) deductEl.innerText = `-${(state.selectedDonationAmount * 0.45).toFixed(2)} €`;
      if (finalEl) finalEl.innerText = `${(state.selectedDonationAmount * 0.55).toFixed(2)} €`;
    });
  });

  // 8. Forms submissions with feedback
  document.getElementById('membership-full-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Félicitations ! Votre adhésion citoyenne à Force Commune a bien été enregistrée. Bienvenue parmi ceux qui font !', 'success');
    e.target.reset();
  });

  document.getElementById('contact-full-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Votre message a bien été transmis au secrétariat général de Force Commune.', 'success');
    e.target.reset();
  });

  document.getElementById('quick-donation-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    donationModal.close();
    showToast('Merci infiniment pour votre soutien civique et financier à Force Commune !', 'success');
    e.target.reset();
  });
}

function updateFiscalSimulator() {
  const salaryDisplay = document.getElementById('sim-salary-display');
  const gainMonthEl = document.getElementById('sim-gain-month');
  const gainYearEl = document.getElementById('sim-gain-year');
  
  if (!salaryDisplay || !gainMonthEl || !gainYearEl) return;

  salaryDisplay.innerText = `${state.calcGrossSalary.toLocaleString()} € / mois`;
  
  // Calculate gain based on salary & profile
  let monthlyMultiplier = 0.105; // ~10.5% net boost from bracket shifts
  if (state.calcProfile === 'independant') monthlyMultiplier = 0.12;
  if (state.calcProfile === 'soignant') monthlyMultiplier = 0.135; // overtime bonus included

  const monthlyGain = Math.round(state.calcGrossSalary * monthlyMultiplier);
  const annualGain = monthlyGain * 12;

  gainMonthEl.innerText = `+${monthlyGain} €`;
  gainYearEl.innerText = `+${annualGain.toLocaleString()} € / an`;
}

// Pillar Modal Content Renderer
function openPillarModal(pillarId) {
  const pillar = pillarsData.find(p => p.id === pillarId);
  if (!pillar) return;

  pillarModalContent.innerHTML = `
    <div class="relative h-56 sm:h-64 bg-navy-950 overflow-hidden">
      <img src="${pillar.image}" alt="${pillar.title}" class="w-full h-full object-cover opacity-85">
      <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
      
      <button type="button" class="close-modal-btn absolute top-4 right-4 p-2 bg-navy-900/80 backdrop-blur-md rounded-full text-white hover:text-orange-400 border border-navy-700 transition-colors" data-close-modal="pillar-modal">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>

      <div class="absolute bottom-4 left-6 right-6 text-white space-y-1">
        <span class="badge badge-orange text-[10px]">${pillar.badge}</span>
        <h3 class="text-2xl font-bold font-display">${pillar.number}. ${pillar.title}</h3>
        <p class="text-xs text-slate-300">${pillar.subtitle}</p>
      </div>
    </div>

    <div class="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
      <div class="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 space-y-4">
        ${pillar.deepContent}
      </div>

      <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
        <h5 class="font-bold text-navy-950 text-xs uppercase tracking-wider">Points Clés de la Réforme :</h5>
        <ul class="space-y-1.5 text-xs text-slate-600">
          ${pillar.highlights.map(h => `
            <li class="flex items-start gap-2">
              <i data-lucide="check-circle" class="w-3.5 h-3.5 text-orange-500 mt-0.5 flex-shrink-0"></i>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        <a href="#nous-rejoindre" class="btn btn-primary w-full sm:w-auto text-xs py-2.5" data-close-modal="pillar-modal" data-route="nous-rejoindre">
          <span>Je soutiens ce pilier</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </a>
        <button type="button" class="btn btn-ghost text-xs text-slate-500 w-full sm:w-auto" data-close-modal="pillar-modal">
          Fermer
        </button>
      </div>
    </div>
  `;

  pillarModal.showModal();
  createIcons({ icons, root: pillarModal });

  // Bind close buttons inside modal
  pillarModal.querySelectorAll('[data-close-modal]').forEach(b => {
    b.addEventListener('click', () => {
      pillarModal.close();
      if (b.dataset.route) {
        navigateTo(b.dataset.route);
      }
    });
  });
}

// Mobile Menu Handlers
function toggleMobileMenu() {
  const isOpen = mobileDrawer.classList.contains('open');
  if (!isOpen) {
    mobileDrawer.classList.add('open');
    menuIconOpen.classList.add('hidden');
    menuIconClose.classList.remove('hidden');
  } else {
    closeMobileMenu();
  }
}

function closeMobileMenu() {
  mobileDrawer.classList.remove('open');
  menuIconOpen.classList.remove('hidden');
  menuIconClose.classList.add('hidden');
}

// -------------------------------------------------------------
// INITIALIZATION
// -------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu button
  mobileMenuBtn.addEventListener('click', toggleMobileMenu);

  // Global link clicks routing
  document.addEventListener('click', (e) => {
    const routeLink = e.target.closest('[data-route]');
    if (routeLink) {
      e.preventDefault();
      const targetRoute = routeLink.dataset.route;
      window.location.hash = targetRoute;
      navigateTo(targetRoute);
      return;
    }

    const modalCloseBtn = e.target.closest('[data-close-modal]');
    if (modalCloseBtn) {
      const modalId = modalCloseBtn.dataset.closeModal;
      const modal = document.getElementById(modalId);
      if (modal) modal.close();
    }
  });

  // Header scroll detection for background blur/elevation
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // Footer Newsletter form
  document.getElementById('footer-newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('footer-newsletter-email');
    if (input && input.value) {
      showToast(`Merci ! Vous êtes bien inscrit à la Lettre de Terrain avec l'adresse ${input.value}.`, 'success');
      input.value = '';
    }
  });

  // Donation pills in quick modal
  document.querySelectorAll('#donation-quick-amounts .donation-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#donation-quick-amounts .donation-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // Listen to Hash Changes
  window.addEventListener('hashchange', () => {
    const route = window.location.hash.replace('#', '') || 'accueil';
    navigateTo(route);
  });

  // Initial Route Check
  const initialRoute = window.location.hash.replace('#', '') || 'accueil';
  navigateTo(initialRoute);
});
