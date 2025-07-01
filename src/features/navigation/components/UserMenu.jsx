import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Dropdown } from "../../../componentLibrary/Dropdown";
import { useAuth } from "../../../context/AuthContext";

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const {
    user,
    token,
    loading,
    error,
    setUser,
    setToken,
    setLoading,
    setError,
    clearAuth,
  } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    console.log("logout");
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
      clearAuth();
      console.log(response.data);
    } catch (error) {
      clearAuth();
      console.log("logout error", error);
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred.");
      }
    }
  };

  return (
    <div className="relative hidden sm:inline-block text-left" ref={menuRef}>
      <Dropdown
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        buttonClassName="text-yellow-200"
      >
        <button
          className="block w-full text-left px-4 py-2 hover:bg-gray-200"
          role="menuitem"
        >
          Профиль
        </button>
        <button
          className="block w-full text-left px-4 py-2 hover:bg-gray-200"
          role="menuitem"
        >
          Настройки
        </button>
        <div className="border-t border-gray-200 my-1"></div>
        <button
          className="block w-full text-left px-4 py-2 hover:bg-gray-200"
          role="menuitem"
          onClick={handleLogout}
        >
          Выйти
        </button>
      </Dropdown>
    </div>
  );
};
