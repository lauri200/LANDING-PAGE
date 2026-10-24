# -*- coding: utf-8 -*-
"""Chapitre 2 : revue de littérature + page de partie 2."""

from doc import bullet, chapter_conclusion, chapter_intro, h1, h2, h3, p, part_page, table, table_caption


def chapitre2(doc):
    h1(doc, "CHAPITRE 2 : REVUE DE LITTÉRATURE")
    chapter_intro(doc)
    p(doc, "Une revue de littérature a pour fonction de préciser le vocabulaire, "
           "de situer le travail dans un champ de connaissances et d’identifier "
           "ce qui a déjà été tenté, avec quels apports et quelles limites "
           "(Hart, 2018). Ce chapitre s’organise en deux temps. Je définis "
           "d’abord les concepts clés mobilisés tout au long du mémoire : "
           "landing page, conversion, référencement naturel, volontariat "
           "international et low-tech. Je propose ensuite une synthèse des "
           "solutions et travaux similaires, afin de faire apparaître les "
           "lacunes auxquelles la landing page APTIC-R entend répondre.")

    h2(doc, "2.1. Définition des concepts clés")
    h3(doc, "2.1.1. Landing page, conversion et référencement naturel")
    p(doc, "Landing page. Dans le langage courant, le terme est parfois employé "
           "comme synonyme de « page d’accueil ». En marketing digital, une "
           "landing page désigne précisément la page sur laquelle un visiteur "
           "« atterrit » après un clic (publicité, réseau social, résultat de "
           "recherche), conçue pour accomplir un objectif unique de conversion "
           "(Kotler et Keller, 2016). Dans le cas du programme APTIC-R, "
           "l’objectif principal est la candidature ; les objectifs "
           "secondaires sont la demande de partenariat et la constitution "
           "d’une base de contacts.")
    p(doc, "On distingue classiquement trois familles de pages : la page de "
           "présentation pure (brochure), la page de capture (formulaire "
           "simple, souvent une adresse e-mail) et la page applicative "
           "(formulaire complet, documents, suivi). La landing page APTIC-R "
           "appartient à la troisième famille : la candidature exige "
           "l’identité, le profil, les compétences, la disponibilité, la "
           "motivation et des fichiers (CV, lettre, portfolio). Une telle page "
           "n’est donc pas réductible à un prospectus : elle articule un "
           "discours persuasif et un service transactionnel.")
    p(doc, "Conversion et entonnoir. Le taux de conversion mesure la part des "
           "visiteurs qui accomplissent l’action attendue. Le parcours se lit "
           "comme un entonnoir : visiteur → lecteur engagé → début de "
           "formulaire → candidature soumise → candidature qualifiée → "
           "entretien → volontaire accueilli. Chaque étape peut être mesurée "
           "par des événements (clic sur l’appel à l’action, soumission, "
           "changement de langue), ce qui transforme la communication en "
           "données exploitables. C’est cette logique qui a guidé le tableau "
           "de bord de l’administration.")
    p(doc, "Référencement naturel (SEO). Une landing page qui n’est pas "
           "trouvée ne convertit pas. Le référencement naturel regroupe les "
           "pratiques qui rendent une page lisible par les moteurs : balises "
           "de titre et de description, contenu textuel, performance, balise "
           "canonique, sitemap, fichier robots, et — pour un site multilingue "
           "— annotations hreflang qui relient les versions linguistiques "
           "(Google Search Central, 2024). Les données structurées "
           "(JSON-LD) complètent le dispositif en décrivant l’organisation "
           "aux moteurs.")
    p(doc, "On distingue enfin les sites statiques, les applications web "
           "dynamiques et les applications monopages (SPA). Un site statique "
           "convient à une brochure. Une application dynamique génère les "
           "pages côté serveur. Une SPA, souvent développée avec React, Vue "
           "ou Angular, déplace une partie de la logique vers le navigateur "
           "et communique avec le serveur par API (Osmani, 2017). Le choix "
           "entre ces familles n’est pas idéologique : il dépend du besoin "
           "d’interactivité, de l’équipe, du délai et de l’hébergement. J’y "
           "reviendrai au chapitre 3.")
    h3(doc, "2.1.2. Volontariat international, programmes d’envoi et low-tech")
    p(doc, "Volontariat international. L’engagement volontaire à l’étranger "
           "prend des formes encadrées très diverses : volontariat de "
           "solidarité internationale, service civique européen (Corps "
           "européen de solidarité), programme allemand weltwärts, "
           "dispositifs de coopération comme France Volontaires, ou missions "
           "associatives directes. Ces programmes partagent des traits "
           "communs : une durée définie (souvent six à douze mois), un "
           "accompagnement avant, pendant et après la mission, et un "
           "cadre de partenariat entre organisation d’envoi et structure "
           "d’accueil.")
    p(doc, "Pour une structure d’accueil comme APTIC-R, la question n’est "
           "pas seulement d’attirer des volontaires : c’est aussi d’attirer "
           "des organisations d’envoi, qui financent, encadrent et garantissent "
           "les volontaires. La landing page a donc deux publics : le "
           "candidat individuel et l’organisation partenaire. Cette dualité "
           "structure le parcours (« Postuler » / « Devenir partenaire ») et "
           "les deux formulaires.")
    p(doc, "Low-tech. Le terme désigne des technologies simples, durables, "
           "accessibles, réparables localement et sobres en ressources : "
           "capteurs à bas coût, messagerie SMS, applications hors ligne, "
           "tableaux de bord simples. La low-tech n’est pas un rejet de "
           "l’innovation : c’est un critère d’adéquation au contexte — "
           "connectivité faible, équipements hétérogènes, maintenance "
           "locale (Trendov et al., 2019). Le programme APTIC-R place "
           "explicitement les volontaires dans cette approche : concevoir "
           "avec les communautés des solutions modestes et utiles.")
    p(doc, "Le croisement de ces deux champs — volontariat international et "
           "low-tech — n’est pas anecdotique. Beaucoup de programmes de "
           "volontariat proposent de l’aide généraliste ; beaucoup de "
           "projets tech restent urbains. Le programme APTIC-R cherche à "
           "tenir les deux bouts : des compétences numériques venues "
           "d’Europe, des besoins concrets de communautés rurales. La "
           "landing page doit refléter cette dualité dans son identité, ses "
           "arguments et ses parcours.")

    h2(doc, "2.2. Synthèse des travaux similaires")
    h3(doc, "2.2.1. Solutions existantes")
    p(doc, "Plusieurs familles de solutions visent, de près ou de loin, le "
           "recrutement de volontaires et de partenaires en ligne.")
    p(doc, "Les plateformes institutionnelles d’envoi. France Volontaires, "
           "le Corps européen de solidarité ou weltwärts disposent de "
           "portails complets : catalogue de missions, candidature en "
           "ligne, suivi de dossier. Leur force est la légitimité et la "
           "couverture. Leur limite, pour une structure locale, est la "
           "dissolution : un programme associatif togolais y devient une "
           "annonce parmi des milliers, sans maîtrise du discours ni des "
           "données.")
    p(doc, "Les plateformes généralistes de volontariat. Workaway, WWOOF, "
           "Worldpackers ou les agrégateurs de bénévolat permettent de "
           "publier une offre rapidement. Elles apportent une audience, "
           "mais restent génériques : impossible d’y structurer un "
           "formulaire métier (compétences, disponibilité, documents), "
           "d’y travailler un argumentaire de confiance ou d’y brancher "
           "un back-office de traitement. En outre, elles externalisent "
           "la donnée et la relation avec le candidat.")
    p(doc, "Les réseaux sociaux et campagnes publicitaires. Une page "
           "Facebook ou LinkedIn peut générer du trafic et de "
           "l’engagement à faible coût. Mais ces canaux ne collectent "
           "pas de dossier structuré : la candidature se termine en "
           "message privé ou en formulaire externe, difficile à suivre. "
           "Ils servent de source de trafic, non de canal de "
           "candidature.")
    p(doc, "Les CMS et sites vitrines. De nombreuses associations disposent "
           "d’un site WordPress présentant leurs actions, un formulaire de "
           "contact et une galerie. Ces sites remplissent la fonction "
           "informationnelle, rarement la fonction opérationnelle "
           "(dépôt de dossiers, statuts, rendez-vous, export). La "
           "conversion s’arrête souvent au message de contact.")
    p(doc, "Les développements spécifiques de recrutement. Les grandes ONG "
           "internationales disposent de portails de recrutement aboutis, "
           "fruit de moyens importants : candidature multilingue, suivi de "
           "dossier, entretiens planifiés. Ils constituent des modèles "
           "d’inspiration, non des solutions reproductibles à l’identique "
           "pour une association locale.")
    p(doc, "Les travaux académiques. La littérature en génie logiciel "
           "documente de nombreux projets de « plateformes de recrutement » : "
           "dépôt de candidature, gestion de statuts, notifications. Ces "
           "travaux confirment l’intérêt d’UML, des architectures "
           "trois-tiers et des tests fonctionnels (Sommerville, 2016). Ils "
           "montrent aussi un écueil fréquent : un grand nombre de modules "
           "promis, un faible niveau de finition, et une absence de lien "
           "avec une organisation réelle. Mon travail se distingue par son "
           "ancrage : un programme identifié, un cahier des charges "
           "fourni par la structure, deux parcours métier, un back-office "
           "opérationnel.")
    table_caption(doc, "Tableau 1 : Comparaison des principales familles de "
                       "solutions de recrutement")
    table(doc,
          ["Famille", "Forces", "Limites pour APTIC-R"],
          [
              ["Portails d’envoi institutionnels",
               "Légitimité, audience, cadre",
               "Programme dilué, aucune maîtrise du discours ni des données"],
              ["Plateformes de volontariat (Workaway, WWOOF…)",
               "Rapidité, communauté",
               "Peu de métier, formulaire générique, marque diluée"],
              ["Réseaux sociaux / campagnes",
               "Trafic, coût faible",
               "Pas de dossier structuré, suivi impossible"],
              ["CMS vitrine (WordPress)",
               "Éditorial, autonomie communication",
               "Faible couverture opérationnelle (documents, statuts, rendez-vous)"],
              ["Portails de grandes ONG",
               "Parcours complet, notoriété",
               "Non transposable en l’état (moyens, maturité)"],
              ["Développement spécifique",
               "Alignement métier, maîtrise des données, image",
               "Charge de développement, maintenance"],
          ])
    h3(doc, "2.2.2. Identification des lacunes ou limitations des travaux "
            "existants")
    p(doc, "Premièrement, le fossé entre communication et gestion. Beaucoup "
           "de pages informent, mais ne gèrent pas. Or, pour le programme "
           "APTIC-R, la candidature n’est pas un détail : elle conditionne "
           "le tri, l’entretien, la sélection et l’accueil du volontaire.")
    p(doc, "Deuxièmement, l’indifférenciation des publics. Un formulaire "
           "unique « nom, e-mail, message » ignore que le volontaire "
           "individuel et l’organisation d’envoi n’ont ni les mêmes données "
           "à fournir ni les mêmes droits. L’opportunité est de concevoir "
           "deux parcours distincts, matérialisés par deux formulaires et "
           "deux tables.")
    p(doc, "Troisièmement, la faible prise en compte du multilinguisme et du "
           "mobile. Un programme qui vise l’Allemagne, la France et la "
           "Belgique ne peut pas s’afficher en français seul. Un trafic "
           "venant des réseaux sociaux impose une lisibilité parfaite sur "
           "petit écran. Ce sont des exigences, non des options.")
    p(doc, "Quatrièmement, l’absence de mesure. Sans événements de suivi ni "
           "entonnoir, l’organisation ne sait ni combien de visiteurs "
           "deviennent candidats, ni d’où ils viennent. Une campagne "
           "internationale suppose des indicateurs par pays, langue, "
           "source et durée souhaitée.")
    p(doc, "Cinquièmement, la souveraineté numérique. Recourir exclusivement "
           "à des plateformes tierces expose à des coûts récurrents, à une "
           "perte de maîtrise des données personnelles des candidats et à "
           "une dépendance vis-à-vis des règles de l’agrégateur. Un "
           "développement spécifique, hébergé de manière maîtrisée, "
           "constitue une opportunité d’autonomie pour la structure.")
    p(doc, "Ces lacunes définissent le positionnement de la landing page : "
           "une application métier, légère, mobile-first, trilingue, centrée "
           "sur les deux parcours du programme, combinant vitrine, "
           "candidature, partenariat, administration et mesure, tout en "
           "laissant ouvertes les extensions (espace candidat, témoignages "
           "authentiques, blog).")
    chapter_conclusion(doc)
    p(doc, "La revue de littérature a permis de stabiliser le vocabulaire et "
           "de situer le projet. Une landing page est un dispositif de "
           "conversion, distinct d’un site vitrine. Le référencement et le "
           "multilinguisme en conditionnent la portée. Le volontariat "
           "international et la low-tech fournissent le contenu et la raison "
           "d’être du programme. Les solutions existantes — portails d’envoi, "
           "plateformes de volontariat, réseaux sociaux, CMS — laissent un "
           "espace : celui d’un système spécifique, adapté à APTIC-R, à ses "
           "publics et à ses contraintes. C’est cet espace que la "
           "méthodologie et la mise en œuvre du chapitre suivant s’emploient "
           "à occuper.")


def partie2(doc):
    part_page(doc, "PARTIE 2 : CADRE EMPIRIQUE ET RÉSULTATS")
