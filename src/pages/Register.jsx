import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password);
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold text-pink-600 mb-4">Create your HolyMoly account</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-xl w-80 space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 w-full rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          Register
        </button>
        <p
          onClick={() => navigate("/login")}
          className="text-sm text-gray-600 text-center cursor-pointer hover:underline"
        >
          Already have an account? Login
        </p>
      </form>
    </div>
  );
}
