# -*- coding: utf-8 -*-
"""Assemble et génère le mémoire Word adapté."""

import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from doc import (_centered_footer, _set_page_number_format, new_document,
                 new_section)
import front
import body1
import body2
import body3
import body4
import back

OUTPUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                      "MON_MEMOIRE_OLIVIER_APTIC_R_ADAPTE.docx")


def main():
    doc = new_document()

    # Section 0 : page de garde (sans numéro) + front matter (i, ii, ...)
    first = doc.sections[0]
    _set_page_number_format(first, "lowerRoman", start=0)
    first.different_first_page_header_footer = True
    fp = first.first_page_footer
    fp.is_linked_to_previous = False
    _centered_footer(first)

    front.title_page(doc)
    front.dedicace(doc)
    front.remerciements(doc)
    front.sommaire(doc)
    front.liste_tableaux(doc)
    front.liste_figures(doc)
    front.sigles(doc)
    front.resume(doc)
    front.abstract(doc)

    # Section corps : numérotation arabe à partir de 1
    s = new_section(doc, "decimal", start=1)
    s.different_first_page_header_footer = False
    body1.introduction(doc)
    body1.partie1(doc)
    body1.chapitre1(doc)
    body2.chapitre2(doc)
    body2.partie2(doc)
    body3.chapitre3(doc)
    body4.chapitre4(doc)
    back.conclusion(doc)

    # Section finale : numérotation romaine majuscule (bibliographie, annexes, TDM)
    s = new_section(doc, "upperRoman", start=1)
    s.different_first_page_header_footer = False
    back.bibliographie(doc)
    back.annexes(doc)
    back.table_matieres(doc)

    doc.save(OUTPUT)
    print(f"Document genere : {OUTPUT}")


if __name__ == "__main__":
    main()
