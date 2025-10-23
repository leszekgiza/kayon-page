Version 2.3

- Fixed product category pages (Wodomierze, Ciepłomierze, etc.):
  - Show only first 3 features on main page, rest in "Czytaj więcej" popup
  - Added "Pobierz kartę katalogową" download button with link extraction
  - Changed product image background from gray to white
  - Moved GWF Sonico Nano to end of water meters list across all languages
  - Added modal popup with full feature list when clicking "Czytaj więcej"

Version 2.2

- Fixed navigation button hover state:
  - Changed hover from light (bg-white/15) to dark (bg-black/50)
  - Buttons now remain visible on hover instead of disappearing
  - Added border highlight on hover (border-white/50)
  - Fixed issue where buttons would blend into background on light pages

Version 2.1

- Added Privacy Policy and Cookie Policy pages:
  - Created separate pages for privacy and cookie policies in all three languages (PL/EN/DE)
  - Added content to translations: privacyPolicy and cookiePolicy sections
  - Created routes:
    - /polityka-prywatnosci, /privacy-policy, /datenschutz (Privacy Policy)
    - /polityka-cookies, /cookie-policy, /cookie-richtlinie (Cookie Policy)
  - Updated footer links to point to the new policy pages
  - Removed "Regulamin/Terms of use/Nutzungsbedingungen" placeholder from footer

Version 2.0

- Fixed "Produkty" (Products) section to match Figma design:
  - Standardized product names across all language versions (PL/EN/DE):
    - Changed "Engelman SensoStar" to "Engelmann SensoStar" (corrected spelling)
    - Changed "RC12 PloMeter" to "Rota PloMeter"
    - Moved "Repeater" from Infrastructure to Communication modules
    - Removed "Modularis ONE" and "wMBus RC12" from Communication modules
  - Reordered product categories: "Systemy i platformy" / "Systems and platforms" / "Systeme & Plattformen" now appears before "Infrastruktura" / "Infrastructure" / "Infrastruktur"

Version 1.9

- Fixed "Co oferujemy?" (Offer) section to match Figma design:
  - Changed background color from #35A8DD to #2cbceb (accent blue from Figma)
  - Fixed column proportions from 1.05:1 to 0.67:1 (text:cards) to match Figma layout
  - Replaced small bullet dots with Material Symbols "check" icons (24px x 24px)
  - Changed bullet icons from colored dots to check icons in accent blue (#2cbceb)

Version 1.8

- Fixed "Jak działamy?" (Benefits) section to match Figma design:
  - Changed background color from #E8A33C to #f4b250 (lighter golden yellow from Figma)
  - Fixed column proportions from 1.1:1 to 0.6:1 (text:cards) to match Figma layout
  - Cards column now takes significantly more space as designed

Version 1.7

- Fixed "Nasi klienci" (Our clients) section to match Figma design:
  - Changed background color from gradient (#2F8E5C to #4ABF73) to solid #53923e (darker olive green)
  - Removed non-existent description text "Rozumiemy potrzeby każdej strony..." across all languages (PL/EN/DE)
  - Updated ClientsSectionContent interface to remove description field

Version 1.6

- Fixed Hero section text alignment to match Figma design - changed from right-aligned to left-aligned text while keeping content positioned on the right side of the screen.

Version 1.5

- Removed "Rozwinięcie" / "Extended story" / "Hintergrund" heading from Hero section modal popup across all languages (PL/EN/DE).

Version 1.4

- Updated product translations with new water meter and infrastructure content across PL/EN/DE.
- Synced product detail cards and download links with the latest copy.
- Refreshed individual product descriptions for water, heat, and infrastructure portfolios using latest markdown content.
