# -*- coding: utf-8 -*-
"""Chapitre 3 : méthodologie et mise en œuvre de la réalisation."""

from doc import (bullet, chapter_conclusion, chapter_intro, code_block,
                 figure, h1, h2, h3, p, rich, table, table_caption)


def chapitre3(doc):
    h1(doc, "CHAPITRE 3 : MÉTHODOLOGIE ET MISE EN ŒUVRE DE LA RÉALISATION")
    chapter_intro(doc)
    p(doc, "Ce chapitre explique comment le projet est passé du cahier des "
           "charges à l’application. La première section expose la démarche "
           "méthodologique. La deuxième présente l’analyse des besoins : "
           "acteurs, exigences fonctionnelles, exigences non fonctionnelles "
           "et règles de gestion. La troisième décrit la conception : "
           "architecture, cas d’utilisation, modèle de données et principaux "
           "scénarios. La quatrième justifie les choix technologiques. La "
           "dernière présente les modules effectivement développés et leurs "
           "fonctions, tels qu’ils existent dans le code livré.")

    # ------------------------------------------------------------- 3.1
    h2(doc, "3.1. Méthodologie de conception et de développement")
    h3(doc, "3.1.1. Démarche adoptée")
    p(doc, "La réalisation s’est organisée selon une démarche itérative et "
           "incrémentale, inspirée des pratiques agiles tout en respectant "
           "la rigueur attendue d’un mémoire de licence : chaque incrément "
           "livre un lot fonctionnel testable, validé avec le maître de "
           "stage avant de passer au suivant. Cette approche convenait au "
           "contexte : une équipe réduite (un développeur, un encadrant), "
           "un cahier des charges fourni mais susceptible d’ajustements, et "
           "un délai borné par la durée du stage.")
    p(doc, "Pour l’analyse et la conception, j’ai mobilisé les formalismes "
           "enseignés à l’ESIG : UML pour la vision dynamique (cas "
           "d’utilisation, séquences) et MERISE pour la vision des données "
           "(modèle conceptuel puis logique). La référence qualité retenue "
           "est la norme ISO/IEC 25010, dont les caractéristiques — "
           "capacité fonctionnelle, fiabilité, utilisabilité, sécurité, "
           "maintenabilité, portabilité — structurent les exigences non "
           "fonctionnelles.")
    h3(doc, "3.1.2. Phasage du travail")
    p(doc, "Le projet s’est déroulé en cinq phases :")
    bullet(doc, "Phase 1 — Analyse : lecture du cahier des charges, "
                "identification des publics (volontaires, partenaires, "
                "administration), recensement des exigences ;")
    bullet(doc, "Phase 2 — Conception : cartographie des acteurs, cas "
                "d’utilisation, architecture technique, modèle de données ;")
    bullet(doc, "Phase 3 — Développement par incréments : socle applicatif "
                "et routage ; contenu multilingue ; formulaires et dépôt "
                "de fichiers ; back-office ; e-mails automatiques ; "
                "référencement et mesure d’audience ;")
    bullet(doc, "Phase 4 — Tests et correctifs : parcours complets, tests "
                "mobiles, contrôles de sécurité des accès, vérification des "
                "e-mails et des statuts ;")
    bullet(doc, "Phase 5 — Préparation de la mise en production : "
                "compilation, variables d’environnement, configuration "
                "Vercel, scripts SQL de déploiement, documentation.")
    h3(doc, "3.1.3. Environnement de travail")
    p(doc, "Le développement s’est appuyé sur un poste de travail équipé de "
           "Visual Studio Code, sur la gestion de versions avec Git, et "
           "sur un environnement de prévisualisation Figma Make servant à "
           "concevoir et itérer l’interface avant l’intégration. La base "
           "de données, l’authentification et le stockage sont hébergés sur "
           "Supabase ; le déploiement cible est Vercel, directement relié "
           "au dépôt GitHub du projet.")

    # ------------------------------------------------------------- 3.2
    h2(doc, "3.2. Analyse et spécification des besoins")
    h3(doc, "3.2.1. Identification des acteurs")
    p(doc, "Quatre catégories d’acteurs interviennent :")
    bullet(doc, "le visiteur : tout utilisateur anonyme qui consulte la "
                "landing page, lit les informations et navigue entre les "
                "sections ;")
    bullet(doc, "le candidat volontaire : visiteur qui remplit le "
                "formulaire de candidature, dépose ses documents et "
                "reçoit les courriels de suivi ;")
    bullet(doc, "l’organisation partenaire : université, ONG ou structure "
                "d’envoi qui manifeste son intérêt via le formulaire de "
                "partenariat ;")
    bullet(doc, "l’administrateur : membre d’APTIC-R authentifié, chargé "
                "de consulter les candidatures, de changer les statuts, "
                "de prendre des notes, de planifier des rendez-vous, "
                "d’envoyer des courriels et d’exporter les données.")
    h3(doc, "3.2.2. Besoins fonctionnels")
    p(doc, "Les besoins fonctionnels recensés à partir du cahier des charges "
           "et des échanges avec le maître de stage sont synthétisés dans "
           "le tableau suivant.")
    table_caption(doc, "Tableau 2 : Besoins fonctionnels de la landing page APTIC-R")
    table(doc,
          ["N°", "Besoin fonctionnel", "Acteur"],
          [
              ["BF1", "Présenter le programme : mission, activités, vie au "
                      "Togo, processus, profils recherchés, FAQ", "Visiteur"],
              ["BF2", "Afficher le contenu en français, anglais et allemand "
                      "avec un sélecteur de langue", "Visiteur"],
              ["BF3", "Soumettre une candidature : identité, profil, "
                      "compétences, disponibilité, motivation, projet, "
                      "documents (CV, lettre, portfolio)", "Candidat"],
              ["BF4", "Soumettre une demande de partenariat : organisation, "
                      "contact, type, nombre de volontaires, pays, message, "
                      "document", "Partenaire"],
              ["BF5", "S’authentifier et gérer les dossiers : listes "
                      "filtrables, fiche détaillée, statuts, notes internes",
               "Administrateur"],
              ["BF6", "Planifier des rendez-vous et envoyer des courriels "
                      "(automatiques au changement de statut, manuels "
                      "depuis la fiche)", "Administrateur"],
              ["BF7", "Exporter les candidatures et partenaires en CSV et "
                      "télécharger les fichiers déposés", "Administrateur"],
              ["BF8", "Assurer le référencement (titres, descriptions, "
                      "hreflang, sitemap, robots, JSON-LD) et mesurer "
                      "l’audience sous consentement", "Visiteur, "
                      "Administrateur"],
          ])
    h3(doc, "3.2.3. Besoins non fonctionnels")
    table_caption(doc, "Tableau 3 : Besoins non fonctionnels")
    table(doc,
          ["N°", "Caractéristique (ISO/IEC 25010)", "Exigence"],
          [
              ["BNF1", "Utilisabilité", "Navigation simple, mobile-first, "
                                        "temps de compréhension court, "
                                        "formulaires guidés"],
              ["BNF2", "Fiabilité", "Aucune perte de dossier, messages "
                                    "d’erreur explicites, états de "
                                    "chargement"],
              ["BNF3", "Sécurité", "Authentification forte pour "
                                   "l’administration, accès aux données "
                                   "restreint par politiques RLS, fichiers "
                                   "privés servis par URL signées"],
              ["BNF4", "Performance", "Page légère, chargement rapide, "
                                      "assets optimisés"],
              ["BNF5", "Maintenabilité", "Code typé (TypeScript), contenus "
                                         "centralisés dans des "
                                         "dictionnaires, modules "
                                         "découplés"],
              ["BNF6", "Portabilité / hébergement", "Déploiement "
                                                    "reproductible sur "
                                                    "Vercel, configuration "
                                                    "par variables "
                                                    "d’environnement"],
              ["BNF7", "Conformité / vie privée", "Consentement avant "
                                                  "mesure d’audience, page "
                                                  "de politique de "
                                                  "confidentialité, "
                                                  "minimisation des "
                                                  "données"],
          ])
    h3(doc, "3.2.4. Règles de gestion")
    p(doc, "L’analyse a fait émerger des règles de gestion métier que la "
           "base de données et l’interface doivent faire respecter :")
    bullet(doc, "une candidature ou une demande de partenariat ne peut être "
                "créée par un visiteur qu’avec le statut « nouvelle » : "
                "personne ne peut s’insérer directement à un stade avancé "
                "du processus ;")
    bullet(doc, "seul un administrateur authentifié peut lire, modifier ou "
                "supprimer les dossiers : l’accès est conditionné par la "
                "fonction is_admin() évaluée côté base ;")
    bullet(doc, "les fichiers déposés sont privés : ils ne sont accessibles "
                "qu’aux administrateurs, via des liens signés à durée "
                "limitée ;")
    bullet(doc, "les statuts de candidature suivent un cycle de vie précis "
                "— nouvelle, en revue, présélectionnée, entretien, choisie, "
                "validation partenaire, préparation, arrivée, mission "
                "terminée, refusée — et les statuts de partenariat un cycle "
                "plus court : nouvelle, en revue, en discussion, acceptée, "
                "déclinée ;")
    bullet(doc, "tout changement de statut ou de rendez-vous peut déclencher "
                "un courriel automatique au candidat ou au partenaire, "
                "rédigé dans sa langue ;")
    bullet(doc, "la mesure d’audience ne s’active qu’après consentement "
                "explicite de l’utilisateur.")

    # ------------------------------------------------------------- 3.3
    h2(doc, "3.3. Conception de l’application")
    h3(doc, "3.3.1. Architecture générale")
    p(doc, "L’architecture retenue est une architecture trois-tiers "
           "simplifiée :")
    bullet(doc, "le client : une application monopage React/TypeScript, "
                "compilée par Vite et servie en fichiers statiques, qui "
                "porte l’interface, le routage et l’internationalisation ;")
    bullet(doc, "le backend managé : Supabase, qui fournit PostgreSQL, "
                "l’authentification, le stockage de fichiers et les "
                "fonctions SQL (triggers, envoi d’e-mails) ;")
    bullet(doc, "les services externes : Resend pour l’envoi des courriels, "
                "Google Analytics 4 pour la mesure sous consentement, "
                "Vercel pour l’hébergement.")
    p(doc, "Ce choix de Backend-as-a-Service élimine l’administration d’un "
           "serveur d’application tout en conservant une vraie base SQL "
           "et des politiques de sécurité exprimées en langage déclaratif "
           "(Row Level Security). La logique métier se répartit ainsi : "
           "présentation et parcours côté client ; persistance, contrôle "
           "d’accès et effets de bord (e-mails) côté base ; notification "
           "et mesure côté services spécialisés.")
    figure(doc, "Figure 2 : Architecture de la landing page APTIC-R")
    h3(doc, "3.3.2. Diagramme de cas d’utilisation")
    p(doc, "Le diagramme de cas d’utilisation rassemble les services "
           "rendus aux acteurs. Le visiteur consulte le site et change de "
           "langue. Le candidat consulte, s’auto-évalue, remplit la "
           "candidature et téléverse ses documents. L’organisation "
           "partenaire soumet sa demande. L’administrateur s’authentifie, "
           "pilote les dossiers, planifie les rendez-vous, communique et "
           "exporte.")
    figure(doc, "Figure 3 : Diagramme de cas d’utilisation")
    h3(doc, "3.3.3. Modèle conceptuel de données")
    p(doc, "Le modèle de données est volontairement simple, centré sur deux "
           "agrégats : la candidature et la demande de partenariat. Chacun "
           "porte un statut, une langue, des champs métier, des clés de "
           "fichiers stockés, des informations de rendez-vous et des notes "
           "internes. Une table d’administrateurs relie les utilisateurs "
           "authentifiés ; une table d’événements alimente la mesure "
           "d’audience côté serveur.")
    figure(doc, "Figure 4 : Modèle conceptuel de données")
    p(doc, "Les principales entités du schéma relationnel sont les "
           "suivantes :")
    bullet(doc, "applications : id, statut, langue, identité, coordonnées, "
                "formation, domaine, profession, expérience, aisance "
                "numérique, compétences, arrivée souhaitée, durée, "
                "motivation, projet, source de découverte, clés des "
                "fichiers (CV, lettre, portfolio), rendez-vous, notes ;")
    bullet(doc, "partners : id, statut, langue, organisation, pays, site "
                "web, contact, type, nombre de volontaires, pays couverts, "
                "programme visé, message, document, rendez-vous, notes ;")
    bullet(doc, "admin_users : référence vers les comptes authentifiés "
                "habilités à administrer ;")
    bullet(doc, "analytics_events : type d’événement, langue, page, "
                "horodatage, pour les tableaux de bord internes.")
    h3(doc, "3.3.4. Scénarios principaux")
    p(doc, "Deux scénarios structurent les diagrammes de séquence.")
    p(doc, "Soumission d’une candidature : le candidat consulte la page, "
           "ouvre le formulaire, complète les étapes, joint ses fichiers "
           "et valide ; le client téléverse les fichiers vers le bucket "
           "privé puis insère la ligne en base avec le statut « nouvelle » ; "
           "les politiques RLS autorisent l’insertion anonyme à cette "
           "seule condition ; un accusé s’affiche et un événement de "
           "mesure est consigné.")
    figure(doc, "Figure 5 : Diagramme de séquence : soumission d’une "
                "candidature")
    p(doc, "Traitement administratif : l’administrateur se connecte via "
           "Supabase Auth ; il filtre les dossiers, ouvre une fiche, "
           "change le statut ou planifie un rendez-vous ; un trigger SQL "
           "prépare et envoie le courriel correspondant via Resend, le "
           "cas échéant avec une pièce jointe d’agenda (ICS) ; les "
           "fichiers joints sont téléchargés par URL signée.")
    figure(doc, "Figure 6 : Diagramme de séquence : traitement "
                "administratif")

    # ------------------------------------------------------------- 3.4
    h2(doc, "3.4. Choix des technologies et outils")
    table_caption(doc, "Tableau 4 : Justification des choix technologiques")
    table(doc,
          ["Technologie", "Rôle", "Justification"],
          [
              ["React 19 + TypeScript", "Interface utilisateur",
               "Composants réutilisables, typage strict réduisant les "
               "erreurs, écosystème mûr"],
              ["Vite 8", "Toolchain",
               "Compilation rapide, build optimisé, intégration native "
               "de Tailwind et TypeScript"],
              ["Tailwind CSS v4", "Styles",
               "Approche utilitaire, responsive mobile-first, tokens de "
               "thème centralisés"],
              ["React Router 7", "Routage",
               "Routes publiques et admin séparées, page 404, layout "
               "imbriqué"],
              ["Supabase (PostgreSQL, Auth, Storage, SQL)", "Backend",
               "BaaS avec vraie base SQL, RLS déclarative, triggers et "
               "fonctions pour les e-mails, coût maîtrisé"],
              ["Resend", "Courriels transactionnels",
               "API d’envoi simple, déclenchée depuis les fonctions SQL"],
              ["Google Analytics 4", "Mesure d’audience",
               "Standard du marché, chargé uniquement après consentement"],
              ["Vercel + GitHub", "Déploiement",
               "Mise en production continue depuis le dépôt, HTTPS et "
               "CDN intégrés"],
              ["Python + python-docx", "Documentation",
               "Génération du présent mémoire à partir du plan et des "
               "contenus rédigés"],
          ])
    p(doc, "L’internationalisation repose sur un mécanisme maison plutôt "
           "que sur une bibliothèque externe : un fournisseur de contexte "
           "expose la langue courante, et trois dictionnaires (français, "
           "anglais, allemand) centralisent l’intégralité des textes du "
           "site dans un fichier unique. Ce choix garantit la cohérence "
           "des traductions et simplifie la relecture par des "
           "non-techniciens.")

    # ------------------------------------------------------------- 3.5
    h2(doc, "3.5. Mise en œuvre : modules développés")
    chapter_intro(doc)
    p(doc, "Cette section décrit les modules réellement implémentés dans "
           "le code livré, en distinguant ce qui est fonctionnel de ce qui "
           "est seulement préparé.")
    h3(doc, "3.5.1. Socle applicatif et routage")
    p(doc, "L’application est montée par Vite sur React 19. Le routeur "
           "sépare deux espaces : l’espace public, enveloppé dans un "
           "layout commun (en-tête, bannière de consentement, pied de "
           "page), et l’espace d’administration sous /admin, protégé par "
           "un contrôle de session. Les routes publiques couvrent "
           "l’accueil, la présentation, la mission, les activités, la vie "
           "au Togo, la candidature, la FAQ, le partenariat et la "
           "confidentialité, avec une page 404 dédiée ; les routes "
           "d’administration couvrent la connexion, le tableau de bord "
           "et les dossiers candidats et partenaires.")
    code_block(doc, "/  /about  /mission  /activities  /life\n"
                    "/apply  /faq  /partners  /privacy  *\n"
                    "/admin/login  /admin  /admin/applications  "
                    "/admin/applications/:id\n"
                    "/admin/partners  /admin/partners/:id")
    h3(doc, "3.5.2. Site vitrine multilingue")
    p(doc, "L’accueil enchaîne les sections persuasives attendues d’une "
           "landing page de conversion : promesse (construire des "
           "technologies pour les communautés rurales), chiffres clés, "
           "présentation de la mission, activités sur le terrain, "
           "étapes du processus, profils recherchés, témoignages, "
           "réassurance et appels à l’action répétés vers la candidature. "
           "Les pages secondaires détaillent la mission, les activités "
           "et la vie à Agbélouvé ; la FAQ répond aux objections "
           "classiques (durée, visa, sécurité, accompagnement).")
    p(doc, "Le sélecteur de langue bascule instantanément l’ensemble des "
           "contenus — textes, boutons, titres de page, métadonnées — "
           "grâce aux dictionnaires centralisés. Les helpers de "
           "localisation préparent également les slugs traduits "
           "(/fr/volontaires-internationaux, /en/international-volunteers, "
           "/de/internationale-freiwillige) en vue des URLs localisées "
           "annoncées par le cahier des charges.")
    h3(doc, "3.5.3. Formulaires de candidature et de partenariat")
    p(doc, "Le formulaire volontaire collecte l’identité, les coordonnées, "
           "la formation et le domaine, la profession, l’expérience et "
           "l’aisance numérique, les compétences, la disponibilité "
           "(arrivée souhaitée, durée de six à douze mois), la motivation, "
           "le projet envisagé et la source de découverte. Trois fichiers "
           "peuvent être joints : CV, lettre de motivation et portfolio.")
    p(doc, "Le formulaire partenaire collecte l’organisation, le pays, le "
           "site web, le contact, le type de structure, le nombre de "
           "volontaires envisagé, les pays couverts, le programme visé "
           "et un message, avec un document facultatif.")
    p(doc, "Les fichiers sont téléversés dans le bucket privé uploads "
           "sous les préfixes applications/ et partners/ ; la clé de "
           "chaque fichier est stockée dans la ligne correspondante. "
           "L’insertion anonyme n’est autorisée qu’avec le statut "
           "« nouvelle », conformément à la règle de gestion RG1.")
    h3(doc, "3.5.4. Couche de données et sécurité")
    p(doc, "Le schéma SQL crée les tables applications, partners, "
           "admin_users et analytics_events, active la RLS et définit "
           "les politiques : insertion publique contrôlée, lecture et "
           "gestion réservées aux administrateurs authentifiés via "
           "is_admin(). Les objets de stockage du bucket privé suivent "
           "la même logique : dépôt libre en préfixe dédié, lecture "
           "réservée par liens signés.")
    h3(doc, "3.5.5. Back-office d’administration")
    p(doc, "Après connexion par Supabase Auth, l’administrateur accède à "
           "un tableau de bord synthétisant les dossiers, puis à des "
           "listes filtrables par statut, pays, langue et recherche "
           "libre. Chaque fiche détaillée permet de : changer le statut "
           "dans le cycle de vie ; consigner des notes internes ; "
           "planifier un rendez-vous ; envoyer un courriel manuel ; "
           "télécharger les pièces jointes ; exporter la sélection en "
           "CSV. Les libellés de statuts et de pays sont traduits dans "
           "l’interface.")
    h3(doc, "3.5.6. Courriels automatiques et rendez-vous")
    p(doc, "Les fonctions SQL applications_notify_status et "
           "partners_notify_status, déclenchées avant insertion et "
           "mise à jour, génèrent le courriel adapté au nouveau statut "
           "ou au rendez-vous, dans la langue du dossier, et l’expédient "
           "via Resend. Les rendez-vous emportent une pièce jointe "
           "ICS pour l’agenda. Une fonction admin_send_mail autorise "
           "l’envoi manuel depuis la fiche.")
    h3(doc, "3.5.7. Référencement, mesure et consentement")
    p(doc, "Un composant SEO dédié applique par route et par langue le "
           "titre, la description, l’URL canonique, les liens hreflang "
           "et les données structurées JSON-LD de l’organisation ; un "
           "sitemap et un fichier robots accompagnent la livraison. "
           "Côté mesure, une couche analytics consigne les événements "
           "clés (vues, clics sur les appels à l’action, début et "
           "soumission de formulaire, changement de langue, clic de "
           "contact, téléchargement du guide, erreurs 404) à la fois "
           "vers GA4 et vers la table interne ; le chargement de GA4 "
           "est conditionné par le bandeau de consentement.")
    h3(doc, "3.5.8. Modules préparés mais non activés")
    p(doc, "Deux pages existent déjà dans le code avec leurs contenus "
           "traduits et leurs métadonnées — l’auto-évaluation "
           "d’éligibilité en cinq questions et le guide du volontaire "
           "téléchargeable — ainsi qu’une page d’aide du back-office. "
           "Elles ne sont toutefois pas encore branchées dans le "
           "routeur : elles attendent la validation éditoriale "
           "d’APTIC-R avant mise en service. De même, le guide est "
           "actuellement généré au format texte ; sa version PDF "
           "officielle reste à produire.")
    chapter_conclusion(doc)
    p(doc, "Ce chapitre a montré que la réalisation n’est pas un "
           "exercice de style : elle répond à des besoins exprimés, "
           "suit une conception explicite et repose sur des choix "
           "techniques justifiés par le contexte d’une association à "
           "équipe réduite. L’application livrée couvre la vitrine "
           "trilingue, les deux parcours de candidature et de "
           "partenariat, le dépôt sécurisé de documents, le back-office "
           "de traitement, les notifications par courriel, le "
           "référencement et la mesure d’audience sous consentement. "
           "Le chapitre suivant confronte ce livrable aux attentes du "
           "cahier des charges et discute les résultats, les limites "
           "et les perspectives.")
