export const categories = [
  { id: "all", name: "Toutes les propositions", icon: "layers" },
  { id: "pouvoir-achat", name: "Fiscalité & Pouvoir d'achat", icon: "trending-up" },
  { id: "exemplarite", name: "Exemplarité & Institutions", icon: "shield-check" },
  { id: "securite", name: "Sécurité & Justice", icon: "scale" },
  { id: "education", name: "École & Savoirs", icon: "graduation-cap" },
  { id: "energie-ecologie", name: "Énergie & Écologie", icon: "zap" },
  { id: "sante", name: "Santé & Hôpital", icon: "heart-pulse" }
];

export const proposalsData = [
  {
    id: "prop-1",
    category: "pouvoir-achat",
    title: "Le 'Choc Net' : +350 € par mois sur les salaires moyens",
    tagline: "Baisser immédiatement les cotisations et élargir la première tranche fiscale",
    costing: "Autofinancé par la rationalisation des structures publiques",
    timeline: "Applicable dès les 100 premiers jours de mandat",
    badge: "Mesure Phare #1",
    summary: "Rehaussement de la quotité exemptée d'impôt à 14 000 €/an et allègement des cotisations ONSS pour que chaque heure travaillée rapporte sensiblement plus que l'assistance.",
    details: [
      "Augmentation directe du salaire net perçu dès le premier euro gagné",
      "Suppression du piège à l'emploi qui décourage la reprise d'activité",
      "Plafonnement des charges patronales sur les créations de premiers emplois en PME"
    ],
    searchKeywords: "salaire net impôt fiscalité pouvoir d'achat onss travail ouvrier employé"
  },
  {
    id: "prop-2",
    category: "pouvoir-achat",
    title: "Défiscalisation intégrale des heures supplémentaires",
    tagline: "1h supplémentaire prestée = 1h intégralement payée en net",
    costing: "Gain de productivité estimé à +1.4% de PIB",
    timeline: "Entrée en vigueur immédiate",
    badge: "Travail & Mérite",
    summary: "Zéro taxe, zéro cotisation sur les heures supplémentaires pour le salarié comme pour l'employeur, jusqu'à 360 heures par an.",
    details: [
      "Récompenser concrètement le volontariat et les efforts supplémentaires",
      "Permettre aux entreprises de faire face aux pics d'activité sans surcoût administratif punitif",
      "Application universelle dans le secteur privé et public (soignants, forces de l'ordre)"
    ],
    searchKeywords: "heures supplémentaires heures sup défiscalisation rémunération heures de nuit"
  },
  {
    id: "prop-3",
    category: "exemplarite",
    title: "Réduction de 30% des parlements et fin du Sénat",
    tagline: "Un État allégé, plus agile et moins coûteux pour les contribuables",
    costing: "Économie de 1,2 milliard € par législature",
    timeline: "Projet de révision constitutionnelle",
    badge: "Nettoyage Institutionnel",
    summary: "Suppression définitive du Sénat belge, réduction d'un tiers du nombre de députés régionaux et fédéraux, et fusion des ministères redondants.",
    details: [
      "Fin des cumuls de mandats et des jetons de présence multiples dans les intercommunales",
      "Plafonnement des rémunérations politiques à 2 fois le salaire moyen belge",
      "Audit citoyen indépendant annuel sur les dépenses de communication des partis"
    ],
    searchKeywords: "parlement sénat députés ministres particratie élus salaires exemplarité"
  },
  {
    id: "prop-4",
    category: "exemplarite",
    title: "Casier vierge et inéligibilité définitive en cas de corruption",
    tagline: "Tolérance zéro pour les atteintes à la probité publique",
    costing: "Coût nul, gain de confiance démocratique inestimable",
    timeline: "Vote prioritaire",
    badge: "Éthique Publique",
    summary: "Interdiction définitive et imprescriptible d'exercer tout mandat électif ou fonction publique pour toute personne condamnée pour détournement de fonds ou favoritisme.",
    details: [
      "Remboursement obligatoire de chaque euro détourné sur les biens personnels",
      "Suppression des régimes de pensions dorées pour les élus sanctionnés",
      "Protection juridique et financière intégrale pour les lanceurs d'alerte citoyens"
    ],
    searchKeywords: "corruption casier judiciaire transparence fraude probité éthique"
  },
  {
    id: "prop-5",
    category: "securite",
    title: "3 000 policiers de terrain supplémentaires et justice en temps réel",
    tagline: "Rétablir l'autorité républicaine et la sécurité dans chaque commune",
    costing: "420 millions € financés par la fin des gaspillages administratifs",
    timeline: "Plan quinquennal 2026-2030",
    badge: "Sécurité & Ordre",
    summary: "Renforcement massif des effectifs sur le terrain, simplification des procédures d'audition pour libérer du temps d'enquête et comparution immédiate.",
    details: [
      "Présence policière renforcée dans les transports en commun et les gares 24h/24",
      "Création de brigades spécialisées anti-dealers et anti-squat",
      "Exécution effective et immédiate des peines dès le premier jour de condamnation ferme"
    ],
    searchKeywords: "police sécurité commissariat justice magistrats délinquance récidive gares"
  },
  {
    id: "prop-6",
    category: "securite",
    title: "Sanctions incompressibles pour les violences contre les agents publics",
    tagline: "Protéger ceux qui nous protègent et nous soignent",
    costing: "Neutre",
    timeline: "Dès la 1ère session parlementaire",
    badge: "Respect Républicain",
    summary: "Toute agression physique ou verbale contre un policier, pompier, ambulancier ou enseignant fera l'objet d'une peine minimale incompressible sans sursis.",
    details: [
      "Suppression automatique des allocations pour les délinquants majeurs multirécidivistes",
      "Responsabilisation financière des parents de mineurs délinquants pour les dégradations",
      "Création de centres éducatifs fermés disciplinaires pour mineurs multirécidivistes"
    ],
    searchKeywords: "pompiers soignants policiers enseignants agression respect peine plancher"
  },
  {
    id: "prop-7",
    category: "education",
    title: "Recentrage sur les fondamentaux : 70% du temps aux savoirs essentiels",
    tagline: "Lecture, écriture sans faute, calcul mental et histoire partagée dès 6 ans",
    costing: "Réorganisation budgétaire sans hausse d'impôt",
    timeline: "Rentrée scolaire suivante",
    badge: "École de l'Excellence",
    summary: "Remplacement des modules pédagogiques flous par un apprentissage structuré et rigoureux du français et des mathématiques au primaire et au premier cycle du secondaire.",
    details: [
      "Dictée quotidienne et maîtrise de la grammaire dès le CE1",
      "Examens nationaux standardisés et anonymes en fin de cycle pour évaluer le niveau réel",
      "Interdiction totale des smartphones dans l'enceinte de tous les établissements jusqu'à 16 ans"
    ],
    searchKeywords: "école éducation professeurs enseignants français maths dictée savoirs primaire"
  },
  {
    id: "prop-8",
    category: "education",
    title: "Revalorisation prestigieuse de l'enseignement technique et manuel",
    tagline: "Faire des filières professionnelles des voies d'excellence reconnues",
    costing: "180 millions € en bourses d'équipement et modernisation des ateliers",
    timeline: "Déploiement sur 3 ans",
    badge: "Mérite & Métiers",
    summary: "Fin de la relégation scolaire : transformation des filières techniques avec du matériel de pointe, apprentissage renforcé et bourses au mérite pour les futurs artisans.",
    details: [
      "Primes d'équipement pour chaque jeune s'orientant vers les métiers en pénurie (menuiserie, électricité, usinage, soins)",
      "Co-construction des programmes avec les fédérations d'artisans et entreprises locales",
      "Reconnaissance du diplôme de maître-artisan au niveau équivalent bachelier"
    ],
    searchKeywords: "artisanat technique filière professionnelle apprentissage métiers manuels"
  },
  {
    id: "prop-9",
    category: "energie-ecologie",
    title: "Prolongation décennale du nucléaire et relance des SMR",
    tagline: "Garantir une électricité abondante, décarbonée et à coût maîtrisé",
    costing: "Investissement stratégique rentable à 100%",
    timeline: "Décision stratégique immédiate",
    badge: "Souveraineté Énergétique",
    summary: "Prolongation de l'ensemble des réacteurs exploitables en Belgique et investissement conjoint public-privé dans les petits réacteurs modulaires de 4e génération.",
    details: [
      "Protection des ménages et des entreprises belges contre les flambées des prix du gaz",
      "Maintien de milliers d'emplois hautement qualifiés dans le secteur nucléaire belge",
      "Décarbonation massive sans rupture d'approvisionnement en hiver"
    ],
    searchKeywords: "nucléaire électricité énergie doel tihange smr souveraineté facture énergétique"
  },
  {
    id: "prop-10",
    category: "energie-ecologie",
    title: "Plan Rail & Trams fiables : Ponctualité garantie et sécurité à bord",
    tagline: "Une mobilité collective moderne qui respecte le temps des usagers",
    costing: "650 millions € réorientés vers le matériel roulant et la ponctualité",
    timeline: "Plan d'urgence 2026-2028",
    badge: "Mobilité Réelle",
    summary: "Rénovation des rames SNCB et des infrastructures de tramway, cadencement renforcé aux heures de pointe et remboursement automatique en cas de retard récurrent.",
    details: [
      "Remboursement instantané sur pass Navigo/MoBIB dès 15 minutes de retard injustifié",
      "Doublement des équipes de sécurité ferroviaire Securail dans les gares sensibles",
      "Fin de l'écologie punitive : suppression des amendes absurdes pour les véhicules populaires"
    ],
    searchKeywords: "sncb train tram mobilité transports retards mobib tec stib de lijn"
  },
  {
    id: "prop-11",
    category: "sante",
    title: "Revalorisation statutaire et salariale des infirmiers et soignants",
    tagline: "Des conditions dignes pour ceux qui veillent sur nos vies",
    costing: "380 millions € alloués au personnel de chevet",
    timeline: "Application dès la 1ère année",
    badge: "Santé & Dignité",
    summary: "Augmentation des ratios soignant/patient dans les hôpitaux, prime de nuit et pénibilité majorée, et décharge administrative des médecins pour soigner plus de patients.",
    details: [
      "Recrutement d'assistants administratifs hospitaliers pour décharger les soignants de la paperasserie",
      "Majoration de 25% des primes de garde et de week-end pour le personnel soignant",
      "Aides directes à l'installation des jeunes médecins généralistes dans les zones sous-dotées"
    ],
    searchKeywords: "santé infirmière hôpital médecins soignants urgences garde soins"
  }
];
