# Changelog

All notable changes to the Dumi's Kitchen website are documented in this
file. Format loosely follows [Keep a Changelog](https://keepachangelog.com/).

## [2.3.0] — Vibrant redesign

### Changed
- Replaced the minimal 3-colour palette with a warmer 5-colour palette (charcoal, fire red, gold, forest green, cream) suited to a shisanyama/kota brand
- Switched typography to a Fraunces (display) + Nunito Sans (body) pairing for a more distinctive, appetising feel
- Added hover/transition micro-interactions throughout: animated gradient underline on nav links, card lift-on-hover, button lift + glow, menu photo zoom-on-hover
- Restyled the hero on `index.html` with a background photo, dark gradient overlay, and a diagonal `clip-path` edge
- Restyled menu items with a dedicated price "badge" instead of plain inline text

### Added
- Eyebrow label and badge row ("Since 2021", "Family Recipes", "Fresh Daily") in the hero
- Decorative icons (marked `aria-hidden`) on card headings across Home, Contact and Services
- `::selection` styling and `@media (prefers-reduced-motion: reduce)` support

## [2.2.0] — Minimal palette pass

### Changed
- Reduced the colour palette to 3 core colours and switched to the Aptos font family (with system fallbacks), per request
- Reworked nav hover/active states to use colour only, with no underline or border
- Simplified buttons down to two variants (solid primary / outline) and removed decorative shadows and gradients site-wide

## [2.1.0] — Content pass

### Added
- "Why People Keep Coming Back" feature section and closing call-to-action on the Home page
- Introductory copy on About Us, Contact Us and Enquiry pages
- Short persuasive blurbs above each menu category (Mains, Sides, Drinks)
- Closing call-to-action block on every inner page, linking through to the Menu, Contact or Enquiry page

## [2.0.0] — External stylesheet & responsive redesign (Part 2 baseline)

### Added
- Single external stylesheet (`assets/css/styles.css`) linked from all 6 pages, replacing all inline `style="..."` attributes
- Responsive layout: header/nav, card grids and menu grid all adapt via Flexbox/CSS Grid and two breakpoints (720px, 480px)
- Consistent header, sticky navigation, and footer (with repeated nav links) across every page
- Card-based layout for the About Us story/mission/vision/audience sections, the Home page's hours/location/contact info, the Contact page's details, and the Services offerings
- Card-grid layout for all menu items (previously a plain top-to-bottom stack)
- Descriptive `alt` text for every menu photo (previously all read "Main image")

### Fixed
- `contact-us.html`: malformed, doubled `<iframe <iframe src="...">` tag corrected to a single valid iframe; map made responsive via an aspect-ratio wrapper instead of a fixed `width="1600" height="1000"`
- `enquiry.html`: broken viewport meta tag (`width=` with no value) corrected to `width=device-width`
- `enquiry.html`: form `<label for="...">` attributes that didn't match any `id` (Email, Cellphone, Message) fixed so labels are properly associated with their inputs
- `enquiry.html`: all `<option>` elements in the Enquiry Type dropdown had empty `value=""`; each now has a value matching its visible text so the form submits meaningful data
- `enquiry.html`: `<button type="cancel">` (not a valid HTML button type) changed to `type="reset"`
- `enquiry.html`: missing closing `>` on the final `</html` tag
- `enquiry.html`: cellphone field changed from `type="number"` to `type="tel"` to avoid stripping a leading `0` and showing spinner arrows
- All inner pages: malformed `!-CSS Stylesheet-->` HTML comment corrected to `<!--CSS Stylesheet-->`
- `menu.html`: minor missing-space markup bug (`Logo.jpeg"alt="Main image"`) corrected

All notable changes to the Dumi's Kitchen website are documented in this
file. Format loosely follows Keep a Changelog.

## [3.5.0] — Bug-fix pass (POE Part 3)

Fixed

	•	index.html: "Visit Us!" card grid was broken — only the Operating Hours card was wrapped in .card-grid, with the Location and Contact cards sitting outside it as unstyled siblings; all three are now properly nested inside one .card-grid
	•	services.html: same card-grid bug — only the first of four service cards (In-Store Dining) was inside .card-grid; all four are now correctly grouped
	•	services.html: three of four FAQ accordion buttons used class accordion-button instead of accordion-question, so clicking them did nothing (the JS only listens for .accordion-question); standardised to accordion-question on all four
	•	menu.html: the search input's id was broken across two lines (id="menu-\n search"), so document.getElementById('menu-search') could never find it and the search box did nothing; fixed to a single-line, valid id="menu-search"
	•	menu.html: all four filter buttons had mismatched quotes on their class/aria-pressed/data-filter attributes (e.g. class="filter-btn'), which corrupts HTML parsing; all quotes fixed to valid matching pairs
	•	menu.html: the "Juicy Steak Full Plate" item had a .menu-item-media div closed before its image and an extra stray closing </div>, breaking the DOM structure for the rest of the page below it; nesting corrected
	•	menu.html: five "Mains" items used inline style="text-align: left;" instead of class="menu-item-name" on their name <p>, which meant the search feature couldn't read their names (silently excluded from every search); class restored on all five
	•	menu.html: the closing call-to-action and its buttons had fallen outside <main>, and the buttons were siblings of .cta-box rather than nested inside it, breaking both the page container width and the button layout; structure corrected
	•	contact-us.html: </main> closed too early, leaving the message form, call-to-action and footer outside <main class="container"> and therefore unconstrained by the site's layout width; moved to the correct position
	•	contact-us.html: the mailto: address had a stray apostrophe — dumi'skitchen.co.za — which made the link invalid; corrected to dumiskitchen.co.za
	•	enquiry.html: all dropdown options had reverted to empty value="" (including the "General Enquiry" option, which had also gone missing entirely); values restored to match each option's label, and General Enquiry re-added
	•	enquiry.html: the Email and Cellphone fields had lost their id attributes, so their <label for="..."> no longer pointed at anything; id="email" and id="cellphone" restored
	•	enquiry.html: the message <textarea> had a stray newline between its opening and closing tags, which counts as a non-empty default value and could let the required check pass on an empty-looking field; removed
	•	enquiry.html: leftover <br/><br/><hr/> spacing hack between sections removed (layout is handled by .section margin in CSS)
	•	enquiry.html: footer copyright year was 2021 while every other page shows 2026; corrected for consistency

Changed

	•	All six pages: logo <img> had reverted to inline width="10%" height="10%" with no class; replaced with class="logo-img" on every page so sizing is handled consistently by CSS
	•	All six pages: added a unique <meta name="description"> to each page (none existed on any page)
	•	about-us.html: the four sub-headings "Our Story", "Our Mission", "Our Vision", "Our Target audience" were each a second-to-fifth <h1> on the page; changed to <h2> so each page has exactly one <h1>. Note: if your styles.css still has a .story-block h1 rule, update its selector to .story-block h2 so these headings keep their current look
	•	contact-us.html: the second heading "Our Address - Locate Us" was a duplicate <h1>; changed to <h2>, with its sub-line "Visit us! We'd love to see..." bumped from <h2> to <h3> to keep a valid nesting order
	•	enquiry.html: the second heading "Enquiry Form" was a duplicate <h1>; changed to <h2>
	•	services.html: class="section-lead" on the "More than just a meal" subheading didn't match the lead class used everywhere else on the same page; standardised to class="lead"
	•	Button classes standardised site-wide to the two that are actually styled, btn-primary and btn-outline — several buttons across index.html, about-us.html, contact-us.html, menu.html and services.html had reverted to undefined classes (btn-mustard, btn-secondary) left over from earlier design passes, which would render as unstyled default buttons
	•	All 14 menu photo <img> tags: removed leftover inline width="20%" height="20%" attributes (sizing is handled by .menu-item img in CSS; the attributes were redundant and reintroduce the inline-styling pattern the brief asks to avoid)
	•	contact-us.html: removed the Google Maps iframe's leftover fixed width="600" height="450" and style="border:0;" — the .map-wrapper CSS already makes it fully responsive


## [3.4.0] — JavaScript functionality (POE Part 3)

Added

	•	assets/js/script.js: one shared, defensively-guarded script linked from every page
	•	Image lightbox on menu.html — click any dish photo for an enlarged view; closes via button, outside click, or Escape key
	•	Menu search box + category filter buttons (All/Mains/Sides/Drinks) on menu.html, combinable and with an empty-state message
	•	FAQ accordion (4 Q&A pairs) on services.html, with aria-expanded state for accessibility
	•	data-category attributes added to all 14 .menu-item elements to support the category filter
	•	New CSS: .menu-controls, .filter-btn, .lightbox-overlay, .accordion and related classes in styles.css

Documented

	•	README section explaining why the existing Google Maps embed on contact-us.html satisfies the Part 3 "Interactive Map" requirement without an additional JS mapping library

## [3.3.0] — Part 1 feedback response (POE Part 3)

Added

	•	"Response to Part 1 Feedback" section in README.md, mapping every Part 1 rubric criterion (80/100) that lost marks to the specific action taken
	•	Explicit note on the three proposal-stage-only criteria explaining they're out of scope for this repository

Fixed

	•	Resolves the Part 2 "Knowledge: Feedback for Part 1" criterion (previously 0/10) by making the Part 1 → Part 2/3 improvement trail explicit and verifiable

## [3.2.0] — Social media icons

Added

	•	WhatsApp, Facebook and Instagram icons (inline SVG) in the footer of all 6 pages
	•	WhatsApp icon links to a working wa.me chat link built from the existing contact number
	•	Facebook and Instagram icons link to placeholder # URLs, marked with TODO comments

## [3.1.0] — Contact form enhancements

Added

	•	Contact Number field (type="tel") to the Contact Us message form
	•	Preferred Way to Be Contacted dropdown so the business knows how the sender would like a reply

## [3.0.0] — Part 3: HTML form added to Contact Us page

Added

	•	A new "Send Us a Message" form on contact-us.html, fulfilling the Part 3 requirement that enquiry.html and contact.html each carry a form with a distinct purpose
	•	Form submits via mailto: to info@dumiskitchen.co.za

## [2.3.0] — Vibrant redesign

Changed

	•	Replaced the minimal 3-colour palette with a warmer 5-colour palette (charcoal, fire red, gold, forest green, cream)
	•	Switched typography to a Fraunces (display) + Nunito Sans (body) pairing
	•	Added hover/transition micro-interactions throughout

Added

	•	Eyebrow label and badge row in the hero
	•	Decorative icons on card headings across Home, Contact and Services

## [2.2.0] — Minimal palette pass

Changed

	•	Reduced the colour palette to 3 core colours and switched to the Aptos font family
	•	Reworked nav hover/active states to use colour only

## [2.1.0] — Content pass

Added

	•	"Why People Keep Coming Back" feature section and closing call-to-action on the Home page
	•	Introductory copy on About Us, Contact Us and Enquiry pages

## [2.0.0] — External stylesheet & responsive redesign (Part 2 baseline)

Added

	•	Single external stylesheet (assets/css/styles.css) linked from all 6 pages, replacing all inline style="..." attributes
	•	Responsive layout via Flexbox/CSS Grid and two breakpoints (720px, 480px)

Fixed

	•	contact-us.html: malformed, doubled <iframe <iframe src="..."> tag corrected
	•	enquiry.html: broken viewport meta, mismatched label/id pairs, empty dropdown values, invalid button type, missing closing tag, cellphone input type
	•	All inner pages: malformed !-CSS Stylesheet--> comment corrected

## [1.0.0] — Part 1 submission (baseline)

- Original 6-page HTML site (Home, About Us, Contact Us, Enquiry, Menu,
  Services) with inline `style="..."` attributes and no external stylesheet
