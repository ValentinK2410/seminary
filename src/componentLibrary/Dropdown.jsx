import { RotatingChevron } from "../images/icons/RotatingChevron";

export const Dropdown = ({
  isOpen,
  onClick,
  children,
  buttonClassName,
}) => {
  const defaultButtonClass =
    "inline-flex justify-center items-center w-full rounded-md px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={onClick}
        className={`${defaultButtonClass} ${buttonClassName || ""}`}
      >
        Кабинет
        <RotatingChevron isOpen={isOpen} />
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
