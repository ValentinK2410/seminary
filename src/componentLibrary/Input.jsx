export const Input = ({ id,name,value,onChange, type = 'text', placeholder = 'Введите текст', className = '', required = false }) => {
  return (
    <input 
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      required={required}
      className={`border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 ${className}`}
    />
  );
};
