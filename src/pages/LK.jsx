import { useEffect,useState } from "react";
import React from "react";
import ProductsList from "../AdminPanel/ProductsList";
import Sidebar from "../AdminPanel/Sidebar";
import UsersList from "../AdminPanel/UsersList";
import AddUser from "../AdminPanel/AddUser";
import AddProduct from "../AdminPanel/AddProduct";

const LK = () => {
  const [route, setRoute] = useState(
    window.location.hash.slice(1) || "/"
  );
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  React.useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.slice(1) || "/");
    };
    window.addEventListener("hashchange", handleHashChange);

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (e) => {
      setIsCollapsed(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 transition-all duration-300 w-full ${
          isCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        {route === "/users/list" && (
          <UsersList isSidebarCollapsed={isCollapsed} />
        )}
        {route === "/users/add" && <AddUser isSidebarCollapsed={isCollapsed} />}
        {route === "/products/list" && (
          <ProductsList isSidebarCollapsed={isCollapsed} />
        )}
        {route === "/products/add" && (
          <AddProduct isSidebarCollapsed={isCollapsed} />
        )}
        {route !== "/users/list" &&
          route !== "/users/add" &&
          route !== "/products/list" &&
          route !== "/products/add" && (
            <div
              className={`p-6 bg-gray-100 min-h-screen transition-all duration-300 ${
                isCollapsed ? "ml-16" : "ml-64"
              }`}
            >
              <h2 className="text-2xl font-bold text-gray-800">
                Добро пожаловать в админ-панель
              </h2>
            </div>
          )}
      </div>
    </div>
  );
};
export default LK;