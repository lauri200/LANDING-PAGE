# -*- coding: utf-8 -*-
"""Chapitre 4 : résultats de l'étude."""

from doc import (bullet, chapter_conclusion, chapter_intro, figure, h1, h2,
                 h3, p, table, table_caption)


def chapitre4(doc):
    h1(doc, "CHAPITRE 4 : RÉSULTATS DE L’ÉTUDE")
    chapter_intro(doc)
    p(doc, "Ce dernier chapitre présente ce qui a effectivement été livré, "
           "la manière dont le livrable a été vérifié, puis confronte les "
           "résultats aux attentes du cahier des charges. Il se conclut "
           "par les limites du travail et les suggestions formulées à "
           "l’attention d’APTIC-R.")

    h2(doc, "4.1. Présentation des résultats")
    h3(doc, "4.1.1. Interfaces principales livrées")
    p(doc, "La page d’accueil constitue l’entrée du dispositif : "
           "identité du programme, promesse, chiffres clés et appels à "
           "l’action vers la candidature et le partenariat. Le sélecteur "
           "de langue dans l’en-tête permet de parcourir l’ensemble du "
           "site en français, en anglais ou en allemand, contenus et "
           "métadonnées compris.")
    figure(doc, "Figure 7 : Page d’accueil de la landing page")
    p(doc, "Le formulaire de candidature guide le volontaire de l’identité "
           "à la validation, avec téléversement du CV, de la lettre de "
           "motivation et du portfolio. Un accusé confirme la "
           "transmission du dossier.")
    figure(doc, "Figure 8 : Formulaire de candidature volontaire")
    p(doc, "Les pages thématiques — mission, activités, vie au Togo — "
           "détaillent le quotidien à Agbélouvé, les ateliers et "
           "hackathons ruraux, le prototypage low-tech et "
           "l’accompagnement. La FAQ lève les objections récurrentes ; "
           "la page partenaires ouvre le second parcours.")
    figure(doc, "Figure 9 : Page « Vie au Togo »")
    p(doc, "L’espace d’administration s’ouvre par une page de connexion "
           "adossée à Supabase Auth. Le tableau de bord résume les "
           "dossiers reçus ; les listes de candidatures et de "
           "partenariats se filtrent par statut, pays, langue et "
           "recherche ; chaque fiche donne accès aux statuts, notes, "
           "rendez-vous, courriels, pièces jointes et à l’export CSV.")
    figure(doc, "Figure 10 : Page de connexion administrateur")
    figure(doc, "Figure 11 : Tableau de bord administrateur")
    h3(doc, "4.1.2. Fonctionnalités effectivement disponibles")
    p(doc, "Au terme du développement, l’application offre "
           "fonctionnellement :")
    bullet(doc, "un site public complet en trois langues, avec "
                "navigation, sections persuasives, pages thématiques, "
                "FAQ et page de confidentialité ;")
    bullet(doc, "un parcours de candidature volontaire avec dépôt "
                "sécurisé de trois documents ;")
    bullet(doc, "un parcours de demande de partenariat avec document "
                "facultatif ;")
    bullet(doc, "un back-office authentifié : tableau de bord, listes "
                "filtrables, fiches détaillées, cycle de statuts, notes, "
                "rendez-vous, courriels manuels, téléchargement des "
                "pièces, export CSV ;")
    bullet(doc, "des courriels automatiques déclenchés par les "
                "changements de statut et de rendez-vous, rédigés dans "
                "la langue du destinataire, avec pièce jointe ICS ;")
    bullet(doc, "le référencement multilingue (titres, descriptions, "
                "canoniques, hreflang, sitemap, robots, JSON-LD) ;")
    bullet(doc, "la mesure d’audience conditionnée au consentement, "
                "doublement consignée (GA4 et table interne).")
    h3(doc, "4.1.3. Conformité mobile et affichage responsive")
    p(doc, "L’interface a été construite mobile-first : grilles qui se "
           "replient, boutons assez grands pour le tactile, formulaires "
           "lisibles en largeur réduite. La consultation et le dépôt "
           "d’une candidature restent possibles intégralement depuis un "
           "smartphone, ce qui correspond au canal dominant de trafic "
           "attendu (réseaux sociaux, bouche-à-oreille).")
    figure(doc, "Figure 12 : Accueil en affichage mobile")

    h2(doc, "4.2. Tests et validation")
    p(doc, "Les tests ont été menés en boîte noire, par scénarios "
           "utilisateurs, sur navigateur de bureau et affichage mobile. "
           "Le tableau ci-dessous en résume les principaux cas.")
    table_caption(doc, "Tableau 6 : Cas de tests réalisés et résultats")
    table(doc,
          ["N°", "Cas de test", "Résultat attendu", "Résultat"],
          [
              ["T1", "Changer de langue depuis l’en-tête",
               "Tous les contenus et métadonnées basculent", "Conforme"],
              ["T2", "Soumettre une candidature complète avec fichiers",
               "Ligne créée au statut « nouvelle », fichiers privés",
               "Conforme"],
              ["T3", "Soumettre une demande de partenariat",
               "Ligne créée au statut « nouvelle »", "Conforme"],
              ["T4", "Tenter une insertion anonyme avec statut forcé",
               "Refus par la politique RLS", "Conforme"],
              ["T5", "Connexion administrateur puis filtrage des dossiers",
               "Accès aux listes et fiches, filtres opérationnels",
               "Conforme"],
              ["T6", "Changer le statut d’une candidature",
               "Courriel automatique dans la langue du dossier",
               "Conforme (domaine d’envoi à vérifier en production)"],
              ["T7", "Planifier un rendez-vous",
               "Courriel avec pièce jointe ICS", "Conforme"],
              ["T8", "Télécharger une pièce jointe en admin",
               "Lien signé à durée limitée", "Conforme"],
              ["T9", "Exporter les candidatures en CSV",
               "Fichier exploitable", "Conforme"],
              ["T10", "Refuser les cookies",
               "GA4 non chargé, événements internes possibles", "Conforme"],
              ["T11", "Consulter le site sur mobile",
               "Lisibilité et candidature complètes", "Conforme"],
              ["T12", "Appeler une route inexistante",
               "Page 404 et événement consigné", "Conforme"],
          ])
    p(doc, "La compilation TypeScript et le build de production "
           "s’exécutent sans erreur. Deux réserves subsistent, propres "
           "à tout projet pré-production : l’envoi de courriels exige une "
           "clé Resend réelle et un domaine d’envoi vérifié (le dispositif "
           "fonctionne en mode test) ; et les tests de charge n’ont pas "
           "été menés, la volumétrie attendue restant modeste.")

    h2(doc, "4.3. Discussion des résultats")
    h3(doc, "4.3.1. Écarts avec le cahier des charges")
    p(doc, "La confrontation du livrable au cahier des charges fait "
           "apparaître les écarts suivants.")
    table_caption(doc, "Tableau 7 : Écarts entre les attentes du cahier des "
                       "charges et les livrables")
    table(doc,
          ["Attente du cahier des charges", "État livré"],
          [
              ["Site en production sur aptic-r.org/international-volunteers",
               "Application prête au déploiement, mise en ligne en attente "
               "(domaine, variables, DNS)"],
              ["Contenus authentiques (photos terrain, témoignages réels)",
               "Images d’illustration et témoignages d’exemple à remplacer "
               "par APTIC-R"],
              ["Coordonnées officielles (téléphone, réseaux sociaux)",
               "E-mail renseigné ; téléphone et URLs sociales en attente"],
              ["Guide du volontaire téléchargeable",
               "Page et contenus prêts ; génération texte, PDF officiel "
               "à produire"],
              ["Test d’éligibilité en ligne",
               "Page et questions prêtes ; non branchée au routage"],
              ["Mesure d’audience complète",
               "Instrumentée (événements, consentement) ; tableau de bord "
               "décisionnel à construire"],
          ])
    h3(doc, "4.3.2. Éléments présents dans le code mais non branchés")
    table_caption(doc, "Tableau 8 : Éléments présents dans le code mais non "
                       "branchés")
    table(doc,
          ["Élément", "État", "Action requise"],
          [
              ["Page « Éligibilité » (auto-évaluation en 5 questions)",
               "Composant, traductions et SEO prêts",
               "Ajouter la route et le lien de navigation"],
              ["Page « Guide du volontaire »",
               "Composant, traductions et SEO prêts ; export texte",
               "Ajouter la route ; produire la version PDF"],
              ["Page d’aide du back-office",
               "Composant prêt",
               "Ajouter la route admin"],
              ["Slugs localisés (/fr, /en, /de)",
               "Helpers de génération prêts",
               "Brancher le routage localisé et vérifier le SEO"],
          ])
    h3(doc, "4.3.3. Apports par rapport aux objectifs")
    p(doc, "Par rapport aux objectifs fixés en introduction, les apports "
           "sont réels. Besoin opérationnel : APTIC-R dispose désormais "
           "d’un point d’entrée unique, professionnel et trilingue, avec "
           "collecte structurée des dossiers — ce qui n’existait pas "
           "auparavant. Besoin de gestion : l’équipe peut trier, suivre, "
           "convoquer et exporter sans outil externe. Besoin pédagogique : "
           "le projet a mobilisé l’analyse, la conception, le développement "
           "full-stack, la sécurité applicative et les tests dans un cadre "
           "professionnel réel.")
    p(doc, "La principale limite du travail n’est pas technique mais "
           "organisationnelle : une landing page ne devient un outil de "
           "recrutement qu’à sa mise en ligne effective, adossée à des "
           "contenus authentiques et à une campagne de diffusion. Le "
           "livré est une plateforme prête ; sa valeur dépendra de "
           "l’appropriation par la structure.")

    h2(doc, "4.4. Limites et suggestions")
    h3(doc, "4.4.1. Limites du travail")
    bullet(doc, "Mise en production non réalisée à la rédaction : le site "
                "fonctionne en environnement de développement et de "
                "prévisualisation ; le basculement DNS et la "
                "configuration finale restent à effectuer ;")
    bullet(doc, "contenus éditoriaux provisoires : photographies "
                "d’illustration, témoignages d’exemple, coordonnées à "
                "compléter ;")
    bullet(doc, "couverture fonctionnelle partielle de la vision du "
                "cahier des charges : pas d’espace candidat connecté, "
                "pas de blog ni de galerie, pas de page de contact "
                "dédiée ;")
    bullet(doc, "pages préparées non routées (éligibilité, guide, aide "
                "admin) ;")
    bullet(doc, "envoi de courriels en configuration de test ; mesure "
                "d’audience instrumentée mais sans tableau de bord "
                "décisionnel ;")
    bullet(doc, "validation par un seul encadrant, tests de charge non "
                "menés.")
    h3(doc, "4.4.2. Suggestions à l’attention d’APTIC-R")
    table_caption(doc, "Tableau 9 : Plan de mise en œuvre des suggestions")
    table(doc,
          ["Priorité", "Suggestion", "Horizon"],
          [
              ["1", "Finaliser la mise en production : domaine "
                    "aptic-r.org, variables d’environnement, clé Resend "
                    "et domaine d’envoi vérifié, DNS", "Immédiat"],
              ["2", "Remplacer les contenus provisoires par les photos, "
                    "témoignages et coordonnées authentiques de la "
                    "structure", "Immédiat"],
              ["3", "Activer les pages éligibilité, guide (avec PDF "
                    "officiel) et aide admin déjà développées", "Court "
                    "terme"],
              ["4", "Brancher les URLs localisées et publier sitemap et "
                    "Search Console", "Court terme"],
              ["5", "Construire le tableau de bord d’indicateurs de "
                    "campagne (sources, pays, langues, conversions)",
               "Moyen terme"],
              ["6", "Étudier un espace candidat connecté et des "
                    "extensions éditoriales (blog, galerie)", "Long "
                    "terme"],
          ])
    chapter_conclusion(doc)
    p(doc, "Les résultats montrent une application fonctionnelle, testée "
           "et proche des exigences essentielles : vitrine trilingue, "
           "collecte structurée, back-office opérationnel, notifications, "
           "référencement et mesure sous consentement. Les écarts "
           "relevés relèvent pour l’essentiel de la finalisation — mise "
           "en ligne, contenus authentiques, activation de pages déjà "
           "développées — et non d’un défaut de conception. La conclusion "
           "générale qui suit synthétise la démarche et ouvre les "
           "perspectives.")
