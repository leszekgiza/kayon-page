const KayonMark = ({ className = 'h-12 w-12' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="KAYON emblem"
  >
    <defs>
      <filter
        id="kayon-mark-shadow"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        colorInterpolationFilters="sRGB"
      >
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.12" />
      </filter>
    </defs>
    <g filter="url(#kayon-mark-shadow)">
      <circle cx="32" cy="32" r="28" fill="#FFFFFF" />
    </g>
    <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.4">
      <path d="M32 20v15" stroke="#77BB61" />
      <path d="M32 32 22 22" stroke="#2CBCEB" />
      <path d="M32 32 42 22" stroke="#F4B250" />
    </g>
  </svg>
);

export default KayonMark;
