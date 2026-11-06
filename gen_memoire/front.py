# -*- coding: utf-8 -*-
"""Front matter : page de garde, dédicace, remerciements, sommaire,
listes, sigles, résumé, abstract."""

from doc import bullet, h1, p, page_break, toc_line


def title_page(doc):
    p(doc, "Année académique : 2025-2026", align="right", space_after=30)
    p(doc, "REPUBLIQUE TOGOLAISE", bold=True, align="center", space_after=0)
    p(doc, "Travail – Liberté - Patrie", align="center", space_after=14)
    p(doc, "MINISTÈRE DE L’ENSEIGNEMENT SUPÉRIEUR ET", bold=True, align="center", space_after=0)
    p(doc, "DE LA RECHERCHE (M.E.S.R)", bold=True, align="center", space_after=14)
    p(doc, "Ecole Supérieure d’Informatique et de Gestion", bold=True, align="center", space_after=0)
    p(doc, "ESIG GLOBAL SUCCESS", bold=True, align="center", space_after=20)
    p(doc, "Domaine : Sciences et technologies", align="center", space_after=0)
    p(doc, "Mention : Informatique", align="center", space_after=0)
    p(doc, "Spécialité : Développement d’application", align="center", space_after=18)
    p(doc, "Mémoire pour l’obtention de la licence professionnelle :",
      bold=True, align="center", space_after=10)
    p(doc, "Thème :", bold=True, align="center", space_after=4)
    p(doc, "Conception et développement d’une landing page multilingue "
           "de recrutement de volontaires internationaux pour APTIC-R",
      bold=True, size=14, align="center", space_after=24)
    p(doc, "Réalisé par :", align="center", space_after=0)
    p(doc, "M. ATIOPOU Kovi Olivier", bold=True, align="center", space_after=0)
    p(doc, "Matricule : ESIG-02229-2023", align="center", space_after=14)
    p(doc, "Directeur de mémoire : M. N’SOUGAN", align="center", space_after=0)
    p(doc, "Maître de stage : DAGNON Edmund", align="center", space_after=14)
    p(doc, "Promotion : 2023-2026", align="center", space_after=0)
    page_break(doc)


def dedicace(doc):
    h1(doc, "DÉDICACE", page_break=False)
    p(doc, "À mes très chers parents, dont les sacrifices quotidiens ont rendu "
           "ce parcours possible.")
    p(doc, "À monsieur DAGNON Edmund, qui m’a ouvert les portes de sa "
           "structure et a guidé chacune de mes étapes durant ce stage.")


def remerciements(doc):
    h1(doc, "REMERCIEMENTS :")
    p(doc, "Que Monsieur SEDJRO Robert, Directeur Général de l’ESIG, trouve "
           "ici l’expression de ma profonde gratitude : la formation dispensée "
           "par son établissement et le cadre d’apprentissage qu’il offre ont "
           "rendu ce travail possible.")
    p(doc, "Je tiens à exprimer toute ma reconnaissance à Monsieur DAGNON "
           "Edmund, Directeur de l’association APTIC-R et maître de stage. En "
           "m’accueillant dans son équipe et en m’accordant sa confiance, il a "
           "directement contribué à mon progrès technique et professionnel. Je "
           "remercie dans le même esprit l’ensemble du personnel d’APTIC-R, "
           "dont l’accueil et les échanges ont nourri ce projet.")
    p(doc, "Ma gratitude s’adresse également à Monsieur N’SOUGAN, directeur de "
           "ce mémoire, dont l’encadrement exigeant et la disponibilité ont "
           "grandement amélioré la qualité de ce document.")
    p(doc, "Je n’oublie pas les enseignants de l’ESIG, qui ont transmis les "
           "connaissances sur lesquelles repose ce travail.")
    p(doc, "À mes parents, j’exprime une reconnaissance toute particulière : "
           "leurs sacrifices, leurs encouragements et leur présence constante "
           "ont porté chacune de mes étapes, des premières années d’études "
           "jusqu’à l’achèvement de ce mémoire.")
    p(doc, "Je remercie également mes amis et mes camarades de promotion, "
           "pour leur soutien, leur présence et les moments partagés tout au "
           "long du cursus.")
    p(doc, "Enfin, ma gratitude s’étend à toutes les personnes qui, de près "
           "ou de loin, ont contribué à l’achèvement de ce mémoire : que "
           "chacune y trouve l’expression de ma sincère reconnaissance.")


