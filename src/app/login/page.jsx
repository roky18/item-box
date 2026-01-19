"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded credentials
  const MOCK_EMAIL = "user@example.com";
  const MOCK_PASSWORD = "123456";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      Cookies.set("token", "loggedin", { expires: 1 });
      router.push("/items");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen w-11/12 mx-auto flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-base-200 rounded-2xl shadow-2xl p-8 md:p-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center ">
          Welcome Back
        </h2>

        {error && (
          <p className="text-red-500 mb-4 text-center font-medium animate-pulse">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 ">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123456"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg hover:scale-105 transform transition-all shadow-lg"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600 text-sm">
          Demo login: <br />
          Email: <span className="font-mono">user@example.com</span> | Password:{" "}
          <span className="font-mono">123456</span>
        </div>
      </div>
    </div>
  );
}
