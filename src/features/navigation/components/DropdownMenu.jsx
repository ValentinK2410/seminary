import { useState, useRef, useEffect } from "react";
export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [message, setMessage] = useState("");

  // Закрытие при клике вне меню
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Закрытие при нажатии Esc
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        "https://api.russianseminary.org/api/logout/",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("authToken");
      localStorage.removeItem("userName");
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred.");
      }
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Кнопка меню */}
      <button
        type="button"
        className="inline-flex justify-center items-center w-full rounded-md px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Кабинет
        <svg
          className={`ml-2 -mr-1 h-5 w-5 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Выпадающее меню */}
      <div
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 ${
          isOpen
            ? "transform opacity-100 scale-100 visible"
            : "transform opacity-0 scale-95 invisible"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-150"
            role="menuitem"
          >
            Профиль
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-150"
            role="menuitem"
          >
            Настройки
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-150"
            role="menuitem"
          >
            Сообщения
          </a>
          <div className="border-t border-gray-100 my-1"></div>
          <a
            href="#"
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-150"
            role="menuitem"
          >
            Выйти
          </a>
        </div>
      </div>
    </div>
  );
};
