import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white/30 backdrop-blur-lg border-b border-white/40 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* 🌤️ Logo + Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-12 w-12 rounded-full border-2 border-sky-400 overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-sky-400/50 group-hover:scale-105">
            <img
              src="/holy moly.jpg"
              alt="HolyMoly Logo"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent tracking-tight">
            HolyMoly
          </span>
        </Link>

        {/* 🔗 Navigation Links */}
        <div className="flex gap-6 text-gray-800 font-medium items-center">
          <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-sky-600 transition-colors">Shop</Link>
          <Link to="/cart" className="hover:text-sky-600 transition-colors">Cart</Link>
          <Link to="/admin" className="hover:text-sky-600 transition-colors">Admin</Link>
          <Link to="/orders" className="hover:text-sky-600 transition-colors">My Orders</Link>

          {/* 👤 Auth Section */}
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sky-700 font-semibold">
                Hi, {user.name.split(" ")[0]}
              </span>
              <button
                onClick={logout}
                className="bg-sky-500 text-white px-3 py-1 rounded-md hover:bg-sky-600 transition-all duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-sky-500 text-white px-4 py-1.5 rounded-md hover:bg-sky-600 transition-all duration-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
