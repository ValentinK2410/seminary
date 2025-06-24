import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { Input } from "../../../componentLibrary/Input";
import "./RegisterModal.css";

export const RegisterModal = ({
  isOpen,
  onClose,
  onCloseComplete,
  children,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const modalRef = useRef(null);
  const [message, setMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Добавлено состояние загрузки
  const [isVisible, setIsVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  // Обработка закрытия с анимацией
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setMessage("");
      setRegistrationSuccess(false);
      onClose();
      setClosing(false);
      if (onCloseComplete) onCloseComplete();
    }, 1500); // Должно совпадать с длительностью анимации
  };

  // Обработка анимаций открытия/закрытия
  useEffect(() => {
    if (isOpen) {
      // Задержка для активации анимации
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  // Закрытие по клику вне модалки
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClose();
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen && !isVisible) return null;

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
      setTimeout(() => {
        setMessage("");
        setRegistrationSuccess(false);
        onClose();
        setClosing(false);
        handleClose();
        if (onCloseComplete) onCloseComplete();
      }, 2000); // Должно совпадать с длительностью анимации

      } catch (error) {
  let errorMessage = "Произошла ошибка";

  if (error.response) {
    const data = error.response.data?.error || error.response.data?.errors || error.response.data;

    if (typeof data === "object" && data !== null) {
      errorMessage = Object.entries(data)
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            return `${key}: ${value.join(", ")}`;
          } else if (typeof value === "string") {
            return `${key}: ${value}`;
          } else {
            return `${key}: ${JSON.stringify(value)}`;
          }
        })
        .join(" | ");
    } else {
      errorMessage = data?.message || data?.error || JSON.stringify(data);
    }
  } else if (error.request) {
    errorMessage = "Сервер не ответил. Проверьте подключение к интернету";
  } else {
    errorMessage = error.message;
  }

  setMessage(errorMessage);
  setRegistrationSuccess(false);
} finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity ${
        isVisible ? "bg-black/50" : "bg-transparent"
      }`}
      style={{
        transition: "background-color 300ms ease-out",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      {/* Overlay с анимацией */}
      <div
        className={`absolute inset-0 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "opacity 300ms" }}
        onClick={onClose}
      />
      <div
        ref={modalRef}
        className={`relative bg-white rounded-xl shadow-xl max-w-md w-full p-6 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{
          transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {children}
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
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
              <div
                className={`text-sm p-2 rounded-md ${
                  registrationSuccess
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {message}
              </div>
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
