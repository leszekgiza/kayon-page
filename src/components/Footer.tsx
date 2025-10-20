const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171717] py-10 text-white" id="kontakt">
      <div className="container-custom flex flex-col items-center justify-between gap-6 text-sm text-white/60 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg font-semibold text-white">
            Y
          </div>
          <span>© {currentYear} KAYON</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="transition-colors duration-200 hover:text-white/90">
            Terms of service
          </a>
            <a href="#" className="transition-colors duration-200 hover:text-white/90">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
