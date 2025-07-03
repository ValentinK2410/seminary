import React, { useState } from "react";
const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <div
      className={`bg-gray-800 text-white h-screen fixed top-0 left-0 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } z-50`}
    >
      <div
        className={`flex items-center ${
          isCollapsed ? "justify-center" : "justify-between"
        } p-4 border-b border-gray-700`}
      >
        {!isCollapsed && <div className="text-2xl font-bold">Админ-панель</div>}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-gray-700 transition duration-200"
          title={isCollapsed ? "Развернуть панель" : "Свернуть панель"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isCollapsed ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0H7a2 2 0 01-2-2v-6a2 2 0 012-2h2m4 0V6a2 2 0 012-2h2a2 2 0 012 2v2m-8 0v12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
            )}
          </svg>
        </button>
      </div>
      <nav className="mt-4">
        <div
          className="px-4 py-2 hover:bg-gray-700 cursor-pointer transition duration-200 flex items-center"
          onClick={() => !isCollapsed && setIsUsersOpen(!isUsersOpen)}
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          {!isCollapsed && <span>Пользователи</span>}
          {!isCollapsed && (
            <span className="float-right">{isUsersOpen ? "▼" : "▶"}</span>
          )}
        </div>
        {!isCollapsed && isUsersOpen && (
          <div className="pl-8 bg-gray-900">
            <a
              href="#/users/list"
              className="block px-4 py-2 hover:bg-gray-700 transition duration-200"
            >
              Список пользователей
            </a>
            <a
              href="#/users/add"
              className="block px-4 py-2 hover:bg-gray-700 transition duration-200"
            >
              Добавить пользователя
            </a>
          </div>
        )}
        <div
          className="px-4 py-2 hover:bg-gray-700 cursor-pointer transition duration-200 flex items-center"
          onClick={() => !isCollapsed && setIsProductsOpen(!isProductsOpen)}
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          {!isCollapsed && <span>Товары</span>}
          {!isCollapsed && (
            <span className="float-right">{isProductsOpen ? "▼" : "▶"}</span>
          )}
        </div>
        {!isCollapsed && isProductsOpen && (
          <div className="pl-8 bg-gray-900">
            <a
              href="#/products/list"
              className="block px-4 py-2 hover:bg-gray-700 transition duration-200"
            >
              Список товаров
            </a>
            <a
              href="#/products/add"
              className="block px-4 py-2 hover:bg-gray-700 transition duration-200"
            >
              Добавить товар
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Sidebar;