# -*- coding: utf-8 -*-
"""Conclusion générale, bibliographie, annexes, table des matières."""

from doc import (bullet, code_block, h1, h2, p, page_break, table,
                 table_caption, toc_line)


def conclusion(doc):
    h1(doc, "CONCLUSION GÉNÉRALE :")
    p(doc, "Ce mémoire professionnel rend compte de la conception et du "
           "développement d’une landing page multilingue de recrutement de "
           "volontaires internationaux, réalisés au sein d’APTIC-R durant "
           "un stage de six mois. Le problème de départ était concret : le "
           "programme « APTIC-R International Volunteers », destiné à "
           "accueillir à Agbélouvé des volontaires européens pour des "
           "missions de six à douze mois autour du numérique, de "
           "l’agriculture et de la low-tech, ne disposait d’aucun canal "
           "officiel de candidature. L’information existait, dispersée ; "
           "les candidatures, elles, n’avaient nulle part où aboutir.")
    p(doc, "Pour répondre à ce besoin, j’ai d’abord étudié les usages des "
           "landing pages et du recrutement en ligne, puis examiné les "
           "solutions existantes — portails d’envoi, plateformes de "
           "volontariat, réseaux sociaux, CMS — pour mesurer leurs lacunes "
           "au regard du programme. L’analyse des besoins a dégagé quatre "
           "acteurs, huit besoins fonctionnels et les règles de gestion "
           "structurant les statuts, les fichiers et la confidentialité. "
           "La conception a posé une architecture trois-tiers centrée sur "
           "Supabase, un modèle de données à deux agrégats et des "
           "scénarios de candidature et de traitement administratif. Le "
           "développement itératif a livré une application React et "
           "TypeScript : vitrine trilingue, formulaires de candidature et "
           "de partenariat avec dépôt sécurisé de documents, back-office "
           "de traitement avec statuts, notes, rendez-vous, courriels "
           "automatiques et export CSV, référencement multilingue et "
           "mesure d’audience sous consentement.")
    p(doc, "Les tests fonctionnels conduits sur les principaux parcours "
           "sont conformes, et le livrable couvre les exigences "
           "essentielles du cahier des charges. L’exercice m’a permis de "
           "mettre en œuvre l’ensemble de la chaîne du génie logiciel, "
           "de l’analyse à la préparation de la mise en production, dans "
           "des conditions professionnelles réelles.")
    p(doc, "Le travail comporte néanmoins des limites assumées : la mise "
           "en ligne effective, les contenus authentiques, l’activation "
           "de pages déjà développées (éligibilité, guide, aide) et le "
           "tableau de bord décisionnel restent à finaliser avec la "
           "structure. À plus long terme, un espace candidat connecté et "
           "des extensions éditoriales pourraient prolonger le "
           "dispositif.")
    p(doc, "Au-delà de l’outil, ce projet illustre ce qu’une association "
           "rurale peut tirer du numérique : une présence internationale "
           "crédible, des données maîtrisées, un processus de recrutement "
           "outillé — autant de leviers pour attirer vers le Togo des "
           "compétences au service des communautés rurales.")


def bibliographie(doc):
    h1(doc, "BIBLIOGRAPHIE")
    entries = [
        "Google Search Central (2024). Documentation sur la "
        "localisation des pages (hreflang), les sitemaps et le fichier "
        "robots.txt. En ligne : developers.google.com/search.",
        "Hart, C. (2018). Doing a Literature Review: Releasing the "
        "Research Imagination. 2e éd., SAGE Publications.",
        "ISO/IEC (2011). ISO/IEC 25010 — Systems and software Quality "
        "Requirements and Evaluation (SQuaRE) : modèle de qualité des "
        "produits logiciels.",
        "Kotler, P. et Keller, K. L. (2016). Marketing Management. "
        "15e éd., Pearson Education.",
        "Krug, S. (2014). Don’t Make Me Think, Revisited: A Common Sense "
        "Approach to Web Usability. 3e éd., New Riders.",
        "Nielsen, J. (2012). Usability 101: Introduction to Usability. "
        "Nielsen Norman Group. En ligne : nngroup.com.",
        "Osmani, A. (2017). Learning JavaScript Design Patterns. "
        "2e éd., O’Reilly Media.",
        "Pressman, R. et Maxim, B. (2014). Software Engineering: "
        "A Practitioner’s Approach. 8e éd., McGraw-Hill Education.",
        "Sommerville, I. (2016). Software Engineering. 10e éd., Pearson "
        "Education.",
        "Trendov, N. M., Varas, S. et Zeng, M. (2019). Digital "
        "Technologies in Agriculture and Rural Areas. FAO, Rome.",
        "Documentation technique : React (react.dev), Supabase "
        "(supabase.com/docs), Vercel (vercel.com/docs), Resend "
        "(resend.com/docs), Google Analytics 4 "
        "(support.google.com/analytics).",
        "APTIC-R (2026). Cahier des charges — APTIC-R International "
        "Volunteers. Document interne, non publié.",
    ]
    for e in entries:
        p(doc, e, align="left", space_after=8)


