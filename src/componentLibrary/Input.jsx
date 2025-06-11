export const Input = ({ id, type = 'text', placeholder = 'Введите текст', className = '', required = false }) => {
  return (
    <input 
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      className={`border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 ${className}`}
    />
  );
};
