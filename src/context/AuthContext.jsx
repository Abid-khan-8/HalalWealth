"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("halalUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email, password) => {
    if (email === "halal@wealth.com" && password === "123456") {
      const demoUser = { email };
      setUser(demoUser);
      localStorage.setItem("halalUser", JSON.stringify(demoUser));
      router.push("/dashboard");
    } else {
      alert("Invalid credentials. Use demo login provided.");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("halalUser");
    router.push("/signin");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
