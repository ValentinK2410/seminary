import React, { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { Input } from "../../../componentLibrary/Input";
export const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [message, setMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.russianseminary.org/api/register/",
        formData
      );
      console.log(response.data.message);
      setMessage(response.data.message);
      setRegistrationSuccess(true);
    } catch (error) {
      setMessage(`Ошибка: ${error.response?.data?.message || error.message}`);
    }
    //console.log(response.data);
  };
  // Prevent rendering if modal is not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white relative rounded-lg p-6 w-full max-w-sm mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Закрыть модальное окно"
          className="absolute top-4 right-4 p-2"
        >
          <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-left">
            Регистрация
          </h2>

          <form className="flex flex-col gap-4">
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700  text-left"
              >
                Имя пользователя
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Введите ваш имя"
                required
              />
            </div>
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700  text-left"
              >
                Электронная почта
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Введите ваш email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700  text-left"
              >
                Пароль
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className=""
                placeholder="Введите ваш пароль"
                required
              />
            </div>
            {/* Password confirmation Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700  text-left"
              >
                Подтвердите пароль
              </label>
              <Input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                onChange={handleChange}
                className=""
                placeholder="Подтвердите пароль"
                required
              />
            </div>

            {message && (
              <p
                className={
                  registrationSuccess ? "text-green-700" : "text-red-500"
                }
              >
                {message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleRegister}
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
