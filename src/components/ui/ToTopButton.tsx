const ToTopButton = () => {
  return (
    <a
      className="mx-auto h-[57px] w-[57px] fixed z-30 right-[10px] bottom-[10px] cursor-pointer flex items-center justify-center rounded-[30px] bg-primary transition-all duration-300 ease-in-out"
      href="#"
      title="Scroll to top"
      aria-label="Scroll to top"
    >
      <span className="material-symbols-rounded text-[24px] text-white">
        arrow_upward
      </span>
    </a>
  )
};

export default ToTopButton;