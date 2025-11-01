import parse from 'html-react-parser';

const Sectiontext = ({ text, textColorClass }: { text: string, textColorClass: string }) => {
  return (
    <div className={`px-8 py-6 w-full max-w-xl text-xl rounded-3xl ${textColorClass} border-2 border-white/30 leading-relaxed font-bold`}>
      {parse(text)}
    </div>
  )
};

export default Sectiontext;