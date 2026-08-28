(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}})();const $=[{id:"pouvoir-achat",number:"01",title:"Pouvoir d’Achat & Valeur du Travail",subtitle:"Rendre au travail sa juste dignité et son pouvoir d'émancipation",image:"/images/pillar-pouvoir-achat.jpg",badge:"Priorité Économique",summary:"En Belgique, l'écart entre le travail et l'inactivité s'est dangereusement réduit. Nous proposons un choc fiscal immédiat sur les salaires et les indépendants pour garantir au moins 350 € nets supplémentaires par mois à ceux qui font tourner le pays.",highlights:["Baisse de 5% du précompte professionnel pour les bas et moyens salaires","Défiscalisation intégrale des heures supplémentaires sans plafond annuel","Harmonisation du statut fiscal et social des indépendants avec celui des salariés","Suppression des taxes bureaucratiques sur les PME et artisans locaux"],deepContent:`
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
    `},{id:"securite",number:"03",title:"Sécurité & Tranquillité Publique",subtitle:"Rétablir l'autorité républicaine et la quiétude dans nos quartiers",image:"/images/pillar-securite.jpg",badge:"Autorité & Justice",summary:"La première des libertés est la sécurité. Force Commune réaffirme la primauté de la loi, le soutien inconditionnel à nos policiers et magistrats, et la fin de l'impunité pour les récidivistes qui pourrissent le quotidien.",highlights:["Recrutement de 3 000 policiers de terrain supplémentaires et réarmement matériel","Exécution effective des peines dès le premier mois de prison ferme","Création de centres éducatifs fermés pour les mineurs délinquants récidivistes","Sécurisation renforcée 24/7 des gares, métros et réseaux de transport en commun"],deepContent:`
      <h4>Le droit fondamental à la quiétude</h4>
      <p>Dans nos gares, nos centres-villes et nos quartiers périurbains, le sentiment d'abandon grandit. Les commerçants et les familles sont les premières victimes d'une justice lente et encombrée.</p>
      
      <h4>Nos 3 mesures d'urgence</h4>
      <div class="modal-measures-list">
        <div class="modal-measure-item">
          <strong>1. Justice rapide & Tolérance zéro</strong> : Comparution immédiate effective pour les délits flagrants et fin du classement sans suite systématique pour les agressions du quotidien.
        </div>
        <div class="modal-measure-item">
          <strong>2. Police de proximité respectée</strong> : Sanctions pénales alourdies et incompressibles pour tout outrage ou agression contre les policiers, pompiers et soignants.
        </div>
        <div class="modal-measure-item">
          <strong>3. Plan national contre les trafics de drogue</strong> : Opérations coups de poing coordonnées dans les ports et nœuds logistiques avec saisie immédiate des avoirs criminels.
        </div>
      </div>
    `},{id:"education",number:"04",title:"Éducation Exigeante & Mérite",subtitle:"L'école de l'excellence, de la discipline et de la promotion sociale",image:"/images/pillar-education.jpg",badge:"Avenir & Savoir",summary:"L'ascenseur social passe par le savoir et l'effort. Nous voulons restaurer l'autorité des enseignants, recentrer l'école sur les savoirs fondamentaux et revaloriser massivement les filières professionnelles et d'apprentissage.",highlights:["Recentrage prioritaire sur le français, les mathématiques et la logique scientifique","Revalorisation salariale et statutaire des enseignants en début et milieu de carrière","Revalorisation prestigieuse de l'enseignement technique, manuel et de l'artisanat","Rétablissement des notes claires, des examens nationaux et de la discipline en classe"],deepContent:`
      <h4>Refonder l'école de la République</h4>
      <p>Les réformes pédagogistes successives ont nivelé les exigences par le bas et épuisé les enseignants belges. L'école doit redevenir le sanctuaire du savoir où chacun progresse grâce à son mérite et son travail.</p>
      
      <h4>Nos 3 mesures d'urgence</h4>
      <div class="modal-measures-list">
        <div class="modal-measure-item">
          <strong>1. Maîtrise des fondamentaux dès 6 ans</strong> : 70% du temps en primaire consacré à la lecture fluide, l'écriture sans faute et le calcul mental.
        </div>
        <div class="modal-measure-item">
          <strong>2. Pacte de confiance avec les professeurs</strong> : Allègement radical de la paperasse administrative pour permettre aux enseignants de se concentrer sur la transmission.
        </div>
        <div class="modal-measure-item">
          <strong>3. Filières d'excellence technique</strong> : Investissements massifs dans les ateliers scolaires et partenariat direct avec les entreprises locales créatrices d'emplois.
        </div>
      </div>
    `},{id:"ecologie",number:"05",title:"Écologie d’Adhésion & Bon Sens",subtitle:"Une transition écologique concrète, souveraine et non punitive",image:"/images/pillar-ecologie.jpg",badge:"Souveraineté & Climat",summary:"L'écologie ne doit pas être une machine à punir les ménages et les travailleurs qui dépendent de leur véhicule ou de leur chaudière. Nous défendons une écologie technologique, basée sur l'énergie décarbonée stable et des transports fiables.",highlights:["Prolongation sans ambiguïté du parc nucléaire belge et relance de la R&D sur les SMR","Grand plan de modernisation et ponctualité de la SNCB et des réseaux de tramways","Primes directes et sans avance de trésorerie pour l'isolation des logements des ménages modestes","Soutien aux agriculteurs et producteurs locaux contre les normes européennes absurdes"],deepContent:`
      <h4>Pour une écologie qui rassemble</h4>
      <p>Les taxes carbone punitives et les zones de basses émissions mal pensées pénalisent ceux qui n'ont pas les moyens de changer immédiatement de véhicule. Nous refusons l'écologie de salon.</p>
      
      <h4>Nos 3 mesures d'urgence</h4>
      <div class="modal-measures-list">
        <div class="modal-measure-item">
          <strong>1. Souveraineté énergétique décarbonée</strong> : Maintien et modernisation des réacteurs nucléaires pour garantir une électricité bon marché et propre à nos foyers et industries.
        </div>
        <div class="modal-measure-item">
          <strong>2. Transports ferroviaires et périurbains</strong> : Rénovation des lignes secondaires, cadencement renforcé le matin et le soir, et sécurité totale à bord.
        </div>
        <div class="modal-measure-item">
          <strong>3. Rénovation thermique accessible</strong> : Guichet unique pour les artisans du bâtiment et aides directes déduites sur facture pour les propriétaires et locataires.
        </div>
      </div>
    `}],D=[{id:"all",name:"Toutes les propositions",icon:"layers"},{id:"pouvoir-achat",name:"Fiscalité & Pouvoir d'achat",icon:"trending-up"},{id:"exemplarite",name:"Exemplarité & Institutions",icon:"shield-check"},{id:"securite",name:"Sécurité & Justice",icon:"scale"},{id:"education",name:"École & Savoirs",icon:"graduation-cap"},{id:"energie-ecologie",name:"Énergie & Écologie",icon:"zap"},{id:"sante",name:"Santé & Hôpital",icon:"heart-pulse"}],k=[{id:"prop-1",category:"pouvoir-achat",title:"Le 'Choc Net' : +350 € par mois sur les salaires moyens",tagline:"Baisser immédiatement les cotisations et élargir la première tranche fiscale",costing:"Autofinancé par la rationalisation des structures publiques",timeline:"Applicable dès les 100 premiers jours de mandat",badge:"Mesure Phare #1",summary:"Rehaussement de la quotité exemptée d'impôt à 14 000 €/an et allègement des cotisations ONSS pour que chaque heure travaillée rapporte sensiblement plus que l'assistance.",details:["Augmentation directe du salaire net perçu dès le premier euro gagné","Suppression du piège à l'emploi qui décourage la reprise d'activité","Plafonnement des charges patronales sur les créations de premiers emplois en PME"],searchKeywords:"salaire net impôt fiscalité pouvoir d'achat onss travail ouvrier employé"},{id:"prop-2",category:"pouvoir-achat",title:"Défiscalisation intégrale des heures supplémentaires",tagline:"1h supplémentaire prestée = 1h intégralement payée en net",costing:"Gain de productivité estimé à +1.4% de PIB",timeline:"Entrée en vigueur immédiate",badge:"Travail & Mérite",summary:"Zéro taxe, zéro cotisation sur les heures supplémentaires pour le salarié comme pour l'employeur, jusqu'à 360 heures par an.",details:["Récompenser concrètement le volontariat et les efforts supplémentaires","Permettre aux entreprises de faire face aux pics d'activité sans surcoût administratif punitif","Application universelle dans le secteur privé et public (soignants, forces de l'ordre)"],searchKeywords:"heures supplémentaires heures sup défiscalisation rémunération heures de nuit"},{id:"prop-3",category:"exemplarite",title:"Réduction de 30% des parlements et fin du Sénat",tagline:"Un État allégé, plus agile et moins coûteux pour les contribuables",costing:"Économie de 1,2 milliard € par législature",timeline:"Projet de révision constitutionnelle",badge:"Nettoyage Institutionnel",summary:"Suppression définitive du Sénat belge, réduction d'un tiers du nombre de députés régionaux et fédéraux, et fusion des ministères redondants.",details:["Fin des cumuls de mandats et des jetons de présence multiples dans les intercommunales","Plafonnement des rémunérations politiques à 2 fois le salaire moyen belge","Audit citoyen indépendant annuel sur les dépenses de communication des partis"],searchKeywords:"parlement sénat députés ministres particratie élus salaires exemplarité"},{id:"prop-4",category:"exemplarite",title:"Casier vierge et inéligibilité définitive en cas de corruption",tagline:"Tolérance zéro pour les atteintes à la probité publique",costing:"Coût nul, gain de confiance démocratique inestimable",timeline:"Vote prioritaire",badge:"Éthique Publique",summary:"Interdiction définitive et imprescriptible d'exercer tout mandat électif ou fonction publique pour toute personne condamnée pour détournement de fonds ou favoritisme.",details:["Remboursement obligatoire de chaque euro détourné sur les biens personnels","Suppression des régimes de pensions dorées pour les élus sanctionnés","Protection juridique et financière intégrale pour les lanceurs d'alerte citoyens"],searchKeywords:"corruption casier judiciaire transparence fraude probité éthique"},{id:"prop-5",category:"securite",title:"3 000 policiers de terrain supplémentaires et justice en temps réel",tagline:"Rétablir l'autorité républicaine et la sécurité dans chaque commune",costing:"420 millions € financés par la fin des gaspillages administratifs",timeline:"Plan quinquennal 2026-2030",badge:"Sécurité & Ordre",summary:"Renforcement massif des effectifs sur le terrain, simplification des procédures d'audition pour libérer du temps d'enquête et comparution immédiate.",details:["Présence policière renforcée dans les transports en commun et les gares 24h/24","Création de brigades spécialisées anti-dealers et anti-squat","Exécution effective et immédiate des peines dès le premier jour de condamnation ferme"],searchKeywords:"police sécurité commissariat justice magistrats délinquance récidive gares"},{id:"prop-6",category:"securite",title:"Sanctions incompressibles pour les violences contre les agents publics",tagline:"Protéger ceux qui nous protègent et nous soignent",costing:"Neutre",timeline:"Dès la 1ère session parlementaire",badge:"Respect Républicain",summary:"Toute agression physique ou verbale contre un policier, pompier, ambulancier ou enseignant fera l'objet d'une peine minimale incompressible sans sursis.",details:["Suppression automatique des allocations pour les délinquants majeurs multirécidivistes","Responsabilisation financière des parents de mineurs délinquants pour les dégradations","Création de centres éducatifs fermés disciplinaires pour mineurs multirécidivistes"],searchKeywords:"pompiers soignants policiers enseignants agression respect peine plancher"},{id:"prop-7",category:"education",title:"Recentrage sur les fondamentaux : 70% du temps aux savoirs essentiels",tagline:"Lecture, écriture sans faute, calcul mental et histoire partagée dès 6 ans",costing:"Réorganisation budgétaire sans hausse d'impôt",timeline:"Rentrée scolaire suivante",badge:"École de l'Excellence",summary:"Remplacement des modules pédagogiques flous par un apprentissage structuré et rigoureux du français et des mathématiques au primaire et au premier cycle du secondaire.",details:["Dictée quotidienne et maîtrise de la grammaire dès le CE1","Examens nationaux standardisés et anonymes en fin de cycle pour évaluer le niveau réel","Interdiction totale des smartphones dans l'enceinte de tous les établissements jusqu'à 16 ans"],searchKeywords:"école éducation professeurs enseignants français maths dictée savoirs primaire"},{id:"prop-8",category:"education",title:"Revalorisation prestigieuse de l'enseignement technique et manuel",tagline:"Faire des filières professionnelles des voies d'excellence reconnues",costing:"180 millions € en bourses d'équipement et modernisation des ateliers",timeline:"Déploiement sur 3 ans",badge:"Mérite & Métiers",summary:"Fin de la relégation scolaire : transformation des filières techniques avec du matériel de pointe, apprentissage renforcé et bourses au mérite pour les futurs artisans.",details:["Primes d'équipement pour chaque jeune s'orientant vers les métiers en pénurie (menuiserie, électricité, usinage, soins)","Co-construction des programmes avec les fédérations d'artisans et entreprises locales","Reconnaissance du diplôme de maître-artisan au niveau équivalent bachelier"],searchKeywords:"artisanat technique filière professionnelle apprentissage métiers manuels"},{id:"prop-9",category:"energie-ecologie",title:"Prolongation décennale du nucléaire et relance des SMR",tagline:"Garantir une électricité abondante, décarbonée et à coût maîtrisé",costing:"Investissement stratégique rentable à 100%",timeline:"Décision stratégique immédiate",badge:"Souveraineté Énergétique",summary:"Prolongation de l'ensemble des réacteurs exploitables en Belgique et investissement conjoint public-privé dans les petits réacteurs modulaires de 4e génération.",details:["Protection des ménages et des entreprises belges contre les flambées des prix du gaz","Maintien de milliers d'emplois hautement qualifiés dans le secteur nucléaire belge","Décarbonation massive sans rupture d'approvisionnement en hiver"],searchKeywords:"nucléaire électricité énergie doel tihange smr souveraineté facture énergétique"},{id:"prop-10",category:"energie-ecologie",title:"Plan Rail & Trams fiables : Ponctualité garantie et sécurité à bord",tagline:"Une mobilité collective moderne qui respecte le temps des usagers",costing:"650 millions € réorientés vers le matériel roulant et la ponctualité",timeline:"Plan d'urgence 2026-2028",badge:"Mobilité Réelle",summary:"Rénovation des rames SNCB et des infrastructures de tramway, cadencement renforcé aux heures de pointe et remboursement automatique en cas de retard récurrent.",details:["Remboursement instantané sur pass Navigo/MoBIB dès 15 minutes de retard injustifié","Doublement des équipes de sécurité ferroviaire Securail dans les gares sensibles","Fin de l'écologie punitive : suppression des amendes absurdes pour les véhicules populaires"],searchKeywords:"sncb train tram mobilité transports retards mobib tec stib de lijn"},{id:"prop-11",category:"sante",title:"Revalorisation statutaire et salariale des infirmiers et soignants",tagline:"Des conditions dignes pour ceux qui veillent sur nos vies",costing:"380 millions € alloués au personnel de chevet",timeline:"Application dès la 1ère année",badge:"Santé & Dignité",summary:"Augmentation des ratios soignant/patient dans les hôpitaux, prime de nuit et pénibilité majorée, et décharge administrative des médecins pour soigner plus de patients.",details:["Recrutement d'assistants administratifs hospitaliers pour décharger les soignants de la paperasserie","Majoration de 25% des primes de garde et de week-end pour le personnel soignant","Aides directes à l'installation des jeunes médecins généralistes dans les zones sous-dotées"],searchKeywords:"santé infirmière hôpital médecins soignants urgences garde soins"}],A=[{id:"news-1",type:"Tribune",date:"12 Août 2026",title:"« Pourquoi nous refusons de laisser la Belgique aux mains de la particratie »",author:"Comité Fondateur Force Commune",readingTime:"4 min de lecture",category:"Tribune",summary:"Tribune publiée dans la presse économique et citoyenne : comment le modèle de gestion de nos gouvernements successifs a découragé le travail et comment Force Commune remet ceux qui font au centre des décisions.",badge:"À la Une",image:"/images/hero.jpg",content:`
      <p>Pendant des décennies, le paysage politique belge s'est enfermé dans des querelles d'appareils, des négociations de couloirs interminables et une multiplication insensée de mandats rémunérés. Pendant ce temps, sur le terrain, nos artisans se battent contre la bureaucratie, nos infirmières manquent de moyens aux urgences et nos enseignants sont submergés par des directives déconnectées.</p>
      <p>Force Commune n'est pas un parti de plus. C'est le mouvement citoyen de la réalité concrète. Nous ne venons pas chercher des postes, nous venons réformer l'État avec le bon sens de ceux qui gèrent une entreprise, tiennent une classe ou soignent des patients chaque matin.</p>
      <p>Notre engagement est clair : nous serons intraitables sur l'exemplarité, radicaux sur la baisse des taxes sur le travail, et inflexibles sur la sécurité de nos quartiers.</p>
    `},{id:"news-2",type:"Événement",date:"28 Août 2026",title:"Grande Assemblée Citoyenne de rentrée à Namur : « Le Choc Net pour nos salaires »",author:"Fédération Namur-Luxembourg",readingTime:"Inscription ouverte",category:"Événement",summary:"Rencontre publique et atelier participatif avec 350 professionnels, indépendants et salariés namurois autour de la réforme fiscale Force Commune.",badge:"Réunion Publique",image:"/images/pillar-pouvoir-achat.jpg",content:`
      <p>Rejoignez-nous le jeudi 28 août à 19h30 au Palais des Congrès de Namur pour une soirée d'échange direct et sans langue de bois. Les propositions sur la fiscalité et le pouvoir d'achat y seront présentées et débattues avec les citoyens présents.</p>
      <p>Entrée libre sur inscription préalable. Parking disponible et retransmission en direct sur notre plateforme citoyenne.</p>
    `},{id:"news-3",type:"Communiqué",date:"5 Août 2026",title:"Soutien total aux soignants de garde : Pour une revalorisation immédiate des astreintes de nuit",author:"Pôle Santé & Solidarité",readingTime:"3 min de lecture",category:"Communiqué",summary:"Force Commune dénonce le blocage budgétaire fédéral sur la revalorisation des heures de nuit du personnel hospitalier et formule 3 exigences immédiates.",badge:"Santé",image:"/images/pillar-exemplarite.jpg",content:`
      <p>Le personnel soignant ne peut plus se contenter de promesses sans lendemain. Alors que l'inflation pèse sur les ménages, nos soignants assurent la continuité des soins dans des conditions d'épuisement inacceptables.</p>
      <p>Nous demandons l'application immédiate de notre mesure phare : défiscalisation intégrale des heures de garde et augmentation de 25% des primes de pénibilité.</p>
    `},{id:"news-4",type:"Terrain",date:"22 Juillet 2026",title:"Tournée des PME et ateliers à Charleroi et Liège : Ce que demandent vraiment nos artisans",author:"Équipe Économie Réelle",readingTime:"5 min de lecture",category:"Terrain",summary:"Retour en images sur notre immersion de 3 jours aux côtés des chaudronniers, menuisiers, transporteurs et restaurateurs du bassin industriel wallon.",badge:"Immersion Terrain",image:"/images/pillar-pouvoir-achat.jpg",content:`
      <p>Entre contrôles administratifs redondants et factures d'énergie prohibitives, les entrepreneurs de nos régions font preuve d'une résilience remarquable. Force Commune a compilé leurs 12 propositions concrètes pour supprimer les freins à l'embauche et simplifier leur gestion quotidienne.</p>
    `},{id:"news-5",type:"Événement",date:"14 Septembre 2026",title:"Rencontre Débat à Bruxelles : « Restaurer la sécurité et l'autorité dans nos gares et métros »",author:"Section Bruxelles-Capitale",readingTime:"Inscription ouverte",category:"Événement",summary:"Table ronde citoyenne avec des représentants des usagers de la STIB/SNCB, des commerçants et des experts de la sécurité urbaine.",badge:"Bruxelles",image:"/images/pillar-securite.jpg",content:`
      <p>Face à la dégradation de la tranquillité dans plusieurs stations et quartiers bruxellois, Force Commune invite les riverains et usagers à une grande table ronde pour présenter notre plan d'action d'urgence pour la capitale.</p>
    `},{id:"news-6",type:"Tribune",date:"10 Juillet 2026",title:"« L'Écologie ne marchera jamais si elle continue d'exclure les classes moyennes »",author:"Pôle Transition Énergétique",readingTime:"4 min de lecture",category:"Tribune",summary:"Plaidoyer pour une écologie de souveraineté basée sur le nucléaire moderne, la fiabilité ferroviaire et l'accompagnement des artisans sans taxes punitives.",badge:"Énergie",image:"/images/pillar-ecologie.jpg",content:`
      <p>L'écologie punitive dresse les citoyens contre la transition. Pour réussir, nous devons proposer des alternatives concrètes : des trains à l'heure, une énergie stable et bon marché, et des aides à l'isolation sans tracasseries administratives.</p>
    `}],B=[{city:"Namur",venue:"Palais des Congrès",date:"28 Août 2026",time:"19h30",topic:"Pouvoir d'achat & Fiscalité"},{city:"Bruxelles",venue:"Espace Flagey",date:"14 Septembre 2026",time:"19h00",topic:"Sécurité urbaine & Transports"},{city:"Liège",venue:"Cité Miroir",date:"22 Septembre 2026",time:"19h30",topic:"Artisanat, PME & Réindustrialisation"},{city:"Charleroi",venue:"Dôme de Charleroi",date:"03 Octobre 2026",time:"19h30",topic:"Emploi & Revalorisation du travail"},{city:"Mons",venue:"Lotto Mons Expo",date:"15 Octobre 2026",time:"19h00",topic:"École de l'excellence & Jeunesse"},{city:"Wavre",venue:"La Sucrerie",date:"29 Octobre 2026",time:"20h00",topic:"Exemplarité & Réforme de l'État"},{city:"Tournai",venue:"Maison de la Culture",date:"12 Novembre 2026",time:"19h30",topic:"Santé, Hôpitaux & Proximité"}],z=[{id:"test-1",name:"Sophie Delval",age:"39 ans",profession:"Infirmière urgentiste",location:"Namur",avatar:"/images/hero.jpg",quote:"Aux urgences, nous donnons tout jour et nuit. Quand je vois que nos heures supplémentaires sont ponctionnées à plus de 50% par l'État pendant que les parlements votent des budgets de fonctionnement sans limite, je dis stop. Force Commune est le premier mouvement qui parle notre langage : le langage du terrain.",tag:"Santé Publique"},{id:"test-2",name:"Marc Vandamme",age:"48 ans",profession:"Artisan menuisier indépendant",location:"Liège",avatar:"/images/pillar-pouvoir-achat.jpg",quote:"J'emploie trois apprentis et je passe un tiers de ma semaine à remplir des formulaires fiscaux et environnementaux incompréhensibles. Ce que nous voulons, ce n'est pas des subventions, c'est qu'on nous laisse travailler et transmettre notre savoir-faire sans nous assommer de taxes.",tag:"Artisanat & PME"},{id:"test-3",name:"Youssef Belkacem",age:"33 ans",profession:"Professeur de mathématiques en secondaire",location:"Bruxelles (Molenbeek-Saint-Gilles)",avatar:"/images/pillar-education.jpg",quote:"L'école doit être le lieu où l'on élève les enfants par l'exigence et le respect des règles, pas par le renoncement. Le projet de Force Commune pour l'école remet le savoir, la dictée, les maths et l'autorité des enseignants au centre. C'est exactement ce dont nos élèves ont besoin.",tag:"Éducation & Jeunesse"},{id:"test-4",name:"Claire Henrard",age:"45 ans",profession:"Exploitante agricole et maraîchère",location:"Brabant Wallon (Jodoigne)",avatar:"/images/hero.jpg",quote:"Nous nourrissons le pays avec amour et rigueur, mais nous sommes pris en étau entre la grande distribution et des normes technocratiques absurdes. Force Commune prône une écologie d'adhésion qui fait confiance aux producteurs de terrain plutôt que de les stigmatiser.",tag:"Agriculture & Terroirs"},{id:"test-5",name:"Thomas Meunier",age:"31 ans",profession:"Ingénieur mécatronique en PME industrielle",location:"Charleroi",avatar:"/images/pillar-pouvoir-achat.jpg",quote:"La Wallonie a un potentiel industriel immense avec ses techniciens et ingénieurs. Force Commune a le courage de défendre une énergie nucléaire propre et stable et une fiscalité compétitive pour relocaliser les ateliers chez nous.",tag:"Industrie & Innovation"}];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=(e,t,s=[])=>{const r=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(a=>{r.setAttribute(a,String(t[a]))}),s.length&&s.forEach(a=>{const l=R(...a);r.appendChild(l)}),r};var H=([e,t,s])=>R(e,t,s);/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=e=>Array.from(e.attributes).reduce((t,s)=>(t[s.name]=s.value,t),{}),G=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",O=e=>e.flatMap(G).map(s=>s.trim()).filter(Boolean).filter((s,r,a)=>a.indexOf(s)===r).join(" "),K=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,s,r)=>s.toUpperCase()+r.toLowerCase()),L=(e,{nameAttr:t,icons:s,attrs:r})=>{var M;const a=e.getAttribute(t);if(a==null)return;const l=K(a),c=s[l];if(!c)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const i=V(e),[d,u,x]=c,b={...u,"data-lucide":a,...r,...i},C=O(["lucide",`lucide-${a}`,i,r]);C&&Object.assign(b,{class:C});const N=H([d,b,x]);return(M=e.parentNode)==null?void 0:M.replaceChild(N,e)};/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=["svg",o,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=["svg",o,[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=["svg",o,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=["svg",o,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=["svg",o,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=["svg",o,[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=["svg",o,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=["svg",o,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=["svg",o,[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=["svg",o,[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=["svg",o,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=["svg",o,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=["svg",o,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=["svg",o,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=["svg",o,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=["svg",o,[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=["svg",o,[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=["svg",o,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=["svg",o,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=["svg",o,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=["svg",o,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=["svg",o,[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}],["path",{d:"M18 14h-8"}],["path",{d:"M15 18h-5"}],["path",{d:"M10 6h8v4h-8V6Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=["svg",o,[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"M7 21h10"}],["path",{d:"M12 3v18"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=["svg",o,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=["svg",o,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=["svg",o,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=["svg",o,[["line",{x1:"4",x2:"4",y1:"21",y2:"14"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=["svg",o,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=["svg",o,[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=["svg",o,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=["svg",o,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=["svg",o,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=["svg",o,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=({icons:e={},nameAttr:t="data-lucide",attrs:s={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const r=document.querySelectorAll(`[${t}]`);if(Array.from(r).forEach(a=>L(a,{nameAttr:t,icons:e,attrs:s})),t==="data-lucide"){const a=document.querySelectorAll("[icon-name]");a.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(a).forEach(l=>L(l,{nameAttr:"icon-name",icons:e,attrs:s})))}},g={Compass:ee,TrendingUp:we,ShieldCheck:be,Scale:ge,GraduationCap:ie,Zap:Me,HeartPulse:ne,Heart:re,ArrowRight:J,CheckCircle:Y,X:Ce,Menu:pe,Home:oe,Users:qe,CheckSquare:ye,Newspaper:me,Mail:ce,Send:xe,Lock:de,Download:se,Search:ve,Calendar:Q,MapPin:ue,Clock:_,Sparkles:fe,ChevronRight:W,Layers:le,FileText:ae,HelpCircle:X,Building:Z,Briefcase:U,Sliders:he,DollarSign:te},n={currentRoute:"accueil",activeProposalCategory:"all",proposalSearchQuery:"",selectedDonationAmount:50,calcGrossSalary:3200,calcProfile:"salarie"},p=document.getElementById("app-root"),j=document.getElementById("site-header"),y=document.getElementById("mobile-drawer"),Le=document.getElementById("mobile-menu-btn"),T=document.getElementById("menu-icon-open"),F=document.getElementById("menu-icon-close"),f=document.getElementById("pillar-modal"),je=document.getElementById("pillar-modal-content"),E=document.getElementById("manifeste-modal"),P=document.getElementById("donation-modal"),Ee=document.getElementById("toast-container");function v(e,t="info"){const s=document.createElement("div");s.className="toast-msg",s.innerHTML=`
    <i data-lucide="${t==="success"?"check-circle":"sparkles"}" class="w-5 h-5 text-orange-500 flex-shrink-0"></i>
    <span>${e}</span>
  `,Ee.appendChild(s),m({icons:g}),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateX(100%)",s.style.transition="all 0.3s ease",setTimeout(()=>s.remove(),300)},4e3)}function Pe(){return`
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
          ${$.map((e,t)=>`
            <div class="pillar-card group ${t===4?"md:col-span-2 lg:col-span-1":""}">
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

                <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button 
                    class="btn btn-navy text-xs py-2 px-4 w-full justify-between group-hover:border-orange-500" 
                    data-open-pillar="${e.id}"
                  >
                    <span>Consulter la feuille de route</span>
                    <i data-lucide="chevron-right" class="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform"></i>
                  </button>
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
          ${k.slice(0,6).map(e=>`
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
          ${z.slice(0,3).map(e=>`
            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-orange-300 transition-colors">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="badge badge-orange text-[10px]">${e.tag}</span>
                  <span class="text-xs text-slate-400 font-medium">${e.location}</span>
                </div>
                <p class="text-slate-700 text-sm leading-relaxed italic">
                  « ${e.quote} »
                </p>
              </div>

              <div class="pt-4 border-t border-slate-200 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-navy-900 text-orange-400 font-bold flex items-center justify-center font-display text-sm">
                  ${e.name.charAt(0)}
                </div>
                <div>
                  <h4 class="font-bold text-navy-950 text-sm">${e.name}</h4>
                  <p class="text-xs text-slate-500">${e.profession} (${e.age})</p>
                </div>
              </div>
            </div>
          `).join("")}
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
            ${A.slice(0,2).map(e=>`
              <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                <div class="h-44 bg-navy-950 relative">
                  <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover opacity-85">
                  <span class="absolute top-3 left-3 badge badge-dark">${e.category}</span>
                </div>
                <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div class="space-y-2">
                    <span class="text-xs text-slate-400 font-medium">${e.date}</span>
                    <h3 class="font-bold text-base text-navy-950 line-clamp-2 hover:text-orange-600 transition-colors">
                      ${e.title}
                    </h3>
                    <p class="text-xs text-slate-600 line-clamp-3">
                      ${e.summary}
                    </p>
                  </div>
                  <a href="#actualites" class="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 pt-2" data-route="actualites">
                    <span>Lire l'article complet</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                  </a>
                </div>
              </div>
            `).join("")}
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
                ${B.slice(0,3).map(e=>`
                  <div class="p-3 rounded-xl bg-navy-900 border border-navy-800 flex items-start justify-between gap-3">
                    <div>
                      <div class="font-bold text-sm text-white">${e.city}</div>
                      <div class="text-xs text-slate-400">${e.venue} • ${e.date} (${e.time})</div>
                      <div class="text-[11px] text-orange-400 font-medium mt-0.5">${e.topic}</div>
                    </div>
                    <button class="btn-rsvp btn btn-primary text-[11px] py-1 px-2.5 rounded-md" data-city="${e.city}">
                      S'inscrire
                    </button>
                  </div>
                `).join("")}
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
  `}function Se(){return`
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
          ${[{num:"01",title:"Zéro Cumul des Mandats",desc:"Un élu, un seul mandat. Fin du cumul des fonctions de bourgmestre, député et administrateur d'intercommunale."},{num:"02",title:"Expérience Professionnelle Réelle",desc:"Tout candidat aux élections doit justifier d'au moins 5 années d'activité professionnelle rémunérée hors des partis."},{num:"03",title:"Plafonnement des Indemnités",desc:"Aucun représentant Force Commune ne percevra plus de 2 fois le salaire médian des travailleurs belges."},{num:"04",title:"Transparence Totale des Comptes",desc:"Publication trimestrielle en ligne de l'intégralité des dépenses et recettes du mouvement au centime près."},{num:"05",title:"Casier Judiciaire Vierge",desc:"Exclusion immédiate et inéligibilité à vie pour toute condamnation liée à la gestion publique ou à la fraude."},{num:"06",title:"Financement 100% Citoyen",desc:"Refus de tout financement opaque, lobby industriel ou subvention conditionnée."},{num:"07",title:"Commissions Citoyennes de Contrôle",desc:"Nos élus sont évalués annuellement par des jurys de citoyens tirés au sort parmi les adhérents."},{num:"08",title:"Suppression des Privilèges de Pension",desc:"Cotisation et calcul de pension identiques au régime général des salariés et indépendants."},{num:"09",title:"Discipline Républicaine & Respect",desc:"Condamnation sans concession de toute dérive violente ou communautariste."},{num:"10",title:"Obligation de Résultat",desc:"Chaque proposition adoptée fait l'objet d'une clause d'évaluation chiffrée après 24 mois."}].map(e=>`
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
  `}function w(){const e=k.filter(t=>{const s=n.activeProposalCategory==="all"||t.category===n.activeProposalCategory,r=n.proposalSearchQuery===""||t.title.toLowerCase().includes(n.proposalSearchQuery.toLowerCase())||t.summary.toLowerCase().includes(n.proposalSearchQuery.toLowerCase())||t.searchKeywords.toLowerCase().includes(n.proposalSearchQuery.toLowerCase());return s&&r});return`
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
                  <button type="button" class="sim-btn text-xs py-2 px-3 rounded-lg border font-semibold ${n.calcProfile==="salarie"?"bg-navy-900 text-white border-navy-900":"bg-slate-50 text-slate-700 border-slate-200"}" data-profile="salarie">Salarié</button>
                  <button type="button" class="sim-btn text-xs py-2 px-3 rounded-lg border font-semibold ${n.calcProfile==="independant"?"bg-navy-900 text-white border-navy-900":"bg-slate-50 text-slate-700 border-slate-200"}" data-profile="independant">Indépendant</button>
                  <button type="button" class="sim-btn text-xs py-2 px-3 rounded-lg border font-semibold ${n.calcProfile==="soignant"?"bg-navy-900 text-white border-navy-900":"bg-slate-50 text-slate-700 border-slate-200"}" data-profile="soignant">Soignant / Prof</button>
                </div>
              </div>

              <div>
                <div class="flex justify-between items-center mb-1">
                  <label class="text-xs font-bold text-slate-700 uppercase tracking-wider">Salaire Brut Mensuel :</label>
                  <span class="text-sm font-extrabold text-navy-900" id="sim-salary-display">${n.calcGrossSalary} € / mois</span>
                </div>
                <input 
                  type="range" 
                  min="2000" 
                  max="6500" 
                  step="100" 
                  value="${n.calcGrossSalary}" 
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
            ${D.map(t=>`
              <button 
                class="category-pill whitespace-nowrap text-xs font-bold py-2 px-3.5 rounded-xl border transition-all ${n.activeProposalCategory===t.id?"bg-navy-900 text-white border-navy-900 shadow-sm":"bg-white text-slate-700 border-slate-200 hover:border-orange-400"}"
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
              value="${n.proposalSearchQuery}"
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
  `}function $e(){return`
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
          ${A.map(e=>`
            <article class="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all">
              <div class="h-48 bg-navy-950 relative">
                <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover opacity-85">
                <span class="absolute top-3 left-3 badge badge-dark">${e.category}</span>
                <span class="absolute bottom-3 right-3 text-[10px] bg-navy-950/80 px-2 py-0.5 rounded text-slate-300">${e.readingTime}</span>
              </div>
              
              <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div class="space-y-2.5">
                  <div class="text-xs text-slate-400 font-semibold">${e.date} • ${e.author}</div>
                  <h3 class="text-lg font-bold text-navy-950 font-display hover:text-orange-600 transition-colors">
                    ${e.title}
                  </h3>
                  <div class="text-xs text-slate-600 leading-relaxed prose prose-sm">
                    ${e.summary}
                  </div>
                </div>

                <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span class="badge badge-orange text-[10px]">${e.badge}</span>
                  <button class="text-xs font-bold text-navy-900 hover:text-orange-600 flex items-center gap-1" onclick="alert('Article archivé dans la lettre officielle.')">
                    <span>Lire</span>
                    <i data-lucide="chevron-right" class="w-4 h-4 text-orange-500"></i>
                  </button>
                </div>
              </div>
            </article>
          `).join("")}
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
            ${B.map(e=>`
              <div class="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-navy-950 text-base">${e.city}</span>
                    <span class="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">${e.topic}</span>
                  </div>
                  <div class="text-xs text-slate-500 flex items-center gap-2">
                    <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400"></i>
                    <span>${e.venue}</span>
                    <span>•</span>
                    <i data-lucide="calendar" class="w-3.5 h-3.5 text-slate-400"></i>
                    <span>${e.date} à ${e.time}</span>
                  </div>
                </div>
                <button class="btn-rsvp btn btn-primary text-xs py-1.5 px-4 self-start sm:self-auto" data-city="${e.city}">
                  <span>Réserver ma place</span>
                  <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </button>
              </div>
            `).join("")}
          </div>
        </div>

      </div>
    </section>
  `}function ke(){return`
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
                <button type="button" class="donation-pill ${n.selectedDonationAmount===40?"active":""}" data-val="40">
                  <span class="text-base font-bold">40 €</span>
                  <span class="text-[9px] text-slate-500 block">Coût: 22 €</span>
                </button>
                <button type="button" class="donation-pill ${n.selectedDonationAmount===100?"active":""}" data-val="100">
                  <span class="text-base font-bold">100 €</span>
                  <span class="text-[9px] text-slate-500 block">Coût: 55 €</span>
                </button>
                <button type="button" class="donation-pill ${n.selectedDonationAmount===250?"active":""}" data-val="250">
                  <span class="text-base font-bold">250 €</span>
                  <span class="text-[9px] text-slate-500 block">Coût: 137,50 €</span>
                </button>
              </div>

              <!-- Real Cost Calculation Box -->
              <div class="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-2">
                <div class="flex justify-between text-xs text-slate-300">
                  <span>Montant de votre versement :</span>
                  <strong class="text-white" id="page-don-initial">${n.selectedDonationAmount} €</strong>
                </div>
                <div class="flex justify-between text-xs text-orange-400">
                  <span>Déduction fiscale belge (-45%) :</span>
                  <strong id="page-don-deduct">-${(n.selectedDonationAmount*.45).toFixed(2)} €</strong>
                </div>
                <div class="flex justify-between text-sm font-bold text-white border-t border-navy-800 pt-2">
                  <span>Coût réel net pour vous :</span>
                  <strong class="text-orange-500 text-base" id="page-don-final">${(n.selectedDonationAmount*.55).toFixed(2)} €</strong>
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
  `}function Ae(){return`
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
  `}function h(e){switch(n.currentRoute=e,e){case"le-mouvement":p.innerHTML=Se();break;case"propositions":p.innerHTML=w();break;case"actualites":p.innerHTML=$e();break;case"nous-rejoindre":p.innerHTML=ke();break;case"contact":p.innerHTML=Ae();break;case"boussole":case"accueil":default:p.innerHTML=Pe(),e==="boussole"&&setTimeout(()=>{var t;(t=document.getElementById("boussole"))==null||t.scrollIntoView({behavior:"smooth"})},100);break}document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(t=>{t.dataset.route===e?t.classList.add("active"):t.classList.remove("active")}),m({icons:g}),e!=="boussole"&&window.scrollTo({top:0,behavior:"smooth"}),I(),q()}function q(){var s,r,a,l,c;document.querySelectorAll("[data-open-pillar]").forEach(i=>{i.addEventListener("click",d=>{d.preventDefault();const u=i.dataset.openPillar;Be(u)})}),(s=document.getElementById("btn-read-manifeste-hero"))==null||s.addEventListener("click",()=>{E.showModal(),m({icons:g})}),(r=document.getElementById("btn-read-manifeste-body"))==null||r.addEventListener("click",()=>{E.showModal(),m({icons:g})}),document.querySelectorAll('[data-action="open-donation"]').forEach(i=>{i.addEventListener("click",d=>{d.preventDefault(),P.showModal(),m({icons:g})})}),document.querySelectorAll(".btn-rsvp").forEach(i=>{i.addEventListener("click",d=>{const u=i.dataset.city;v(`Votre place pour la réunion de ${u} a été pré-réservée avec succès !`,"success"),i.innerText="Inscrit ✓",i.classList.add("bg-green-600","border-green-600")})});const e=document.getElementById("sim-salary-slider");e&&(e.addEventListener("input",i=>{n.calcGrossSalary=parseInt(i.target.value),S()}),document.querySelectorAll(".sim-btn").forEach(i=>{i.addEventListener("click",()=>{n.calcProfile=i.dataset.profile,document.querySelectorAll(".sim-btn").forEach(d=>{d.className=`sim-btn text-xs py-2 px-3 rounded-lg border font-semibold ${d.dataset.profile===n.calcProfile?"bg-navy-900 text-white border-navy-900":"bg-slate-50 text-slate-700 border-slate-200"}`}),S()})}));const t=document.getElementById("prop-search-input");t&&(t.addEventListener("input",i=>{if(n.proposalSearchQuery=i.target.value,n.currentRoute==="propositions"){p.innerHTML=w(),m({icons:g}),q();const d=document.getElementById("prop-search-input");d.focus(),d.setSelectionRange(d.value.length,d.value.length)}}),document.querySelectorAll(".category-pill").forEach(i=>{i.addEventListener("click",()=>{n.activeProposalCategory=i.dataset.category,n.currentRoute==="propositions"&&(p.innerHTML=w(),m({icons:g}),q())})})),document.querySelectorAll("#page-donation-pills .donation-pill").forEach(i=>{i.addEventListener("click",()=>{n.selectedDonationAmount=parseInt(i.dataset.val),document.querySelectorAll("#page-donation-pills .donation-pill").forEach(b=>b.classList.remove("active")),i.classList.add("active");const d=document.getElementById("page-don-initial"),u=document.getElementById("page-don-deduct"),x=document.getElementById("page-don-final");d&&(d.innerText=`${n.selectedDonationAmount} €`),u&&(u.innerText=`-${(n.selectedDonationAmount*.45).toFixed(2)} €`),x&&(x.innerText=`${(n.selectedDonationAmount*.55).toFixed(2)} €`)})}),(a=document.getElementById("membership-full-form"))==null||a.addEventListener("submit",i=>{i.preventDefault(),v("Félicitations ! Votre adhésion citoyenne à Force Commune a bien été enregistrée. Bienvenue parmi ceux qui font !","success"),i.target.reset()}),(l=document.getElementById("contact-full-form"))==null||l.addEventListener("submit",i=>{i.preventDefault(),v("Votre message a bien été transmis au secrétariat général de Force Commune.","success"),i.target.reset()}),(c=document.getElementById("quick-donation-form"))==null||c.addEventListener("submit",i=>{i.preventDefault(),P.close(),v("Merci infiniment pour votre soutien civique et financier à Force Commune !","success"),i.target.reset()})}function S(){const e=document.getElementById("sim-salary-display"),t=document.getElementById("sim-gain-month"),s=document.getElementById("sim-gain-year");if(!e||!t||!s)return;e.innerText=`${n.calcGrossSalary.toLocaleString()} € / mois`;let r=.105;n.calcProfile==="independant"&&(r=.12),n.calcProfile==="soignant"&&(r=.135);const a=Math.round(n.calcGrossSalary*r),l=a*12;t.innerText=`+${a} €`,s.innerText=`+${l.toLocaleString()} € / an`}function Be(e){const t=$.find(s=>s.id===e);t&&(je.innerHTML=`
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
  `,f.showModal(),m({icons:g}),f.querySelectorAll("[data-close-modal]").forEach(s=>{s.addEventListener("click",()=>{f.close(),s.dataset.route&&h(s.dataset.route)})}))}function Re(){y.classList.contains("hidden")?(y.classList.remove("hidden"),T.classList.add("hidden"),F.classList.remove("hidden")):I()}function I(){y.classList.add("hidden"),T.classList.remove("hidden"),F.classList.add("hidden")}document.addEventListener("DOMContentLoaded",()=>{var t;Le.addEventListener("click",Re),document.addEventListener("click",s=>{const r=s.target.closest("[data-route]");if(r){s.preventDefault();const l=r.dataset.route;window.location.hash=l,h(l);return}const a=s.target.closest("[data-close-modal]");if(a){const l=a.dataset.closeModal,c=document.getElementById(l);c&&c.close()}}),window.addEventListener("scroll",()=>{window.scrollY>40?j.classList.add("scrolled"):j.classList.remove("scrolled")}),(t=document.getElementById("footer-newsletter-form"))==null||t.addEventListener("submit",s=>{s.preventDefault();const r=document.getElementById("footer-newsletter-email");r&&r.value&&(v(`Merci ! Vous êtes bien inscrit à la Lettre de Terrain avec l'adresse ${r.value}.`,"success"),r.value="")}),document.querySelectorAll("#donation-quick-amounts .donation-pill").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll("#donation-quick-amounts .donation-pill").forEach(r=>r.classList.remove("active")),s.classList.add("active")})}),window.addEventListener("hashchange",()=>{const s=window.location.hash.replace("#","")||"accueil";h(s)});const e=window.location.hash.replace("#","")||"accueil";h(e)});
