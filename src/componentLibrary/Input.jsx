export const Input = ({ id, type, placeholder, className, required = '' }) => {
  return (
    <input 
      id={id}
      type={type || 'text'}
      placeholder={placeholder || 'Введите текст'}
      required={required}
      className={`border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 ${className}`}
    />
  );
};