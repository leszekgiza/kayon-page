const DownloadButton = ({ href, text }: { href: string, text: string }) => {
  return (
    <a
      key={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 w-max text-sm font-bold bg-[#747171] text-white transition hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {text}
      <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.64592 4.49996L0.208415 1.06246C0.13897 0.993014 0.083415 0.92357 0.0417485 0.854126C0.0139708 0.770792 8.18968e-05 0.687458 8.18968e-05 0.604125C8.18968e-05 0.451348 0.0556374 0.312459 0.166748 0.187459C0.291748 0.0624588 0.444526 -4.1008e-05 0.625082 -4.1008e-05H7.95842C8.13897 -4.1008e-05 8.2848 0.0694032 8.39592 0.208292C8.52092 0.333292 8.58342 0.472181 8.58342 0.624959C8.58342 0.666626 8.51397 0.812459 8.37508 1.06246L4.93758 4.49996C4.85425 4.58329 4.75008 4.64579 4.62508 4.68746C4.51397 4.72913 4.40286 4.74996 4.29175 4.74996C4.18064 4.74996 4.06258 4.72913 3.93758 4.68746C3.82647 4.64579 3.72925 4.58329 3.64592 4.49996Z" fill="white" />
      </svg>
    </a>
  )
};

export default DownloadButton;