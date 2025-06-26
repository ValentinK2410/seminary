import { useState, useRef, useEffect } from "react";
import { Dropdown } from "../../../componentLibrary/Dropdown";

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="relative hidden sm:inline-block text-left" ref={menuRef}>

      <Dropdown isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} buttonClassName="text-yellow-200"
      >
        <button className="block w-full text-left px-4 py-2 hover:bg-gray-200" role="menuitem">Профиль</button>
        <button className="block w-full text-left px-4 py-2 hover:bg-gray-200" role="menuitem">Настройки</button>
        <div className="border-t border-gray-200 my-1"></div>
        <button className="block w-full text-left px-4 py-2 hover:bg-gray-200" role="menuitem" onClick={handleLogout}>Выйти</button>
      </Dropdown>
      
    </div>
  );
};
