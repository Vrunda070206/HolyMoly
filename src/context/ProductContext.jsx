import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Classic White Tee",
      price: 599,
      category: "Tops",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600",
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 1899,
      category: "Outerwear",
      image:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd8?w=600",
    },
    {
      id: 3,
      name: "Chunky Sneakers",
      price: 2599,
      category: "Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    },
    {
      id: 4,
      name: "Summer Dress",
      price: 1399,
      category: "Dresses",
      image:
        "https://images.unsplash.com/photo-1520974722073-bd2b0bba7b4b?w=600",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
