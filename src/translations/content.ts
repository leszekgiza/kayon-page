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
  slug: string;
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
  slug?: string;
  readMoreHref: string;
}

export interface ProductCategoryContent {
  slug: string;
  title: string;
  description: string;
  items: string[];
}

export interface ProductDetailsPageContent {
  cards: ProductDetailCardContent[];
}

export interface ProductDetailContent {
  slug: string;
  heading: string;
  title: string;
  intro: string;
  description: string[];
  features: string[];
  featuresHeading: string;
  downloads?: ProductDownloadContent[];
  image?: {
    src: string;
    alt: string;
  };
}

export type ProductDetailsContent = Record<string, ProductDetailContent>;

export interface ContactCard {
  title: string;
  value: string;
  type: 'email' | 'phone' | 'address';
}

export interface ContactContent {
  label: string;
  heading: string;
  description: string;
  cards: ContactCard[];
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
  };
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
  productCategories: ProductCategoryContent[];
  productDetails: ProductDetailsContent;
  contact: ContactContent;
  footer: FooterContent;
}

const pl: ContentStructure = {
  navigation: {
    homeAriaLabel: 'KAYON strona główna',
    primaryLinks: [
      { label: 'Dla kogo?', href: '#nasi-klienci' },
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
      { label: 'Dla kogo?', href: '#nasi-klienci' },
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
      'Projektujemy nasze rozwiązania z myślą o wszystkich uczestnikach rynku  -  dystrybutorach, instalatorach, zarządcach nieruchomości, deweloperach, spółdzielniach, wspólnotach oraz pojedynczych lokatorach.',
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
          'Nasz zespół tworzą inżynierowie i specjaliści z ponad dwudziestoletnim doświadczeniem w branży pomiarowej  -  ludzie, którzy współtworzyli obowiązujące dziś standardy.',
          'Dlatego nasze rozwiązania są dopracowane technicznie, trwałe, sprawdzone i przyjazne w obsłudze  -  gotowe na wyzwania przyszłości.',
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
          'Od 2025 roku są dostępne w Niemczech i całej Europie za pośrednictwem firmy GWF AG  -  renomowanego szwajcarskiego dostawcy precyzyjnych technologii pomiarowych.',
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
      'Rozumiemy potrzeby każdej strony  -  od dystrybutorów i instalatorów po administratorów, zarządców oraz mieszkańców.',
    highlight:
      'To wszystko realizujemy z zachowaniem wysokiej efektywności energetycznej i minimalnego wpływu na środowisko. Dobrze zaprojektowane urządzenia muszą działać oszczędnie i bezawaryjnie  -  z korzyścią dla ludzi i planety.',
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
          'Zyskują pełną kontrolę nad infrastrukturą w jednym miejscu. ALL in KAYON łączy dane z wielu obiektów  -  od liczników po alerty i koszty  -  w czasie rzeczywistym.',
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
      'Rozwiązania Kayon są projektowane tak, by każdy uczestnik łańcucha interesariuszy  -  od dystrybutora i instalatora po zarządcę oraz mieszkańca  -  zyskał realne oszczędności, mniej pracy operacyjnej i większą kontrolę.',
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
      'Usprawniamy codzienne funkcjonowanie i gwarantujemy satysfakcję wszystkim użytkownikom  -  od dystrybutora po odbiorcę końcowego.',
    cards: [
      {
        title: 'Produkty zaprojektowane z myślą o użytkowniku',
        bullets: [
          'działają długo  -  nawet 15 lat na baterii,',
          'są niezawodne w wymagających warunkach,',
          'są łatwe w montażu i konfiguracji (bez specjalistycznych narzędzi),',
          'są odporne na błędy instalacyjne.',
        ],
      },
      {
        title: 'Jeden system ALL in KAYON  -  współpraca wszystkich elementów',
        bullets: [
          'zdalny odczyt w czasie rzeczywistym, bez wizyt na miejscu,',
          'automatyczne alerty i raporty, które oszczędzają czas,',
          'pełna kontrola i zdalne aktualizacje oprogramowania (OTA  -  Over-the-Air),',
          'mniej stresu i mniej pracy dla instalatorów, administratorów i użytkowników.',
        ],
      },
    ],
  },
  products: {
    label: 'Produkty',
    heading: 'Produkty wyznaczające nowy standard pomiarów',
    description:
      'Oferujemy nie tylko technologię — oferujemy realne narzędzia do oszczędności, automatyzacji i kontroli. Nasze produkty tworzą spójny system ALL in KAYON, w którym każdy element współpracuje z pozostałymi.',
    footnote:
      'Produkcja wszystkich urządzeń Kayon odbywa się w 100% na terenie Unii Europejskiej, zgodnie z normami CE, RED i EMC.',
    groups: [
      {
        title: 'Wodomierze',
        slug: 'wodomierze',
        items: ['Wehrle', 'Maddalena', 'Wasser-Geräte', 'GWF Sonico Nano', 'Apator JS Smart+'],
      },
      {
        title: 'Ciepłomierze',
        slug: 'cieplomierze',
        items: ['Engelman SensoStar', 'Maddalena MicroClima', 'RC12 PloMeter'],
      },
      {
        title: 'Moduły komunikacyjne',
        slug: 'moduly-komunikacyjne',
        items: ['Modularis ONE', 'wMBus Smart+', 'MBus Smart+', 'wMBus MicroClima', 'wMBus RC12'],
      },
      {
        title: 'Infrastruktura',
        slug: 'infrastruktura',
        items: ['Range One', 'Koncentrator AC', 'Koncentrator BAT', 'Repeater'],
      },
      {
        title: 'Systemy i platformy',
        slug: 'systemy-i-platformy',
        items: [
          'Aplikacja mobilna Route One',
          'Platforma OpenMetering (2WayCom, FOTA)',
          'Portal dystrybutora',
          'Dashboard technologiczny',
        ],
      },
    ],
    ctaLabel: 'Dowiedz się więcej',
  },

  productPage: {
    cards: [
      {
        title: 'Wodomierze',
        subtitle: 'Portfolio pomiarowe',
        description:
          'Liczniki wody kompatybilne z platformami KAYON i modulami komunikacyjnymi.',
        features: [
          'Wodomierz Wehrle - ETK(W)-EAX',
          'Wodomierz Maddalena - SJ PLUS-EVO',
          'Wodomierz Wasser-Geräte - ECO',
          'Wodomierz GWF - Sonico Nano',
          'Wodomierz Apator Powogaz - JS Smart+',
        ],
        downloads: [],
        readMoreLabel: 'Zobacz produkty',
        slug: 'wehrle-etkw-eax',
        readMoreHref: '/produkty/wodomierze',
      },
      {
        title: 'Cieplomierze',
        subtitle: 'Monitoring ciepla',
        description:
          'Urzadzenia do zdalnego pomiaru energii cieplnej w budynkach wielorodzinnych i komercyjnych.',
        features: [
          'Cieplomierz Engelmann - Senso Star E',
          'Cieplomierz Maddalena - MicroClima Evo',
          'Cieplomierz Ploumeter - RC12',
        ],
        downloads: [],
        readMoreLabel: 'Zobacz produkty',
        readMoreHref: '/produkty/cieplomierze',
      },
      {
        title: 'Moduly komunikacyjne',
        subtitle: 'Integracja danych',
        description:
          'Moduly radiowe i przewodowe zapewniajace niezawodny odczyt i konfiguracje w terenie.',
        features: [
          'Modularis ONE',
          'wMBus Smart+',
          'MBus Smart+',
          'wMBus MicroClima',
          'wMBus RC12',
        ],
        downloads: [],
        readMoreLabel: 'Zobacz produkty',
        slug: 'modularis-one',
        readMoreHref: '/produkty/moduly-komunikacyjne',
      },
      {
        title: 'Infrastruktura',
        subtitle: 'Odczyt terenowy i sieciowy',
        description:
          'Sprzet terenowy i stacjonarny do budowy sieci zdalnego odczytu.',
        features: [
          'Range ONE',
          'ECLIPSE WM-Bus Gateway',
          'ECLIPSE WM-Bus Repeater',
          'EIXO WM-Bus Gateway',
          'EXIO WM-Bus Repeater',
        ],
        downloads: [],
        readMoreLabel: 'Zobacz produkty',
        slug: 'range-one',
        readMoreHref: '/produkty/infrastruktura',
      },
      {
        title: 'Systemy i platformy',
        subtitle: 'Zarzadzanie danymi',
        description:
          'Oprogramowanie KAYON wspierajace dystrybutorow, administratorow i uzytkownikow.',
        features: [
          'Aplikacja mobilna Route ONE',
          'Platforma OpenMetering (2WayCom, FOTA)',
          'Portal dystrybutora',
          'Dashboard technologiczny',
        ],
        downloads: [],
        readMoreLabel: 'Sprawdz rozwiazania',
        readMoreHref: '/produkty/systemy-i-platformy',
      },
    ],
  },

  productCategories: [
    {
      slug: 'wodomierze',
      title: 'Wodomierze',
      description: 'Oferujemy wyłącznie urządzenia najwyższej jakości: niemieckich producentów Wehrle i Wasser - Geräte, szwajcarskiego GWF oraz wiodącej polskiej marki Apator Powogaz. Dla pełnego bezpieczeństwa i wygody oferujemy też niezawodny system odczytowy All in Kayon, który integruje wodomierze i zwiększa ich funkcjonalność.',
      items: ['wehrle-etkw-eax', 'maddalena-sj-plus-evo', 'wasser-geraete-eco', 'gwf-sonico-nano', 'apator-js-smart-plus'],
    },
    {
      slug: 'cieplomierze',
      title: 'Cieplomierze',
      description: 'Cieplomierze do instalacji mieszkaniowych i komercyjnych z gotowa integracja systemowa.',
      items: ['engelmann-senso-star-e', 'maddalena-microclima-evo', 'ploumeter-rc12'],
    },
    {
      slug: 'moduly-komunikacyjne',
      title: 'Moduly komunikacyjne',
      description: 'Moduly radiowe i przewodowe do integracji licznikow z platformami Kayon.',
      items: ['modularis-one', 'wmbus-smart-plus', 'mbus-smart-plus', 'wmbus-microclima', 'wmbus-rc12'],
    },
    {
      slug: 'systemy-i-platformy',
      title: 'Systemy i platformy',
      description: 'Każdy klient znajdzie tu rozwiązanie idealnie dopasowane do swojego sposobu pracy. To paleta rozwiązań od prostych systemów walk-by po inteligentną sieć MESH. Nasze systemy oferują coraz prostszy, bezpieczniejszy i coraz tańszy dostęp do danych pomiarowych.',
      items: ['walk-by', 'star-fix', 'mesh'],
    },
    {
      slug: 'infrastruktura',
      title: 'Infrastruktura',
      description: 'Urzadzenia terenowe i stacjonarne budujace sieci odczytowe Kayon.',
      items: ['range-one', 'eclipse-wmbus-gateway', 'eclipse-wmbus-repeater', 'eixo-wmbus-gateway', 'exio-wmbus-repeater'],
    },
  ],



  productDetails: {

    'modularis-one': {
      slug: 'modularis-one',
      heading: 'Opis poszczególnych modulow komunikacyjnych',
      title: 'Modularis ONE',
      intro:
        'Kompaktowy modul radiowy 868 MHz przeznaczony do wodomierzy Modularis, umozliwiajacy odczyt i zdalna konfiguracje w systemach walk-by oraz AMR.',
      image: {
        src: '/images/products/moduly-komunikacyjne/modularis-one.png',
        alt: 'Modul komunikacyjny Modularis ONE',
      },
      description: [
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Dwukierunkowa komunikacja z kasowaniem alarmow i konfiguracja zdalna',
        'Rownolegla transmisja telegramow walk-by i stacjonarnych (AMR)',
        'Obsluga ramek z historia danych do 15 miesiecy',
        'Sensor indukcyjny odporny na zaklocenia magnetyczne',
        'Bateria zywotna do 11 lat, opcjonalna szczelnosc IP68',
        'Zgodnosc z normami EN 13757 i OMS',
      ],
    },

    'wmbus-smart-plus': {
      slug: 'wmbus-smart-plus',
      heading: 'Opis poszczególnych modułów komunikacyjnych',
      title: 'WMBus Smart+',
      intro:
        'WMBus Smart+ to kompaktowy moduł radiowy w standardzie Wireless M-Bus 868 MHz, przeznaczony do wodomierzy serii Smart+ i Smart C+ firmy Apator Powogaz. Umożliwia szybki, niezawodny zdalny odczyt. Oferuje zaawansowane funkcji monitoringu nieprawidłowości, takich jak: cofka, wyciek, manipulacja magnetyczna czy niski poziom baterii.',
      image: {
        src: '/images/products/moduly-komunikacyjne/wmbus-smart-plus.png',
        alt: 'Moduł radiowy WMBus Smart+',
      },
      description: [
        'WMBus Smart+ to innowacyjne rozwiązanie, które zapewnia elastyczność i bezpieczeństwo w zdalnym monitoringu wodomierzy, z możliwością zdalnej diagnostyki, zmiany ustawień i kasowania alarmów, bez potrzeby ręcznych odczytów czy ingerencji w instalację.',
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Dwukierunkowa komunikacja radiowa umożliwiająca zdalny odczyt, konfigurację i diagnostykę urządzenia',
        'Trzy tryby transmisji danych: short, long i long+ (z historią do 15 miesięcy)',
        'Pełna kompatybilność z wodomierzami Smart+ i Smart C+ Apator Powogaz',
        'Optyczny sensor odporny na zakłócenia magnetyczne',
        'Łatwy montaż bez okablowania, konfiguracja przez Range One Bluetooth i aplikację Route One',
        'Zasięg transmisji do 300 m w linii wzroku',
        'Bateria litowa 3.6 V o żywotności do 11 lat',
        'Stopień ochrony IP65, zgodność z normami EN 13757 i OMS',
      ],
    },

    'mbus-smart-plus': {
      slug: 'mbus-smart-plus',
      heading: 'Opis poszczególnych modulow komunikacyjnych',
      title: 'MBus Smart+',
      intro:
        'Modul przewodowy M-Bus umozliwiajacy pelna integracje licznikow Smart+ z sieciami automatyki budynkowej i systemami BMS.',
      image: {
        src: '/images/products/moduly-komunikacyjne/mbus-smart-plus.png',
        alt: 'Modul przewodowy MBus Smart+',
      },
      description: [
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Zasilanie z magistrali M-Bus bez dodatkowych baterii',
        'Adresowanie wielourzadzeniowe z mozliwoscia kaskadowego laczenia',
        'Wsparcie dla odczytow chwilowych i archiwalnych',
        'Diagnostyka magistrali oraz sygnalizacja zaklocen',
        'Wysoka odpornosc na przepiecia i niepoprawne podlaczenia',
        'Kompaktowa konstrukcja do montazu bez narzedzi',
      ],
    },

    'wmbus-microclima': {
      slug: 'wmbus-microclima',
      heading: 'Opis poszczególnych modulow komunikacyjnych',
      title: 'wMBus MicroClima',
      intro:
        'Nakladka radiowa dla cieplomierzy MicroClima, dedykowana do zastosowań mieszkaniowych z czestymi odczytami zdalnymi.',
      image: {
        src: '/images/products/moduly-komunikacyjne/wmbus-microclima.png',
        alt: 'Modul radiowy wMBus MicroClima',
      },
      description: [
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Bezprzewodowa komunikacja 868 MHz zgodna z OMS',
        'Wbudowane profile billingowe z pamiecia do 24 miesiecy',
        'Tryb ekonomiczny wydluzajacy czas pracy baterii',
        'Funkcja alarmowania o manipulacji i przekroczeniach temperatury',
        'Szybka konfiguracja poprzez NFC lub program Route ONE',
        'Praca w szerokim zakresie temperatur -10C do 55C',
      ],
    },

    'wmbus-rc12': {
      slug: 'wmbus-rc12',
      heading: 'Opis poszczególnych modulow komunikacyjnych',
      title: 'wMBus RC12',
      intro:
        'Modul komunikacyjny dla cieplomierzy RC12, przygotowany do pracy w sieciach walk-by oraz instalacjach stacjonarnych.',
      image: {
        src: '/images/products/moduly-komunikacyjne/wmbus-rc12.png',
        alt: 'Modul radiowy wMBus RC12',
      },
      description: [
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Nadawanie ramek w trybach T i C-T zgodnie z OMS',
        'Obsluga funkcji multi-hop przez repeatery EXIO/ECLIPSE',
        'Rejestrowanie alarmow hydraulicznych i energetycznych',
        'Zdalna aktualizacja ustawien czestotliwosci odczytu',
        'Bateria zywotna do 12 lat przy interwale 15 minut',
        'Solidna obudowa IP67 odporna na wilgotne srodowisko',
      ],
    },

    'wehrle-etkw-eax': {
      slug: 'wehrle-etkw-eax',
      heading: 'Opis poszczególnych wodomierzy',
      title: 'Wehrle ETK(W)-EAX',
      intro:
        'Wodomierz jednostrumieniowy Wehrle to precyzyjne i niezawodne urządzenie do pomiaru zużycia wody w instalacjach domowych i komercyjnych, zaprojektowane z myślą o długotrwałą prace w trudnych warunkach.',
      image: {
        src: '/images/products/wodomierze/wehrle-etkw-eax.png',
        alt: 'Wodomierz Wehrle ETK(W)-EAX',
      },
      description: [
        'Wodomierz ETK(W)-EAX jest w pełni kompatybilny z modułem komunikacyjnym Modularis ONE.',
        'Pobierz dokumentacje: https://wehrle.de/en/metering/water/single-jet-dry-meters/single-jet-dry-modularis/#',
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Gotowy do integracji z dowolnym systemem AMR',
        'Zakres temperatur: do 50°C (zimna woda) oraz do 90°C (ciepla woda)',
        'Maksymalne natężenie przepływu (Q3): 2,5-4 m3/h',
        'Wysoka klasa dokładności pomiaru MID: R250 poziomo, R80 pionowo',
        'Obracane w zakresie 360 liczydło',
        'Obudowa z niklowanego mosiądzu',
        'Klasa szczelności IP64',
        'Wytrzymałość do 1,6 MPa',
      ],
    },

    'maddalena-sj-plus-evo': {
      slug: 'maddalena-sj-plus-evo',
      heading: 'Opis poszczególnych wodomierzy',
      title: 'Maddalena SJ PLUS-EVO',
      intro:
        'Wodomierz SJ PLUS-EVO to nowoczesne rozwiązanie do zastosowań domowych, charakteryzujące sie najwyższą jakością wykonania i niezawodną precyzja pomiarowa.',
      image: {
        src: '/images/products/wodomierze/maddalena-sj-plus-evo.png',
        alt: 'Wodomierz Maddalena SJ PLUS-EVO',
      },
      description: [
        'Wodomierz SJ PLUS-EVO jest w pełni kompatybilny z modułem komunikacyjnym Modularis ONE.',
        'Pobierz dokumentacje: https://www.maddalena.it/wp-content/uploads/catalog-pdf/schedatecnica-sjplus-en-v4.pdf',
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Gotowy do integracji z nowoczesnymi systemami zdalnego odczytu (przewodowe i radiowe moduly komunikacyjne)',
        'Zakres temperatur: do 90°C (ciepla woda)',
        'Maksymalne natężenie przepływu (Q3): 1,6 m3/h dla DN15, 4,0 m3/h dla DN20',
        'Wysoka klasa dokładności pomiaru MID: R maks. 160',
        'Mozliwosc instalacji w roznych pozycjach',
        'Obracane o 360 liczydło',
        'Wysoka odpornosc na dzialanie pola magnetycznego',
        'Dostepny z certyfikatem sanitarnym',
      ],
    },

    'wasser-geraete-eco': {
      slug: 'wasser-geraete-eco',
      heading: 'Opis poszczególnych wodomierzy',
      title: 'Wasser-Geräte ECO',
      intro:
        'Wodomierz ECO od Wasser-Geräte zapewnia niezawodny pomiar zarówno ciepłej, jak i zimnej wody (do 90C) i jest idealnym rozwiązaniem do zastosowań mieszkaniowych i komercyjnych.',
      image: {
        src: '/images/products/wodomierze/wasser-geraete-eco.png',
        alt: 'Wodomierz Wasser-Geräte ECO',
      },
      description: [
        'Wodomierz ECO jest w pełni kompatybilny z modułem komunikacyjnym Modularis ONE.',
        'Pobierz dokumentacje: https://www.wasser-geraete.de/products/wohnungswasserzaehlereco/#',
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Gotowy do integracji z nakladka radiowa, M-Bus, impulsowa',
        'Zakres temperatur: do 50°C (zimna woda), do 90°C (ciepla woda)',
        'Maksymalne natężenie przepływu (Q3): 2,5 m3/h',
        'Wysoka trwałość i odpornosc na uszkodzenia, konstrukcja odporna na kondensacje',
        'Opcje montazowe: poziomo/pionowo',
      ],
    },

    'gwf-sonico-nano': {
      slug: 'gwf-sonico-nano',
      heading: 'Opis poszczególnych wodomierzy',
      title: 'GWF Sonico Nano',
      intro:
        'GWF Sonico Nano to zaawansowany, ultradźwiękowy wodomierz oferujacy najwyższą precyzję i trwałość w pomiarach zimnej wody w budownictwie mieszkaniowym oraz w przemyśle.',
      image: {
        src: '/images/products/wodomierze/gwf-sonico-nano.png',
        alt: 'Wodomierz GWF Sonico Nano',
      },
      description: [
        'Sonico Nano to idealne rozwiązanie dla wszystkich poszukujacych wysokiej precyzji oraz niezawodnosci pomiarow.',
        'Pobierz dokumentacje: https://productfinder.gwf.ch/uploads_productfinder/downloads/Sonico_Brochure_Enlit-Version-2024_KIe10200_web_v04.pdf',
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Ultradzwiekowy wodomierz kompatybilny z zaawansowanymi systemami zdalnego odczytu (LoRaWAN, Wireless M-Bus)',
        'Zakres temperatur: do 50°C (zimna woda), do 90°C (ciepla woda)',
        'Maksymalne natężenie przepływu (Q3): 1,6 / 2,5 / 4 m3/h (w zaleznosci od wybranego modelu DN)',
        'Wysoka klasa dokładności pomiaru MID: R1000',
        'Bardzo niskie straty cisnienia',
        'Prosta integracja z systemami automatyzacji',
        'Czas pracy na baterii do 20 lat',
      ],
    },

    'apator-js-smart-plus': {
      slug: 'apator-js-smart-plus',
      heading: 'Opis poszczególnych wodomierzy',
      title: 'Apator Powogaz JS Smart+',
      intro:
        'Wodomierz Apator Powogaz JS Smart+ to sprawdzone i niezawodne rozwiązanie od polskiego lidera rynku wodomierzy. Zaprojektowane do pomiaru przepływu wody w instalacjach domowych, cechujace sie wysoka trwałością i odpornością na warunki środowiskowe.',
      image: {
        src: '/images/products/wodomierze/apator-js-smart-plus.png',
        alt: 'Wodomierz Apator Powogaz JS Smart+',
      },
      description: [
        'Wodomierz JS Smart+ jest w pełni kompatybilny z modulami komunikacyjnymi MBus Smart+ i WMBus Smart+.',
        'Pobierz dokumentacje: https://api.apator.com/uploads/oferta/woda-i-cieplo/wodomierze/smart-plus/smart-plus-karta-katalogowa.pdf',
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Gotowy do wspolpracy z różnymi nakładkami: Wireless M-Bus, impulsowa, M-Bus, indukcyjna',
        'Zakres temperatur: do 50°C (zimna woda), do 90°C (ciepla woda)',
        'Maksymalne natężenie przepływu (Q3): 1,6 m3/h (DN15), 2,5 m3/h (DN20), 4,0 m3/h (DN20; zaleznie od modelu)',
        'Wysoka klasa dokładności, zgodnosc z MID: R100 (H, DN15/20), R50 (V, DN15/20)',
        'Obudowa odporna na dzialanie silnego zewnetrznego pola magnetycznego',
        'Wytrzymałość do 16 bar',
        'Mozliwosc montazu: liczydło na gorze lub z boku (poziomy/pionowy montaz)',
      ],
    },

    'engelmann-senso-star-e': {
      slug: 'engelmann-senso-star-e',
      heading: 'Opis poszczególnych cieplomierzy',
      title: 'Engelmann Senso Star E',
      intro:
        'Cieplomierz Engelmann Senso Star E to precyzyjne i trwale urządzenie do pomiaru zużycia ciepla w ukladach zamknietych, zapewniajace niezawodnosc i dokladnosc zgodna z norma EN 1434.',
      image: {
        src: '/images/products/cieplomierze/engelmann-senso-star-e.png',
        alt: 'Cieplomierz Engelmann Senso Star E',
      },
      description: [
        'Cieplomierz kompatybilny z nakladka komunikacyjna MicroClima WMBus.',
        'Pobierz dokumentacje: https://www.engelmann.de/wp-content/uploads/2024/03/Datenblatt_SensoStar_E_2023_12_01_de.pdf',
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Mechaniczny, jednostrumieniowy przetwornik przepływu z dynamicznym cyklem pomiarowym (2/60 s)',
        'Zakres temperatur pracy od 15C do 90C, maksymalne cisnienie robocze do 16 bar',
        'Duzy, obrotowy i wielofunkcyjny wyswietlacz LCD z pamiecia wartosci miesiecznych',
        'Konstrukcja odporna na zaklocenia elektromagnetyczne i z funkcja wykrywania przepływu wstecznego',
      ],
    },

    'maddalena-microclima-evo': {
      slug: 'maddalena-microclima-evo',
      heading: 'Opis poszczególnych cieplomierzy',
      title: 'Maddalena MicroClima Evo',
      intro:
        'Maddalena MicroClima Evo to nowoczesny, kompaktowy cieplomierz przeznaczony do precyzyjnego pomiaru zużycia ciepla w systemach grzewczych, szczegolnie w budownictwie mieszkaniowym. Zapewnia trwałość i wysoka dokladnosc.',
      image: {
        src: '/images/products/cieplomierze/maddalena-microclima-evo.png',
        alt: 'Cieplomierz Maddalena MicroClima Evo',
      },
      description: [
        'Cieplomierz kompatybilny z nakladka komunikacyjna MicroClima WMBus.',
        'Pobierz dokumentacje: https://www.maddalena.it/wp-content/uploads/catalog-pdf/schedatecnicamicroclimaevo-en-v4.pdf',
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Jednostrumieniowy przeplywomierz dostosowany do pracy w szerokim zakresie temperatur',
        'Wysoka klasa metrologiczna i stabilnosc wskazan dzieki zaawansowanym rozwiazaniom technicznym',
        'Intuicyjny interfejs uzytkownika oraz mozliwosc zdalnego odczytu danych',
      ],
    },

    'ploumeter-rc12': {
      slug: 'ploumeter-rc12',
      heading: 'Opis poszczególnych cieplomierzy',
      title: 'Ploumeter RC12',
      intro:
        'Cieplomierz RC12 Ploumeter to precyzyjne i niezawodne urządzenie pomiarowe do zastosowań w instalacjach grzewczych, znane z solidnej konstrukcji i precyzji pomiaru. Idealny do systemow wymagajacych nowoczesnych rozwiazan komunikacyjnych.',
      image: {
        src: '/images/products/cieplomierze/ploumeter-rc12.png',
        alt: 'Cieplomierz Ploumeter RC12',
      },
      description: [
        'Cieplomierz kompatybilny z nakladka komunikacyjna RC12 WMBUS.',
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Jednostrumieniowy mechaniczny przeplywomierz',
        'Obsluga wysokich temperatur i cisnien roboczych zgodnie z normami branzowymi',
        'Latwy montaz i obsluga, oraz wytrzymala konstrukcja',
      ],
    },

    'range-one': {
      slug: 'range-one',
      heading: 'Opis poszczególnych elementow infrastruktury',
      title: 'Range ONE',
      intro:
        'Odbiornik radiowy z technologia Bluetooth zgodny ze standardami Wireless M-Bus (EN 13757) i OMS i obslugujacy rozne urzadzenia pomiarowe niezaleznie od producenta. To przenosne urządzenie stworzone do szybkiego i wygodnego odczytu danych w terenie.',
      image: {
        src: '/images/products/infrastruktura/range-one.png',
        alt: 'Range ONE - odbiornik radiowy',
      },
      description: [
        'Range ONE to niezawodne narzedzie terenowe laczace mobilnosc, funkcjonalnosc i komfort pracy w jednym kompaktowym urzadzeniu.',
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Wysoka czulosc odbiornika 868 MHz umozliwiajaca odczyt w trudno dostepnych miejscach',
        'Lacznosc Bluetooth do bezprzewodowego przesylania danych na urzadzenia z Androidem (aplikacja Route ONE)',
        'Energooszczedne algorytmy - praca na baterii do 40 godzin',
        'Ergonomiczna, odporna obudowa z gumowanymi bokami zapewniajaca pewny chwyt',
        'Zewnetrzna antena i port USB do ladowania baterii',
        'Mozliwosc odczytu danych i zdalnej konfiguracji modulow radiowych',
      ],
    },

    'eclipse-wmbus-gateway': {
      slug: 'eclipse-wmbus-gateway',
      heading: 'Opis poszczególnych elementow infrastruktury',
      title: 'ECLIPSE WM-Bus Gateway',
      intro:
        'Bateryjny koncentrator danych do zbierania informacji z licznikow wody, ciepla, gazu i energii. Zasilany bateria o zywotnosci do 11 lat, umozliwia szybkie wdrozenie i minimalne koszty instalacji w dowolnej lokalizacji.',
      image: {
        src: '/images/products/infrastruktura/eclipse-wmbus-gateway.png',
        alt: 'ECLIPSE WM-Bus Gateway',
      },
      description: [
        'ECLIPSE WM-Bus Gateway to niezawodny, ekonomiczny koncentrator danych, oferujacy pelna kontrole nad systemami telemetrycznymi przy niskich kosztach eksploatacji.',
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Zdalne zarzadzanie, diagnostyka i elastyczne protokoly transmisji (HTTPS, MQTT, E-mail)',
        'Pelna kompatybilnosc z urzadzeniami wM-Bus i OMS',
        'Lacznosc 5G, 4G, NB-IoT zapewniajaca stabilne polaczenie',
        'Wysoka czulosc odbiornika 868 MHz do odczytu z trudno dostepnych miejsc',
        'Praca bateryjna do 11 lat bez koniecznosci serwisowania',
        'Odporna na kurz i UV obudowa o estetycznym designie',
        'Czujniki bezpieczenstwa wykrywajace otwarcie i demontaz urzadzenia',
      ],
    },

    'eclipse-wmbus-repeater': {
      slug: 'eclipse-wmbus-repeater',
      heading: 'Opis poszczególnych elementow infrastruktury',
      title: 'ECLIPSE WM-Bus Repeater',
      intro:
        'Bateryjne urządzenie wzmacniajace sygnal w systemach Wireless M-Bus, zapewniajace nieprzerwana prace przez 11 lat. Idealne do rozleglych sieci pomiarowych, gdzie liczy sie prostota montazu i minimalne koszty obslugi.',
      image: {
        src: '/images/products/infrastruktura/eclipse-wmbus-repeater.png',
        alt: 'ECLIPSE WM-Bus Repeater',
      },
      description: [
        'ECLIPSE WM-Bus Repeater to nowoczesne, energooszczedne rozwiązanie zwiekszajace zasieg i niezawodnosc transmisji w systemach telemetrycznych, redukujace koszty serwisowe i przyspieszajace wdrozenia.',
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Prosta konfiguracja, zdalna aktualizacja firmware',
        'Wysoka czulosc odbiornika 868 MHz dla skutecznego odczytu w trudnych warunkach',
        'Obsluga trybow Wireless M-Bus i OMS (S, T, C+T itp.)',
        'Kompatybilnosc z roznorodnymi urzadzeniami pomiarowymi',
        'Mozliwosc tworzenia lancuchow repeaterow (multi-hop)',
        'Solidna, odporna konstrukcja do zastosowań przemyslowych i miejskich (zabezpieczenia antywandalizacyjne)',
        'Zasilanie bateryjne o zywotnosci do 11 lat',
      ],
    },

    'walk-by': {
      slug: 'walk-by',
      heading: 'Opis poszczególnych systemów',
      title: 'Walk-by',
      intro:
        'Szybki odczyt zdalny, bez błędów, bez przestojów.',
      description: [
        'Praca w terenie staje się prosta, jak nigdy dotąd. Przesył danych jest natychmiastowy i w pełni automatyczny, a dostęp do nich w systemie jest natychmiastowy.',
        'Rozwiązanie pozwala szybko i bezbłędnie odczytywać dane z wodomierzy, ciepłomierzy, podzielników kosztów ogrzewania, gazomierzy i liczników prąd - bez fizycznego dostępu do nich.',
        'System oparty na urządzeniu Range ONE i aplikacji Route ONE umożliwia także bieżącą diagnostykę i serwis różnego typu urządzeń pomiarowych.',
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Automatyczny odczyt wodomierzy, ciepłomierzy, podzielników oraz liczników gazu i energii',
        'Natychmiastowe przesyłanie danych do systemu bez potrzeby fizycznego dostępu',
        'Wbudowana diagnostyka i serwis modułów pomiarowych w terenie',
        'Integracja z platformą Route ONE dla raportów i alarmów',
        'Odczyt nawet w trudno dostępnych miejscach dzięki 868 MHz',
        'Tryb pracy walk-by redukujący czas obsługi i koszty wizyt',
      ],
    },

    'star-fix': {
      slug: 'star-fix',
      heading: 'Opis poszczególnych systemów',
      title: 'Star/Fix',
      intro:
        'Stały nadzór i pełna kontrola – jedna sieć, która odczytuje wszystko.',
      description: [
        'Rozwiązanie działa w oparciu o topologię gwiazdy, w której urządzenia pomiarowe komunikują się z koncentratorem bezpośrednio lub przez repeatery zwiększające zasięg sieci.',
        'System automatyzuje odczyty oraz zapewnia stały nadzór nad mediami i natychmiastową reakcję na awarie lub nieprawidłowości.',
        'Fix obsługuje różne typy liczników zgodnych ze standardem Wireless M-Bus lub OMS, maksymalnie ułatwiając zarządzanie i bilansowanie zużycia poszczególnych mediów.',
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Architektura gwiazdy z modułami wM-Bus lub OMS',
        'Automatyczne odczyty i bilansowanie zużycia mediów',
        'Szybka reakcja na alarmy i anomalie dzięki zdalnym powiadomieniom',
        'Skalowanie zasięgu poprzez repeatery ECLIPSE lub EXIO',
        'Centralna konfiguracja parametrów i harmonogramów odczytu',
        'Ochrona danych poprzez szyfrowanie i kontrola dostępu',
      ],
    },

    'mesh': {
      slug: 'mesh',
      heading: 'Opis poszczególnych systemów',
      title: 'MESH',
      intro:
        'Automatyczny, niezawodny i najtańszy w utrzymaniu system odczytowy. Tak samodzielny, że można odnieść wrażenie, że myśli za użytkowników.',
      description: [
        'Rozwiązanie jest inteligentną, samokonfigurującą i samonaprawiającą się siecią pomiarową, która zapewnia nieprzerwaną komunikację nawet w trudnych warunkach.',
        'To innowacyjny system, który opiera się wyłącznie na jednym koncentratorze danych – montaż sprowadza się do kliknięcia „GO", a dane automatycznie trafiają do chmury.',
        'MESH to najtańszy i najbardziej niezawodny sposób budowy infrastruktury zdalnego monitoringu mediów, gwarantujący pełną kontrolę i minimalne koszty utrzymania.',
      ],
      featuresHeading: 'Najważniejsze cechy',
      features: [
        'Samonaprawiająca topologia mesh zapewniająca ciągłość transmisji',
        'Jeden koncentrator danych i automatyczne wysyłanie do chmury',
        'Minimalne koszty utrzymania dzięki braku ręcznych interwencji',
        'Automatyczne wykrywanie nowych urządzeń i aktualizacja trasy danych',
        'Skalowanie do tysięcy liczników bez utraty jakości usługi',
        'Rozbudowane raporty, alarmy i zarządzanie zasobami w czasie rzeczywistym',
      ],
    },

  },

  contact: {
    label: 'Kontakt',
    heading: 'Skontaktuj się z nami',
    description:
      'Masz pytania dotyczące naszych produktów lub usług? Skontaktuj się z nami, a nasz zespół chętnie odpowie na wszystkie pytania.',
    cards: [
      { title: 'Zapytania ogólne', value: 'welcome@kayon.pl', type: 'email' },
      { title: 'Adres', value: 'KAYON Sp. z o.o.\nAleja Zwycięstwa 96/98\n81-451 Gdynia\nPolska', type: 'address' },
      { title: 'Telefon', value: '+48 577 570 814', type: 'phone' },
    ],
    form: {
      nameLabel: 'Imię i nazwisko',
      namePlaceholder: 'Twoje imię i nazwisko',
      emailLabel: 'Email',
      emailPlaceholder: 'twoj@email.pl',
      subjectLabel: 'Temat',
      subjectPlaceholder: 'Temat wiadomości',
      messageLabel: 'Wiadomość',
      messagePlaceholder: 'Twoja wiadomość...',
      submitButton: 'WYŚLIJ',
    },
  },

  footer: {
    legalLinks: [
      { label: 'Polityka prywatnosci', href: '#' },
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
      { label: 'Who we help', href: '#nasi-klienci' },
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
      { label: 'Who we help', href: '#nasi-klienci' },
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
      'We design our solutions with every market participant in mind  -  distributors, installers, property managers, developers, housing cooperatives, homeowner associations and individual residents.',
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
          'Our team consists of engineers and specialists with over two decades of metering expertise  -  people who co-created today’s industry standards.',
          'Thanks to them our solutions are technically refined, durable, proven and user-friendly  -  ready for the challenges of the future.',
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
          'Since 2025 they have been available in Germany and across Europe via GWF AG  -  a renowned Swiss provider of precision metering technology.',
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
      'We deliver all of this while maintaining high energy efficiency and minimising environmental impact. Well-designed systems should operate efficiently and without failure  -  to the benefit of people and the planet.',
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
          'Gain full control of their infrastructure in one place. ALL in KAYON consolidates data from many buildings  -  from meters to alerts and costs  -  in real time.',
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
      'Kayon solutions are designed so that every stakeholder  -  from distributor and installer to manager and resident  -  gains real savings, lower operating expenses and greater control.',
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
      'We streamline daily operations and keep every user of the system satisfied  -  from distributors to end users.',
    cards: [
      {
        title: 'Products designed to benefit the end user',
        bullets: [
          'operate for years  -  up to 15 on a single battery,',
          'remain reliable in demanding environments,',
          'are easy to install and configure (no specialised tools),',
          'withstand installation errors.',
        ],
      },
      {
        title: 'One system  -  ALL in KAYON working together',
        bullets: [
          'real-time remote readings without site visits,',
          'automatic alerts and reports that save time,',
          'full control and remote firmware updates (OTA  -  Over-the-Air),',
          'less stress and less manual work for installers, administrators and users.',
        ],
      },
    ],
  },
  products: {
    label: 'Products',
    heading: 'Products that set a new measurement standard',
    description:
      'We deliver more than technology  -  we provide tools for savings, automation and control. Our products form a cohesive ALL in KAYON ecosystem where every component works together.',
    footnote:
      'All Kayon devices are manufactured entirely within the European Union in compliance with CE, RED and EMC standards.',
    groups: [
      {
        title: 'Water meters',
        slug: 'wodomierze',
        items: ['Wehrle', 'Maddalena', 'Wasser-Geräte', 'GWF Sonico Nano', 'Apator JS Smart+'],
      },
      {
        title: 'Heat meters',
        slug: 'cieplomierze',
        items: ['Engelman SensoStar', 'Maddalena MicroClima', 'RC12 PloMeter'],
      },
      {
        title: 'Communication modules',
        slug: 'moduly-komunikacyjne',
        items: ['Modularis ONE', 'wMBus Smart+', 'MBus Smart+', 'wMBus MicroClima', 'wMBus RC12'],
      },
      {
        title: 'Systems and platforms',
        slug: 'systemy-i-platformy',
        items: [
          'Route One mobile app',
          'OpenMetering platform (2WayCom, FOTA)',
          'Distributor portal',
          'Technology dashboard',
        ],
      },
      {
        title: 'Infrastructure',
        slug: 'infrastruktura',
        items: ['Range One', 'AC concentrator', 'BAT concentrator', 'Repeater'],
      },
    ],
    ctaLabel: 'Learn more',
  },

  productPage: {
    cards: [
      {
        title: 'Water meters',
        subtitle: 'Metering portfolio',
        description:
          'Meters compatible with the KAYON ecosystem and communication modules.',
        features: [
          'Wehrle water meter - ETK(W)-EAX',
          'Maddalena water meter - SJ PLUS-EVO',
          'Wasser-Geräte water meter - ECO',
          'GWF water meter - Sonico Nano',
          'Apator Powogaz water meter - JS Smart+',
        ],
        downloads: [],
        readMoreLabel: 'Explore products',
        slug: 'wehrle-etkw-eax',
        readMoreHref: '/produkty/wodomierze',
      },
      {
        title: 'Heat meters',
        subtitle: 'Thermal energy monitoring',
        description:
          'Devices for remote heat-energy billing in residential and commercial buildings.',
        features: [
          'Engelmann heat meter - Senso Star E',
          'Maddalena heat meter - MicroClima Evo',
          'Ploumeter heat meter - RC12',
        ],
        downloads: [],
        readMoreLabel: 'Explore products',
        readMoreHref: '/produkty/cieplomierze',
      },
      {
        title: 'Communication modules',
        subtitle: 'Data integration',
        description:
          'Radio and wired modules delivering reliable data collection and configuration in the field.',
        features: [
          'Modularis ONE',
          'wMBus Smart+',
          'MBus Smart+',
          'wMBus MicroClima',
          'wMBus RC12',
        ],
        downloads: [],
        readMoreLabel: 'Explore products',
        slug: 'modularis-one',
        readMoreHref: '/produkty/moduly-komunikacyjne',
      },
      {
        title: 'Systems & platforms',
        subtitle: 'Data management',
        description:
          'KAYON software that supports distributors, administrators, and end users.',
        features: [
          'Route ONE mobile app',
          'OpenMetering platform (2WayCom, FOTA)',
          'Distributor portal',
          'Technology dashboard',
        ],
        downloads: [],
        readMoreLabel: 'Explore solutions',
        readMoreHref: '/produkty/systemy-i-platformy',
      },
      {
        title: 'Infrastructure',
        subtitle: 'Field and network hardware',
        description:
          'Portable and stationary equipment for building remote-reading networks.',
        features: [
          'Range ONE',
          'ECLIPSE WM-Bus Gateway',
          'ECLIPSE WM-Bus Repeater',
          'EIXO WM-Bus Gateway',
          'EXIO WM-Bus Repeater',
        ],
        downloads: [],
        readMoreLabel: 'Explore products',
        slug: 'range-one',
        readMoreHref: '/produkty/infrastruktura',
      },
    ],
  },

  productCategories: [
    {
      slug: 'wodomierze',
      title: 'Water meters',
      description: 'Water meters engineered for Kayon remote-reading deployments.',
      items: ['wehrle-etkw-eax', 'maddalena-sj-plus-evo', 'wasser-geraete-eco', 'gwf-sonico-nano', 'apator-js-smart-plus'],
    },
    {
      slug: 'cieplomierze',
      title: 'Heat meters',
      description: 'Heat meters ready for residential and commercial monitoring networks.',
      items: ['engelmann-senso-star-e', 'maddalena-microclima-evo', 'ploumeter-rc12'],
    },
    {
      slug: 'moduly-komunikacyjne',
      title: 'Communication modules',
      description: 'Radio and wired modules connecting meters with Kayon platforms.',
      items: ['modularis-one', 'wmbus-smart-plus', 'mbus-smart-plus', 'wmbus-microclima', 'wmbus-rc12'],
    },
    {
      slug: 'systemy-i-platformy',
      title: 'Systems & platforms',
      description: 'All in Kayon solutions for automation and data management.',
      items: ['walk-by', 'star-fix', 'mesh'],
    },
    {
      slug: 'infrastruktura',
      title: 'Infrastructure',
      description: 'Field and stationary devices building Kayon remote-reading networks.',
      items: ['range-one', 'eclipse-wmbus-gateway', 'eclipse-wmbus-repeater', 'eixo-wmbus-gateway', 'exio-wmbus-repeater'],
    },
  ],


  productDetails: {

    'modularis-one': {
      slug: 'modularis-one',
      heading: 'Communication module portfolio',
      title: 'Modularis ONE',
      intro:
        'Compact 868 MHz radio module for Modularis water meters, enabling remote reading and configuration in both walk-by and AMR deployments.',
      image: {
        src: '/images/products/moduly-komunikacyjne/modularis-one.png',
        alt: 'Modularis ONE communication module',
      },
      description: [
      ],
      featuresHeading: 'Key features',
      features: [
        'Two-way communication with remote alarm reset and configuration',
        'Parallel transmission of walk-by and stationary (AMR) telegrams',
        'Supports frame history up to 15 months',
        'Inductive sensor resistant to magnetic interference',
        'Battery lifetime up to 11 years, optional IP68 enclosure',
        'Compliance with EN 13757 and OMS standards',
      ],
    },

    'wmbus-smart-plus': {
      slug: 'wmbus-smart-plus',
      heading: 'Communication module portfolio',
      title: 'WMBus Smart+',
      intro:
        'WMBus Smart+ is a compact wireless module in the Wireless M-Bus 868 MHz standard, designed for Smart+ and Smart C+ water meters from Apator Powogaz. It enables fast, reliable remote reading. It offers advanced monitoring functions for irregularities such as: backflow, leak, magnetic manipulation or low battery level.',
      image: {
        src: '/images/products/moduly-komunikacyjne/wmbus-smart-plus.png',
        alt: 'WMBus Smart+ wireless module',
      },
      description: [
        'WMBus Smart+ is an innovative solution that ensures flexibility and security in remote water meter monitoring, with the ability to remotely diagnose, change settings and clear alarms, without the need for manual readings or intervention in the installation.',
      ],
      featuresHeading: 'Key features',
      features: [
        'Bidirectional radio communication enabling remote reading, configuration and device diagnostics',
        'Three data transmission modes: short, long and long+ (with history up to 15 months)',
        'Full compatibility with Smart+ and Smart C+ water meters from Apator Powogaz',
        'Optical sensor resistant to magnetic interference',
        'Easy mounting without wiring, configuration via Range One Bluetooth and Route One app',
        'Transmission range up to 300 m in line of sight',
        '3.6 V lithium battery with lifespan up to 11 years',
        'IP65 protection rating, compliant with EN 13757 and OMS standards',
      ],
    },

    'mbus-smart-plus': {
      slug: 'mbus-smart-plus',
      heading: 'Communication module portfolio',
      title: 'MBus Smart+',
      intro:
        'Wired M-Bus module that connects Smart+ meters with building automation and BMS infrastructures.',
      image: {
        src: '/images/products/moduly-komunikacyjne/mbus-smart-plus.png',
        alt: 'MBus Smart+ wired module',
      },
      description: [
      ],
      featuresHeading: 'Key features',
      features: [
        'Powered directly from the M-Bus line without extra batteries',
        'Multi-device addressing with cascade wiring support',
        'Instant and historical readings available on demand',
        'Bus diagnostics and disturbance indication',
        'High immunity against surges and wiring mistakes',
        'Compact enclosure enabling tool-free installation',
      ],
    },

    'wmbus-microclima': {
      slug: 'wmbus-microclima',
      heading: 'Communication module portfolio',
      title: 'wMBus MicroClima',
      intro:
        'Wireless add-on for MicroClima heat meters, dedicated to residential deployments with frequent remote reads.',
      image: {
        src: '/images/products/moduly-komunikacyjne/wmbus-microclima.png',
        alt: 'wMBus MicroClima wireless module',
      },
      description: [
      ],
      featuresHeading: 'Key features',
      features: [
        '868 MHz communication compliant with OMS',
        'Built-in billing profiles with up to 24 months of memory',
        'Power-saving mode extending battery life',
        'Alarm function for tamper and temperature thresholds',
        'Quick setup through NFC or the Route ONE configuration tool',
        'Operates in wide temperature range from -10C to 55C',
      ],
    },

    'wmbus-rc12': {
      slug: 'wmbus-rc12',
      heading: 'Communication module portfolio',
      title: 'wMBus RC12',
      intro:
        'Communication module for RC12 heat meters designed for both walk-by and stationary networks.',
      image: {
        src: '/images/products/moduly-komunikacyjne/wmbus-rc12.png',
        alt: 'wMBus RC12 communication module',
      },
      description: [
      ],
      featuresHeading: 'Key features',
      features: [
        'Transmits frames in T and C-T modes compliant with OMS',
        'Supports multi-hop via EXIO or ECLIPSE repeaters',
        'Logs hydraulic and energy related alarms',
        'Remote adjustment of reading intervals',
        'Battery lifetime up to 12 years at 15-minute reporting',
        'Robust IP67 enclosure resistant to moisture',
      ],
    },

    'wehrle-etkw-eax': {
      slug: 'wehrle-etkw-eax',
      heading: 'Water meter portfolio',
      title: 'Wehrle ETK(W)-EAX',
      intro:
        'The Wehrle single-jet water meter is a precise and reliable device for measuring water consumption in residential and commercial installations, designed for long-term operation in challenging conditions.',
      image: {
        src: '/images/products/wodomierze/wehrle-etkw-eax.png',
        alt: 'Wehrle ETK(W)-EAX water meter',
      },
      description: [
        'The ETK(W)-EAX water meter is fully compatible with the Modularis ONE communication module.',
        'Download documentation: https://wehrle.de/en/metering/water/single-jet-dry-meters/single-jet-dry-modularis/#',
      ],
      featuresHeading: 'Key features',
      features: [
        'Ready for integration with any AMR system',
        'Temperature range: up to 50°C (cold water) and up to 90°C (hot water)',
        'Maximum flow rate (Q3): 2.5-4 m3/h',
        'High MID measurement accuracy class: R250 horizontal, R80 vertical',
        '360 rotatable register',
        'Nickel-plated brass housing',
        'Protection class IP64',
        'Pressure resistance up to 1.6 MPa',
      ],
    },

    'maddalena-sj-plus-evo': {
      slug: 'maddalena-sj-plus-evo',
      heading: 'Water meter portfolio',
      title: 'Maddalena SJ PLUS-EVO',
      intro:
        'The SJ PLUS-EVO water meter is a modern solution for residential applications, characterized by the highest quality workmanship and reliable measurement accuracy.',
      image: {
        src: '/images/products/wodomierze/maddalena-sj-plus-evo.png',
        alt: 'Maddalena SJ PLUS-EVO water meter',
      },
      description: [
        'The SJ PLUS-EVO water meter is fully compatible with the Modularis ONE communication module.',
        'Download documentation: https://www.maddalena.it/wp-content/uploads/catalog-pdf/schedatecnica-sjplus-en-v4.pdf',
      ],
      featuresHeading: 'Key features',
      features: [
        'Ready for integration with modern remote reading systems (wired and radio communication modules)',
        'Temperature range: up to 90°C (hot water)',
        'Maximum flow rate (Q3): 1.6 m3/h for DN15, 4.0 m3/h for DN20',
        'High MID measurement accuracy class: R max. 160',
        'Installation possibility in various positions',
        '360 rotatable register',
        'High resistance to magnetic field effects',
        'Available with sanitary certificate',
      ],
    },

    'wasser-geraete-eco': {
      slug: 'wasser-geraete-eco',
      heading: 'Water meter portfolio',
      title: 'Wasser-Geräte ECO',
      intro:
        'The ECO water meter from Wasser-Geräte ensures reliable measurement of both hot and cold water (up to 90C) and is an ideal solution for residential and commercial applications.',
      image: {
        src: '/images/products/wodomierze/wasser-geraete-eco.png',
        alt: 'Wasser-Geräte ECO water meter',
      },
      description: [
        'The ECO water meter is fully compatible with the Modularis ONE communication module.',
        'Download documentation: https://www.wasser-geraete.de/products/wohnungswasserzaehlereco/#',
      ],
      featuresHeading: 'Key features',
      features: [
        'Ready for integration with radio module, M-Bus, pulse output',
        'Temperature range: up to 50°C (cold water), up to 90°C (hot water)',
        'Maximum flow rate (Q3): 2.5 m3/h',
        'High durability and damage resistance, condensation-resistant construction',
        'Mounting options: horizontal/vertical',
      ],
    },

    'gwf-sonico-nano': {
      slug: 'gwf-sonico-nano',
      heading: 'Water meter portfolio',
      title: 'GWF Sonico Nano',
      intro:
        'GWF Sonico Nano is an advanced ultrasonic water meter offering the highest precision and durability in cold water measurements in residential construction and industry.',
      image: {
        src: '/images/products/wodomierze/gwf-sonico-nano.png',
        alt: 'GWF Sonico Nano ultrasonic water meter',
      },
      description: [
        'Sonico Nano is the ideal solution for everyone seeking high precision and measurement reliability.',
        'Download documentation: https://productfinder.gwf.ch/uploads_productfinder/downloads/Sonico_Brochure_Enlit-Version-2024_KIe10200_web_v04.pdf',
      ],
      featuresHeading: 'Key features',
      features: [
        'Ultrasonic water meter compatible with advanced remote reading systems (LoRaWAN, Wireless M-Bus)',
        'Temperature range: up to 50°C (cold water), up to 90°C (hot water)',
        'Maximum flow rate (Q3): 1.6 / 2.5 / 4 m3/h (depending on selected DN model)',
        'High MID measurement accuracy class: R1000',
        'Very low pressure losses',
        'Simple integration with automation systems',
        'Battery life up to 20 years',
      ],
    },

    'apator-js-smart-plus': {
      slug: 'apator-js-smart-plus',
      heading: 'Water meter portfolio',
      title: 'Apator Powogaz JS Smart+',
      intro:
        'The Apator Powogaz JS Smart+ water meter is a proven and reliable solution from the Polish market leader in water meters. Designed to measure water flow in residential installations, characterized by high durability and resistance to environmental conditions.',
      image: {
        src: '/images/products/wodomierze/apator-js-smart-plus.png',
        alt: 'Apator Powogaz JS Smart+ water meter',
      },
      description: [
        'The JS Smart+ water meter is fully compatible with MBus Smart+ and WMBus Smart+ communication modules.',
        'Download documentation: https://api.apator.com/uploads/oferta/woda-i-cieplo/wodomierze/smart-plus/smart-plus-karta-katalogowa.pdf',
      ],
      featuresHeading: 'Key features',
      features: [
        'Ready to work with various modules: Wireless M-Bus, pulse, M-Bus, inductive',
        'Temperature range: up to 50°C (cold water), up to 90°C (hot water)',
        'Maximum flow rate (Q3): 1.6 m3/h (DN15), 2.5 m3/h (DN20), 4.0 m3/h (DN20; depending on model)',
        'High accuracy class, MID compliance: R100 (H, DN15/20), R50 (V, DN15/20)',
        'Housing resistant to strong external magnetic fields',
        'Pressure resistance up to 16 bar',
        'Mounting possibility: register on top or side (horizontal/vertical mounting)',
      ],
    },

    'engelmann-senso-star-e': {
      slug: 'engelmann-senso-star-e',
      heading: 'Heat meter portfolio',
      title: 'Engelmann Senso Star E',
      intro:
        'The Engelmann Senso Star E heat meter is a precise and durable device for measuring heat consumption in closed systems, ensuring reliability and accuracy in accordance with EN 1434 standard.',
      image: {
        src: '/images/products/cieplomierze/engelmann-senso-star-e.png',
        alt: 'Engelmann Senso Star E heat meter',
      },
      description: [
        'The heat meter is compatible with the MicroClima WMBus communication module.',
        'Download documentation: https://www.engelmann.de/wp-content/uploads/2024/03/Datenblatt_SensoStar_E_2023_12_01_de.pdf',
      ],
      featuresHeading: 'Key features',
      features: [
        'Mechanical single-jet flow transducer with dynamic measurement cycle (2/60 s)',
        'Operating temperature range from 15C to 90C, maximum working pressure up to 16 bar',
        'Large, rotatable and multifunctional LCD display with monthly value memory',
        'Construction resistant to electromagnetic interference and with reverse flow detection',
      ],
    },

    'maddalena-microclima-evo': {
      slug: 'maddalena-microclima-evo',
      heading: 'Heat meter portfolio',
      title: 'Maddalena MicroClima Evo',
      intro:
        'Maddalena MicroClima Evo is a modern, compact heat meter designed for precise measurement of heat consumption in heating systems, particularly in residential buildings. It ensures durability and high accuracy.',
      image: {
        src: '/images/products/cieplomierze/maddalena-microclima-evo.png',
        alt: 'Maddalena MicroClima Evo heat meter',
      },
      description: [
        'The heat meter is compatible with the MicroClima WMBus communication module.',
        'Download documentation: https://www.maddalena.it/wp-content/uploads/catalog-pdf/schedatecnicamicroclimaevo-en-v4.pdf',
      ],
      featuresHeading: 'Key features',
      features: [
        'Single-jet flowmeter adapted for operation in a wide temperature range',
        'High metrological class and reading stability thanks to advanced technical solutions',
        'Intuitive user interface and remote data reading capability',
      ],
    },

    'ploumeter-rc12': {
      slug: 'ploumeter-rc12',
      heading: 'Heat meter portfolio',
      title: 'Ploumeter RC12',
      intro:
        'The RC12 Ploumeter heat meter is a precise and reliable measuring device for heating system applications, known for its solid construction and measurement accuracy. Ideal for systems requiring modern communication solutions.',
      image: {
        src: '/images/products/cieplomierze/ploumeter-rc12.png',
        alt: 'Ploumeter RC12 heat meter',
      },
      description: [
        'The heat meter is compatible with the RC12 WMBUS communication module.',
      ],
      featuresHeading: 'Key features',
      features: [
        'Single-jet mechanical flowmeter',
        'Support for high temperatures and working pressures in accordance with industry standards',
        'Easy installation and operation, as well as durable construction',
      ],
    },

    'range-one': {
      slug: 'range-one',
      heading: 'Infrastructure product overview',
      title: 'Range ONE',
      intro:
        'Radio receiver with Bluetooth technology compliant with Wireless M-Bus (EN 13757) and OMS standards, supporting various measuring devices regardless of manufacturer. A portable device designed for quick and convenient field data reading.',
      image: {
        src: '/images/products/infrastruktura/range-one.png',
        alt: 'Range ONE portable receiver',
      },
      description: [
        'Range ONE is a reliable field tool combining mobility, functionality and work comfort in one compact device.',
      ],
      featuresHeading: 'Key features',
      features: [
        'High sensitivity of 868 MHz receiver enabling reading in hard-to-reach places',
        'Bluetooth connectivity for wireless data transfer to Android devices (Route ONE app)',
        'Energy-efficient algorithms - battery operation up to 40 hours',
        'Ergonomic, durable housing with rubberized sides ensuring secure grip',
        'External antenna and USB port for battery charging',
        'Data reading and remote configuration capability of radio modules',
      ],
    },

    'eclipse-wmbus-gateway': {
      slug: 'eclipse-wmbus-gateway',
      heading: 'Infrastructure product overview',
      title: 'ECLIPSE WM-Bus Gateway',
      intro:
        'Battery-powered data concentrator for collecting information from water, heat, gas and energy meters. Powered by a battery with up to 11 years lifespan, it enables quick deployment and minimal installation costs at any location.',
      image: {
        src: '/images/products/infrastruktura/eclipse-wmbus-gateway.png',
        alt: 'ECLIPSE WM-Bus Gateway',
      },
      description: [
        'ECLIPSE WM-Bus Gateway is a reliable, economical data concentrator offering full control over telemetric systems at low operating costs.',
      ],
      featuresHeading: 'Key features',
      features: [
        'Remote management, diagnostics and flexible transmission protocols (HTTPS, MQTT, E-mail)',
        'Full compatibility with wM-Bus and OMS devices',
        '5G, 4G, NB-IoT connectivity ensuring stable connection',
        'High sensitivity of 868 MHz receiver for reading from hard-to-reach places',
        'Battery operation up to 11 years without servicing requirements',
        'Dust and UV resistant housing with aesthetic design',
        'Security sensors detecting opening and dismounting of the device',
      ],
    },

    'eclipse-wmbus-repeater': {
      slug: 'eclipse-wmbus-repeater',
      heading: 'Infrastructure product overview',
      title: 'ECLIPSE WM-Bus Repeater',
      intro:
        'Battery-powered device amplifying signal in Wireless M-Bus systems, ensuring uninterrupted operation for 11 years. Ideal for extensive measurement networks where installation simplicity and minimal maintenance costs matter.',
      image: {
        src: '/images/products/infrastruktura/eclipse-wmbus-repeater.png',
        alt: 'ECLIPSE WM-Bus Repeater',
      },
      description: [
        'ECLIPSE WM-Bus Repeater is a modern, energy-efficient solution increasing range and transmission reliability in telemetric systems, reducing service costs and accelerating deployments.',
      ],
      featuresHeading: 'Key features',
      features: [
        'Simple configuration, remote firmware update',
        'High sensitivity of 868 MHz receiver for effective reading in difficult conditions',
        'Support for Wireless M-Bus and OMS modes (S, T, C+T, etc.)',
        'Compatibility with various measuring devices',
        'Ability to create repeater chains (multi-hop)',
        'Solid, robust construction for industrial and urban applications (anti-vandalism protection)',
        'Battery power with lifespan up to 11 years',
      ],
    },

    'walk-by': {
      slug: 'walk-by',
      heading: 'Systems and platforms',
      title: 'Walk-by',
      intro:
        'Fast remote reading without errors or downtime. Based on the Range ONE device and the Route ONE app, the system automates data capture and device diagnostics in the field.',
      description: [
      ],
      featuresHeading: 'Key features',
      features: [
        'Automatic reading of water, heat, heating cost allocators, gas, and electricity meters',
        'Instant data transfer to the platform without physical access to meters',
        'Built-in diagnostics and servicing of measuring modules in the field',
        'Integration with Route ONE for reports and alarm handling',
        'Reliable communication in hard-to-reach locations thanks to 868 MHz radio',
        'Walk-by workflow shortens service time and reduces operational costs',
      ],
    },

    'star-fix': {
      slug: 'star-fix',
      heading: 'Systems and platforms',
      title: 'Star/Fix',
      intro:
        'Continuous supervision and full control over media using a star topology. Meters communicate directly with the concentrator or via repeaters to maintain visibility of the network.',
      description: [
      ],
      featuresHeading: 'Key features',
      features: [
        'Star architecture for devices compliant with Wireless M-Bus or OMS',
        'Automated readings and balancing of utility consumption',
        'Rapid response to alarms and anomalies through remote notifications',
        'Range extension with ECLIPSE or EXIO repeaters',
        'Central configuration of parameters and reading schedules',
        'Secure data handling with encryption and controlled access',
      ],
    },

    'mesh': {
      slug: 'mesh',
      heading: 'Systems and platforms',
      title: 'MESH',
      intro:
        'An intelligent self-configuring metering network that keeps communication running even in demanding conditions. Installation is as simple as powering the concentrator and starting the network.',
      description: [
      ],
      featuresHeading: 'Key features',
      features: [
        'Self-healing mesh topology guaranteeing transmission continuity',
        'Single data concentrator with automatic delivery to the cloud',
        'Minimal maintenance costs thanks to zero manual intervention',
        'Automatic discovery of new devices and route optimisation',
        'Scales to thousands of meters without loss of service quality',
        'Advanced real-time reports, alarms, and resource management',
      ],
    },

  },

  contact: {
    label: "Contact",
    heading: "Get in touch",
    description:
      "Have questions about our products or services? Contact us, and our team will be happy to answer all your questions.",
    cards: [
      { title: 'General inquiries', value: 'welcome@kayon.pl', type: 'email' },
      { title: 'Address', value: 'KAYON Sp. z o.o.\nAleja Zwycięstwa 96/98\n81-451 Gdynia\nPoland', type: 'address' },
      { title: 'Phone', value: '+48 577 570 814', type: 'phone' },
    ],
    form: {
      nameLabel: 'Your Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Your Email',
      emailPlaceholder: 'your@email.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Message subject',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Your message...',
      submitButton: 'SEND',
    },
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
      { label: 'Für wen?', href: '#nasi-klienci' },
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
      { label: 'Für wen?', href: '#nasi-klienci' },
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
      'Wir entwickeln unsere Lösungen für alle Marktteilnehmenden  -  Distributoren, Installationsbetriebe, Hausverwaltungen, Projektentwickler, Wohnungsgenossenschaften, Eigentümergemeinschaften sowie einzelne Bewohnerinnen und Bewohner.',
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
          'Unser Team besteht aus Ingenieurinnen, Ingenieuren und Fachleuten mit über zwanzig Jahren Erfahrung in der Messtechnik  -  Menschen, die die heutigen Standards maßgeblich geprägt haben.',
          'Deshalb sind unsere Lösungen technisch ausgereift, langlebig, erprobt und benutzerfreundlich  -  bereit für die Herausforderungen der Zukunft.',
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
          'Seit 2025 sind sie über die GWF AG  -  einen renommierten Schweizer Anbieter präziser Messtechnik  -  auch in Deutschland und ganz Europa verfügbar.',
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
      'Wir gewährleisten all das und behalten zugleich Energieeffizienz und Umweltschutz im Blick. Gut gestaltete Systeme sollen effizient und störungsfrei laufen  -  zum Vorteil von Menschen und Umwelt.',
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
          'Erhalten die volle Kontrolle über ihre Infrastruktur an einem Ort. ALL in KAYON bündelt Daten vieler Objekte  -  von Zählern über Warnungen bis zu Kosten  -  in Echtzeit.',
      },
      {
        title: 'Immobilienmanager',
        description:
          'Verlassen sich auf lückenlose Ablesungen und den Fernzugriff auf strukturierte Daten. Das System ermöglicht schnelle Verbrauchsberichte, erkennt Unregelmäßigkeiten und stellt die komplette Historie bereit.',
      },
      {
        title: 'Wohnungsgenossenschaften & WEGs',
        description:
          'Profitieren von transparenten Abrechnungen und einer einfachen Kontrolle individueller Verbräuche. Jede Bewohnerin und jeder Bewohner kann den eigenen Verbrauch einsehen  -  das entlastet die Verwaltung und reduziert Rückfragen.',
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
      'Kayon-Lösungen sind so konzipiert, dass jede beteiligte Person  -  vom Distributor über den Installateur bis zur Verwaltung und den Bewohnerinnen  -  echte Einsparungen erzielt, Ausgaben reduziert, manuelle Arbeit minimiert und mehr Kontrolle erhält.',
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
          'Die Konfiguration umfasst nur wenige Schritte und kann sogar remote durchgeführt werden  -  ohne Vor-Ort-Zugang.',
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
          'Die passende Hardware lässt sich frei wählen  -  ohne Abhängigkeit von einzelnen Herstellern.',
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
      'Wir erleichtern den Alltag aller Nutzerinnen und Nutzer  -  vom Distributor bis zur Endkundschaft.',
    cards: [
      {
        title: 'Produkte, die den Anwender in den Fokus stellen',
        bullets: [
          'laufen lange  -  bis zu 15 Jahre mit einer Batterie,',
          'arbeiten zuverlässig  -  auch bei Feuchtigkeit, Staub und Temperaturschwankungen,',
          'sind einfach zu installieren und zu konfigurieren (ohne Spezialwerkzeuge),',
          'verzeihen Montagefehler (z. B. verursacht eine falsche Verkabelung keinen Schaden).',
        ],
      },
      {
        title: 'Ein System  -  ALL in KAYON für alle Komponenten',
        bullets: [
          'Fernablesung in Echtzeit ohne Vor-Ort-Termine,',
          'automatische Warnungen und Berichte, die Zeit sparen,',
          'volle Kontrolle und Remote-Updates (OTA  -  Over-the-Air),',
          'weniger Stress und weniger Handarbeit für Installateure, Administratoren und Anwender.',
        ],
      },
    ],
  },
  products: {
    label: 'Produkte',
    heading: 'Produkte, die einen neuen Messstandard setzen',
    description:
      'Wir liefern mehr als Technologie  -  wir stellen Werkzeuge für Einsparungen, Automatisierung und Kontrolle bereit. Unsere Produkte bilden ein konsistentes ALL in KAYON-System, in dem jede Komponente perfekt zusammenspielt.',
    footnote:
      'Alle Kayon-Geräte werden vollständig in der Europäischen Union produziert und erfüllen die Normen CE, RED und EMC.',
    groups: [
      {
        title: 'Wasserzaehler',
        slug: 'wodomierze',
        items: ['Wehrle', 'Maddalena', 'Wasser-Geräte', 'GWF Sonico Nano', 'Apator JS Smart+'],
      },
      {
        title: 'Wärmezähler',
        slug: 'cieplomierze',
        items: ['Engelman SensoStar', 'Maddalena MicroClima', 'RC12 PloMeter'],
      },
      {
        title: 'Kommunikationsmodule',
        slug: 'moduly-komunikacyjne',
        items: ['Modularis ONE', 'wMBus Smart+', 'MBus Smart+', 'wMBus MicroClima', 'wMBus RC12'],
      },
      {
        title: 'Systeme & Plattformen',
        slug: 'systemy-i-platformy',
        items: [
          'Route One Mobile App',
          'OpenMetering Plattform (2WayCom, FOTA)',
          'Distributor-Portal',
          'Technologie-Dashboard',
        ],
      },
      {
        title: 'Infrastruktur',
        slug: 'infrastruktura',
        items: ['Range One', 'AC-Konzentrator', 'BAT-Konzentrator', 'Repeater'],
      },
    ],
    ctaLabel: 'Mehr erfahren',
  },

  productPage: {
    cards: [
      {
        title: 'Wasserzaehler',
        subtitle: 'Messportfolio',
        description:
          'Wasserzaehler, die mit den KAYON-Lösungen und Kommunikationsmodulen kompatibel sind.',
        features: [
          'Wehrle Wasserzaehler - ETK(W)-EAX',
          'Maddalena Wasserzaehler - SJ PLUS-EVO',
          'Wasser-Geräte Wasserzaehler - ECO',
          'GWF Wasserzaehler - Sonico Nano',
          'Apator Powogaz Wasserzaehler - JS Smart+',
        ],
        downloads: [],
        readMoreLabel: 'Produkte ansehen',
        slug: 'wehrle-etkw-eax',
        readMoreHref: '/produkty/wodomierze',
      },
      {
        title: 'Wärmezaehler',
        subtitle: 'Wärmeenergiemonitoring',
        description:
          'Geräte für die Fernablesung und Abrechnung von Wärme in Wohn- und Gewerbeobjekten.',
        features: [
          'Engelmann Wärmezaehler - Senso Star E',
          'Maddalena Wärmezaehler - MicroClima Evo',
          'Ploumeter Wärmezaehler - RC12',
        ],
        downloads: [],
        readMoreLabel: 'Produkte ansehen',
        readMoreHref: '/produkty/cieplomierze',
      },
      {
        title: 'Kommunikationsmodule',
        subtitle: 'Datenintegration',
        description:
          'Funk- und Kabelmodule für zuverl?ssige Datenerfassung und Konfiguration im Feld.',
        features: [
          'Modularis ONE',
          'wMBus Smart+',
          'MBus Smart+',
          'wMBus MicroClima',
          'wMBus RC12',
        ],
        downloads: [],
        readMoreLabel: 'Produkte ansehen',
        slug: 'modularis-one',
        readMoreHref: '/produkty/moduly-komunikacyjne',
      },
      {
        title: 'Systeme & Plattformen',
        subtitle: 'Datenmanagement',
        description:
          'KAYON-Software unterstuetzt Distributoren, Verwaltungen und Endanwender.',
        features: [
          'Route ONE Mobile App',
          'OpenMetering Plattform (2WayCom, FOTA)',
          'Distributor-Portal',
          'Technologie-Dashboard',
        ],
        downloads: [],
        readMoreLabel: 'Lösungen entdecken',
        readMoreHref: '/produkty/systemy-i-platformy',
      },
      {
        title: 'Infrastruktur',
        subtitle: 'Feld- und Netzwerktechnik',
        description:
          'Mobile und stationaere Geräte für den Aufbau von Fernauslese-Netzen.',
        features: [
          'Range ONE',
          'ECLIPSE WM-Bus Gateway',
          'ECLIPSE WM-Bus Repeater',
          'EIXO WM-Bus Gateway',
          'EXIO WM-Bus Repeater',
        ],
        downloads: [],
        readMoreLabel: 'Produkte ansehen',
        slug: 'range-one',
        readMoreHref: '/produkty/infrastruktura',
      },
    ],
  },

  productCategories: [
    {
      slug: 'wodomierze',
      title: 'Wasserzaehler',
      description: 'Wasserzaehler für Kayon Fernauslese- und Abrechnungssysteme.',
      items: ['wehrle-etkw-eax', 'maddalena-sj-plus-evo', 'wasser-geraete-eco', 'gwf-sonico-nano', 'apator-js-smart-plus'],
    },
    {
      slug: 'cieplomierze',
      title: 'Wärmezaehler',
      description: 'Wärmezaehler für Wohn- und Gewerbeanwendungen mit Systemintegration.',
      items: ['engelmann-senso-star-e', 'maddalena-microclima-evo', 'ploumeter-rc12'],
    },
    {
      slug: 'moduly-komunikacyjne',
      title: 'Kommunikationsmodule',
      description: 'Funk- und Kabelmodule zur Anbindung der Zaehler an Kayon Plattformen.',
      items: ['modularis-one', 'wmbus-smart-plus', 'mbus-smart-plus', 'wmbus-microclima', 'wmbus-rc12'],
    },
    {
      slug: 'systemy-i-platformy',
      title: 'Systeme & Plattformen',
      description: 'ALL in KAYON Systeme für Automatisierung und Datenmanagement.',
      items: ['walk-by', 'star-fix', 'mesh'],
    },
    {
      slug: 'infrastruktura',
      title: 'Infrastruktur',
      description: 'Feld- und Netzwerktechnik für den Aufbau von Fernauslese-Netzen.',
      items: ['range-one', 'eclipse-wmbus-gateway', 'eclipse-wmbus-repeater', 'eixo-wmbus-gateway', 'exio-wmbus-repeater'],
    },
  ],


  productDetails: {

    'modularis-one': {
      slug: 'modularis-one',
      heading: 'Kommunikationsmodule im Ueberblick',
      title: 'Modularis ONE',
      intro:
        'Kompaktes 868-MHz-Funkmodul für Modularis-Wasserzaehler, das Fernauslesung und Konfiguration in Walk-by- und AMR-Installationen ermoeglicht.',
      image: {
        src: '/images/products/moduly-komunikacyjne/modularis-one.png',
        alt: 'Modularis ONE Kommunikationsmodul',
      },
      description: [
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Bidirektionale Kommunikation mit Fernkonfiguration und Alarm-Reset',
        'Parallele Uebertragung von Walk-by- und stationaeren (AMR) Telegrammen',
        'Unterstuetzt Rahmenhistorie bis zu 15 Monaten',
        'Induktiver Sensor unempfindlich gegen magnetische Stoerungen',
        'Batterielebensdauer bis zu 11 Jahren, optionales IP68-Gehaeuse',
        'Konform mit EN 13757 und OMS',
      ],
    },

    'wmbus-smart-plus': {
      slug: 'wmbus-smart-plus',
      heading: 'Kommunikationsmodule im Ueberblick',
      title: 'WMBus Smart+',
      intro:
        'WMBus Smart+ ist ein kompaktes Funkmodul im Wireless M-Bus 868 MHz Standard, entwickelt für Smart+ und Smart C+ Wasserzaehler von Apator Powogaz. Es ermöglicht schnelle, zuverlaessige Fernauslesung. Es bietet erweiterte Ueberwachungsfunktionen für Unregelmaessigkeiten wie: Rueckfluss, Leckage, magnetische Manipulation oder niedrigen Batteriestand.',
      image: {
        src: '/images/products/moduly-komunikacyjne/wmbus-smart-plus.png',
        alt: 'WMBus Smart+ Funkmodul',
      },
      description: [
        'WMBus Smart+ ist eine innovative Lösung, die Flexibilitaet und Sicherheit bei der Fernueberwachung von Wasserzaehlern gewaehrleistet, mit der Moeglichkeit zur Ferndiagnose, Aenderung von Einstellungen und Loeschung von Alarmen, ohne die Notwendigkeit manueller Ablesungen oder Eingriffe in die Installation.',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Bidirektionale Funkkommunikation zur Fernauslesung, Konfiguration und Geraetediagnose',
        'Drei Datenuebertragungsmodi: short, long und long+ (mit Historie bis zu 15 Monaten)',
        'Volle Kompatibilitaet mit Smart+ und Smart C+ Wasserzaehlern von Apator Powogaz',
        'Optischer Sensor resistent gegen magnetische Stoerungen',
        'Einfache Montage ohne Verkabelung, Konfiguration ueber Range One Bluetooth und Route One App',
        'Uebertragungsreichweite bis zu 300 m in Sichtlinie',
        '3,6 V Lithiumbatterie mit Lebensdauer bis zu 11 Jahren',
        'Schutzart IP65, konform mit EN 13757 und OMS Normen',
      ],
    },

    'mbus-smart-plus': {
      slug: 'mbus-smart-plus',
      heading: 'Kommunikationsmodule im Ueberblick',
      title: 'MBus Smart+',
      intro:
        'Drahtgebundenes M-Bus-Modul, das Smart+-Zaehler mit Gebaeudeautomation und BMS-Infrastrukturen verbindet.',
      image: {
        src: '/images/products/moduly-komunikacyjne/mbus-smart-plus.png',
        alt: 'MBus Smart+ Modul',
      },
      description: [
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Versorgung direkt aus der M-Bus-Leitung ohne zusaetzliche Batterien',
        'Mehrgeraeteadressierung mit Kaskadierungsmoeglichkeit',
        'Sofortige und historische Ablesungen auf Abruf',
        'Busdiagnose und Stoerungsanzeige',
        'Hohe Bestaendigkeit gegen Ueberspannungen und Verdrahtungsfehler',
        'Kompaktes Gehaeuse für werkzeuglose Montage',
      ],
    },

    'wmbus-microclima': {
      slug: 'wmbus-microclima',
      heading: 'Kommunikationsmodule im Ueberblick',
      title: 'wMBus MicroClima',
      intro:
        'Funkmodul für MicroClima-Wärmezaehler, optimiert für Wohnanlagen mit haeufigen Fernauslesungen.',
      image: {
        src: '/images/products/moduly-komunikacyjne/wmbus-microclima.png',
        alt: 'wMBus MicroClima Funkmodul',
      },
      description: [
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        '868-MHz-Kommunikation gemaess OMS',
        'Integrierte Abrechnungsprofile mit bis zu 24 Monaten Speicher',
        'Energiesparmodus verlaengert die Batterielebensdauer',
        'Alarmierung bei Manipulation und Temperaturgrenzwerten',
        'Schnelle Konfiguration via NFC oder dem Route-ONE-Tool',
        'Einsatzbereich von -10C bis 55C',
      ],
    },

    'wmbus-rc12': {
      slug: 'wmbus-rc12',
      heading: 'Kommunikationsmodule im Ueberblick',
      title: 'wMBus RC12',
      intro:
        'Kommunikationsmodul für RC12-Wärmezaehler, ausgelegt für Walk-by- und stationaere Netze.',
      image: {
        src: '/images/products/moduly-komunikacyjne/wmbus-rc12.png',
        alt: 'wMBus RC12 Kommunikationsmodul',
      },
      description: [
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Uebertragung von Frames in den Modi T und C-T gemaess OMS',
        'Unterstuetzt Multi-Hop ueber EXIO- oder ECLIPSE-Repeater',
        'Erfasst hydraulische und energetische Alarme',
        'Fernanpassung des Ausleseintervalls',
        'Batterielebensdauer bis zu 12 Jahren bei 15-Minuten-Intervall',
        'Robustes IP67-Gehaeuse widersteht Feuchtigkeit',
      ],
    },

    'wehrle-etkw-eax': {
      slug: 'wehrle-etkw-eax',
      heading: 'Wasserzaehler im Ueberblick',
      title: 'Wehrle ETK(W)-EAX',
      intro:
        'Der Einstrahl-Wasserzaehler Wehrle ist ein präzises und zuverlässiges Geraet zur Messung des Wasserverbrauchs in privaten und gewerblichen Installationen, entwickelt für langfristigen Betrieb unter schwierigen Bedingungen.',
      image: {
        src: '/images/products/wodomierze/wehrle-etkw-eax.png',
        alt: 'Wehrle ETK(W)-EAX Wasserzaehler',
      },
      description: [
        'Der Wasserzaehler ETK(W)-EAX ist vollstaendig kompatibel mit dem Kommunikationsmodul Modularis ONE.',
        'Dokumentation herunterladen: https://wehrle.de/en/metering/water/single-jet-dry-meters/single-jet-dry-modularis/#',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Bereit zur Integration mit jedem AMR-System',
        'Temperaturbereich: bis 50°C (Kaltwasser) und bis 90°C (Warmwasser)',
        'Maximale Durchflussrate (Q3): 2,5-4 m3/h',
        'Hohe MID-Messgenauigkeitsklasse: R250 horizontal, R80 vertikal',
        'Um 360 drehbares Zaehlwerk',
        'Gehaeuse aus vernickeltem Messing',
        'Schutzart IP64',
        'Druckfestigkeit bis 1,6 MPa',
      ],
    },

    'maddalena-sj-plus-evo': {
      slug: 'maddalena-sj-plus-evo',
      heading: 'Wasserzaehler im Ueberblick',
      title: 'Maddalena SJ PLUS-EVO',
      intro:
        'Der Wasserzaehler SJ PLUS-EVO ist eine moderne Lösung für den Hausgebrauch, die sich durch hoechste Verarbeitungsqualitaet und zuverlässige Messgenauigkeit auszeichnet.',
      image: {
        src: '/images/products/wodomierze/maddalena-sj-plus-evo.png',
        alt: 'Maddalena SJ PLUS-EVO Wasserzaehler',
      },
      description: [
        'Der Wasserzaehler SJ PLUS-EVO ist vollstaendig kompatibel mit dem Kommunikationsmodul Modularis ONE.',
        'Dokumentation herunterladen: https://www.maddalena.it/wp-content/uploads/catalog-pdf/schedatecnica-sjplus-en-v4.pdf',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Bereit zur Integration mit modernen Fernablesungssystemen (kabelgebundene und Funk-Kommunikationsmodule)',
        'Temperaturbereich: bis 90°C (Warmwasser)',
        'Maximale Durchflussrate (Q3): 1,6 m3/h für DN15, 4,0 m3/h für DN20',
        'Hohe MID-Messgenauigkeitsklasse: R max. 160',
        'Installationsmoeglichkeit in verschiedenen Positionen',
        'Um 360 drehbares Zaehlwerk',
        'Hohe Bestaendigkeit gegen magnetische Felder',
        'Erhaeltlich mit Hygienezertifikat',
      ],
    },

    'wasser-geraete-eco': {
      slug: 'wasser-geraete-eco',
      heading: 'Wasserzaehler im Ueberblick',
      title: 'Wasser-Geräte ECO',
      intro:
        'Der Wasserzaehler ECO von Wasser-Geräte gewährleistet zuverlässige Messung sowohl von warmem als auch kaltem Wasser (bis 90C) und ist die ideale Lösung für Wohn- und Gewerbeanwendungen.',
      image: {
        src: '/images/products/wodomierze/wasser-geraete-eco.png',
        alt: 'Wasser-Geräte ECO Wasserzaehler',
      },
      description: [
        'Der Wasserzaehler ECO ist vollstaendig kompatibel mit dem Kommunikationsmodul Modularis ONE.',
        'Dokumentation herunterladen: https://www.wasser-geraete.de/products/wohnungswasserzaehlereco/#',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Bereit zur Integration mit Funkmodul, M-Bus, Impulsausgang',
        'Temperaturbereich: bis 50°C (Kaltwasser), bis 90°C (Warmwasser)',
        'Maximale Durchflussrate (Q3): 2,5 m3/h',
        'Hohe Langlebigkeit und Beschaedigungsbestaendigkeit, kondensationsbestaendige Konstruktion',
        'Montageoptionen: horizontal/vertikal',
      ],
    },

    'gwf-sonico-nano': {
      slug: 'gwf-sonico-nano',
      heading: 'Wasserzaehler im Ueberblick',
      title: 'GWF Sonico Nano',
      intro:
        'GWF Sonico Nano ist ein fortschrittlicher Ultraschall-Wasserzaehler, der hoechste Praezision und Langlebigkeit bei der Kaltwassermessung im Wohnungsbau und in der Industrie bietet.',
      image: {
        src: '/images/products/wodomierze/gwf-sonico-nano.png',
        alt: 'GWF Sonico Nano Wasserzaehler',
      },
      description: [
        'Sonico Nano ist die ideale Lösung für alle, die hoechste Praezision und Messzuverlässigkeit suchen.',
        'Dokumentation herunterladen: https://productfinder.gwf.ch/uploads_productfinder/downloads/Sonico_Brochure_Enlit-Version-2024_KIe10200_web_v04.pdf',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Ultraschall-Wasserzaehler kompatibel mit fortschrittlichen Fernablesungssystemen (LoRaWAN, Wireless M-Bus)',
        'Temperaturbereich: bis 50°C (Kaltwasser), bis 90°C (Warmwasser)',
        'Maximale Durchflussrate (Q3): 1,6 / 2,5 / 4 m3/h (je nach gewaehltem DN-Modell)',
        'Hohe MID-Messgenauigkeitsklasse: R1000',
        'Sehr geringe Druckverluste',
        'Einfache Integration mit Automatisierungssystemen',
        'Batterielebensdauer bis zu 20 Jahren',
      ],
    },

    'apator-js-smart-plus': {
      slug: 'apator-js-smart-plus',
      heading: 'Wasserzaehler im Ueberblick',
      title: 'Apator Powogaz JS Smart+',
      intro:
        'Der Wasserzaehler Apator Powogaz JS Smart+ ist eine bewaehrte und zuverlässige Lösung vom polnischen Marktfuehrer für Wasserzaehler. Entwickelt zur Messung des Wasserdurchflusses in Hausinstallationen, zeichnet er sich durch hohe Langlebigkeit und Bestaendigkeit gegen Umweltbedingungen aus.',
      image: {
        src: '/images/products/wodomierze/apator-js-smart-plus.png',
        alt: 'Apator Powogaz JS Smart+ Wasserzaehler',
      },
      description: [
        'Der Wasserzaehler JS Smart+ ist vollstaendig kompatibel mit den Kommunikationsmodulen MBus Smart+ und WMBus Smart+.',
        'Dokumentation herunterladen: https://api.apator.com/uploads/oferta/woda-i-cieplo/wodomierze/smart-plus/smart-plus-karta-katalogowa.pdf',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Bereit zur Zusammenarbeit mit verschiedenen Modulen: Wireless M-Bus, Impuls, M-Bus, induktiv',
        'Temperaturbereich: bis 50°C (Kaltwasser), bis 90°C (Warmwasser)',
        'Maximale Durchflussrate (Q3): 1,6 m3/h (DN15), 2,5 m3/h (DN20), 4,0 m3/h (DN20; je nach Modell)',
        'Hohe Genauigkeitsklasse, MID-Konformitaet: R100 (H, DN15/20), R50 (V, DN15/20)',
        'Gehaeuse bestaendig gegen starke externe Magnetfelder',
        'Druckfestigkeit bis 16 bar',
        'Montagemoeglichkeit: Zaehlwerk oben oder seitlich (horizontale/vertikale Montage)',
      ],
    },

    'engelmann-senso-star-e': {
      slug: 'engelmann-senso-star-e',
      heading: 'Warmezaehler im Ueberblick',
      title: 'Engelmann Senso Star E',
      intro:
        'Der Wärmezaehler Engelmann Senso Star E ist ein präzises und langlebiges Geraet zur Messung des Wärmeverbrauchs in geschlossenen Systemen und gewährleistet Zuverlaessigkeit und Genauigkeit gemaess der Norm EN 1434.',
      image: {
        src: '/images/products/cieplomierze/engelmann-senso-star-e.png',
        alt: 'Engelmann Senso Star E Wärmezaehler',
      },
      description: [
        'Der Wärmezaehler ist kompatibel mit dem Kommunikationsmodul MicroClima WMBus.',
        'Dokumentation herunterladen: https://www.engelmann.de/wp-content/uploads/2024/03/Datenblatt_SensoStar_E_2023_12_01_de.pdf',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Mechanischer Einstrahl-Durchflusswandler mit dynamischem Messzyklus (2/60 s)',
        'Betriebstemperaturbereich von 15C bis 90C, maximaler Betriebsdruck bis 16 bar',
        'Grosses, drehbares und multifunktionales LCD-Display mit Monatswert-Speicher',
        'Konstruktion resistent gegen elektromagnetische Stoerungen und mit Rueckflusserkennung',
      ],
    },

    'maddalena-microclima-evo': {
      slug: 'maddalena-microclima-evo',
      heading: 'Warmezaehler im Ueberblick',
      title: 'Maddalena MicroClima Evo',
      intro:
        'Maddalena MicroClima Evo ist ein moderner, kompakter Wärmezaehler für die präzise Messung des Wärmeverbrauchs in Heizsystemen, insbesondere im Wohnungsbau. Er gewährleistet Langlebigkeit und hohe Genauigkeit.',
      image: {
        src: '/images/products/cieplomierze/maddalena-microclima-evo.png',
        alt: 'Maddalena MicroClima Evo Wärmezaehler',
      },
      description: [
        'Der Wärmezaehler ist kompatibel mit dem Kommunikationsmodul MicroClima WMBus.',
        'Dokumentation herunterladen: https://www.maddalena.it/wp-content/uploads/catalog-pdf/schedatecnicamicroclimaevo-en-v4.pdf',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Einstrahl-Durchflussmesser für den Betrieb in einem weiten Temperaturbereich',
        'Hohe metrologische Klasse und Anzeigenstabilitaet dank fortschrittlicher technischer Lösungen',
        'Intuitive Benutzeroberflaeche und Moeglichkeit zur Fernauslesung der Daten',
      ],
    },

    'ploumeter-rc12': {
      slug: 'ploumeter-rc12',
      heading: 'Warmezaehler im Ueberblick',
      title: 'Ploumeter RC12',
      intro:
        'Der Wärmezaehler RC12 Ploumeter ist ein präzises und zuverlässiges Messgeraet für den Einsatz in Heizungsanlagen, bekannt für seine solide Konstruktion und Messgenauigkeit. Ideal für Systeme, die moderne Kommunikationsloesungen erfordern.',
      image: {
        src: '/images/products/cieplomierze/ploumeter-rc12.png',
        alt: 'Ploumeter RC12 Wärmezaehler',
      },
      description: [
        'Der Wärmezaehler ist kompatibel mit dem Kommunikationsmodul RC12 WMBUS.',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Mechanischer Einstrahl-Durchflussmesser',
        'Unterstuetzung hoher Temperaturen und Betriebsdruecke gemaess Branchennormen',
        'Einfache Montage und Bedienung sowie langlebige Konstruktion',
      ],
    },

    'range-one': {
      slug: 'range-one',
      heading: 'Infrastrukturprodukte im Ueberblick',
      title: 'Range ONE',
      intro:
        'Funkempfaenger mit Bluetooth-Technologie, konform mit den Standards Wireless M-Bus (EN 13757) und OMS, der verschiedene Messgeraete unabhaengig vom Hersteller unterstuetzt. Ein tragbares Geraet für schnelle und bequeme Datenauslesung im Feld.',
      image: {
        src: '/images/products/infrastruktura/range-one.png',
        alt: 'Range ONE Funkempfaenger',
      },
      description: [
        'Range ONE ist ein zuverlässiges Feldgeraet, das Mobilitaet, Funktionalitaet und Arbeitskomfort in einem kompakten Geraet vereint.',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Hohe Empfindlichkeit des 868-MHz-Empfaengers ermoeglicht Auslesung an schwer zugaenglichen Orten',
        'Bluetooth-Konnektivitaet zur drahtlosen Datenuebertragung auf Android-Geräte (Route ONE App)',
        'Energiesparende Algorithmen - Batteriebetrieb bis zu 40 Stunden',
        'Ergonomisches, robustes Gehaeuse mit gummierten Seiten für sicheren Griff',
        'Externe Antenne und USB-Port zum Laden der Batterie',
        'Moeglichkeit zur Datenauslesung und Fernkonfiguration von Funkmodulen',
      ],
    },

    'eclipse-wmbus-gateway': {
      slug: 'eclipse-wmbus-gateway',
      heading: 'Infrastrukturprodukte im Ueberblick',
      title: 'ECLIPSE WM-Bus Gateway',
      intro:
        'Batteriebetriebener Datenkonzentrator zur Erfassung von Informationen von Wasser-, Wärme-, Gas- und Energiezaehlern. Mit einer Batterielebensdauer von bis zu 11 Jahren ermoeglicht er eine schnelle Implementierung und minimale Installationskosten an jedem Standort.',
      image: {
        src: '/images/products/infrastruktura/eclipse-wmbus-gateway.png',
        alt: 'ECLIPSE WM-Bus Gateway',
      },
      description: [
        'ECLIPSE WM-Bus Gateway ist ein zuverlässiger, wirtschaftlicher Datenkonzentrator, der volle Kontrolle ueber telemetrische Systeme bei niedrigen Betriebskosten bietet.',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Fernverwaltung, Diagnose und flexible Uebertragungsprotokolle (HTTPS, MQTT, E-Mail)',
        'Vollstaendige Kompatibilitaet mit wM-Bus- und OMS-Geräten',
        '5G-, 4G-, NB-IoT-Konnektivitaet für stabile Verbindung',
        'Hohe Empfindlichkeit des 868-MHz-Empfaengers zum Auslesen von schwer zugaenglichen Orten',
        'Batteriebetrieb bis zu 11 Jahren ohne Wartungsbedarf',
        'Staub- und UV-bestaendiges Gehaeuse mit aesthetischem Design',
        'Sicherheitssensoren zur Erkennung von Oeffnung und Demontage des Geraets',
      ],
    },

    'eclipse-wmbus-repeater': {
      slug: 'eclipse-wmbus-repeater',
      heading: 'Infrastrukturprodukte im Ueberblick',
      title: 'ECLIPSE WM-Bus Repeater',
      intro:
        'Batteriebetriebenes Geraet zur Signalverstaerkung in Wireless M-Bus-Systemen, das einen unterbrechungsfreien Betrieb für 11 Jahre gewährleistet. Ideal für weitlaeufige Messnetze, bei denen einfache Montage und minimale Wartungskosten entscheidend sind.',
      image: {
        src: '/images/products/infrastruktura/eclipse-wmbus-repeater.png',
        alt: 'ECLIPSE WM-Bus Repeater',
      },
      description: [
        'ECLIPSE WM-Bus Repeater ist eine moderne, energiesparende Lösung, die Reichweite und Zuverlaessigkeit der Uebertragung in telemetrischen Systemen erhoeht, Servicekosten reduziert und Implementierungen beschleunigt.',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Einfache Konfiguration, Firmware-Aktualisierung aus der Ferne',
        'Hohe Empfindlichkeit des 868-MHz-Empfaengers für effektives Auslesen unter schwierigen Bedingungen',
        'Unterstuetzung von Wireless M-Bus- und OMS-Modi (S, T, C+T usw.)',
        'Kompatibilitaet mit verschiedenen Messgeraeten',
        'Moeglichkeit zur Erstellung von Repeater-Ketten (Multi-Hop)',
        'Solide, robuste Konstruktion für industrielle und staedtische Anwendungen (Vandalismusschutz)',
        'Batteriebetrieb mit einer Lebensdauer von bis zu 11 Jahren',
      ],
    },

    'walk-by': {
      slug: 'walk-by',
      heading: 'Systeme und Plattformen',
      title: 'Walk-by',
      intro:
        'Schnelle Fernauslesung ohne Fehler und Ausfallzeiten. Basierend auf dem Geraet Range ONE und der App Route ONE automatisiert das System die Datenerfassung und Gerätediagnose im Feld.',
      description: [
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Automatische Auslesung von Wasser-, Wärme-, Heizkosten-, Gas- und Stromzaehlern',
        'Sofortige Datenuebertragung in die Plattform ohne physischen Zugang zu den Zaehlern',
        'Integrierte Diagnose und Service für Messmodule vor Ort',
        'Integration mit Route ONE für Berichte und Alarmverwaltung',
        'Zuverlaessige Kommunikation an schwer zugaenglichen Stellen dank 868-MHz-Funk',
        'Walk-by-Prozess verkuerzt Servicezeiten und reduziert Betriebskosten',
      ],
    },

    'star-fix': {
      slug: 'star-fix',
      heading: 'Systeme und Plattformen',
      title: 'Star/Fix',
      intro:
        'Kontinuierliche Ueberwachung und volle Kontrolle ueber Medien in einer Stern-Topologie. Zaehler kommunizieren direkt mit dem Konzentrator oder ueber Repeater, um die Netzabdeckung sicherzustellen.',
      description: [
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Sternarchitektur für Geräte nach Wireless-M-Bus oder OMS',
        'Automatisierte Ablesung und Bilanzierung des Verbrauchs',
        'Schnelle Reaktion auf Alarme und Anomalien durch Fernbenachrichtigungen',
        'Reichweitenerweiterung mit ECLIPSE- oder EXIO-Repeatern',
        'Zentrale Konfiguration von Parametern und Ausleseplaenen',
        'Sichere Datenverarbeitung durch Verschluesselung und Zugriffskontrolle',
      ],
    },

    'mesh': {
      slug: 'mesh',
      heading: 'Systeme und Plattformen',
      title: 'MESH',
      intro:
        'Intelligentes, selbstkonfigurierendes Messnetz, das auch unter schwierigen Bedingungen eine zuverlässige Kommunikation sicherstellt. Die Installation beschraenkt sich auf das Einschalten des Konzentrators.',
      description: [
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Selbstheilende Mesh-Topologie für dauerhafte Uebertragung',
        'Ein Datenkonzentrator mit automatischer Cloud-Uebermittlung',
        'Minimale Wartungskosten durch fehlende manuelle Eingriffe',
        'Automatische Erkennung neuer Geräte und Routenoptimierung',
        'Skalierbar auf tausende Zaehler ohne Qualitaetseinbussen',
        'Umfassende Echtzeitberichte, Alarme und Ressourcenmanagement',
      ],
    },

  },

  contact: {
    label: "Kontakt",
    heading: "Kontaktieren Sie uns",
    description:
      "Haben Sie Fragen zu unseren Produkten oder Dienstleistungen? Kontaktieren Sie uns, und unser Team beantwortet gerne alle Ihre Fragen.",
    cards: [
      { title: 'Allgemeine Anfragen', value: 'welcome@kayon.pl', type: 'email' },
      { title: 'Adresse', value: 'KAYON Sp. z o.o.\nAleja Zwycięstwa 96/98\n81-451 Gdynia\nPolen', type: 'address' },
      { title: 'Telefon', value: '+48 577 570 814', type: 'phone' },
    ],
    form: {
      nameLabel: 'Ihr Name',
      namePlaceholder: 'Ihr Name',
      emailLabel: 'Ihre E-Mail',
      emailPlaceholder: 'ihre@email.de',
      subjectLabel: 'Betreff',
      subjectPlaceholder: 'Nachrichtenbetreff',
      messageLabel: 'Ihre Nachricht',
      messagePlaceholder: 'Ihre Nachricht...',
      submitButton: 'SENDEN',
    },
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