def annexes(doc):
    h1(doc, "ANNEXES")

    h2(doc, "Annexe A — Extrait du schéma de la base de données")
    code_block(doc,
               "create table applications (\n"
               "  id uuid primary key default gen_random_uuid(),\n"
               "  created_at timestamptz default now(),\n"
               "  updated_at timestamptz default now(),\n"
               "  status text not null default 'new',\n"
               "  lang text not null default 'fr',\n"
               "  first_name text, last_name text, email text, "
               "phone text,\n"
               "  country text, city text, birth_date date,\n"
               "  education text, field text, profession text,\n"
               "  experience text, digital text, skills text[],\n"
               "  arrival text, duration text,\n"
               "  motivation text, project text, source text,\n"
               "  cv_key text, letter_key text, portfolio_key text,\n"
               "  appointment_at timestamptz, appointment_note text,\n"
               "  notes text\n"
               ");\n"
               "\n"
               "create table partners (\n"
               "  id uuid primary key default gen_random_uuid(),\n"
               "  created_at timestamptz default now(),\n"
               "  updated_at timestamptz default now(),\n"
               "  status text not null default 'new',\n"
               "  lang text not null default 'fr',\n"
               "  org text, country text, website text,\n"
               "  contact text, email text, type text,\n"
               "  volunteers text, countries text, program text,\n"
               "  message text, document_key text,\n"
               "  appointment_at timestamptz, appointment_note text,\n"
               "  notes text\n"
               ");", size=9)

    h2(doc, "Annexe B — Extrait des politiques de sécurité (RLS)")
    code_block(doc,
               "alter table applications enable row level security;\n"
               "\n"
               "create policy \"insert application\" on applications\n"
               "  for insert to anon, authenticated\n"
               "  with check (status = 'new');\n"
               "\n"
               "create policy \"admin manage applications\" on "
               "applications\n"
               "  for all to authenticated\n"
               "  using (public.is_admin())\n"
               "  with check (public.is_admin());", size=9)

    h2(doc, "Annexe C — Extrait des fonctions d’envoi de courriels")
    code_block(doc,
               "create or replace function "
               "applications_notify_status()\n"
               "returns trigger language plpgsql as $$\n"
               "begin\n"
               "  -- détermine le message adapté au statut et à la "
               "langue du dossier\n"
               "  -- puis appelle Resend pour l'expédition\n"
               "  return new;\n"
               "end;\n"
               "$$;\n"
               "\n"
               "create trigger trg_applications_notify\n"
               "  before insert or update on applications\n"
               "  for each row execute function "
               "applications_notify_status();", size=9)

    h2(doc, "Annexe D — Statuts des dossiers")
    table_caption(doc, "Cycle de vie des candidatures volontaires")
    table(doc,
          ["Statut", "Signification"],
          [
              ["new", "Candidature reçue, non encore examinée"],
              ["review", "Dossier en cours de revue"],
              ["selected", "Présélection établie"],
              ["interview", "Entretien planifié ou mené"],
              ["chosen", "Candidat retenu"],
              ["partner_validation", "Validation par l’organisation "
                                     "d’envoi"],
              ["preparation", "Préparation au départ"],
              ["arrived", "Volontaire arrivé sur place"],
              ["completed", "Mission terminée"],
              ["refused", "Candidature refusée"],
          ], size=10)
    table_caption(doc, "Cycle de vie des demandes de partenariat")
    table(doc,
          ["Statut", "Signification"],
          [
              ["new", "Demande reçue"],
              ["review", "Demande en cours d’examen"],
              ["discussion", "Échanges engagés avec l’organisation"],
              ["accepted", "Partenariat accepté"],
              ["declined", "Demande déclinée"],
          ], size=10)

    h2(doc, "Annexe E — Événements de mesure d’audience")
    p(doc, "La couche analytics consigne notamment : les vues de pages, "
           "les clics sur les appels à l’action, le début et la "
           "soumission des formulaires de candidature et de partenariat, "
           "les changements de langue, les clics de contact, le "
           "téléchargement du guide du volontaire et les erreurs 404. "
           "Les événements sont envoyés à Google Analytics 4 (après "
           "consentement) et stockés dans la table analytics_events "
           "pour un reporting interne.")


