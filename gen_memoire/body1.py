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
    p(doc, "Cette dynamique n’échappe pas à l’Afrique de l’Ouest, où la "
           "fracture numérique demeure marquée entre villes et campagnes. Au "
           "Togo, l’accès aux outils numériques progresse, mais les communautés "
           "rurales restent peu équipées et peu formées. L’approche dite "
           "low-tech — des solutions simples, abordables et réparables — ouvre "
           "des perspectives : messagerie SMS, applications hors ligne, "
           "capteurs à bas coût, tableaux de bord agricoles. Encore faut-il des "
           "personnes pour concevoir, prototyper et transmettre ces solutions "
           "sur le terrain.")
    p(doc, "C’est dans cette perspective qu’APTIC-R a conçu le programme "
           "« APTIC-R International Volunteers », destiné à accueillir à "
           "Agbélouvé, dans la préfecture de Zio (région Maritime), des "
           "volontaires européens — Allemands, Français, Belges et autres — "
           "pour des missions de six à douze mois. Le programme se présente "
           "comme une invitation à « construire des technologies pour les "
           "communautés rurales » : diagnostic terrain, hackathons ruraux, "
           "prototypage low-tech, formation de relais locaux et documentation "
           "open source.")
    p(doc, "Un programme de cette ambition ne peut pas se contenter de "
           "publications ponctuelles sur les réseaux sociaux ou de "
           "prospectives par courriel. Le public visé — étudiants, jeunes "
           "diplômés et jeunes professionnels européens — attend une "
           "information centralisée, crédible et lisible dans sa propre langue : "
           "la mission, la vie au Togo, les conditions d’accueil, le processus "
           "de candidature. Les organisations partenaires attendent une vitrine "
           "claire des modalités de collaboration. L’équipe APTIC-R, de son "
           "côté, a besoin d’outils de tri, de suivi et de pilotage des "
           "candidatures.")
    p(doc, "Or, la présence numérique d’une association locale est souvent "
           "limitée : informations éparpillées, absence de canal unique de "
           "candidature, contenus en une seule langue, aucun outil de "
           "traitement des dossiers. Face à ce constat, comment concevoir et "
           "développer une landing page multilingue permettant une présentation "
           "complète, structurée et interactive du programme de volontariat "
           "d’APTIC-R, de la découverte de la mission jusqu’au traitement "
           "administratif des candidatures ? Cette question se décline en "
           "interrogations opérationnelles. Quels acteurs et quels usages "
           "faut-il prendre en compte ? Quelles sections et quels arguments "
           "garantissent une page réellement convaincante, et non un simple "
           "prospectus ? Quelle architecture technique permet de concilier "
           "délai de stage, maintenabilité, sécurité, référencement et usage "
           "mobile ? Comment relier communication publique et gestion interne "
           "des candidatures sans fragmenter l’expérience ?")
    p(doc, "L’objectif général est de concevoir et de développer, dans le cadre "
           "de mon stage à APTIC-R, une landing page multilingue de recrutement "
           "de volontaires internationaux, capable d’informer les publics "
           "européens, de collecter les candidatures et les demandes de "
           "partenariat, et d’appuyer l’organisation dans le traitement des "
           "dossiers.")
    p(doc, "Les objectifs spécifiques sont les suivants :")
    bullet(doc, "analyser les pratiques de recrutement de volontaires en ligne "
                "et identifier les lacunes des solutions existantes au regard "
                "du programme APTIC-R ;")
    bullet(doc, "recenser et formaliser les besoins fonctionnels et non "
                "fonctionnels des acteurs (visiteurs, candidats, organisations "
                "partenaires, administrateurs) ;")
    bullet(doc, "concevoir l’application (cas d’utilisation, modèle de données, "
                "architecture) de manière à assurer cohérence, sécurité et "
                "évolutivité ;")
    bullet(doc, "développer les modules essentiels : site multilingue, "
                "formulaires de candidature et de partenariat avec dépôt de "
                "documents, back-office de traitement, notifications "
                "automatiques, référencement et mesure d’audience ;")
    bullet(doc, "tester, valider et discuter les résultats au regard du cahier "
                "des charges, des contraintes du stage et des perspectives "
                "d’évolution.")
    p(doc, "Le sujet se justifie d’abord par un besoin opérationnel d’APTIC-R : "
           "doter le programme international de volontariat d’un canal "
           "numérique unique, professionnel et exploitable. Il se justifie "
           "ensuite sur le plan pédagogique : il permet de passer des "
           "enseignements de licence (analyse, conception, développement web, "
           "bases de données, tests) à une réalisation concrète, menée sous "
           "encadrement professionnel. Il se justifie enfin sur le plan "
           "sectoriel : outiller une association togolaise pour attirer des "
           "compétences internationales, c’est contribuer, modestement, à la "
           "diffusion du numérique auprès de communautés rurales.")
    p(doc, "Le mémoire s’organise en deux parties. La première partie pose le "
           "cadre théorique et organisationnel ; le chapitre 1 présente les "
           "généralités sur les landing pages et le recrutement de volontaires "
           "en ligne, puis la structure d’accueil APTIC-R, le déroulement du "
           "stage et la justification du sujet ; le chapitre 2 définit les "
           "concepts clés et propose une revue des travaux et solutions "
           "similaires. La seconde partie est consacrée au cadre empirique ; le "
           "chapitre 3 expose la méthodologie, l’analyse des besoins, puis la "
           "conception et la mise en œuvre ; le chapitre 4 présente les "
           "résultats, les discute, identifie les limites et formule des "
           "suggestions. Une conclusion générale rappelle la problématique, "
           "synthétise les apports, précise les limites et ouvre des "
           "perspectives.")


