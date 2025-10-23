import zipfile
import xml.etree.ElementTree as ET

docx_path = r"D:\kayon-page\teksty\20251022_g0754_SYSTEMY - teksty do zakładki - Final (RP).docx"

with zipfile.ZipFile(docx_path) as docx:
    xml_content = docx.read('word/document.xml')
    root = ET.fromstring(xml_content)

    # Namespace dla Word XML
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

    # Wyciągnij wszystkie teksty
    texts = []
    for text_elem in root.findall('.//w:t', ns):
        if text_elem.text:
            texts.append(text_elem.text)

    print(''.join(texts))
