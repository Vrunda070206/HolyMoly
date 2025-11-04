import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) navigate("/");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold text-pink-600 mb-4">Login to HolyMoly</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-xl w-80 space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-2 w-full rounded-lg hover:bg-pink-700"
        >
          Login
        </button>
        <p
          onClick={() => navigate("/register")}
          className="text-sm text-gray-600 text-center cursor-pointer hover:underline"
        >
          Don’t have an account? Register
        </p>
      </form>
    </div>
  );
}
