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
  slug?: string;
  readMoreHref: string;
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
}

export type ProductDetailsContent = Record<string, ProductDetailContent>;

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
  productDetails: ProductDetailsContent;
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
      'Dostarczamy narzędzia do oszczędności, automatyzacji i kontroli. Nasze produkty tworzą spójny system ALL in KAYON, w którym każdy element współpracuje z pozostałymi.',
    footnote:
      'Produkcja wszystkich urządzeń Kayon odbywa się w 100% na terenie Unii Europejskiej, zgodnie z normami CE, RED i EMC.',
    groups: [
      {
        title: 'Wodomierze',
        items: ['Wehrle', 'Maddalena', 'Wasser-Geraete', 'GWF Sonico Nano', 'Apator JS Smart+'],
      },
      {
        title: 'Ciepłomierze',
        items: ['Engelman SensoStar', 'Maddalena MicroClima', 'RC12 PloMeter'],
      },
      {
        title: 'Moduły komunikacyjne',
        items: ['Modularis ONE', 'wMBus Smart+', 'MBus Smart+', 'wMBus MicroClima', 'wMBus RC12'],
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
        title: 'Wodomierze',
        subtitle: 'Portfolio pomiarowe',
        description:
          'Liczniki wody kompatybilne z platformami KAYON i modulami komunikacyjnymi.',
        features: [
          'Wodomierz Wehrle - ETK(W)-EAX',
          'Wodomierz Maddalena - SJ PLUS-EVO',
          'Wodomierz Wasser-Geraete - ECO',
          'Wodomierz GWF - Sonico Nano',
          'Wodomierz Apator Powogaz - JS Smart+',
        ],
        downloads: [],
        readMoreLabel: 'Zobacz produkty',
        slug: 'wehrle-etkw-eax',
        readMoreHref: '#',
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
        readMoreHref: '#',
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
        readMoreHref: '#',
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
        readMoreHref: '#',
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
        readMoreHref: '#',
      },
    ],
  },



  productDetails: {
    'modularis-one': {
      slug: 'modularis-one',
      heading: 'Opis poszczegolnych modulow komunikacyjnych',
      title: 'Modularis ONE',
      intro:
        'Kompaktowy modul radiowy w standardzie wM-Bus 868 MHz do zdalnego odczytu wodomierzy Modularis. Umozliwia integracje z systemami walk-by i AMR oraz zapewnia stabilna bezprzewodowa transmisje danych. Dwukierunkowa komunikacja pozwala zdalnie konfigurowac urzadzenia, kasowac alarmy i prowadzic diagnostyke.',
      description: [
        'Modularis ONE to nowoczesne rozwiazanie do efektywnego i bezpiecznego monitoringu wodomierzy, zapewniajace elastycznosc i skalowalnosc systemu odczytowego bez koniecznosci okablowania czy recznego zbierania danych.',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Dwukierunkowa komunikacja umozliwiajaca zdalna konfiguracje, kasowanie alarmow i diagnostyke',
        'Kompatybilnosc z wieloma wodomierzami Modularis oraz urzadzeniami innych producentow',
        'Rownolegla transmisja radiotelegramow w trybie walk-by i AMR (stacjonarny odczyt)',
        'Transmisja krotkich, dlugich i rozszerzonych ramek z historia danych do 15 miesiecy',
        'Indukcyjny sensor odporny na zaklocenia magnetyczne',
        'Dlugi czas pracy baterii do 11 lat',
        'Stopien ochrony IP54 (opcjonalnie IP68)',
        'Zgodnosc z normami EN 13757 i OMS',
      ],
    },
    'wehrle-etkw-eax': {
      slug: 'wehrle-etkw-eax',
      heading: 'Opis poszczegolnych wodomierzy',
      title: 'Wehrle ETK(W)-EAX',
      intro:
        'Wodomierz jednostrumieniowy Wehrle to precyzyjne i niezawodne urzadzenie do pomiaru zuzycia wody w instalacjach domowych i komercyjnych, zaprojektowane z mysla o dlugotrwala prace w trudnych warunkach.',
      description: [
        'Wodomierz ETK(W)-EAX jest w pelni kompatybilny z modulem komunikacyjnym Modularis ONE.',
        'Pobierz dokumentacje: https://wehrle.de/en/metering/water/single-jet-dry-meters/single-jet-dry-modularis/#',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Gotowy do integracji z dowolnym systemem AMR',
        'Zakres temperatur: do 50C (zimna woda) oraz do 90C (ciepla woda)',
        'Maksymalne natezenie przeplywu (Q3): 2,5-4 m3/h',
        'Wysoka klasa dokladnosci pomiaru MID: R250 poziomo, R80 pionowo',
        'Obracane w zakresie 360 liczydlo',
        'Obudowa z niklowanego mosiadzu',
        'Klasa szczelnosci IP64',
        'Wytrzymalosc do 1,6 MPa',
      ],
    },
    'maddalena-sj-plus-evo': {
      slug: 'maddalena-sj-plus-evo',
      heading: 'Opis poszczegolnych wodomierzy',
      title: 'Maddalena SJ PLUS-EVO',
      intro:
        'Wodomierz SJ PLUS-EVO to nowoczesne rozwiazanie do zastosowan domowych, charakteryzujace sie najwyzsza jakoscia wykonania i niezawodna precyzja pomiarowa.',
      description: [
        'Wodomierz SJ PLUS-EVO jest w pelni kompatybilny z modulem komunikacyjnym Modularis ONE.',
        'Pobierz dokumentacje: https://www.maddalena.it/wp-content/uploads/catalog-pdf/schedatecnica-sjplus-en-v4.pdf',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Gotowy do integracji z nowoczesnymi systemami zdalnego odczytu (przewodowe i radiowe moduly komunikacyjne)',
        'Zakres temperatur: do 90C (ciepla woda)',
        'Maksymalne natezenie przeplywu (Q3): 1,6 m3/h dla DN15, 4,0 m3/h dla DN20',
        'Wysoka klasa dokladnosci pomiaru MID: R maks. 160',
        'Mozliwosc instalacji w roznych pozycjach',
        'Obracane o 360 liczydlo',
        'Wysoka odpornosc na dzialanie pola magnetycznego',
        'Dostepny z certyfikatem sanitarnym',
      ],
    },
    'wasser-geraete-eco': {
      slug: 'wasser-geraete-eco',
      heading: 'Opis poszczegolnych wodomierzy',
      title: 'Wasser-Geraete ECO',
      intro:
        'Wodomierz ECO od Wasser-Geraete zapewnia niezawodny pomiar zarowno cieplej, jak i zimnej wody (do 90C) i jest idealnym rozwiazaniem do zastosowan mieszkaniowych i komercyjnych.',
      description: [
        'Wodomierz ECO jest w pelni kompatybilny z modulem komunikacyjnym Modularis ONE.',
        'Pobierz dokumentacje: https://www.wasser-geraete.de/products/wohnungswasserzaehlereco/#',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Gotowy do integracji z nakladka radiowa, M-Bus, impulsowa',
        'Zakres temperatur: do 50C (zimna woda), do 90C (ciepla woda)',
        'Maksymalne natezenie przeplywu (Q3): 2,5 m3/h',
        'Wysoka trwalosc i odpornosc na uszkodzenia, konstrukcja odporna na kondensacje',
        'Opcje montazowe: poziomo/pionowo',
      ],
    },
    'gwf-sonico-nano': {
      slug: 'gwf-sonico-nano',
      heading: 'Opis poszczegolnych wodomierzy',
      title: 'GWF Sonico Nano',
      intro:
        'GWF Sonico Nano to zaawansowany, ultradzwiekowy wodomierz oferujacy najwyzsza precyzje i trwalosc w pomiarach zimnej wody w budownictwie mieszkaniowym oraz w przemysle.',
      description: [
        'Sonico Nano to idealne rozwiazanie dla wszystkich poszukujacych wysokiej precyzji oraz niezawodnosci pomiarow.',
        'Pobierz dokumentacje: https://productfinder.gwf.ch/uploads_productfinder/downloads/Sonico_Brochure_Enlit-Version-2024_KIe10200_web_v04.pdf',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Ultradzwiekowy wodomierz kompatybilny z zaawansowanymi systemami zdalnego odczytu (LoRaWAN, Wireless M-Bus)',
        'Zakres temperatur: do 50C (zimna woda), do 90C (ciepla woda)',
        'Maksymalne natezenie przeplywu (Q3): 1,6 / 2,5 / 4 m3/h (w zaleznosci od wybranego modelu DN)',
        'Wysoka klasa dokladnosci pomiaru MID: R1000',
        'Bardzo niskie straty cisnienia',
        'Prosta integracja z systemami automatyzacji',
        'Czas pracy na baterii do 20 lat',
      ],
    },
    'apator-js-smart-plus': {
      slug: 'apator-js-smart-plus',
      heading: 'Opis poszczegolnych wodomierzy',
      title: 'Apator Powogaz JS Smart+',
      intro:
        'Wodomierz Apator Powogaz JS Smart+ to sprawdzone i niezawodne rozwiazanie od polskiego lidera rynku wodomierzy. Zaprojektowane do pomiaru przeplywu wody w instalacjach domowych, cechujace sie wysoka trwaloscia i odpornoscia na warunki srodowiskowe.',
      description: [
        'Wodomierz JS Smart+ jest w pelni kompatybilny z modulami komunikacyjnymi MBus Smart+ i WMBus Smart+.',
        'Pobierz dokumentacje: https://api.apator.com/uploads/oferta/woda-i-cieplo/wodomierze/smart-plus/smart-plus-karta-katalogowa.pdf',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Gotowy do wspolpracy z roznymi nakladkami: Wireless M-Bus, impulsowa, M-Bus, indukcyjna',
        'Zakres temperatur: do 50C (zimna woda), do 90C (ciepla woda)',
        'Maksymalne natezenie przeplywu (Q3): 1,6 m3/h (DN15), 2,5 m3/h (DN20), 4,0 m3/h (DN20; zaleznie od modelu)',
        'Wysoka klasa dokladnosci, zgodnosc z MID: R100 (H, DN15/20), R50 (V, DN15/20)',
        'Obudowa odporna na dzialanie silnego zewnetrznego pola magnetycznego',
        'Wytrzymalosc do 16 bar',
        'Mozliwosc montazu: liczydlo na gorze lub z boku (poziomy/pionowy montaz)',
      ],
    },
    'engelmann-senso-star-e': {
      slug: 'engelmann-senso-star-e',
      heading: 'Opis poszczegolnych cieplomierzy',
      title: 'Engelmann Senso Star E',
      intro:
        'Cieplomierz Engelmann Senso Star E to precyzyjne i trwale urzadzenie do pomiaru zuzycia ciepla w ukladach zamknietych, zapewniajace niezawodnosc i dokladnosc zgodna z norma EN 1434.',
      description: [
        'Cieplomierz kompatybilny z nakladka komunikacyjna MicroClima WMBus.',
        'Pobierz dokumentacje: https://www.engelmann.de/wp-content/uploads/2024/03/Datenblatt_SensoStar_E_2023_12_01_de.pdf',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Mechaniczny, jednostrumieniowy przetwornik przeplywu z dynamicznym cyklem pomiarowym (2/60 s)',
        'Zakres temperatur pracy od 15C do 90C, maksymalne cisnienie robocze do 16 bar',
        'Duzy, obrotowy i wielofunkcyjny wyswietlacz LCD z pamiecia wartosci miesiecznych',
        'Konstrukcja odporna na zaklocenia elektromagnetyczne i z funkcja wykrywania przeplywu wstecznego',
      ],
    },
    'maddalena-microclima-evo': {
      slug: 'maddalena-microclima-evo',
      heading: 'Opis poszczegolnych cieplomierzy',
      title: 'Maddalena MicroClima Evo',
      intro:
        'Maddalena MicroClima Evo to nowoczesny, kompaktowy cieplomierz przeznaczony do precyzyjnego pomiaru zuzycia ciepla w systemach grzewczych, szczegolnie w budownictwie mieszkaniowym. Zapewnia trwalosc i wysoka dokladnosc.',
      description: [
        'Cieplomierz kompatybilny z nakladka komunikacyjna MicroClima WMBus.',
        'Pobierz dokumentacje: https://www.maddalena.it/wp-content/uploads/catalog-pdf/schedatecnicamicroclimaevo-en-v4.pdf',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Jednostrumieniowy przeplywomierz dostosowany do pracy w szerokim zakresie temperatur',
        'Wysoka klasa metrologiczna i stabilnosc wskazan dzieki zaawansowanym rozwiazaniom technicznym',
        'Intuicyjny interfejs uzytkownika oraz mozliwosc zdalnego odczytu danych',
      ],
    },
    'ploumeter-rc12': {
      slug: 'ploumeter-rc12',
      heading: 'Opis poszczegolnych cieplomierzy',
      title: 'Ploumeter RC12',
      intro:
        'Cieplomierz RC12 Ploumeter to precyzyjne i niezawodne urzadzenie pomiarowe do zastosowan w instalacjach grzewczych, znane z solidnej konstrukcji i precyzji pomiaru. Idealny do systemow wymagajacych nowoczesnych rozwiazan komunikacyjnych.',
      description: [
        'Cieplomierz kompatybilny z nakladka komunikacyjna RC12 WMBUS.',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Jednostrumieniowy mechaniczny przeplywomierz',
        'Obsluga wysokich temperatur i cisnien roboczych zgodnie z normami branzowymi',
        'Latwy montaz i obsluga, oraz wytrzymala konstrukcja',
      ],
    },
    'range-one': {
      slug: 'range-one',
      heading: 'Opis poszczegolnych elementow infrastruktury',
      title: 'Range ONE',
      intro:
        'Odbiornik radiowy z technologia Bluetooth zgodny ze standardami Wireless M-Bus (EN 13757) i OMS i obslugujacy rozne urzadzenia pomiarowe niezaleznie od producenta. To przenosne urzadzenie stworzone do szybkiego i wygodnego odczytu danych w terenie.',
      description: [
        'Range ONE to niezawodne narzedzie terenowe laczace mobilnosc, funkcjonalnosc i komfort pracy w jednym kompaktowym urzadzeniu.',
      ],
      featuresHeading: 'Najwazniejsze cechy',
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
      heading: 'Opis poszczegolnych elementow infrastruktury',
      title: 'ECLIPSE WM-Bus Gateway',
      intro:
        'Bateryjny koncentrator danych do zbierania informacji z licznikow wody, ciepla, gazu i energii. Zasilany bateria o zywotnosci do 11 lat, umozliwia szybkie wdrozenie i minimalne koszty instalacji w dowolnej lokalizacji.',
      description: [
        'ECLIPSE WM-Bus Gateway to niezawodny, ekonomiczny koncentrator danych, oferujacy pelna kontrole nad systemami telemetrycznymi przy niskich kosztach eksploatacji.',
      ],
      featuresHeading: 'Najwazniejsze cechy',
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
      heading: 'Opis poszczegolnych elementow infrastruktury',
      title: 'ECLIPSE WM-Bus Repeater',
      intro:
        'Bateryjne urzadzenie wzmacniajace sygnal w systemach Wireless M-Bus, zapewniajace nieprzerwana prace przez 11 lat. Idealne do rozleglych sieci pomiarowych, gdzie liczy sie prostota montazu i minimalne koszty obslugi.',
      description: [
        'ECLIPSE WM-Bus Repeater to nowoczesne, energooszczedne rozwiazanie zwiekszajace zasieg i niezawodnosc transmisji w systemach telemetrycznych, redukujace koszty serwisowe i przyspieszajace wdrozenia.',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Prosta konfiguracja, zdalna aktualizacja firmware',
        'Wysoka czulosc odbiornika 868 MHz dla skutecznego odczytu w trudnych warunkach',
        'Obsluga trybow Wireless M-Bus i OMS (S, T, C+T itp.)',
        'Kompatybilnosc z roznorodnymi urzadzeniami pomiarowymi',
        'Mozliwosc tworzenia lancuchow repeaterow (multi-hop)',
        'Solidna, odporna konstrukcja do zastosowan przemyslowych i miejskich (zabezpieczenia antywandalizacyjne)',
        'Zasilanie bateryjne o zywotnosci do 11 lat',
      ],
    },
    'eixo-wmbus-gateway': {
      slug: 'eixo-wmbus-gateway',
      heading: 'Opis poszczegolnych elementow infrastruktury',
      title: 'EIXO WM-Bus Gateway',
      intro:
        'Sieciowo zasilany koncentrator danych do kompleksowego monitoringu nowoczesnych systemow pomiarowych, kompatybilny z urzadzeniami Wireless M-Bus i OMS.',
      description: [
        'EIXO WM-Bus Gateway zapewnia niezawodny monitoring i pelna kontrole nad inteligentnymi sieciami pomiarowymi w wymagajacym srodowisku.',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Zasilanie 230 V gwarantuje ciagla, stabilna prace',
        'Pelna zgodnosc z normami wM-Bus i OMS oraz szeroka gama urzadzen pomiarowych',
        'Komunikacja 5G, 4G oraz NB-IoT dla maksymalnego zasiegu',
        'Wysoka czulosc odbiornika 868 MHz pozwala na odczyt w trudnych lokalizacjach',
        'System Linux ulatwia zdalne zarzadzanie i diagnostyke',
        'Elastyczne protokoly transmisji danych (MQTT, E-mail, HTTPS) wraz z rozbudowanymi harmonogramami',
        'Zabezpieczenia przed otwarciem i demontazem obudowy',
        'Solidna, odporna obudowa przystosowana do wymagajacych warunkow',
      ],
    },
    'exio-wmbus-repeater': {
      slug: 'exio-wmbus-repeater',
      heading: 'Opis poszczegolnych elementow infrastruktury',
      title: 'EXIO WM-Bus Repeater',
      intro:
        'Urzadzenie sieciowe zwiekszajace zasieg i bezpieczenstwo transmisji w systemach Wireless M-Bus.',
      description: [
        'EXIO WM-Bus Repeater znaczaco zwieksza efektywnosc i zasieg systemow telemetrycznych, gwarantujac trwalosc, bezpieczenstwo i wysoka jakosc komunikacji.',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Stabilne zasilanie 230 V gwarantujace ciaglosc pracy',
        'Wysoka czulosc 868 MHz oraz szyfrowanie AES 128-bit',
        'Obsluga wielu trybow Wireless M-Bus (S, T, C+T itd.)',
        'Kompatybilnosc z szeroka gama urzadzen pomiarowych',
        'Mozliwosc tworzenia lancuchow repeaterow (multi-hop)',
        'Latwy montaz i odporna obudowa antywandalowa',
        'Aktualizacja oprogramowania lokalnie lub zdalnie przez USB',
        'Stabilna transmisja bez zaklocen i utraty sygnalu',
      ],
    },
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
        items: ['Wehrle', 'Maddalena', 'Wasser-Geraete', 'GWF Sonico Nano', 'Apator JS Smart+'],
      },
      {
        title: 'Heat meters',
        items: ['Engelman SensoStar', 'Maddalena MicroClima', 'RC12 PloMeter'],
      },
      {
        title: 'Communication modules',
        items: ['Modularis ONE', 'wMBus Smart+', 'MBus Smart+', 'wMBus MicroClima', 'wMBus RC12'],
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
        title: 'Water meters',
        subtitle: 'Metering portfolio',
        description:
          'Meters compatible with the KAYON ecosystem and communication modules.',
        features: [
          'Wehrle water meter - ETK(W)-EAX',
          'Maddalena water meter - SJ PLUS-EVO',
          'Wasser-Geraete water meter - ECO',
          'GWF water meter - Sonico Nano',
          'Apator Powogaz water meter - JS Smart+',
        ],
        downloads: [],
        readMoreLabel: 'Explore products',
        slug: 'wehrle-etkw-eax',
        readMoreHref: '#',
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
        readMoreHref: '#',
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
        readMoreHref: '#',
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
        readMoreHref: '#',
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
        readMoreHref: '#',
      },
    ],
  },



  productDetails: {
    'modularis-one': {
      slug: 'modularis-one',
      heading: 'Communication module portfolio',
      title: 'Modularis ONE',
      intro:
        'Compact radio module in the wM-Bus 868 MHz standard for remote reading of Modularis meters. It integrates with walk-by and AMR systems and provides stable wireless data transmission. Two-way communication enables remote configuration, alarm resets, and diagnostics.',
      description: [
        'Modularis ONE is a modern solution for efficient and secure meter monitoring, offering flexibility and scalability without cabling or manual data collection.',
      ],
      featuresHeading: 'Key features',
      features: [
        'Two-way communication enabling remote configuration, alarm resets, and diagnostics',
        'Compatibility with multiple Modularis meters and third-party devices',
        'Parallel transmission of walk-by and AMR radio telegrams',
        'Support for short, long, and extended frames with up to 15 months of history',
        'Inductive sensor resistant to magnetic interference',
        'Battery life up to 11 years',
        'Protection rating IP54 (optional IP68)',
        'Compliance with EN 13757 and OMS',
      ],
    },
    'wehrle-etkw-eax': {
      slug: 'wehrle-etkw-eax',
      heading: 'Water meter portfolio',
      title: 'Wehrle ETK(W)-EAX',
      intro:
        'The Wehrle single-jet water meter is a precise and reliable device for measuring water consumption in residential and commercial installations, designed for long-term operation in challenging conditions.',
      description: [
        'The ETK(W)-EAX water meter is fully compatible with the Modularis ONE communication module.',
        'Download documentation: https://wehrle.de/en/metering/water/single-jet-dry-meters/single-jet-dry-modularis/#',
      ],
      featuresHeading: 'Key features',
      features: [
        'Ready for integration with any AMR system',
        'Temperature range: up to 50C (cold water) and up to 90C (hot water)',
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
      description: [
        'The SJ PLUS-EVO water meter is fully compatible with the Modularis ONE communication module.',
        'Download documentation: https://www.maddalena.it/wp-content/uploads/catalog-pdf/schedatecnica-sjplus-en-v4.pdf',
      ],
      featuresHeading: 'Key features',
      features: [
        'Ready for integration with modern remote reading systems (wired and radio communication modules)',
        'Temperature range: up to 90C (hot water)',
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
      title: 'Wasser-Geraete ECO',
      intro:
        'The ECO water meter from Wasser-Geraete ensures reliable measurement of both hot and cold water (up to 90C) and is an ideal solution for residential and commercial applications.',
      description: [
        'The ECO water meter is fully compatible with the Modularis ONE communication module.',
        'Download documentation: https://www.wasser-geraete.de/products/wohnungswasserzaehlereco/#',
      ],
      featuresHeading: 'Key features',
      features: [
        'Ready for integration with radio module, M-Bus, pulse output',
        'Temperature range: up to 50C (cold water), up to 90C (hot water)',
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
      description: [
        'Sonico Nano is the ideal solution for everyone seeking high precision and measurement reliability.',
        'Download documentation: https://productfinder.gwf.ch/uploads_productfinder/downloads/Sonico_Brochure_Enlit-Version-2024_KIe10200_web_v04.pdf',
      ],
      featuresHeading: 'Key features',
      features: [
        'Ultrasonic water meter compatible with advanced remote reading systems (LoRaWAN, Wireless M-Bus)',
        'Temperature range: up to 50C (cold water), up to 90C (hot water)',
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
      description: [
        'The JS Smart+ water meter is fully compatible with MBus Smart+ and WMBus Smart+ communication modules.',
        'Download documentation: https://api.apator.com/uploads/oferta/woda-i-cieplo/wodomierze/smart-plus/smart-plus-karta-katalogowa.pdf',
      ],
      featuresHeading: 'Key features',
      features: [
        'Ready to work with various modules: Wireless M-Bus, pulse, M-Bus, inductive',
        'Temperature range: up to 50C (cold water), up to 90C (hot water)',
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
    'eixo-wmbus-gateway': {
      slug: 'eixo-wmbus-gateway',
      heading: 'Infrastructure product overview',
      title: 'EIXO WM-Bus Gateway',
      intro:
        'Mains-powered data concentrator for advanced metering infrastructure, compatible with Wireless M-Bus and OMS.',
      description: [
        'EIXO WM-Bus Gateway provides reliable monitoring and full control over smart metering networks in demanding environments.',
      ],
      featuresHeading: 'Key features',
      features: [
        '230 V supply ensures continuous and stable operation',
        'Compliance with wM-Bus and OMS standards and a broad range of meters',
        '5G, 4G, and NB-IoT connectivity for maximum coverage',
        'High 868 MHz sensitivity for difficult installation points',
        'Linux-based system for remote management and diagnostics',
        'Flexible data transmission protocols (MQTT, E-mail, HTTPS) with advanced scheduling',
        'Tamper detection against enclosure opening or removal',
        'Rugged housing suited for harsh conditions',
      ],
    },
    'exio-wmbus-repeater': {
      slug: 'exio-wmbus-repeater',
      heading: 'Infrastructure product overview',
      title: 'EXIO WM-Bus Repeater',
      intro:
        'Mains-powered repeater enhancing range and reliability in Wireless M-Bus systems.',
      description: [
        'EXIO WM-Bus Repeater significantly boosts telemetry network performance, ensuring durability, security, and high-quality communication.',
      ],
      featuresHeading: 'Key features',
      features: [
        'Stable 230 V power supply for uninterrupted operation',
        'High 868 MHz sensitivity with AES 128-bit encryption',
        'Supports multiple Wireless M-Bus modes (S, T, C+T, etc.)',
        'Compatible with a wide variety of metering devices',
        'Enables multi-hop repeater chains for extended reach',
        'Easy installation with vandal-resistant enclosure',
        'Firmware updates locally or remotely via USB',
        'Stable transmission without interference or signal loss',
      ],
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
        items: ['Wehrle', 'Maddalena', 'Wasser-Geraete', 'GWF Sonico Nano', 'Apator JS Smart+'],
      },
      {
        title: 'Wärmezähler',
        items: ['Engelman SensoStar', 'Maddalena MicroClima', 'RC12 PloMeter'],
      },
      {
        title: 'Kommunikationsmodule',
        items: ['Modularis ONE', 'wMBus Smart+', 'MBus Smart+', 'wMBus MicroClima', 'wMBus RC12'],
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
        title: 'Wasserzaehler',
        subtitle: 'Messportfolio',
        description:
          'Wasserzaehler, die mit den KAYON-Loesungen und Kommunikationsmodulen kompatibel sind.',
        features: [
          'Wehrle Wasserzaehler - ETK(W)-EAX',
          'Maddalena Wasserzaehler - SJ PLUS-EVO',
          'Wasser-Geraete Wasserzaehler - ECO',
          'GWF Wasserzaehler - Sonico Nano',
          'Apator Powogaz Wasserzaehler - JS Smart+',
        ],
        downloads: [],
        readMoreLabel: 'Produkte ansehen',
        slug: 'wehrle-etkw-eax',
        readMoreHref: '#',
      },
      {
        title: 'Waermezaehler',
        subtitle: 'Waermeenergiemonitoring',
        description:
          'Geraete fuer die Fernablesung und Abrechnung von Waerme in Wohn- und Gewerbeobjekten.',
        features: [
          'Engelmann Waermezaehler - Senso Star E',
          'Maddalena Waermezaehler - MicroClima Evo',
          'Ploumeter Waermezaehler - RC12',
        ],
        downloads: [],
        readMoreLabel: 'Produkte ansehen',
        readMoreHref: '#',
      },
      {
        title: 'Kommunikationsmodule',
        subtitle: 'Datenintegration',
        description:
          'Funk- und Kabelmodule fuer zuverl?ssige Datenerfassung und Konfiguration im Feld.',
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
        readMoreHref: '#',
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
        readMoreLabel: 'Loesungen entdecken',
        readMoreHref: '#',
      },
      {
        title: 'Infrastruktur',
        subtitle: 'Feld- und Netzwerktechnik',
        description:
          'Mobile und stationaere Geraete fuer den Aufbau von Fernauslese-Netzen.',
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
        readMoreHref: '#',
      },
    ],
  },



  productDetails: {
    'modularis-one': {
      slug: 'modularis-one',
      heading: 'Kommunikationsmodule im Ueberblick',
      title: 'Modularis ONE',
      intro:
        'Kompaktes Funkmodul im wM-Bus-Standard 868 MHz zur Fernauslese von Modularis-Zaehlern. Es integriert sich in Walk-by- und AMR-Systeme und bietet stabile drahtlose Datenuebertragung. Bidirektionale Kommunikation ermoeglicht Fernkonfiguration, Alarm-Reset und Diagnose.',
      description: [
        'Modularis ONE ist eine moderne Loesung fuer effizientes und sicheres Metering und bietet Flexibilitaet und Skalierbarkeit ohne Verkabelung oder manuelle Datenerfassung.',
      ],
      featuresHeading: 'Wichtigste Merkmale',
      features: [
        'Bidirektionale Kommunikation fuer Fernkonfiguration, Alarm-Reset und Diagnose',
        'Kompatibel mit zahlreichen Modularis-Zaehlern und Geraeten anderer Hersteller',
        'Parallele Uebertragung von Walk-by- und AMR-Telegrammen',
        'Unterstuetzung von kurzen, langen und erweiterten Rahmen mit bis zu 15 Monaten Historie',
        'Induktiver Sensor, unempfindlich gegen magnetische Stoerungen',
        'Batterielaufzeit bis zu 11 Jahren',
        'Schutzart IP54 (optional IP68)',
        'Konform mit EN 13757 und OMS',
      ],
    },
    'wehrle-etkw-eax': {
      slug: 'wehrle-etkw-eax',
      heading: 'Wasserzaehler im Ueberblick',
      title: 'Wehrle ETK(W)-EAX',
      intro:
        'Der Einstrahl-Wasserzaehler Wehrle ist ein praezises und zuverlaessiges Geraet zur Messung des Wasserverbrauchs in privaten und gewerblichen Installationen, entwickelt fuer langfristigen Betrieb unter schwierigen Bedingungen.',
      description: [
        'Der Wasserzaehler ETK(W)-EAX ist vollstaendig kompatibel mit dem Kommunikationsmodul Modularis ONE.',
        'Dokumentation herunterladen: https://wehrle.de/en/metering/water/single-jet-dry-meters/single-jet-dry-modularis/#',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Bereit zur Integration mit jedem AMR-System',
        'Temperaturbereich: bis 50C (Kaltwasser) und bis 90C (Warmwasser)',
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
        'Der Wasserzaehler SJ PLUS-EVO ist eine moderne Loesung fuer den Hausgebrauch, die sich durch hoechste Verarbeitungsqualitaet und zuverlaessige Messgenauigkeit auszeichnet.',
      description: [
        'Der Wasserzaehler SJ PLUS-EVO ist vollstaendig kompatibel mit dem Kommunikationsmodul Modularis ONE.',
        'Dokumentation herunterladen: https://www.maddalena.it/wp-content/uploads/catalog-pdf/schedatecnica-sjplus-en-v4.pdf',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Bereit zur Integration mit modernen Fernablesungssystemen (kabelgebundene und Funk-Kommunikationsmodule)',
        'Temperaturbereich: bis 90C (Warmwasser)',
        'Maximale Durchflussrate (Q3): 1,6 m3/h fuer DN15, 4,0 m3/h fuer DN20',
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
      title: 'Wasser-Geraete ECO',
      intro:
        'Der Wasserzaehler ECO von Wasser-Geraete gewaehrleistet zuverlaessige Messung sowohl von warmem als auch kaltem Wasser (bis 90C) und ist die ideale Loesung fuer Wohn- und Gewerbeanwendungen.',
      description: [
        'Der Wasserzaehler ECO ist vollstaendig kompatibel mit dem Kommunikationsmodul Modularis ONE.',
        'Dokumentation herunterladen: https://www.wasser-geraete.de/products/wohnungswasserzaehlereco/#',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Bereit zur Integration mit Funkmodul, M-Bus, Impulsausgang',
        'Temperaturbereich: bis 50C (Kaltwasser), bis 90C (Warmwasser)',
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
      description: [
        'Sonico Nano ist die ideale Loesung fuer alle, die hoechste Praezision und Messzuverlaessigkeit suchen.',
        'Dokumentation herunterladen: https://productfinder.gwf.ch/uploads_productfinder/downloads/Sonico_Brochure_Enlit-Version-2024_KIe10200_web_v04.pdf',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Ultraschall-Wasserzaehler kompatibel mit fortschrittlichen Fernablesungssystemen (LoRaWAN, Wireless M-Bus)',
        'Temperaturbereich: bis 50C (Kaltwasser), bis 90C (Warmwasser)',
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
        'Der Wasserzaehler Apator Powogaz JS Smart+ ist eine bewaehrte und zuverlaessige Loesung vom polnischen Marktfuehrer fuer Wasserzaehler. Entwickelt zur Messung des Wasserdurchflusses in Hausinstallationen, zeichnet er sich durch hohe Langlebigkeit und Bestaendigkeit gegen Umweltbedingungen aus.',
      description: [
        'Der Wasserzaehler JS Smart+ ist vollstaendig kompatibel mit den Kommunikationsmodulen MBus Smart+ und WMBus Smart+.',
        'Dokumentation herunterladen: https://api.apator.com/uploads/oferta/woda-i-cieplo/wodomierze/smart-plus/smart-plus-karta-katalogowa.pdf',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Bereit zur Zusammenarbeit mit verschiedenen Modulen: Wireless M-Bus, Impuls, M-Bus, induktiv',
        'Temperaturbereich: bis 50C (Kaltwasser), bis 90C (Warmwasser)',
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
        'Der Waermezaehler Engelmann Senso Star E ist ein praezises und langlebiges Geraet zur Messung des Waermeverbrauchs in geschlossenen Systemen und gewaehrleistet Zuverlaessigkeit und Genauigkeit gemaess der Norm EN 1434.',
      description: [
        'Der Waermezaehler ist kompatibel mit dem Kommunikationsmodul MicroClima WMBus.',
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
        'Maddalena MicroClima Evo ist ein moderner, kompakter Waermezaehler fuer die praezise Messung des Waermeverbrauchs in Heizsystemen, insbesondere im Wohnungsbau. Er gewaehrleistet Langlebigkeit und hohe Genauigkeit.',
      description: [
        'Der Waermezaehler ist kompatibel mit dem Kommunikationsmodul MicroClima WMBus.',
        'Dokumentation herunterladen: https://www.maddalena.it/wp-content/uploads/catalog-pdf/schedatecnicamicroclimaevo-en-v4.pdf',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Einstrahl-Durchflussmesser fuer den Betrieb in einem weiten Temperaturbereich',
        'Hohe metrologische Klasse und Anzeigenstabilitaet dank fortschrittlicher technischer Loesungen',
        'Intuitive Benutzeroberflaeche und Moeglichkeit zur Fernauslesung der Daten',
      ],
    },
    'ploumeter-rc12': {
      slug: 'ploumeter-rc12',
      heading: 'Warmezaehler im Ueberblick',
      title: 'Ploumeter RC12',
      intro:
        'Der Waermezaehler RC12 Ploumeter ist ein praezises und zuverlaessiges Messgeraet fuer den Einsatz in Heizungsanlagen, bekannt fuer seine solide Konstruktion und Messgenauigkeit. Ideal fuer Systeme, die moderne Kommunikationsloesungen erfordern.',
      description: [
        'Der Waermezaehler ist kompatibel mit dem Kommunikationsmodul RC12 WMBUS.',
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
        'Funkempfaenger mit Bluetooth-Technologie, konform mit den Standards Wireless M-Bus (EN 13757) und OMS, der verschiedene Messgeraete unabhaengig vom Hersteller unterstuetzt. Ein tragbares Geraet fuer schnelle und bequeme Datenauslesung im Feld.',
      description: [
        'Range ONE ist ein zuverlaessiges Feldgeraet, das Mobilitaet, Funktionalitaet und Arbeitskomfort in einem kompakten Geraet vereint.',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Hohe Empfindlichkeit des 868-MHz-Empfaengers ermoeglicht Auslesung an schwer zugaenglichen Orten',
        'Bluetooth-Konnektivitaet zur drahtlosen Datenuebertragung auf Android-Geraete (Route ONE App)',
        'Energiesparende Algorithmen - Batteriebetrieb bis zu 40 Stunden',
        'Ergonomisches, robustes Gehaeuse mit gummierten Seiten fuer sicheren Griff',
        'Externe Antenne und USB-Port zum Laden der Batterie',
        'Moeglichkeit zur Datenauslesung und Fernkonfiguration von Funkmodulen',
      ],
    },
    'eclipse-wmbus-gateway': {
      slug: 'eclipse-wmbus-gateway',
      heading: 'Infrastrukturprodukte im Ueberblick',
      title: 'ECLIPSE WM-Bus Gateway',
      intro:
        'Batteriebetriebener Datenkonzentrator zur Erfassung von Informationen von Wasser-, Waerme-, Gas- und Energiezaehlern. Mit einer Batterielebensdauer von bis zu 11 Jahren ermoeglicht er eine schnelle Implementierung und minimale Installationskosten an jedem Standort.',
      description: [
        'ECLIPSE WM-Bus Gateway ist ein zuverlaessiger, wirtschaftlicher Datenkonzentrator, der volle Kontrolle ueber telemetrische Systeme bei niedrigen Betriebskosten bietet.',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Fernverwaltung, Diagnose und flexible Uebertragungsprotokolle (HTTPS, MQTT, E-Mail)',
        'Vollstaendige Kompatibilitaet mit wM-Bus- und OMS-Geraeten',
        '5G-, 4G-, NB-IoT-Konnektivitaet fuer stabile Verbindung',
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
        'Batteriebetriebenes Geraet zur Signalverstaerkung in Wireless M-Bus-Systemen, das einen unterbrechungsfreien Betrieb fuer 11 Jahre gewaehrleistet. Ideal fuer weitlaeufige Messnetze, bei denen einfache Montage und minimale Wartungskosten entscheidend sind.',
      description: [
        'ECLIPSE WM-Bus Repeater ist eine moderne, energiesparende Loesung, die Reichweite und Zuverlaessigkeit der Uebertragung in telemetrischen Systemen erhoeht, Servicekosten reduziert und Implementierungen beschleunigt.',
      ],
      featuresHeading: 'Hauptmerkmale',
      features: [
        'Einfache Konfiguration, Firmware-Aktualisierung aus der Ferne',
        'Hohe Empfindlichkeit des 868-MHz-Empfaengers fuer effektives Auslesen unter schwierigen Bedingungen',
        'Unterstuetzung von Wireless M-Bus- und OMS-Modi (S, T, C+T usw.)',
        'Kompatibilitaet mit verschiedenen Messgeraeten',
        'Moeglichkeit zur Erstellung von Repeater-Ketten (Multi-Hop)',
        'Solide, robuste Konstruktion fuer industrielle und staedtische Anwendungen (Vandalismusschutz)',
        'Batteriebetrieb mit einer Lebensdauer von bis zu 11 Jahren',
      ],
    },
    'eixo-wmbus-gateway': {
      slug: 'eixo-wmbus-gateway',
      heading: 'Infrastrukturprodukte im Ueberblick',
      title: 'EIXO WM-Bus Gateway',
      intro:
        'Netzgespeister Datenkonzentrator fuer moderne Messinfrastrukturen, kompatibel mit Wireless M-Bus und OMS.',
      description: [
        'EIXO WM-Bus Gateway bietet zuverlaessige Ueberwachung und volle Kontrolle ueber Smart-Metering-Netze in anspruchsvollen Umgebungen.',
      ],
      featuresHeading: 'Wichtigste Merkmale',
      features: [
        '230-V-Stromversorgung fuer kontinuierlichen, stabilen Betrieb',
        'Konform mit wM-Bus- und OMS-Standards und zahlreichen Messgeraeten',
        '5G, 4G und NB-IoT fuer maximale Reichweite',
        'Hohe 868-MHz-Empfindlichkeit fuer schwierige Installationsorte',
        'Linux-basierte Plattform fuer Fernverwaltung und Diagnose',
        'Flexible Datenprotokolle (MQTT, E-Mail, HTTPS) mit erweiterten Zeitplaenen',
        'Manipulationserkennung bei Gehaeuseoeffnung oder Demontage',
        'Robustes Gehaeuse fuer harte Umgebungen',
      ],
    },
    'exio-wmbus-repeater': {
      slug: 'exio-wmbus-repeater',
      heading: 'Infrastrukturprodukte im Ueberblick',
      title: 'EXIO WM-Bus Repeater',
      intro:
        'Netzbetriebener Repeater, der Reichweite und Sicherheit in Wireless-M-Bus-Systemen erhoeht.',
      description: [
        'EXIO WM-Bus Repeater steigert die Leistungsfaehigkeit von Telemetrienetzen und sorgt fuer Dauerhaftigkeit, Sicherheit und hochwertige Kommunikation.',
      ],
      featuresHeading: 'Wichtigste Merkmale',
      features: [
        'Stabile 230-V-Versorgung fuer unterbrechungsfreien Betrieb',
        'Hohe 868-MHz-Empfindlichkeit mit AES-128-Verschluesselung',
        'Unterstuetzt mehrere Wireless-M-Bus-Modi (S, T, C+T usw.)',
        'Kompatibel mit einer breiten Palette von Messgeraeten',
        'Ermoeglicht Multi-Hop-Repeaterketten fuer groessere Reichweite',
        'Einfache Montage mit vandalismussicherem Gehaeuse',
        'Firmware-Updates lokal oder remote via USB',
        'Stabile Uebertragung ohne Stoerungen oder Signalverlust',
      ],
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

