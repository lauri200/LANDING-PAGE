export type Lang = "fr" | "en" | "de";

export type Dict = {
  seo: { title: string; description: string; keywords: string };
  nav: {
    home: string;
    about: string;
    mission: string;
    activities: string;
    life: string;
    application: string;
    faq: string;
    partners: string;
    apply: string;
    eligibility: string;
    guide: string;
    menu: string;
    close: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    body: string;
    cta: string;
    ctaSecondary: string;
  };
  about: { kicker: string; title: string; body: string; org: string };
  why: {
    kicker: string;
    title: string;
    cards: { title: string; body: string }[];
  };
  challenge: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    problem: string;
    problemBody: string;
    innovation: string;
    innovationBody: string;
    impact: string;
    impactBody: string;
  };
  mission: {
    kicker: string;
    title: string;
    steps: { num: string; title: string; body: string }[];
  };
  build: {
    kicker: string;
    title: string;
    items: { title: string; body: string }[];
  };
  who: {
    kicker: string;
    title: string;
    groups: { title: string; items: string[] }[];
  };
  expert: {
    kicker: string;
    title: string;
    subtitle: string;
    intro: string;
    traits: string[];
  };
  week: {
    kicker: string;
    title: string;
    days: { day: string; activity: string }[];
  };
  life: {
    kicker: string;
    title: string;
    subtitle: string;
    items: string[];
  };
  agb: {
    kicker: string;
    title: string;
    body: string;
    facts: { label: string; value: string }[];
  };
  support: {
    kicker: string;
    title: string;
    note: string;
    items: { title: string; body: string }[];
  };
  included: {
    kicker: string;
    title: string;
    colItem: string;
    colInfo: string;
    rows: { item: string; info: string }[];
  };
  process: {
    kicker: string;
    title: string;
    steps: { title: string; body: string }[];
  };
  apply: {
    kicker: string;
    title: string;
    identity: string;
    profile: string;
    skills: string;
    availability: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    birthDate: string;
    education: string;
    field: string;
    profession: string;
    experience: string;
    digital: string;
    arrival: string;
    duration: string;
    duration6: string;
    duration9: string;
    duration12: string;
    expStudent: string;
    expGraduate: string;
    expPro: string;
    motivation: string;
    project: string;
    documents: string;
    cv: string;
    letter: string;
    portfolio: string;
    source: string;
    submit: string;
    required: string;
    skillList: string[];
    sourceList: string[];
  };
  partner: {
    kicker: string;
    title: string;
    intro: string;
    org: string;
    country: string;
    website: string;
    contact: string;
    email: string;
    type: string;
    typeOpt: string;
    type1: string;
    type2: string;
    type3: string;
    type4: string;
    volunteers: string;
    countries: string;
    program: string;
    message: string;
    document: string;
    submit: string;
    required: string;
  };
  stories: {
    kicker: string;
    title: string;
    items: { name: string; country: string; flag: string; role: string; quote: string }[];
  };
  faq: {
    kicker: string;
    title: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    apply: string;
    partner: string;
  };
  footer: {
    tagline: string;
    org: string;
    navLabel: string;
    social: string;
    contact: string;
    email: string;
    phone: string;
    location: string;
    privacy: string;
    copyright: string;
    about: string;
    mission: string;
    apply: string;
    partners: string;
    faq: string;
    contactLink: string;
  };
  privacy: {
    title: string;
    close: string;
    body: string[];
  };
  success: {
    applyTitle: string;
    applyBody: string;
    partnerTitle: string;
    partnerBody: string;
    sending: string;
    error: string;
  };
  cookies: {
    title: string;
    body: string;
    essential: string;
    accept: string;
  };
  eligibility: {
    kicker: string;
    title: string;
    intro: string;
    questions: string[];
    yes: string;
    no: string;
    pending: string;
    okTitle: string;
    okBody: string;
    koTitle: string;
    koBody: string;
    cta: string;
    guide: string;
  };
  guide: {
    kicker: string;
    title: string;
    intro: string;
    download: string;
    sections: { title: string; body: string }[];
    footer: string;
  };
};

