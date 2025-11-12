import KayonLogo from "@/components/ui/KayonLogo";
import ScrollDownButtonMinimal from "../ui/ScrollDownButtonMinimal";
import HeroSimpleCircle from "../ui/HeroSimpleCircle";

const HeroSimple = ({ title, desc }: { title: string, desc: string }) => {
  return (
    <section className="relative overflow-hidden bg-[#343432] text-white">
      <div className="relative z-10 px-4 py-10 pt-32 md:pt-32 lg:pt-10 lg:px-10 xl:px-20 xl:pt-20 2xl:px-0 max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:gap-4">
        <div className="lg:w-1/2">
          <KayonLogo className="h-auto w-full lg:w-[80%] xl:w-[450px]" />
        </div>

        <div className="max-lg:order-last mx-2 xl:mx-24 lg:min-h-[550px] flex flex-col justify-end">
          <ScrollDownButtonMinimal />
        </div>

        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <h1 className="whitespace-pre leading-[1.2] text-2xl md:text-3xl lg:text-4xl text-center lg:text-left">
            {title}
          </h1>
          <p className="my-4 lg:mt-10 lg:mb-0 p-8 border-2 border-[#747171] rounded-3xl md:text-xl font-bold bg-[#343432]">
            {desc}
          </p>
        </div>

      </div>

      <HeroSimpleCircle />
    </section>
  )
};

export default HeroSimple;