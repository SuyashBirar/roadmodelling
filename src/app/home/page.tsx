import React from "react";
import Link from "next/link";
import {
    BoltIcon,
    DocumentTextIcon,
    LifebuoyIcon,
} from "@heroicons/react/24/solid";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";


const Card = ({
    icon,
    title,
    description,
    color,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}) => (
    <div className="bg-white rounded-xl shadow-lg p-8 w-72 flex flex-col items-start hover:shadow-xl transition">
        <div className={`rounded-full p-3 mb-4 ${color}`}>{icon}</div>
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

export default function HomePage() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* HEADER */}
            <header className="container mx-auto px-6 py-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-2xl text-blue-700">HackSquad</span>
                </div>
                <nav className="flex gap-8 text-gray-600 items-center justify-end">
                    <a href="#" className="hover:text-blue-800">
                        Dashboard
                    </a>
                    <a href="#" className="hover:text-blue-800">
                        Settings
                    </a>
                    <a href="#" className="hover:text-blue-800">
                        Contact
                    </a>
                </nav>

            </header>

            {/* HERO */}
            <section className="bg-white py-12 px-6 shadow-lg rounded-xl mx-3 lg:mx-auto lg:max-w-6xl relative mt-4">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-4xl font-bold leading-tight mb-4 text-gray-900">
                            <span className="text-blue-700">Indian Road Simulator</span> for
                            smarter cities
                        </h1>
                        <p className="text-gray-600 mb-6 text-lg">
                            Create realistic road models for traffic simulations focused on
                            Indian cities. Design road networks with typical challenges and
                            export for MATLAB analysis.
                        </p>


                        <div className="flex gap-4 mb-3">
                            <Link href="/login">
                                <button className="bg-blue-700 text-white px-6 py-2 rounded-md shadow hover:bg-blue-800 transition">
                                    Login
                                </button>
                            </Link>
                            <Link href="/signup">
                                <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md shadow hover:bg-gray-300 transition">
                                    Signup
                                </button>
                            </Link>
                        </div>

                        <p className="text-xs text-gray-400">Choose an option to continue</p>
                        <p className="text-xs text-gray-400">Showing activity / trace</p>
                    </div>
                    <img
                        src="/assets/map5.jpg"
                        alt="Map Illustration"
                        className="w-full h-64 object-cover rounded-xl shadow-md"
                    />
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="flex flex-col items-center py-16 px-6">
                <Link href="/select-area">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold mb-12 shadow hover:bg-blue-700 transition">
                        <span className="flex items-center gap-2">
                            <BoltIcon className="h-5 w-5" />
                            Start Modeling
                        </span>
                    </button>
                </Link>

                <div className="flex flex-wrap justify-center gap-10">
                    <Card
                        icon={<DocumentTextIcon className="h-7 w-7 text-green-600" />}
                        title="Quick Templates"
                        description="Start with predefined scenarios like school zones, market areas, and highway sections."
                        color="bg-green-100"
                    />
                    <Card
                        icon={<DocumentTextIcon className="h-7 w-7 text-orange-600" />}
                        title="Documentation"
                        description="Learn how to integrate your models with MATLAB’s Driving Scenario Designer and RoadRunner."
                        color="bg-orange-100"
                    />
                    <Card
                        icon={<LifebuoyIcon className="h-7 w-7 text-blue-600" />}
                        title="Help & Support"
                        description="Get guidance on creating realistic traffic scenarios and troubleshooting common issues."
                        color="bg-blue-100"
                    />
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#0a1224] text-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">tranRX</h2>
                        <p className="text-sm text-gray-400 mt-2">
                            Smart traffic simulations for Indian cities.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="https://twitter.com" className="hover:text-blue-400">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://github.com" className="hover:text-gray-200">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://linkedin.com" className="hover:text-blue-500">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Halys</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400 transition">Terms</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Policies</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Team</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400 transition">API</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Documentation</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Assets</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">News</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400 transition">Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Support</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Releases</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Preview</a></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} TranRX. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