def table_matieres(doc):
    h1(doc, "TABLE DES MATIÈRES")
    entries = [
        ("DÉDICACE", "i", 0, False),
        ("REMERCIEMENTS :", "ii", 0, False),
        ("SOMMAIRE :", "iii", 0, False),
        ("LISTE DES TABLEAUX :", "iv", 0, False),
        ("LISTE DES FIGURES :", "v", 0, False),
        ("SIGLES ET ABRÉVIATIONS :", "vi", 0, False),
        ("RÉSUMÉ :", "vii", 0, False),
        ("ABSTRACT :", "viii", 0, False),
        ("INTRODUCTION GÉNÉRALE", "1", 0, True),
        ("PREMIÈRE PARTIE : CADRE THÉORIQUE ET ORGANISATIONNEL", "4", 0, True),
        ("CHAPITRE 1 : GÉNÉRALITÉS SUR LA THÉMATIQUE ET "
         "ENVIRONNEMENT D’ÉTUDE", "5", 0, True),
        ("1.1. Généralités sur les landing pages et le recrutement "
         "en ligne", "5", 1, False),
        ("1.1.1. Notion de landing page et de conversion", "5", 2, False),
        ("1.1.2. Le volontariat international et le rôle du web "
         "dans le recrutement", "7", 2, False),
        ("1.2. Présentation de la structure d’accueil", "8", 1, False),
        ("1.2.1. Cadre organisationnel", "8", 2, False),
        ("1.2.2. Déroulement du stage", "10", 2, False),
        ("1.2.3. Justification du choix du sujet", "12", 2, False),
        ("CHAPITRE 2 : REVUE DE LITTÉRATURE", "13", 0, True),
        ("2.1. Définition des concepts clés", "13", 1, False),
        ("2.1.1. Landing page, conversion et référencement naturel",
         "13", 2, False),
        ("2.1.2. Volontariat international, programmes d’envoi et "
         "low-tech", "15", 2, False),
        ("2.2. Synthèse des travaux similaires", "16", 1, False),
        ("2.2.1. Solutions existantes", "16", 2, False),
        ("2.2.2. Identification des lacunes ou limitations des "
         "travaux existants", "17", 2, False),
        ("PARTIE 2 : CADRE EMPIRIQUE ET RÉSULTATS", "19", 0, True),
        ("CHAPITRE 3 : MÉTHODOLOGIE ET MISE EN ŒUVRE DE LA "
         "RÉALISATION", "20", 0, True),
        ("3.1. Méthodologie de conception et de développement", "20", 1, False),
        ("3.1.1. Démarche adoptée", "20", 2, False),
        ("3.1.2. Phasage du travail", "21", 2, False),
        ("3.1.3. Environnement de travail", "21", 2, False),
        ("3.2. Analyse et spécification des besoins", "22", 1, False),
        ("3.2.1. Identification des acteurs", "22", 2, False),
        ("3.2.2. Besoins fonctionnels", "22", 2, False),
        ("3.2.3. Besoins non fonctionnels", "24", 2, False),
        ("3.2.4. Règles de gestion", "25", 2, False),
        ("3.3. Conception de l’application", "26", 1, False),
        ("3.3.1. Architecture générale", "26", 2, False),
        ("3.3.2. Diagramme de cas d’utilisation", "28", 2, False),
        ("3.3.3. Modèle conceptuel de données", "29", 2, False),
        ("3.3.4. Scénarios principaux", "29", 2, False),
        ("3.4. Choix des technologies et outils", "31", 1, False),
        ("3.5. Mise en œuvre : modules développés", "33", 1, False),
        ("3.5.1. Socle applicatif et routage", "33", 2, False),
        ("3.5.2. Site vitrine multilingue", "34", 2, False),
        ("3.5.3. Formulaires de candidature et de partenariat",
         "34", 2, False),
        ("3.5.4. Couche de données et sécurité", "35", 2, False),
        ("3.5.5. Back-office d’administration", "35", 2, False),
        ("3.5.6. Courriels automatiques et rendez-vous", "36", 2, False),
        ("3.5.7. Référencement, mesure et consentement", "36", 2, False),
        ("3.5.8. Modules préparés mais non activés", "37", 2, False),
        ("CHAPITRE 4 : RÉSULTATS DE L’ÉTUDE", "38", 0, True),
        ("4.1. Présentation des résultats", "38", 1, False),
        ("4.1.1. Interfaces principales livrées", "38", 2, False),
        ("4.1.2. Fonctionnalités effectivement disponibles", "40", 2, False),
        ("4.1.3. Conformité mobile et affichage responsive", "41", 2, False),
        ("4.2. Tests et validation", "42", 1, False),
        ("4.3. Discussion des résultats", "45", 1, False),
        ("4.3.1. Écarts avec le cahier des charges", "45", 2, False),
        ("4.3.2. Éléments présents dans le code mais non branchés",
         "47", 2, False),
        ("4.3.3. Apports par rapport aux objectifs", "48", 2, False),
        ("4.4. Limites et suggestions", "48", 1, False),
        ("CONCLUSION GÉNÉRALE :", "50", 0, True),
        ("BIBLIOGRAPHIE", "I", 0, True),
        ("ANNEXES", "IV", 0, True),
        ("Annexe A — Extrait du schéma de la base de données", "IV", 1, False),
        ("Annexe B — Extrait des politiques de sécurité (RLS)", "V", 1, False),
        ("Annexe C — Extrait des fonctions d’envoi de courriels",
         "VI", 1, False),
        ("Annexe D — Statuts des dossiers", "VII", 1, False),
        ("Annexe E — Événements de mesure d’audience", "IX", 1, False),
        ("TABLE DES MATIÈRES", "X", 0, True),
    ]
    for text, page, indent, bold in entries:
        toc_line(doc, text, page, bold=bold, indent=indent * 0.5)
