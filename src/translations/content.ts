import { SupportedLanguage } from '@/components/LanguageProvider';

export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavigationContent {
  homeAriaLabel: string;
  primaryLinks: NavigationLink[];
  actions: {
    presentation: { label: string; ariaLabel: string };
    login: { label: string; ariaLabel: string };
    menu: { ariaLabel: string };
  };
  mobileMenu: {
    toggleAria: { open: string; close: string };
    presentation: string;
    login: string;
    menu: string;
  };
}

export interface MenuOverlayContent {
  closeAria: string;
  items: NavigationLink[];
  cta: { label: string; href: string };
}

export interface HeroContent {
  imageAlt: string;
  headline: string;
  body: string;
  ctaLabel: string;
  modalTitle: string;
  modalLead: string;
  modalBody: string[];
  modalCloseAria: string;
}

export interface FeatureContent {
  title: string;
  description: string;
  detail: string[];
}

export interface FeaturesSectionContent {
  cards: FeatureContent[];
  readMoreLabel: string;
  modalCloseAria: string;
}

export interface ClientCardContent {
  title: string;
  description: string;
}

export interface ClientsSectionContent {
  label: string;
  heading: string;
  description: string;
  highlight: string;
  cards: ClientCardContent[];
  dotAriaTemplate: string;
  previousAria: string;
  nextAria: string;
}

export interface BenefitContent {
  title: string;
  detail: string[];
}

export interface BenefitsSectionContent {
  label: string;
  heading: string;
  description: string;
  items: BenefitContent[];
  readMoreLabel: string;
  modalCloseAria: string;
}

export interface OfferCardContent {
  title: string;
  bullets: string[];
}

export interface OfferSectionContent {
  label: string;
  heading: string;
  description: string;
  cards: OfferCardContent[];
}

export interface ProductsGroupContent {
  title: string;
  items: string[];
}

export interface ProductsSectionContent {
  label: string;
  heading: string;
  description: string;
  footnote: string;
  groups: ProductsGroupContent[];
  ctaLabel: string;
}

export interface ProductDownloadContent {
  label: string;
  href: string;
}

export interface ProductDetailCardContent {
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  downloads: ProductDownloadContent[];
  readMoreLabel: string;
  readMoreHref: string;
}

export interface ProductDetailsPageContent {
  cards: ProductDetailCardContent[];
}

export interface FooterContent {
  legalLinks: NavigationLink[];
  copyright: string;
}

export interface ContentStructure {
  navigation: NavigationContent;
  menuOverlay: MenuOverlayContent;
  hero: HeroContent;
  features: FeaturesSectionContent;
  clients: ClientsSectionContent;
  benefits: BenefitsSectionContent;
  offer: OfferSectionContent;
  products: ProductsSectionContent;
  productPage: ProductDetailsPageContent;
  footer: FooterContent;
}

