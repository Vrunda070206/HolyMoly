import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center mt-20 text-gray-600">
        Product not found ⚠️
      </div>
    );
  }

  const handleBuyNow = () => {
    if (!user) {
      alert("Please log in before purchasing.");
      navigate("/login");
      return;
    }

    // save single-item order
    const existingHistory =
      JSON.parse(localStorage.getItem("holymoly-order-history")) || {};
    const userEmail = user.email;
    const order = {
      id: Date.now(),
      items: [{ ...product, qty: 1 }],
      total: product.price,
      date: new Date().toLocaleString(),
    };

    if (!existingHistory[userEmail]) existingHistory[userEmail] = [];
    existingHistory[userEmail].push(order);
    localStorage.setItem(
      "holymoly-order-history",
      JSON.stringify(existingHistory)
    );

    // add to success page
    localStorage.setItem("holymoly-last-order", JSON.stringify([product]));
    clearCart();
    navigate("/order-success");
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-white shadow-md rounded-xl">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-pink-600 mb-2">
        {product.name}
      </h1>
      <p className="text-gray-600 mb-4">
        A stylish piece from HolyMoly’s latest collection. Perfect for every
        mood and every look!
      </p>
      <p className="text-2xl font-semibold mb-4">₹{product.price}</p>
      <div className="flex gap-4">
        <button
          onClick={() => addToCart(product)}
          className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
