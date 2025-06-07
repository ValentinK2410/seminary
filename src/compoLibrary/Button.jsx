import React from 'react';

export const Button = ({ onClick, children, className = '' }) => {
  return (
    <button
      className={`
        bg-indigo-600 
        text-white 
        border 
        border-indigo-600
        px-5 
        py-2.5 
        text-lg 
        rounded-lg 
        flex 
        items-center 
        justify-between
        transition-colors 
        duration-200
        hover:bg-white 
        hover:text-indigo-600 
        hover:border-indigo-600
        ${className}
      `}
      onClick={onClick}
    >
      <span className="flex-1 text-left">{children}</span>
      <span className="ml-2 transition-colors duration-200">→</span>
    </button>
  );
};
