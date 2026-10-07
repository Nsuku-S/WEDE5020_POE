## [1.0.0] — Part 1 submission (baseline)

- Original 6-page HTML site (Home, About Us, Contact Us, Enquiry, Menu,
  Services) with inline `style="..."` attributes and no external stylesheet


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


# Dumi's Kitchen — Website (POE Part 2)

A multi-page website for **Dumi's Kitchen**, a family-run shisanyama and kota
takeaway in Rwanda Village, N'wamitwa (Tzaneen, South Africa). This
repository contains the Part 2 submission: the original Part 1 HTML pages,
restyled and made responsive using a single external stylesheet, with no
frameworks (no Bootstrap/Tailwind/React).

## Project Structure

```
dumis-kitchen/
 index.html                 Home page
pages/
about-us.html          Our story, mission, vision, audience
 contact-us.html        Contact details + embedded Google Map
  enquiry.html           Enquiry form
   menu.html              Mains, sides and drinks with prices
    services.html          Dine-in, catering, workshops
        assets/
         css/
          styles.css         Single external stylesheet (all pages link here)
           images/                Logo + menu photography
 README.md                  This file
CHANGELOG.md                Part 1 → Part 2 version history
 REFERENCES.md               Sources consulted (Harvard style)
```

Every page links the same stylesheet, e.g.:
```html
<link rel="stylesheet" href="../assets/css/styles.css">
```
(`../` from inside `/pages/`, `./` from `index.html` at the project root.)

## Technologies Used

- **HTML5** — semantic elements (`header`, `nav`, `main`, `section`, `footer`, `form`)
- **CSS3 only** — one external stylesheet, no CSS frameworks or preprocessors
- **Google Fonts** — Fraunces (display) and Nunito Sans (body)
- **Google Maps Embed** — iframe on the Contact page
- No JavaScript, no build tools — pure static HTML/CSS so it runs anywhere

## How to View the Site

Open `index.html` in any browser, or serve the folder with a simple local
server (e.g. VS Code's "Live Server" extension) so relative asset paths
resolve correctly.

## Design System

**Colour palette** (5 colours, used consistently across every page):

| Swatch | Hex | Used for |
|---|---|---|
| Charcoal | `#241811` | Header, footer, hero, CTA backgrounds, body text |
| Fire red | `#d6472e` | Primary accent — buttons, links, headings, card borders |
| Gold | `#f2a93b` | Secondary accent — hover states, nav underline, badges |
| Forest green | `#5b7b4f` | Tertiary accent — alternating story-block borders |
| Cream | `#fff6e9` | Page background |

**Typography:** `Fraunces` (a warm, characterful serif) for all headings,
paired with `Nunito Sans` for body text and UI elements — a pairing chosen
to feel like a home-style eatery rather than a corporate template. Headline
sizes use `clamp()` so they scale fluidly between mobile and desktop instead
of jumping at fixed breakpoints.

**Layout:** Flexbox for the header/nav and card actions; CSS Grid
(`auto-fit, minmax()`) for the card grids and menu grid, so the number of
columns adjusts automatically to the available width with no media query
needed for that part.

**Decoration:** rounded corners, soft drop shadows, gradient buttons, a
gradient nav-underline that animates in on hover, card lift-on-hover, and a
diagonal `clip-path` on the hero section for a less "boxy" first impression.

## Checklist Coverage

| Focus Area | Where it's implemented |
|---|---|
| External Stylesheet – All Pages | `assets/css/styles.css`, linked in the `<head>` of all 6 pages |
| Default CSS Styles | `* { box-sizing }`, base `body`, `img`, `h1–h4`, `p`, `ul`, `a` rules under "Reset & base" |
| Typography Styles | `--font-display` / `--font-body` variables; `clamp()` fluid headings; Google Fonts import at the top of the file |
| Layout Structure | Semantic `header`/`main`/`footer`; `.container`; Flexbox nav; CSS Grid `.card-grid` / `.menu-grid` |
| Decoration & Colour | `:root` colour variables; gradients on buttons/CTA/hero; `box-shadow` variables; rounded corners (`--radius-*`) |
| Pseudo-Classes | `:hover`, `:focus-visible`, `:nth-of-type()`, `:last-of-type` (see below for the full list) |
| Media Queries / Breakpoints | `@media (max-width: 720px)`, `@media (max-width: 480px)`, `@media (prefers-reduced-motion: reduce)` |
| Responsive Layout | Grid `auto-fit, minmax()` cards/menu; `.container` fluid padding; hero padding shrinks on mobile |
| Responsive Typography | `clamp()` on `h1`/`h2`; nav link font-size reduced under 480px |
| Responsive Navigation | `.main-navigation` wraps (`flex-wrap`) and the header stacks vertically under 720px |
| Responsive Images | `img { max-width: 100%; height: auto; }`; menu photos use `object-fit: cover` so they crop gracefully at any width |

**Pseudo-classes / pseudo-elements used:** `:hover`, `:focus-visible`,
`:nth-of-type(2)`/`(3)`/`(4)`, `:last-of-type`, `::after` (animated nav
underline), `::selection` (branded text-selection colour).

## Accessibility Notes

- Visible focus outlines (`:focus-visible`) on every interactive element, styled in the brand's gold accent for contrast against both light and dark backgrounds
- Descriptive `alt` text on every menu photo (not generic placeholders)
- `aria-current="page"` on the active nav link; `aria-hidden="true"` on purely decorative emoji icons so screen readers skip them
- `<label for>` correctly paired with matching `id` on every form field
- `@media (prefers-reduced-motion: reduce)` disables hover/scroll animations for users who've requested it
- A single accessible Google Maps iframe with a descriptive `title` attribute

## Known fixes from part 1 & 2

Full list of bugs found and corrected while intergarting the stylesheet (broken iframe tag, invalid viewport meta, mismatched
form label/id pairs, empty breakdwon values, invalid button type, malformed HTML comments).
Provided in the changelog.

# References

The following sources informed the CSS techniques, typography and mapping
resources used in this project (Harvard style).

Google Fonts, 2024. *Fraunces*. [Online]
Available at: https://fonts.google.com/specimen/Fraunces
[Accessed 17 September 2026].

Google Fonts, 2024. *Nunito Sans*. [Online]
Available at: https://fonts.google.com/specimen/Nunito+Sans
[Accessed 17 September 2026].

Google Developers, 2024. *Google Maps Embed API*. [Online]
Available at: https://developers.google.com/maps/documentation/embed/start
[Accessed 17 September 2026].

Keep a Changelog, 2024. *Keep a Changelog*. [Online]
Available at: https://keepachangelog.com/
[Accessed 17 September 2026].

Mozilla Developer Network, 2024. *CSS: Cascading Style Sheets*. [Online]
Available at: https://developer.mozilla.org/en-US/docs/Web/CSS
[Accessed 17 September 2026].

Mozilla Developer Network, 2024. *Using media queries*. [Online]
Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
[Accessed 17 September 2026].

Mozilla Developer Network, 2024. *Pseudo-classes and pseudo-elements*. [Online]
Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
[Accessed 17 September 2026].

Mozilla Developer Network, 2024. *CSS Grid Layout*. [Online]
Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
[Accessed 17 September 2026].

W3Schools, 2024. *CSS Flexbox*. [Online]
Available at: https://www.w3schools.com/css/css3_flexbox.asp
[Accessed 17 September 2026].

W3Schools, 2024. *CSS Media Queries*. [Online]
Available at: https://www.w3schools.com/css/css3_pseudo_elements.asp
[Accessed 17 September 2026].


## Author

Nsuku Shipalana ST10516027
