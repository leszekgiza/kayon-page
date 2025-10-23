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

    {/* Y symbol - exact paths from Figma LOGO SYMBOL component (111:2795) */}
    {/* Scaled from 76x76 to 57x57 (scale factor: 0.75) and centered */}
    <g transform="translate(9.75, 9.75) scale(0.75)">
      {/* Left diagonal line (cyan) */}
      <path
        d="M28.2755 33.1518C26.9477 33.1518 25.7038 32.6377 24.7722 31.7065L1.45117 8.39615C0.514338 7.46237 0 6.21908 0 4.89447C0 3.56987 0.514338 2.32396 1.45117 1.39018C2.33289 0.506234 3.60824 0 4.95445 0C6.30065 0 7.57863 0.506234 8.46035 1.39018L31.7814 24.7006C33.7128 26.6311 33.7128 29.7734 31.7814 31.7065C30.8498 32.6377 29.6034 33.1518 28.2755 33.1518Z"
        fill="#2CBCEB"
      />
      {/* Right diagonal line (orange) */}
      <path
        d="M47.3795 33.1518C46.0517 33.1518 44.8052 32.6377 43.8736 31.7065C42.9394 30.7728 42.4251 29.5268 42.4251 28.2022C42.4251 26.8776 42.9394 25.6343 43.8736 24.7006L67.1947 1.39018C68.0764 0.506234 69.3518 0 70.698 0C72.0442 0 73.3195 0.506234 74.2012 1.39018C75.1381 2.32396 75.6524 3.56987 75.6524 4.89447C75.6524 6.21908 75.1381 7.46237 74.2012 8.39615L50.8802 31.7065C49.9512 32.6377 48.7074 33.1518 47.3795 33.1518Z"
        fill="#F4B250"
      />
      {/* Vertical line (green) */}
      <path
        d="M38.0794 76C35.345 76 33.1224 73.7783 33.1224 71.0452V45.2535C33.1224 42.5229 35.345 40.3013 38.0794 40.3013C40.8138 40.3013 43.0365 42.5229 43.0365 45.2535V71.0452C43.0365 73.7783 40.8138 76 38.0794 76Z"
        fill="#77BB61"
      />
    </g>
  </svg>
);

export default KayonMark;
