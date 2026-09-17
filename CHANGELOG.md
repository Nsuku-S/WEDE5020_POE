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

## [1.0.0] — Part 1 submission (baseline)

- Original 6-page HTML site (Home, About Us, Contact Us, Enquiry, Menu,
  Services) with inline `style="..."` attributes and no external stylesheet
