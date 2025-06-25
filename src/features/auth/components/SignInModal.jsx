import React, { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { Input } from "../../../componentLibrary/Input";
import { RegisterModal } from "./RegisterModal";

export const SignInModal = ({ isOpen, onClose }) => {
  
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Prevent rendering if modal is not open
  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    try {
      const response = await axios.post(
        "https://api.russianseminary.org/api/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      // Save token and user name
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("userName", response.data.user.name);

      setMessage(response?.data?.message || "Вы успешно вошли!");
      setLoginSuccess(true);

      // Close modal after short delay
      setTimeout(() => {
        setMessage("");
        onClose();
      }, 2000);
    } catch (error) {
      let errorMessage = "Ошибка входа";
console.log("error", error)
      const data =
        error.response?.data?.error ||
        error.response?.data?.errors ||
        error.response?.data ||
        error.message;

      if (typeof data === "object") {
        errorMessage = Object.entries(data)
          .map(([key, value]) =>
            `${key}: ${Array.isArray(value) ? value.join(", ") : value}`
          )
          .join(" | ");
      } else if (typeof data === "string") {
        errorMessage = data;
      }

      setMessage(`Ошибка: ${errorMessage}`);
      setLoginSuccess(false);

      console.log("errorMessage", errorMessage)
      
    } finally {
      setIsLoading(false); // Ensures the loading spinner stops
    }
  };

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
          <h2 className="text-2xl font-semibold text-gray-800">Вход</h2>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
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

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
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

            {/* Trust Device Checkbox */}
            <div className="flex items-center gap-2">
              <Input
                type="checkbox"
                id="trust-device"
                className="h-4 w-4 border-0 focus:ring-0"
              />
              <label htmlFor="trust-device" className="text-sm text-gray-700">
                Я доверяю этому устройству
              </label>
            </div>

            {/* Message Area */}
            {message && (
              <p
                className={`text-sm p-2 rounded-md ${
                  loginSuccess
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
                "Войти"
              )}
            </button>
          </form>

          {/* Sign Up Suggestion */}
          <p className="text-sm text-gray-600 text-center">
            Нет аккаунта?{" "}
            <button
              onClick={openRegisterModal}
              className="text-indigo-600 hover:underline"
            >
              Зарегистрироваться
            </button>
            <RegisterModal
              isOpen={registerModalOpen}
              onClose={closeRegisterModal}
            />
          </p>
        </div>
      </div>
    </div>
  );
};