const pl: ContentStructure = {
  navigation: {
    homeAriaLabel: 'KAYON strona główna',
    primaryLinks: [
      { label: 'Dla kogo?', href: '#dla-kogo' },
      { label: 'Oferta', href: '#oferta' },
      { label: 'Produkty', href: '#produkty' },
    ],
    actions: {
      presentation: { label: 'Prezentacja', ariaLabel: 'Otwórz prezentację' },
      login: { label: 'Logowanie', ariaLabel: 'Przejdź do logowania' },
      menu: { ariaLabel: 'Otwórz menu' },
    },
    mobileMenu: {
      toggleAria: { open: 'Otwórz menu', close: 'Zamknij menu' },
      presentation: 'Prezentacja',
      login: 'Logowanie',
      menu: 'Menu',
    },
  },
  menuOverlay: {
    closeAria: 'Zamknij menu',
    items: [
      { label: 'Dla kogo?', href: '#dla-kogo' },
      { label: 'Oferta', href: '#oferta' },
      { label: 'Produkty', href: '#produkty' },
      { label: 'Kontakt', href: '#kontakt' },
    ],
    cta: { label: 'Platforma', href: '#platforma' },
  },
  hero: {
    imageAlt: 'Panorama farmy wiatrowej',
    headline:
      'W świecie, w którym technologia nadaje tempo zmianom, przewagę zyskują ci, którzy dysponują nią wcześniej.',
    body:
      'Nasze systemy zdalnego odczytu wody i ciepła już dziś działają zgodnie z unijnymi regulacjami, które zaczną obowiązywać w 2027 roku.',
    ctaLabel: 'Czytaj więcej',
    modalTitle: 'Rozwinięcie',
    modalLead:
      'Projektujemy nasze rozwiązania z myślą o wszystkich uczestnikach rynku — dystrybutorach, instalatorach, zarządcach nieruchomości, deweloperach, spółdzielniach, wspólnotach oraz pojedynczych lokatorach.',
    modalBody: [
      'Każdy zyskuje realną korzyść: gwarancję niezawodności, łatwiejszy montaż, stabilność działania, stały dostęp do danych, mniejsze ryzyko błędów w rozliczeniach oraz niższe rachunki.',
      'Dzięki urządzeniom pomiarowym i systemom Kayon możliwe jest nie tylko precyzyjne mierzenie zużycia wody i ciepła, ale też trwałe ograniczenie kosztów i zużycia energii. W efekcie daje to stabilne i harmonijne funkcjonowanie wszystkich zainteresowanych tym osób i podmiotów.',
    ],
    modalCloseAria: 'Zamknij okno',
  },
  features: {
    cards: [
      {
        title: 'Doświadczenie, które buduje zaufanie',
        description:
          'Setki wdrożeń pozwoliły nam dopracować technologię na miarę oczekiwań rynku.',
        detail: [
          'Kayon to polska firma technologiczna z wieloletnim doświadczeniem w projektowaniu i produkcji nowoczesnych urządzeń oraz systemów do zdalnego odczytu wody i ciepła.',
          'Nasz zespół tworzą inżynierowie i specjaliści z ponad dwudziestoletnim doświadczeniem w branży pomiarowej — ludzie, którzy współtworzyli obowiązujące dziś standardy.',
          'Dlatego nasze rozwiązania są dopracowane technicznie, trwałe, sprawdzone i przyjazne w obsłudze — gotowe na wyzwania przyszłości.',
        ],
      },
      {
        title: 'Technologia gotowa na przyszłość',
        description:
          'Urządzenia spełniające normy, które dopiero staną się obowiązkowe w nadchodzących latach.',
        detail: [
          'Przewaga naszych rozwiązań wynika nie tylko z jakości urządzeń, ale także z oprogramowania. System ALL in KAYON umożliwia zarządzanie i raportowanie danych z tysięcy liczników jednocześnie.',
          'Zastępuje czasochłonne papierowe raporty, rozbudowane arkusze i inne narzędzia jednym, prostym środowiskiem pracy dla wszystkich interesariuszy. Przejrzysty interfejs pozwala administratorom, zarządcom i instalatorom łatwo kontrolować zużycie, generować raporty i komunikować się z lokatorami.',
          'ALL in KAYON umożliwia korzystanie z dowolnych urządzeń pomiarowych dowolnych producentów, dając klientom swobodę wyboru i niezależność od zamkniętych systemów.',
        ],
      },
      {
        title: 'Kayon zyskuje uznanie w całej Europie',
        description:
          'Partnerzy z wielu krajów wybierają KAYON jako standard pomiarów i zarządzania energią.',
        detail: [
          'Nasze rozwiązania działają w Polsce, Czechach, na Ukrainie oraz rynkach Europy Zachodniej.',
          'Od 2025 roku są dostępne w Niemczech i całej Europie za pośrednictwem firmy GWF AG — renomowanego szwajcarskiego dostawcy precyzyjnych technologii pomiarowych.',
          'Obecnie Kayon rozwija również własną sieć partnerów i dystrybucji na rynku niemieckim.',
        ],
      },
    ],
    readMoreLabel: 'Czytaj więcej',
    modalCloseAria: 'Zamknij okno',
  },
  clients: {
    label: 'Nasi klienci',
    heading:
      'Kayon oferuje konkretną odpowiedź na kluczowe wymagania wszystkich grup klientów',
    description:
      'Rozumiemy potrzeby każdej strony — od dystrybutorów i instalatorów po administratorów, zarządców oraz mieszkańców.',
    highlight:
      'To wszystko realizujemy z zachowaniem wysokiej efektywności energetycznej i minimalnego wpływu na środowisko. Dobrze zaprojektowane urządzenia muszą działać oszczędnie i bezawaryjnie — z korzyścią dla ludzi i planety.',
    cards: [
      {
        title: 'Dystrybutorzy',
        description:
          'Cenią elastyczność dopasowania technologii do lokalnych standardów oraz łatwą integrację ALL in KAYON z istniejącymi platformami. Mogą oferować kompletne, skalowalne rozwiązanie bez kosztownych modyfikacji.',
      },
      {
        title: 'Firmy instalatorskie',
        description:
          'Doceniają intuicyjny montaż, pełną kompatybilność komponentów i odporność urządzeń na błędy instalacyjne. Instalacja przebiega szybko, bez specjalistycznych narzędzi, a konfiguracja to kilka prostych kroków.',
      },
      {
        title: 'Administratorzy budynków',
        description:
          'Zyskują pełną kontrolę nad infrastrukturą w jednym miejscu. ALL in KAYON łączy dane z wielu obiektów — od liczników po alerty i koszty — w czasie rzeczywistym.',
      },
      {
        title: 'Zarządcy nieruchomości',
        description:
          'Mają pewność nieprzerwanych odczytów i zdalny dostęp do uporządkowanych danych. System umożliwia szybkie raportowanie zużycia, identyfikację nieprawidłowości i natychmiastowy dostęp do historii pomiarów.',
      },
      {
        title: 'Wspólnoty i spółdzielnie',
        description:
          'Zyskują przejrzyste rozliczenia i łatwą weryfikację zużycia wśród mieszkańców. Każdy lokator ma dostęp do własnych danych, co odciąża administrację i redukuje zapytania.',
      },
    ],
    dotAriaTemplate: 'Pokaż grupę %d',
    previousAria: 'Poprzednia grupa klientów',
    nextAria: 'Następna grupa klientów',
  },
  benefits: {
    label: 'Jak działamy?',
    heading: 'Dostarczamy urządzenia i serwis, które minimalizują koszty',
    description:
      'Rozwiązania Kayon są projektowane tak, by każdy uczestnik łańcucha interesariuszy — od dystrybutora i instalatora po zarządcę oraz mieszkańca — zyskał realne oszczędności, mniej pracy operacyjnej i większą kontrolę.',
    items: [
      {
        title: 'Opłaty wyłącznie za realne zużycie',
        detail: [
          'Dokładne i stabilne pomiary eliminują szacowanie oraz niedoszacowania.',
          'Przejrzyste, sprawiedliwe rozliczenia budują zaufanie i długoterminową współpracę.',
        ],
      },
      {
        title: 'Brak przestojów i awarii',
        detail: [
          'Urządzenia działają do 15 lat na jednej baterii.',
          'Instalatorzy i administratorzy mogą skupić się na zarządzaniu zamiast na naprawach.',
        ],
      },
      {
        title: 'Oszczędność czasu przy instalacji',
        detail: [
          'Sprzęt typu plug & play można szybko zamontować nawet w trudnych warunkach.',
          'Konfiguracja to kilka prostych kroków i może odbywać się zdalnie, bez dostępu na miejscu.',
        ],
      },
      {
        title: 'Proste zarządzanie dużymi zbiorami danych',
        detail: [
          'Intuicyjne aplikacje mobilne i webowe są dostępne z każdego miejsca.',
          'Odczyty, historia, raporty i alarmy są uporządkowane tak, by maksymalnie ułatwić pracę zarządcom i wspólnotom.',
        ],
      },
      {
        title: 'Pełna kompatybilność i elastyczność',
        detail: [
          'Nasze urządzenia obsługują popularne protokoły (MBus, wMBus, LoRaWAN, NB-IoT, LTE, Bluetooth).',
          'Klient decyduje, z jakiego sprzętu chce korzystać, zachowując niezależność od pojedynczych producentów.',
        ],
      },
    ],
    readMoreLabel: 'Czytaj więcej',
    modalCloseAria: 'Zamknij okno',
  },
  offer: {
    label: 'Co oferujemy?',
    heading: 'Łączymy nowoczesne produkty z systemowym podejściem',
    description:
      'Usprawniamy codzienne funkcjonowanie i gwarantujemy satysfakcję wszystkim użytkownikom — od dystrybutora po odbiorcę końcowego.',
    cards: [
      {
        title: 'Produkty zaprojektowane z myślą o użytkowniku',
        bullets: [
          'działają długo — nawet 15 lat na baterii,',
          'są niezawodne w wymagających warunkach,',
          'są łatwe w montażu i konfiguracji (bez specjalistycznych narzędzi),',
          'są odporne na błędy instalacyjne.',
        ],
      },
      {
        title: 'Jeden system ALL in KAYON — współpraca wszystkich elementów',
        bullets: [
          'zdalny odczyt w czasie rzeczywistym, bez wizyt na miejscu,',
          'automatyczne alerty i raporty, które oszczędzają czas,',
          'pełna kontrola i zdalne aktualizacje oprogramowania (OTA — Over-the-Air),',
          'mniej stresu i mniej pracy dla instalatorów, administratorów i użytkowników.',
        ],
      },
    ],
  },
  products: {
    label: 'Produkty',
    heading: 'Produkty wyznaczające nowy standard pomiarów',
    description:
      'Dostarczamy narzędzia do oszczędności, automatyzacji i kontroli. Nasze produkty tworzą spójny system ALL in KAYON, w którym każdy element współpracuje z pozostałymi.',
    footnote:
      'Produkcja wszystkich urządzeń Kayon odbywa się w 100% na terenie Unii Europejskiej, zgodnie z normami CE, RED i EMC.',
    groups: [
      {
        title: 'Wodomierze',
        items: ['Wehrle', 'Maddalena', 'Wassergeräte', 'SonicoNano (GWF)', 'Apator Smart'],
      },
      {
        title: 'Ciepłomierze',
        items: ['Engelman SensoStar', 'Maddalena MicroClima', 'RC12 PloMeter'],
      },
      {
        title: 'Moduły komunikacyjne',
        items: ['Modularis One', 'wMBus Smart+', 'MBus Smart+', 'wMBus MicroClima', 'wMBus RC12'],
      },
      {
        title: 'Systemy i platformy',
        items: [
          'Aplikacja mobilna Route One',
          'Platforma OpenMetering (2WayCom, FOTA)',
          'Portal dystrybutora',
          'Dashboard technologiczny',
        ],
      },
      {
        title: 'Infrastruktura',
        items: ['Range One', 'Koncentrator AC', 'Koncentrator BAT', 'Repeater'],
      },
    ],
    ctaLabel: 'Dowiedz się więcej',
  },

productPage: {
  cards: [
    {
      title: 'Wherle',
      subtitle: 'Lorem ipsum',
      description:
        'Modularis One to zaawansowany, kompaktowy modul radiowy w standardzie wM-Bus 868 MHz, przeznaczony do zdalnego odczytu wodomierzy Modularis.',
      features: [
        'Dwustronna zdalna komunikacja do zmiany konfiguracji, kasowania alarmow i diagnostyki',
        'Kompatybilny z wieloma markami wodomierzy Modularis i innymi producentami',
        'Rownolegla transmisja radiotelegramow walk-by i AMR (stacjonarny odczyt)',
      ],
      downloads: [
        { label: 'Download PDF ENG', href: '#' },
        { label: 'Download PDF GER', href: '#' },
      ],
      readMoreLabel: 'Read more',
      readMoreHref: '#',
    },
    {
      title: 'Maddalena',
      description:
        'Modularis One to zaawansowany, kompaktowy modul radiowy w standardzie wM-Bus 868 MHz, przeznaczony do zdalnego odczytu wodomierzy Modularis.',
      features: [
        'Dwustronna zdalna komunikacja do zmiany konfiguracji, kasowania alarmow i diagnostyki',
        'Kompatybilny z wieloma markami wodomierzy Modularis i innymi producentami',
        'Rownolegla transmisja radiotelegramow walk-by i AMR (stacjonarny odczyt)',
      ],
      downloads: [
        { label: 'Download PDF ENG', href: '#' },
        { label: 'Download PDF GER', href: '#' },
      ],
      readMoreLabel: 'Read more',
      readMoreHref: '#',
    },
    {
      title: 'Wassergerate',
      description:
        'Modularis One to zaawansowany, kompaktowy modul radiowy w standardzie wM-Bus 868 MHz, przeznaczony do zdalnego odczytu wodomierzy Modularis.',
      features: [
        'Dwustronna zdalna komunikacja do zmiany konfiguracji, kasowania alarmow i diagnostyki',
        'Kompatybilny z wieloma markami wodomierzy Modularis i innymi producentami',
        'Rownolegla transmisja radiotelegramow walk-by i AMR (stacjonarny odczyt)',
      ],
      downloads: [
        { label: 'Download PDF ENG', href: '#' },
        { label: 'Download PDF GER', href: '#' },
      ],
      readMoreLabel: 'Read more',
      readMoreHref: '#',
    },
    {
      title: 'GWF',
      subtitle: 'SonicoNano',
      description:
        'Modularis One to zaawansowany, kompaktowy modul radiowy w standardzie wM-Bus 868 MHz, przeznaczony do zdalnego odczytu wodomierzy Modularis.',
      features: [
        'Dwustronna zdalna komunikacja do zmiany konfiguracji, kasowania alarmow i diagnostyki',
        'Kompatybilny z wieloma markami wodomierzy Modularis i innymi producentami',
        'Rownolegla transmisja radiotelegramow walk-by i AMR (stacjonarny odczyt)',
      ],
      downloads: [
        { label: 'Download PDF ENG', href: '#' },
        { label: 'Download PDF GER', href: '#' },
      ],
      readMoreLabel: 'Read more',
      readMoreHref: '#',
    },
    {
      title: 'Apator',
      subtitle: 'Smart',
      description:
        'Modularis One to zaawansowany, kompaktowy modul radiowy w standardzie wM-Bus 868 MHz, przeznaczony do zdalnego odczytu wodomierzy Modularis.',
      features: [
        'Dwustronna zdalna komunikacja do zmiany konfiguracji, kasowania alarmow i diagnostyki',
        'Kompatybilny z wieloma markami wodomierzy Modularis i innymi producentami',
        'Rownolegla transmisja radiotelegramow walk-by i AMR (stacjonarny odczyt)',
      ],
      downloads: [
        { label: 'Download PDF ENG', href: '#' },
        { label: 'Download PDF GER', href: '#' },
      ],
      readMoreLabel: 'Read more',
      readMoreHref: '#',
    },
  ],
},

  footer: {
    legalLinks: [
      { label: 'Polityka prywatności', href: '#' },
      { label: 'Regulamin', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
    copyright: 'KAYON',
  },
};

const en: ContentStructure = {
  navigation: {
    homeAriaLabel: 'KAYON homepage',
    primaryLinks: [
      { label: 'Who we help', href: '#dla-kogo' },
      { label: 'Offer', href: '#oferta' },
      { label: 'Products', href: '#produkty' },
    ],
    actions: {
      presentation: { label: 'Presentation', ariaLabel: 'Open presentation' },
      login: { label: 'Sign in', ariaLabel: 'Go to sign in page' },
      menu: { ariaLabel: 'Open menu' },
    },
    mobileMenu: {
      toggleAria: { open: 'Open menu', close: 'Close menu' },
      presentation: 'Presentation',
      login: 'Sign in',
      menu: 'Menu',
    },
  },
  menuOverlay: {
    closeAria: 'Close menu',
    items: [
      { label: 'Who we help', href: '#dla-kogo' },
      { label: 'Offer', href: '#oferta' },
      { label: 'Products', href: '#produkty' },
      { label: 'Contact', href: '#kontakt' },
    ],
    cta: { label: 'Platform', href: '#platforma' },
  },
  hero: {
    imageAlt: 'Wind farm panorama',
    headline:
      'In a world where technology sets the pace of change, those who embrace it earlier gain the advantage.',
    body:
      'Our remote meter-reading systems for water and heat already comply with EU regulations that will become mandatory in 2027.',
    ctaLabel: 'Learn more',
    modalTitle: 'Extended story',
    modalLead:
      'We design our solutions with every market participant in mind — distributors, installers, property managers, developers, housing cooperatives, homeowner associations and individual residents.',
    modalBody: [
      'Each of them benefits in a tangible way: guaranteed reliability, easier installation, stable operation, constant access to data, lower risk of billing errors and lower costs.',
      'With Kayon measurement devices and systems you can not only precisely measure water and heat consumption, but also permanently reduce operating costs and energy use. The result is a stable and harmonious environment for everyone involved.',
    ],
    modalCloseAria: 'Close dialog',
  },
  features: {
    cards: [
      {
        title: 'Experience that builds trust',
        description:
          'Hundreds of implementations have allowed us to refine the technology to match market expectations.',
        detail: [
          'Kayon is a Polish technology company with years of experience in designing and manufacturing modern devices and systems for remote water and heat metering.',
          'Our team consists of engineers and specialists with over two decades of metering expertise — people who co-created today’s industry standards.',
          'Thanks to them our solutions are technically refined, durable, proven and user-friendly — ready for the challenges of the future.',
        ],
      },
      {
        title: 'Technology ready for tomorrow',
        description:
          'Devices that already meet the standards which will become mandatory over the coming years.',
        detail: [
          'Our advantage comes not only from hardware quality but also from software. The ALL in KAYON system enables the management and reporting of data from thousands of meters simultaneously.',
          'It replaces time-consuming paper reports, sprawling spreadsheets and disparate tools with one simple workspace for every stakeholder. A clear interface lets administrators, managers and installers control consumption, generate reports and stay in touch with residents.',
          'ALL in KAYON lets you connect metering devices from any manufacturer, giving customers the freedom to choose and independence from closed ecosystems.',
        ],
      },
      {
        title: 'Kayon is recognised across Europe',
        description:
          'Partners throughout Europe choose KAYON as their standard for metering and energy management.',
        detail: [
          'Our solutions are operating successfully in Poland, the Czech Republic, Ukraine and Western Europe.',
          'Since 2025 they have been available in Germany and across Europe via GWF AG — a renowned Swiss provider of precision metering technology.',
          'Today Kayon is also present on the German market independently, developing its own partner and distribution network.',
        ],
      },
    ],
    readMoreLabel: 'Learn more',
    modalCloseAria: 'Close dialog',
  },
  clients: {
    label: 'Our clients',
    heading:
      'Kayon delivers a precise answer to the needs of every stakeholder group',
    description:
      'We understand the expectations of distributors, installers, administrators, managers and residents alike.',
    highlight:
      'We deliver all of this while maintaining high energy efficiency and minimising environmental impact. Well-designed systems should operate efficiently and without failure — to the benefit of people and the planet.',
    cards: [
      {
        title: 'Distributors',
        description:
          'Value the flexibility of adapting technology to local requirements and the straightforward integration of ALL in KAYON with existing distribution platforms. They can offer a complete, scalable solution without costly customisation.',
      },
      {
        title: 'Installation companies',
        description:
          'Appreciate the intuitive installation process, full component compatibility and the equipment’s resilience to installation mistakes. Deployment is fast, requires no specialised tools and configuration takes just a few logical steps.',
      },
      {
        title: 'Building administrators',
        description:
          'Gain full control of their infrastructure in one place. ALL in KAYON consolidates data from many buildings — from meters to alerts and costs — in real time.',
      },
      {
        title: 'Property managers',
        description:
          'Rely on uninterrupted readings and remote access to well-organised data. The system enables rapid consumption reporting, anomaly detection and instant access to the entire metering history.',
      },
      {
        title: 'Housing cooperatives and HOAs',
        description:
          'Benefit from transparent billing and straightforward verification of individual consumption. Every resident can track their usage, easing the load on administrative teams and reducing enquiries.',
      },
    ],
    dotAriaTemplate: 'Show client group %d',
    previousAria: 'Previous client group',
    nextAria: 'Next client group',
  },
  benefits: {
    label: 'How we operate',
    heading: 'We provide devices and services that minimise costs',
    description:
      'Kayon solutions are designed so that every stakeholder — from distributor and installer to manager and resident — gains real savings, lower operating expenses and greater control.',
    items: [
      {
        title: 'Pay only for actual consumption',
        detail: [
          'Accurate, stable readings remove the need for estimates and eliminate underbilling.',
          'Transparent, fair settlements build trust and foster long-term cooperation.',
        ],
      },
      {
        title: 'No downtime or failures',
        detail: [
          'Devices operate for up to 15 years on a single battery.',
          'Installers and administrators can focus on management rather than maintenance.',
        ],
      },
      {
        title: 'Installation time saved',
        detail: [
          'Plug & play hardware can be installed quickly even in demanding environments.',
          'Configuration takes just a few simple steps and can be done remotely without site access.',
        ],
      },
      {
        title: 'Straightforward management of large data sets',
        detail: [
          'Intuitive mobile and web apps are accessible from anywhere.',
          'Readings, history, reports and alerts are organised to make daily work easier for managers and communities.',
        ],
      },
      {
        title: 'Full compatibility and flexibility',
        detail: [
          'Our devices support the most popular protocols (MBus, wMBus, LoRaWAN, NB-IoT, LTE, Bluetooth).',
          'Customers choose the hardware that best fits their needs without vendor lock-in.',
        ],
      },
    ],
    readMoreLabel: 'Learn more',
    modalCloseAria: 'Close dialog',
  },
  offer: {
    label: 'What we offer',
    heading: 'We combine modern products with a system-wide approach',
    description:
      'We streamline daily operations and keep every user of the system satisfied — from distributors to end users.',
    cards: [
      {
        title: 'Products designed to benefit the end user',
        bullets: [
          'operate for years — up to 15 on a single battery,',
          'remain reliable in demanding environments,',
          'are easy to install and configure (no specialised tools),',
          'withstand installation errors.',
        ],
      },
      {
        title: 'One system — ALL in KAYON working together',
        bullets: [
          'real-time remote readings without site visits,',
          'automatic alerts and reports that save time,',
          'full control and remote firmware updates (OTA — Over-the-Air),',
          'less stress and less manual work for installers, administrators and users.',
        ],
      },
    ],
  },
  products: {
    label: 'Products',
    heading: 'Products that set a new measurement standard',
    description:
      'We deliver more than technology — we provide tools for savings, automation and control. Our products form a cohesive ALL in KAYON ecosystem where every component works together.',
    footnote:
      'All Kayon devices are manufactured entirely within the European Union in compliance with CE, RED and EMC standards.',
    groups: [
      {
        title: 'Water meters',
        items: ['Wehrle', 'Maddalena', 'Wassergeräte', 'SonicoNano (GWF)', 'Apator Smart'],
      },
      {
        title: 'Heat meters',
        items: ['Engelman SensoStar', 'Maddalena MicroClima', 'RC12 PloMeter'],
      },
      {
        title: 'Communication modules',
        items: ['Modularis One', 'wMBus Smart+', 'MBus Smart+', 'wMBus MicroClima', 'wMBus RC12'],
      },
      {
        title: 'Systems and platforms',
        items: [
          'Route One mobile app',
          'OpenMetering platform (2WayCom, FOTA)',
          'Distributor portal',
          'Technology dashboard',
        ],
      },
      {
        title: 'Infrastructure',
        items: ['Range One', 'AC concentrator', 'BAT concentrator', 'Repeater'],
      },
    ],
    ctaLabel: 'Learn more',
  },

productPage: {
  cards: [
    {
      title: 'Wherle',
      subtitle: 'Lorem ipsum',
      description:
        'Modularis One is an advanced, compact radio module in the wM-Bus 868 MHz standard, designed for remote reading of Modularis water meters.',
      features: [
        'Two-way remote communication for reconfiguration, alarm resets, and diagnostics',
        'Compatible with many Modularis water meter brands and other manufacturers',
        'Parallel transmission of walk-by and AMR (stationary) radio telegrams',
      ],
      downloads: [
        { label: 'Download PDF ENG', href: '#' },
        { label: 'Download PDF GER', href: '#' },
      ],
      readMoreLabel: 'Read more',
      readMoreHref: '#',
    },
    {
      title: 'Maddalena',
      description:
        'Modularis One is an advanced, compact radio module in the wM-Bus 868 MHz standard, designed for remote reading of Modularis water meters.',
      features: [
        'Two-way remote communication for reconfiguration, alarm resets, and diagnostics',
        'Compatible with many Modularis water meter brands and other manufacturers',
        'Parallel transmission of walk-by and AMR (stationary) radio telegrams',
      ],
      downloads: [
        { label: 'Download PDF ENG', href: '#' },
        { label: 'Download PDF GER', href: '#' },
      ],
      readMoreLabel: 'Read more',
      readMoreHref: '#',
    },
    {
      title: 'Wassergerate',
      description:
        'Modularis One is an advanced, compact radio module in the wM-Bus 868 MHz standard, designed for remote reading of Modularis water meters.',
      features: [
        'Two-way remote communication for reconfiguration, alarm resets, and diagnostics',
        'Compatible with many Modularis water meter brands and other manufacturers',
        'Parallel transmission of walk-by and AMR (stationary) radio telegrams',
      ],
      downloads: [
        { label: 'Download PDF ENG', href: '#' },
        { label: 'Download PDF GER', href: '#' },
      ],
      readMoreLabel: 'Read more',
      readMoreHref: '#',
    },
    {
      title: 'GWF',
      subtitle: 'SonicoNano',
      description:
        'Modularis One is an advanced, compact radio module in the wM-Bus 868 MHz standard, designed for remote reading of Modularis water meters.',
      features: [
        'Two-way remote communication for reconfiguration, alarm resets, and diagnostics',
        'Compatible with many Modularis water meter brands and other manufacturers',
        'Parallel transmission of walk-by and AMR (stationary) radio telegrams',
      ],
      downloads: [
        { label: 'Download PDF ENG', href: '#' },
        { label: 'Download PDF GER', href: '#' },
      ],
      readMoreLabel: 'Read more',
      readMoreHref: '#',
    },
    {
      title: 'Apator',
      subtitle: 'Smart',
      description:
        'Modularis One is an advanced, compact radio module in the wM-Bus 868 MHz standard, designed for remote reading of Modularis water meters.',
      features: [
        'Two-way remote communication for reconfiguration, alarm resets, and diagnostics',
        'Compatible with many Modularis water meter brands and other manufacturers',
        'Parallel transmission of walk-by and AMR (stationary) radio telegrams',
      ],
      downloads: [
        { label: 'Download PDF ENG', href: '#' },
        { label: 'Download PDF GER', href: '#' },
      ],
      readMoreLabel: 'Read more',
      readMoreHref: '#',
    },
  ],
},

  footer: {
    legalLinks: [
      { label: 'Privacy policy', href: '#' },
      { label: 'Terms of use', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
    copyright: 'KAYON',
  },
};

const de: ContentStructure = {
  navigation: {
    homeAriaLabel: 'KAYON Startseite',
    primaryLinks: [
      { label: 'Für wen?', href: '#dla-kogo' },
      { label: 'Angebot', href: '#oferta' },
      { label: 'Produkte', href: '#produkty' },
    ],
    actions: {
      presentation: { label: 'Präsentation', ariaLabel: 'Präsentation öffnen' },
      login: { label: 'Anmelden', ariaLabel: 'Zur Anmeldung wechseln' },
      menu: { ariaLabel: 'Menü öffnen' },
    },
    mobileMenu: {
      toggleAria: { open: 'Menü öffnen', close: 'Menü schließen' },
      presentation: 'Präsentation',
      login: 'Anmelden',
      menu: 'Menü',
    },
  },
  menuOverlay: {
    closeAria: 'Menü schließen',
    items: [
      { label: 'Für wen?', href: '#dla-kogo' },
      { label: 'Angebot', href: '#oferta' },
      { label: 'Produkte', href: '#produkty' },
      { label: 'Kontakt', href: '#kontakt' },
    ],
    cta: { label: 'Plattform', href: '#platforma' },
  },
  hero: {
    imageAlt: 'Panorama eines Windparks',
    headline:
      'In einer Welt, in der Technologie das Innovationstempo vorgibt, verschaffen sich diejenigen einen Vorsprung, die sie früh einsetzen.',
    body:
      'Unsere Systeme zur Fernablesung von Wasser- und Wärmezählern erfüllen bereits heute die EU-Vorgaben, die ab 2027 verpflichtend werden.',
    ctaLabel: 'Mehr erfahren',
    modalTitle: 'Hintergrund',
    modalLead:
      'Wir entwickeln unsere Lösungen für alle Marktteilnehmenden — Distributoren, Installationsbetriebe, Hausverwaltungen, Projektentwickler, Wohnungsgenossenschaften, Eigentümergemeinschaften sowie einzelne Bewohnerinnen und Bewohner.',
    modalBody: [
      'Jede dieser Gruppen profitiert konkret: zuverlässiger Betrieb, einfachere Montage, stabile Leistung, ständiger Datenzugriff, geringeres Fehlerrisiko bei Abrechnungen und niedrigere Kosten.',
      'Mit den Messgeräten und Systemen von Kayon lassen sich nicht nur Wasser- und Wärmeverbräuche präzise erfassen, sondern auch Kosten und Energieverbrauch dauerhaft senken. Das Ergebnis ist ein stabiles und harmonisches Umfeld für alle Beteiligten.',
    ],
    modalCloseAria: 'Dialog schließen',
  },
  features: {
    cards: [
      {
        title: 'Erfahrung, die Vertrauen schafft',
        description:
          'Hunderte Projekte haben uns geholfen, die Technologie perfekt auf die Markterwartungen abzustimmen.',
        detail: [
          'Kayon ist ein polnisches Technologieunternehmen mit langjähriger Erfahrung in der Entwicklung und Produktion moderner Geräte sowie Systeme zur Fernablesung von Wasser- und Wärmezählern.',
          'Unser Team besteht aus Ingenieurinnen, Ingenieuren und Fachleuten mit über zwanzig Jahren Erfahrung in der Messtechnik — Menschen, die die heutigen Standards maßgeblich geprägt haben.',
          'Deshalb sind unsere Lösungen technisch ausgereift, langlebig, erprobt und benutzerfreundlich — bereit für die Herausforderungen der Zukunft.',
        ],
      },
      {
        title: 'Technologie, die der Zukunft voraus ist',
        description:
          'Geräte, die schon heute die Standards der kommenden Jahre erfüllen.',
        detail: [
          'Unser Vorsprung basiert nicht nur auf hervorragender Hardware, sondern auch auf Software. Das System ALL in KAYON ermöglicht das gleichzeitige Verwalten und Auswerten von Daten aus Tausenden Zählern.',
          'Papierprotokolle, umfangreiche Tabellen und Insellösungen werden durch eine zentrale, einfache Arbeitsumgebung für alle Stakeholder ersetzt. Eine klare Oberfläche erlaubt Administratoren, Verwaltern und Installationsbetrieben, Verbrauchswerte zu überwachen, Berichte zu erstellen und mit Bewohnerinnen und Bewohnern zu kommunizieren.',
          'ALL in KAYON unterstützt Messgeräte verschiedenster Hersteller, sodass Kundinnen und Kunden die volle Wahlfreiheit behalten und unabhängig von proprietären Systemen bleiben.',
        ],
      },
      {
        title: 'Kayon überzeugt europaweit',
        description:
          'Partner in ganz Europa wählen KAYON als ihren Standard für Messung und Energiemanagement.',
        detail: [
          'Unsere Lösungen sind bereits in Polen, Tschechien, der Ukraine und Westeuropa erfolgreich im Einsatz.',
          'Seit 2025 sind sie über die GWF AG — einen renommierten Schweizer Anbieter präziser Messtechnik — auch in Deutschland und ganz Europa verfügbar.',
          'Außerdem baut Kayon auf dem deutschen Markt ein eigenes Partner- und Vertriebsnetzwerk auf.',
        ],
      },
    ],
    readMoreLabel: 'Mehr erfahren',
    modalCloseAria: 'Dialog schließen',
  },
  clients: {
    label: 'Unsere Kundinnen und Kunden',
    heading: 'Kayon bietet für jede Zielgruppe die passende Antwort',
    description:
      'Wir kennen die Anforderungen von Distributoren, Installationsbetrieben, Verwaltungen und Bewohnerinnen gleichermaßen.',
    highlight:
      'Wir gewährleisten all das und behalten zugleich Energieeffizienz und Umweltschutz im Blick. Gut gestaltete Systeme sollen effizient und störungsfrei laufen — zum Vorteil von Menschen und Umwelt.',
    cards: [
      {
        title: 'Distributoren',
        description:
          'Schätzen die Flexibilität, unsere Technologie an lokale Standards anzupassen, sowie die einfache Integration von ALL in KAYON in bestehende Plattformen. Sie bieten ein komplettes, skalierbares Produkt ohne kostspielige Sonderanpassungen an.',
      },
      {
        title: 'Installationsbetriebe',
        description:
          'Profitieren von der intuitiven Montage, vollständigen Kompatibilität aller Komponenten und der hohen Fehlertoleranz der Geräte. Die Installation geht schnell, benötigt keine Spezialwerkzeuge und die Konfiguration umfasst nur wenige Schritte.',
      },
      {
        title: 'Gebäudeverwalter',
        description:
          'Erhalten die volle Kontrolle über ihre Infrastruktur an einem Ort. ALL in KAYON bündelt Daten vieler Objekte — von Zählern über Warnungen bis zu Kosten — in Echtzeit.',
      },
      {
        title: 'Immobilienmanager',
        description:
          'Verlassen sich auf lückenlose Ablesungen und den Fernzugriff auf strukturierte Daten. Das System ermöglicht schnelle Verbrauchsberichte, erkennt Unregelmäßigkeiten und stellt die komplette Historie bereit.',
      },
      {
        title: 'Wohnungsgenossenschaften & WEGs',
        description:
          'Profitieren von transparenten Abrechnungen und einer einfachen Kontrolle individueller Verbräuche. Jede Bewohnerin und jeder Bewohner kann den eigenen Verbrauch einsehen — das entlastet die Verwaltung und reduziert Rückfragen.',
      },
    ],
    dotAriaTemplate: 'Kundengruppe %d anzeigen',
    previousAria: 'Vorherige Kundengruppe',
    nextAria: 'Nächste Kundengruppe',
  },
  benefits: {
    label: 'Wie wir arbeiten',
    heading: 'Wir liefern Geräte und Services, die Kosten minimieren',
    description:
      'Kayon-Lösungen sind so konzipiert, dass jede beteiligte Person — vom Distributor über den Installateur bis zur Verwaltung und den Bewohnerinnen — echte Einsparungen erzielt, Ausgaben reduziert, manuelle Arbeit minimiert und mehr Kontrolle erhält.',
    items: [
      {
        title: 'Abrechnung nur des tatsächlichen Verbrauchs',
        detail: [
          'Präzise, stabile Messungen eliminieren Schätzungen und Untererfassungen.',
          'Transparente, faire Abrechnungen schaffen Vertrauen und langfristige Partnerschaften.',
        ],
      },
      {
        title: 'Keine Ausfallzeiten oder Störungen',
        detail: [
          'Geräte laufen bis zu 15 Jahre mit einer Batterie.',
          'Installationsbetriebe und Administratoren können sich auf das Management statt auf Reparaturen konzentrieren.',
        ],
      },
      {
        title: 'Zeiteinsparung bei der Installation',
        detail: [
          'Plug-&-Play-Hardware lässt sich auch in anspruchsvollen Umgebungen schnell installieren.',
          'Die Konfiguration umfasst nur wenige Schritte und kann sogar remote durchgeführt werden — ohne Vor-Ort-Zugang.',
        ],
      },
      {
        title: 'Einfache Verwaltung großer Datenmengen',
        detail: [
          'Mobile und Web-Anwendungen sind intuitiv, übersichtlich und überall erreichbar.',
          'Messwerte, Historien, Reports und Alarme sind so organisiert, dass der Alltag für Verwaltungen und Gemeinschaften maximal vereinfacht wird.',
        ],
      },
      {
        title: 'Volle Kompatibilität und Flexibilität',
        detail: [
          'Unsere Geräte unterstützen gängige Protokolle (MBus, wMBus, LoRaWAN, NB-IoT, LTE, Bluetooth).',
          'Die passende Hardware lässt sich frei wählen — ohne Abhängigkeit von einzelnen Herstellern.',
        ],
      },
    ],
    readMoreLabel: 'Mehr erfahren',
    modalCloseAria: 'Dialog schließen',
  },
  offer: {
    label: 'Was wir anbieten',
    heading: 'Wir verbinden moderne Produkte mit einem ganzheitlichen Ansatz',
    description:
      'Wir erleichtern den Alltag aller Nutzerinnen und Nutzer — vom Distributor bis zur Endkundschaft.',
    cards: [
      {
        title: 'Produkte, die den Anwender in den Fokus stellen',
        bullets: [
          'laufen lange — bis zu 15 Jahre mit einer Batterie,',
          'arbeiten zuverlässig — auch bei Feuchtigkeit, Staub und Temperaturschwankungen,',
          'sind einfach zu installieren und zu konfigurieren (ohne Spezialwerkzeuge),',
          'verzeihen Montagefehler (z. B. verursacht eine falsche Verkabelung keinen Schaden).',
        ],
      },
      {
        title: 'Ein System — ALL in KAYON für alle Komponenten',
        bullets: [
          'Fernablesung in Echtzeit ohne Vor-Ort-Termine,',
          'automatische Warnungen und Berichte, die Zeit sparen,',
          'volle Kontrolle und Remote-Updates (OTA — Over-the-Air),',
          'weniger Stress und weniger Handarbeit für Installateure, Administratoren und Anwender.',
        ],
      },
    ],
  },
  products: {
    label: 'Produkte',
    heading: 'Produkte, die einen neuen Messstandard setzen',
    description:
      'Wir liefern mehr als Technologie — wir stellen Werkzeuge für Einsparungen, Automatisierung und Kontrolle bereit. Unsere Produkte bilden ein konsistentes ALL in KAYON-System, in dem jede Komponente perfekt zusammenspielt.',
    footnote:
      'Alle Kayon-Geräte werden vollständig in der Europäischen Union produziert und erfüllen die Normen CE, RED und EMC.',
    groups: [
      {
        title: 'Wasserzähler',
        items: ['Wehrle', 'Maddalena', 'Wassergeräte', 'SonicoNano (GWF)', 'Apator Smart'],
      },
      {
        title: 'Wärmezähler',
        items: ['Engelman SensoStar', 'Maddalena MicroClima', 'RC12 PloMeter'],
      },
      {
        title: 'Kommunikationsmodule',
        items: ['Modularis One', 'wMBus Smart+', 'MBus Smart+', 'wMBus MicroClima', 'wMBus RC12'],
      },
      {
        title: 'Systeme & Plattformen',
        items: [
          'Route One Mobile App',
          'OpenMetering Plattform (2WayCom, FOTA)',
          'Distributor-Portal',
          'Technologie-Dashboard',
        ],
      },
      {
        title: 'Infrastruktur',
        items: ['Range One', 'AC-Konzentrator', 'BAT-Konzentrator', 'Repeater'],
      },
    ],
    ctaLabel: 'Mehr erfahren',
  },

productPage: {
  cards: [
    {
      title: 'Wherle',
      subtitle: 'Lorem ipsum',
      description:
        'Modularis One ist ein fortschrittliches, kompaktes Funkmodul im wM-Bus-Standard 868 MHz, entwickelt fuer die Fernauslese von Modularis-Wasserzaehlern.',
      features: [
        'Zweiwege-Fernkommunikation zur Neukonfiguration, Alarmruecksetzung und Diagnose',
        'Kompatibel mit zahlreichen Modularis-Wasserzaehlern und anderen Herstellern',
        'Parallele Uebertragung von Funktelegrammen fuer Walk-by und AMR (stationaere Auslesung)',
      ],
      downloads: [
        { label: 'Download PDF ENG', href: '#' },
        { label: 'Download PDF GER', href: '#' },
      ],
      readMoreLabel: 'Read more',
      readMoreHref: '#',
    },
    {
      title: 'Maddalena',
      description:
        'Modularis One ist ein fortschrittliches, kompaktes Funkmodul im wM-Bus-Standard 868 MHz, entwickelt fuer die Fernauslese von Modularis-Wasserzaehlern.',
      features: [
        'Zweiwege-Fernkommunikation zur Neukonfiguration, Alarmruecksetzung und Diagnose',
        'Kompatibel mit zahlreichen Modularis-Wasserzaehlern und anderen Herstellern',
        'Parallele Uebertragung von Funktelegrammen fuer Walk-by und AMR (stationaere Auslesung)',
      ],
      downloads: [
        { label: 'Download PDF ENG', href: '#' },
        { label: 'Download PDF GER', href: '#' },
      ],
      readMoreLabel: 'Read more',
      readMoreHref: '#',
    },
    {
      title: 'Wassergerate',
      description:
        'Modularis One ist ein fortschrittliches, kompaktes Funkmodul im wM-Bus-Standard 868 MHz, entwickelt fuer die Fernauslese von Modularis-Wasserzaehlern.',
      features: [
        'Zweiwege-Fernkommunikation zur Neukonfiguration, Alarmruecksetzung und Diagnose',
        'Kompatibel mit zahlreichen Modularis-Wasserzaehlern und anderen Herstellern',
        'Parallele Uebertragung von Funktelegrammen fuer Walk-by und AMR (stationaere Auslesung)',
      ],
      downloads: [
        { label: 'Download PDF ENG', href: '#' },
        { label: 'Download PDF GER', href: '#' },
      ],
      readMoreLabel: 'Read more',
      readMoreHref: '#',
    },
    {
      title: 'GWF',
      subtitle: 'SonicoNano',
      description:
        'Modularis One ist ein fortschrittliches, kompaktes Funkmodul im wM-Bus-Standard 868 MHz, entwickelt fuer die Fernauslese von Modularis-Wasserzaehlern.',
      features: [
        'Zweiwege-Fernkommunikation zur Neukonfiguration, Alarmruecksetzung und Diagnose',
        'Kompatibel mit zahlreichen Modularis-Wasserzaehlern und anderen Herstellern',
        'Parallele Uebertragung von Funktelegrammen fuer Walk-by und AMR (stationaere Auslesung)',
      ],
      downloads: [
        { label: 'Download PDF ENG', href: '#' },
        { label: 'Download PDF GER', href: '#' },
      ],
      readMoreLabel: 'Read more',
      readMoreHref: '#',
    },
    {
      title: 'Apator',
      subtitle: 'Smart',
      description:
        'Modularis One ist ein fortschrittliches, kompaktes Funkmodul im wM-Bus-Standard 868 MHz, entwickelt fuer die Fernauslese von Modularis-Wasserzaehlern.',
      features: [
        'Zweiwege-Fernkommunikation zur Neukonfiguration, Alarmruecksetzung und Diagnose',
        'Kompatibel mit zahlreichen Modularis-Wasserzaehlern und anderen Herstellern',
        'Parallele Uebertragung von Funktelegrammen fuer Walk-by und AMR (stationaere Auslesung)',
      ],
      downloads: [
        { label: 'Download PDF ENG', href: '#' },
        { label: 'Download PDF GER', href: '#' },
      ],
      readMoreLabel: 'Read more',
      readMoreHref: '#',
    },
  ],
},

  footer: {
    legalLinks: [
      { label: 'Datenschutz', href: '#' },
      { label: 'Nutzungsbedingungen', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
    copyright: 'KAYON',
  },
};

export const CONTENT: Record<SupportedLanguage, ContentStructure> = {
  pl,
  en,
  de,
};

