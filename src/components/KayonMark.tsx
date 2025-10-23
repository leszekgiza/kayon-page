const KayonMark = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    width="57"
    height="57"
    viewBox="0 0 57 57"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="KAYON emblem"
    style={{
      filter: 'drop-shadow(0px 10px 40px rgba(0, 0, 0, 0.15))',
    }}
  >
    {/* White circular background with 30px radius (appears as rounded square) */}
    <rect x="0" y="0" width="57" height="57" rx="30" ry="30" fill="#FFFFFF" />

    {/* Y symbol with three colored lines */}
    <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
      {/* Green vertical line (bottom stem) */}
      <line x1="28.5" y1="22" x2="28.5" y2="38" stroke="#77BB61" />
      {/* Cyan/blue diagonal line (left top) */}
      <line x1="28.5" y1="22" x2="18" y2="12" stroke="#2CBCEB" />
      {/* Orange/yellow diagonal line (right top) */}
      <line x1="28.5" y1="22" x2="39" y2="12" stroke="#F4B250" />
    </g>
  </svg>
);

export default KayonMark;
