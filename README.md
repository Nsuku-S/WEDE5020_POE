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
