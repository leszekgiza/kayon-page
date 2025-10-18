# KAYON Landing Page

Nowoczesna strona internetowa dla firmy KAYON - producenta systemów pomiarowych.

## Technologie

- **Next.js 15** - React framework z App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animacje i transitions
- **Figma** - Design system i layout

## Struktura projektu

```
kayon-page/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   └── lib/              # Utilities and helpers
├── figma-data/           # Figma design data (gitignored)
└── public/               # Static assets
```

## Sekcje strony (z Figma)

1. **Hero Section** - Główne hasło i CTA
2. **Logotypy partnerów** - Social proof
3. **Features** - Kluczowe korzyści
4. **Products Carousel** - Prezentacja produktów
5. **Benefits** - Szczegółowe opisy
6. **System współpracy** - Ekosystem KAYON

## Rozwój lokalny

### Wymagania
- Node.js 18+
- npm lub yarn

### Instalacja

```bash
# Klonowanie repozytorium
git clone https://github.com/leszekgiza/kayon-page.git
cd kayon-page

# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## Komendy

```bash
npm run dev      # Uruchom serwer deweloperski
npm run build    # Zbuduj wersję produkcyjną
npm run start    # Uruchom wersję produkcyjną
npm run lint     # Sprawdź kod z ESLint
```

## Deployment na Vercel

### Sposób 1: Przez Vercel Dashboard

1. Zaloguj się na [vercel.com](https://vercel.com)
2. Kliknij **"Add New Project"**
3. Zaimportuj repozytorium `leszekgiza/kayon-page`
4. Vercel automatycznie wykryje Next.js i skonfiguruje build
5. Kliknij **"Deploy"**

### Sposób 2: Przez Vercel CLI

```bash
# Zainstaluj Vercel CLI
npm i -g vercel

# Deploy projektu
vercel

# Deploy produkcyjny
vercel --prod
```

### Konfiguracja Vercel

Vercel automatycznie skonfiguruje:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Zmienne środowiskowe

Jeśli projekt będzie wymagał zmiennych środowiskowych (np. dla API, bazy danych), dodaj je w:

1. **Lokalnie**: Utwórz plik `.env.local`
2. **Vercel**: Dodaj w Settings → Environment Variables

Przykład `.env.local`:
```env
# API Keys (przykład)
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
```

## Design System

Design strony pochodzi z Figma:
- **Projekt**: KAYON landing page
- **Link**: [Figma Design](https://www.figma.com/design/enq1piet4C6nnUZT02kkn3/KAYON-landing-page)

Dane designu są przechowywane w katalogu `figma-data/` (nie commitowane do repozytorium).

## Następne kroki

- [ ] Implementacja komponentów z designu Figma
- [ ] Dodanie animacji z Framer Motion
- [ ] Optymalizacja obrazów
- [ ] SEO i meta tags
- [ ] Responsywność (mobile-first)
- [ ] Testy E2E
- [ ] Analytics integration

## Licencja

Projekt prywatny - © KAYON

## Kontakt

Dla pytań i sugestii: [email]

---

🤖 Wygenerowano z pomocą [Claude Code](https://claude.com/claude-code)
