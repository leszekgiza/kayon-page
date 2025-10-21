#!/usr/bin/env python3
"""
Synchronise product detail translations with markdown sources.
The script rebuilds the `productDetails` section for each locale
based on markdown files stored in `teksty/`.
"""

from __future__ import annotations

import re
import unicodedata
from pathlib import Path
from typing import Dict, List

BASE = Path(__file__).resolve().parents[1]
CONTENT_PATH = BASE / "src" / "translations" / "content.ts"

FILES = {
    "pl": {
        "water": BASE / "teksty" / "wodomierze_PL.md",
        "heat": BASE / "teksty" / "cieplomierze_PL.md",
        "infra": BASE / "teksty" / "infrastruktura_PL.md",
        "modules": BASE / "teksty" / "moduly_PL.md",
        "systems": BASE / "teksty" / "systemy_PL.md",
    },
    "en": {
        "water": BASE / "teksty" / "wodomierze_en.md",
        "heat": BASE / "teksty" / "cieplomierze_en.md",
        "infra": BASE / "teksty" / "infrastruktura_en.md",
        "modules": BASE / "teksty" / "moduly_en.md",
        "systems": BASE / "teksty" / "systemy_en.md",
    },
    "de": {
        "water": BASE / "teksty" / "wodomierze_de.md",
        "heat": BASE / "teksty" / "cieplomierze_de.md",
        "infra": BASE / "teksty" / "infrastruktura_de.md",
        "modules": BASE / "teksty" / "moduly_de.md",
        "systems": BASE / "teksty" / "systemy_de.md",
    },
}

SLUG_MAP = {
    "pl": {
        "Modularis ONE": "modularis-one",
        "wMBus Smart+": "wmbus-smart-plus",
        "MBus Smart+": "mbus-smart-plus",
        "wMBus MicroClima": "wmbus-microclima",
        "wMBus RC12": "wmbus-rc12",
        "Wehrle ETK(W)-EAX": "wehrle-etkw-eax",
        "Maddalena SJ PLUS-EVO": "maddalena-sj-plus-evo",
        "Wasser-Geraete ECO": "wasser-geraete-eco",
        "GWF Sonico Nano": "gwf-sonico-nano",
        "Apator Powogaz JS Smart+": "apator-js-smart-plus",
        "Engelmann Senso Star E": "engelmann-senso-star-e",
        "Maddalena MicroClima Evo": "maddalena-microclima-evo",
        "Ploumeter RC12": "ploumeter-rc12",
        "Range ONE": "range-one",
        "ECLIPSE WM-Bus Gateway": "eclipse-wmbus-gateway",
        "ECLIPSE WM-Bus Repeater": "eclipse-wmbus-repeater",
        "EIXO WM-Bus Gateway": "eixo-wmbus-gateway",
        "EXIO WM-Bus Repeater": "exio-wmbus-repeater",
        "Walk-by": "walk-by",
        "Star/Fix": "star-fix",
        "MESH": "mesh",
    },
    "en": {
        "Modularis ONE": "modularis-one",
        "wMBus Smart+": "wmbus-smart-plus",
        "MBus Smart+": "mbus-smart-plus",
        "wMBus MicroClima": "wmbus-microclima",
        "wMBus RC12": "wmbus-rc12",
        "Wehrle ETK(W)-EAX": "wehrle-etkw-eax",
        "Maddalena SJ PLUS-EVO": "maddalena-sj-plus-evo",
        "Wasser-Geraete ECO": "wasser-geraete-eco",
        "GWF Sonico Nano": "gwf-sonico-nano",
        "Apator Powogaz JS Smart+": "apator-js-smart-plus",
        "Engelmann Senso Star E": "engelmann-senso-star-e",
        "Maddalena MicroClima Evo": "maddalena-microclima-evo",
        "Ploumeter RC12": "ploumeter-rc12",
        "Range ONE": "range-one",
        "ECLIPSE WM-Bus Gateway": "eclipse-wmbus-gateway",
        "ECLIPSE WM-Bus Repeater": "eclipse-wmbus-repeater",
        "EIXO WM-Bus Gateway": "eixo-wmbus-gateway",
        "EXIO WM-Bus Repeater": "exio-wmbus-repeater",
        "Walk-by": "walk-by",
        "Star/Fix": "star-fix",
        "MESH": "mesh",
    },
    "de": {
        "Modularis ONE": "modularis-one",
        "wMBus Smart+": "wmbus-smart-plus",
        "MBus Smart+": "mbus-smart-plus",
        "wMBus MicroClima": "wmbus-microclima",
        "wMBus RC12": "wmbus-rc12",
        "Wehrle ETK(W)-EAX": "wehrle-etkw-eax",
        "Maddalena SJ PLUS-EVO": "maddalena-sj-plus-evo",
        "Wasser-Geraete ECO": "wasser-geraete-eco",
        "GWF Sonico Nano": "gwf-sonico-nano",
        "Apator Powogaz JS Smart+": "apator-js-smart-plus",
        "Engelmann Senso Star E": "engelmann-senso-star-e",
        "Maddalena MicroClima Evo": "maddalena-microclima-evo",
        "Ploumeter RC12": "ploumeter-rc12",
        "Range ONE": "range-one",
        "ECLIPSE WM-Bus Gateway": "eclipse-wmbus-gateway",
        "ECLIPSE WM-Bus Repeater": "eclipse-wmbus-repeater",
        "EIXO WM-Bus Gateway": "eixo-wmbus-gateway",
        "EXIO WM-Bus Repeater": "exio-wmbus-repeater",
        "Walk-by": "walk-by",
        "Star/Fix": "star-fix",
        "MESH": "mesh",
    },
}

