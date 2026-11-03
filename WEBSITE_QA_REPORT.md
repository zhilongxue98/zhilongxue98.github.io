# Website QA Report — Two-page edition

Checked: 2026-11-02. Source baseline: GitHub main, commit `7ae478df1a1c03f28d8ac8f25cd8e4bfb5054305`.

## Scope and result

The delivered source has two content pages, Home and Research & CV. The old `cv.html` and `talks.html` files contain only compatibility redirects. Checks were run against the locally prepared package, not a new production deployment. No GitHub push or public deployment was performed.

## Responsive layout

The pages were rendered in Chrome through the supervised preview. Same-origin frames supplied exact CSS layout viewports of 375×812, 768×1024 and 1440×900; measurements and visual inspection were performed for both pages. This tests responsive layout rather than emulating every mobile device or browser.

| Page | Layout viewport | Document height | Horizontal overflow | Result |
| --- | --- | --- | --- | --- |
| Home | 375×812 | 1347 px | None | Text and photograph retained; natural vertical scrolling. |
| Research & CV | 375×812 | 1211 px | None | CV access and selected work precede research interests; natural vertical scrolling. |
| Home | 768×1024 | 1024 px | None | Fits the tested viewport. |
| Research & CV | 768×1024 | 1024 px | None | Fits the tested viewport. |
| Home | 1440×900 | 900 px | None | Fits the tested viewport. |
| Research & CV | 1440×900 | 900 px | None | Fits the tested viewport. |

At the narrow width, the desktop test browser reserves 15 px for a vertical scrollbar; the measured content width is therefore 360 px. No content extends beyond it. Content is not clipped to force a one-screen mobile presentation.

## Navigation and old addresses

- Both primary navigation menus contain exactly Home and Research & CV, with the correct active-page indication.
- Mobile Menu opens correctly; Escape closes it; the Home link navigates successfully.
- Both old addresses were actually opened in the browser and redirected to `research.html#cv`.
- Redirect files use HTML refresh, a canonical URL, `noindex, follow`, and a visible fallback link. They do not depend on JavaScript or need future content updates.
- All 21 local file/fragment references in the four HTML files resolve to existing files or anchor IDs. HTML nesting and unique IDs pass the static checks.
- The existing navigation script passes Node's syntax check and is unchanged.

## CV

- Public PDF compiled successfully with two pdfLaTeX passes; two A4 pages. No LaTeX warnings, overfull boxes or missing characters were reported.
- Both pages were rendered and visually inspected; no clipping, overlap, missing glyphs or broken section placement was found.
- All seven numbered publications/preprints and the new Shandong University talk are present.
- Public TeX differs from the supplied file only by omission of the CSC identifier. Academic information and the original uploaded file were not otherwise changed.
- View CV was clicked and opened the correct two-page PDF in a new browser tab; its title and displayed contents were checked.
- Download PDF points to the same existing PDF, with the standard HTML `download` attribute and a descriptive filename. The test browser did not return a download-completion event, so automated confirmation of a saved download is not claimed. This does not affect the successfully verified online PDF viewer; deployment should be followed by a normal-browser download click.

## Selected-paper links and bibliographic accuracy

| Work | Checks |
| --- | --- |
| Li–Nguyen–Xue, pointwise wave-damping | arXiv abstract HTTP 200; exact authors/title checked; PDF HTTP 200 with PDF signature; local BibTeX present. |
| Xue–Zhan, rotating patches with genuine holes | arXiv abstract HTTP 200; authors/title checked; PDF HTTP 200 with PDF signature; local BibTeX present. |
| Tan–Xue–Xue, Loglog–Euler | arXiv abstract HTTP 200; authors/title checked; PDF HTTP 200 with PDF signature; local BibTeX updated. “To appear” status follows the author-supplied CV, not an inferred status from arXiv. |
| Hmidi–Xue–Xue, unified V-states theory | DOI resolved with HTTP 200; arXiv PDF HTTP 200 with PDF signature; Crossref confirms the title, Advances in Mathematics volume 486, article 110750 and 2026 publication year; local BibTeX present. |

No unverified journal volume, page range or DOI was added to the accepted Loglog–Euler paper. Complete publication information remains in the author CV; the website is deliberately a selection.

## SEO and GitHub Pages

- Each content page has one H1, a description, canonical URL, title and Open Graph metadata. Research metadata uses “Research & CV”.
- Person structured data points to the photograph already displayed on Home.
- The sitemap contains only the Home and Research URLs; robots.txt is unchanged.
- Exactly one visible “Last updated” notice remains, in research.html. Home and the redirect files have none.
- CNAME is byte-identical to the repository baseline: www.zhilongxue.cn.
- The existing photograph is byte-identical and its crop is unchanged.
- The package includes HTML/CSS/JavaScript, local photo assets, PDF, BibTeX files, TeX source and `.nojekyll`. It can be served directly from the existing GitHub Pages root; optional Vite preview files do not introduce a production build requirement.
- Browser-preview scaffolding, Git metadata, build logs and temporary files are excluded from the replacement ZIP.

## After upload

Wait for the existing GitHub Pages deployment to finish. Confirm the two navigation items, open the CV, click Download PDF in your regular browser, and try one old CV/Talks bookmark. Public deployment and DNS were not changed during this packaging task.
