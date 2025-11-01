import parse from 'html-react-parser';

const SectionLabel = ({ label, bgClass }: { label: string, bgClass: string }) => {
  return (
    <div className={`inline-flex w-max items-center rounded-full ${bgClass} text-[#1D1D1B] px-6 py-2 text-sm font-semibold`}>
      {parse(label)}
    </div>
  )
};

export default SectionLabel;