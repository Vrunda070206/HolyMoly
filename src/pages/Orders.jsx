import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Orders() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return;
    const allOrders =
      JSON.parse(localStorage.getItem("holymoly-order-history")) || {};
    setOrders(allOrders[user.email] || []);
  }, [user]);

  if (!user) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl text-gray-700">
          Please log in to view your orders 📦
        </h2>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl text-gray-700">
          You haven't placed any orders yet 🛍️
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6">
      <h1 className="text-2xl font-bold text-pink-600 mb-4">
        Your Orders ({orders.length})
      </h1>

      {orders
        .slice()
        .reverse()
        .map((order) => (
          <div
            key={order.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between mb-2 text-sm text-gray-500">
              <span>{order.date}</span>
              <span>Order ID: {order.id}</span>
            </div>
            <div className="space-y-2">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b pb-1 text-gray-700"
                >
                  <span>
                    {item.name} × {item.qty}
                  </span>
                  <span>₹{item.price * item.qty}</span>
                </div>
              ))}
            </div>
            <p className="text-right mt-3 font-semibold text-gray-800">
              Total: ₹{order.total}
            </p>
          </div>
        ))}
    </div>
  );
}
