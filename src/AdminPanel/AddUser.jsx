import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const AddUser = ({ isSidebarCollapsed }) => {
  const [formData, setFormData] = React.useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users", formData)
      .then((response) => {
        alert("Пользователь успешно добавлен!");
        window.location.hash = "/users/list";
      })
      .catch((error) =>
        console.error("Ошибка при добавлении пользователя:", error)
      );
  };

  return (
    <div
      className={`p-6 bg-gray-100 min-h-screen transition-all duration-300 ${
        isSidebarCollapsed ? "ml-16" : "ml-64"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Добавить пользователя
      </h2>
      <div className="max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Имя</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-150"
        >
          Добавить пользователя
        </button>
      </div>
    </div>
  );
};
export default AddUser;
