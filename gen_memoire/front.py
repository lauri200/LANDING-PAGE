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
    p(doc, "À mes parents, pour leur soutien constant et leurs sacrifices.")
    p(doc, "À monsieur DAGNON Edmund, pour la confiance et l’encadrement reçus au cours du stage.")


def remerciements(doc):
    h1(doc, "REMERCIEMENTS :")
    p(doc, "J’adresse mes sincères remerciements à Monsieur SEDJRO Robert, Directeur "
           "Général de l’ESIG, pour la qualité de la formation et l’environnement "
           "favorable à notre apprentissage.")
    p(doc, "Je remercie vivement Monsieur DAGNON Edmund, Directeur de l’association "
           "APTIC-R et maître de stage, pour m’avoir accueilli au sein de sa structure, "
           "pour sa confiance, sa disponibilité et l’accompagnement qui m’a permis de "
           "développer mes compétences techniques et professionnelles. Ma gratitude "
           "s’étend également à toute l’équipe d’APTIC-R pour son accueil et ses "
           "échanges enrichissants.")
    p(doc, "Mes remerciements vont à Monsieur N’SOUGAN, mon directeur de mémoire, "
           "pour son encadrement, sa rigueur scientifique et le temps consacré à ce "
           "travail.")
    p(doc, "Je remercie l’ensemble de mes enseignants de l’ESIG pour les "
           "connaissances transmises et leur engagement.")
    p(doc, "J’adresse une pensée particulière à ma grand-mère, Madame EKLOU Abra "
           "Enyonam, pour son amour, ses prières et son soutien indéfectible ; à ma "
           "mère, SEMEGNA Awo Elom, pour ses sacrifices, ses encouragements et sa "
           "confiance ; et à ma sœur jumelle, ATIOPOU Akouélé Olivéra, pour sa "
           "présence et sa motivation au quotidien.")
    p(doc, "Enfin, je remercie mes camarades de promotion, mes amis, ainsi que "
           "toutes les personnes qui, de près ou de loin, ont contribué à la "
           "réalisation de ce mémoire.")


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
        ("Tableau 8 : Éléments présents dans le code mais non branchés", "47"),
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
    p(doc, "Le présent mémoire professionnel porte sur la conception et le "
           "développement d’une landing page multilingue de recrutement de "
           "volontaires internationaux pour APTIC-R, réalisés au sein de la "
           "structure du 5 décembre 2025 au 15 mai 2026. Face à l’absence d’un "
           "canal officiel de candidature pour le programme « APTIC-R "
           "International Volunteers », l’objectif était de livrer un point "
           "d’entrée unique, crédible et multilingue, capable de transformer des "
           "visiteurs européens en candidatures qualifiées et en demandes de "
           "partenariat. La démarche a combiné l’analyse du cahier des charges, "
           "la modélisation UML et MERISE, puis le développement itératif d’une "
           "application React, TypeScript et Supabase déployable sur Vercel. Les "
           "résultats comprennent un site public en trois langues (français, "
           "anglais, allemand), un formulaire de candidature avec dépôt de "
           "documents, un formulaire de partenariat, un back-office "
           "d’administration (filtres, statuts, notes, rendez-vous, e-mails, "
           "export CSV) et les bases du référencement et de la mesure "
           "d’audience. La mise en production et certains contenus éditoriaux "
           "restent à finaliser avec la structure. Les perspectives portent "
           "d’abord sur la mise en ligne, l’activation des pages déjà préparées "
           "et la mesure d’impact de la campagne.")
    p(doc, "Mots clés : landing page ; volontariat international ; multilingue ; "
           "APTIC-R ; React ; Supabase ; SEO.", bold=False)


def abstract(doc):
    h1(doc, "ABSTRACT :")
    p(doc, "This professional dissertation reports on the design and development "
           "of a multilingual landing page for recruiting international "
           "volunteers for APTIC-R, carried out within the organisation from 5 "
           "December 2025 to 15 May 2026. The work addresses the lack of an "
           "official application channel for the “APTIC-R International "
           "Volunteers” programme: it delivers a single, credible, trilingual "
           "entry point able to turn European visitors into qualified "
           "applications and partnership requests. The approach combined "
           "requirements analysis, UML and MERISE modelling, and the iterative "
           "development of a React, TypeScript and Supabase application "
           "deployable on Vercel. Deliverables include a public site in three "
           "languages (French, English, German), an application form with "
           "document upload, a partnership form, an administration back office "
           "(filters, statuses, notes, appointments, e-mails, CSV export) and "
           "the foundations of SEO and audience measurement. Production release "
           "and some editorial content remain to be finalised with the "
           "organisation. Next steps focus on going live, enabling the pages "
           "already prepared, and measuring campaign impact.")
    p(doc, "Keywords: landing page; international volunteering; multilingual; "
           "APTIC-R; React; Supabase; SEO.")
