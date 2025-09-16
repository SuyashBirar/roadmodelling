'use client';

import { useState } from "react";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { StepperNavbar } from "@/components/Steppernavbar"; // Adjust import as needed

export default function PreviewModelPage() {
    // Toggle states
    const [roadFeatures, setRoadFeatures] = useState(true);
    const [trafficFlow, setTrafficFlow] = useState(true);
    const [pedestrians, setPedestrians] = useState(true);
    const [background, setBackground] = useState(true);

    // Example statistics
    const location = "Mumbai - Bandra Kurla Complex";
    const template = "School Zone";
    const featureCount = 0;
    const trafficIntensity = "Medium";

    return (
        <div className="min-h-screen bg-white">
            <StepperNavbar currentStep={4} />

            <div className="max-w-6xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold mb-2 text-black">Preview Your Model</h1>
                <p className="text-gray-600 mb-7">
                    Review your road model configuration and toggle different layers to see how they interact.
                </p>
                <div className="flex gap-8">
                    {/* Sidebar */}
                    <div className="w-1/4 flex flex-col gap-6">
                        {/* Layer Controls Card */}
                        <div className="bg-gray-50 rounded-lg border p-4 mb-3">
                            <h2 className="text-lg font-medium mb-3 flex items-center gap-2 text-black">
                                <span>
                                    <svg width="20" height="20" fill="none"><rect x="3" y="4" width="14" height="2" rx="1" fill="#a7f3d0" /><rect x="3" y="14" width="14" height="2" rx="1" fill="#a7f3d0" /><rect x="3" y="9" width="14" height="2" rx="1" fill="#38bdf8" /></svg>
                                </span>
                                Layer Controls
                            </h2>
                            {/* Toggles */}
                            <div className="flex flex-col gap-3">
                                {[
                                    { label: "Road Features", checked: roadFeatures, setChecked: setRoadFeatures },
                                    { label: "Traffic Flow", checked: trafficFlow, setChecked: setTrafficFlow },
                                    { label: "Pedestrians", checked: pedestrians, setChecked: setPedestrians },
                                    { label: "Background", checked: background, setChecked: setBackground },
                                ].map(toggle => (
                                    <div key={toggle.label} className="flex items-center justify-between py-2">
                                        <span className="text-black font-medium">{toggle.label}</span>
                                        <label className="relative inline-block w-11 h-6">
                                            <input
                                                type="checkbox"
                                                checked={toggle.checked}
                                                onChange={e => toggle.setChecked(e.target.checked)}
                                                className="peer appearance-none w-11 h-6 bg-gray-200 rounded-full checked:bg-green-500 cursor-pointer transition-colors duration-200"
                                            />
                                            <span className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-gray-300 shadow-sm transition-transform duration-200 peer-checked:translate-x-5 peer-checked:border-green-500 cursor-pointer"></span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Model Statistics Card */}
                        <div className="bg-white rounded-lg border p-4">
                            <h2 className="text-lg font-medium mb-3 flex items-center gap-2 text-black">
                                <span>
                                    <svg width="20" height="20" fill="none"><rect x="5" y="5" width="10" height="10" rx="2" fill="#4ade80" /></svg>
                                </span>
                                Model Statistics
                            </h2>
                            <div className="mb-1 text-gray-700">
                                <span className="font-semibold">Location:</span>
                                <span className="ml-1">{location}</span>
                            </div>
                            <div className="mb-1 text-gray-700">
                                <span className="font-semibold">Template:</span>
                                <span className="ml-1">{template}</span>
                            </div>
                            <div className="mb-1 text-gray-700">
                                <span className="font-semibold">Road Features:</span>
                                <span className="ml-1">{featureCount}</span>
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center gap-2">
                                <span className="font-semibold">Traffic Intensity:</span>
                                <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-700 font-semibold">{trafficIntensity}</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Preview Area */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="bg-white border rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="font-medium text-lg flex items-center gap-2 text-gray-800">
                                    <span>
                                        <svg width="22" height="22" fill="none"><circle cx="11" cy="11" r="10" stroke="#38bdf8" strokeWidth="2" /><ellipse cx="11" cy="11" rx="6" ry="7" fill="#a7f3d0" /></svg>
                                    </span>
                                    Interactive Preview
                                </div>
                                <button className="border border-blue-400 px-3 py-1 rounded font-medium text-blue-700 flex items-center gap-1 hover:bg-blue-50 transition">
                                    <svg width="18" height="18" fill="none"><rect x="3" y="6" width="12" height="6" rx="2" fill="#3b82f6" /></svg>
                                    Edit Features
                                </button>
                            </div>
                            <div className="bg-gradient-to-br from-green-100 to-blue-100 border rounded-xl h-[340px] flex items-center justify-center relative">
                                <div className="absolute top-10 left-20 w-4 h-4 bg-orange-300 rounded-full"></div>
                                <div className="absolute bottom-12 right-32 w-4 h-4 bg-blue-400 rounded-full"></div>
                                <div className="absolute bottom-14 left-52 w-4 h-4 bg-orange-300 rounded-full"></div>
                                <div className="text-center bg-white shadow-lg rounded-lg px-8 py-6 border border-blue-200">
                                    <span className="flex justify-center mb-2 text-blue-500">
                                        <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="13" stroke="#38bdf8" strokeWidth="2" /><path d="M14 8v6h6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" /></svg>
                                    </span>
                                    <div className="text-xl font-semibold text-gray-800 mb-1">
                                        Mumbai - Bandra Kurla Complex
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        0 features • Medium traffic intensity
                                    </div>
                                </div>
                            </div>
                            {/* Legend */}
                            <div className="flex gap-8 justify-center mt-4 text-sm text-gray-700 items-center">
                                <span className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-gray-800"></span> Road Features
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-blue-400"></span> Traffic Flow
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-orange-300"></span> Pedestrian Areas
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded border border-gray-400"></span> Road Network
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center mt-12">
                    <Link href="/vehicle-behavior" passHref>
                        <button className="px-5 py-2 rounded border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 flex items-center">
                            Back to Vehicle Behavior
                        </button>
                    </Link>
                    <div className="flex-1" />
                    <Link href="/export" passHref>

                        <button className="px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 flex items-center gap-2">
                            <FiDownload className="text-lg" />
                            Export Model
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