def sommaire(doc):
    h1(doc, "SOMMAIRE :")
    entries = [
        ("DÉDICACE", "i"),
        ("REMERCIEMENTS :", "ii"),
        ("SOMMAIRE :", "iii"),
        ("LISTE DES TABLEAUX :", "iv"),
        ("LISTE DES FIGURES :", "v"),
        ("SIGLES ET ABRÉVIATIONS :", "vi"),
        ("RÉSUMÉ :", "vii"),
        ("ABSTRACT :", "viii"),
        ("INTRODUCTION GÉNÉRALE", "1"),
        ("PREMIÈRE PARTIE : CADRE THÉORIQUE ET ORGANISATIONNEL", "4"),
        ("CHAPITRE 1 : GÉNÉRALITÉS SUR LA THÉMATIQUE ET ENVIRONNEMENT D’ÉTUDE", "5"),
        ("CHAPITRE 2 : REVUE DE LITTÉRATURE", "13"),
        ("PARTIE 2 : CADRE EMPIRIQUE ET RÉSULTATS", "19"),
        ("CHAPITRE 3 : MÉTHODOLOGIE ET MISE EN ŒUVRE DE LA RÉALISATION", "20"),
        ("CHAPITRE 4 : RÉSULTATS DE L’ÉTUDE", "38"),
        ("CONCLUSION GÉNÉRALE :", "50"),
        ("BIBLIOGRAPHIE", "I"),
        ("ANNEXES", "IV"),
        ("TABLE DES MATIÈRES", "X"),
    ]
    for text, page in entries:
        toc_line(doc, text, page)


def liste_tableaux(doc):
    h1(doc, "LISTE DES TABLEAUX :")
    entries = [
        ("Tableau 1 : Comparaison des principales familles de solutions de recrutement", "17"),
        ("Tableau 2 : Besoins fonctionnels de la landing page APTIC-R", "22"),
        ("Tableau 3 : Besoins non fonctionnels", "24"),
        ("Tableau 4 : Justification des choix technologiques", "31"),
        ("Tableau 5 : Modules développés et correspondance avec les besoins", "33"),
        ("Tableau 6 : Cas de tests réalisés et résultats", "43"),
        ("Tableau 7 : Écarts entre les attentes du cahier des charges et les livrables", "46"),
        ("Tableau 8 : Raccordement des modules préparés", "47"),
        ("Tableau 9 : Plan de mise en œuvre des suggestions", "49"),
    ]
    for text, page in entries:
        toc_line(doc, text, page)


def liste_figures(doc):
    h1(doc, "LISTE DES FIGURES :")
    entries = [
        ("Figure 1 : Organigramme fonctionnel d’APTIC-R", "9"),
        ("Figure 2 : Architecture de la landing page APTIC-R", "27"),
        ("Figure 3 : Diagramme de cas d’utilisation", "28"),
        ("Figure 4 : Modèle conceptuel de données", "29"),
        ("Figure 5 : Diagramme de séquence : soumission d’une candidature", "30"),
        ("Figure 6 : Diagramme de séquence : traitement administratif", "30"),
        ("Figure 7 : Page d’accueil de la landing page", "39"),
        ("Figure 8 : Formulaire de candidature volontaire", "40"),
        ("Figure 9 : Page « Vie au Togo »", "40"),
        ("Figure 10 : Page de connexion administrateur", "41"),
        ("Figure 11 : Tableau de bord administrateur", "41"),
        ("Figure 12 : Accueil en affichage mobile", "42"),
    ]
    for text, page in entries:
        toc_line(doc, text, page)


