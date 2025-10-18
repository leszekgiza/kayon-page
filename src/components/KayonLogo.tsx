const KayonLogo = ({ className = "h-8" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 240 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* K - black */}
      <path
        d="M5 15 L5 50 M5 32.5 L22 15 M5 32.5 L22 50"
        stroke="rgb(29, 29, 27)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* A - black */}
      <path
        d="M32 50 L42 15 L52 50 M35 37 L49 37"
        stroke="rgb(29, 29, 27)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Y with blue accent bar above */}
      {/* Blue diagonal bar above Y */}
      <line
        x1="68"
        y1="8"
        x2="78"
        y2="2"
        stroke="rgb(44, 188, 235)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Y letter - black */}
      <path
        d="M62 15 L72 30 M82 15 L72 30 L72 50"
        stroke="rgb(29, 29, 27)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* O with orange accent bar above */}
      {/* Orange diagonal bar above O */}
      <line
        x1="108"
        y1="8"
        x2="118"
        y2="2"
        stroke="rgb(244, 178, 80)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* O letter - black rounded square */}
      <rect
        x="102"
        y="18"
        width="26"
        height="32"
        rx="4"
        stroke="rgb(29, 29, 27)"
        strokeWidth="3.5"
        fill="none"
      />

      {/* N with green vertical accent bar above */}
      {/* Green vertical bar above N */}
      <line
        x1="152"
        y1="2"
        x2="152"
        y2="12"
        stroke="rgb(119, 187, 97)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* N letter - black */}
      <path
        d="M142 50 L142 15 L162 50 L162 15"
        stroke="rgb(29, 29, 27)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default KayonLogo;
