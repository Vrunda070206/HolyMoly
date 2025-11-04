import { useEffect, useState } from "react";

export default function OrderSuccess() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const lastOrder = localStorage.getItem("holymoly-last-order");
    if (lastOrder) setOrder(JSON.parse(lastOrder));
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-12 text-center">
      <h1 className="text-3xl font-bold text-pink-600">🎉 Order Successful!</h1>
      <p className="mt-2 text-gray-600">Here’s your order summary:</p>

      <div className="mt-8 space-y-4">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b pb-3 text-gray-700"
          >
            <span>{item.name} × {item.qty}</span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xl font-semibold text-gray-800">
        Total: ₹{order.reduce((sum, i) => sum + i.price * i.qty, 0)}
      </p>

      <button
        onClick={() => window.location.assign("/products")}
        className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
      >
        Continue Shopping
      </button>
    </div>
  );
}
