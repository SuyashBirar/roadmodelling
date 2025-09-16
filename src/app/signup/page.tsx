"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

export default function SignupPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("⚠️ Passwords do not match!");
            return;
        }

        console.log("Signup details:", formData);
        alert("🎉 Account created successfully!");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md transform transition-all hover:scale-105 duration-300">
                <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
                    Create Account 🚀
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Join <span className="font-semibold text-blue-600">tranRX</span> today
                </p>

                <form onSubmit={handleSignup} className="space-y-5">
                    {/* Full Name Field */}
                    <div className="relative">
                        <FiUser className="absolute left-3 top-3 text-gray-400 text-lg" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-800"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                        <FiMail className="absolute left-3 top-3 text-gray-400 text-lg" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-800"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <FiLock className="absolute left-3 top-3 text-gray-400 text-lg" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-800"
                            required
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div className="relative">
                        <FiLock className="absolute left-3 top-3 text-gray-400 text-lg" />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-800"
                            required
                        />
                    </div>

                    {/* Signup Button */}
                    <Link href="/home" passHref>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                        >
                            Sign Up
                        </button>
                    </Link>
                </form>

                {/* Login Link */}
                <p className="mt-6 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