def partie1(doc):
    part_page(doc, "PREMIÈRE PARTIE : CADRE THÉORIQUE ET ORGANISATIONNEL")


def chapitre1(doc):
    h1(doc, "CHAPITRE 1 : GÉNÉRALITÉS SUR LA THÉMATIQUE ET ENVIRONNEMENT D’ÉTUDE")
    chapter_intro(doc)
    p(doc, "Le travail de conception logicielle s’inscrit dans un double "
           "environnement : un environnement de connaissances, qui fournit les "
           "notions du domaine, et un environnement organisationnel, qui "
           "définit le commanditaire, les contraintes et le terrain "
           "d’application. Ce premier chapitre pose ces deux ancrages. La "
           "section 1.1 présente les généralités sur les landing pages et le "
           "recrutement de volontaires en ligne. La section 1.2 décrit "
           "APTIC-R, le déroulement du stage et les raisons du choix du sujet.")

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
    p(doc, "APTIC-R est une structure togolaise spécialisée dans le domaine des "
           "Technologies de l’Information et de la Communication (TIC). Son "
           "nom complet est l’Association pour la Promotion des TIC en milieu "
           "Rural au Togo. Elle s’inscrit dans une dynamique de promotion du "
           "numérique et d’accompagnement des populations, des organisations "
           "et des entreprises dans l’adoption des outils technologiques.")
    p(doc, "La structure a été créée dans l’objectif de contribuer à la "
           "réduction de la fracture numérique, notamment par la "
           "démocratisation de l’accès aux technologies, la sensibilisation "
           "aux usages du numérique et le développement des compétences "
           "informatiques. Son orientation s’inscrit dans un contexte où la "
           "transformation digitale représente un levier important pour le "
           "développement économique et social du Togo et de l’Afrique.")
    p(doc, "C’est dans ce cadre qu’APTIC-R a conçu le programme international "
           "de volontariat, qui accueille à Agbélouvé des volontaires "
           "européens pour des missions de six à douze mois autour de "
           "l’innovation numérique, de l’agriculture et de la technologie "
           "low-tech. La structure trouve ainsi un prolongement naturel à sa "
           "mission : relier expertise TIC et besoins des communautés "
           "rurales, en attirant des compétences venues d’ailleurs.")
    h3(doc, "1.2.1.2. Organisation administrative")
    p(doc, "APTIC-R fonctionne selon une organisation orientée autour des "
           "métiers du numérique et de l’accompagnement technologique. Bien "
           "que son organigramme officiel complet ne soit pas publié, la "
           "structure regroupe différents profils techniques intervenant dans "
           "les domaines du développement informatique, du support technique "
           "et de la formation. Son fonctionnement repose généralement sur "
           "plusieurs pôles.")
    p(doc, "La Direction et l’administration assurent :")
    bullet(doc, "la définition des orientations stratégiques ;")
    bullet(doc, "la gestion administrative de la structure ;")
    bullet(doc, "la coordination des différents projets et activités.")
    p(doc, "Le pôle développement informatique est chargé de :")
    bullet(doc, "la conception et le développement d’applications web et mobiles ;")
    bullet(doc, "la création de solutions numériques adaptées aux besoins des clients ;")
    bullet(doc, "la maintenance et l’amélioration des applications existantes.")
    p(doc, "Le pôle réseaux et maintenance informatique intervient dans :")
    bullet(doc, "l’installation et la configuration des équipements informatiques ;")
    bullet(doc, "la maintenance des systèmes ;")
    bullet(doc, "l’assistance technique aux utilisateurs.")
    p(doc, "Le pôle formation et accompagnement numérique participe à :")
    bullet(doc, "la formation des utilisateurs aux outils informatiques ;")
    bullet(doc, "l’initiation aux technologies numériques ;")
    bullet(doc, "l’accompagnement des structures souhaitant intégrer le numérique "
                "dans leurs activités.")
    p(doc, "Cette organisation permet à APTIC-R de répondre aux besoins liés à "
           "la transformation digitale tout en favorisant le développement des "
           "compétences numériques. Le stage s’est déroulé au sein du pôle "
           "développement, sous la supervision du Directeur.")
    figure(doc, "Figure 1 : Organigramme fonctionnel d’APTIC-R", height_cm=8)
    h3(doc, "1.2.1.3. Activités de la structure")
    p(doc, "APTIC-R intervient principalement dans le secteur des technologies "
           "numériques. Ses activités couvrent plusieurs domaines.")
    p(doc, "a) Développement de solutions numériques. La structure accompagne "
           "les organisations dans la création de solutions informatiques "
           "telles que des applications web, des plateformes numériques et des "
           "outils de gestion informatisés. Ces solutions permettent aux "
           "utilisateurs d’améliorer leurs processus de travail et d’optimiser "
           "la gestion de leurs activités. La landing page des volontaires "
           "internationaux s’inscrit dans cette ligne : il s’agit d’une "
           "application web métier adossée à une base de données, et non d’un "
           "simple site vitrine.")
    p(doc, "b) Services informatiques et maintenance. APTIC-R propose également "
           "des services liés à l’infrastructure informatique, notamment "
           "l’installation et la configuration de matériels, ainsi que la "
           "maintenance des équipements.")
    p(doc, "c) Formation aux outils numériques. La formation constitue une "
           "activité importante. Elle vise à renforcer les compétences "
           "numériques des utilisateurs à travers la formation bureautique, "
           "l’initiation à l’informatique et l’apprentissage des outils "
           "numériques.")
    p(doc, "d) Communication et présence digitale. APTIC-R accompagne certains "
           "acteurs dans leur développement numérique à travers la conception "
           "de sites web et le web design. La vitrine du programme de "
           "volontariat relève aussi de cette compétence, tout en la dépassant "
           "par les formulaires, le dépôt de documents et le back-office.")
    h3(doc, "1.2.1.4. Services proposés")
    p(doc, "Les principaux services proposés par APTIC-R peuvent être regroupés "
           "comme suit :")
    bullet(doc, "le développement d’applications web et mobiles ;")
    bullet(doc, "la conception de plateformes numériques et d’outils de gestion ;")
    bullet(doc, "l’installation, la configuration et la maintenance d’équipements "
                "informatiques ;")
    bullet(doc, "la formation bureautique et l’initiation aux TIC ;")
    bullet(doc, "la conception de sites web et le web design.")
    p(doc, "Ces services permettent à APTIC-R d’accompagner différents acteurs "
           "dans leur processus de modernisation grâce aux technologies "
           "numériques. Le projet de landing page mobilise surtout le "
           "développement d’applications et, de manière complémentaire, la "
           "présence digitale du programme.")
    h3(doc, "1.2.1.5. Marché et environnement d’intervention")
    p(doc, "APTIC-R évolue dans le secteur des Technologies de l’Information et "
           "de la Communication, un domaine en pleine croissance au Togo et en "
           "Afrique. Le développement des services numériques, l’utilisation "
           "croissante d’Internet et les besoins des organisations en matière "
           "de digitalisation représentent des opportunités importantes pour "
           "les structures spécialisées dans les TIC.")
    p(doc, "Son marché cible comprend principalement :")
    bullet(doc, "les petites et moyennes entreprises souhaitant intégrer des "
                "solutions numériques ;")
    bullet(doc, "les institutions et organisations ayant besoin d’un "
                "accompagnement informatique ;")
    bullet(doc, "les porteurs de programmes et de projets sectoriels, comme le "
                "programme international de volontariat, qui ont besoin d’une "
                "visibilité et d’outils de gestion.")
    p(doc, "Dans un environnement marqué par la transformation digitale, "
           "APTIC-R contribue ainsi à faciliter l’accès aux technologies et à "
           "accompagner les acteurs locaux dans l’adoption des outils "
           "numériques. Le programme de volontariat illustre ce "
           "positionnement : une association rurale n’a pas, a priori, les "
           "moyens d’une campagne internationale ; elle a néanmoins besoin "
           "d’une présence professionnelle pour exister durablement auprès de "
           "ses publics européens.")

    h3(doc, "1.2.2. Déroulement du stage")
    p(doc, "Le stage qui constitue le fondement de ce mémoire professionnel "
           "s’est déroulé au sein d’APTIC-R, sur une période de six mois, du 5 "
           "décembre 2025 au 15 mai 2026.")
    p(doc, "Durant cette période, j’ai été intégré au pôle de développement "
           "des solutions, sous la supervision directe de monsieur DAGNON "
           "Edmund, Directeur. Les principales missions confiées "
           "s’inscrivaient dans le cadre du développement de la landing page "
           "« APTIC-R International Volunteers », le point d’entrée officiel "
           "du programme de volontariat.")
    p(doc, "Plus précisément, les activités ont inclus :")
    bullet(doc, "l’analyse du cahier des charges fourni par la structure et "
                "des besoins des publics cibles (étudiants, jeunes diplômés, "
                "jeunes professionnels européens, organisations d’envoi) ;")
    bullet(doc, "la conception de l’architecture fonctionnelle et technique "
                "de la page et de son back-office ;")
    bullet(doc, "le développement du frontend sous forme d’application web "
                "(React, TypeScript) intégralement traduite en français, "
                "anglais et allemand ;")
    bullet(doc, "le développement de la couche de données sur Supabase "
                "(PostgreSQL, authentification, stockage de fichiers, "
                "politiques de sécurité) et des fonctions base de données "
                "pour les courriels ;")
    bullet(doc, "les tests fonctionnels, les correctifs et la préparation du "
                "déploiement sur Vercel, ainsi que le référencement "
                "(sitemap, robots, métadonnées).")
    p(doc, "Le travail s’est organisé en plusieurs phases, conformément à une "
           "démarche itérative : analyse du cahier des charges ; conception "
           "(acteurs, cas d’utilisation, modèle de données) ; développement "
           "par incréments (vitrine, internationalisation, formulaires, "
           "back-office, e-mails, SEO) ; tests, correctifs et préparation de "
           "la mise en production.")
    p(doc, "Cette expérience m’a permis de mettre en pratique les connaissances "
           "théoriques acquises durant mon cursus à l’ESIG, tout en "
           "développant des compétences techniques et professionnelles dans le "
           "développement web : politiques de sécurité au niveau des lignes "
           "(RLS), envoi d’e-mails transactionnels depuis la base de données, "
           "référencement multilingue et exigence de qualité perçue.")

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
    p(doc, "Par ailleurs, le sujet permet de mobiliser l’ensemble des "
           "compétences développées à l’ESIG : analyse des besoins, conception "
           "UML et MERISE, développement web, bases de données, sécurité, "
           "tests et documentation. Il constitue une démonstration concrète de "
           "la capacité à mener un projet de génie logiciel de bout en bout, "
           "de l’idée à un prototype fonctionnel déployable, dans une "
           "structure réelle et sous encadrement professionnel.")
    p(doc, "Enfin, le sujet s’inscrit dans un enjeu plus large que l’outil "
           "lui-même : donner une existence numérique crédible à un programme "
           "de volontariat togolais, accessible depuis un téléphone, en "
           "français, en anglais et en allemand. C’est cette rencontre entre "
           "TIC, coopération internationale et innovation rurale qui justifie "
           "le thème retenu.")
    chapter_conclusion(doc)
    p(doc, "Ce chapitre a permis de clarifier le cadre du mémoire. La landing "
           "page a été définie comme un dispositif de conversion, structuré et "
           "mesurable, qui dépasse la simple publication d’informations. "
           "APTIC-R, association togolaise de promotion des TIC en milieu "
           "rural, a fourni l’environnement professionnel : organisation en "
           "pôles, activités de développement, de maintenance, de formation et "
           "de présence digitale, marché tourné vers la transformation "
           "numérique des acteurs locaux. Le stage, de six mois, s’est déroulé "
           "au pôle développement sous la direction de monsieur DAGNON Edmund, "
           "autour de la landing page des volontaires internationaux. Le choix "
           "du sujet répond à un besoin opérationnel, à un enjeu pédagogique "
           "et à un ancrage sectoriel. Il convient à présent d’approfondir les "
           "concepts et d’examiner les travaux similaires.")
