# Website QA Report

Date: 1 September 2026  
Result: **PASS**

## 1. QA basis

The academic fact baseline was the supplied August 2026 `CV_zhilong.tex`.
The previous public website and the public GitHub repository at commit
`4fc5e18` were inspected before implementation.

The named `Zhilong_homepage_redesign_Work_guide_zh.md` was not present in the
local project snapshot and could not be resolved by exact project-file search.
The detailed constraints reproduced in the launch request were therefore used
as the authoritative execution checklist. No additional redesign decisions
were recovered from prior-conversation search.

## 2. Academic fact audit

| Area | CV baseline | Focused HTML | Full CV PDF |
| --- | ---: | ---: | ---: |
| Publications and preprints | 6 | 4 representative | 6 |
| Employment entries | 1 | Current role on Home only | 1 |
| Education entries | 2 | 2 on CV page | 2 |
| Research stays | 2 | 2 on CV page | 2 |
| Invited talks | 4 | 4 | 4 |
| Selected conferences | 9 | 4 recent | 9 |
| Funding entries | 2 | Omitted | 2 |

No unsupported talk title, publication status, research project, award, or
employment claim was added. The HTML pages and public CV exclude date of birth,
nationality, and the CSC identifier.

## 3. Publication link audit

| Publication | arXiv | PDF | Journal | DOI | BibTeX |
| --- | --- | --- | --- | --- | --- |
| Xue–Zhan, 2026 | 2608.19627 | Verified | — | — | Local file present |
| Tan–Xue–Xue, 2025 | 2510.18759 | Verified | — | — | Local file present |
| Hmidi–Xue–Xue, Calc. Var. 2026 | 2504.08143 | Verified | Springer | 10.1007/s00526-026-03295-4 | Local file present |
| Miao–Tan–Xue–Xue, 2024 | 2410.19273 | Verified | — | — | Local file present |
| Hmidi–Xue–Xue, Adv. Math. 2026 | 2312.02874 | Verified | Elsevier | 10.1016/j.aim.2025.110750 | Local file present |
| Hmidi–Xue–Xue, JFA 2023 | 2210.08760 | Verified | Elsevier | 10.1016/j.jfa.2023.110142 | Local file present |

All twelve arXiv abstract/PDF endpoints returned HTTP 200 during the final
link check. The three journal records and DOI values were matched against the
official Springer or Elsevier record. The static local-link audit found zero
missing HTML, CSS, JavaScript, image, PDF, anchor, or BibTeX targets.

## 4. Responsive and visual QA

The focused architecture was rendered in isolated exact-size viewports. Both
1366 × 768 and 1440 × 768 laptop viewports were used as one-screen acceptance
tests for the final Home and Talks stabilization.

| Page | Content allocation | Width | Height | Scroll required |
| --- | --- | ---: | ---: | --- |
| Home | Identity, PhD, research orientation, portrait, contact, News | 1440 px | 768 px | No |
| Research | Fluid/vortex/kinetic themes, four representative papers | 1440 px | 768 px | No |
| CV | Education, research visits, and complete-CV access | 1440 px | 768 px | No |
| Talks & Activities | Four invited talks, four recent meetings | 1440 px | 768 px | No |

Additional final-fit measurements:

| Page | Viewport | Document size | Vertical overflow | Horizontal overflow |
| --- | ---: | ---: | ---: | ---: |
| Home | 1366 × 768 | 1366 × 768 | 0 px | 0 px |
| Talks & Activities | 1366 × 768 | 1366 × 768 | 0 px | 0 px |
| Home | 1440 × 768 | 1440 × 768 | 0 px | 0 px |
| Talks & Activities | 1440 × 768 | 1440 × 768 | 0 px | 0 px |

For every desktop page, `clientWidth`, `scrollWidth`, `clientHeight`, and
`scrollHeight` matched exactly at 1440 × 768. All four footers remained visible
without scrolling. The four pages were also visually inspected at 1363 × 936;
no clipped text, overlap, broken image, or unintended animation was observed.

The two Home biography paragraphs were inspected through their computed
styles at both desktop acceptance widths. Each resolves to the same 16 px font
size, 23.68 px line height, 400 weight, and serif font stack.

The final horizontal-containment regression checked the content shell, header,
footer, and all visible descendants on every page. At 1366 px, all three shared
containers occupy the same centered interval, 107–1259 px; at 1440 px they
occupy 144–1296 px. The page shell remains 1152 px wide, alignment deltas are
0 px, and no child extends beyond either edge. The 375 px Home render likewise
keeps its header, body, and footer aligned within the same 16–344 px interval.

Responsive regression checks also passed: the 375 × 900 Home render had
matching 360 px client/scroll widths, and the 768 × 900 Talks render had
matching 768 px client/scroll widths and fit without vertical scrolling. The
mobile Home page is intentionally single-column and therefore longer, but
introduces no horizontal overflow. Mobile navigation remains active at both
widths.

## 5. Navigation and interaction QA

- All four pages contain all four primary navigation destinations.
- Each page has exactly one correct `aria-current="page"` marker.
- Desktop navigation renders as a single horizontal row.
- At 375 px and 768 px the navigation collapses to the Menu control.
- The mobile Menu changes `aria-expanded` from `false` to `true` and exposes all
  four destinations in a one-column list at 375 px.
- A rendered Home → Research navigation test reached the correct Research H1.
- Escape-to-close and wide-screen resize cleanup are implemented in the shared
  navigation script.

## 6. CV and PDF QA

- `CV_zhilong.pdf` rebuilt successfully from `CV_zhilong.tex` in two LaTeX
  passes.
- PDF metadata: title `Zhilong Xue — Curriculum Vitae`; author `Zhilong Xue`.
- PDF structure: 2 pages, US Letter, unencrypted, no JavaScript.
- Both pages were rendered to PNG at 150 dpi and visually inspected.
- Result: no clipped text, overflow, overlap, missing glyph, broken rule, or
  awkward section split.
- Text extraction confirms all six publications, four talks, nine conferences,
  and two funding entries.
- Text extraction confirms that date of birth, nationality, and CSC identifier
  do not appear.
- The CV page contains direct view/download actions; the PDF URL loaded
  successfully in the live preview.

## 7. SEO and GitHub Pages QA

- Unique `<title>` and meta description: PASS on all four pages.
- `viewport`, `robots`, `author`, canonical URL, and Open Graph text fields:
  PASS on all four pages.
- Homepage Person JSON-LD: PASS.
- `robots.txt` and `sitemap.xml`: PASS.
- `CNAME`: preserved as `www.zhilongxue.cn`.
- Relative asset paths: PASS for GitHub Pages and the custom domain.
- No framework or production build step is required.
- Optional local preview configuration is isolated from production delivery;
  `node_modules/` is ignored.

## 8. Static validation summary

- HTML pages parsed: 4
- Duplicate IDs: 0
- Missing local links: 0
- Missing fragment anchors: 0
- Missing required metadata fields: 0
- Page-origin console errors during navigation: 0
- JavaScript syntax check: PASS
- PDF render check: PASS

## 9. Deployment note

The source is ready to deploy from the repository root through GitHub Pages.
The public domain will continue to use `www.zhilongxue.cn` because the existing
`CNAME` was retained.
