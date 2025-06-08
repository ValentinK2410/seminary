const CategoryMenuBtn = () => {
  return (
    <button className="flex items-center gap-2 px-4 py-1 bg-purple-50 rounded-lg border border-purple-200 text-purple-700 text-lg">
      <svg className="w-6 h-6 text-purple-700" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="2" />
        <circle cx="12" cy="4" r="2" />
        <circle cx="20" cy="4" r="2" />
        <circle cx="4" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="20" cy="12" r="2" />
        <circle cx="4" cy="20" r="2" />
        <circle cx="12" cy="20" r="2" />
        <circle cx="20" cy="20" r="2" />
      </svg>
      <span className="flex-1 text-left">Категория</span>
      <svg className="w-4 h-4 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

export default CategoryMenuBtn;