DETAIL_HEADINGS = {
    "pl": {
        "modularis-one": "Opis poszczegolnych modulow komunikacyjnych",
        "wmbus-smart-plus": "Opis poszczegolnych modulow komunikacyjnych",
        "mbus-smart-plus": "Opis poszczegolnych modulow komunikacyjnych",
        "wmbus-microclima": "Opis poszczegolnych modulow komunikacyjnych",
        "wmbus-rc12": "Opis poszczegolnych modulow komunikacyjnych",
        "wehrle-etkw-eax": "Opis poszczegolnych wodomierzy",
        "maddalena-sj-plus-evo": "Opis poszczegolnych wodomierzy",
        "wasser-geraete-eco": "Opis poszczegolnych wodomierzy",
        "gwf-sonico-nano": "Opis poszczegolnych wodomierzy",
        "apator-js-smart-plus": "Opis poszczegolnych wodomierzy",
        "engelmann-senso-star-e": "Opis poszczegolnych cieplomierzy",
        "maddalena-microclima-evo": "Opis poszczegolnych cieplomierzy",
        "ploumeter-rc12": "Opis poszczegolnych cieplomierzy",
        "range-one": "Opis poszczegolnych elementow infrastruktury",
        "eclipse-wmbus-gateway": "Opis poszczegolnych elementow infrastruktury",
        "eclipse-wmbus-repeater": "Opis poszczegolnych elementow infrastruktury",
        "eixo-wmbus-gateway": "Opis poszczegolnych elementow infrastruktury",
        "exio-wmbus-repeater": "Opis poszczegolnych elementow infrastruktury",
        "walk-by": "Opis poszczegolnych systemow",
        "star-fix": "Opis poszczegolnych systemow",
        "mesh": "Opis poszczegolnych systemow",
    },
    "en": {
        "modularis-one": "Communication module portfolio",
        "wmbus-smart-plus": "Communication module portfolio",
        "mbus-smart-plus": "Communication module portfolio",
        "wmbus-microclima": "Communication module portfolio",
        "wmbus-rc12": "Communication module portfolio",
        "wehrle-etkw-eax": "Water meter portfolio",
        "maddalena-sj-plus-evo": "Water meter portfolio",
        "wasser-geraete-eco": "Water meter portfolio",
        "gwf-sonico-nano": "Water meter portfolio",
        "apator-js-smart-plus": "Water meter portfolio",
        "engelmann-senso-star-e": "Heat meter portfolio",
        "maddalena-microclima-evo": "Heat meter portfolio",
        "ploumeter-rc12": "Heat meter portfolio",
        "range-one": "Infrastructure product overview",
        "eclipse-wmbus-gateway": "Infrastructure product overview",
        "eclipse-wmbus-repeater": "Infrastructure product overview",
        "eixo-wmbus-gateway": "Infrastructure product overview",
        "exio-wmbus-repeater": "Infrastructure product overview",
        "walk-by": "Systems and platforms",
        "star-fix": "Systems and platforms",
        "mesh": "Systems and platforms",
    },
    "de": {
        "modularis-one": "Kommunikationsmodule im Ueberblick",
        "wmbus-smart-plus": "Kommunikationsmodule im Ueberblick",
        "mbus-smart-plus": "Kommunikationsmodule im Ueberblick",
        "wmbus-microclima": "Kommunikationsmodule im Ueberblick",
        "wmbus-rc12": "Kommunikationsmodule im Ueberblick",
        "wehrle-etkw-eax": "Wasserzaehler im Ueberblick",
        "maddalena-sj-plus-evo": "Wasserzaehler im Ueberblick",
        "wasser-geraete-eco": "Wasserzaehler im Ueberblick",
        "gwf-sonico-nano": "Wasserzaehler im Ueberblick",
        "apator-js-smart-plus": "Wasserzaehler im Ueberblick",
        "engelmann-senso-star-e": "Warmezaehler im Ueberblick",
        "maddalena-microclima-evo": "Warmezaehler im Ueberblick",
        "ploumeter-rc12": "Warmezaehler im Ueberblick",
        "range-one": "Infrastrukturprodukte im Ueberblick",
        "eclipse-wmbus-gateway": "Infrastrukturprodukte im Ueberblick",
        "eclipse-wmbus-repeater": "Infrastrukturprodukte im Ueberblick",
        "eixo-wmbus-gateway": "Infrastrukturprodukte im Ueberblick",
        "exio-wmbus-repeater": "Infrastrukturprodukte im Ueberblick",
        "walk-by": "Systeme und Plattformen",
        "star-fix": "Systeme und Plattformen",
        "mesh": "Systeme und Plattformen",
    },
}

