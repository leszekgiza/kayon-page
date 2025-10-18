const KayonLogo = ({ className = "h-8" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* K */}
      <path
        d="M10 10 L10 50 M10 30 L30 10 M10 30 L30 50"
        stroke="rgb(29, 29, 27)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* A */}
      <path
        d="M40 50 L50 10 L60 50 M43 35 L57 35"
        stroke="rgb(29, 29, 27)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Y - with blue color */}
      <path
        d="M70 10 L80 25 M90 10 L80 25 L80 50"
        stroke="rgb(44, 188, 235)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* O - with gold color */}
      <ellipse
        cx="110"
        cy="30"
        rx="12"
        ry="20"
        stroke="rgb(244, 178, 80)"
        strokeWidth="4"
        fill="none"
      />
      {/* N - with green color */}
      <path
        d="M135 50 L135 10 L155 50 L155 10"
        stroke="rgb(119, 187, 97)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default KayonLogo;
