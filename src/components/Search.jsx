import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchButtonModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group w-10 h-10 border border-gray-400 rounded-md flex items-center justify-center hover:bg-gray-100 transition"
        aria-label="Open Search"
      >
        <Search className="w-5 h-5 text-gray-300 transition-colors duration-300 group-hover:text-gray-600" />
      </button>


      {isOpen && (
        <div className="absolute w-full py-1 px-6 top-0 right-0 bg-black bg-opacity-50 flex items-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full ml-auto max-w-md relative">
            <input
              type="text"
              placeholder="Введите поиск"
              className="w-full border border-gray-300 rounded p-2"
              autoFocus
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
              aria-label="Close Search Modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
