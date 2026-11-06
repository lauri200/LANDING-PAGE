# -*- coding: utf-8 -*-
"""Introduction générale + Partie 1 + Chapitre 1."""

from doc import bullet, chapter_conclusion, chapter_intro, figure, h1, h2, h3, p, part_page


def introduction(doc):
    h1(doc, "INTRODUCTION GÉNÉRALE")
    p(doc, "Le volontariat international occupe une place croissante dans les "
           "stratégies de solidarité, de formation et de diplomatie des "
           "organisations. Programmes d’envoi publics, associations et "
           "fondations mettent chaque année en relation des milliers de jeunes "
           "avec des structures d’accueil, autour d’enjeux de développement, "
           "d’éducation et de transfert de compétences. Dans le domaine du "
           "numérique, ces rencontres prennent une forme particulière : des "
           "volontaires apportent des compétences techniques — développement, "
           "données, conception — à des communautés qui ont des besoins "
           "concrets mais peu de ressources.")
    p(doc, "L’Afrique de l’Ouest n’est pas en reste de ce mouvement, mais elle "
           "y arrive avec un handicap : la fracture numérique entre villes et "
           "campagnes. Au Togo, si l’accès aux outils numériques progresse, "
           "les communautés rurales demeurent peu équipées et peu formées. "
           "L’approche low-tech — des solutions simples, abordables et "
           "réparables localement — ouvre une voie concrète : messagerie SMS, "
           "applications hors ligne, capteurs à bas coût, tableaux de bord "
           "agricoles. Reste à trouver les personnes capables de concevoir, "
           "prototyper et transmettre ces solutions sur le terrain.")
    p(doc, "Pour répondre à ce besoin, APTIC-R a imaginé le programme "
           "« APTIC-R International Volunteers » : accueillir à Agbélouvé, "
           "dans la préfecture de Zio (région Maritime), des volontaires "
           "européens — Allemands, Français, Belges et autres — pour des "
           "missions de six à douze mois. Le programme invite à « construire "
           "des technologies pour les communautés rurales » : diagnostic "
           "terrain, hackathons ruraux, prototypage low-tech, formation de "
           "relais locaux et documentation open source.")
    p(doc, "Or un tel programme ne saurait reposer sur des publications "
           "ponctuelles en ligne ni sur de la prospection par courriel. Le "
           "public visé — étudiants, jeunes diplômés et jeunes professionnels "
           "européens — attend une information centralisée, crédible et rédigée "
           "dans sa langue : la mission, la vie au Togo, les conditions "
           "d’accueil, le processus de candidature. Les organisations "
           "partenaires veulent, elles, une présentation claire des modalités "
           "de collaboration, tandis que l’équipe APTIC-R a besoin d’outils "
           "pour trier, suivre et piloter les dossiers reçus.")
    p(doc, "La présence en ligne d’une association locale reste cependant "
           "souvent rudimentaire : informations dispersées, pas de canal "
           "unique de candidature, contenus dans une seule langue, aucun "
           "outil de traitement des dossiers. De là découle la question "
           "centrale de ce mémoire : comment concevoir et développer une "
           "landing page multilingue offrant une présentation structurée, "
           "complète et interactive du programme de volontariat d’APTIC-R, "
           "depuis la découverte de la mission jusqu’au traitement "
           "administratif des candidatures ? Plusieurs interrogations "
           "opérationnelles en découlent. Quels acteurs convient-il de "
           "servir, et pour quels usages ? Quelles sections et quels "
           "arguments rendent la page réellement convaincante, au-delà d’un "
           "simple prospectus ? Quelle architecture concilie délai de stage, "
           "maintenabilité, sécurité, référencement et usage mobile ? Comment "
           "articuler communication publique et gestion interne des dossiers "
           "sans morceler l’expérience ?")
    p(doc, "Le travail poursuit un objectif général : concevoir et développer, "
           "dans le cadre de mon stage à APTIC-R, une landing page multilingue "
           "de recrutement de volontaires internationaux qui informe les "
           "publics européens, collecte candidatures et demandes de "
           "partenariat, et outille l’organisation dans le traitement des "
           "dossiers.")
    p(doc, "Cet objectif se décompose en cinq objectifs spécifiques :")
    bullet(doc, "étudier les pratiques de recrutement de volontaires en ligne "
                "et relever les insuffisances des solutions existantes face "
                "au programme APTIC-R ;")
    bullet(doc, "formaliser les besoins fonctionnels et non fonctionnels des "
                "acteurs concernés (visiteurs, candidats, organisations "
                "partenaires, administrateurs) ;")
    bullet(doc, "concevoir l’application — cas d’utilisation, modèle de "
                "données, architecture — en garantissant cohérence, sécurité "
                "et évolutivité ;")
    bullet(doc, "réaliser les modules essentiels : site trilingue, "
                "formulaires de candidature et de partenariat avec dépôt de "
                "documents, back-office de traitement, notifications "
                "automatiques, référencement et mesure d’audience ;")
    bullet(doc, "éprouver le livrable par les tests, puis en discuter les "
                "résultats à la lumière du cahier des charges, des "
                "contraintes du stage et des perspectives d’évolution.")
    p(doc, "Trois ordres de raisons motivent ce sujet. Sur le plan "
           "opérationnel, APTIC-R a besoin d’un canal numérique unique, "
           "professionnel et exploitable pour son programme de volontariat. "
           "Sur le plan pédagogique, le sujet offre le passage des "
           "enseignements de licence — analyse, conception, développement "
           "web, bases de données, tests — à une réalisation concrète sous "
           "encadrement professionnel. Sur le plan sectoriel, enfin, outiller "
           "une association togolaise pour attirer des compétences "
           "internationales revient à contribuer, à son échelle, à la "
           "diffusion du numérique dans les zones rurales.")
    p(doc, "Le document s’articule en deux parties. La première établit le "
           "cadre théorique et organisationnel : le chapitre 1 introduit les "
           "notions de landing page et de recrutement en ligne avant de "
           "présenter APTIC-R, le déroulement du stage et la justification du "
           "sujet ; le chapitre 2 définit les concepts clés puis confronte "
           "les solutions et travaux similaires. La seconde partie relève du "
           "cadre empirique : le chapitre 3 expose la méthodologie, l’analyse "
           "des besoins, la conception et la mise en œuvre ; le chapitre 4 "
           "rend compte des résultats, en discute, en dégage les limites et "
           "propose des suggestions. La conclusion générale revient sur la "
           "problématique, en synthétise les apports et ouvre des "
           "perspectives.")


