import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { Input } from "../../../componentLibrary/Input";
import { useNavigate } from "react-router-dom";
import "./RegisterModal.css";
import RegisterButton from "./RegisterButton";
import { useAuth } from "../../../context/AuthContext";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const navigate = useNavigate();
  const {
    user,
    token,
    loading,
    error,
    setUser,
    setToken,
    setLoading,
    setError,
  } = useAuth();

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

  // Обработка изменений в полях ввода
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await axios.post(
        "https://api.russianseminary.org/api/register/",
        user
      );
      if (response.data.user) {
        setUser(user); // Обновляем user данными от сервера
      } else {
        setUser(user); // Сохраняем введённые данные, если API не возвращает user
      }
      setToken(response.data.token);
      setMessage(response.data.message || "Регистрация прошла успешно!");
      setRegistrationSuccess(true);
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
        const data =
          error.response.data?.error ||
          error.response.data?.errors ||
          error.response.data;

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
      setError(errorMessage);
      setMessage(errorMessage);
      setRegistrationSuccess(false);
    } finally {
      setLoading(false);
    }
    return true;
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
                htmlFor="text"
                className="text-sm font-medium text-gray-700  text-left"
              >
                Имя пользователя
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={user?.name || ""}
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
                value={user?.email || ""}
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
                value={user?.password || ""}
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
                value={user?.password_confirmation || ""}
                className=""
                placeholder="Подтвердите пароль"
                required
              />
            </div>

            {error && (
              <div
                className={`text-sm p-2 rounded-md ${
                  registrationSuccess
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {error}
              </div>
            )}

            {/* Submit Button */}
            <RegisterButton loading={isLoading} />
          </form>
        </div>
      </div>
    </div>
  );
};
