# -*- coding: utf-8 -*-
"""Génère les diagrammes du mémoire (PNG) à partir du projet réel."""

import math
import os

from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(HERE, "figures")
FONT_DIR = r"C:\Windows\Fonts"

INK = (25, 25, 25)
GRAY = (120, 120, 120)
BAND = (218, 228, 242)


def _font(size, bold=False):
    name = "arialbd.ttf" if bold else "arial.ttf"
    return ImageFont.truetype(os.path.join(FONT_DIR, name), size)


F_XS = _font(17)
F_S = _font(19)
F_SB = _font(19, bold=True)
F_M = _font(21)
F_B = _font(21, bold=True)


def canvas(w, h):
    img = Image.new("RGB", (w, h), "white")
    return img, ImageDraw.Draw(img)


def tsize(draw, text, f):
    b = draw.multiline_textbbox((0, 0), text, font=f, align="center")
    return b[2] - b[0], b[3] - b[1]


def ctext(draw, cx, cy, text, f, fill=INK):
    w, h = tsize(draw, text, f)
    draw.multiline_text((cx - w / 2, cy - h / 2), text, font=f, fill=fill,
                        align="center")


def box(draw, x, y, w, h, text, fill=(255, 255, 255), f=None, lw=3):
    draw.rectangle([x, y, x + w, y + h], fill=fill, outline=INK, width=lw)
    ctext(draw, x + w / 2, y + h / 2, text, f or F_S)


def dashed(draw, p1, p2, lw=2, color=GRAY, seg=12, gap=8):
    dx, dy = p2[0] - p1[0], p2[1] - p1[1]
    dist = math.hypot(dx, dy)
    ux, uy = dx / dist, dy / dist
    pos = 0.0
    while pos < dist:
        end = min(pos + seg, dist)
        draw.line([(p1[0] + ux * pos, p1[1] + uy * pos),
                   (p1[0] + ux * end, p1[1] + uy * end)],
                  fill=color, width=lw)
        pos += seg + gap


def head(draw, p_from, p_to, color=INK, lw=3, size=15):
    ang = math.atan2(p_to[1] - p_from[1], p_to[0] - p_from[0])
    for a in (ang + 2.55, ang - 2.55):
        draw.line([p_to, (p_to[0] + size * math.cos(a),
                          p_to[1] + size * math.sin(a))],
                  fill=color, width=lw)


def arrow(draw, p1, p2, label=None, dash=False, color=INK, lw=3,
          label_dy=-30):
    if dash:
        dashed(draw, p1, p2, lw, color)
    else:
        draw.line([p1, p2], fill=color, width=lw)
    head(draw, p1, p2, color, lw)
    if label:
        mx = (p1[0] + p2[0]) / 2
        my = (p1[1] + p2[1]) / 2 + label_dy
        ctext(draw, mx, my, label, F_XS)


def link(draw, p1, p2):
    draw.line([p1, p2], fill=INK, width=2)


def actor(draw, cx, cy, label):
    draw.ellipse([cx - 18, cy - 55, cx + 18, cy - 19], outline=INK, width=3)
    draw.line([(cx, cy - 19), (cx, cy + 45)], fill=INK, width=3)
    draw.line([(cx - 30, cy + 8), (cx + 30, cy + 8)], fill=INK, width=3)
    draw.line([(cx, cy + 45), (cx - 25, cy + 95)], fill=INK, width=3)
    draw.line([(cx, cy + 45), (cx + 25, cy + 95)], fill=INK, width=3)
    ctext(draw, cx, cy + 125, label, F_SB)


def ellipse(draw, cx, cy, w, h, text):
    draw.ellipse([cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2],
                 fill="white", outline=INK, width=3)
    ctext(draw, cx, cy, text, F_XS)


