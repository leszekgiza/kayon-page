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
    {/* White circular background - exact from Figma */}
    <rect x="0" y="0" width="57" height="57" rx="28.5" fill="white" />

    {/* Y symbol - exact paths from Figma LOGO component (I117:2816;111:2754) */}
    {/* Symbol is 23x23px centered in 57x57 circle with 17px margins on all sides */}

    {/* Left diagonal line (cyan) */}
    <path
      d="M25.5964 27.0328C25.1927 27.0328 24.8145 26.8772 24.5313 26.5954L17.4412 19.5409C17.1564 19.2583 17 18.8821 17 18.4812C17 18.0804 17.1564 17.7033 17.4412 17.4207C17.7093 17.1532 18.097 17 18.5063 17C18.9155 17 19.3041 17.1532 19.5721 17.4207L26.6623 24.4752C27.2494 25.0594 27.2494 26.0104 26.6623 26.5954C26.379 26.8772 26.0001 27.0328 25.5964 27.0328Z"
      fill="#2CBCEB"
    />

    {/* Right diagonal line (orange) */}
    <path
      d="M31.4044 27.0328C31.0007 27.0328 30.6218 26.8772 30.3386 26.5954C30.0545 26.3128 29.8982 25.9358 29.8982 25.5349C29.8982 25.134 30.0545 24.7578 30.3386 24.4752L37.4287 17.4207C37.6967 17.1532 38.0845 17 38.4937 17C38.903 17 39.2908 17.1532 39.5588 17.4207C39.8436 17.7033 40 18.0804 40 18.4812C40 18.8821 39.8436 19.2583 39.5588 19.5409L32.4687 26.5954C32.1863 26.8772 31.8081 27.0328 31.4044 27.0328Z"
      fill="#F4B250"
    />

    {/* Vertical line (green) */}
    <path
      d="M28.577 40C27.7457 40 27.0699 39.3277 27.0699 38.5005V30.6951C27.0699 29.8688 27.7457 29.1964 28.577 29.1964C29.4083 29.1964 29.084 29.8688 29.084 30.6951V38.5005C29.084 39.3277 29.4083 40 28.577 40Z"
      fill="#77BB61"
    />
  </svg>
);

export default KayonMark;
