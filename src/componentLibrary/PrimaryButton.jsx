export const PrimaryButton = ({ onClick, children, className = '' }) => {
  return (
    <button
      className={`
        bg-indigo-600 
        hover:bg-white 
        text-white 
        hover:text-indigo-600 
        border 
        border-indigo-600
        hover:border-indigo-600
        rounded-lg 

        px-5 
        py-2.5 
        text-lg
         
        flex 
        items-center 
        justify-between
        transition-colors 
        duration-200
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
