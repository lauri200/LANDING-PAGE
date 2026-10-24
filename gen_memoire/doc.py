# -*- coding: utf-8 -*-
"""Helpers de génération du mémoire Word.

Reproduit la mise en forme du mémoire original :
- corps : Times New Roman 12, interligne 1,5, justifié ;
- titres : gras (Liberation Serif -> Times New Roman en secours) ;
- code : Courier New 10 ;
- pieds de page : numérotation centrée (i, ii... / 1, 2... / I, II...).
"""

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_TAB_ALIGNMENT, WD_TAB_LEADER
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor

FONT_BODY = "Times New Roman"
FONT_CODE = "Courier New"
BLACK = RGBColor(0, 0, 0)


def new_document() -> Document:
    doc = Document()
    for section in doc.sections:
        _margins(section)
    normal = doc.styles["Normal"]
    normal.font.name = FONT_BODY
    normal.font.size = Pt(12)
    normal.font.color.rgb = BLACK
    normal.paragraph_format.line_spacing = 1.5
    normal.paragraph_format.space_after = Pt(6)
    normal.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    rpr = normal.element.get_or_add_rPr()
    rfonts = rpr.get_or_add_rFonts()
    for attr in ("ascii", "hAnsi", "cs", "eastAsia"):
        rfonts.set(qn(f"w:{attr}"), FONT_BODY)
    return doc


def _margins(section):
    section.top_margin = Cm(2.5)
    section.bottom_margin = Cm(2.5)
    section.left_margin = Cm(3)
    section.right_margin = Cm(2.5)


def _set_page_number_format(section, fmt, start=None):
    sect_pr = section._sectPr
    pg_num = sect_pr.find(qn("w:pgNumType"))
    if pg_num is None:
        pg_num = OxmlElement("w:pgNumType")
        sect_pr.append(pg_num)
    pg_num.set(qn("w:fmt"), fmt)
    if start is not None:
        pg_num.set(qn("w:start"), str(start))


def _add_page_field(paragraph):
    run = paragraph.add_run()
    fld_begin = OxmlElement("w:fldChar")
    fld_begin.set(qn("w:fldCharType"), "begin")
    instr = OxmlElement("w:instrText")
    instr.set(qn("xml:space"), "preserve")
    instr.text = " PAGE "
    fld_end = OxmlElement("w:fldChar")
    fld_end.set(qn("w:fldCharType"), "end")
    run._r.append(fld_begin)
    run._r.append(instr)
    run._r.append(fld_end)
    run.font.name = FONT_BODY
    run.font.size = Pt(11)


def _centered_footer(section):
    footer = section.footer
    footer.is_linked_to_previous = False
    for p in list(footer.paragraphs):
        p._element.getparent().remove(p._element)
    p = footer.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.space_after = Pt(0)
    _add_page_field(p)


def new_section(doc, fmt, start=None, different_first_page=False):
    section = doc.add_section(WD_SECTION.NEW_PAGE)
    _margins(section)
    _set_page_number_format(section, fmt, start)
    if different_first_page:
        section.different_first_page_header_footer = True
        fp = section.first_page_footer
        fp.is_linked_to_previous = False
        for p in list(fp.paragraphs):
            p.text = ""
    _centered_footer(section)
    return section


# ---------------------------------------------------------------- helpers texte

def p(doc, text, *, bold=False, italic=False, size=12, align="justify",
      space_after=6, indent_first=False, color=None, keep_with_next=False):
    par = doc.add_paragraph()
    par.paragraph_format.line_spacing = 1.5
    par.paragraph_format.space_after = Pt(space_after)
    par.paragraph_format.keep_with_next = keep_with_next
    if align == "center":
        par.alignment = WD_ALIGN_PARAGRAPH.CENTER
    elif align == "left":
        par.alignment = WD_ALIGN_PARAGRAPH.LEFT
    elif align == "right":
        par.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    else:
        par.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    if indent_first:
        par.paragraph_format.first_line_indent = Cm(1)
    run = par.add_run(text)
    run.font.name = FONT_BODY
    run.font.size = Pt(size)
    run.bold = bold
    run.italic = italic
    if color is not None:
        run.font.color.rgb = color
    return par