const fr: Dict = {
  seo: {
    title: "Volontariat au Togo | Volontaires internationaux d'APTIC-R",
    description:
      "Rejoignez APTIC-R au Togo pour une mission de volontariat de 6 à 12 mois dans l'innovation numérique, l'agriculture low-tech et le développement rural.",
    keywords:
      "volontariat Togo, bénévolat Afrique, volontariat international Togo, volontariat numérique Afrique, low-tech, développement rural, APTIC-R",
  },
  nav: {
    home: "Accueil",
    about: "À propos d'APTIC-R",
    mission: "La mission",
    activities: "Activités",
    life: "Vie au Togo",
    application: "Candidature",
    faq: "FAQ",
    partners: "Partenaires",
    apply: "Postuler",
    eligibility: "Éligibilité",
    guide: "Guide",
    menu: "Menu",
    close: "Fermer",
  },
  hero: {
    kicker: "APTIC-R International Volunteers",
    title: "Volontaire au Togo.\nConstruisez des technologies pour les communautés rurales.",
    subtitle: "6-12 mois | Agbélouvé, Togo",
    body: "Utilisez vos compétences pour créer, avec les communautés rurales, des solutions numériques et low-tech concretes pour l'agriculture, l'éducation et l'entrepreneuriat local.",
    cta: "Postuler maintenant",
    ctaSecondary: "Découvrir la mission",
  },
  about: {
    kicker: "L'organisation",
    title: "APTIC-R, un point d'entrée vers le terrain.",
    org: "Association pour la Promotion des TIC en milieu Rural au Togo",
    body: "Basée à Agbélouvé, APTIC-R accueille des volontaires d'Europe et d'ailleurs pour concevoir, avec les communautés, des outils numériques accessibles. Le programme relie compétences globales et impact local : innovation numérique, agriculture, formation et entrepreneuriat rural.",
  },
  why: {
    kicker: "Pourquoi cette mission ?",
    title: "Pourquoi faire du bénévolat avec APTIC-R ?",
    cards: [
      {
        title: "Impact rural",
        body: "Travailler directement avec les communautés rurales, sur des besoins réels.",
      },
      {
        title: "Innovation numérique",
        body: "Utiliser la technologie pour résoudre des problemes concrets du quotidien.",
      },
      {
        title: "Technologie simple",
        body: "Concevoir des solutions abordables, réparables et accessibles.",
      },
      {
        title: "Échange culturel",
        body: "Découvrir le Togo tout en apprenant auprès des communautés locales.",
      },
    ],
  },
  challenge: {
    kicker: "Le défi",
    title: "La technologie devrait être accessible à tous.",
    p1: "Dans de nombreuses communautés rurales, l'accès a l'information, aux outils numériques et aux technologies appropriées reste limité.",
    p2: "APTIC-R estime que l'innovation ne doit pas toujours être complexe ou coûteuse. Parfois, un simple systeme de SMS, une application hors ligne, un capteur a bas coût ou un programme de formation numérique peuvent faire toute la différence.",
    problem: "Problème",
    problemBody: "Information, outils et technologies encore trop loin des villages.",
    innovation: "Innovation",
    innovationBody: "SMS, apps hors ligne, capteurs simples, formation de relais locaux.",
    impact: "Impact",
    impactBody: "Des solutions utiles, adoptées et documentées avec les communautés.",
  },
  mission: {
    kicker: "Votre mission",
    title: "Ce que vous allez faire",
    steps: [
      { num: "01", title: "Diagnostic sur le terrain", body: "Rencontrer agriculteurs, coopératives et relais locaux." },
      { num: "02", title: "Hackathons ruraux", body: "Organiser des ateliers de co-création avec les communautés." },
      { num: "03", title: "Prototypage", body: "Créer des solutions low-tech testables sur le terrain." },
      { num: "04", title: "Formation", body: "Former et accompagner des relais locaux." },
      { num: "05", title: "Documentation open source", body: "Documenter les solutions pour qu'elles puissent être reprises." },
    ],
  },
  build: {
    kicker: "Exemples concrets",
    title: "Que pourriez-vous construire ?",
    items: [
      { title: "Système d'alerte météo", body: "Information météo par SMS pour les agriculteurs." },
      { title: "Irrigation intelligente", body: "Capteurs simples pour suivre l'humidité des sols." },
      { title: "Outils mobiles hors ligne", body: "Applications utiles même avec une connectivité limitée." },
      { title: "Tableaux de bord agricoles", body: "Tableaux simples pour suivre les données du terrain." },
      { title: "Gestion des stocks", body: "Outils numériques pour coopératives et petits producteurs." },
    ],
  },
  who: {
    kicker: "Profils recherchés",
    title: "Et si c'était vous ?",
    groups: [
      {
        title: "Numérique et informatique",
        items: ["Informatique", "Développement", "Données", "Systèmes", "Cybersécurité", "Outils numériques"],
      },
      {
        title: "Agriculture",
        items: ["Agronomie", "Agriculture", "Environnement", "Développement rural"],
      },
      {
        title: "Créatif",
        items: ["Graphisme", "Communication", "Création de contenu", "UX / UI"],
      },
      {
        title: "Ingénierie / fabrication",
        items: ["Arduino", "Raspberry Pi", "IoT", "Électronique", "Prototypage"],
      },
    ],
  },
  expert: {
    kicker: "Éligibilité",
    title: "Vous n'avez pas besoin d'être un expert.",
    subtitle: "Vous n'êtes pas obligé de tout savoir. Il suffit d'avoir envie d'apprendre.",
    intro: "Nous recherchons avant tout des personnes :",
    traits: [
      "Curieuses",
      "Autonomes",
      "Patientes",
      "Créatives",
      "Ouvertes à la découverte",
      "Capables de travaillér en équipe",
      "Intéressées par le terrain",
    ],
  },
  week: {
    kicker: "Une expérience concrete",
    title: "Une semaine avec APTIC-R",
    days: [
      { day: "Lundi", activity: "Innovation numérique" },
      { day: "Mardi", activity: "Visite sur le terrain" },
      { day: "Mercredi", activity: "Prototypage" },
      { day: "Jeudi", activity: "Formation" },
      { day: "Vendredi", activity: "Laboratoire d'innovation rurale" },
      { day: "Samedi", activity: "Découverte culturelle" },
      { day: "Dimanche", activity: "Repos" },
    ],
  },
  life: {
    kicker: "La vie au Togo",
    title: "Bien plus qu'une mission de bénévolat.",
    subtitle: "Une expérience de vie.",
    items: [
      "Culture togolaise",
      "Environnement tropical",
      "Communautés rurales",
      "Gastronomie",
      "Rencontres",
      "Langues",
      "Découverte culturelle",
    ],
  },
  agb: {
    kicker: "Votre base",
    title: "Agbélouvé, Togo",
    body: "Agbélouvé est une commune rurale de la préfecture de Zio, a environ 60 km au nord de Lomé. Agriculture, marchés, communautés et un accès progressif aux outils numériques : c'est ici que se construit le quotidien de la mission.",
    facts: [
      { label: "Localisation", value: "Préfecture de Zio, region Maritime" },
      { label: "Environnement", value: "Milieu rural, agriculture et villages partenaires" },
      { label: "Accès", value: "Route depuis Lomé, aeroport international a portée" },
      { label: "Communautés", value: "Coopératives, jeunes, relais locaux" },
      { label: "Proximité de Lomé", value: "Environ 60 km au nord de la capitale" },
      { label: "Conditions de vie", value: "Cadre rural, accueil encadré, rythme local" },
    ],
  },
  support: {
    kicker: "Soutien et hébergement",
    title: "Vous ne serez pas seul.",
    note: "Les modalités précises (hébergement, repas, transport, assurance) sont confirmées par APTIC-R avant le départ.",
    items: [
      { title: "Hébergement", body: "Solution d'accueil organisée sur place." },
      { title: "Alimentation", body: "Repas et organisation du quotidien, selon le dispositif." },
      { title: "Transport local", body: "Déplacements vers les sites de mission." },
      { title: "Mentor / référent", body: "Un référent local vous accompagne." },
      { title: "Communication", body: "Lien regulier avec l'équipe APTIC-R." },
      { title: "Sécurité", body: "Briefing, consignes et suivi pendant la mission." },
      { title: "Orientation santé", body: "Informations santé, assurance selon le programme." },
      { title: "Accompagnement", body: "Intégration, suivi de mission et préparation au départ." },
    ],
  },
  included: {
    kicker: "Transparence",
    title: "Qu'est-ce qui est inclus ?",
    colItem: "Élément",
    colInfo: "Information",
    rows: [
      { item: "Mission", info: "6 à 12 mois" },
      { item: "Hébergement", info: "A préciser avant départ" },
      { item: "Repas", info: "A préciser avant départ" },
      { item: "Transport local", info: "A préciser avant départ" },
      { item: "Assurance", info: "Selon le programme" },
      { item: "Voyage international", info: "Selon le programme" },
      { item: "Visa", info: "Selon le dispositif" },
      { item: "Indemnité", info: "Selon le programme" },
      { item: "Accompagnement", info: "Oui / détails a préciser" },
    ],
  },
  process: {
    kicker: "Candidature",
    title: "Comment postuler",
    steps: [
      { title: "Découvrir", body: "Découvrez la mission et le contexte a Agbélouvé." },
      { title: "Postuler", body: "Remplissez le formulaire et joignez vos documents." },
      { title: "Entretien", body: "Échange en ligne avec l'équipe APTIC-R." },
      { title: "Sélection", body: "Evaluation du dossier et de la motivation." },
      { title: "Préparation", body: "Préparation au départ, visa et intégration." },
      { title: "Bienvenue au Togo", body: "Accueil et intégration sur place." },
    ],
  },
  apply: {
    kicker: "Je veux devenir volontaire",
    title: "Postuler au programme",
    identity: "Identité",
    profile: "Profil",
    skills: "Compétences",
    availability: "Disponibilité",
    firstName: "Prénom",
    lastName: "Nom",
    email: "E-mail",
    phone: "Téléphone",
    country: "Pays",
    city: "Ville",
    birthDate: "Date de naissance",
    education: "Formation",
    field: "Domaine d'études",
    profession: "Profession",
    experience: "Niveau d'expérience",
    digital: "Compétences numériques",
    arrival: "Date souhaitée d'arrivée",
    duration: "Durée",
    duration6: "6 mois",
    duration9: "9 mois",
    duration12: "12 mois",
    expStudent: "Étudiant",
    expGraduate: "Jeune diplômé",
    expPro: "Jeune professionnel",
    motivation: "Pourquoi souhaitez-vous faire du bénévolat auprès d'APTIC-R ?",
    project: "Parlez-nous d'un projet sur lequel vous avez travaillé.",
    documents: "Documents",
    cv: "CV (PDF)",
    letter: "Lettre de motivation",
    portfolio: "Portfolio (optionnel)",
    source: "Comment avez-vous entendu parler d'APTIC-R ?",
    submit: "Envoyer ma candidature",
    required: "Champs obligatoires",
    skillList: [
      "Informatique",
      "Données",
      "Développement web",
      "Développement mobile",
      "Agriculture",
      "Conception graphique",
      "Communication",
      "Création de contenu",
      "Arduino",
      "Raspberry Pi",
      "Internet des objets (IoT)",
      "Éducation numérique",
      "Gestion de projet",
    ],
    sourceList: [
      "Google",
      "LinkedIn",
      "Instagram",
      "Facebook",
      "Université",
      "Organisation de bénévoles",
      "France Volontaires",
      "weltwarts",
      "Corps de solidarité européen",
      "Ami",
      "Autre",
    ],
  },
  partner: {
    kicker: "Je représente une organisation",
    title: "Devenez partenaire",
    intro: "APTIC-R recherche des organisations européennes intéressées par des partenariats de volontariat a long terme au Togo.",
    org: "Organisation",
    country: "Pays",
    website: "Site web",
    contact: "Personne de contact",
    email: "Courriel professionnel",
    type: "Type d'organisation",
    typeOpt: "Sélectionner un type",
    type1: "Université / école",
    type2: "ONG / association",
    type3: "Organisation d'envoi de volontaires",
    type4: "Autre",
    volunteers: "Nombre potentiel de volontaires",
    countries: "Pays concernés",
    program: "Programme de volontariat",
    message: "Message",
    document: "Document de présentation",
    submit: "Envoyer une demande de partenariat",
    required: "Champs obligatoires",
  },
  stories: {
    kicker: "Confiance",
    title: "Histoires de bénévoles",
    items: [
      {
        name: "Jonas",
        country: "Allemagne",
        flag: "DE",
        role: "Bénévole en innovation numérique",
        quote: "On ne débarque pas avec une solution toute faite. On écoute, on prototype, on apprend avec les agriculteurs. C'est ca, l'innovation utile.",
      },
      {
        name: "Claire",
        country: "France",
        flag: "FR",
        role: "Bénévole en technologie rurale",
        quote: "Agbélouvé m'a appris a concevoir simple : une app hors ligne, une formation, un relais local. L'impact se mesure dans le quotidien.",
      },
      {
        name: "Thomas",
        country: "Belgique",
        flag: "BE",
        role: "Bénévole en agriculture low-tech",
        quote: "Le terrain change la facon de voir la tech. Un capteur, un SMS, une cooperative : des outils modestes, un vrai changement.",
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Questions fréquentes",
    items: [
      {
        q: "Dois-je parler français ?",
        a: "Le français est utile au quotidien au Togo. Un niveau de communication est un atout. L'anglais est aussi utilisé avec l'équipe internationale. Un accompagnement local aide a s'integrer.",
      },
      {
        q: "Ai-je besoin d'une expérience de bénévolat préalable ?",
        a: "Non. La motivation, la curiosité et la capacité à travailler en équipe comptent autant qu'un parcours de volontariat antérieur.",
      },
      {
        q: "Dois-je être un expert en informatique ?",
        a: "Non. Les profils numériques, agricoles, créatifs et techniques sont les bienvenus. L'essentiel est l'envie d'apprendre sur le terrain.",
      },
      {
        q: "Où vais-je habiter ?",
        a: "L'accueil se fait a Agbélouvé et dans l'environnement de la mission. Le type d'hébergement est confirmé par APTIC-R avant le départ.",
      },
      {
        q: "L'hébergement est-il fourni ?",
        a: "Une solution d'accueil est organisée. Les détails (logement, repas, transport local) sont précises avant publication complète du dispositif et avant votre départ.",
      },
      {
        q: "Quelle est la durée de la mission ?",
        a: "Les missions durent de 6 à 12 mois, selon votre disponibilité et le programme d'envoi.",
      },
      {
        q: "Combien coûte le programme ?",
        a: "Cela dépend du dispositif (organisation d'envoi, bourse, programme européen). APTIC-R précise les conditions au moment de la sélection.",
      },
      {
        q: "Qui paie le billet d'avion ?",
        a: "Le voyage international dépend du programme d'envoi ou du statut du volontaire. Ce point est clarifié avant validation de la mission.",
      },
      {
        q: "Et l'assurance ?",
        a: "Une couverture santé et rapatriement est requise. Elle peut être portée par le programme partenaire ou a organiser avec APTIC-R.",
      },
      {
        q: "De quel visa ai-je besoin ?",
        a: "Le visa dépend de votre nationalité et du dispositif. APTIC-R vous oriente pendant la phase de préparation au départ.",
      },
      {
        q: "Agbélouvé est-il en sécurité ?",
        a: "Agbélouvé est une commune rurale encadrée par l'équipe locale. Un briefing sécurité, un référent et des consignes claires font partie de l'accueil.",
      },
      {
        q: "Aurais-je un mentor local ?",
        a: "Oui. Un référent / mentor local accompagne l'intégration, le suivi de mission et le lien avec les communautés.",
      },
      {
        q: "Puis-je postuler si je ne suis pas européen ?",
        a: "Oui. Le programme s'adresse d'abord a l'Europe, mais les candidatures d'autres pays sont étudiées.",
      },
      {
        q: "Que se passe-t-il après avoir soumis ma candidature ?",
        a: "APTIC-R examine le dossier, propose un entretien en ligne si le profil correspond, puis avance vers la sélection et la préparation au départ.",
      },
    ],
  },
  cta: {
    title: "Prêt à avoir un impact ?",
    p1: "Vos compétences peuvent devenir des outils precieux pour les communautés rurales.",
    p2: "Votre expérience peut devenir une opportunité pour quelqu'un d'autre.",
    p3: "Votre prochaine aventure pourrait commencer au Togo.",
    apply: "Postulez dès maintenant",
    partner: "Devenez partenaire",
  },
  footer: {
    tagline: "Association pour la Promotion des TIC en milieu Rural au Togo",
    org: "APTIC-R",
    navLabel: "Navigation",
    social: "Réseaux sociaux",
    contact: "Contact",
    email: "contact@aptic-r.org",
    phone: "Téléphone a définir",
    location: "Agbélouvé - Togo",
    privacy: "Politique de confidentialité",
    copyright: "APTIC-R · Association pour la Promotion des TIC en milieu Rural au Togo",
    about: "À propos",
    mission: "Mission",
    apply: "Postuler",
    partners: "Partenaires",
    faq: "FAQ",
    contactLink: "Contact",
  },
  privacy: {
    title: "Politique de confidentialité",
    close: "Fermer",
    body: [
      "APTIC-R collecte les informations du formulaire de candidature et du formulaire partenaire uniquement pour traiter votre demande : identité, contact, profil, documents transmis et source d'information.",
      "Ces données sont utilisées par l'équipe APTIC-R pour l'évaluation, l'entretien, la sélection et l'accompagnement. Elles ne sont pas vendues a des tiers.",
      "Vous pouvez demander l'accès, la rectification ou la suppression de vos données en ecrivant a contact@aptic-r.org.",
      "Les documents (CV, lettre, portfolio) sont conservés le temps nécessaire au recrutement, puis archivés ou supprimés selon la politique interne d'APTIC-R.",
    ],
  },
  success: {
    applyTitle: "Candidature envoyée",
    applyBody: "Merci. L'équipe APTIC-R revient vers vous après examen du dossier.",
    partnerTitle: "Demande de partenariat envoyée",
    partnerBody: "Merci. Nous etudierons votre proposition et vous recontacterons.",
    sending: "Envoi en cours…",
    error: "L'envoi a échoué. Vérifiez les champs et réessayez.",
  },
  cookies: {
    title: "Cookies",
    body: "Nous utilisons des cookies essentiels au fonctionnement du site et, avec votre accord, des mesures d'audience anonymes pour comprendre les visites et améliorer cette page.",
    essential: "Essentiels uniquement",
    accept: "Tout accepter",
  },
  eligibility: {
    kicker: "Éligibilité",
    title: "Cette mission est-elle faite pour vous ?",
    intro:
      "Répondez à quelques questions pour vérifier que le programme de volontariat international APTIC-R correspond à votre situation.",
    questions: [
      "Vous avez 18 ans ou plus.",
      "Vous pouvez vous engager pour une durée de 6 à 12 mois.",
      "Vous êtes prêt·e à vivre dans une communauté rurale au Togo.",
      "Vous souhaitez partager vos compétences et apprendre auprès des communautés locales.",
      "Vous êtes à l'aise avec le travail en équipe et la vie de terrain.",
    ],
    yes: "Oui",
    no: "Non",
    pending: "Répondez à toutes les questions pour connaître votre résultat.",
    okTitle: "Vous pouvez postuler",
    okBody:
      "Votre profil correspond au programme. L'étape suivante : remplir le formulaire de candidature.",
    koTitle: "Le programme ne correspond peut-être pas",
    koBody:
      "Une ou plusieurs réponses indiquent que la mission pourrait ne pas convenir à votre situation. Vous pouvez nous contacter pour en discuter ou consulter le guide du volontaire.",
    cta: "Postuler maintenant",
    guide: "Lire le guide du volontaire",
  },
  guide: {
    kicker: "Guide du volontaire",
    title: "Guide du volontaire international",
    intro:
      "Tout ce qu'il faut savoir avant de postuler : la mission, la vie à Agbélouvé, le processus de sélection et la préparation au départ.",
    download: "Télécharger le guide",
    sections: [
      {
        title: "La mission",
        body: "Vous travaillez avec les communautés rurales autour d'Agbélouvé pour concevoir des solutions numériques et low-tech : diagnostic sur le terrain, hackathons ruraux, prototypage, formation de relais locaux et documentation open source. Les missions durent de 6 à 12 mois.",
      },
      {
        title: "Une semaine type",
        body: "Lundi : innovation numérique. Mardi : visite sur le terrain. Mercredi : prototypage. Jeudi : formation. Vendredi : laboratoire d'innovation rurale. Samedi : découverte culturelle. Dimanche : repos.",
      },
      {
        title: "Vivre à Agbélouvé",
        body: "Agbélouvé est une ville rurale du Togo, proche de Lomé. Vous y découvrirez la culture togolaise, la gastronomie locale et un environnement tropical. Hébergement, repas, transport local et accompagnement sont précisés par APTIC-R avant le départ.",
      },
      {
        title: "Candidature et sélection",
        body: "1. Découvrez la mission. 2. Remplissez le formulaire. 3. Entretien en ligne. 4. Évaluation et sélection. 5. Préparation au départ. 6. Accueil et intégration au Togo.",
      },
      {
        title: "Préparer votre départ",
        body: "Selon votre pays et le programme, un visa, une assurance et un billet d'avion peuvent être nécessaires. APTIC-R vous accompagne dans chaque étape et un référent local vous suit sur place.",
      },
    ],
    footer: "Pour toute question : contact@aptic-r.org",
  },
};

const en: Dict = {
  seo: {
    title: "Volunteer in Togo | APTIC-R International Volunteers",
    description:
      "Join APTIC-R in Togo for a 6-12 month volunteer mission in digital innovation, low-tech agriculture and rural development.",
    keywords:
      "volunteer Togo, volunteering Africa, international volunteering Togo, digital volunteering Africa, low-tech, rural development, APTIC-R",
  },
  nav: {
    home: "Home",
    about: "About APTIC-R",
    mission: "The Mission",
    activities: "Activities",
    life: "Life in Togo",
    application: "Application",
    faq: "FAQ",
    partners: "Partners",
    apply: "Apply now",
    eligibility: "Eligibility",
    guide: "Guide",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    kicker: "APTIC-R International Volunteers",
    title: "Volunteer in Togo.\nBuild technology for rural communities.",
    subtitle: "6-12 months | Agbelouve, Togo",
    body: "Use your skills to create practical digital and low-tech solutions with rural communities for agriculture, education and local entrepreneurship.",
    cta: "Apply now",
    ctaSecondary: "Discover the mission",
  },
  about: {
    kicker: "The organisation",
    title: "APTIC-R, your entry point to the field.",
    org: "Association for the Promotion of ICTs in Rural Areas in Togo",
    body: "Based in Agbelouve, APTIC-R hosts volunteers from Europe and beyond to design accessible digital tools with communities. The programme connects global skills with local impact: digital innovation, agriculture, training and rural entrepreneurship.",
  },
  why: {
    kicker: "Why this mission?",
    title: "Why volunteer with APTIC-R?",
    cards: [
      { title: "Rural impact", body: "Work directly with rural communities on real needs." },
      { title: "Digital innovation", body: "Use technology to solve concrete everyday problems." },
      { title: "Simple technology", body: "Design solutions that are affordable, repairable and accessible." },
      { title: "Cultural exchange", body: "Discover Togo while learning from local communities." },
    ],
  },
  challenge: {
    kicker: "The challenge",
    title: "Technology should be accessible to everyone.",
    p1: "In many rural communities, access to information, digital tools and appropriate technologies remains limited.",
    p2: "APTIC-R believes innovation does not always have to be complex or expensive. Sometimes a simple SMS system, an offline app, a low-cost sensor or a digital training programme can make all the difference.",
    problem: "Problem",
    problemBody: "Information, tools and technology still too far from villages.",
    innovation: "Innovation",
    innovationBody: "SMS, offline apps, simple sensors, training of local relays.",
    impact: "Impact",
    impactBody: "Useful solutions, adopted and documented with communities.",
  },
  mission: {
    kicker: "Your mission",
    title: "What you will do",
    steps: [
      { num: "01", title: "Field diagnosis", body: "Meet farmers, cooperatives and local relays." },
      { num: "02", title: "Rural hackathons", body: "Facilitate co-creation workshops with communities." },
      { num: "03", title: "Prototyping", body: "Build low-tech solutions that can be tested in the field." },
      { num: "04", title: "Training", body: "Train and support local relays." },
      { num: "05", title: "Open-source documentation", body: "Document solutions so others can reuse them." },
    ],
  },
  build: {
    kicker: "Concrete examples",
    title: "What could you build?",
    items: [
      { title: "Weather alert system", body: "SMS weather information for farmers." },
      { title: "Smart irrigation", body: "Simple sensors to monitor soil moisture." },
      { title: "Offline mobile tools", body: "Apps that work with limited connectivity." },
      { title: "Farm dashboards", body: "Simple dashboards for agricultural data." },
      { title: "Stock management", body: "Digital tools for cooperatives and small producers." },
    ],
  },
  who: {
    kicker: "Profiles we seek",
    title: "What if it is you?",
    groups: [
      {
        title: "Digital and IT",
        items: ["Computer science", "Development", "Data", "Systems", "Cybersecurity", "Digital tools"],
      },
      {
        title: "Agriculture",
        items: ["Agronomy", "Agriculture", "Environment", "Rural development"],
      },
      {
        title: "Creative",
        items: ["Graphic design", "Communication", "Content creation", "UX / UI"],
      },
      {
        title: "Engineering / making",
        items: ["Arduino", "Raspberry Pi", "IoT", "Electronics", "Prototyping"],
      },
    ],
  },
  expert: {
    kicker: "Eligibility",
    title: "You do not need to be an expert.",
    subtitle: "You do not have to know everything. You just need the will to learn.",
    intro: "Above all, we look for people who are:",
    traits: [
      "Curious",
      "Autonomous",
      "Patient",
      "Creative",
      "Open to discovery",
      "Able to work in a team",
      "Interested in fieldwork",
    ],
  },
  week: {
    kicker: "A concrete experience",
    title: "A week with APTIC-R",
    days: [
      { day: "Monday", activity: "Digital innovation" },
      { day: "Tuesday", activity: "Field visit" },
      { day: "Wednesday", activity: "Prototyping" },
      { day: "Thursday", activity: "Training" },
      { day: "Friday", activity: "Rural innovation lab" },
      { day: "Saturday", activity: "Cultural discovery" },
      { day: "Sunday", activity: "Rest" },
    ],
  },
  life: {
    kicker: "Life in Togo",
    title: "More than a volunteering mission.",
    subtitle: "A life experience.",
    items: [
      "Togolese culture",
      "Tropical environment",
      "Rural communities",
      "Gastronomy",
      "Encounters",
      "Languages",
      "Cultural discovery",
    ],
  },
  agb: {
    kicker: "Your base",
    title: "Agbelouve, Togo",
    body: "Agbelouve is a rural town in the Zio prefecture, about 60 km north of Lome. Agriculture, markets, communities and growing access to digital tools: this is where mission life takes shape.",
    facts: [
      { label: "Location", value: "Zio prefecture, Maritime region" },
      { label: "Environment", value: "Rural setting, farming and partner villages" },
      { label: "Access", value: "Road from Lome, international airport within reach" },
      { label: "Communities", value: "Cooperatives, youth, local relays" },
      { label: "Near Lome", value: "About 60 km north of the capital" },
      { label: "Living conditions", value: "Rural setting, hosted stay, local rhythm" },
    ],
  },
  support: {
    kicker: "Support and housing",
    title: "You will not be alone.",
    note: "Exact arrangements (housing, meals, transport, insurance) are confirmed by APTIC-R before departure.",
    items: [
      { title: "Housing", body: "An organised hosting solution on site." },
      { title: "Food", body: "Meals and daily organisation, depending on the scheme." },
      { title: "Local transport", body: "Travel to mission sites." },
      { title: "Mentor / referent", body: "A local referent accompanies you." },
      { title: "Communication", body: "Regular contact with the APTIC-R team." },
      { title: "Safety", body: "Briefing, guidelines and follow-up during the mission." },
      { title: "Health orientation", body: "Health information; insurance according to the programme." },
      { title: "Support", body: "Integration, mission follow-up and pre-departure preparation." },
    ],
  },
  included: {
    kicker: "Transparency",
    title: "What is included?",
    colItem: "Item",
    colInfo: "Information",
    rows: [
      { item: "Mission", info: "6 to 12 months" },
      { item: "Housing", info: "To be confirmed before departure" },
      { item: "Meals", info: "To be confirmed before departure" },
      { item: "Local transport", info: "To be confirmed before departure" },
      { item: "Insurance", info: "According to the programme" },
      { item: "International travel", info: "According to the programme" },
      { item: "Visa", info: "According to the scheme" },
      { item: "Allowance", info: "According to the programme" },
      { item: "Support", info: "Yes / details to be confirmed" },
    ],
  },
  process: {
    kicker: "Application",
    title: "How to apply",
    steps: [
      { title: "Discover", body: "Learn about the mission and life in Agbelouve." },
      { title: "Apply", body: "Complete the form and attach your documents." },
      { title: "Interview", body: "Online conversation with the APTIC-R team." },
      { title: "Selection", body: "Review of your file and motivation." },
      { title: "Preparation", body: "Pre-departure preparation, visa and onboarding." },
      { title: "Welcome to Togo", body: "Arrival and integration on site." },
    ],
  },
  apply: {
    kicker: "I want to volunteer",
    title: "Apply to the programme",
    identity: "Identity",
    profile: "Profile",
    skills: "Skills",
    availability: "Availability",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone",
    country: "Country",
    city: "City",
    birthDate: "Date of birth",
    education: "Education",
    field: "Field of study",
    profession: "Profession",
    experience: "Experience level",
    digital: "Digital skills",
    arrival: "Desired arrival date",
    duration: "Duration",
    duration6: "6 months",
    duration9: "9 months",
    duration12: "12 months",
    expStudent: "Student",
    expGraduate: "Recent graduate",
    expPro: "Young professional",
    motivation: "Why do you want to volunteer with APTIC-R?",
    project: "Tell us about a project you have worked on.",
    documents: "Documents",
    cv: "CV (PDF)",
    letter: "Motivation letter",
    portfolio: "Portfolio (optional)",
    source: "How did you hear about APTIC-R?",
    submit: "Submit my application",
    required: "Required fields",
    skillList: [
      "Computer science",
      "Data",
      "Web development",
      "Mobile development",
      "Agriculture",
      "Graphic design",
      "Communication",
      "Content creation",
      "Arduino",
      "Raspberry Pi",
      "Internet of Things (IoT)",
      "Digital education",
      "Project management",
    ],
    sourceList: [
      "Google",
      "LinkedIn",
      "Instagram",
      "Facebook",
      "University",
      "Volunteer organisation",
      "France Volontaires",
      "weltwarts",
      "European Solidarity Corps",
      "Friend",
      "Other",
    ],
  },
  partner: {
    kicker: "I represent an organisation",
    title: "Become a partner",
    intro: "APTIC-R is looking for European organisations interested in long-term volunteering partnerships in Togo.",
    org: "Organisation",
    country: "Country",
    website: "Website",
    contact: "Contact person",
    email: "Professional email",
    type: "Organisation type",
    typeOpt: "Select a type",
    type1: "University / school",
    type2: "NGO / association",
    type3: "Volunteer sending organisation",
    type4: "Other",
    volunteers: "Potential number of volunteers",
    countries: "Countries involved",
    program: "Volunteering programme",
    message: "Message",
    document: "Presentation document",
    submit: "Send a partnership request",
    required: "Required fields",
  },
  stories: {
    kicker: "Trust",
    title: "Volunteer stories",
    items: [
      {
        name: "Jonas",
        country: "Germany",
        flag: "DE",
        role: "Digital innovation volunteer",
        quote: "You do not arrive with a ready-made solution. You listen, prototype and learn with farmers. That is useful innovation.",
      },
      {
        name: "Claire",
        country: "France",
        flag: "FR",
        role: "Rural technology volunteer",
        quote: "Agbelouve taught me to design simply: an offline app, a training, a local relay. Impact is measured in daily life.",
      },
      {
        name: "Thomas",
        country: "Belgium",
        flag: "BE",
        role: "Low-tech agriculture volunteer",
        quote: "The field changes how you see tech. A sensor, an SMS, a cooperative: modest tools, real change.",
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "Do I need to speak French?",
        a: "French is useful in daily life in Togo. Communication skills are an asset. English is also used with the international team. Local support helps you settle in.",
      },
      {
        q: "Do I need previous volunteering experience?",
        a: "No. Motivation, curiosity and teamwork matter as much as a previous volunteering background.",
      },
      {
        q: "Do I need to be an IT expert?",
        a: "No. Digital, agricultural, creative and technical profiles are welcome. What matters is the will to learn in the field.",
      },
      {
        q: "Where will I live?",
        a: "You will be hosted in Agbelouve and around the mission sites. Housing type is confirmed by APTIC-R before departure.",
      },
      {
        q: "Is housing provided?",
        a: "A hosting solution is organised. Details (housing, meals, local transport) are confirmed before departure.",
      },
      {
        q: "How long is the mission?",
        a: "Missions last 6 to 12 months, depending on your availability and sending programme.",
      },
      {
        q: "How much does the programme cost?",
        a: "It depends on the scheme (sending organisation, grant, European programme). APTIC-R clarifies conditions at selection.",
      },
      {
        q: "Who pays for the flight?",
        a: "International travel depends on the sending programme or volunteer status. This is clarified before the mission is confirmed.",
      },
      {
        q: "What about insurance?",
        a: "Health and repatriation cover is required. It may be provided by a partner programme or arranged with APTIC-R.",
      },
      {
        q: "What visa do I need?",
        a: "The visa depends on your nationality and the scheme. APTIC-R guides you during pre-departure preparation.",
      },
      {
        q: "Is Agbelouve safe?",
        a: "Agbelouve is a rural town supported by the local team. A security briefing, a referent and clear guidelines are part of the welcome.",
      },
      {
        q: "Will I have a local mentor?",
        a: "Yes. A local referent / mentor supports integration, mission follow-up and links with communities.",
      },
      {
        q: "Can I apply if I am not European?",
        a: "Yes. The programme focuses on Europe, but applications from other countries are reviewed.",
      },
      {
        q: "What happens after I submit my application?",
        a: "APTIC-R reviews the file, offers an online interview if the profile matches, then moves to selection and pre-departure preparation.",
      },
    ],
  },
  cta: {
    title: "Ready to make an impact?",
    p1: "Your skills can become valuable tools for rural communities.",
    p2: "Your experience can become an opportunity for someone else.",
    p3: "Your next adventure could start in Togo.",
    apply: "Apply now",
    partner: "Become a partner",
  },
  footer: {
    tagline: "Association for the Promotion of ICTs in Rural Areas in Togo",
    org: "APTIC-R",
    navLabel: "Navigation",
    social: "Social media",
    contact: "Contact",
    email: "contact@aptic-r.org",
    phone: "Phone to be confirmed",
    location: "Agbelouve - Togo",
    privacy: "Privacy policy",
    copyright: "APTIC-R · Association for the Promotion of ICTs in Rural Areas in Togo",
    about: "About",
    mission: "Mission",
    apply: "Apply",
    partners: "Partners",
    faq: "FAQ",
    contactLink: "Contact",
  },
  privacy: {
    title: "Privacy policy",
    close: "Close",
    body: [
      "APTIC-R collects information from the volunteer and partner forms only to process your request: identity, contact details, profile, uploaded documents and referral source.",
      "This data is used by the APTIC-R team for evaluation, interviews, selection and support. It is not sold to third parties.",
      "You may request access, correction or deletion of your data by writing to contact@aptic-r.org.",
      "Documents (CV, letter, portfolio) are kept for the time needed for recruitment, then archived or deleted according to APTIC-R internal policy.",
    ],
  },
  success: {
    applyTitle: "Application sent",
    applyBody: "Thank you. The APTIC-R team will get back to you after reviewing your file.",
    partnerTitle: "Partnership request sent",
    partnerBody: "Thank you. We will review your proposal and contact you.",
    sending: "Sending…",
    error: "Sending failed. Check the fields and try again.",
  },
  cookies: {
    title: "Cookies",
    body: "We use cookies that are essential for the site to work and, with your consent, anonymous analytics to understand visits and improve this page.",
    essential: "Essential only",
    accept: "Accept all",
  },
  eligibility: {
    kicker: "Eligibility",
    title: "Is this mission right for you?",
    intro:
      "Answer a few questions to check whether the APTIC-R international volunteer programme fits your situation.",
    questions: [
      "You are 18 or older.",
      "You can commit for 6 to 12 months.",
      "You are ready to live in a rural community in Togo.",
      "You want to share your skills and learn from local communities.",
      "You are comfortable with teamwork and field conditions.",
    ],
    yes: "Yes",
    no: "No",
    pending: "Answer all questions to see your result.",
    okTitle: "You can apply",
    okBody: "Your profile fits the programme. Next step: fill in the application form.",
    koTitle: "The programme may not be a fit",
    koBody:
      "One or more answers suggest the mission may not suit your situation. You can contact us to discuss it or read the volunteer guide.",
    cta: "Apply now",
    guide: "Read the volunteer guide",
  },
  guide: {
    kicker: "Volunteer guide",
    title: "International volunteer guide",
    intro:
      "Everything you need to know before applying: the mission, life in Agbelouve, the selection process and departure preparation.",
    download: "Download the guide",
    sections: [
      {
        title: "The mission",
        body: "You work with rural communities around Agbelouve to design digital and low-tech solutions: field diagnosis, rural hackathons, prototyping, training local relays and open-source documentation. Missions last 6 to 12 months.",
      },
      {
        title: "A typical week",
        body: "Monday: digital innovation. Tuesday: field visit. Wednesday: prototyping. Thursday: training. Friday: rural innovation lab. Saturday: cultural discovery. Sunday: rest.",
      },
      {
        title: "Living in Agbelouve",
        body: "Agbelouve is a rural town in Togo, close to Lome. You will discover Togolese culture, local food and a tropical environment. Housing, meals, local transport and support are confirmed by APTIC-R before departure.",
      },
      {
        title: "Application and selection",
        body: "1. Discover the mission. 2. Fill in the form. 3. Online interview. 4. Assessment and selection. 5. Departure preparation. 6. Welcome and integration in Togo.",
      },
      {
        title: "Prepare your departure",
        body: "Depending on your country and the scheme, a visa, insurance and a flight ticket may be required. APTIC-R guides you through each step and a local referent follows you on site.",
      },
    ],
    footer: "Questions? contact@aptic-r.org",
  },
};

const de: Dict = {
  seo: {
    title: "Freiwilligendienst in Togo | APTIC-R International Volunteers",
    description:
      "Komm zu APTIC-R in Togo fur einen 6- bis 12-monatigen Freiwilligeneinsatz in digitaler Innovation, Low-Tech-Landwirtschaft und landlicher Entwicklung.",
    keywords:
      "Freiwilligendienst Togo, Freiwilligenarbeit Afrika, internationaler Freiwilligendienst, Low-Tech, landliche Entwicklung, APTIC-R",
  },
  nav: {
    home: "Startseite",
    about: "Uber APTIC-R",
    mission: "Die Mission",
    activities: "Aktivitaten",
    life: "Leben in Togo",
    application: "Bewerbung",
    faq: "FAQ",
    partners: "Partner",
    apply: "Jetzt bewerben",
    eligibility: "Eignung",
    guide: "Leitfaden",
    menu: "Menü",
    close: "Schließen",
  },
  hero: {
    kicker: "APTIC-R International Volunteers",
    title: "Freiwillig in Togo.\nEntwickle Technologie fur landliche Gemeinschaften.",
    subtitle: "6-12 Monate | Agbelouve, Togo",
    body: "Nutze deine Fahigkeiten, um mit landlichen Gemeinschaften praktische digitale und Low-Tech-Losungen fur Landwirtschaft, Bildung und lokales Unternehmertum zu entwickeln.",
    cta: "Jetzt bewerben",
    ctaSecondary: "Die Mission entdecken",
  },
  about: {
    kicker: "Die Organisation",
    title: "APTIC-R, dein Einstieg ins Feld.",
    org: "Verein zur Forderung der IKT im landlichen Raum in Togo",
    body: "Mit Sitz in Agbelouve nimmt APTIC-R Freiwillige aus Europa und daruber hinaus auf, um gemeinsam mit Gemeinschaften zugangliche digitale Werkzeuge zu entwickeln. Das Programm verbindet globale Kompetenzen mit lokaler Wirkung.",
  },
  why: {
    kicker: "Warum diese Mission?",
    title: "Warum bei APTIC-R freiwillig arbeiten?",
    cards: [
      { title: "Landliche Wirkung", body: "Direkt mit landlichen Gemeinschaften an echten Bedarfen arbeiten." },
      { title: "Digitale Innovation", body: "Technologie nutzen, um konkrete Alltagsprobleme zu losen." },
      { title: "Einfache Technologie", body: "Losungen entwerfen, die gunstig, reparierbar und zuganglich sind." },
      { title: "Kultureller Austausch", body: "Togo entdecken und von lokalen Gemeinschaften lernen." },
    ],
  },
  challenge: {
    kicker: "Die Herausforderung",
    title: "Technologie sollte fur alle zuganglich sein.",
    p1: "In vielen landlichen Gemeinschaften bleibt der Zugang zu Information, digitalen Werkzeugen und angemessener Technologie begrenzt.",
    p2: "APTIC-R ist uberzeugt: Innovation muss nicht immer komplex oder teuer sein. Manchmal macht ein SMS-System, eine Offline-App, ein gunstiger Sensor oder ein digitales Trainingsprogramm den Unterschied.",
    problem: "Problem",
    problemBody: "Information, Werkzeuge und Technologie sind noch zu weit von Dorfern entfernt.",
    innovation: "Innovation",
    innovationBody: "SMS, Offline-Apps, einfache Sensoren, Schulung lokaler Multiplikatoren.",
    impact: "Wirkung",
    impactBody: "Nutzliche Losungen, angenommen und dokumentiert mit den Gemeinschaften.",
  },
  mission: {
    kicker: "Deine Mission",
    title: "Was du tun wirst",
    steps: [
      { num: "01", title: "Felddiagnose", body: "Landwirtinnen, Kooperativen und lokale Multiplikatoren treffen." },
      { num: "02", title: "Landliche Hackathons", body: "Co-Creation-Workshops mit Gemeinschaften organisieren." },
      { num: "03", title: "Prototyping", body: "Low-Tech-Losungen bauen, die im Feld testbar sind." },
      { num: "04", title: "Ausbildung", body: "Lokale Multiplikatoren schulen und begleiten." },
      { num: "05", title: "Open-Source-Dokumentation", body: "Losungen dokumentieren, damit sie weitergenutzt werden konnen." },
    ],
  },
  build: {
    kicker: "Konkrete Beispiele",
    title: "Was konntest du entwickeln?",
    items: [
      { title: "Wetter-Warnsystem", body: "Wetterinformationen per SMS fur Landwirtinnen und Landwirte." },
      { title: "Intelligente Bewasserung", body: "Einfache Sensoren zur Bodenfeuchte." },
      { title: "Offline-Mobiltools", body: "Apps, die bei begrenzter Konnektivitat funktionieren." },
      { title: "Agrar-Dashboards", body: "Einfache Dashboards fur Felddaten." },
      { title: "Bestandsverwaltung", body: "Digitale Tools fur Kooperativen und Kleinproduzierende." },
    ],
  },
  who: {
    kicker: "Gesuchte Profile",
    title: "Vielleicht bist du es?",
    groups: [
      {
        title: "Digitales und Informatik",
        items: ["Informatik", "Entwicklung", "Daten", "Systeme", "Cybersicherheit", "Digitale Tools"],
      },
      {
        title: "Landwirtschaft",
        items: ["Agronomie", "Landwirtschaft", "Umwelt", "Landliche Entwicklung"],
      },
      {
        title: "Kreativ",
        items: ["Grafikdesign", "Kommunikation", "Content Creation", "UX / UI"],
      },
      {
        title: "Ingenieurwesen / Making",
        items: ["Arduino", "Raspberry Pi", "IoT", "Elektronik", "Prototyping"],
      },
    ],
  },
  expert: {
    kicker: "Eignung",
    title: "Du musst kein Experte sein.",
    subtitle: "Du musst nicht alles wissen. Wichtig ist die Lust zu lernen.",
    intro: "Wir suchen vor allem Menschen, die:",
    traits: [
      "Neugierig",
      "Selbststandig",
      "Geduldig",
      "Kreativ",
      "Offen fur Neues",
      "Teamfahig",
      "Am Feld interessiert",
    ],
  },
  week: {
    kicker: "Eine konkrete Erfahrung",
    title: "Eine Woche mit APTIC-R",
    days: [
      { day: "Montag", activity: "Digitale Innovation" },
      { day: "Dienstag", activity: "Feldbesuch" },
      { day: "Mittwoch", activity: "Prototyping" },
      { day: "Donnerstag", activity: "Training" },
      { day: "Freitag", activity: "Labor fur landliche Innovation" },
      { day: "Samstag", activity: "Kulturelle Entdeckung" },
      { day: "Sonntag", activity: "Ruhe" },
    ],
  },
  life: {
    kicker: "Leben in Togo",
    title: "Mehr als ein Freiwilligeneinsatz.",
    subtitle: "Eine Lebenserfahrung.",
    items: [
      "Togolesische Kultur",
      "Tropische Umgebung",
      "Landliche Gemeinschaften",
      "Gastronomie",
      "Begegnungen",
      "Sprachen",
      "Kulturelle Entdeckung",
    ],
  },
  agb: {
    kicker: "Dein Standort",
    title: "Agbelouve, Togo",
    body: "Agbelouve ist eine landliche Gemeinde in der Präfektur Zio, etwa 60 km nordlich von Lome. Landwirtschaft, Markte, Gemeinschaften und wachsender Zugang zu digitalen Tools: hier entsteht der Alltag der Mission.",
    facts: [
      { label: "Lage", value: "Präfektur Zio, Region Maritime" },
      { label: "Umfeld", value: "Landlicher Raum, Landwirtschaft und Partnerdorfer" },
      { label: "Anreise", value: "Strasse von Lome, internationaler Flughafen erreichbar" },
      { label: "Gemeinschaften", value: "Kooperativen, Jugend, lokale Multiplikatoren" },
      { label: "Nahe Lome", value: "Etwa 60 km nordlich der Hauptstadt" },
      { label: "Lebensbedingungen", value: "Landlicher Rahmen, betreute Unterkunft, lokaler Rhythmus" },
    ],
  },
  support: {
    kicker: "Unterstutzung und Unterkunft",
    title: "Du bist nicht allein.",
    note: "Die genauen Modalitaten (Unterkunft, Essen, Transport, Versicherung) bestatigt APTIC-R vor der Abreise.",
    items: [
      { title: "Unterkunft", body: "Organisierte Aufnahme vor Ort." },
      { title: "Verpflegung", body: "Mahlzeiten und Alltag, je nach Programm." },
      { title: "Lokaler Transport", body: "Fahrten zu den Einsatzorten." },
      { title: "Mentor / Ansprechperson", body: "Eine lokale Ansprechperson begleitet dich." },
      { title: "Kommunikation", body: "Regelmassiger Kontakt zum APTIC-R-Team." },
      { title: "Sicherheit", body: "Briefing, Regeln und Begleitung wahrend des Einsatzes." },
      { title: "Gesundheit", body: "Gesundheitsinfos; Versicherung je nach Programm." },
      { title: "Begleitung", body: "Integration, Missionssupport und Vorbereitung auf die Abreise." },
    ],
  },
  included: {
    kicker: "Transparenz",
    title: "Was ist enthalten?",
    colItem: "Punkt",
    colInfo: "Information",
    rows: [
      { item: "Einsatz", info: "6 bis 12 Monate" },
      { item: "Unterkunft", info: "Vor der Abreise zu klaren" },
      { item: "Mahlzeiten", info: "Vor der Abreise zu klaren" },
      { item: "Lokaler Transport", info: "Vor der Abreise zu klaren" },
      { item: "Versicherung", info: "Je nach Programm" },
      { item: "Internationale Reise", info: "Je nach Programm" },
      { item: "Visum", info: "Je nach Verfahren" },
      { item: "Aufwandsentschadigung", info: "Je nach Programm" },
      { item: "Begleitung", info: "Ja / Details folgen" },
    ],
  },
  process: {
    kicker: "Bewerbung",
    title: "So bewirbst du dich",
    steps: [
      { title: "Entdecken", body: "Lerne Mission und Alltag in Agbelouve kennen." },
      { title: "Bewerben", body: "Formular ausfullen und Unterlagen anhagen." },
      { title: "Gesprach", body: "Online-Interview mit dem APTIC-R-Team." },
      { title: "Auswahl", body: "Prufung der Unterlagen und Motivation." },
      { title: "Vorbereitung", body: "Ausreisevorbereitung, Visum und Onboarding." },
      { title: "Willkommen in Togo", body: "Ankunft und Integration vor Ort." },
    ],
  },
  apply: {
    kicker: "Ich mochte Freiwillige:r werden",
    title: "Fur das Programm bewerben",
    identity: "Identitat",
    profile: "Profil",
    skills: "Kompetenzen",
    availability: "Verfugbarkeit",
    firstName: "Vorname",
    lastName: "Nachname",
    email: "E-Mail",
    phone: "Telefon",
    country: "Land",
    city: "Stadt",
    birthDate: "Geburtsdatum",
    education: "Ausbildung",
    field: "Studienfach",
    profession: "Beruf",
    experience: "Erfahrungsniveau",
    digital: "Digitale Kompetenzen",
    arrival: "Gewunschtes Ankunftsdatum",
    duration: "Dauer",
    duration6: "6 Monate",
    duration9: "9 Monate",
    duration12: "12 Monate",
    expStudent: "Student:in",
    expGraduate: "Absolvent:in",
    expPro: "Young Professional",
    motivation: "Warum mochtest du bei APTIC-R freiwillig arbeiten?",
    project: "Erzahle uns von einem Projekt, an dem du gearbeitet hast.",
    documents: "Dokumente",
    cv: "Lebenslauf (PDF)",
    letter: "Motivationsschreiben",
    portfolio: "Portfolio (optional)",
    source: "Wie hast du von APTIC-R erfahren?",
    submit: "Bewerbung senden",
    required: "Pflichtfelder",
    skillList: [
      "Informatik",
      "Daten",
      "Webentwicklung",
      "Mobile Entwicklung",
      "Landwirtschaft",
      "Grafikdesign",
      "Kommunikation",
      "Content Creation",
      "Arduino",
      "Raspberry Pi",
      "Internet der Dinge (IoT)",
      "Digitale Bildung",
      "Projektmanagement",
    ],
    sourceList: [
      "Google",
      "LinkedIn",
      "Instagram",
      "Facebook",
      "Universitat",
      "Freiwilligenorganisation",
      "France Volontaires",
      "weltwarts",
      "Europaisches Solidaritatskorps",
      "Freund:in",
      "Andere",
    ],
  },
  partner: {
    kicker: "Ich vertrete eine Organisation",
    title: "Partner werden",
    intro: "APTIC-R sucht europaische Organisationen fur langfristige Freiwilligenpartnerschaften in Togo.",
    org: "Organisation",
    country: "Land",
    website: "Website",
    contact: "Kontaktperson",
    email: "Berufliche E-Mail",
    type: "Organisationstyp",
    typeOpt: "Typ wahlen",
    type1: "Universitat / Hochschule",
    type2: "NGO / Verein",
    type3: "Entsendeorganisation",
    type4: "Andere",
    volunteers: "Potenzielle Zahl an Freiwilligen",
    countries: "Betroffene Lander",
    program: "Freiwilligenprogramm",
    message: "Nachricht",
    document: "Präsentationsdokument",
    submit: "Partnerschaftsanfrage senden",
    required: "Pflichtfelder",
  },
  stories: {
    kicker: "Vertrauen",
    title: "Geschichten von Freiwilligen",
    items: [
      {
        name: "Jonas",
        country: "Deutschland",
        flag: "DE",
        role: "Freiwilliger fur digitale Innovation",
        quote: "Man kommt nicht mit einer fertigen Losung. Man hort zu, prototypt und lernt mit den Landwirtinnen. Das ist nutzliche Innovation.",
      },
      {
        name: "Claire",
        country: "Frankreich",
        flag: "FR",
        role: "Freiwillige fur landliche Technologie",
        quote: "Agbelouve hat mich gelehrt, einfach zu denken: eine Offline-App, eine Schulung, ein lokaler Multiplikator. Wirkung zeigt sich im Alltag.",
      },
      {
        name: "Thomas",
        country: "Belgien",
        flag: "BE",
        role: "Freiwilliger fur Low-Tech-Landwirtschaft",
        quote: "Das Feld verandert den Blick auf Tech. Ein Sensor, eine SMS, eine Kooperative: bescheidene Tools, echter Wandel.",
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Haufige Fragen",
    items: [
      {
        q: "Muss ich Franzosisch sprechen?",
        a: "Franzosisch ist im Alltag in Togo hilfreich. Kommunikationsfahigkeit ist ein Plus. Englisch wird auch im internationalen Team genutzt. Lokale Begleitung hilft beim Ankommen.",
      },
      {
        q: "Brauche ich vorherige Freiwilligenerfahrung?",
        a: "Nein. Motivation, Neugier und Teamarbeit zahlen ebenso wie ein fruherer Einsatz.",
      },
      {
        q: "Muss ich IT-Experte sein?",
        a: "Nein. Digitale, landwirtschaftliche, kreative und technische Profile sind willkommen. Wichtig ist die Lust, im Feld zu lernen.",
      },
      {
        q: "Wo werde ich wohnen?",
        a: "Die Aufnahme erfolgt in Agbelouve und im Umfeld der Mission. Die Unterkunftsart bestatigt APTIC-R vor der Abreise.",
      },
      {
        q: "Wird Unterkunft gestellt?",
        a: "Eine Aufnahmelosung wird organisiert. Details (Wohnen, Essen, lokaler Transport) werden vor der Abreise geklart.",
      },
      {
        q: "Wie lange dauert der Einsatz?",
        a: "Die Einsatze dauern 6 bis 12 Monate, je nach Verfugbarkeit und Entsendeprogramm.",
      },
      {
        q: "Was kostet das Programm?",
        a: "Das hangt vom Verfahren ab (Entsendeorganisation, Stipendium, europaisches Programm). APTIC-R klar t die Bedingungen bei der Auswahl.",
      },
      {
        q: "Wer zahlt den Flug?",
        a: "Die internationale Reise hangt vom Entsendeprogramm oder Status ab. Das wird vor der Bestatigung geklart.",
      },
      {
        q: "Und die Versicherung?",
        a: "Kranken- und Ruckholversicherung ist erforderlich. Sie kann uber ein Partnerprogramm laufen oder mit APTIC-R organisiert werden.",
      },
      {
        q: "Welches Visum brauche ich?",
        a: "Das Visum hangt von der Staatsangehorigkeit und dem Verfahren ab. APTIC-R begleitet dich in der Ausreisevorbereitung.",
      },
      {
        q: "Ist Agbelouve sicher?",
        a: "Agbelouve ist eine landliche Gemeinde mit lokalem Team. Sicherheitsbriefing, Ansprechperson und klare Regeln gehoren zur Aufnahme.",
      },
      {
        q: "Bekomme ich eine lokale Mentoring-Person?",
        a: "Ja. Eine lokale Ansprechperson begleitet Integration, Mission und den Kontakt zu den Gemeinschaften.",
      },
      {
        q: "Kann ich mich bewerben, wenn ich nicht aus Europa komme?",
        a: "Ja. Das Programm richtet sich vor allem an Europa, Bewerbungen aus anderen Landern werden gepruft.",
      },
      {
        q: "Was passiert nach der Bewerbung?",
        a: "APTIC-R pruft die Unterlagen, bietet bei Passung ein Online-Gesprach an und geht dann in Auswahl und Ausreisevorbereitung.",
      },
    ],
  },
  cta: {
    title: "Bereit, Wirkung zu entfalten?",
    p1: "Deine Kompetenzen konnen wertvolle Werkzeuge fur landliche Gemeinschaften werden.",
    p2: "Deine Erfahrung kann fur jemand anderen zur Chance werden.",
    p3: "Dein nachstes Abenteuer konnte in Togo beginnen.",
    apply: "Jetzt bewerben",
    partner: "Partner werden",
  },
  footer: {
    tagline: "Verein zur Forderung der IKT im landlichen Raum in Togo",
    org: "APTIC-R",
    navLabel: "Navigation",
    social: "Soziale Netzwerke",
    contact: "Kontakt",
    email: "contact@aptic-r.org",
    phone: "Telefon folgt",
    location: "Agbelouve - Togo",
    privacy: "Datenschutz",
    copyright: "APTIC-R · Verein zur Forderung der IKT im landlichen Raum in Togo",
    about: "Uber uns",
    mission: "Mission",
    apply: "Bewerben",
    partners: "Partner",
    faq: "FAQ",
    contactLink: "Kontakt",
  },
  privacy: {
    title: "Datenschutz",
    close: "Schliessen",
    body: [
      "APTIC-R erhebt Angaben aus dem Bewerbungs- und Partnerformular nur zur Bearbeitung deiner Anfrage: Identitat, Kontakt, Profil, hochgeladene Dokumente und Quelle.",
      "Diese Daten nutzt das APTIC-R-Team fur Bewertung, Gesprach, Auswahl und Begleitung. Sie werden nicht an Dritte verkauft.",
      "Zugang, Berichtigung oder Loschung kannst du unter contact@aptic-r.org verlangen.",
      "Dokumente (Lebenslauf, Schreiben, Portfolio) werden fur die Dauer des Auswahlverfahrens aufbewahrt und danach gemaß der internen Richtlinie archiviert oder geloscht.",
    ],
  },
  success: {
    applyTitle: "Bewerbung gesendet",
    applyBody: "Danke. Das APTIC-R-Team meldet sich nach Prufung der Unterlagen.",
    partnerTitle: "Partnerschaftsanfrage gesendet",
    partnerBody: "Danke. Wir prufen deinen Vorschlag und melden uns.",
    sending: "Wird gesendet…",
    error: "Senden fehlgeschlagen. Bitte Felder prüfen und erneut versuchen.",
  },
  cookies: {
    title: "Cookies",
    body: "Wir verwenden fur den Betrieb notwendige Cookies und, mit deiner Zustimmung, anonyme Reichweitenmessung, um Besuche zu verstehen und diese Seite zu verbessern.",
    essential: "Nur notwendige",
    accept: "Alle akzeptieren",
  },
  eligibility: {
    kicker: "Eignung",
    title: "Passt dieser Einsatz zu dir?",
    intro:
      "Beantworte ein paar Fragen, um zu prufen, ob das internationale Freiwilligenprogramm von APTIC-R zu deiner Situation passt.",
    questions: [
      "Du bist mindestens 18 Jahre alt.",
      "Du kannst dich fur 6 bis 12 Monate verpflichten.",
      "Du bist bereit, in einer landlichen Gemeinschaft in Togo zu leben.",
      "Du mochtest deine Fahigkeiten teilen und von den lokalen Gemeinschaften lernen.",
      "Du arbeitest gern im Team und im Feld.",
    ],
    yes: "Ja",
    no: "Nein",
    pending: "Beantworte alle Fragen, um dein Ergebnis zu sehen.",
    okTitle: "Du kannst dich bewerben",
    okBody: "Dein Profil passt zum Programm. Nachster Schritt: das Bewerbungsformular ausfullen.",
    koTitle: "Das Programm passt moglicherweise nicht",
    koBody:
      "Eine oder mehrere Antworten deuten darauf hin, dass der Einsatz nicht zu deiner Situation passt. Kontaktiere uns oder lies den Freiwilligenleitfaden.",
    cta: "Jetzt bewerben",
    guide: "Freiwilligenleitfaden lesen",
  },
  guide: {
    kicker: "Freiwilligenleitfaden",
    title: "Leitfaden fur internationale Freiwillige",
    intro:
      "Alles, was du vor der Bewerbung wissen musst: der Einsatz, das Leben in Agbelouve, das Auswahlverfahren und die Vorbereitung.",
    download: "Leitfaden herunterladen",
    sections: [
      {
        title: "Der Einsatz",
        body: "Du arbeitest mit landlichen Gemeinschaften rund um Agbelouve an digitalen und Low-Tech-Losungen: Felddiagnose, landliche Hackathons, Prototyping, Schulung lokaler Multiplikatoren und Open-Source-Dokumentation. Einsatze dauern 6 bis 12 Monate.",
      },
      {
        title: "Eine typische Woche",
        body: "Montag: digitale Innovation. Dienstag: FeldBesuch. Mittwoch: Prototyping. Donnerstag: Schulung. Freitag: landliches Innovationslabor. Samstag: kulturelle Entdeckung. Sonntag: Ruhetag.",
      },
      {
        title: "Leben in Agbelouve",
        body: "Agbelouve ist eine landliche Stadt in Togo, nahe Lome. Du entdeckst die togolesische Kultur, lokale Kuche und ein tropisches Umfeld. Unterkunft, Verpflegung, lokaler Transport und Betreuung werden von APTIC-R vor der Abreise bestatigt.",
      },
      {
        title: "Bewerbung und Auswahl",
        body: "1. Einsatz entdecken. 2. Formular ausfullen. 3. Online-Gesprach. 4. Bewertung und Auswahl. 5. Vorbereitung. 6. Ankunft und Eingliederung in Togo.",
      },
      {
        title: "Abreise vorbereiten",
        body: "Je nach Land und Programm konnen Visum, Versicherung und Flugticket notig sein. APTIC-R begleitet dich bei jedem Schritt, und ein lokaler Ansprechpartner betreut dich vor Ort.",
      },
    ],
    footer: "Fragen? contact@aptic-r.org",
  },
};

export const dictionary: Record<Lang, Dict> = { fr, en, de };
