import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@holymoly.com" && password === "admin123") {
      login(email, password);
      navigate("/admin");
    } else {
      const success = login(email, password);
      if (success) navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 relative overflow-hidden">
      {/* Floating blue blobs for soft glow */}
      <div className="absolute w-72 h-72 bg-sky-400/30 rounded-full top-10 left-10 blur-3xl animate-pulse" />
      <div className="absolute w-80 h-80 bg-sky-500/30 rounded-full bottom-10 right-10 blur-3xl animate-pulse" />

      {/* Glassmorphic Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/20 backdrop-blur-xl border border-white/40 glass-border shadow-2xl rounded-3xl p-10 w-[90%] max-w-md text-gray-800"
      >
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide text-sky-800 drop-shadow-md">
          Welcome Back to <span className="text-sky-500">HolyMoly</span>
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-sky-900/80">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-lg bg-white/30 border border-sky-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-sky-900/80">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded-lg bg-white/30 border border-sky-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-sky-400/40 transition-all duration-300"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-sky-900/70 mt-5">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-sky-600 hover:text-sky-700 font-semibold underline"
          >
            Register here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
