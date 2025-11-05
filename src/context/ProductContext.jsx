import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Bandana Classic White ",
      price: 800,
      category: "hair accessories",
      image:
        "https://res.cloudinary.com/dyltfcdvt/image/upload/v1762321824/bandana_cfahtb.jpg",
    },
    {
      id: 2,
      name: "Naruto keychain",
      price: 99,
      category: "Keychain",
      image:
        "https://res.cloudinary.com/dyltfcdvt/image/upload/v1762316716/naruto_cjrt8z.jpg"
    },
    {
      id: 3,
      name: "Crochet Boquet",
      price: 800,
      category: "boquet",
      image:
        "https://res.cloudinary.com/dyltfcdvt/image/upload/v1762316714/boquet_gjjzoe.jpg",
    },
    {
      id: 4,
      name: "clay accessories holder",
      price: 1399,
      category: "clay",
      image:
        "https://res.cloudinary.com/dyltfcdvt/image/upload/v1762316716/clap_box_enzvpl.jpg",
    },
    {
      id: 5,
      name: "Clay plate",
      price: 500,
      category: "clay",
      image:
        "https://res.cloudinary.com/dyltfcdvt/image/upload/v1762316913/clay_2_vuxsyv.jpg",
    },
    {
      id: 6,
      name: "Head band",
      price: 180,
      category: "Hair Accessories",
      image:
        "https://res.cloudinary.com/dyltfcdvt/image/upload/v1762321824/headband_r2ztmz.jpg",
    },
    {
      id: 7,
      name: "Cherry Keychain",
      price: 100,
      category: "keychain",
      image:
        "https://res.cloudinary.com/dyltfcdvt/image/upload/v1762321824/cherry_toipfs.jpg",
    },
    {
      id: 8,
      name: "Cherry with beads",
      price: 130,
      category: "keychain",
      image:
        "https://res.cloudinary.com/dyltfcdvt/image/upload/v1762321824/cherry_2_hv6ioc.jpg",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
