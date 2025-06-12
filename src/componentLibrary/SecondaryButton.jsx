export const SecondaryButton = ({ onClick, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 text-lg rounded-lg flex items-center justify-center transition-colors duration-200
        bg-white text-indigo-600 border border-indigo-600
        hover:bg-indigo-600 hover:text-white hover:border-white
        ${className}`}
    >
      {children}
    </button>
  );
};