DOWNLOAD_LABEL = {
    "pl": "Pobierz dokumentacje: {url}",
    "en": "Download documentation: {url}",
    "de": "Dokumentation herunterladen: {url}",
}

ORDER = [
    "modularis-one",
    "wmbus-smart-plus",
    "mbus-smart-plus",
    "wmbus-microclima",
    "wmbus-rc12",
    "wehrle-etkw-eax",
    "maddalena-sj-plus-evo",
    "wasser-geraete-eco",
    "gwf-sonico-nano",
    "apator-js-smart-plus",
    "engelmann-senso-star-e",
    "maddalena-microclima-evo",
    "ploumeter-rc12",
    "range-one",
    "eclipse-wmbus-gateway",
    "eclipse-wmbus-repeater",
    "eixo-wmbus-gateway",
    "exio-wmbus-repeater",
    "walk-by",
    "star-fix",
    "mesh",
]


FEATURE_HEADINGS = {
    "pl": "Najwazniejsze cechy",
    "en": "Key features",
    "de": "Hauptmerkmale",
}

IMAGE_MAP = {
    "pl": {
        "wehrle-etkw-eax": ("/images/products/wodomierze/wehrle-etkw-eax.png", "Wodomierz Wehrle ETK(W)-EAX"),
        "maddalena-sj-plus-evo": ("/images/products/wodomierze/maddalena-sj-plus-evo.png", "Wodomierz Maddalena SJ PLUS-EVO"),
        "wasser-geraete-eco": ("/images/products/wodomierze/wasser-geraete-eco.png", "Wodomierz Wasser-Geraete ECO"),
        "gwf-sonico-nano": ("/images/products/wodomierze/gwf-sonico-nano.png", "Wodomierz GWF Sonico Nano"),
        "apator-js-smart-plus": ("/images/products/wodomierze/apator-js-smart-plus.png", "Wodomierz Apator Powogaz JS Smart+"),
        "modularis-one": ("/images/products/moduly-komunikacyjne/modularis-one.png", "Modul komunikacyjny Modularis ONE"),
        "wmbus-smart-plus": ("/images/products/moduly-komunikacyjne/wmbus-smart-plus.png", "Modul radiowy wMBus Smart+"),
        "mbus-smart-plus": ("/images/products/moduly-komunikacyjne/mbus-smart-plus.png", "Modul przewodowy MBus Smart+"),
        "wmbus-microclima": ("/images/products/moduly-komunikacyjne/wmbus-microclima.png", "Modul radiowy wMBus MicroClima"),
        "wmbus-rc12": ("/images/products/moduly-komunikacyjne/wmbus-rc12.png", "Modul radiowy wMBus RC12"),
        "engelmann-senso-star-e": ("/images/products/cieplomierze/engelmann-senso-star-e.png", "Cieplomierz Engelmann Senso Star E"),
        "maddalena-microclima-evo": ("/images/products/cieplomierze/maddalena-microclima-evo.png", "Cieplomierz Maddalena MicroClima Evo"),
        "ploumeter-rc12": ("/images/products/cieplomierze/ploumeter-rc12.png", "Cieplomierz Ploumeter RC12"),
        "range-one": ("/images/products/infrastruktura/range-one.png", "Range ONE - odbiornik radiowy"),
        "eclipse-wmbus-gateway": ("/images/products/infrastruktura/eclipse-wmbus-gateway.png", "ECLIPSE WM-Bus Gateway"),
        "eclipse-wmbus-repeater": ("/images/products/infrastruktura/eclipse-wmbus-repeater.png", "ECLIPSE WM-Bus Repeater"),
    },
    "en": {
        "wehrle-etkw-eax": ("/images/products/wodomierze/wehrle-etkw-eax.png", "Wehrle ETK(W)-EAX water meter"),
        "maddalena-sj-plus-evo": ("/images/products/wodomierze/maddalena-sj-plus-evo.png", "Maddalena SJ PLUS-EVO water meter"),
        "wasser-geraete-eco": ("/images/products/wodomierze/wasser-geraete-eco.png", "Wasser-Geraete ECO water meter"),
        "gwf-sonico-nano": ("/images/products/wodomierze/gwf-sonico-nano.png", "GWF Sonico Nano ultrasonic water meter"),
        "apator-js-smart-plus": ("/images/products/wodomierze/apator-js-smart-plus.png", "Apator Powogaz JS Smart+ water meter"),
        "modularis-one": ("/images/products/moduly-komunikacyjne/modularis-one.png", "Modularis ONE communication module"),
        "wmbus-smart-plus": ("/images/products/moduly-komunikacyjne/wmbus-smart-plus.png", "wMBus Smart+ wireless module"),
        "mbus-smart-plus": ("/images/products/moduly-komunikacyjne/mbus-smart-plus.png", "MBus Smart+ wired module"),
        "wmbus-microclima": ("/images/products/moduly-komunikacyjne/wmbus-microclima.png", "wMBus MicroClima wireless module"),
        "wmbus-rc12": ("/images/products/moduly-komunikacyjne/wmbus-rc12.png", "wMBus RC12 communication module"),
        "engelmann-senso-star-e": ("/images/products/cieplomierze/engelmann-senso-star-e.png", "Engelmann Senso Star E heat meter"),
        "maddalena-microclima-evo": ("/images/products/cieplomierze/maddalena-microclima-evo.png", "Maddalena MicroClima Evo heat meter"),
        "ploumeter-rc12": ("/images/products/cieplomierze/ploumeter-rc12.png", "Ploumeter RC12 heat meter"),
        "range-one": ("/images/products/infrastruktura/range-one.png", "Range ONE portable receiver"),
        "eclipse-wmbus-gateway": ("/images/products/infrastruktura/eclipse-wmbus-gateway.png", "ECLIPSE WM-Bus Gateway"),
        "eclipse-wmbus-repeater": ("/images/products/infrastruktura/eclipse-wmbus-repeater.png", "ECLIPSE WM-Bus Repeater"),
    },
    "de": {
        "wehrle-etkw-eax": ("/images/products/wodomierze/wehrle-etkw-eax.png", "Wehrle ETK(W)-EAX Wasserzaehler"),
        "maddalena-sj-plus-evo": ("/images/products/wodomierze/maddalena-sj-plus-evo.png", "Maddalena SJ PLUS-EVO Wasserzaehler"),
        "wasser-geraete-eco": ("/images/products/wodomierze/wasser-geraete-eco.png", "Wasser-Geraete ECO Wasserzaehler"),
        "gwf-sonico-nano": ("/images/products/wodomierze/gwf-sonico-nano.png", "GWF Sonico Nano Wasserzaehler"),
        "apator-js-smart-plus": ("/images/products/wodomierze/apator-js-smart-plus.png", "Apator Powogaz JS Smart+ Wasserzaehler"),
        "modularis-one": ("/images/products/moduly-komunikacyjne/modularis-one.png", "Modularis ONE Kommunikationsmodul"),
        "wmbus-smart-plus": ("/images/products/moduly-komunikacyjne/wmbus-smart-plus.png", "wMBus Smart+ Funkmodul"),
        "mbus-smart-plus": ("/images/products/moduly-komunikacyjne/mbus-smart-plus.png", "MBus Smart+ Modul"),
        "wmbus-microclima": ("/images/products/moduly-komunikacyjne/wmbus-microclima.png", "wMBus MicroClima Funkmodul"),
        "wmbus-rc12": ("/images/products/moduly-komunikacyjne/wmbus-rc12.png", "wMBus RC12 Kommunikationsmodul"),
        "engelmann-senso-star-e": ("/images/products/cieplomierze/engelmann-senso-star-e.png", "Engelmann Senso Star E Waermezaehler"),
        "maddalena-microclima-evo": ("/images/products/cieplomierze/maddalena-microclima-evo.png", "Maddalena MicroClima Evo Waermezaehler"),
        "ploumeter-rc12": ("/images/products/cieplomierze/ploumeter-rc12.png", "Ploumeter RC12 Waermezaehler"),
        "range-one": ("/images/products/infrastruktura/range-one.png", "Range ONE Funkempfaenger"),
        "eclipse-wmbus-gateway": ("/images/products/infrastruktura/eclipse-wmbus-gateway.png", "ECLIPSE WM-Bus Gateway"),
        "eclipse-wmbus-repeater": ("/images/products/infrastruktura/eclipse-wmbus-repeater.png", "ECLIPSE WM-Bus Repeater"),
    },
}

