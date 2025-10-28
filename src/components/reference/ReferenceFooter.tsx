'use client';

const ReferenceFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex h-[150px] w-[1920px] items-center bg-[#171717] text-white">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-8 text-sm text-white/60">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg font-semibold text-white">
            Y
          </div>
          <span>© {currentYear} KAYON. Wszelkie prawa zastrzeżone.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="/polityka-prywatnosci" className="transition-colors duration-200 hover:text-white/90">
            Polityka Prywatności
          </a>
          <a href="/polityka-cookies" className="transition-colors duration-200 hover:text-white/90">
            Polityka Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ReferenceFooter;
