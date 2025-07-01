import React, { createContext, useContext, useState, useEffect } from "react";

// Создаём контекст
const AuthContext = createContext();

// Провайдер контекста
export const AuthProvider = ({ children }) => {
  // Восстанавливаем данные из localStorage при монтировании
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("token");
    return savedToken || null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Сохраняем данные в localStorage при изменении
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  // Методы для управления состоянием
  const auth = {
    user,
    token,
    loading,
    error,
    setUser,
    setToken,
    setLoading,
    setError,
    clearAuth: () => {
      // setUser(null);
      setToken(null);
      setError(null);
      setUser({ isLogin: false });
    },
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// Кастомный хук для использования контекста
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
