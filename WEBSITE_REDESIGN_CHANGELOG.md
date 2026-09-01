# Website Redesign Changelog

Date: 1 September 2026  
Target: `https://www.zhilongxue.cn/`

## 1 September 2026 — horizontal containment correction

- Corrected the main flex axis from horizontal to vertical. This preserves the
  viewport-height behavior introduced in the previous pass without allowing
  the page shell to grow beyond its intended 72 rem content measure.
- Restored exact horizontal alignment among the header, page body, and footer
  across Home, Research, CV, and Talks & Activities.
- Verified centered 1152 px content bounds at both laptop widths: 107–1259 px
  at 1366 px and 144–1296 px at 1440 px.
- Confirmed zero horizontal overflow and zero child-content escape on all four
  pages; Home and Talks also retain zero vertical overflow at 768 px height.

## 1 September 2026 — final viewport-fit stabilization

- Replaced the remaining calculated page-height dependency with a flex-based
  viewport shell so the header, main content, and footer naturally fill the
  browser height without creating rounding overflow.
- Normalized the two Home biography paragraphs to the same 16 px font size,
  weight, typeface, and line height.
- Added a restrained short-desktop spacing pass for Home and Talks &
  Activities, reducing only vertical gaps when the viewport is 820 px tall or
  shorter; content and the approved visual language remain unchanged.
- Verified zero vertical and horizontal overflow for both pages at 1366 × 768
  and 1440 × 768, with the footer ending exactly at the viewport edge.

## 1 September 2026 — final content refinement

- Froze the established one-screen monograph layout and refined content only.
- Added the 2025 Beijing Normal University PhD and Liutang Xue supervision to
  Home.
- Added kinetic equations and Landau damping for Vlasov–Poisson systems as a
  recent research interest; removed the redundant active-scalar interest line.
- Reduced the Home name from 72 px to approximately 63 px at 1440 px and
  slightly reduced the introductory text.
- Added a compact News link and one-line announcement placeholder to Home.
- Reworked CV into a three-column summary of education, research visits, and
  full-PDF access, while retaining the exact one-screen desktop height.
- Left Talks & Activities unchanged from the approved version.

## 1 September 2026 — focused one-screen architecture

- Reassigned each page a distinct role and removed repeated summary blocks.
- Home now contains only identity, current affiliation, research orientation,
  portrait, location, and contact details.
- Research now presents three research themes and four representative papers;
  the complete six-item publication record remains in the CV PDF.
- CV now acts as a dedicated document gateway with view/download actions. The
  duplicated HTML résumé and embedded PDF viewer were removed.
- Talks & Activities now uses two parallel columns: all four invited talks and
  four recent selected meetings. The complete nine-conference record remains
  in the CV PDF.
- At 1440 × 768, all four pages—including their footers—fit exactly within one
  viewport with no vertical or horizontal scrolling.

## 1 September 2026 — density refinement

- Reduced desktop body type, display headings, and chapter numerals while
  preserving the serif-led monograph character.
- Shortened the site header, page openings, section spacing, list rows, and
  footer so each viewport carries more academic content.
- Narrowed the chapter-number column and widened the main reading column on
  desktop pages.
- Tightened publication, chronology, research-interest, and activity entries
  without removing any information or links.
- Kept the portrait at the established editorial scale and retained the warm,
  low-saturation colour treatment.
- Reduced the former embedded CV height and tuned the small-screen spacing so
  the denser desktop rhythm does not create mobile overflow.

### Inner-page compact pass

- Kept the approved Home composition unchanged.
- Recast the Research, CV, and Talks page openings from large chapter-title
  screens into compact academic index headers.
- Reduced inner-page H1s to approximately 43 px at 1440 px, widened their text
  measure, and reduced the Roman chapter numerals.
- Shortened inner-page top padding, header depth, numbered-section spacing, and
  the embedded CV frame so readers reach substantive records sooner.
- Optimized specifically for a 1440 × 768 laptop viewport: Research reaches
  Publications, CV reaches Education, and Talks shows four invited-talk entries
  in the initial screen.

## Overview

The former single-page homepage has been rebuilt as a four-page static academic
website:

- `index.html` — Home
- `research.html` — Research and publications
- `cv.html` — Academic CV and PDF
- `talks.html` — Invited talks and selected activities

The implementation remains GitHub Pages friendly: the public site is plain
HTML, CSS, and a small JavaScript file. No application framework or server-side
runtime is required.

## Design

- Replaced the inherited LaTeX.css page with a purpose-built **Modern
  Mathematical Monograph** visual system.
- Introduced a warm paper ground, dark ink, restrained green and oxblood
  accents, hairline rules, generous margins, chapter numerals, and bracketed
  publication numbering.
- Established a shared typographic and spacing system across all four pages.
- Removed emoji, commercial portfolio patterns, card stacks, gradients,
  glass effects, formula decoration, and large motion.
- Retained the current portrait and presented it as an editorial figure rather
  than a circular avatar.

## Content

- Updated the position to Postdoctoral Researcher at AMSS, Chinese Academy of
  Sciences, from July 2025 to present.
- Updated education and research stays from the August 2026 CV.
- Added the July 2026 funding entries.
- Added all four invited talks and all nine selected conferences in the current
  CV, without inventing talk titles.
- Updated the publication list from five to six items, including
  `arXiv:2608.19627`.
- Preserved the publication order and status used by the current CV.

## Publications and links

- Added verified arXiv abstract and PDF links for all six papers.
- Added official journal and DOI links for the three published journal papers.
- Added one downloadable `.bib` file per publication.
- Standardized publication presentation: status/year, title, authors, venue,
  and a compact link row.

## CV and privacy

- Recompiled `CV_zhilong.pdf` from the August 2026 TeX source.
- Corrected PDF title/author metadata, institutional naming, email links, and
  date punctuation in the public CV copy.
- Removed date of birth, nationality, and the CSC identifier from the public
  CV source and PDF.
- Kept the academic fact that the Seville visit was CSC funded, without the
  personal grant number.
- Added a deliberate page break so publications close page 1 and talks,
  conferences, and funding form a coherent page 2.

## Navigation, responsive behavior, and accessibility

- Added consistent four-page navigation and `aria-current` state.
- Added an accessible mobile menu with `aria-expanded`, Escape-to-close, and
  resize cleanup.
- Added a skip link, semantic landmarks, descriptive image text, and visible
  keyboard focus styles.
- Added responsive layouts for mobile, tablet, and wide desktop widths.
- Added PDF fallback text for browsers that do not support embedded PDFs.

## SEO and deployment

- Added unique titles, descriptions, canonical URLs, authorship, robots,
  Open Graph text metadata, and theme color to every page.
- Added Person JSON-LD to the homepage.
- Added `sitemap.xml` and updated `robots.txt`.
- Preserved `CNAME` with `www.zhilongxue.cn`.
- Added optional Vite preview configuration for repeatable local QA; GitHub
  Pages still serves the files directly with no build step.

## Files removed or superseded

- Removed the unused inherited `latex-style.css`.
- Replaced the former single-page `index.html` with the new site architecture.
