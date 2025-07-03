
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const AddProduct = () => {
  const [formData, setFormData] = React.useState({ name: "", price: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", formData)
      .then((response) => {
        alert("Товар успешно добавлен!");
        window.location.hash = "/products/list";
      })
      .catch((error) => console.error("Ошибка при добавлении товара:", error));
  };

  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Добавить товар</h2>
      <div className="max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Название
          </label>
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
          <label className="block text-gray-700 font-medium mb-1">Цена</label>
          <input
            type="number"
            name="price"
            value={formData.price}
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
          Добавить товар
        </button>
      </div>
    </div>
  );
};
export default AddProduct;