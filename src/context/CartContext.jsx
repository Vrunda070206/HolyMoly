import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  // --- Load existing cart from localStorage ---
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("holymoly-cart");
    return saved ? JSON.parse(saved) : [];
  });

  // --- Save cart to localStorage whenever it changes ---
  useEffect(() => {
    localStorage.setItem("holymoly-cart", JSON.stringify(cart));
  }, [cart]);

  // --- Cart functions ---
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  const decreaseQty = (id) =>
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decreaseQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
