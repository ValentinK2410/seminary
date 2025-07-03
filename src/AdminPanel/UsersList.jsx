import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const UsersList = ({ isSidebarCollapsed }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке пользователей:", error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="text-center mt-10 text-gray-500">Загрузка...</div>;

  return (
    <div
      className={`p-6 bg-gray-100 min-h-screen transition-all duration-300 ${
        isSidebarCollapsed ? "ml-16" : "ml-64"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Пользователи</h2>
      <table className="w-full border-collapse border border-gray-300 shadow-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-3 text-left">ID</th>
            <th className="border border-gray-300 p-3 text-left">Имя</th>
            <th className="border border-gray-300 p-3 text-left">Email</th>
            <th className="border border-gray-300 p-3 text-left">Действия</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="hover:bg-gray-50 transition duration-150"
            >
              <td className="border border-gray-300 p-3">{user.id}</td>
              <td className="border border-gray-300 p-3">{user.name}</td>
              <td className="border border-gray-300 p-3">{user.email}</td>
              <td className="border border-gray-300 p-3">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-150 mr-2">
                  Редактировать
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-150">
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UsersList;