def partie1(doc):
    part_page(doc, "PREMIÈRE PARTIE : CADRE THÉORIQUE ET ORGANISATIONNEL")


def chapitre1(doc):
    h1(doc, "CHAPITRE 1 : GÉNÉRALITÉS SUR LA THÉMATIQUE ET ENVIRONNEMENT D’ÉTUDE")
    chapter_intro(doc)
    p(doc, "Toute réalisation logicielle se situe à l’intersection de deux "
           "référentiels : un référentiel de connaissances, qui fournit les "
           "notions du domaine, et un référentiel organisationnel, qui "
           "identifie le commanditaire, les contraintes et le terrain "
           "d’application. Ce chapitre pose ces deux repères : la section 1.1 "
           "introduit les généralités sur les landing pages et le recrutement "
           "de volontaires en ligne ; la section 1.2 présente APTIC-R, le "
           "déroulement du stage et les raisons du choix du sujet.")

    h2(doc, "1.1. GÉNÉRALITÉS SUR LES LANDING PAGES ET LE RECRUTEMENT EN LIGNE")
    h3(doc, "1.1.1. Notion de landing page et de conversion")
    p(doc, "Une landing page (page d’atterrissage) est une page web conçue pour "
           "un objectif précis : transformer un visiteur en acteur — "
           "inscription, don, candidature, demande de contact. À la différence "
           "d’un site institutionnel qui présente une organisation dans son "
           "ensemble, la landing page concentre l’attention sur un seul "
           "parcours : tout y sert la décision du visiteur (Nielsen, 2012 ; "
           "Krug, 2014).")
    p(doc, "La qualité d’une landing page se mesure à son taux de conversion : "
           "la proportion de visiteurs qui accomplissent l’action attendue. "
           "Plusieurs caractéristiques distinguent une page performante. La "
           "première est la clarté de la proposition de valeur : le visiteur "
           "doit comprendre en quelques secondes ce qui lui est proposé, pour "
           "qui, et où. La deuxième est la structure persuasive : les sections "
           "enchaînent la promesse, la preuve, la réassurance et l’appel à "
           "l’action répété (CTA). La troisième est la réduction des frictions "
           ": formulaires lisibles, rassurance sur les données, parcours "
           "mobile. La quatrième est la mesure : sans événements de suivi, il "
           "est impossible de savoir où les visiteurs abandonnent.")
    p(doc, "Dans le contexte d’un programme international comme celui "
           "d’APTIC-R, ces exigences prennent une dimension particulière. Le "
           "public est multilingue : un candidat allemand ou belge n’attend pas "
           "la même langue qu’un partenaire francophone. Les sources de trafic "
           "sont mobiles : une grande partie des visiteurs arrive des réseaux "
           "sociaux, sur téléphone. L’enjeu de confiance est fort : postuler "
           "pour six à douze mois à l’étranger suppose de rassurer sur "
           "l’hébergement, la sécurité, l’accompagnement. Enfin, la page ne "
           "peut se limiter à l’affichage : la candidature produit des données "
           "et des documents qu’il faut stocker, trier et traiter — la landing "
           "page touche donc au système d’information autant qu’au marketing.")
    h3(doc, "1.1.2. Le volontariat international et le rôle du web dans le "
            "recrutement")
    p(doc, "Le volontariat international désigne l’engagement de personnes dans "
           "une mission de solidarité ou de coopération hors de leur pays, "
           "généralement encadrée par un programme : dispositifs publics "
           "(France Volontaires, Corps européen de solidarité, weltwärts en "
           "Allemagne), associations d’envoi ou structures d’accueil locales. "
           "Ces programmes combinent un volet de service — la mission — et un "
           "volet d’apprentissage — découverte culturelle, compétences "
           "nouvelles.")
    p(doc, "Dans ce domaine, le web remplit au moins cinq fonctions (Kotler et "
           "Keller, 2016) :")
    bullet(doc, "une fonction informationnelle : présenter le programme, ses "
                "objectifs, ses conditions et ses publics ;")
    bullet(doc, "une fonction de preuve : témoignages, photographies du "
                "terrain, transparence sur ce qui est inclus ;")
    bullet(doc, "une fonction relationnelle : formulaire de candidature, "
                "demande de partenariat, contact ;")
    bullet(doc, "une fonction opérationnelle : outiller l’organisation qui "
                "reçoit les dossiers (tri, statuts, rendez-vous, export) ;")
    bullet(doc, "une fonction mémorielle : constituer une base de candidatures "
                "et de contacts réutilisable d’une session à l’autre.")
    p(doc, "Une architecture fréquente consiste à publier la présence publique "
           "sous forme de page web légère, adossée à un service managé pour les "
           "données, plutôt qu’à une infrastructure serveur dédiée. Cette "
           "approche convient aux structures associatives dont l’équipe "
           "technique est réduite : elle limite l’administration serveur tout "
           "en conservant de vraies bases SQL.")
    p(doc, "Enfin, le rôle de la page s’apprécie à l’aune de la confiance. Un "
           "formulaire qui perd un dossier, un site en une seule langue pour "
           "un programme trinational ou un back-office inaccessible ruinent la "
           "crédibilité du programme. La qualité logicielle — fiabilité, "
           "sécurité, utilisabilité — fait partie de la communication "
           "(ISO/IEC 25010, 2011 ; Pressman et Maxim, 2014).")

    # ------------------------- 1.2 APTIC-R (inchangé dans l'esprit) ----------
    h2(doc, "1.2. PRÉSENTATION DE LA STRUCTURE D’ACCUEIL")
    h3(doc, "1.2.1. Cadre organisationnel")
    h3(doc, "1.2.1.1. Historique de la structure")
    p(doc, "APTIC-R — Association pour la Promotion des TIC en milieu Rural au "
           "Togo — est une organisation togolaise dont le champ d’action "
           "couvre les Technologies de l’Information et de la Communication "
           "(TIC). Sa vocation consiste à rapprocher les populations, les "
           "organisations et les entreprises des outils numériques.")
    p(doc, "L’association est née d’un constat : l’écart d’accès et de "
           "maîtrise du numérique entre les centres urbains et les zones "
           "rurales. Pour le réduire, elle agit sur trois leviers — élargir "
           "l’accès aux technologies, sensibiliser à leurs usages et renforcer "
           "les compétences informatiques. Cette orientation prend tout son "
           "sens dans un pays où la digitalisation est devenue un enjeu de "
           "développement économique et social, au Togo comme sur le "
           "continent.")
    p(doc, "Fort de cet ancrage, APTIC-R a lancé le programme international de "
           "volontariat qui fait l’objet de ce mémoire : accueillir à "
           "Agbélouvé des volontaires venus d’Europe pour des missions de six "
           "à douze mois consacrées à l’innovation numérique, à l’agriculture "
           "et à la low-tech. Le programme prolonge ainsi la mission de "
           "l’association en faisant venir sur le terrain des compétences "
           "extérieures.")
    h3(doc, "1.2.1.2. Organisation administrative")
    p(doc, "L’organisation d’APTIC-R s’articule autour des métiers du "
           "numérique et de l’accompagnement. L’organigramme détaillé de "
           "l’association n’est pas publié, mais la structure réunit plusieurs "
           "profils techniques couvrant le développement informatique, le "
           "support et la formation. On peut distinguer quatre ensembles "
           "fonctionnels.")
    p(doc, "La direction générale et l’administration prennent en charge :")
    bullet(doc, "l’orientation stratégique de l’association ;")
    bullet(doc, "la gestion administrative et financière ;")
    bullet(doc, "le pilotage et la coordination des projets.")
    p(doc, "Le pôle développement informatique assure :")
    bullet(doc, "la conception et la réalisation d’applications web et mobiles ;")
    bullet(doc, "l’adaptation des solutions numériques aux besoins exprimés par "
                "les clients ;")
    bullet(doc, "le suivi et l’amélioration des applications en service.")
    p(doc, "Le pôle réseaux et maintenance couvre :")
    bullet(doc, "l’installation et le paramétrage du matériel informatique ;")
    bullet(doc, "l’entretien et la maintenance des systèmes ;")
    bullet(doc, "l’assistance apportée aux utilisateurs.")
    p(doc, "Le pôle formation et accompagnement numérique est dédié à :")
    bullet(doc, "la montée en compétence des utilisateurs sur les outils "
                "bureautiques ;")
    bullet(doc, "l’initiation aux technologies numériques ;")
    bullet(doc, "l’appui aux structures engagées dans une démarche de "
                "digitalisation.")
    p(doc, "Grâce à ce découpage, APTIC-R couvre l’essentiel des besoins liés "
           "à la transformation digitale tout en développant les compétences "
           "numériques de ses publics. C’est au sein du pôle développement, "
           "placé sous la supervision du Directeur, que s’est déroulé le "
           "stage.")
    figure(doc, "Figure 1 : Organigramme fonctionnel d’APTIC-R",
           image="figures/fig1_organigramme.png")
    h3(doc, "1.2.1.3. Activités de la structure")
    p(doc, "L’activité d’APTIC-R se concentre sur le numérique et se décline "
           "en quatre familles.")
    p(doc, "a) Conception de solutions numériques. La première famille "
           "consiste à accompagner les organisations dans la réalisation "
           "d’applications web, de plateformes et d’outils de gestion, afin de "
           "fluidifier leurs processus et d’améliorer le suivi de leurs "
           "activités. La landing page des volontaires relève précisément de "
           "cette famille : derrière la page publique se trouvent une base de "
           "données et un back-office, ce qui en fait une application métier "
           "et non un simple site vitrine.")
    p(doc, "b) Services informatiques et maintenance. La seconde famille "
           "porte sur l’infrastructure : installation et configuration de "
           "matériels, entretien et réparation des équipements.")
    p(doc, "c) Formation aux usages numériques. Troisième famille d’activités, "
           "la formation vise à renforcer les compétences des utilisateurs : "
           "bureautique, initiation à l’informatique et prise en main d’outils "
           "numériques.")
    p(doc, "d) Communication et présence digitale. Enfin, APTIC-R conçoit des "
           "sites web et accompagne certains acteurs dans leur visibilité en "
           "ligne. La vitrine du programme de volontariat mobilise cette "
           "compétence, qu’elle dépasse par ses formulaires, son dépôt de "
           "documents et son back-office.")
    h3(doc, "1.2.1.4. Services proposés")
    p(doc, "En synthèse, l’offre de services d’APTIC-R se regroupe en cinq "
           "catégories :")
    bullet(doc, "développement d’applications web et mobiles ;")
    bullet(doc, "conception de plateformes numériques et d’outils de gestion ;")
    bullet(doc, "installation, configuration et maintenance d’équipements "
                "informatiques ;")
    bullet(doc, "formation bureautique et initiation aux TIC ;")
    bullet(doc, "création de sites web et web design.")
    p(doc, "Cette offre permet à l’association d’accompagner des acteurs "
           "variés dans leur modernisation numérique. Pour le projet étudié "
           "ici, ce sont principalement le développement d’applications et, "
           "en appoint, la présence digitale qui ont été mobilisés.")
    h3(doc, "1.2.1.5. Marché et environnement d’intervention")
    p(doc, "APTIC-R intervient dans le secteur des TIC, un marché porteur au "
           "Togo comme dans le reste de l’Afrique : la demande de services "
           "numériques, la progression de l’usage d’Internet et les besoins "
           "de digitalisation des organisations ouvrent de réelles "
           "opportunités aux structures spécialisées.")
    p(doc, "La clientèle visée se compose essentiellement de :")
    bullet(doc, "petites et moyennes entreprises désireuses d’adopter des "
                "solutions numériques ;")
    bullet(doc, "institutions et organisations requérant un accompagnement "
                "informatique ;")
    bullet(doc, "porteurs de programmes et de projets sectoriels — à l’image "
                "du programme international de volontariat — en quête de "
                "visibilité et d’outils de gestion.")
    p(doc, "Dans ce contexte de transformation digitale, APTIC-R joue un rôle "
           "de facilitateur : elle met les technologies à la portée des "
           "acteurs locaux et les aide à les adopter. Le programme de "
           "volontariat en est l’illustration : une association rurale ne "
           "dispose pas, par nature, des moyens d’une campagne de recrutement "
           "internationale ; il lui faut pourtant une présence "
           "professionnelle pour toucher durablement les publics européens.")

    h3(doc, "1.2.2. Déroulement du stage")
    p(doc, "Ce mémoire trouve son origine dans un stage effectué au sein "
           "d’APTIC-R pendant deux mois et demi, du 15 juillet 2026 au 30 "
           "septembre 2026.")
    p(doc, "J’ai été rattaché au pôle de développement des solutions et placé "
           "sous la supervision directe de monsieur DAGNON Edmund, Directeur. "
           "La mission qui m’a été confiée portait sur la réalisation de la "
           "landing page « APTIC-R International Volunteers », destinée à "
           "devenir le point d’entrée officiel du programme de volontariat.")
    p(doc, "Concrètement, mon activité a couvert :")
    bullet(doc, "l’analyse du cahier des charges remis par la structure et des "
                "attentes des publics visés (étudiants, jeunes diplômés et "
                "jeunes professionnels européens, organisations d’envoi) ;")
    bullet(doc, "la définition de l’architecture fonctionnelle et technique "
                "de la page et de son back-office ;")
    bullet(doc, "le développement du frontend en application web (React, "
                "TypeScript) intégralement traduite en français, anglais et "
                "allemand ;")
    bullet(doc, "la mise en place de la couche de données sur Supabase "
                "(PostgreSQL, authentification, stockage de fichiers, "
                "politiques de sécurité) et des fonctions base de données "
                "chargées des courriels ;")
    bullet(doc, "les tests fonctionnels et les correctifs, puis le "
                "déploiement de l’application sur Vercel et le travail de "
                "référencement (sitemap, robots, métadonnées).")
    p(doc, "Conformément à une démarche itérative, le travail a progressé par "
           "phases : analyse du cahier des charges, puis conception (acteurs, "
           "cas d’utilisation, modèle de données), développement par "
           "incréments (vitrine, internationalisation, formulaires, "
           "back-office, e-mails, SEO), et enfin tests, correctifs et mise en "
           "ligne.")
    p(doc, "Au-delà de la mise en pratique des enseignements reçus à l’ESIG, "
           "cette expérience m’a apporté des compétences concrètes : "
           "sécurisation des données au niveau des lignes (RLS), envoi "
           "d’e-mails transactionnels depuis la base, référencement "
           "multilingue et déploiement continu.")

    h3(doc, "1.2.3. Justification du choix du sujet")
    p(doc, "Le choix du sujet est directement lié à l’expérience vécue durant "
           "le stage. Au cours de mon immersion au sein d’APTIC-R, il est "
           "apparu qu’un programme de volontariat naissant ne pouvait pas "
           "s’appuyer uniquement sur des canaux dispersés : publications "
           "sociales, bouche-à-oreille, courriels isolés. L’information devait "
           "être centralisée ; les candidatures, collectées de manière "
           "structurée ; les dossiers, traités de façon homogène ; et le "
           "discours, accessible en trois langues.")
    p(doc, "Les échanges avec l’encadrement ont confirmé un besoin réel "
           "d’accompagnement numérique intégré : une vitrine professionnelle "
           "trilingue, un parcours de candidature complet, un back-office de "
           "traitement et une mesure des performances de la campagne. Les "
           "outils génériques (formulaires en ligne, pages de réseaux sociaux) "
           "ont été jugés trop fragmentés et insuffisamment adaptés au métier "
           "du programme (documents de candidature, statuts de suivi, "
           "rendez-vous d’entretien, deux parcours distincts volontaire et "
           "partenaire).")
    p(doc, "Le sujet présente aussi un intérêt pédagogique : il fait appel à "
           "la quasi-totalité des compétences enseignées à l’ESIG — analyse "
           "des besoins, modélisation UML et MERISE, développement web, bases "
           "de données, sécurité, tests et documentation. Il donne ainsi "
           "l’occasion de conduire un projet de génie logiciel dans sa "
           "totalité, de l’idée jusqu’à une application fonctionnelle "
           "déployée, dans un cadre professionnel réel.")
    p(doc, "Enfin, ce sujet dépasse l’outil lui-même : il s’agit de donner à "
           "un programme de volontariat togolais une présence numérique "
           "crédible, consultable depuis un téléphone, en français, en anglais "
           "et en allemand. C’est à la croisée des TIC, de la coopération "
           "internationale et de l’innovation rurale que se situe ce "
           "mémoire.")
    chapter_conclusion(doc)
    p(doc, "Ce premier chapitre a posé le cadre du mémoire : la landing page "
           "y apparaît comme un dispositif de conversion structuré et "
           "mesurable, bien au-delà d’une simple page de présentation. "
           "L’environnement professionnel a été décrit : APTIC-R, association "
           "togolaise de promotion des TIC en milieu rural, organisée en "
           "pôles couvrant développement, maintenance, formation et présence "
           "digitale, au service d’acteurs locaux en quête de transformation "
           "numérique. Le stage de deux mois et demi, mené au pôle "
           "développement sous "
           "la direction de monsieur DAGNON Edmund, a porté sur la landing "
           "page des volontaires internationaux — choix motivé par un besoin "
           "opérationnel, un enjeu pédagogique et un ancrage sectoriel. Le "
           "chapitre suivant précise les concepts clés et examine les "
           "solutions existantes.")
