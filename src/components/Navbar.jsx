import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold text-pink-600">
        HolyMoly 🛍️
      </Link>
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/orders">My Orders</Link>
        {user ? (
          <>
            <span className="text-pink-600">{user.name}</span>
            <button onClick={logout} className="text-gray-500 hover:text-red-500">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