REPLACEMENTS = {"\u2013": "-", "\u2014": "-", "\u2011": "-", "\u2212": "-"}
FEATURE_KEYWORDS = ("Key Features", "Najwazniejsze cechy", "Kluczowe cechy", "Hauptmerkmale")
CHAR_MAP = str.maketrans(
    {
        "\u0141": "L",
        "\u0142": "l",
        "\u015a": "S",
        "\u015b": "s",
        "\u0106": "C",
        "\u0107": "c",
        "\u017b": "Z",
        "\u017c": "z",
        "\u0179": "Z",
        "\u017a": "z",
        "\u0104": "A",
        "\u0105": "a",
        "\u0118": "E",
        "\u0119": "e",
        "\u00d3": "O",
        "\u00f3": "o",
        "\u0143": "N",
        "\u0144": "n",
        "\u00c4": "Ae",
        "\u00e4": "ae",
        "\u00d6": "Oe",
        "\u00f6": "oe",
        "\u00dc": "Ue",
        "\u00fc": "ue",
        "\u1e9e": "SS",
        "\u00df": "ss",
        "\u00c9": "E",
        "\u00e9": "e",
        "\u00c8": "E",
        "\u00e8": "e",
        "\u00ca": "E",
        "\u00ea": "e",
        "\u00cb": "E",
        "\u00eb": "e",
        "\u00c2": "A",
        "\u00e2": "a",
        "\u00d4": "O",
        "\u00f4": "o",
        "\u00ce": "I",
        "\u00ee": "i",
        "\u00c3": "A",
        "\u00e3": "a",
        "\u00c7": "C",
        "\u00e7": "c",
    }
)


