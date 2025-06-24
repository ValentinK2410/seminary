import React, { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { Input } from "../../../componentLibrary/Input";
export const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "test",
    email: "sdf@sdf.com",
    password: "123456",
    password_confirmation: "123456",
  });
  const [message, setMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Добавлено состояние загрузки

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    try {
      const response = await axios.post(
        "https://api.russianseminary.org/api/register/",
        formData
      );
      console.log(response.data.message);
      setMessage(response.data.message || "Регистрация прошла успешно!");
      setRegistrationSuccess(true);
      // Очистка формы после успешной регистрации
      setFormData({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
    } catch (error) {
      let errorMessage = "Произошла ошибка";

      if (error.response) {
        // Сервер ответил с ошибкой 4xx/5xx
        errorMessage =
          error.response?.data?.message ||
          error.response?.data?.error ||
          JSON.stringify(error.response.data);
      } else if (error.request) {
        // Запрос был сделан, но ответ не получен
        errorMessage = "Сервер не ответил. Проверьте подключение к интернету";
      } else {
        // Ошибка настройки запроса
        errorMessage = error.message;
      }

      setMessage(`Ошибка: ${errorMessage}`);
      setRegistrationSuccess(false);
    } finally {
      setIsLoading(false);
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

          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            {/* Поле имени */}
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
                value={formData.name}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Введите ваш имя"
                required
              />
            </div>
            {/* Поле email */}
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
                value={formData.email}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Введите ваш email"
                required
              />
            </div>

            {/* Поле пароля */}
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
                value={formData.password}
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
                value={formData.password_confirmation}
                className=""
                placeholder="Подтвердите пароль"
                required
              />
            </div>

            {message && (
              <p
                className={`text-sm p-2 rounded-md ${
                  registrationSuccess
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`flex items-center justify-center bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Обработка...
                </>
              ) : (
                "Зарегистрироваться"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
