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
        title: 'Modularis One',
        subtitle: 'Modul komunikacyjny',
        description:
          'Kompaktowy modul radiowy w standardzie wM-Bus 868 MHz do zdalnego odczytu wodomierzy Modularis.',
        features: [
          'Dwukierunkowa komunikacja umozliwiajaca zdalna konfiguracje, kasowanie alarmow i diagnostyke',
          'Kompatybilnosc z wieloma wodomierzami Modularis oraz urzadzeniami innych producentow',
          'Rownolegla transmisja radiotelegramow w trybie walk-by i AMR (stacjonarny odczyt)',
          'Praca bateryjna do 11 lat w trudnych warunkach',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'modularis-one',
        readMoreHref: '/produkty/modularis-one',
      },
      {
        title: 'Range ONE',
        subtitle: 'Infrastruktura terenowa',
        description:
          'Przenosny odbiornik Wireless M-Bus z lacznoscia Bluetooth i wysoka czuloscia 868 MHz.',
        features: [
          'Szybkie odczyty w trudno dostepnych miejscach',
          'Lacznosc Bluetooth z aplikacja Route ONE',
          'Praca na baterii do 40 godzin',
          'Odporna, ergonomiczna obudowa',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'range-one',
        readMoreHref: '/produkty/range-one',
      },
      {
        title: 'ECLIPSE WM-Bus Gateway',
        subtitle: 'Koncentrator danych',
        description:
          'Bateryjny koncentrator danych wM-Bus/OMS do szybkiego wdrozenia w dowolnej lokalizacji.',
        features: [
          'Zdalne zarzadzanie, diagnostyka i elastyczne protokoly transmisji',
          'Kompatybilnosc z urzadzeniami wM-Bus i OMS',
          'Lacznosc 5G/4G/NB-IoT zapewnia stabilne polaczenie',
          'Praca na baterii do 11 lat bez serwisowania',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'eclipse-wmbus-gateway',
        readMoreHref: '/produkty/eclipse-wmbus-gateway',
      },
      {
        title: 'ECLIPSE WM-Bus Repeater',
        subtitle: 'Wzmacniacz sygnalu',
        description:
          'Bateryjny repeater przedluzajacy zasieg sieci Wireless M-Bus na rozleglych instalacjach.',
        features: [
          'Prosta konfiguracja i zdalne aktualizacje firmware',
          'Wysoka czulosc odbiornika 868 MHz',
          'Obsluga trybow Wireless M-Bus i OMS',
          'Mozliwosc pracy multi-hop dla wiekszego zasiegu',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'eclipse-wmbus-repeater',
        readMoreHref: '/produkty/eclipse-wmbus-repeater',
      },
      {
        title: 'EIXO WM-Bus Gateway',
        subtitle: 'Koncentrator sieciowy',
        description:
          'Zasilany sieciowo gateway Linux do kompleksowego monitoringu systemow pomiarowych.',
        features: [
          'Zasilanie 230 V zapewniajace ciagla prace',
          'Pelna zgodnosc z wM-Bus i OMS',
          'Komunikacja mobilna 5G/4G/NB-IoT',
          'Zaawansowane protokoly transmisji danych',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'eixo-wmbus-gateway',
        readMoreHref: '/produkty/eixo-wmbus-gateway',
      },
      {
        title: 'EXIO WM-Bus Repeater',
        subtitle: 'Wzmacniacz sieciowy',
        description:
          'Sieciowy repeater zwiekszajacy zasieg i bezpieczenstwo transmisji Wireless M-Bus.',
        features: [
          'Zasilanie 230 V dla stabilnej pracy',
          'Szyfrowanie AES 128-bit i wysoka czulosc 868 MHz',
          'Obsluga wielu trybow Wireless M-Bus',
          'Latwy montaz i odporna obudowa antywandalowa',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'exio-wmbus-repeater',
        readMoreHref: '/produkty/exio-wmbus-repeater',
      },
    ],
  },


  productDetails: {
    'modularis-one': {
      slug: 'modularis-one',
      heading: 'Opis poszczegolnych modulow komunikacyjnych',
      title: 'Modularis One',
      intro:
        'Kompaktowy modul radiowy w standardzie wM-Bus 868 MHz do zdalnego odczytu wodomierzy Modularis. Umozliwia integracje z systemami walk-by i AMR oraz zapewnia stabilna bezprzewodowa transmisje danych. Dwukierunkowa komunikacja pozwala zdalnie konfigurowac urzadzenia, kasowac alarmy i prowadzic diagnostyke.',
      description: [
        'Modularis One to nowoczesne rozwiazanie do efektywnego i bezpiecznego monitoringu wodomierzy, zapewniajace elastycznosc i skalowalnosc systemu odczytowego bez koniecznosci okablowania czy recznego zbierania danych.',
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
    'range-one': {
      slug: 'range-one',
      heading: 'Opis poszczegolnych elementow infrastruktury',
      title: 'Range ONE',
      intro:
        'Odbiornik radiowy z technologia Bluetooth zgodny ze standardami Wireless M-Bus (EN 13757) i OMS, obslugujacy rozne urzadzenia pomiarowe niezaleznie od producenta.',
      description: [
        'Range ONE to niezawodne narzedzie terenowe laczace mobilnosc, funkcjonalnosc i komfort pracy w jednym kompaktowym urzadzeniu.',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Wysoka czulosc odbiornika 868 MHz umozliwiajaca odczyt w trudno dostepnych miejscach',
        'Lacznosc Bluetooth do bezprzewodowego przesylania danych na urzadzenia z Androidem (aplikacja Route ONE)',
        'Energooszczedne algorytmy pozwalaja na prace na baterii do 40 godzin',
        'Ergonomiczna, odporna obudowa z gumowanymi bokami zapewnia pewny chwyt',
        'Zewnetrzna antena i port USB do ladowania baterii',
        'Mozliwosc odczytu danych i zdalnej konfiguracji modulow radiowych',
      ],
    },
    'eclipse-wmbus-gateway': {
      slug: 'eclipse-wmbus-gateway',
      heading: 'Opis poszczegolnych elementow infrastruktury',
      title: 'ECLIPSE WM-Bus Gateway',
      intro:
        'Bateryjny koncentrator danych do zbierania informacji z licznikow wody, ciepla, gazu i energii. Zasilany bateria o zywotnosci do 11 lat, minimalizuje koszty instalacji.',
      description: [
        'ECLIPSE WM-Bus Gateway to niezawodny, ekonomiczny koncentrator danych oferujacy pelna kontrole nad systemami telemetrycznymi przy niskich kosztach eksploatacji.',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Zdalne zarzadzanie, diagnostyka i elastyczne protokoly transmisji (HTTPS, MQTT, E-mail)',
        'Pelna kompatybilnosc z urzadzeniami wM-Bus i OMS',
        'Lacznosc 5G, 4G, NB-IoT zapewnia stabilne polaczenie',
        'Wysoka czulosc odbiornika 868 MHz do odczytu w trudno dostepnych miejscach',
        'Praca bateryjna do 11 lat bez koniecznosci serwisowania',
        'Obudowa odporna na kurz i promieniowanie UV o estetycznym wygladzie',
        'Czujniki bezpieczenstwa wykrywajace otwarcie i demontaz urzadzenia',
      ],
    },
    'eclipse-wmbus-repeater': {
      slug: 'eclipse-wmbus-repeater',
      heading: 'Opis poszczegolnych elementow infrastruktury',
      title: 'ECLIPSE WM-Bus Repeater',
      intro:
        'Bateryjne urzadzenie wzmacniajace sygnal w systemach Wireless M-Bus zapewniajace nieprzerwana prace przez 11 lat.',
      description: [
        'ECLIPSE WM-Bus Repeater to nowoczesne, energooszczedne rozwiazanie zwiekszajace zasieg i niezawodnosc transmisji w systemach telemetrycznych.',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Prosta konfiguracja i zdalna aktualizacja firmware',
        'Wysoka czulosc odbiornika 868 MHz dla skutecznego odczytu w trudnych warunkach',
        'Obsluga trybow Wireless M-Bus i OMS (S, T, C+T itd.)',
        'Kompatybilnosc z roznorodnymi urzadzeniami pomiarowymi',
        'Mozliwosc tworzenia ciagow repeaterow (multi-hop)',
        'Solidna, odporna konstrukcja z zabezpieczeniami antywandalowymi',
        'Zasilanie bateryjne o zywotnosci do 11 lat',
      ],
    },
    'eixo-wmbus-gateway': {
      slug: 'eixo-wmbus-gateway',
      heading: 'Opis poszczegolnych elementow infrastruktury',
      title: 'EIXO WM-Bus Gateway',
      intro:
        'Sieciowo zasilany koncentrator danych do monitoringu nowoczesnych systemow pomiarowych, kompatybilny z Wireless M-Bus i OMS.',
      description: [
        'EIXO WM-Bus Gateway to profesjonalny koncentrator zapewniajacy niezawodny monitoring i pelna kontrole nad inteligentnymi sieciami pomiarowymi.',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Zasilanie 230 V zapewnia ciagla i stabilna prace',
        'Pelna zgodnosc z normami wM-Bus i OMS oraz szeroka gama urzadzen pomiarowych',
        'Komunikacja mobilna 5G, 4G, NB-IoT dla maksymalnego zasiegu',
        'Wysoka czulosc odbiornika 868 MHz umozliwia odczyt w trudno dostepnych miejscach',
        'System Linux do zdalnego zarzadzania i diagnostyki',
        'Elastyczne protokoly transmisji danych (MQTT, E-mail, HTTPS) i rozbudowane harmonogramy',
        'Zabezpieczenia przed otwarciem i demontazem obudowy',
        'Solidna, odporna obudowa do zastosowan w wymagajacym srodowisku',
      ],
    },
    'exio-wmbus-repeater': {
      slug: 'exio-wmbus-repeater',
      heading: 'Opis poszczegolnych elementow infrastruktury',
      title: 'EXIO WM-Bus Repeater',
      intro:
        'Urzadzenie sieciowe zwiekszajace zasieg i niezawodnosc transmisji w systemach Wireless M-Bus.',
      description: [
        'EXIO WM-Bus Repeater znaczaco zwieksza efektywnosc i zasieg systemow telemetrycznych, gwarantujac trwalosc, bezpieczenstwo i wysoka jakosc komunikacji.',
      ],
      featuresHeading: 'Najwazniejsze cechy',
      features: [
        'Stabilne zasilanie 230 V gwarantujace ciaglosc pracy',
        'Wysoka czulosc odbiornika 868 MHz oraz szyfrowanie AES 128-bit',
        'Obsluga wielu trybow Wireless M-Bus (S, T, C+T itd.)',
        'Kompatybilnosc z szerokim zakresem urzadzen pomiarowych',
        'Tworzenie ciagow repeaterow (multi-hop) dla maksymalnego zasiegu',
        'Latwy montaz i odporna na uszkodzenia obudowa antywandalowa',
        'Aktualizacja firmware lokalnie lub zdalnie przez USB',
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
        title: 'Modularis One',
        subtitle: 'Communication module',
        description:
          'Compact wM-Bus 868 MHz radio module for remote reading of Modularis water meters.',
        features: [
          'Two-way communication for remote configuration, alarm resets, and diagnostics',
          'Compatible with Modularis meters and third-party devices',
          'Parallel transmission of walk-by and AMR radio telegrams',
          'Battery life up to 11 years in demanding conditions',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'modularis-one',
        readMoreHref: '/produkty/modularis-one',
      },
      {
        title: 'Range ONE',
        subtitle: 'Field infrastructure',
        description:
          'Portable Wireless M-Bus receiver with Bluetooth and high 868 MHz sensitivity.',
        features: [
          'Fast readings in hard-to-reach locations',
          'Bluetooth connectivity via the Route ONE app',
          'Battery operation for up to 40 hours',
          'Rugged, ergonomic housing with secure grip',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'range-one',
        readMoreHref: '/produkty/range-one',
      },
      {
        title: 'ECLIPSE WM-Bus Gateway',
        subtitle: 'Data concentrator',
        description:
          'Battery-powered wM-Bus/OMS gateway for rapid deployment anywhere.',
        features: [
          'Remote management, diagnostics, and flexible transmission protocols',
          'Full compatibility with wM-Bus and OMS devices',
          '5G/4G/NB-IoT connectivity for reliable communication',
          'Battery-powered operation for up to 11 years',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'eclipse-wmbus-gateway',
        readMoreHref: '/produkty/eclipse-wmbus-gateway',
      },
      {
        title: 'ECLIPSE WM-Bus Repeater',
        subtitle: 'Signal booster',
        description:
          'Battery repeater extending Wireless M-Bus coverage across large sites.',
        features: [
          'Simple setup with remote firmware updates',
          'High 868 MHz sensitivity for reliable reception',
          'Supports Wireless M-Bus and OMS operating modes',
          'Multi-hop capability for extended range',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'eclipse-wmbus-repeater',
        readMoreHref: '/produkty/eclipse-wmbus-repeater',
      },
      {
        title: 'EIXO WM-Bus Gateway',
        subtitle: 'Network gateway',
        description:
          'Mains-powered Linux gateway for comprehensive metering supervision.',
        features: [
          '230 V supply for continuous operation',
          'Compliance with wM-Bus and OMS standards',
          '5G/4G/NB-IoT connectivity for maximum reach',
          'Advanced data transmission protocols and scheduling',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'eixo-wmbus-gateway',
        readMoreHref: '/produkty/eixo-wmbus-gateway',
      },
      {
        title: 'EXIO WM-Bus Repeater',
        subtitle: 'Network repeater',
        description:
          'Mains-powered repeater enhancing Wireless M-Bus range and security.',
        features: [
          '230 V power for continuous uptime',
          'AES 128-bit encryption and high 868 MHz sensitivity',
          'Supports multiple Wireless M-Bus modes',
          'Easy installation with vandal-resistant housing',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'exio-wmbus-repeater',
        readMoreHref: '/produkty/exio-wmbus-repeater',
      },
    ],
  },


  productDetails: {
    'modularis-one': {
      slug: 'modularis-one',
      heading: 'Communication module portfolio',
      title: 'Modularis One',
      intro:
        'Compact radio module in the wM-Bus 868 MHz standard for remote reading of Modularis meters. It integrates with walk-by and AMR systems and provides stable wireless data transmission. Two-way communication enables remote configuration, alarm resets, and diagnostics.',
      description: [
        'Modularis One is a modern solution for efficient and secure meter monitoring, offering flexibility and scalability without cabling or manual data collection.',
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
    'range-one': {
      slug: 'range-one',
      heading: 'Infrastructure product overview',
      title: 'Range ONE',
      intro:
        'Bluetooth-enabled Wireless M-Bus receiver compliant with EN 13757 and OMS, supporting diverse metering devices across vendors.',
      description: [
        'Range ONE combines mobility, functionality, and user comfort in a compact field device for rapid, convenient data collection.',
      ],
      featuresHeading: 'Key features',
      features: [
        'High 868 MHz sensitivity for readings in hard-to-reach locations',
        'Bluetooth connectivity to transmit data to Android devices via the Route ONE app',
        'Energy-efficient algorithms deliver up to 40 hours of battery life',
        'Ergonomic, durable housing with rubberized grips',
        'External antenna and USB port for battery charging',
        'Enables meter data reading and remote configuration of radio modules',
      ],
    },
    'eclipse-wmbus-gateway': {
      slug: 'eclipse-wmbus-gateway',
      heading: 'Infrastructure product overview',
      title: 'ECLIPSE WM-Bus Gateway',
      intro:
        'Battery-powered data concentrator collecting information from water, heat, gas, and energy meters, with up to 11 years of autonomy.',
      description: [
        'ECLIPSE WM-Bus Gateway is a reliable, cost-effective concentrator that delivers full control over telemetry systems with minimal operating costs.',
      ],
      featuresHeading: 'Key features',
      features: [
        'Remote management, diagnostics, and flexible transmission protocols (HTTPS, MQTT, E-mail)',
        'Full compatibility with wM-Bus and OMS devices',
        '5G, 4G, and NB-IoT connectivity for stable communication',
        'High 868 MHz sensitivity for readings from challenging locations',
        'Battery-powered operation for up to 11 years without service',
        'Dust- and UV-resistant housing with a clean design',
        'Security sensors detecting enclosure opening or removal',
      ],
    },
    'eclipse-wmbus-repeater': {
      slug: 'eclipse-wmbus-repeater',
      heading: 'Infrastructure product overview',
      title: 'ECLIPSE WM-Bus Repeater',
      intro:
        'Battery-powered repeater that strengthens Wireless M-Bus signals and operates continuously for up to 11 years.',
      description: [
        'ECLIPSE WM-Bus Repeater is an energy-efficient solution that extends range and reliability in telemetry networks.',
      ],
      featuresHeading: 'Key features',
      features: [
        'Simple configuration with remote firmware updates',
        'High 868 MHz sensitivity for dependable reception in harsh environments',
        'Supports Wireless M-Bus and OMS modes (S, T, C+T, etc.)',
        'Compatible with a wide range of metering devices',
        'Allows multi-hop repeater chains for maximum coverage',
        'Robust, vandal-resistant construction for industrial and urban use',
        'Battery-powered for up to 11 years',
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
        title: 'Modularis One',
        subtitle: 'Kommunikationsmodul',
        description:
          'Kompaktes Funkmodul im wM-Bus-Standard 868 MHz fuer die Fernauslese von Modularis-Wasserzaehlern.',
        features: [
          'Bidirektionale Kommunikation fuer Fernkonfiguration, Alarm-Reset und Diagnose',
          'Kompatibel mit Modularis-Zaehlern und Geraeten anderer Hersteller',
          'Parallele Uebertragung von Walk-by- und AMR-Telegrammen',
          'Batterielaufzeit bis zu 11 Jahren in anspruchsvollen Umgebungen',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'modularis-one',
        readMoreHref: '/produkty/modularis-one',
      },
      {
        title: 'Range ONE',
        subtitle: 'Feldinfrastruktur',
        description:
          'Mobiler Wireless-M-Bus-Empfaenger mit Bluetooth und hoher 868-MHz-Empfindlichkeit.',
        features: [
          'Schnelle Auslesung an schwer zugaenglichen Orten',
          'Bluetooth-Anbindung ueber die Route-ONE-App',
          'Batteriebetrieb bis zu 40 Stunden',
          'Robustes, ergonomisches Gehaeuse mit rutschfestem Griff',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'range-one',
        readMoreHref: '/produkty/range-one',
      },
      {
        title: 'ECLIPSE WM-Bus Gateway',
        subtitle: 'Datenkonzentrator',
        description:
          'Batteriebetriebener wM-Bus/OMS-Gateway fuer schnelle Implementierungen.',
        features: [
          'Fernverwaltung, Diagnose und flexible Uebertragungsprotokolle',
          'Voll kompatibel mit wM-Bus- und OMS-Geraeten',
          '5G/4G/NB-IoT fuer zuverlaessige Konnektivitaet',
          'Batteriebetrieb bis zu 11 Jahren ohne Wartung',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'eclipse-wmbus-gateway',
        readMoreHref: '/produkty/eclipse-wmbus-gateway',
      },
      {
        title: 'ECLIPSE WM-Bus Repeater',
        subtitle: 'Signalverstaerker',
        description:
          'Batteriebetriebener Repeater zur Erweiterung von Wireless-M-Bus-Netzen.',
        features: [
          'Einfache Konfiguration mit Fern-Firmware-Updates',
          'Hohe 868-MHz-Empfindlichkeit fuer stabile Signale',
          'Unterstuetzt Wireless-M-Bus- und OMS-Modi',
          'Multi-Hop-Funktion fuer groessere Reichweite',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'eclipse-wmbus-repeater',
        readMoreHref: '/produkty/eclipse-wmbus-repeater',
      },
      {
        title: 'EIXO WM-Bus Gateway',
        subtitle: 'Netzwerk-Gateway',
        description:
          'Netzgespeister Linux-Gateway fuer umfassende Ueberwachung von Messsystemen.',
        features: [
          '230-V-Versorgung fuer dauerhaften Betrieb',
          'Konform mit wM-Bus- und OMS-Standards',
          '5G/4G/NB-IoT fuer maximale Reichweite',
          'Erweiterte Datenprotokolle und Zeitplaene',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'eixo-wmbus-gateway',
        readMoreHref: '/produkty/eixo-wmbus-gateway',
      },
      {
        title: 'EXIO WM-Bus Repeater',
        subtitle: 'Netzwerk-Repeater',
        description:
          'Netzbetriebener Repeater zur Erweiterung von Wireless-M-Bus-Reichweiten und Sicherheit.',
        features: [
          '230-V-Stromversorgung fuer unterbrechungsfreien Betrieb',
          'AES-128-Verschluesselung und hohe 868-MHz-Empfindlichkeit',
          'Unterstuetzt mehrere Wireless-M-Bus-Modi',
          'Einfache Montage mit vandalismussicherem Gehaeuse',
        ],
        downloads: [
          { label: 'Download PDF ENG', href: '#' },
          { label: 'Download PDF GER', href: '#' },
        ],
        readMoreLabel: 'Read more',
        slug: 'exio-wmbus-repeater',
        readMoreHref: '/produkty/exio-wmbus-repeater',
      },
    ],
  },


  productDetails: {
    'modularis-one': {
      slug: 'modularis-one',
      heading: 'Kommunikationsmodule im Ueberblick',
      title: 'Modularis One',
      intro:
        'Kompaktes Funkmodul im wM-Bus-Standard 868 MHz zur Fernauslese von Modularis-Zaehlern. Es integriert sich in Walk-by- und AMR-Systeme und bietet stabile drahtlose Datenuebertragung. Bidirektionale Kommunikation ermoeglicht Fernkonfiguration, Alarm-Reset und Diagnose.',
      description: [
        'Modularis One ist eine moderne Loesung fuer effizientes und sicheres Metering und bietet Flexibilitaet und Skalierbarkeit ohne Verkabelung oder manuelle Datenerfassung.',
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
    'range-one': {
      slug: 'range-one',
      heading: 'Infrastrukturprodukte im Ueberblick',
      title: 'Range ONE',
      intro:
        'Bluetooth-faehiger Wireless-M-Bus-Empfaenger nach EN 13757 und OMS, der verschiedene Messgeraete unabhaengiger Hersteller unterstuetzt.',
      description: [
        'Range ONE vereint Mobilitaet, Funktionalitaet und Bedienkomfort in einem kompakten Feldgeraet fuer schnelle Datenerfassung.',
      ],
      featuresHeading: 'Wichtigste Merkmale',
      features: [
        'Hohe 868-MHz-Empfindlichkeit fuer Auslesungen an schwer zugaenglichen Orten',
        'Bluetooth-Verbindung zur Datenuebertragung auf Android-Geraete mit der Route-ONE-App',
        'Energieeffiziente Algorithmen fuer bis zu 40 Stunden Batteriebetrieb',
        'Ergonomisches, robustes Gehaeuse mit gummierten Seiten',
        'Externe Antenne und USB-Anschluss zum Laden der Batterie',
        'Unterstuetzt Datenauslesung und Fernkonfiguration von Funkmodulen',
      ],
    },
    'eclipse-wmbus-gateway': {
      slug: 'eclipse-wmbus-gateway',
      heading: 'Infrastrukturprodukte im Ueberblick',
      title: 'ECLIPSE WM-Bus Gateway',
      intro:
        'Batteriebetriebener Datenkonzentrator fuer Wasser-, Waerme-, Gas- und Stromzaehler mit bis zu 11 Jahren Laufzeit.',
      description: [
        'ECLIPSE WM-Bus Gateway ist ein zuverlaessiger und wirtschaftlicher Konzentrator, der umfassende Kontrolle ueber Telemetriesysteme bei geringen Betriebskosten bietet.',
      ],
      featuresHeading: 'Wichtigste Merkmale',
      features: [
        'Fernverwaltung, Diagnose und flexible Protokolle (HTTPS, MQTT, E-Mail)',
        'Volle Kompatibilitaet zu wM-Bus- und OMS-Geraeten',
        '5G-, 4G- und NB-IoT-Konnektivitaet fuer stabile Verbindungen',
        'Hohe 868-MHz-Empfindlichkeit fuer schwer erreichbare Standorte',
        'Batteriebetrieb bis zu 11 Jahren ohne Wartung',
        'Staub- und UV-bestaendige, ansprechende Gehaeuseausfuehrung',
        'Sicherheitssensoren erkennen das Oeffnen oder Entfernen des Geraets',
      ],
    },
    'eclipse-wmbus-repeater': {
      slug: 'eclipse-wmbus-repeater',
      heading: 'Infrastrukturprodukte im Ueberblick',
      title: 'ECLIPSE WM-Bus Repeater',
      intro:
        'Batteriebetriebener Repeater, der Wireless-M-Bus-Signale verstaerkt und bis zu 11 Jahre ununterbrochen arbeitet.',
      description: [
        'ECLIPSE WM-Bus Repeater ist eine energieeffiziente Loesung zur Erweiterung von Reichweite und Zuverlaessigkeit in Telemetriesystemen.',
      ],
      featuresHeading: 'Wichtigste Merkmale',
      features: [
        'Einfache Konfiguration und Fern-Firmware-Updates',
        'Hohe 868-MHz-Empfindlichkeit fuer sichere Auslesung in anspruchsvollen Umgebungen',
        'Unterstuetzt Wireless-M-Bus- und OMS-Betriebsarten (S, T, C+T usw.)',
        'Kompatibel mit einer breiten Palette von Messgeraeten',
        'Ermoeglicht Multi-Hop-Repeaterketten fuer groessere Reichweite',
        'Robuste, vandalismussichere Konstruktion fuer Industrie und Stadt',
        'Batteriebetrieb bis zu 11 Jahren',
      ],
    },
    'eixo-wmbus-gateway': {
      slug: 'eixo-wmbus-gateway',
      heading: 'Infrastrukturprodukte im Ueberblick',
      title: 'EIXO WM-Bus Gateway',
      intro:
        'Netzgespeister Datenkonzentrator fuer moderne Messsysteme, kompatibel mit Wireless M-Bus und OMS.',
      description: [
        'EIXO WM-Bus Gateway bietet zuverlaessiges Monitoring und umfassende Kontrolle ueber intelligente Messnetze in anspruchsvollen Umgebungen.',
      ],
      featuresHeading: 'Wichtigste Merkmale',
      features: [
        '230-V-Versorgung fuer kontinuierlichen und stabilen Betrieb',
        'Konform mit wM-Bus- und OMS-Standards sowie zahlreichen Messgeraeten',
        '5G-, 4G- und NB-IoT-Verbindungen fuer maximale Reichweite',
        'Hohe 868-MHz-Empfindlichkeit fuer schwierige Installationsorte',
        'Linux-System fuer Fernverwaltung und Diagnose',
        'Flexible Datenprotokolle (MQTT, E-Mail, HTTPS) mit umfangreichen Zeitplaenen',
        'Manipulationsschutz gegen Oeffnen und Demontage',
        'Robustes Gehaeuse fuer raue Einsatzbedingungen',
      ],
    },
    'exio-wmbus-repeater': {
      slug: 'exio-wmbus-repeater',
      heading: 'Infrastrukturprodukte im Ueberblick',
      title: 'EXIO WM-Bus Repeater',
      intro:
        'Netzbetriebenes Geraet zur Reichweiten- und Zuverlaessigkeitssteigerung in Wireless-M-Bus-Systemen.',
      description: [
        'EXIO WM-Bus Repeater steigert die Effizienz von Telemetriesystemen nachhaltig und sorgt fuer sichere, hochwertige Kommunikation.',
      ],
      featuresHeading: 'Wichtigste Merkmale',
      features: [
        'Stabile 230-V-Stromversorgung fuer unterbrechungsfreien Betrieb',
        'Hohe 868-MHz-Empfindlichkeit und AES-128-Verschluesselung',
        'Unterstuetzt mehrere Wireless-M-Bus-Modi (S, T, C+T usw.)',
        'Kompatibel mit einer Vielzahl von Messgeraeten',
        'Multi-Hop-Repeaterketten fuer maximale Reichweite',
        'Einfache Montage und vandalismussicheres Gehaeuse',
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

