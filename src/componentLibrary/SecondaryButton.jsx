export const SecondaryButton = ({ onClick, children, className = '' }) => {
  return (
    <button
      className={`
     bg-white 
        hover:bg-indigo-600 
        text-indigo-600  
        hover:text-white 
        border 
        border-indigo-600
        hover:border-white

        px-5 
        py-2.5 
        text-lg 
        rounded-lg 
        
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
