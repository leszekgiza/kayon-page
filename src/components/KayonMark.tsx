const KayonMark = ({ className = 'h-12 w-12' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="KAYON emblem"
  >
    <circle cx="24" cy="24" r="24" fill="#ffffff" />
    <path d="M24 14v12" stroke="#77BB61" strokeWidth="4" strokeLinecap="round" />
    <path d="M24 24 14.5 14.5" stroke="#2CBCEB" strokeWidth="4" strokeLinecap="round" />
    <path d="M24 24 33.5 14.5" stroke="#F4B250" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export default KayonMark;
