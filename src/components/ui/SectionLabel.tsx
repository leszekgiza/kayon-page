import parse from 'html-react-parser';

const SectionLabel = ({ label, bgClass }: { label: string, bgClass: string }) => {
  return (
    <div className={`px-8 py-2 h-[57px] inline-flex w-max items-center rounded-full text-2xl ${bgClass} text-[#1D1D1B] font-bold`}>
      {parse(label)}
    </div>
  )
};

export default SectionLabel;