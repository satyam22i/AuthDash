import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    await API.post("/auth/register", { name, email, password });
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded w-80 shadow">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <input className="w-full border p-2 mb-3" placeholder="Name"
          onChange={e => setName(e.target.value)} />

        <input className="w-full border p-2 mb-3" placeholder="Email"
          onChange={e => setEmail(e.target.value)} />

        <input type="password" className="w-full border p-2 mb-3"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)} />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}