def entity(draw, x, y, w, title, attrs):
    h = 48 + 32 * len(attrs) + 12
    draw.rectangle([x, y, x + w, y + h], fill="white", outline=INK, width=3)
    draw.rectangle([x, y, x + w, y + 48], fill=BAND, outline=INK, width=3)
    ctext(draw, x + w / 2, y + 24, title, F_SB)
    for i, a in enumerate(attrs):
        draw.text((x + 16, y + 56 + i * 32), a, font=F_XS, fill=INK)
    return h


def diamond(draw, cx, cy, label):
    ry, rx = 44, 80
    draw.polygon([(cx, cy - ry), (cx + rx, cy), (cx, cy + ry), (cx - rx, cy)],
                 fill="white", outline=INK, width=3)
    ctext(draw, cx, cy, label, F_XS)


def lifeline(draw, cx, label, y_top, y_bot, w=260):
    draw.rectangle([cx - w / 2, y_top, cx + w / 2, y_top + 64],
                   fill=BAND, outline=INK, width=3)
    ctext(draw, cx, y_top + 32, label, F_SB)
    dashed(draw, (cx, y_top + 70), (cx, y_bot), lw=2, seg=9, gap=9)


def save(img, name):
    os.makedirs(OUT_DIR, exist_ok=True)
    img.save(os.path.join(OUT_DIR, name), "PNG")


# ---------------------------------------------------------------- fig 1
def fig1():
    img, d = canvas(1600, 780)
    box(d, 540, 40, 520, 130,
        "Direction générale\net administration\n(DAGNON Edmund)",
        fill=BAND, f=F_M)
    d.line([(800, 170), (800, 250)], fill=INK, width=3)
    d.line([(260, 250), (1340, 250)], fill=INK, width=3)
    xs = [(60, 460), (600, 1000), (1140, 1540)]
    titles = [
        "Pôle développement\ninformatique",
        "Pôle réseaux\net maintenance",
        "Pôle formation et\naccompagnement numérique",
    ]
    subs = [
        "applications web et mobiles,\nsolutions sur mesure",
        "installation, configuration,\nassistance utilisateurs",
        "bureautique, initiation TIC,\nappui à la digitalisation",
    ]
    for (x1, x2), t, s in zip(xs, titles, subs):
        cx = (x1 + x2) / 2
        d.line([(cx, 250), (cx, 290)], fill=INK, width=3)
        box(d, x1, 290, x2 - x1, 110, t, f=F_M)
        box(d, x1 + 30, 440, x2 - x1 - 60, 110, s, fill=(245, 247, 250),
            f=F_S, lw=2)
    save(img, "fig1_organigramme.png")


# ---------------------------------------------------------------- fig 2
def fig2():
    img, d = canvas(1700, 980)
    # Client
    d.rectangle([60, 170, 470, 810], fill="white", outline=INK, width=3)
    d.rectangle([60, 170, 470, 230], fill=BAND, outline=INK, width=3)
    ctext(d, 265, 200, "Client — Navigateur", F_SB)
    lines = [
        "Application React 19",
        "+ TypeScript",
        "Build Vite —",
        "fichiers statiques",
        "Routage localisé",
        "/fr  /en  /de",
        "i18n, SEO,",
        "consentement,",
        "mesure d'audience",
    ]
    for i, t in enumerate(lines):
        ctext(d, 265, 285 + i * 42, t, F_S)
    # Supabase
    d.rectangle([640, 140, 1080, 830], fill=(247, 248, 250), outline=INK,
                width=3)
    ctext(d, 860, 175, "Supabase (BaaS)", F_B)
    subs = [
        "PostgreSQL\n+ politiques RLS",
        "Supabase Auth\n(comptes admin)",
        "Storage privé\n(bucket uploads)",
        "Fonctions SQL\ntriggers e-mails",
    ]
    for i, t in enumerate(subs):
        box(d, 690, 230 + i * 150, 340, 110, t, f=F_M)
    # Services externes
    d.rectangle([1250, 140, 1650, 830], fill=(247, 248, 250), outline=INK,
                width=3)
    ctext(d, 1450, 175, "Services externes", F_B)
    box(d, 1290, 300, 320, 120,
        "Resend\ncourriels transactionnels\n(+ pièce jointe ICS)", f=F_S)
    box(d, 1290, 560, 320, 120,
        "Google Analytics 4\nmesure d'audience\n(après consentement)", f=F_S)
    # Arrows
    arrow(d, (470, 470), (640, 470), label="API REST / SQL\n(HTTPS)",
          label_dy=-50)
    arrow(d, (640, 530), (470, 530), dash=True)
    arrow(d, (1080, 495), (1290, 495), label="trigger SQL\n→ appel API",
          label_dy=-50)
    # GA4: route au-dessus
    pts = [(265, 170), (265, 70), (1450, 70), (1450, 560)]
    dashed(d, pts[0], pts[1])
    dashed(d, pts[1], pts[2])
    dashed(d, pts[2], pts[3])
    head(d, pts[2], pts[3])
    ctext(d, 860, 40, "événements de mesure", F_XS)
    # Vercel note
    box(d, 60, 860, 410, 90,
        "Déployée sur Vercel\n(CDN, HTTPS)",
        fill=(245, 247, 250), f=F_S, lw=2)
    save(img, "fig2_architecture.png")


