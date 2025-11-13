import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = register({ email, password });
    if (success) navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400">
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 glass-border shadow-2xl rounded-3xl p-10 w-[90%] max-w-md text-white">
        <h2 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-md">
          Create Your <span className="text-pink-200">HolyMoly</span> Account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-white/20 border border-white/40 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
          />
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg bg-white/20 border border-white/40 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
          />
          <button
            type="submit"
            className="mt-6 bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-pink-400/40 transition-all duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-white/80 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-200 hover:text-pink-100 font-semibold underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}