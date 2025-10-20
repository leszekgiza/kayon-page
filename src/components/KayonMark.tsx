const KayonMark = ({ className = 'h-12 w-12' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="KAYON emblem"
  >
    <circle cx="24" cy="24" r="24" fill="#FFFFFF" />
    <path
      d="M24 17.5v11"
      stroke="#77BB61"
      strokeWidth="4.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 24 16.2 16.2"
      stroke="#2CBCEB"
      strokeWidth="4.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 24 31.8 16.2"
      stroke="#F4B250"
      strokeWidth="4.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default KayonMark;