def sigles(doc):
    h1(doc, "SIGLES ET ABRÉVIATIONS :")
    items = [
        ("API", "Application Programming Interface"),
        ("APTIC-R", "Association pour la Promotion des TIC en milieu Rural au Togo"),
        ("BaaS", "Backend as a Service"),
        ("CMS", "Content Management System"),
        ("CSV", "Comma-Separated Values"),
        ("CTA", "Call To Action"),
        ("CSS", "Cascading Style Sheets"),
        ("ESIG", "Ecole Supérieure d’Informatique et de Gestion"),
        ("GA4", "Google Analytics 4"),
        ("HTML", "HyperText Markup Language"),
        ("i18n", "Internationalisation (18 lettres entre i et n)"),
        ("ICS", "iCalendar (format de fichier d’agenda)"),
        ("IoT", "Internet of Things"),
        ("ISO", "International Organization for Standardization"),
        ("JSON", "JavaScript Object Notation"),
        ("KPI", "Key Performance Indicator"),
        ("MCD", "Modèle Conceptuel de Données"),
        ("ONG", "Organisation Non Gouvernementale"),
        ("PDF", "Portable Document Format"),
        ("RLS", "Row Level Security"),
        ("SEO", "Search Engine Optimization"),
        ("SPA", "Single Page Application"),
        ("SQL", "Structured Query Language"),
        ("TIC", "Technologies de l’Information et de la Communication"),
        ("UML", "Unified Modeling Language"),
        ("URL", "Uniform Resource Locator"),
        ("UX", "User Experience"),
    ]
    for a, b in items:
        p(doc, f"{a} : {b}", align="left", space_after=2)


def resume(doc):
    h1(doc, "RÉSUMÉ :")
    p(doc, "Ce mémoire professionnel présente la conception et la réalisation "
           "d’une landing page multilingue dédiée au recrutement de "
           "volontaires internationaux pour APTIC-R, travail mené au sein de "
           "la structure entre le 15 juillet et le 30 septembre 2026. Le "
           "programme « APTIC-R International Volunteers » ne disposait "
           "d’aucun canal officiel de candidature : le projet visait donc à "
           "offrir un point d’entrée unique, crédible et trilingue, capable de "
           "convertir des visiteurs européens en candidatures qualifiées et en "
           "demandes de partenariat. La démarche a articulé l’analyse du "
           "cahier des charges, la modélisation UML et MERISE, puis le "
           "développement itératif d’une application React, TypeScript et "
           "Supabase. Le livrable comprend un site public en français, anglais "
           "et allemand servi par des URLs localisées, des pages d’éligibilité "
           "et de guide du volontaire, un formulaire de candidature avec dépôt "
           "sécurisé de documents, un formulaire de partenariat, un back-office "
           "d’administration (filtres, statuts, notes, rendez-vous, e-mails, "
           "export CSV) ainsi qu’un dispositif de référencement et de mesure "
           "d’audience soumis au consentement. L’application est déployée sur "
           "Vercel ; le rattachement au domaine aptic-r.org et la substitution "
           "des contenus de démonstration par les contenus officiels demeurent "
           "à achever. Les perspectives portent sur l’activation du domaine, "
           "l’enrichissement éditorial et le pilotage statistique de la "
           "campagne de recrutement.")
    p(doc, "Mots clés : landing page ; volontariat international ; multilingue ; "
           "APTIC-R ; React ; Supabase ; SEO.", bold=False)


def abstract(doc):
    h1(doc, "ABSTRACT :")
    p(doc, "This professional dissertation reports on the design and development "
           "of a multilingual landing page for recruiting international "
           "volunteers for APTIC-R, carried out within the organisation from "
           "15 July to 30 September 2026. The work addresses the lack of an "
           "official application channel for the “APTIC-R International "
           "Volunteers” programme: it delivers a single, credible, trilingual "
           "entry point able to turn European visitors into qualified "
           "applications and partnership requests. The approach combined "
           "requirements analysis, UML and MERISE modelling, and the iterative "
           "development of a React, TypeScript and Supabase application "
           "deployable on Vercel. Deliverables include a public site in three "
           "languages (French, English, German) served under localised URLs, "
           "eligibility and volunteer-guide pages, an application form with "
           "document upload, a partnership form, an administration back office "
           "(filters, statuses, notes, appointments, e-mails, CSV export) and "
           "a consent-based SEO and analytics setup. The application is "
           "deployed on Vercel; attaching the aptic-r.org domain and replacing "
           "demonstration content with official material remain pending. Next "
           "steps focus on activating the domain, enriching editorial content "
           "and monitoring recruitment campaign statistics.")
    p(doc, "Keywords: landing page; international volunteering; multilingual; "
           "APTIC-R; React; Supabase; SEO.")
