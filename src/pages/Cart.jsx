import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Cart() {
  const { cart, removeFromCart, decreaseQty, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl text-gray-700">Your cart is empty 🛒</h2>
      </div>
    );
  }

  // ✅ Updated Checkout Logic (with order history)
  const handleCheckout = async () => {
    if (!user) {
      alert("Please log in before proceeding to checkout.");
      navigate("/login");
      return;
    }

    // pretend to contact Stripe
    const stripe = await loadStripe("pk_test_12345YOURSTRIPEKEY");

    // fetch existing order history
    const existingHistory =
      JSON.parse(localStorage.getItem("holymoly-order-history")) || {};
    const userEmail = user.email;

    // new order details
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((sum, i) => sum + i.price * i.qty, 0),
      date: new Date().toLocaleString(),
    };

    // append to user’s order list
    if (!existingHistory[userEmail]) existingHistory[userEmail] = [];
    existingHistory[userEmail].push(newOrder);

    // save updated history
    localStorage.setItem(
      "holymoly-order-history",
      JSON.stringify(existingHistory)
    );

    // save for order success page
    localStorage.setItem("holymoly-last-order", JSON.stringify(cart));

    clearCart();
    navigate("/order-success");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6">
      <h1 className="text-2xl font-bold text-pink-600">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b pb-4"
        >
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-gray-500">
              ₹{item.price} × {item.qty}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-3 py-1 border rounded"
            >
              -
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-3 py-1 border rounded text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center border-t pt-4">
        <p className="text-lg font-semibold">Total: ₹{total}</p>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-gray-300 text-gray-800 px-5 py-2 rounded-lg"
          >
            Clear Cart
          </button>
          <button
            onClick={handleCheckout}
            className="bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
