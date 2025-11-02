import parse from 'html-react-parser';

const ButtonSimple = ({ text, bgClass, callbackFunction, children }: { text: string, bgClass?: string, callbackFunction?: () => void, children?: React.ReactNode }) => {
  return (
    <button
      type="button"
      onClick={callbackFunction}
      className={`px-8 min-h-[51px] inline-flex items-center gap-2 rounded-full ${bgClass || 'bg-primary'} text-white font-bold`}
    >
      {parse(text)} {children}
    </button>
  )
};

export default ButtonSimple;