def rich(doc, segments, *, align="justify", space_after=6):
    """Paragraphe multi-runs : segments = [(texte, {bold, italic, code})]."""
    par = doc.add_paragraph()
    par.paragraph_format.line_spacing = 1.5
    par.paragraph_format.space_after = Pt(space_after)
    par.alignment = {
        "center": WD_ALIGN_PARAGRAPH.CENTER,
        "left": WD_ALIGN_PARAGRAPH.LEFT,
        "right": WD_ALIGN_PARAGRAPH.RIGHT,
    }.get(align, WD_ALIGN_PARAGRAPH.JUSTIFY)
    for text, fmt in segments:
        run = par.add_run(text)
        run.font.name = FONT_CODE if fmt.get("code") else FONT_BODY
        run.font.size = Pt(10 if fmt.get("code") else 12)
        run.bold = bool(fmt.get("bold"))
        run.italic = bool(fmt.get("italic"))
    return par


def bullet(doc, text, *, code_spans=None, size=12):
    par = doc.add_paragraph()
    par.paragraph_format.line_spacing = 1.5
    par.paragraph_format.space_after = Pt(4)
    par.paragraph_format.left_indent = Cm(1)
    par.paragraph_format.first_line_indent = Cm(-0.5)
    par.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    par.add_run("•\t").font.name = FONT_BODY
    if code_spans:
        for seg, is_code in code_spans:
            run = par.add_run(seg)
            run.font.name = FONT_CODE if is_code else FONT_BODY
            run.font.size = Pt(10 if is_code else size)
    else:
        run = par.add_run(text)
        run.font.name = FONT_BODY
        run.font.size = Pt(size)
    return par


def code_block(doc, text, *, size=10, space_after=8):
    par = doc.add_paragraph()
    par.paragraph_format.line_spacing = 1.15
    par.paragraph_format.space_after = Pt(space_after)
    par.paragraph_format.left_indent = Cm(0.75)
    par.alignment = WD_ALIGN_PARAGRAPH.LEFT
    run = par.add_run(text)
    run.font.name = FONT_CODE
    run.font.size = Pt(size)
    return par


def h1(doc, text, *, page_break=True, size=16):
    par = doc.add_paragraph()
    if page_break:
        par.paragraph_format.page_break_before = True
    par.alignment = WD_ALIGN_PARAGRAPH.CENTER
    par.paragraph_format.space_before = Pt(6)
    par.paragraph_format.space_after = Pt(18)
    par.paragraph_format.keep_with_next = True
    run = par.add_run(text)
    run.font.name = FONT_BODY
    run.font.size = Pt(size)
    run.bold = True
    _outline(par, 0)
    return par


def h2(doc, text, *, size=14, align="left"):
    par = doc.add_paragraph()
    par.alignment = WD_ALIGN_PARAGRAPH.CENTER if align == "center" else WD_ALIGN_PARAGRAPH.LEFT
    par.paragraph_format.space_before = Pt(14)
    par.paragraph_format.space_after = Pt(8)
    par.paragraph_format.keep_with_next = True
    run = par.add_run(text)
    run.font.name = FONT_BODY
    run.font.size = Pt(size)
    run.bold = True
    _outline(par, 1)
    return par


def h3(doc, text, *, size=12):
    par = doc.add_paragraph()
    par.alignment = WD_ALIGN_PARAGRAPH.LEFT
    par.paragraph_format.space_before = Pt(10)
    par.paragraph_format.space_after = Pt(6)
    par.paragraph_format.keep_with_next = True
    run = par.add_run(text)
    run.font.name = FONT_BODY
    run.font.size = Pt(size)
    run.bold = True
    _outline(par, 2)
    return par


def _outline(par, level):
    ppr = par._p.get_or_add_pPr()
    el = OxmlElement("w:outlineLvl")
    el.set(qn("w:val"), str(level))
    ppr.append(el)


def chapter_intro(doc, text="Introduction du chapitre"):
    return p(doc, text, bold=True, italic=True, align="left")


def chapter_conclusion(doc):
    return p(doc, "Conclusion du chapitre", bold=True, italic=True, align="left")


