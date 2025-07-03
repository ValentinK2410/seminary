export const SecondaryButton = ({ onClick, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2.5 text-lg rounded-lg flex items-center justify-center transition-colors duration-200
        bg-white dark:bg-gray-800 
        text-indigo-600 dark:text-indigo-200 
        border border-indigo-600 dark:border-indigo-200 
        hover:bg-indigo-600 dark:hover:bg-indigo-500 
        hover:text-white dark:hover:text-gray-100 
        hover:border-white dark:hover:border-gray-100
        focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-400
        ${className}
      `}
    >
      {children}
    </button>
  );
};