# ---------------------------------------------------------------- fig 3
def fig3():
    img, d = canvas(1700, 1060)
    d.rectangle([360, 40, 1360, 960], fill=(252, 252, 252), outline=INK,
                width=3)
    ctext(d, 860, 80,
          "Landing page « APTIC-R International Volunteers »", F_B)
    lx, rx = 620, 1100
    pub = [
        ("Consulter le site\n(FR / EN / DE)", 180),
        ("Changer de langue", 300),
        ("Télécharger le guide", 420),
        ("S'auto-évaluer\n(éligibilité)", 560),
        ("Soumettre une candidature\net ses documents", 700),
        ("Soumettre une demande\nde partenariat", 850),
    ]
    adm = [
        ("S'authentifier", 200),
        ("Gérer les dossiers\n(statuts, notes)", 350),
        ("Planifier un\nrendez-vous", 500),
        ("Envoyer un courriel", 640),
        ("Exporter en CSV", 770),
    ]
    for text, y in pub:
        ellipse(d, lx, y, 300, 90, text)
    for text, y in adm:
        ellipse(d, rx, y, 300, 90, text)
    actor(d, 150, 250, "Visiteur")
    actor(d, 150, 640, "Candidat\nvolontaire")
    actor(d, 150, 880, "Organisation\npartenaire")
    actor(d, 1550, 480, "Administrateur")
    link(d, (190, 235), (lx - 150, 185))
    link(d, (190, 265), (lx - 150, 305))
    link(d, (190, 290), (lx - 150, 415))
    link(d, (180, 630), (lx - 150, 555))
    link(d, (180, 660), (lx - 150, 695))
    link(d, (175, 875), (lx - 150, 845))
    for _, y in adm:
        link(d, (1480, 475), (rx + 150, y))
    save(img, "fig3_cas_utilisation.png")


# ---------------------------------------------------------------- fig 4
def fig4():
    img, d = canvas(1700, 900)
    entity(d, 700, 40, 320, "ADMIN_USER",
           ["id (PK)", "user_id → auth.users"])
    entity(d, 60, 420, 560, "APPLICATION",
           ["id (PK)", "statut, langue", "identité, coordonnées",
            "profil, compétences", "disponibilité",
            "motivation, projet", "cv_key, letter_key, portfolio_key",
            "rendez-vous, notes"])
    entity(d, 1080, 420, 560, "PARTNER",
           ["id (PK)", "statut, langue", "organisation, contact",
            "type, programme", "document_key", "rendez-vous, notes"])
    entity(d, 1080, 40, 560, "ANALYTICS_EVENT",
           ["id (PK)", "type, langue, page", "horodatage"])
    link(d, (810, 190), (430, 420))
    diamond(d, 620, 305, "traite")
    ctext(d, 760, 235, "(1,n)", F_XS)
    ctext(d, 470, 380, "(0,n)", F_XS)
    link(d, (890, 190), (1270, 420))
    diamond(d, 1080, 305, "traite")
    ctext(d, 940, 235, "(1,n)", F_XS)
    ctext(d, 1230, 380, "(0,n)", F_XS)
    save(img, "fig4_mcd.png")


