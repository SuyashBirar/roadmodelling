'use client';

import { useState } from "react";
import Link from "next/link";
import { StepperNavbar } from "@/components/Steppernavbar"; // Adjust import if needed

export default function VehicleBehaviorPage() {
    // Quick preset state: "conservative", "normal", "aggressive", "chaotic"
    const [preset, setPreset] = useState("normal");

    // Sliders
    const [aggressiveness, setAggressiveness] = useState(50);
    const [laneChange, setLaneChange] = useState(50);
    const [speedVariation, setSpeedVariation] = useState(30);
    const [followingDistance, setFollowingDistance] = useState(50);

    const presets = [
        {
            id: "conservative",
            label: "Conservative",
            bg: "bg-green-100",
            text: "text-green-700",
            pill: "bg-green-200 text-green-700",
            desc: "Cautious driving typical of suburbs",
        },
        {
            id: "normal",
            label: "Normal",
            bg: "bg-blue-100",
            text: "text-blue-700",
            pill: "bg-blue-200 text-blue-700",
            desc: "Balanced driving behavior for mixed environments",
        },
        {
            id: "aggressive",
            label: "Aggressive",
            bg: "bg-orange-100",
            text: "text-orange-700",
            pill: "bg-orange-200 text-orange-700",
            desc: "Fast-paced urban driving with frequent lane changes",
        },
        {
            id: "chaotic",
            label: "Chaotic",
            bg: "bg-red-100",
            text: "text-red-700",
            pill: "bg-red-200 text-red-700",
            desc: "Highly unpredictable Indian city traffic",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Stepper Navbar */}
            <StepperNavbar currentStep={3} />

            <div className="max-w-5xl mx-auto px-8 py-10">
                <h1 className="text-3xl font-bold mb-2 text-black">Vehicle Behavior Customization</h1>
                <p className="text-gray-600 mb-7">
                    Configure how vehicles behave in your simulation to match real Indian traffic patterns.
                </p>

                {/* Quick Presets */}
                <div className="bg-white border rounded-2xl mb-8 p-6">
                    <div className="text-lg font-semibold mb-4">Quick Presets</div>
                    <div className="flex gap-5">
                        {presets.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setPreset(item.id)}
                                className={`w-60 flex flex-col items-center 
                  p-4 border rounded-xl transition-all 
                  ${preset === item.id
                                        ? `border-blue-500 shadow-lg ${item.bg}`
                                        : "border-gray-200 bg-gray-50"}
                `}
                            >
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold mb-2 ${item.pill}`}>
                                    {item.label}
                                </span>
                                <span className="text-sm text-gray-700 text-center">{item.desc}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sliders Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Driver Aggressiveness */}
                    <div className="bg-white border rounded-2xl p-6 flex flex-col">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="text-pink-600 text-2xl">⚡</span>
                            <span className="font-semibold text-black">Driver Aggressiveness</span>
                        </div>
                        <div className="text-gray-500 mb-4">How assertive and impatient drivers are</div>
                        <div className="flex flex-col gap-2 mb-2">
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={aggressiveness}
                                onChange={e => setAggressiveness(Number(e.target.value))}
                                className="w-full accent-pink-600"
                            />
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Calm</span>
                                <span>50%</span>
                                <span>Aggressive</span>
                            </div>
                        </div>
                        <span className="text-gray-600 text-sm">Mixed driving styles</span>
                    </div>
                    {/* Lane Change Frequency */}
                    <div className="bg-white border rounded-2xl p-6 flex flex-col">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="text-blue-600 text-2xl">🚗</span>
                            <span className="font-semibold text-black">Lane Change Frequency</span>
                        </div>
                        <div className="text-gray-500 mb-4">How often vehicles switch lanes</div>
                        <div className="flex flex-col gap-2 mb-2">
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={laneChange}
                                onChange={e => setLaneChange(Number(e.target.value))}
                                className="w-full accent-blue-600"
                            />
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Rare</span>
                                <span>50%</span>
                                <span>Frequent</span>
                            </div>
                        </div>
                        <span className="text-gray-600 text-sm">Moderate lane switching</span>
                    </div>
                </div>

                {/* Second Sliders Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Speed Variation */}
                    <div className="bg-white border rounded-2xl p-6 flex flex-col">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="text-yellow-500 text-2xl">🕒</span>
                            <span className="font-semibold text-black">Speed Variation</span>
                        </div>
                        <div className="text-gray-500 mb-4">How much speeds vary from the limit</div>
                        <div className="flex flex-col gap-2 mb-2">
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={speedVariation}
                                onChange={e => setSpeedVariation(Number(e.target.value))}
                                className="w-full accent-yellow-500"
                            />
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Consistent</span>
                                <span>{speedVariation}%</span>
                                <span>Variable</span>
                            </div>
                        </div>
                        <span className="text-gray-600 text-sm">Consistent speeds</span>
                    </div>
                    {/* Following Distance */}
                    <div className="bg-white border rounded-2xl p-6 flex flex-col">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="text-green-500 text-2xl">🛡️</span>
                            <span className="font-semibold text-black">Following Distance</span>
                        </div>
                        <div className="text-gray-500 mb-4">Space maintained behind other vehicles</div>
                        <div className="flex flex-col gap-2 mb-2">
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={followingDistance}
                                onChange={e => setFollowingDistance(Number(e.target.value))}
                                className="w-full accent-green-500"
                            />
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Close</span>
                                <span>{followingDistance}%</span>
                                <span>Safe</span>
                            </div>
                        </div>
                        <span className="text-gray-600 text-sm">Moderate following distance</span>
                    </div>
                </div>

                {/* Behavior Summary */}
                <div className="bg-white border rounded-2xl p-6 mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-purple-100 p-2 rounded-full text-purple-600">
                            <svg width="24" height="24" fill="none" viewBox="0 0 20 20">
                                <path fill="#a78bfa" d="M10 2a1 1 0 011 1v2.44a1 1 0 01-.52.88l-3.1 1.79a1 1 0 01-1-.01l-2.34-1.33A1 1 0 012.52 6.3l3.1-1.79A1 1 0 016 4.44V2a1 1 0 011-1h3z" />
                                <circle cx="10" cy="10" r="8" stroke="#a78bfa" strokeWidth="2" />
                            </svg>
                        </span>
                        <span className="font-semibold text-black">Behavior Summary</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 mb-4">
                        <div className="flex justify-between text-gray-700">
                            <span>Driver Aggressiveness</span>
                            <span className="px-2 py-1 bg-gray-100 rounded text-black font-semibold">{aggressiveness}%</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span>Speed Variation</span>
                            <span className="px-2 py-1 bg-gray-100 rounded text-black font-semibold">{speedVariation}%</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span>Lane Change Frequency</span>
                            <span className="px-2 py-1 bg-gray-100 rounded text-black font-semibold">{laneChange}%</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span>Following Distance</span>
                            <span className="px-2 py-1 bg-gray-100 rounded text-black font-semibold">{followingDistance}%</span>
                        </div>
                    </div>
                    <div className="p-3 rounded bg-blue-50 text-blue-900 font-medium">
                        <span className="font-semibold">Traffic Character:</span> Typical urban traffic with moderate aggression
                    </div>
                </div>


                {/* Navigation Buttons */}
                <div className="flex items-center mt-4">
                    <Link href="/add-features" passHref>
                        <button className="px-5 py-2 rounded border border-gray-300 bg-white text-gray-900 hover:bg-gray-50">
                            Back to Road Features
                        </button>
                    </Link>
                    <div className="flex-1" />
                    <Link href="/preview" passHref>
                        <button className="px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">
                            Continue to Preview
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
