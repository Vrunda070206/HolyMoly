import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Products() {
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // 🧮 Filtering Logic
  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((p) => (category === "All" ? true : p.category === category))
    .sort((a, b) => {
      if (sortOrder === "low-high") return a.price - b.price;
      if (sortOrder === "high-low") return b.price - a.price;
      return 0;
    });

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div className="mt-10">
      {/* 🔍 Filters Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded-lg w-60 focus:ring-2 focus:ring-pink-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border p-2 rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          className="border p-2 rounded-lg"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Sort by</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
        </select>
      </div>

      {/* 🛍️ Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((p) => (
            <motion.div
              key={p.id}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/product/${p.id}`}>
                <img
                  src={p.image}
                  alt={p.name}
                  className="rounded-lg mb-3 w-full h-60 object-cover"
                />
                <h2 className="font-semibold text-lg">{p.name}</h2>
              </Link>
              <p className="text-pink-600 font-medium">₹{p.price}</p>
              <p className="text-sm text-gray-500">{p.category}</p>
              <button
                onClick={() => addToCart(p)}
                className="mt-3 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-transform hover:scale-105"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-20 text-lg">
          No products match your search 💨
        </p>
      )}
    </div>
  );
}
