const HeroSimpleCircle = () => {
  return (
    <div id="header-simple-circle" className="absolute lg:left-[-955px] xl:left-[-855px] 2xl:left-[-555px] top-[-29px] hidden h-[494px] w-[1420px] items-center justify-center lg:flex">
      <div className="rotate-180">
        <div className="relative h-[494px] w-[1420px] rounded-[247px] opacity-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[247px] border-2 border-solid border-[#eaeaea]"
          />
        </div>
      </div>
    </div>
  )
};

export default HeroSimpleCircle;