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

    {/* Y symbol - scaled from full KAYON logo */}
    <g transform="translate(28.5, 28.5) scale(0.35)">
      {/* Left diagonal line (cyan) - scaled from original logo */}
      <path
        d="M-7.5 12C-9.5 12 -11.2 10.9 -12.5 9.6L-28.5 -6.4C-29.8 -7.7 -30.5 -9.4 -30.5 -11.2C-30.5 -13 -29.8 -14.7 -28.5 -16C-27.2 -17.3 -25.5 -18 -23.7 -18C-21.9 -18 -20.2 -17.3 -18.9 -16L-2.9 0C-0.3 2.6 -0.3 6.7 -2.9 9.6C-4.2 10.9 -5.9 12 -7.5 12Z"
        fill="#2CBCEB"
      />
      {/* Right diagonal line (orange/yellow) - scaled from original logo */}
      <path
        d="M6.5 12C4.9 12 3.2 10.9 1.9 9.6C0.6 8.3 -0.1 6.6 -0.1 4.8C-0.1 3 0.6 1.3 1.9 0L17.9 -16C19.2 -17.3 20.9 -18 22.7 -18C24.5 -18 26.2 -17.3 27.5 -16C28.8 -14.7 29.5 -13 29.5 -11.2C29.5 -9.4 28.8 -7.7 27.5 -6.4L11.5 9.6C10.2 10.9 8.5 12 6.5 12Z"
        fill="#F4B250"
      />
      {/* Vertical line (green) - scaled from original logo */}
      <path
        d="M-0.5 28C-2.5 28 -4.2 26.3 -4.2 24.3V6.3C-4.2 4.3 -2.5 2.6 -0.5 2.6C1.5 2.6 3.2 4.3 3.2 6.3V24.3C3.2 26.3 1.5 28 -0.5 28Z"
        fill="#77BB61"
      />
    </g>
  </svg>
);

export default KayonMark;
