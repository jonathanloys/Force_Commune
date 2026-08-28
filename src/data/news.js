export const newsData = [
  {
    id: "news-1",
    type: "Tribune",
    date: "12 Août 2026",
    title: "« Pourquoi nous refusons de laisser la Belgique aux mains de la particratie »",
    author: "Comité Fondateur Force Commune",
    readingTime: "4 min de lecture",
    category: "Tribune",
    summary: "Tribune publiée dans la presse économique et citoyenne : comment le modèle de gestion de nos gouvernements successifs a découragé le travail et comment Force Commune remet ceux qui font au centre des décisions.",
    badge: "À la Une",
    image: "/images/hero.jpg",
    content: `
      <p>Pendant des décennies, le paysage politique belge s'est enfermé dans des querelles d'appareils, des négociations de couloirs interminables et une multiplication insensée de mandats rémunérés. Pendant ce temps, sur le terrain, nos artisans se battent contre la bureaucratie, nos infirmières manquent de moyens aux urgences et nos enseignants sont submergés par des directives déconnectées.</p>
      <p>Force Commune n'est pas un parti de plus. C'est le mouvement citoyen de la réalité concrète. Nous ne venons pas chercher des postes, nous venons réformer l'État avec le bon sens de ceux qui gèrent une entreprise, tiennent une classe ou soignent des patients chaque matin.</p>
      <p>Notre engagement est clair : nous serons intraitables sur l'exemplarité, radicaux sur la baisse des taxes sur le travail, et inflexibles sur la sécurité de nos quartiers.</p>
    `
  },
  {
    id: "news-2",
    type: "Événement",
    date: "28 Août 2026",
    title: "Grande Assemblée Citoyenne de rentrée à Namur : « Le Choc Net pour nos salaires »",
    author: "Fédération Namur-Luxembourg",
    readingTime: "Inscription ouverte",
    category: "Événement",
    summary: "Rencontre publique et atelier participatif avec 350 professionnels, indépendants et salariés namurois autour de la réforme fiscale Force Commune.",
    badge: "Réunion Publique",
    image: "/images/pillar-pouvoir-achat.jpg",
    content: `
      <p>Rejoignez-nous le jeudi 28 août à 19h30 au Palais des Congrès de Namur pour une soirée d'échange direct et sans langue de bois. Les propositions sur la fiscalité et le pouvoir d'achat y seront présentées et débattues avec les citoyens présents.</p>
      <p>Entrée libre sur inscription préalable. Parking disponible et retransmission en direct sur notre plateforme citoyenne.</p>
    `
  },
  {
    id: "news-3",
    type: "Communiqué",
    date: "5 Août 2026",
    title: "Soutien total aux soignants de garde : Pour une revalorisation immédiate des astreintes de nuit",
    author: "Pôle Santé & Solidarité",
    readingTime: "3 min de lecture",
    category: "Communiqué",
    summary: "Force Commune dénonce le blocage budgétaire fédéral sur la revalorisation des heures de nuit du personnel hospitalier et formule 3 exigences immédiates.",
    badge: "Santé",
    image: "/images/pillar-exemplarite.jpg",
    content: `
      <p>Le personnel soignant ne peut plus se contenter de promesses sans lendemain. Alors que l'inflation pèse sur les ménages, nos soignants assurent la continuité des soins dans des conditions d'épuisement inacceptables.</p>
      <p>Nous demandons l'application immédiate de notre mesure phare : défiscalisation intégrale des heures de garde et augmentation de 25% des primes de pénibilité.</p>
    `
  },
  {
    id: "news-4",
    type: "Terrain",
    date: "22 Juillet 2026",
    title: "Tournée des PME et ateliers à Charleroi et Liège : Ce que demandent vraiment nos artisans",
    author: "Équipe Économie Réelle",
    readingTime: "5 min de lecture",
    category: "Terrain",
    summary: "Retour en images sur notre immersion de 3 jours aux côtés des chaudronniers, menuisiers, transporteurs et restaurateurs du bassin industriel wallon.",
    badge: "Immersion Terrain",
    image: "/images/pillar-pouvoir-achat.jpg",
    content: `
      <p>Entre contrôles administratifs redondants et factures d'énergie prohibitives, les entrepreneurs de nos régions font preuve d'une résilience remarquable. Force Commune a compilé leurs 12 propositions concrètes pour supprimer les freins à l'embauche et simplifier leur gestion quotidienne.</p>
    `
  },
  {
    id: "news-5",
    type: "Événement",
    date: "14 Septembre 2026",
    title: "Rencontre Débat à Bruxelles : « Restaurer la sécurité et l'autorité dans nos gares et métros »",
    author: "Section Bruxelles-Capitale",
    readingTime: "Inscription ouverte",
    category: "Événement",
    summary: "Table ronde citoyenne avec des représentants des usagers de la STIB/SNCB, des commerçants et des experts de la sécurité urbaine.",
    badge: "Bruxelles",
    image: "/images/pillar-securite.jpg",
    content: `
      <p>Face à la dégradation de la tranquillité dans plusieurs stations et quartiers bruxellois, Force Commune invite les riverains et usagers à une grande table ronde pour présenter notre plan d'action d'urgence pour la capitale.</p>
    `
  },
  {
    id: "news-6",
    type: "Tribune",
    date: "10 Juillet 2026",
    title: "« L'Écologie ne marchera jamais si elle continue d'exclure les classes moyennes »",
    author: "Pôle Transition Énergétique",
    readingTime: "4 min de lecture",
    category: "Tribune",
    summary: "Plaidoyer pour une écologie de souveraineté basée sur le nucléaire moderne, la fiabilité ferroviaire et l'accompagnement des artisans sans taxes punitives.",
    badge: "Énergie",
    image: "/images/pillar-ecologie.jpg",
    content: `
      <p>L'écologie punitive dresse les citoyens contre la transition. Pour réussir, nous devons proposer des alternatives concrètes : des trains à l'heure, une énergie stable et bon marché, et des aides à l'isolation sans tracasseries administratives.</p>
    `
  }
];

export const regionalTourEvents = [
  { city: "Namur", venue: "Palais des Congrès", date: "28 Août 2026", time: "19h30", topic: "Pouvoir d'achat & Fiscalité" },
  { city: "Bruxelles", venue: "Espace Flagey", date: "14 Septembre 2026", time: "19h00", topic: "Sécurité urbaine & Transports" },
  { city: "Liège", venue: "Cité Miroir", date: "22 Septembre 2026", time: "19h30", topic: "Artisanat, PME & Réindustrialisation" },
  { city: "Charleroi", venue: "Dôme de Charleroi", date: "03 Octobre 2026", time: "19h30", topic: "Emploi & Revalorisation du travail" },
  { city: "Mons", venue: "Lotto Mons Expo", date: "15 Octobre 2026", time: "19h00", topic: "École de l'excellence & Jeunesse" },
  { city: "Wavre", venue: "La Sucrerie", date: "29 Octobre 2026", time: "20h00", topic: "Exemplarité & Réforme de l'État" },
  { city: "Tournai", venue: "Maison de la Culture", date: "12 Novembre 2026", time: "19h30", topic: "Santé, Hôpitaux & Proximité" }
];
