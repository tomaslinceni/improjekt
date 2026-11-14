---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages"]
---

# Surface brief: improjekt.cz (whole site, first design pass)

Scope: every public page of the new improjekt.cz (home, o nás, služby, reference + detail, aktuality + detail, kariéra + pozice, kontakty, legal, 404). Mode: Persuade (home, služby, reference, kariéra); Read for articles and legal.

Audience and job: developers, private builders, municipalities and architects deciding whether IM Projekt is a precise, trustworthy design partner; young building designers deciding whether to apply. Action: send an inquiry (form with attachment) or a CV. Proof: 65 real references with their documentation scope, client logos, 30+ years.

Constraints: existing copy kept (typos fixed only), logo shape untouchable, formal "vy", lowercase as brand trait in claim/navigation, Czech only, Astro static, content in collections. Client wants a glass effect: shown as 3 switchable variants (pauzák / sklo / plocha) until they choose.

Unresolved: contact-form backend, final glass variant, reference categories (derived from titles because the old site's taxonomy was empty; client must confirm), cookie/analytics setup.

## Direction contract

THESIS: The site is a drawing sheet. Precision is shown, not claimed: real floor plans, dimension lines that carry true figures, a title block (rohové razítko) on every project. It refuses the category default of a full-bleed stock hero with centred headline and three icon cards.

OWN-WORLD: Cool drafting-film grey ground with a faint 8 mm grid; graphite ink; orange #F58220 only as the red-pencil mark (kóty, active states, one dot). Hairline 1px rules, square corners, no shadows except under the frosted "pauzák" sheets. Archivo (wide cut for display, normal for text) plus Red Hat Mono strictly for measurements, codes and title-block values. Photos in full colour inside ruled frames.

STORY: Visitors see the office's own drawing and a real project first, understand the scope it delivered, follow references and services by who they are, and reach the inquiry form. Candidates find kariéra from the home page, not only the footer.

FIRST VIEWPORT: Sticky frosted header (logo left, lowercase nav, "kontaktujte nás" button). Below, a sheet: the office's floor plan as underlay; a frosted tracing-paper panel on the left holding "partner pro vaši ideu." in wide Archivo at ~5.5rem, the line "Projektování je o hledání cest…", primary action "Konzultovat záměr" and secondary "Reference"; on the right a framed photo of a featured reference with its title block (projekt, kategorie, rozsah) and stage bar; a dimension line 1992 → dnes spans the bottom of the sheet.

FORM: Direction A "výkres", user-pinned in the brainstorm (artifact M4XowzPVcyfcfp1tBfU4jr); signature interaction: dimension lines draw themselves and the hero cycles featured projects, the title block rewriting its values. seed: none (user-pinned direction, no roll)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
