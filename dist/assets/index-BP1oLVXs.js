(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const I=[{id:"pouvoir-achat",number:"01",title:"Pouvoir d’Achat & Valeur du Travail",subtitle:"Rendre au travail sa juste dignité et son pouvoir d’émancipation",image:"/images/pillar-pouvoir-achat.jpg",badge:"Priorité Économique",summary:"En Belgique, l'écart entre le travail et l'inactivité s'est dangereusement réduit. Nous proposons un choc fiscal immédiat sur les salaires et les indépendants pour garantir au moins 350 € nets supplémentaires par mois à ceux qui font tourner le pays.",highlights:["Baisse de 5% du précompte professionnel pour les bas et moyens salaires","Défiscalisation intégrale des heures supplémentaires sans plafond annuel","Harmonisation du statut fiscal et social des indépendants avec celui des salariés","Suppression des taxes bureaucratiques sur les PME et artisans locaux"],deepContent:`
      <h4>Le constat lucide</h4>
      <p>La Belgique est l'un des pays au monde qui taxe le plus lourdement le travail. Sur 100 € payés par l'employeur, le travailleur n'en perçoit parfois même pas 45. Ceux qui se lèvent tôt, qui prennent des risques et qui créent la valeur sont les plus pressurés.</p>
      
      <h4>Nos 3 mesures d'urgence</h4>
      <div class="modal-measures-list">
        <div class="modal-measure-item">
          <strong>1. Le Choc Net de 350 €/mois</strong> : Augmentation de la quotité exemptée d'impôt et réduction des tranches intermédiaires de l'IPP (Impôt des Personnes Physiques).
        </div>
        <div class="modal-measure-item">
          <strong>2. Heures supplémentaires 100% nettes</strong> : L'effort additionnel ne doit plus enrichir l'administration, mais directement le travailleur et sa famille.
        </div>
        <div class="modal-measure-item">
          <strong>3. Revalorisation des indépendants et artisans</strong> : Fin du piège des cotisations sociales forfaitaires de début d'activité et alignement des droits à la pension.
        </div>
      </div>
      
      <h4>Financement garanti</h4>
      <p>Financé par la rationalisation des 6 gouvernements et parlements régionaux belges et la suppression des doublons administratifs fédéraux/régionaux.</p>
    `},{id:"exemplarite",number:"02",title:"Nettoyage & Exemplarité de l’État",subtitle:"Un État sobre, transparent et exemplaire au service des citoyens",image:"/images/pillar-exemplarite.jpg",badge:"Réforme Institutionnelle",summary:"Avec 6 parlements, des centaines de ministres et des milliers de mandataires rémunérés, la Belgique est asphyxiée par sa particratie. Force Commune impose une réduction drastique du train de vie politique et une transparence totale.",highlights:["Réduction de 30% du nombre de parlementaires et de ministres","Plafonnement strict des indemnités des mandataires publics à 2x le salaire médian","Publication en Open Data de chaque euro de dépense publique supérieure à 500 €","Interdiction définitive du cumul des mandats et suppression des régimes spéciaux de retraite des élus"],deepContent:`
      <h4>La rupture avec la particratie</h4>
      <p>Les citoyens belges consentent des sacrifices quotidiens pendant que les états-majors des partis traditionnels s'auto-attribuent des subventions colossales et des structures doublonnées sans aucune obligation de résultat.</p>
      
      <h4>Nos 3 mesures d'urgence</h4>
      <div class="modal-measures-list">
        <div class="modal-measure-item">
          <strong>1. Réduction de 30% des parlements</strong> : Fusion des assemblées redondantes, suppression du Sénat croupion et limitation stricte de la taille des cabinets ministériels.
        </div>
        <div class="modal-measure-item">
          <strong>2. Régime de pension unique</strong> : Fin des privilèges de pension pour les députés et ministres ; alignement strict sur le régime général des travailleurs.
        </div>
        <div class="modal-measure-item">
          <strong>3. Casier judiciaire vierge obligatoire</strong> : Inéligibilité à vie pour tout élu condamné pour détournement de fonds publics, corruption ou prise illégale d'intérêts.
        </div>
      </div>
      
      <h4>Impact pour le citoyen</h4>
      <p>Économie directe estimée à plus de 1,8 milliard d'euros par an, réinjectée immédiatement dans les services de soins et l'école.</p>
    `},{id:"securite",number:"03",title:"Ordre & Protection des Citoyens",subtitle:"Retrouver la tranquillité dans les rues, les transports et les quartiers",image:"/images/pillar-securite.jpg",badge:"Sécurité du Quotidien",summary:"La sécurité n’est pas une option, c’est la condition minimale d’une vie digne. Nous instaurons des peines planchers en cas de récidive pour les délits de voie publique et redonnons aux forces de l’ordre les moyens et le soutien politique nécessaires pour agir réellement.",highlights:["Recrutement de 3 000 policiers de terrain supplémentaires et réarmement matériel","Peines planchers automatiques en cas de récidive pour les délits de voie publique","Création de centres éducatifs fermés pour les mineurs délinquants récidivistes","Sécurisation renforcée 24/7 des gares, métros et réseaux de transport en commun"],deepContent:`
      <h4>Le droit fondamental à la quiétude</h4>
      <p>Dans nos gares, nos centres-villes et nos quartiers, le sentiment d'insécurité grandit. La sécurité n’est pas une option, c’est la condition minimale d’une vie digne. Les honnêtes citoyens et les travailleurs méritent une protection absolue.</p>
      
      <h4>Nos 3 mesures d'urgence</h4>
      <div class="modal-measures-list">
        <div class="modal-measure-item">
          <strong>1. Peines planchers & Fin du sentiment d'impunité</strong> : Application stricte de peines incompressibles pour les violences urbaines et la récidive.
        </div>
        <div class="modal-measure-item">
          <strong>2. Police de proximité respectée et équipée</strong> : Sanctions pénales maximales pour tout outrage ou agression contre les policiers, pompiers et soignants.
        </div>
        <div class="modal-measure-item">
          <strong>3. Présence renforcée dans les transports</strong> : Brigades permanentes dans les gares et réseaux de transport public.
        </div>
      </div>
    `},{id:"education",number:"04",title:"Éducation d’Excellence",subtitle:"Former des citoyens capables, exigeants et préparés au monde de demain",image:"/images/pillar-education.jpg",badge:"Avenir & Exigence",summary:"L’école wallonne a trop longtemps accepté le nivellement par le bas. Nous imposons le retour aux fondamentaux, une évaluation nationale transparente des résultats et une formation continue obligatoire des enseignants, soutenue par les outils numériques et l’intelligence artificielle.",highlights:["Recentrage prioritaire sur le français, les mathématiques et la pensée critique","Évaluations nationales transparentes des acquis et résultats scolaires","Formation continue obligatoire des enseignants avec appui numérique et IA","Revalorisation prestigieuse de l'enseignement technique, pratique et de l'artisanat"],deepContent:`
      <h4>Refonder l'exigence éducative</h4>
      <p>L’ascenseur social passe par le savoir, l'effort et la transmission. Nous refusons le nivellement par le bas et voulons redonner à nos écoles les standards d'excellence que méritent nos enfants.</p>
      
      <h4>Nos 3 mesures d'urgence</h4>
      <div class="modal-measures-list">
        <div class="modal-measure-item">
          <strong>1. Maîtrise des fondamentaux dès le primaire</strong> : Accent absolu sur la lecture, l'écriture sans faute, le calcul mental et les sciences.
        </div>
        <div class="modal-measure-item">
          <strong>2. Soutien technologique & IA aux enseignants</strong> : Outils d'aide à la correction, suivi personnalisé des élèves et allègement des charges administratives.
        </div>
        <div class="modal-measure-item">
          <strong>3. Filières techniques et manuelles d'élite</strong> : Investissements massifs dans les équipements scolaires en lien avec le tissu économique local.
        </div>
      </div>
    `},{id:"ecologie",number:"05",title:"Transition qui donne envie",subtitle:"Rendre les choix écologiques plus simples, plus avantageux et plus attractifs",image:"/images/pillar-ecologie.jpg",badge:"Écologie d’Adhésion",summary:"Nous refusons une écologie punitive qui pèse d’abord sur ceux qui travaillent. Nous misons sur des alternatives concrètes et avantageuses : transports en commun gratuits pour les travailleurs, simplification des démarches et soutien prioritaire aux solutions qui améliorent à la fois le pouvoir d’achat et l’environnement.",highlights:["Transports en commun gratuits pour les travailleurs et demandeurs d'emploi","Primes directes simples et immédiates pour la rénovation thermique sans avance de frais","Soutien aux circuits courts, producteurs locaux et filières durables belges","Développement d'une énergie souveraine, propre et bon marché (prolongation nucléaire & SMR)"],deepContent:`
      <h4>Une écologie d'adhésion populaire</h4>
      <p>Pour réussir la transition environnementale, celle-ci doit être vécue comme une opportunité de progrès et de pouvoir d'achat, jamais comme une punition fiscale contre les classes moyennes et populaires.</p>
      
      <h4>Nos 3 mesures d'urgence</h4>
      <div class="modal-measures-list">
        <div class="modal-measure-item">
          <strong>1. Gratuité des transports pour les actifs</strong> : Rendre le train et le bus plus attractifs et fiables pour les trajets domicile-travail.
        </div>
        <div class="modal-measure-item">
          <strong>2. Choc d'isolation sans tracasserie</strong> : Prise en charge directe des travaux d'efficacité énergétique des logements modestes.
        </div>
        <div class="modal-measure-item">
          <strong>3. Énergie propre et accessible</strong> : Garantir une électricité décarbonée abordable pour protéger la compétitivité et le budget des ménages.
        </div>
      </div>
    `},{id:"sante-retraites",number:"06",title:"Santé & Retraites Dignes",subtitle:"Protéger concrètement ceux qui ont travaillé et ceux qui ont besoin de soins",image:"/images/pillar-sante.jpg",badge:"Droits Sociaux",summary:"La santé et les retraites ne sont pas des variables d’ajustement budgétaire. Force Commune garantit l’accès à des soins de qualité pour tous et des pensions dignes pour ceux qui ont cotisé toute leur vie. Nous refusons les économies qui frappent d’abord les malades et les pensionnés, tout en luttant fermement contre les abus qui menacent la pérennité du système.",highlights:["Garantie d'une pension minimale décente pour toute carrière complète","Lutte contre les déserts médicaux et revalorisation du personnel soignant","Remboursement garanti des soins essentiels et réduction des délais d'attente","Contrôle strict et lutte contre les fraudes pour pérenniser notre sécurité sociale"],deepContent:`
      <h4>La dignité de nos aînés et de nos soignants</h4>
      <p>Un pays qui abandonne ses malades ou précarise ses retraités après une vie de travail a perdu sa boussole morale. La solidarité nationale doit être protégée et sanctuarisée.</p>
      
      <h4>Nos 3 mesures d'urgence</h4>
      <div class="modal-measures-list">
        <div class="modal-measure-item">
          <strong>1. Revalorisation des carrières complètes</strong> : Une retraite proportionnelle aux années d'efforts garantissant un niveau de vie digne sans décrochage.
        </div>
        <div class="modal-measure-item">
          <strong>2. Plan d'urgence pour l'hôpital et les soins de proximité</strong> : Augmentation des effectifs infirmiers et soutien aux maisons médicales de garde.
        </div>
        <div class="modal-measure-item">
          <strong>3. Préservation durable du modèle social</strong> : Traque des abus et des gaspillages administratifs pour concentrer 100% des ressources sur les patients et les bénéficiaires légitimes.
        </div>
      </div>
    `}],H=[{id:"all",name:"Toutes les propositions",icon:"layers"},{id:"pouvoir-achat",name:"Fiscalité & Pouvoir d'achat",icon:"trending-up"},{id:"exemplarite",name:"Exemplarité & Institutions",icon:"shield-check"},{id:"securite",name:"Sécurité & Justice",icon:"scale"},{id:"education",name:"École & Savoirs",icon:"graduation-cap"},{id:"energie-ecologie",name:"Énergie & Écologie",icon:"zap"},{id:"sante",name:"Santé & Hôpital",icon:"heart-pulse"}],$=[{id:"prop-1",category:"pouvoir-achat",title:"Le 'Choc Net' : +350 € par mois sur les salaires moyens",tagline:"Baisser immédiatement les cotisations et élargir la première tranche fiscale",costing:"Autofinancé par la rationalisation des structures publiques",timeline:"Applicable dès les 100 premiers jours de mandat",badge:"Mesure Phare #1",summary:"Rehaussement de la quotité exemptée d'impôt à 14 000 €/an et allègement des cotisations ONSS pour que chaque heure travaillée rapporte sensiblement plus que l'assistance.",details:["Augmentation directe du salaire net perçu dès le premier euro gagné","Suppression du piège à l'emploi qui décourage la reprise d'activité","Plafonnement des charges patronales sur les créations de premiers emplois en PME"],searchKeywords:"salaire net impôt fiscalité pouvoir d'achat onss travail ouvrier employé"},{id:"prop-2",category:"pouvoir-achat",title:"Défiscalisation intégrale des heures supplémentaires",tagline:"1h supplémentaire prestée = 1h intégralement payée en net",costing:"Gain de productivité estimé à +1.4% de PIB",timeline:"Entrée en vigueur immédiate",badge:"Travail & Mérite",summary:"Zéro taxe, zéro cotisation sur les heures supplémentaires pour le salarié comme pour l'employeur, jusqu'à 360 heures par an.",details:["Récompenser concrètement le volontariat et les efforts supplémentaires","Permettre aux entreprises de faire face aux pics d'activité sans surcoût administratif punitif","Application universelle dans le secteur privé et public (soignants, forces de l'ordre)"],searchKeywords:"heures supplémentaires heures sup défiscalisation rémunération heures de nuit"},{id:"prop-3",category:"exemplarite",title:"Réduction de 30% des parlements et fin du Sénat",tagline:"Un État allégé, plus agile et moins coûteux pour les contribuables",costing:"Économie de 1,2 milliard € par législature",timeline:"Projet de révision constitutionnelle",badge:"Nettoyage Institutionnel",summary:"Suppression définitive du Sénat belge, réduction d'un tiers du nombre de députés régionaux et fédéraux, et fusion des ministères redondants.",details:["Fin des cumuls de mandats et des jetons de présence multiples dans les intercommunales","Plafonnement des rémunérations politiques à 2 fois le salaire moyen belge","Audit citoyen indépendant annuel sur les dépenses de communication des partis"],searchKeywords:"parlement sénat députés ministres particratie élus salaires exemplarité"},{id:"prop-4",category:"exemplarite",title:"Casier vierge et inéligibilité définitive en cas de corruption",tagline:"Tolérance zéro pour les atteintes à la probité publique",costing:"Coût nul, gain de confiance démocratique inestimable",timeline:"Vote prioritaire",badge:"Éthique Publique",summary:"Interdiction définitive et imprescriptible d'exercer tout mandat électif ou fonction publique pour toute personne condamnée pour détournement de fonds ou favoritisme.",details:["Remboursement obligatoire de chaque euro détourné sur les biens personnels","Suppression des régimes de pensions dorées pour les élus sanctionnés","Protection juridique et financière intégrale pour les lanceurs d'alerte citoyens"],searchKeywords:"corruption casier judiciaire transparence fraude probité éthique"},{id:"prop-5",category:"securite",title:"3 000 policiers de terrain supplémentaires et justice en temps réel",tagline:"Rétablir l'autorité républicaine et la sécurité dans chaque commune",costing:"420 millions € financés par la fin des gaspillages administratifs",timeline:"Plan quinquennal 2026-2030",badge:"Sécurité & Ordre",summary:"Renforcement massif des effectifs sur le terrain, simplification des procédures d'audition pour libérer du temps d'enquête et comparution immédiate.",details:["Présence policière renforcée dans les transports en commun et les gares 24h/24","Création de brigades spécialisées anti-dealers et anti-squat","Exécution effective et immédiate des peines dès le premier jour de condamnation ferme"],searchKeywords:"police sécurité commissariat justice magistrats délinquance récidive gares"},{id:"prop-6",category:"securite",title:"Sanctions incompressibles pour les violences contre les agents publics",tagline:"Protéger ceux qui nous protègent et nous soignent",costing:"Neutre",timeline:"Dès la 1ère session parlementaire",badge:"Respect Républicain",summary:"Toute agression physique ou verbale contre un policier, pompier, ambulancier ou enseignant fera l'objet d'une peine minimale incompressible sans sursis.",details:["Suppression automatique des allocations pour les délinquants majeurs multirécidivistes","Responsabilisation financière des parents de mineurs délinquants pour les dégradations","Création de centres éducatifs fermés disciplinaires pour mineurs multirécidivistes"],searchKeywords:"pompiers soignants policiers enseignants agression respect peine plancher"},{id:"prop-7",category:"education",title:"Recentrage sur les fondamentaux : 70% du temps aux savoirs essentiels",tagline:"Lecture, écriture sans faute, calcul mental et histoire partagée dès 6 ans",costing:"Réorganisation budgétaire sans hausse d'impôt",timeline:"Rentrée scolaire suivante",badge:"École de l'Excellence",summary:"Remplacement des modules pédagogiques flous par un apprentissage structuré et rigoureux du français et des mathématiques au primaire et au premier cycle du secondaire.",details:["Dictée quotidienne et maîtrise de la grammaire dès le CE1","Examens nationaux standardisés et anonymes en fin de cycle pour évaluer le niveau réel","Interdiction totale des smartphones dans l'enceinte de tous les établissements jusqu'à 16 ans"],searchKeywords:"école éducation professeurs enseignants français maths dictée savoirs primaire"},{id:"prop-8",category:"education",title:"Revalorisation prestigieuse de l'enseignement technique et manuel",tagline:"Faire des filières professionnelles des voies d'excellence reconnues",costing:"180 millions € en bourses d'équipement et modernisation des ateliers",timeline:"Déploiement sur 3 ans",badge:"Mérite & Métiers",summary:"Fin de la relégation scolaire : transformation des filières techniques avec du matériel de pointe, apprentissage renforcé et bourses au mérite pour les futurs artisans.",details:["Primes d'équipement pour chaque jeune s'orientant vers les métiers en pénurie (menuiserie, électricité, usinage, soins)","Co-construction des programmes avec les fédérations d'artisans et entreprises locales","Reconnaissance du diplôme de maître-artisan au niveau équivalent bachelier"],searchKeywords:"artisanat technique filière professionnelle apprentissage métiers manuels"},{id:"prop-9",category:"energie-ecologie",title:"Prolongation décennale du nucléaire et relance des SMR",tagline:"Garantir une électricité abondante, décarbonée et à coût maîtrisé",costing:"Investissement stratégique rentable à 100%",timeline:"Décision stratégique immédiate",badge:"Souveraineté Énergétique",summary:"Prolongation de l'ensemble des réacteurs exploitables en Belgique et investissement conjoint public-privé dans les petits réacteurs modulaires de 4e génération.",details:["Protection des ménages et des entreprises belges contre les flambées des prix du gaz","Maintien de milliers d'emplois hautement qualifiés dans le secteur nucléaire belge","Décarbonation massive sans rupture d'approvisionnement en hiver"],searchKeywords:"nucléaire électricité énergie doel tihange smr souveraineté facture énergétique"},{id:"prop-10",category:"energie-ecologie",title:"Plan Rail & Trams fiables : Ponctualité garantie et sécurité à bord",tagline:"Une mobilité collective moderne qui respecte le temps des usagers",costing:"650 millions € réorientés vers le matériel roulant et la ponctualité",timeline:"Plan d'urgence 2026-2028",badge:"Mobilité Réelle",summary:"Rénovation des rames SNCB et des infrastructures de tramway, cadencement renforcé aux heures de pointe et remboursement automatique en cas de retard récurrent.",details:["Remboursement instantané sur pass Navigo/MoBIB dès 15 minutes de retard injustifié","Doublement des équipes de sécurité ferroviaire Securail dans les gares sensibles","Fin de l'écologie punitive : suppression des amendes absurdes pour les véhicules populaires"],searchKeywords:"sncb train tram mobilité transports retards mobib tec stib de lijn"},{id:"prop-11",category:"sante",title:"Revalorisation statutaire et salariale des infirmiers et soignants",tagline:"Des conditions dignes pour ceux qui veillent sur nos vies",costing:"380 millions € alloués au personnel de chevet",timeline:"Application dès la 1ère année",badge:"Santé & Dignité",summary:"Augmentation des ratios soignant/patient dans les hôpitaux, prime de nuit et pénibilité majorée, et décharge administrative des médecins pour soigner plus de patients.",details:["Recrutement d'assistants administratifs hospitaliers pour décharger les soignants de la paperasserie","Majoration de 25% des primes de garde et de week-end pour le personnel soignant","Aides directes à l'installation des jeunes médecins généralistes dans les zones sous-dotées"],searchKeywords:"santé infirmière hôpital médecins soignants urgences garde soins"}],L={pubUrl:"https://docs.google.com/document/d/e/2PACX-1vRaSkAfDC9AO6JGwFw-XEHzYvcdUnfj0QWkNAf-kKr7upUJ47a2BJcLGYFoA9Z5fHFHz3jAeo5PXk_P/pub",embedUrl:"https://docs.google.com/document/d/e/2PACX-1vRaSkAfDC9AO6JGwFw-XEHzYvcdUnfj0QWkNAf-kKr7upUJ47a2BJcLGYFoA9Z5fHFHz3jAeo5PXk_P/pub?embedded=true",autoRefreshMs:0,modalTitle:"Manifeste de Force Commune",modalSubtitle:"« La Wallonie qui ose » — Document de référence officiel"};let w=null,q=null;const z=5*60*1e3;function G(e){var a;const s=new DOMParser().parseFromString(e,"text/html"),i=s.querySelector(".doc-content")||s.querySelector("#contents");return i?(i.querySelectorAll("script, style, link").forEach(r=>r.remove()),i.innerHTML):((a=s.body)==null?void 0:a.innerHTML)||"<p>Contenu non disponible.</p>"}function O(e){return e.replace(/<h1([^>]*)>/g,`<h1$1 style="font-size:1.5rem;font-weight:800;color:#0A1F44;margin:1.5rem 0 0.75rem;font-family:'Plus Jakarta Sans',sans-serif;">`).replace(/<h2([^>]*)>/g,`<h2$1 style="font-size:1.25rem;font-weight:700;color:#0A1F44;margin:1.25rem 0 0.5rem;font-family:'Plus Jakarta Sans',sans-serif;">`).replace(/<h3([^>]*)>/g,`<h3$1 style="font-size:1.1rem;font-weight:700;color:#0A1F44;margin:1.25rem 0 0.5rem;border-left:3px solid #FF6B00;padding-left:0.75rem;font-family:'Plus Jakarta Sans',sans-serif;">`).replace(/<h4([^>]*)>/g,`<h4$1 style="font-size:1rem;font-weight:700;color:#FF6B00;margin:1rem 0 0.4rem;font-family:'Plus Jakarta Sans',sans-serif;">`).replace(/<p([^>]*)>/g,'<p$1 style="margin:0.5rem 0 0.75rem;line-height:1.7;color:#334155;font-size:0.9375rem;">').replace(/<ul([^>]*)>/g,'<ul$1 style="padding-left:1.5rem;margin:0.5rem 0 0.75rem;">').replace(/<ol([^>]*)>/g,'<ol$1 style="padding-left:1.5rem;margin:0.5rem 0 0.75rem;">').replace(/<li([^>]*)>/g,'<li$1 style="margin:0.35rem 0;color:#334155;font-size:0.9375rem;line-height:1.6;">').replace(/<span class="c7">/g,'<span style="font-weight:700;color:#0A1F44;">').replace(/<span class="c8 c7">/g,'<span style="font-weight:700;color:#0A1F44;">').replace(/<span class="c10 c7">/g,'<span style="font-weight:700;color:#0A1F44;">').replace(/<span class="c7 c10">/g,'<span style="font-weight:700;color:#0A1F44;">').replace(/<span class="c7 c8">/g,'<span style="font-weight:700;color:#0A1F44;">').replace(/<hr>/g,'<hr style="border:none;border-top:2px solid #FF6B00;opacity:0.3;margin:1.5rem 0;">').replace(/class="[^"]*"/g,"").replace(/id="[^"]*"/g,"")}async function V(){if(w&&q&&Date.now()-q<z)return{html:w,fromCache:!0};try{const e=`https://api.allorigins.win/get?url=${encodeURIComponent(L.pubUrl)}`,t=await fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);const i=(await t.json()).contents;if(!i)throw new Error("Contenu vide reçu du proxy");const a=G(i),r=O(a);return w=r,q=Date.now(),{html:r,fromCache:!1}}catch(e){return console.warn("[Force Commune] Chargement manifeste via proxy échoué, fallback iframe:",e),null}}function U(){w=null,q=null}/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=(e,t,s=[])=>{const i=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(a=>{i.setAttribute(a,String(t[a]))}),s.length&&s.forEach(a=>{const r=R(...a);i.appendChild(r)}),i};var K=([e,t,s])=>R(e,t,s);/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=e=>Array.from(e.attributes).reduce((t,s)=>(t[s.name]=s.value,t),{}),Q=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",Z=e=>e.flatMap(Q).map(s=>s.trim()).filter(Boolean).filter((s,i,a)=>a.indexOf(s)===i).join(" "),W=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,s,i)=>s.toUpperCase()+i.toLowerCase()),A=(e,{nameAttr:t,icons:s,attrs:i})=>{var y;const a=e.getAttribute(t);if(a==null)return;const r=W(a),d=s[r];if(!d)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const u=J(e),[p,h,n]=d,c={...h,"data-lucide":a,...i,...u},m=Z(["lucide",`lucide-${a}`,u,i]);m&&Object.assign(c,{class:m});const f=K([p,c,n]);return(y=e.parentNode)==null?void 0:y.replaceChild(f,e)};/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=["svg",o,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=["svg",o,[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=["svg",o,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=["svg",o,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=["svg",o,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=["svg",o,[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=["svg",o,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=["svg",o,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=["svg",o,[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=["svg",o,[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=["svg",o,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=["svg",o,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=["svg",o,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=["svg",o,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=["svg",o,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=["svg",o,[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=["svg",o,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=["svg",o,[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=["svg",o,[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=["svg",o,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=["svg",o,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=["svg",o,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=["svg",o,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=["svg",o,[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}],["path",{d:"M18 14h-8"}],["path",{d:"M15 18h-5"}],["path",{d:"M10 6h8v4h-8V6Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=["svg",o,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=["svg",o,[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"M7 21h10"}],["path",{d:"M12 3v18"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=["svg",o,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=["svg",o,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=["svg",o,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=["svg",o,[["line",{x1:"4",x2:"4",y1:"21",y2:"14"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=["svg",o,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=["svg",o,[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=["svg",o,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=["svg",o,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=["svg",o,[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=["svg",o,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=["svg",o,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=({icons:e={},nameAttr:t="data-lucide",attrs:s={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const i=document.querySelectorAll(`[${t}]`);if(Array.from(i).forEach(a=>A(a,{nameAttr:t,icons:e,attrs:s})),t==="data-lucide"){const a=document.querySelectorAll("[icon-name]");a.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(a).forEach(r=>A(r,{nameAttr:"icon-name",icons:e,attrs:s})))}},v={Compass:ne,TrendingUp:Se,ShieldCheck:Ee,Scale:qe,GraduationCap:de,Zap:Fe,HeartPulse:ce,Heart:ue,ArrowRight:X,CheckCircle:se,X:Be,Menu:fe,Home:pe,Users:Ae,CheckSquare:Pe,Newspaper:ye,Mail:be,Send:Me,Lock:xe,Download:oe,Search:Ce,Calendar:ee,MapPin:he,Clock:ie,Sparkles:ke,ChevronRight:te,Layers:ge,FileText:le,HelpCircle:ae,Building:_,Briefcase:Y,Sliders:Le,DollarSign:re,RefreshCw:we,WifiOff:je,Info:me,Link:ve},l={currentRoute:"accueil",activeProposalCategory:"all",proposalSearchQuery:"",selectedDonationAmount:50,calcGrossSalary:3200,calcProfile:"salarie"},x=document.getElementById("app-root"),j=document.getElementById("site-header"),k=document.getElementById("mobile-drawer"),Ie=document.getElementById("mobile-menu-btn"),D=document.getElementById("menu-icon-open"),N=document.getElementById("menu-icon-close"),M=document.getElementById("pillar-modal"),$e=document.getElementById("pillar-modal-content"),Re=document.getElementById("manifeste-modal"),B=document.getElementById("donation-modal"),De=document.getElementById("toast-container");function b(e,t="info"){const s=document.createElement("div");s.className="toast-msg",s.innerHTML=`
    <i data-lucide="${t==="success"?"check-circle":"sparkles"}" class="w-5 h-5 text-orange-500 flex-shrink-0"></i>
    <span>${e}</span>
  `,De.appendChild(s),g({icons:v}),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateX(100%)",s.style.transition="all 0.3s ease",setTimeout(()=>s.remove(),300)},4e3)}function Ne(){return`
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
            La Wallonie <br class="hidden sm:inline" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300">
              qui ose.
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



        </div>
      </div>
    </section>

    <!-- Section: Notre Boussole (6 Piliers) -->
    <section id="boussole" class="py-20 lg:py-28 bg-slate-50 relative">
      <div class="section-container">
        
        <div class="max-w-3xl mb-14 space-y-4">
          <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
            <i data-lucide="compass" class="w-4 h-4"></i>
            <span>Notre Ligne Fondatrice</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold text-navy-950 font-display tracking-tight">
            Notre Boussole : 6 Piliers d'Action
          </h2>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
            Face au découragement général et à la lourdeur des appareils politiques traditionnels, Force Commune s'organise autour de 6 principes cardinaux, concrets et inaltérables.
          </p>
        </div>

        <!-- 6 Pillars Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${I.map(e=>`
            <div class="pillar-card group">
              <div class="pillar-img-wrap">
                <img src="${e.image}" alt="${e.title}" class="pillar-img" loading="lazy">
                <div class="pillar-number">${e.number}</div>
                <div class="absolute bottom-3 left-3">
                  <span class="badge badge-dark">${e.badge}</span>
                </div>
              </div>
              <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div class="space-y-2.5">
                  <h3 class="text-xl font-bold text-navy-950 font-display group-hover:text-orange-600 transition-colors">
                    ${e.title}
                  </h3>
                  <p class="text-xs font-semibold text-orange-600">
                    ${e.subtitle}
                  </p>
                  <p class="text-sm text-slate-600 leading-relaxed">
                    ${e.summary}
                  </p>
                </div>


              </div>
            </div>
          `).join("")}
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
          ${$.slice(0,6).map(e=>`
            <div class="proposal-card">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="badge badge-navy">${e.badge}</span>
                  <span class="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                    <i data-lucide="clock" class="w-3.5 h-3.5 text-orange-500"></i>
                    ${e.timeline.slice(0,20)}...
                  </span>
                </div>
                
                <h3 class="text-lg font-bold text-navy-950 font-display">
                  ${e.title}
                </h3>
                
                <p class="text-xs text-orange-600 font-semibold">
                  ${e.tagline}
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                  ${e.summary}
                </p>
              </div>

              <div class="pt-4 mt-4 border-t border-slate-100 space-y-2">
                <div class="text-xs text-slate-500 flex items-center gap-1.5">
                  <i data-lucide="trending-up" class="w-3.5 h-3.5 text-green-600 flex-shrink-0"></i>
                  <span><strong>Impact :</strong> ${e.costing}</span>
                </div>
              </div>
            </div>
          `).join("")}
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



    <!-- Final Call to Action -->
    <section class="py-20 lg:py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div class="section-container relative z-10">
        <div class="max-w-3xl mx-auto text-center space-y-6">
          <span class="badge badge-orange">Passez à l'Action</span>
          <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-navy-950 tracking-tight">
            La Belgique ne changera pas toute seule.
          </h2>
          <p class="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            Rejoignez des milliers de citoyens qui refusent la fatalité. Adhérez, devenez bénévole ou soutenez financièrement un mouvement 100% libre et indépendant.
          </p>

          <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a href="#nous-rejoindre" class="btn btn-primary text-base py-3.5 px-8 shadow-orange" data-route="nous-rejoindre">
              <i data-lucide="check-circle" class="w-5 h-5"></i>
              <span>Adhérer à Force Commune</span>
            </a>
            <button class="btn btn-outline text-navy-950 border-slate-300 bg-white hover:bg-slate-100 hover:text-orange-600 text-base py-3.5 px-7" data-action="open-donation">
              <i data-lucide="heart" class="w-5 h-5 text-orange-500"></i>
              <span>Faire un don défiscalisé (45%)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  `}function Te(){return`
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

    <!-- Charte Éthique & Principes -->
    <section class="py-16 bg-white border-b border-slate-200">
      <div class="section-container">
        
        <div class="max-w-3xl mb-12 space-y-3">
          <span class="badge badge-navy">Exemplarité & Transparence</span>
          <h2 class="text-3xl font-bold text-navy-950 font-display">
            La Charte des Engagements Inviolables
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            Tout candidat et représentant de Force Commune s'engage par serment écrit sur ces 7 règles strictes.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${[{num:"01",title:"Le respect de ceux qui travaillent et entreprennent",desc:"Revalorisation du travail, soutien aux artisans, soignants, enseignants et créateurs de valeur."},{num:"02",title:"La justice réelle",desc:"Aider ceux qui en ont besoin, ne pas subventionner l’abus."},{num:"03",title:"L’ordre comme condition de la dignité",desc:"Garantir la sécurité publique et la sérénité dans chaque commune."},{num:"04",title:"L’exemplarité de l’État et des élus",desc:"Transparence totale, sobriété des dépenses et gestion exemplaire."},{num:"05",title:"L’exigence",desc:"Excellence à l'école, qualité dans les services publics et responsabilité dans l'engagement."},{num:"06",title:"Le concret et les résultats",desc:"Juger les politiques uniquement à leurs effets réels sur le terrain."},{num:"07",title:"Une écologie d’adhésion",desc:"Pas de punition ni d'écologie punitive, des alternatives attractives et soutenables."}].map(e=>`
            <div class="p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <span class="w-9 h-9 rounded-lg bg-navy-900 text-orange-400 font-bold font-display flex items-center justify-center flex-shrink-0 text-sm">
                ${e.num}
              </span>
              <div class="space-y-1">
                <h4 class="font-bold text-navy-950 text-base">${e.title}</h4>
                <p class="text-xs text-slate-600 leading-relaxed">${e.desc}</p>
              </div>
            </div>
          `).join("")}
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
          ${[{region:"Bruxelles-Capitale",head:"19 Communes",contact:"bruxelles@forcecommune.be",meetings:"Chaque 2e mardi du mois"},{region:"Liège & Métropole",head:"Bassin Liégeois & Verviers",contact:"liege@forcecommune.be",meetings:"Chaque 1er jeudi"},{region:"Namur & Condroz",head:"Grand Namur & Dinant",contact:"namur@forcecommune.be",meetings:"Chaque 3e mercredi"},{region:"Charleroi & Sambre",head:"Bassin Industriel",contact:"charleroi@forcecommune.be",meetings:"Chaque 2e jeudi"},{region:"Brabant Wallon",head:"Wavre, Nivelles, Waterloo",contact:"brabant@forcecommune.be",meetings:"Chaque 1er lundi"},{region:"Mons-Borinage & Centre",head:"Hainaut Occidental",contact:"mons@forcecommune.be",meetings:"Chaque 3e jeudi"},{region:"Luxembourg Belge",head:"Arlon, Libramont, Marche",contact:"luxembourg@forcecommune.be",meetings:"Chaque 4e samedi"},{region:"Wallonie Picarde",head:"Tournai, Mouscron, Ath",contact:"wapi@forcecommune.be",meetings:"Chaque 2e vendredi"}].map(e=>`
            <div class="p-5 bg-white rounded-xl border border-slate-200 space-y-2 hover:border-orange-400 transition-colors">
              <div class="font-bold text-navy-950 text-base">${e.region}</div>
              <div class="text-xs text-orange-600 font-semibold">${e.head}</div>
              <div class="text-xs text-slate-500 pt-2 border-t border-slate-100">${e.meetings}</div>
              <a href="mailto:${e.contact}" class="text-xs text-navy-700 hover:text-orange-600 flex items-center gap-1 font-medium">
                <i data-lucide="mail" class="w-3.5 h-3.5"></i>
                <span>${e.contact}</span>
              </a>
            </div>
          `).join("")}
        </div>

      </div>
    </section>
  `}function P(){const e=$.filter(t=>{const s=l.activeProposalCategory==="all"||t.category===l.activeProposalCategory,i=l.proposalSearchQuery===""||t.title.toLowerCase().includes(l.proposalSearchQuery.toLowerCase())||t.summary.toLowerCase().includes(l.proposalSearchQuery.toLowerCase())||t.searchKeywords.toLowerCase().includes(l.proposalSearchQuery.toLowerCase());return s&&i});return`
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
                  <button type="button" class="sim-btn text-xs py-2 px-3 rounded-lg border font-semibold ${l.calcProfile==="salarie"?"bg-navy-900 text-white border-navy-900":"bg-slate-50 text-slate-700 border-slate-200"}" data-profile="salarie">Salarié</button>
                  <button type="button" class="sim-btn text-xs py-2 px-3 rounded-lg border font-semibold ${l.calcProfile==="independant"?"bg-navy-900 text-white border-navy-900":"bg-slate-50 text-slate-700 border-slate-200"}" data-profile="independant">Indépendant</button>
                  <button type="button" class="sim-btn text-xs py-2 px-3 rounded-lg border font-semibold ${l.calcProfile==="soignant"?"bg-navy-900 text-white border-navy-900":"bg-slate-50 text-slate-700 border-slate-200"}" data-profile="soignant">Soignant / Prof</button>
                </div>
              </div>

              <div>
                <div class="flex justify-between items-center mb-1">
                  <label class="text-xs font-bold text-slate-700 uppercase tracking-wider">Salaire Brut Mensuel :</label>
                  <span class="text-sm font-extrabold text-navy-900" id="sim-salary-display">${l.calcGrossSalary} € / mois</span>
                </div>
                <input 
                  type="range" 
                  min="2000" 
                  max="6500" 
                  step="100" 
                  value="${l.calcGrossSalary}" 
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
            ${H.map(t=>`
              <button 
                class="category-pill whitespace-nowrap text-xs font-bold py-2 px-3.5 rounded-xl border transition-all ${l.activeProposalCategory===t.id?"bg-navy-900 text-white border-navy-900 shadow-sm":"bg-white text-slate-700 border-slate-200 hover:border-orange-400"}"
                data-category="${t.id}"
              >
                ${t.name}
              </button>
            `).join("")}
          </div>

          <!-- Search Input -->
          <div class="relative w-full md:w-72 flex-shrink-0">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input 
              type="text" 
              id="prop-search-input" 
              placeholder="Rechercher une mesure..." 
              value="${l.proposalSearchQuery}"
              class="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-orange-500"
            >
          </div>

        </div>

        <!-- Proposals Results Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${e.length>0?e.map(t=>`
            <div class="proposal-card">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="badge badge-navy">${t.badge}</span>
                  <span class="text-[11px] text-slate-400 font-medium">${t.timeline}</span>
                </div>

                <h3 class="text-lg font-bold text-navy-950 font-display">
                  ${t.title}
                </h3>

                <p class="text-xs text-orange-600 font-semibold">
                  ${t.tagline}
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                  ${t.summary}
                </p>

                <ul class="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  ${t.details.map(s=>`
                    <li class="flex items-start gap-1.5">
                      <i data-lucide="check-circle" class="w-3.5 h-3.5 text-orange-500 mt-0.5 flex-shrink-0"></i>
                      <span>${s}</span>
                    </li>
                  `).join("")}
                </ul>
              </div>

              <div class="pt-4 mt-4 border-t border-slate-100 text-xs text-slate-500">
                <strong>Financement :</strong> ${t.costing}
              </div>
            </div>
          `).join(""):`
            <div class="col-span-full py-12 text-center text-slate-500">
              <i data-lucide="search" class="w-8 h-8 text-slate-300 mx-auto mb-2"></i>
              <p>Aucune proposition ne correspond à votre recherche.</p>
            </div>
          `}
        </div>

      </div>
    </section>
  `}function He(){return`
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
                <button type="button" class="donation-pill ${l.selectedDonationAmount===40?"active":""}" data-val="40">
                  <span class="text-base font-bold">40 €</span>
                  <span class="text-[9px] text-slate-500 block">Coût: 22 €</span>
                </button>
                <button type="button" class="donation-pill ${l.selectedDonationAmount===100?"active":""}" data-val="100">
                  <span class="text-base font-bold">100 €</span>
                  <span class="text-[9px] text-slate-500 block">Coût: 55 €</span>
                </button>
                <button type="button" class="donation-pill ${l.selectedDonationAmount===250?"active":""}" data-val="250">
                  <span class="text-base font-bold">250 €</span>
                  <span class="text-[9px] text-slate-500 block">Coût: 137,50 €</span>
                </button>
              </div>

              <!-- Real Cost Calculation Box -->
              <div class="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-2">
                <div class="flex justify-between text-xs text-slate-300">
                  <span>Montant de votre versement :</span>
                  <strong class="text-white" id="page-don-initial">${l.selectedDonationAmount} €</strong>
                </div>
                <div class="flex justify-between text-xs text-orange-400">
                  <span>Déduction fiscale belge (-45%) :</span>
                  <strong id="page-don-deduct">-${(l.selectedDonationAmount*.45).toFixed(2)} €</strong>
                </div>
                <div class="flex justify-between text-sm font-bold text-white border-t border-navy-800 pt-2">
                  <span>Coût réel net pour vous :</span>
                  <strong class="text-orange-500 text-base" id="page-don-final">${(l.selectedDonationAmount*.55).toFixed(2)} €</strong>
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
  `}function ze(){return`
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
  `}async function E(e=!1){const t=document.getElementById("manifeste-loading"),s=document.getElementById("manifeste-content"),i=document.getElementById("manifeste-iframe-fallback"),a=document.getElementById("manifeste-error"),r=document.getElementById("manifeste-live-badge");if(!t)return;const d=u=>{t.style.display=u==="loading"?"flex":"none",s.style.display=u==="content"?"block":"none",i.style.display=u==="iframe"?"flex":"none",a.style.display=u==="error"?"flex":"none"};d("loading");try{const u=await V();if(u&&u.html)s.innerHTML=u.html,d("content"),g({icons:v,root:s}),r&&(r.style.display="flex");else{const p=document.getElementById("manifeste-iframe");p&&(e||!p.src||p.src===window.location.href)&&(p.src=L.embedUrl),d("iframe"),r&&(r.style.display="none")}}catch(u){console.error("[Force Commune] Erreur chargement manifeste:",u);const p=document.getElementById("manifeste-iframe");p&&(!p.src||p.src===window.location.href)?(p.src=L.embedUrl,d("iframe")):d("error")}}function C(e){switch(l.currentRoute=e,e){case"le-mouvement":x.innerHTML=Te();break;case"propositions":x.innerHTML=P();break;case"nous-rejoindre":x.innerHTML=He();break;case"contact":x.innerHTML=ze();break;case"boussole":case"accueil":default:x.innerHTML=Ne(),e==="boussole"&&setTimeout(()=>{var t;(t=document.getElementById("boussole"))==null||t.scrollIntoView({behavior:"smooth"})},100);break}document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(t=>{t.dataset.route===e?t.classList.add("active"):t.classList.remove("active")}),g({icons:v}),e!=="boussole"&&window.scrollTo({top:0,behavior:"smooth"}),T(),S()}function S(){var i,a,r,d,u,p,h;document.querySelectorAll("[data-open-pillar]").forEach(n=>{n.addEventListener("click",c=>{c.preventDefault();const m=n.dataset.openPillar;Ge(m)})});async function e(){Re.showModal(),g({icons:v}),await E(!1)}(i=document.getElementById("btn-read-manifeste-hero"))==null||i.addEventListener("click",e),(a=document.getElementById("btn-read-manifeste-body"))==null||a.addEventListener("click",e),(r=document.getElementById("btn-reload-manifeste"))==null||r.addEventListener("click",async()=>{U();const n=document.getElementById("btn-reload-manifeste");n&&(n.style.transform="rotate(360deg)",n.style.transition="transform 0.5s ease",setTimeout(()=>{n.style.transform=""},600)),await E(!0)}),(d=document.getElementById("btn-retry-manifeste"))==null||d.addEventListener("click",async()=>{await E(!0)}),document.querySelectorAll('[data-action="open-donation"]').forEach(n=>{n.addEventListener("click",c=>{c.preventDefault(),B.showModal(),g({icons:v})})}),document.querySelectorAll(".btn-rsvp").forEach(n=>{n.addEventListener("click",c=>{const m=n.dataset.city;b(`Votre place pour la réunion de ${m} a été pré-réservée avec succès !`,"success"),n.innerText="Inscrit ✓",n.classList.add("bg-green-600","border-green-600")})});const t=document.getElementById("sim-salary-slider");t&&(t.addEventListener("input",n=>{l.calcGrossSalary=parseInt(n.target.value),F()}),document.querySelectorAll(".sim-btn").forEach(n=>{n.addEventListener("click",()=>{l.calcProfile=n.dataset.profile,document.querySelectorAll(".sim-btn").forEach(c=>{c.className=`sim-btn text-xs py-2 px-3 rounded-lg border font-semibold ${c.dataset.profile===l.calcProfile?"bg-navy-900 text-white border-navy-900":"bg-slate-50 text-slate-700 border-slate-200"}`}),F()})}));const s=document.getElementById("prop-search-input");s&&(s.addEventListener("input",n=>{if(l.proposalSearchQuery=n.target.value,l.currentRoute==="propositions"){x.innerHTML=P(),g({icons:v}),S();const c=document.getElementById("prop-search-input");c.focus(),c.setSelectionRange(c.value.length,c.value.length)}}),document.querySelectorAll(".category-pill").forEach(n=>{n.addEventListener("click",()=>{l.activeProposalCategory=n.dataset.category,l.currentRoute==="propositions"&&(x.innerHTML=P(),g({icons:v}),S())})})),document.querySelectorAll("#page-donation-pills .donation-pill").forEach(n=>{n.addEventListener("click",()=>{l.selectedDonationAmount=parseInt(n.dataset.val),document.querySelectorAll("#page-donation-pills .donation-pill").forEach(y=>y.classList.remove("active")),n.classList.add("active");const c=document.getElementById("page-don-initial"),m=document.getElementById("page-don-deduct"),f=document.getElementById("page-don-final");c&&(c.innerText=`${l.selectedDonationAmount} €`),m&&(m.innerText=`-${(l.selectedDonationAmount*.45).toFixed(2)} €`),f&&(f.innerText=`${(l.selectedDonationAmount*.55).toFixed(2)} €`)})}),(u=document.getElementById("membership-full-form"))==null||u.addEventListener("submit",n=>{n.preventDefault(),b("Félicitations ! Votre adhésion citoyenne à Force Commune a bien été enregistrée. Bienvenue dans La Wallonie qui ose !","success"),n.target.reset()}),(p=document.getElementById("contact-full-form"))==null||p.addEventListener("submit",n=>{n.preventDefault(),b("Votre message a bien été transmis au secrétariat général de Force Commune.","success"),n.target.reset()}),(h=document.getElementById("quick-donation-form"))==null||h.addEventListener("submit",n=>{n.preventDefault(),B.close(),b("Merci infiniment pour votre soutien civique et financier à Force Commune !","success"),n.target.reset()})}function F(){const e=document.getElementById("sim-salary-display"),t=document.getElementById("sim-gain-month"),s=document.getElementById("sim-gain-year");if(!e||!t||!s)return;e.innerText=`${l.calcGrossSalary.toLocaleString()} € / mois`;let i=.105;l.calcProfile==="independant"&&(i=.12),l.calcProfile==="soignant"&&(i=.135);const a=Math.round(l.calcGrossSalary*i),r=a*12;t.innerText=`+${a} €`,s.innerText=`+${r.toLocaleString()} € / an`}function Ge(e){const t=I.find(s=>s.id===e);t&&($e.innerHTML=`
    <div class="relative h-56 sm:h-64 bg-navy-950 overflow-hidden">
      <img src="${t.image}" alt="${t.title}" class="w-full h-full object-cover opacity-85">
      <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
      
      <button type="button" class="close-modal-btn absolute top-4 right-4 p-2 bg-navy-900/80 backdrop-blur-md rounded-full text-white hover:text-orange-400 border border-navy-700 transition-colors" data-close-modal="pillar-modal">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>

      <div class="absolute bottom-4 left-6 right-6 text-white space-y-1">
        <span class="badge badge-orange text-[10px]">${t.badge}</span>
        <h3 class="text-2xl font-bold font-display">${t.number}. ${t.title}</h3>
        <p class="text-xs text-slate-300">${t.subtitle}</p>
      </div>
    </div>

    <div class="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
      <div class="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 space-y-4">
        ${t.deepContent}
      </div>

      <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
        <h5 class="font-bold text-navy-950 text-xs uppercase tracking-wider">Points Clés de la Réforme :</h5>
        <ul class="space-y-1.5 text-xs text-slate-600">
          ${t.highlights.map(s=>`
            <li class="flex items-start gap-2">
              <i data-lucide="check-circle" class="w-3.5 h-3.5 text-orange-500 mt-0.5 flex-shrink-0"></i>
              <span>${s}</span>
            </li>
          `).join("")}
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
  `,M.showModal(),g({icons:v}),M.querySelectorAll("[data-close-modal]").forEach(s=>{s.addEventListener("click",()=>{M.close(),s.dataset.route&&C(s.dataset.route)})}))}function Oe(){k.classList.contains("open")?T():(k.classList.add("open"),D.classList.add("hidden"),N.classList.remove("hidden"))}function T(){k.classList.remove("open"),D.classList.remove("hidden"),N.classList.add("hidden")}document.addEventListener("DOMContentLoaded",()=>{var t;Ie.addEventListener("click",Oe),document.addEventListener("click",s=>{const i=s.target.closest("[data-route]");if(i){s.preventDefault();const r=i.dataset.route;window.location.hash=r,C(r);return}const a=s.target.closest("[data-close-modal]");if(a){const r=a.dataset.closeModal,d=document.getElementById(r);d&&d.close()}}),window.addEventListener("scroll",()=>{window.scrollY>40?j.classList.add("scrolled"):j.classList.remove("scrolled")}),(t=document.getElementById("footer-newsletter-form"))==null||t.addEventListener("submit",s=>{s.preventDefault();const i=document.getElementById("footer-newsletter-email");i&&i.value&&(b(`Merci ! Vous êtes bien inscrit à la Lettre de Terrain avec l'adresse ${i.value}.`,"success"),i.value="")}),document.querySelectorAll("#donation-quick-amounts .donation-pill").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll("#donation-quick-amounts .donation-pill").forEach(i=>i.classList.remove("active")),s.classList.add("active")})}),window.addEventListener("hashchange",()=>{const s=window.location.hash.replace("#","")||"accueil";C(s)});const e=window.location.hash.replace("#","")||"accueil";C(e)});
