export const PrimaryButton = ({ onClick, children, className = '' }) => {
  return (
    <button
      className={`
        bg-blue-700 
        hover:bg-white 
        text-white 
        hover:text-blue-700 
        border 
        border-blue-700
        hover:border-blue-700
        rounded-lg 

        px-5 
        py-2.5 
        text-lg
         
        flex 
        items-center 
        justify-center
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
