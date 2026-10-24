# APTIC-R International Volunteers

Landing page officielle du programme international de volontariat d’**APTIC-R** (Association pour la Promotion des TIC en milieu Rural au Togo).

> VOLUNTEER IN TOGO.  
> BUILD TECHNOLOGY FOR RURAL COMMUNITIES.  
> 6–12 mois · Agbélouvé, Togo

URL cible : [aptic-r.org/international-volunteers](https://aptic-r.org/international-volunteers)

---

## Contexte

APTIC-R souhaite accueillir au Togo des volontaires étrangers (Allemagne, France, Belgique et autres pays européens) pour des missions de **6 à 12 mois** autour de :

- l’innovation numérique
- l’agriculture
- la technologie low-tech
- l’inclusion numérique
- la formation
- l’entrepreneuriat rural
- la conception de solutions adaptées aux communautés rurales

Le volontaire ne vient pas seulement aider : il vient **apprendre, créer et construire** des solutions avec les communautés.

---

## Objectifs

**Objectif principal :** transformer les visiteurs en candidatures qualifiées, via le parcours **APPLY NOW / POSTULER**.

**Objectifs secondaires :**

- présenter APTIC-R, les missions et les conditions d’accueil
- rassurer les candidats étrangers et expliquer la vie au Togo
- expliquer le processus de candidature
- attirer des organisations partenaires européennes
- collecter candidatures, demandes de partenariat et contacts
- mesurer les performances de la campagne

### Parcours utilisateur

**Volontaires :**  
Découvrir APTIC-R → Comprendre la mission → Se projeter au Togo → Être rassuré → Vérifier son éligibilité → Postuler → Être contacté

**Organisations :**  
Découvrir APTIC-R → Comprendre le projet → Évaluer la fiabilité → Voir les conditions de partenariat → Contacter APTIC-R

---

## Public cible

| Persona | Profil | Recherche |
| --- | --- | --- |
| Étudiant européen | 18–25 ans | Expérience internationale, engagement social, découverte de l’Afrique |
| Jeune diplômé | 22–30 ans | Informatique, data, web/mobile, agronomie, design, communication, ingénierie |
| Jeune professionnel | 25–35 ans | Expérience terrain, projet à impact, reconversion |
| Organisation européenne | ONG, universités, programmes d’envoi | Partenaire local fiable, mission structurée, accompagnement |

Langues : **français**, **anglais**, **allemand**.

---

## Stack technique

| Couche | Choix |
| --- | --- |
| Front | React 19 + TypeScript + Vite 8 |
| Styles | Tailwind CSS v4 |
| Backend | **Supabase** (PostgreSQL + Storage + Auth) |
| Hébergement | **Vercel** (déploiement depuis **GitHub**) |

Le cahier des charges demandait React + API + PostgreSQL + back-office. Supabase fournit PostgreSQL, le stockage des CV et l’auth admin. Vercel sert le site après un push GitHub.

### Configuration Supabase

1. Créer un projet sur [supabase.com](https://supabase.com).
2. SQL Editor → coller et exécuter `supabase/schema.sql`.
3. Authentication → Users → inviter / créer le compte admin (email + mot de passe).
4. Settings → API : copier **Project URL** et **anon public key**.
5. Fichier `.env` à la racine (voir `.env.example`) :

```
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

En production, ajouter les mêmes variables dans **Vercel → Project → Settings → Environment Variables**.

Back-office : `/admin` (connexion avec l’utilisateur Auth Supabase).

### GitHub + Vercel

1. Pousser le dépôt sur GitHub.
2. Importer le projet dans Vercel (framework : Vite).
3. Renseigner `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`.
4. Chaque push sur la branche de production redéploie le site.

---

## Démarrage

Un serveur de développement Vite est déjà prévu (port par défaut **8443** dans Figma Make).

```bash
pnpm install
pnpm dev
```

Autres scripts :

```bash
pnpm build     # build de production
pnpm preview   # prévisualiser le build
pnpm format    # formatage (oxfmt)
```

---

## Structure du projet

```
src/
  main.tsx      # Point d’entrée React
  App.tsx       # Landing page (sections, i18n, formulaires)
  index.css     # Tailwind v4 + tokens de design
index.html
package.json
vite.config.ts
```

---

## Structure de la landing page

Conforme au cahier des charges :

1. Header fixe (logo, menu, sélecteur FR / EN / DE, bouton **APPLY NOW**)
2. Hero
3. Pourquoi cette mission ?
4. Le défi (problème → innovation → impact)
5. La mission (diagnostic, hackathons, prototypage, formation, open source)
6. Que pourriez-vous construire ?
7. Profils recherchés
8. Vous n’avez pas besoin d’être un expert
9. Une semaine type
10. La vie au Togo
11. Agbélouvé
12. Conditions d’accueil / soutien
13. Ce qui est inclus
14. Processus de candidature
15. Formulaire candidat
16. Témoignages
17. FAQ
18. CTA final
19. Partenariat européen + formulaire partenaire
20. Footer

### Navigation header

About APTIC-R · The Mission · Activities · Life in Togo · Application · FAQ · Partners

---

## Formulaires

### Candidature volontaire

Identité, profil, compétences (cases à cocher), disponibilité (6 / 9 / 12 mois), motivation, expérience, documents (CV, lettre, portfolio optionnel), source d’acquisition.

### Demande de partenariat

Organisation, pays, site web, contact, type, volume de volontaires, programme, message, document de présentation.

Les deux parcours sont visibles dès le hero : **Postuler** et **Devenir partenaire**.

---

## Design

**Style :** institutionnel + humain + africain + technologique.

Palette (à aligner sur le logo officiel APTIC-R) :

| Couleur | Rôle |
| --- | --- |
| Bleu institutionnel `#1B3A5C` | Technologie, confiance |
| Vert naturel `#2A6247` | Agriculture, environnement |
| Blanc / gris clair / canvas `#F8F4EE` | Lisibilité, espaces blancs |

Responsive prioritaire **mobile** (réseaux sociaux) : 1920, 1366, 768, 375.

Objectif performance : PageSpeed **> 85** (images WebP/AVIF, lazy loading, minification).

---

## SEO (cible)

- Titre : `Volontariat au Togo | Volontaires internationaux d'APTIC-R`
- Description : mission 6–12 mois, innovation numérique, agriculture low-tech, développement rural
- Versions SEO FR / EN / DE
- URLs par langue, par exemple :
  - `/fr/volontaires-internationaux`
  - `/en/international-volunteers`
  - `/de/internationale-freiwillige`

---

## Analytique et back-office

Événements (à brancher GA4) : `apply_now_click`, `application_started`, `application_submitted`, `partner_request`, `language_switch`, etc.

Back-office `/admin` : filtrer les candidatures, statuts (Nouveau → Révision → Sélectionné → Entretien → Choisi → Validation partenaires → Préparation → Arrivé → Terminé), notes, e-mails, export CSV, téléchargement des CV.

---

## Livrables attendus

1. Maquettes UX desktop + mobile  
2. UI de toutes les sections  
3. Versions FR / EN / DE  
4. Formulaires candidat et partenaire  
5. FAQ, SEO, analytics  
6. Politique de confidentialité  
7. Back-office + documentation + formation APTIC-R  
8. Mise en production  

Document de référence : `CAHIER DES CHARGES LANDING PAGE.01.pdf`

---

## Contact

APTIC-R — Agbélouvé, Togo  
E-mail / téléphone : à définir avant publication