def pre_clean(text: str) -> str:
    text = text.translate(CHAR_MAP)
    for src, target in REPLACEMENTS.items():
        text = text.replace(src, target)
    return text


def clean_text(text: str) -> str:
    text = pre_clean(text)
    text = text.replace("**", "")
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"\s+", " ", text).strip()
    return text


def normalize_heading(raw: str | None, lang: str, slug: str) -> str:
    if not raw:
        return FEATURE_HEADINGS[lang]
    normalized = clean_text(raw)
    lower = normalized.lower()
    if "kluczowe cechy" in lower or "najwazniejsze cechy" in lower:
        return FEATURE_HEADINGS["pl"]
    if "key features" in lower:
        return FEATURE_HEADINGS["en"]
    if "hauptmerkmale" in lower:
        return FEATURE_HEADINGS["de"]
    return normalized


def parse_markdown(path: Path, lang: str) -> Dict[str, Dict[str, List[str]]]:
    lines = path.read_text(encoding="utf-8").splitlines()
    sections: Dict[str, Dict[str, List[str]]] = {}
    current_title = None
    intro: List[str] = []
    post: List[str] = []
    current_para: List[str] = []
    current_list = intro
    features: List[str] = []
    features_heading: str | None = None
    download_url: str | None = None
    mode = "pre"

    def flush() -> None:
        nonlocal current_para, current_list
        if current_para:
            current_list.append(" ".join(current_para))
            current_para = []

    def finalize() -> None:
        nonlocal current_title, intro, post, current_list, features, features_heading, download_url, mode
        if not current_title:
            return
        flush()
        intro_clean = [clean_text(p) for p in intro if clean_text(p)]
        post_clean = [clean_text(p) for p in post if clean_text(p)]
        features_clean = [clean_text(f) for f in features if clean_text(f)]
        if download_url:
            post_clean.append(clean_text(DOWNLOAD_LABEL[lang].format(url=download_url)))
        if intro_clean:
            intro_text = intro_clean[0]
            description = intro_clean[1:] + post_clean
        else:
            intro_text = ""
            description = post_clean
        filtered_description = [
            paragraph
            for paragraph in description
            if not paragraph.lower().startswith(("najwazniejsze cechy", "kluczowe cechy", "key features", "hauptmerkmale"))
        ]
        sections[clean_text(current_title)] = {
            "title": clean_text(current_title),
            "intro": intro_text,
            "description": filtered_description,
            "featuresHeading": features_heading,
            "features": features_clean,
        }
        intro = []
        post = []
        current_list = intro
        features = []
        features_heading = None
        download_url = None
        mode = "pre"

    for raw_line in lines:
        line = raw_line.rstrip()
        if line.startswith("## "):
            finalize()
            current_title = line[3:].strip()
            intro = []
            post = []
            current_para = []
            current_list = intro
            features = []
            features_heading = None
            download_url = None
            mode = "pre"
            continue
        if current_title is None:
            continue
        stripped = line.strip()
        if not stripped:
            flush()
            continue
        if stripped.startswith("---"):
            continue
        if stripped.startswith("["):
            match = re.search(r"\(([^)]+)\)", stripped)
            if match:
                download_url = match.group(1)
            continue
        if stripped.startswith("**") and any(keyword in stripped for keyword in FEATURE_KEYWORDS):
            flush()
            features_heading = stripped
            mode = "features"
            continue
        if stripped.startswith("- "):
            features.append(stripped[2:])
            mode = "features"
            continue
        if mode == "features":
            mode = "post"
            current_list = post
        current_para.append(stripped)

    finalize()
    return sections


