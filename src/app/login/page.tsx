"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMail, FiLock } from "react-icons/fi";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
        // 🔐 Add authentication logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md transform transition-all hover:scale-105 duration-300">
                <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
                    Welcome Back 👋
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Login to <span className="font-semibold text-blue-600">tranRX</span>
                </p>

                <form onSubmit={handleLogin} className="space-y-5">
                    {/* Email Field */}
                    <div className="relative">
                        <FiMail className="absolute left-3 top-3 text-gray-400 text-lg" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-3 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-800"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <FiLock className="absolute left-3 top-3 text-gray-400 text-lg" />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-3 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-800"
                            required
                        />
                    </div>

                    {/* Login Button */}
                    <Link href="/home" passHref>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                        >
                            Login
                        </button>
                    </Link>


                </form>

                {/* Signup Link */}
                <p className="mt-6 text-center text-gray-600">
                    Don’t have an account?{" "}
                    <Link
                        href="/signup"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Signup
                    </Link>
                </p>
            </div>
        </div>
    );
}
