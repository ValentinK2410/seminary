import { X } from "lucide-react";
import { Input } from "../../../componentLibrary/Input";

export const RegisterModal = ({ isOpen, onClose }) => {
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
          <h2 className="text-2xl font-semibold text-gray-800">Регистрация</h2>

          <form className="flex flex-col gap-4">
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Имя пользователя
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Введите ваш имя"
                required
              />
            </div>
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Электронная почта
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Введите ваш email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Пароль
              </label>
              <Input
                type="password"
                id="password"
                name="password"
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

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Войти
            </button>
          </form>

          {/* Sign Up Suggestion */}
          <p className="text-sm text-gray-600 text-center">
            Нет аккаунта?{" "}
            <button
              onClick={() => {
                onClose();
              }}
              className="text-indigo-600 hover:underline"
            >
              Зарегистрироваться
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