def load_sections(lang: str) -> Dict[str, Dict[str, List[str]]]:
    data: Dict[str, Dict[str, List[str]]] = {}
    for path in FILES[lang].values():
        data.update(parse_markdown(path, lang))
    return data


def build_block(slug: str, entry: Dict[str, List[str]], lang: str) -> str:
    heading_value = DETAIL_HEADINGS.get(lang, {}).get(
        slug,
        DETAIL_HEADINGS.get(lang, {}).get("modularis-one", FEATURE_HEADINGS[lang]),
    )
    features_heading = normalize_heading(entry.get("featuresHeading"), lang, slug)
    image_entry = IMAGE_MAP.get(lang, {}).get(slug)
    lines = [
        f"    '{slug}': {{",
        f"      slug: '{slug}',",
        f"      heading: '{escape_ts(heading_value)}',",
        f"      title: '{escape_ts(entry['title'])}',",
        "      intro:",
        f"        '{escape_ts(entry['intro'])}',",
    ]
    if image_entry:
        src, alt = image_entry
        lines.extend(
            [
                "      image: {",
                f"        src: '{escape_ts(src)}',",
                f"        alt: '{escape_ts(alt)}',",
                "      },",
            ]
        )
    lines.append("      description: [")
    for item in entry["description"]:
        lines.append(f"        '{escape_ts(item)}',")
    lines.append("      ],")
    lines.append(f"      featuresHeading: '{escape_ts(features_heading)}',")
    lines.append("      features: [")
    for feature in entry["features"]:
        lines.append(f"        '{escape_ts(feature)}',")
    lines.append("      ],")
    lines.append("    },")
    return "\n".join(lines)


