import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/30 backdrop-blur-lg border-b border-white/40 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* 🌀 Logo & Title */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 sm:h-12 sm:w-12 rounded-full border-2 border-sky-400 overflow-hidden">
            <img
              src="/holymoly-logo.png" // 🖼️ Place your logo in 'public/holymoly-logo.png'
              alt="HolyMoly Logo"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent tracking-tight">
            HolyMoly
          </span>
        </Link>

        {/* 🍔 Menu Button (Mobile only) */}
        <button
          className="md:hidden text-sky-700 hover:text-sky-500 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* 🔗 Navigation Links */}
        <div
          className={`flex-col md:flex md:flex-row md:static absolute top-16 left-0 w-full md:w-auto bg-white/80 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
            open ? "flex" : "hidden"
          } md:items-center gap-5 md:gap-6 text-gray-800 font-medium p-4 md:p-0`}
        >
          <Link to="/" className="hover:text-sky-600 transition-colors">
            Home
          </Link>
          <Link to="/products" className="hover:text-sky-600 transition-colors">
            Shop
          </Link>
          <Link to="/cart" className="hover:text-sky-600 transition-colors">
            Cart
          </Link>
          <Link to="/admin" className="hover:text-sky-600 transition-colors">
            Admin
          </Link>
          <Link to="/orders" className="hover:text-sky-600 transition-colors">
            My Orders
          </Link>

          {user ? (
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="text-sky-700 font-semibold">
                Hi, {user.name.split(" ")[0]}
              </span>
              <button
                onClick={logout}
                className="bg-sky-500 text-white px-3 py-1 rounded-md hover:bg-sky-600 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-sky-500 text-white px-4 py-1.5 rounded-md hover:bg-sky-600 transition-all"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
