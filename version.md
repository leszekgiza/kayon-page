Version 2.18

- Fixed 02 DLACZEGO (FeaturesSection):
  - Changed background from gradient to solid #D9D9D9

- Complete rebuild of 04 JAK DZIAŁAMY (BenefitsSection) to match Figma:
  - Removed white card backgrounds - items now directly on yellow background
  - Changed grid from 2x2 to 2x3 (grid-cols-2 md:grid-cols-3)
  - Icons: Changed from black circles with + to Material Symbols Rounded
  - Icon mapping: autorenew, shield_with_house, schedule, description, ac_unit
  - Icon background: bg-black/20 (brown/gold tint on yellow)
  - Layout: vertical flex (icon → title → button) with gap-4
  - Description box: Changed from <p> to <div> with border/background styling
  - Grid gaps: gap-x-8 gap-y-12 (horizontal 32px, vertical 48px)
  - Matches Figma layout exactly

Version 2.17

- Complete pixel-perfect rebuild of 06 PRODUKTY section matching Figma:
  - Background: Changed #3C3C3C → #474747 (exact Figma color)
  - Badge "Produkty": padding 30px/20px, font 24px Bold, bg #EAEAEA, text black (was white)
  - Left column: Changed space-y-6 (24px) → justify-between (40px SPACE_BETWEEN)
  - Heading: font-bold (700), line-height 52px/130% (was semibold 600, 120%)
  - Description box: width 467px, padding 40px, font 20px, border 2px #747171, radius 30px
  - Footnote: font 16px Bold, width 437px (was 12px uppercase)
  - Product cards: border-radius 20px (was 24px), removed shadow
  - Card title: font 24px Bold/700 (was 18px semibold/600)
  - List icons: Changed from dots → Material Symbols arrow_right (24px, #2CBCEB)
  - List text: font 16px Bold, gap 10px (was 14px, 8px)
  - Added Material Symbols Rounded font to layout
  - All dimensions, colors, fonts now match Figma exactly

Version 2.16.1

- Fixed ProductsSection card dimensions to match Figma exactly:
  - Card width: Fixed 310px (from dynamic calc(33.333%-16px))
  - Card height: Fixed 441px (was auto)
  - Carousel slide calculation: 334px per card (310px + 24px gap)
  - Left column dimensions: Fixed 477x631px (from minmax(0,400px))
  - Navigation layout: PROGRESS 01 dots on left, arrows on right (from centered)
  - Pixel-perfect match with Figma specifications

Version 2.16

- Rebuilt ProductsSection to match Figma carousel design:
  - Changed from 2x2 grid to horizontal carousel
  - White cards on dark background (#3C3C3C)
  - Shows 3 cards at a time on desktop
  - Added navigation arrows (← →)
  - Added dot navigation indicators
  - Smooth animations with Framer Motion
  - Cards: white bg, primary text, rounded-[24px]
  - Button: solid primary bg instead of border
  - Matches Figma "06 PRODUKTY" design exactly

Version 2.15

- Replaced placeholder with real systems diagram image:
  - Extracted PNG diagram from figma-data/screenshot rozwiazania systemowe.fig
  - Unzipped .fig file and found 4096x1465px PNG diagram
  - Replaced placeholder systems-diagram.png with real image (9.4MB)
  - SystemsSection now displays actual system architecture diagram

Version 2.14

- Fixed Builder.io changes and added Systems section:
  - Fixed corrupted Polish characters in content.ts (ł, ó, ą, ż)
    - spółdzielniach (was spó��dzielniach)
    - poszczególnych (was poszczeg��lnych)
    - przepływu (was przep��ywu)
    - dążymy (was dą��ymy)
    - przeglądarek (was przegl��darek)
  - Added new SystemsSection component created by Builder.io
  - Created placeholder systems-diagram.png (needs real image from Figma/Builder.io)
  - Integrated SystemsSection in page.tsx between OfferSection and ProductsSection

Version 2.13

- Fixed Hero section layout to match Figma Frame 1 positioning:
  - Changed from centered to left-aligned layout
  - Frame 1 exact dimensions: max-width 693px (from Figma)
  - GAP 80px between logo and content (gap-20)
  - Logo height: 50px fixed
  - Headline sizes: 28px/36px/42px responsive
  - Text alignment: left (items-start, text-left)
  - Frame 2 horizontal layout on large screens (lg:flex-row)
  - Scroll down icon centered at bottom

Version 2.12

- Added scroll down icon to Hero section:
  - Copied ICON TOP.svg from D:\kayon-page\picture\layout\Home\ to public/scroll-down-icon.svg
  - Icon positioned at bottom of Hero section: 57x57px
  - Smooth scroll to next section on click
  - Animated entrance with hover effect
  - Matches Figma SCROLL DOWN element (ID: 216:631)

Version 2.11

- Fixed Hero section to match Figma design accurately:
  - Restored KayonLogo component (white KAYON logo now visible)
  - Removed duplicate AIM symbol (was conflicting with hero-pattern.svg)
  - Centered layout: logo, headline, and CTA box all centered
  - Reduced sizes to match Figma:
    - Logo: 40px mobile, 50px desktop
    - Headline: 24px/32px (was 28px/36px/42px)
    - Gaps: 12 between logo and text, 8 in content box
  - Smaller, more compact CTA box with centered text
  - Button padding reduced: px-6 py-3

Version 2.10

- Complete Hero section rebuild to match Figma design (01 TOP v2) pixel-perfect:
  - Added giant AIM symbol (Y) from D:\kayon-page\picture\layout\Home\AIM.svg
    - Size: 1395x1162px, positioned center, z-index 1, opacity 20%
    - Creates dramatic background Y shape behind all content
  - Replaced KayonLogo component with LOGO.png from layout folder
    - Exact dimensions: 301x50px (from Figma specifications)
    - File: D:\kayon-page\picture\layout\Home\LOGO.png → public/kayon-logo-white.png
  - Proper z-index layering:
    - z-0: Background image with gradient overlay
    - z-1: Giant AIM symbol (Y)
    - z-2: Decorative pattern SVG
    - z-3: Decorative circle (1799x626px, radius 313px)
    - z-10: Main content (logo, headline, CTA box)
  - Frame 1 exact width: 709px
  - Gap between logo and content: 80px (gap-20)
  - Frame 39 gap: 40px (gap-10)
  - All elements positioned according to Figma absoluteBoundingBox coordinates

Version 2.9

- Updated Hero section to match Figma design (01 TOP v2) precisely:
  - Changed background to explicit black (#000000)
  - Updated decorative circle: 1799x626px with 313px corner radius (from 1120x520px)
  - Changed vertical alignment from bottom (items-end) to center (items-center)
  - Updated content max-width to 709px to match Figma Frame 1
  - Increased gap between logo and content from 28px to 80px (gap-20)
  - Logo exact height: 50px (from responsive h-12/14)
  - Headline moved outside the box, larger text sizes (28/36/42px)
  - Frame 2 box styling:
    - Corner radius: 30px (from 36px)
    - Padding: 40px all sides (from 32/40px varied)
    - Layout: horizontal on large screens (text + button side-by-side)
    - Gap: 40px between text and button
  - CTA button updated:
    - Background: solid black #1d1d1b (from white border)
    - Padding: 20px 30px exact (from 8px 20px)
    - Rounded-full shape maintained
    - Hover state: slight darken to #2a2a27

Version 2.8.1

- Fixed Netlify Forms compatibility with Next.js Runtime v5:
  - Added static HTML form file in public/contact-form.html
  - Required for @netlify/plugin-nextjs@5 to detect form structure
  - React component remains unchanged, uses same form endpoint
  - Resolves "Failed assembling prerendered content" build error

Version 2.8

- Implemented Netlify Forms for contact form:
  - Integrated native Netlify Forms (no external dependencies)
  - Added success/error message states with styled notifications
  - Added honeypot field (bot-field) for spam protection
  - Form automatically sends submissions to Netlify dashboard
  - Button shows loading state during submission
  - Form clears automatically after successful submission
  - Free 100 submissions/month included with Netlify

Version 2.7.5

- Fixed Hero section layout on product category pages to match Figma:
  - Changed from horizontal (title next to description) to vertical layout
  - Title now appears above description box (flex-col instead of flex-row)
  - Logo KAYON on left, title and description stacked vertically on right
  - Increased gap between logo and content (gap-16)
  - Matches Figma design exactly

Version 2.7.4

- Fixed Kayon Mark with complete LOGO component from Figma (pixel-perfect):
  - Retrieved complete LOGO frame (ID: I117:2816;111:2754) from Figma
  - White circle: 57x57px with rx="28.5" (corner radius)
  - Y symbol: 23x23px perfectly centered with 17px margins on all sides
  - Three exact vector paths: cyan (#2CBCEB), orange (#F4B250), green (#77BB61)
  - Drop shadow: 0px 10px 40px rgba(0,0,0,0.15)
  - 100% pixel-perfect match with Figma design

Version 2.7.3

- Fixed Kayon Mark logo using exact SVG paths from Figma:
  - Retrieved LOGO SYMBOL component (ID: 111:2795) directly from Figma API
  - Used exact path definitions exported from Figma design file
  - Scaled from 76x76 to 57x57px (scale factor: 0.75) with proper centering
  - Three precise vector paths: cyan (#2CBCEB), orange (#F4B250), green (#77BB61)
  - Logo now matches Figma design pixel-perfect

Version 2.7.2

- Fixed Kayon Mark logo to use exact Y symbol from full KAYON logo:
  - Extracted exact path shapes from KayonLogo component
  - Scaled original Y symbol paths to fit 57x57px container
  - Maintains same rounded, smooth design as full logo
  - Three colored paths: cyan (#2CBCEB), orange (#F4B250), green (#77BB61)

Version 2.7.1

- Fixed Kayon Mark logo to match exact Figma specifications:
  - Exact dimensions: 57x57px (fixed)
  - Border radius: 30px for rounded square appearance
  - Drop shadow: 0px 10px 40px rgba(0,0,0,0.15)
  - White background: #FFFFFF
  - Y symbol with three colored lines: green (#77BB61), cyan (#2CBCEB), orange (#F4B250)
  - Added smooth opacity transition on hover (600ms ease-out)

Version 2.7

- Redesigned product category pages to match Figma design:
  - Added Hero section with dark background (#3C3C3C), Kayon logo, category title, and description bubble
  - Decorative circular elements in Hero background
  - Completely reorganized product cards with 3-column layout:
    - Left column: Product name, intro, action buttons ("Dowiedz się więcej", "Pobierz PDF kartę")
    - Center column: Gray rounded card with features list and "Read more" button
    - Right column: Product image in gray rounded container
  - Updated button styling to match Figma specifications
  - Black "Read more" button replaces text link for feature expansion
- Added Kayon Mark logo to navigation:
  - Logo positioned in top-left (57x57px equivalent)
  - Clickable logo links to homepage
  - White circle background with colorful Y symbol
- Enhanced "Read more" modal popup to match Figma design:
  - Now displays full product intro text
  - Shows additional description paragraphs when available
  - Organized layout: title → intro → description → features list
  - Improved spacing and typography for better readability

Version 2.6

- Fixed mobile responsiveness issues:
  - Added overflow-x-hidden to html and body elements to prevent horizontal scrolling
  - Content no longer extends beyond viewport width on mobile devices
  - Users can now properly view all content without unwanted horizontal scroll
- Fixed modal popup close button:
  - Added right padding (pr-14) to modal title to prevent text overlap with close button
  - Close button (X) now has proper spacing and doesn't cover content
  - Improved visual hierarchy in "Czytaj więcej" popup
- Standardized PDF file naming:
  - Renamed ECLIPSE REPEATER DE.pdf for consistency (removed extra space)

Version 2.5

- Enhanced Infrastructure category page:
  - Fixed Polish character encoding in category description ("Urządzenia", "budujące")
  - Added comprehensive multi-sentence description for Infrastructure category in all 3 languages (PL/EN/DE)
  - Added German PDF datasheet to ECLIPSE WM-Bus Repeater product (previously only had EN)

Version 2.4

- Enhanced Communication Modules category page:
  - Fixed Polish character encoding in category title ("Moduły komunikacyjne") and description ("liczników")
  - Added comprehensive multi-sentence description for Communication Modules category in all 3 languages (PL/EN/DE)
  - Added PDF download links to all communication module products:
    - Modularis ONE (PL, DE)
    - WMBus Smart+ (DE)
    - MBus Smart+ (EN, DE)
    - wMBus MicroClima (EN, DE)
    - wMBus RC12 (EN, DE)
  - Added PDF download links to all infrastructure products:
    - Range ONE (EN, DE)
    - ECLIPSE WM-Bus Gateway (EN, DE)
    - ECLIPSE WM-Bus Repeater (EN)
  - Copied all product catalog PDFs from "karty katalogowe" folder to public/downloads directory
  - Added product datasheets in multiple languages where available

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