def escape_ts(text: str) -> str:
    return text.replace("\\", "\\\\").replace("'", "\\'")


def replace_product_details(content: str, lang: str, entries: Dict[str, Dict[str, List[str]]]) -> str:
    locale_marker = f"const {lang}: ContentStructure = {{"
    start = content.index(locale_marker)
    pd_start = content.index("  productDetails: {", start)
    brace_level = 0
    idx = pd_start
    while idx < len(content):
        if content[idx] == "{":
            brace_level += 1
        elif content[idx] == "}":
            brace_level -= 1
            if brace_level == 0:
                pd_end = idx
                break
        idx += 1
    else:
        raise ValueError("productDetails block not terminated")
    closing_comma = content.index("  },", pd_end)
    replacement_lines = ["  productDetails: {", ""]
    for slug in ORDER:
        entry = None
        for title, mapped_slug in SLUG_MAP[lang].items():
            if mapped_slug == slug and title in entries:
                entry = entries[title]
                entry = {
                    "title": entry["title"],
                    "intro": entry["intro"],
                    "description": entry["description"],
                    "featuresHeading": entry.get("featuresHeading"),
                    "features": entry["features"],
                }
                break
        if entry is None:
            continue
        replacement_lines.append(build_block(slug, entry, lang))
        replacement_lines.append("")
    replacement_lines.append("  },")
    replacement = "\n".join(replacement_lines)
    return content[:pd_start] + replacement + content[closing_comma + 4 :]


def main() -> None:
    content = CONTENT_PATH.read_text(encoding="utf-8")
    for lang in ("pl", "en", "de"):
        sections = load_sections(lang)
        content = replace_product_details(content, lang, sections)
    CONTENT_PATH.write_text(content, encoding="utf-8")


if __name__ == "__main__":
    main()
