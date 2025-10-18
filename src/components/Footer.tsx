import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white" id="kontakt">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">KAYON</h3>
            <p className="text-white/70 mb-6">
              Nowoczesne systemy pomiarowe dla przyszłości energetyki.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-accent-blue rounded-lg transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <span>in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-accent-blue rounded-lg transition-colors duration-200"
                aria-label="Facebook"
              >
                <span>f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-accent-blue rounded-lg transition-colors duration-200"
                aria-label="Twitter"
              >
                <span>𝕏</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Produkty</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#produkty" className="text-white/70 hover:text-accent-blue transition-colors duration-200">
                  Liczniki ciepła
                </Link>
              </li>
              <li>
                <Link href="#produkty" className="text-white/70 hover:text-accent-blue transition-colors duration-200">
                  Liczniki wody
                </Link>
              </li>
              <li>
                <Link href="#produkty" className="text-white/70 hover:text-accent-blue transition-colors duration-200">
                  Koncentratory
                </Link>
              </li>
              <li>
                <Link href="#produkty" className="text-white/70 hover:text-accent-blue transition-colors duration-200">
                  Platforma ALL in KAYON
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Firma</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#o-nas" className="text-white/70 hover:text-accent-blue transition-colors duration-200">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="#korzysci" className="text-white/70 hover:text-accent-blue transition-colors duration-200">
                  Korzyści
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="text-white/70 hover:text-accent-blue transition-colors duration-200">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent-blue transition-colors duration-200">
                  Kariera
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <span>📧</span>
                <a href="mailto:kontakt@kayon.pl" className="hover:text-accent-blue transition-colors duration-200">
                  kontakt@kayon.pl
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+48123456789" className="hover:text-accent-blue transition-colors duration-200">
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>
                  ul. Przykładowa 123<br />
                  00-000 Warszawa, Polska
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>
              © {currentYear} KAYON. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent-blue transition-colors duration-200">
                Polityka prywatności
              </Link>
              <Link href="#" className="hover:text-accent-blue transition-colors duration-200">
                Regulamin
              </Link>
              <Link href="#" className="hover:text-accent-blue transition-colors duration-200">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