# ---------------------------------------------------------------- fig 5
def fig5():
    img, d = canvas(1700, 940)
    xs = [140, 500, 860, 1220, 1560]
    labels = ["Candidat", "Landing page\n(SPA)", "Storage\n(bucket uploads)",
              "PostgreSQL\n(+ RLS)", "analytics_events"]
    for x, lab in zip(xs, labels):
        lifeline(d, x, lab, 40, 900)
    arrow(d, (140, 190), (500, 190),
          label="1. remplit le formulaire\net joint les fichiers", label_dy=-45)
    arrow(d, (500, 280), (860, 280),
          label="2. téléverse les documents", label_dy=-40)
    arrow(d, (860, 350), (500, 350), dash=True,
          label="clés des fichiers", label_dy=-40)
    arrow(d, (500, 450), (1220, 450),
          label="4. INSERT application (statut 'new')\n"
                "RLS : insert seulement si statut = 'new'", label_dy=-50)
    arrow(d, (1220, 540), (500, 540), dash=True,
          label="ligne créée", label_dy=-40)
    arrow(d, (500, 640), (1560, 640),
          label="6. INSERT événement\n'application_submitted'", label_dy=-45)
    arrow(d, (500, 750), (140, 750), dash=True,
          label="7. accusé de réception\naffiché", label_dy=-45)
    save(img, "fig5_seq_candidature.png")


# ---------------------------------------------------------------- fig 6
def fig6():
    img, d = canvas(1700, 1060)
    xs = [130, 430, 730, 1030, 1330, 1610]
    labels = ["Administrateur", "Back-office\nadmin", "Supabase\nAuth",
              "PostgreSQL", "Resend", "Destinataire"]
    for x, lab in zip(xs, labels):
        lifeline(d, x, lab, 40, 1020, w=230)
    arrow(d, (130, 170), (430, 170),
          label="1. connexion\n(e-mail + mot de passe)", label_dy=-45)
    arrow(d, (430, 245), (730, 245),
          label="2. vérification", label_dy=-40)
    arrow(d, (730, 315), (430, 315), dash=True,
          label="session (JWT)", label_dy=-40)
    arrow(d, (130, 410), (430, 410),
          label="4. filtre les dossiers,\nchange statut / planifie RDV",
          label_dy=-45)
    arrow(d, (430, 495), (1030, 495),
          label="5. UPDATE statut /\nrendez-vous", label_dy=-45)
    # self-loop trigger
    d.line([(1030, 565), (1100, 565), (1100, 615), (1030, 615)],
           fill=INK, width=3)
    head(d, (1100, 615), (1030, 615))
    ctext(d, 1180, 590, "6. trigger\nnotify_status()", F_XS)
    arrow(d, (1030, 690), (1330, 690),
          label="7. POST /emails\n(langue du dossier)", label_dy=-45)
    arrow(d, (1330, 770), (1610, 770),
          label="8. courriel\n(+ pièce jointe ICS)", label_dy=-45)
    arrow(d, (430, 850), (1030, 850),
          label="9. fichiers / export CSV", label_dy=-40)
    arrow(d, (1030, 920), (430, 920), dash=True,
          label="liens signés, données", label_dy=-40)
    arrow(d, (430, 990), (130, 990), dash=True,
          label="fiches, téléchargements", label_dy=-40)
    save(img, "fig6_seq_admin.png")


def generate_all():
    fig1(); fig2(); fig3(); fig4(); fig5(); fig6()
    print("Diagrammes générés dans", OUT_DIR)


if __name__ == "__main__":
    generate_all()
