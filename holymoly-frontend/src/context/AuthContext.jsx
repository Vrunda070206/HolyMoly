import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("holymoly-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("holymoly-user", JSON.stringify(user));
    else localStorage.removeItem("holymoly-user");
  }, [user]);

  const register = (name, email, password) => {
    const newUser = { name, email, password };
    localStorage.setItem("holymoly-registered-user", JSON.stringify(newUser));
    alert("✅ Registration successful! Please log in.");
  };

  const login = (email, password) => {
    const stored = localStorage.getItem("holymoly-registered-user");
    if (!stored) return alert("No user found! Please register first.");
    const parsed = JSON.parse(stored);
    if (parsed.email === email && parsed.password === password) {
      setUser(parsed);
      alert(`👋 Welcome back, ${parsed.name}!`);
      return true;
    } else {
      alert("❌ Invalid email or password");
      return false;
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
