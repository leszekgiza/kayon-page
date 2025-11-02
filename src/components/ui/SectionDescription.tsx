import parse from 'html-react-parser';

const Sectiontext = ({ text, textColorClass }: { text: string, textColorClass: string }) => {
  return (
    <p className={`px-8 py-6 md:w-[575px] md:text-xl rounded-3xl ${textColorClass} border-2 border-white/30 font-bold`}>
      {parse(text)}
    </p>
  )
};

export default Sectiontext;