def page_break(doc):
    doc.add_page_break()


def part_page(doc, text, size=18):
    par = doc.add_paragraph()
    par.paragraph_format.page_break_before = True
    par.paragraph_format.space_before = Pt(220)
    par.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = par.add_run(text)
    run.font.name = FONT_BODY
    run.font.size = Pt(size)
    run.bold = True
    _outline(par, 0)
    return par


def figure(doc, caption, placeholder=True, height_cm=9):
    if placeholder:
        box = doc.add_paragraph()
        box.alignment = WD_ALIGN_PARAGRAPH.CENTER
        box.paragraph_format.space_before = Pt(10)
        box.paragraph_format.space_after = Pt(2)
        pr = box._p.get_or_add_pPr()
        borders = OxmlElement("w:pBdr")
        for edge in ("top", "left", "bottom", "right"):
            el = OxmlElement(f"w:{edge}")
            el.set(qn("w:val"), "single")
            el.set(qn("w:sz"), "6")
            el.set(qn("w:color"), "808080")
            borders.append(el)
        pr.append(borders)
        run = box.add_run("\n" * max(1, height_cm // 2) + "[ Figure à insérer ]\n")
        run.font.name = FONT_BODY
        run.font.size = Pt(10)
        run.italic = True
        run.font.color.rgb = RGBColor(0x80, 0x80, 0x80)
    cap = doc.add_paragraph()
    cap.alignment = WD_ALIGN_PARAGRAPH.CENTER
    cap.paragraph_format.space_after = Pt(12)
    cap.paragraph_format.keep_together = True
    run = cap.add_run(caption)
    run.font.name = FONT_BODY
    run.font.size = Pt(11)
    run.bold = True
    return cap


def table_caption(doc, caption):
    cap = doc.add_paragraph()
    cap.alignment = WD_ALIGN_PARAGRAPH.LEFT
    cap.paragraph_format.space_before = Pt(10)
    cap.paragraph_format.space_after = Pt(4)
    cap.paragraph_format.keep_with_next = True
    run = cap.add_run(caption)
    run.font.name = FONT_BODY
    run.font.size = Pt(12)
    run.bold = True
    return cap


def table(doc, headers, rows, *, size=11, widths=None):
    t = doc.add_table(rows=1 + len(rows), cols=len(headers))
    t.style = "Table Grid"
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    for j, head in enumerate(headers):
        cell = t.cell(0, j)
        cell.text = ""
        par = cell.paragraphs[0]
        par.paragraph_format.line_spacing = 1.0
        par.paragraph_format.space_after = Pt(2)
        run = par.add_run(head)
        run.font.name = FONT_BODY
        run.font.size = Pt(size)
        run.bold = True
    for i, row in enumerate(rows, start=1):
        for j, value in enumerate(row):
            cell = t.cell(i, j)
            cell.text = ""
            par = cell.paragraphs[0]
            par.paragraph_format.line_spacing = 1.0
            par.paragraph_format.space_after = Pt(2)
            run = par.add_run(str(value))
            run.font.name = FONT_BODY
            run.font.size = Pt(size)
    if widths:
        for j, w in enumerate(widths):
            for row in t.rows:
                row.cells[j].width = Cm(w)
    sp = doc.add_paragraph()
    sp.paragraph_format.space_after = Pt(6)
    return t


def toc_line(doc, text, page, *, bold=False, indent=0):
    par = doc.add_paragraph()
    par.paragraph_format.line_spacing = 1.15
    par.paragraph_format.space_after = Pt(3)
    par.paragraph_format.left_indent = Cm(indent)
    par.alignment = WD_ALIGN_PARAGRAPH.LEFT
    tabs = par.paragraph_format.tab_stops
    tabs.add_tab_stop(Cm(15.5 - indent), WD_TAB_ALIGNMENT.RIGHT, WD_TAB_LEADER.DOTS)
    run = par.add_run(text)
    run.font.name = FONT_BODY
    run.font.size = Pt(12)
    run.bold = bold
    run2 = par.add_run("\t" + str(page))
    run2.font.name = FONT_BODY
    run2.font.size = Pt(12)
    run2.bold = bold
    return par
