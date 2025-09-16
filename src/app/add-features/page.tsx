"use client";

import Link from "next/link";
import { useState } from "react";
import { StepperNavbar } from "@/components/Steppernavbar";

export default function AddFeaturesPage() {
    // State for selected features by category (only one feature selected at a time across all)
    const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

    // Data for all feature groups
    const roadProblems = [
        { id: "pothole", title: "Pothole", desc: "Road surface damage", color: "text-gray-600" },
        { id: "lane-closure", title: "Lane Closure", desc: "Blocked traffic lane", color: "text-gray-600" },
        { id: "speed-bump", title: "Speed Bump", desc: "Traffic calming measure", color: "text-gray-600" },
    ];

    const constructionFeatures = [
        { id: "construction-zone", title: "Construction Zone", desc: "Active construction", color: "text-gray-600" },
        { id: "road-work", title: "Road Work", desc: "Maintenance work", color: "text-gray-600" },
        { id: "detour", title: "Detour", desc: "Traffic diversion", color: "text-gray-600" },
    ];

    const trafficControlFeatures = [
        { id: "traffic-light", title: "Traffic Light", desc: "Signal control", color: "text-gray-600" },
        { id: "stop-sign", title: "Stop Sign", desc: "Mandatory stop", color: "text-gray-600" },
        { id: "roundabout", title: "Roundabout", desc: "Circular intersection", color: "text-gray-600" },
    ];

    // Helper to render selectable feature item
    const FeatureItem = ({
        featureId,
        title,
        description,
        colorClass,
        bgClass = "",
        borderColorClass = "",
    }: {
        featureId: string;
        title: string;
        description: string;
        colorClass: string;
        bgClass?: string;
        borderColorClass?: string;
    }) => {
        const isSelected = selectedFeature === featureId;

        return (
            <div
                onClick={() => setSelectedFeature(featureId)}
                className={`cursor-pointer flex items-center p-2 rounded ${isSelected ? `${bgClass} border ${borderColorClass}` : ""
                    }`}
            >
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${colorClass}`}></span>
                <div>
                    <div className={`font-semibold text-black`}>{title}</div>
                    <div className={`text-xs ml-5 ${description ? colorClass.replace("bg-", "") : ""}`}>{description}</div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Stepper Navigation */}
            <div className="bg-white">
                <StepperNavbar currentStep={2} />
            </div>

            {/* Page Content */}
            <div className="max-w-6xl mx-auto px-6 py-10 pt-10">
                <h1 className="text-3xl font-bold text-black mb-1">Add Road Features</h1>
                <p className="text-gray-600 mb-6">
                    Click on the map to place road problems and traffic elements. Use the sidebar to select different feature types.
                </p>

                <div className="flex gap-8">
                    {/* Sidebar */}
                    <div className="w-1/4 flex flex-col gap-6">
                        <div>
                            <div className="bg-gray-50 rounded-lg border p-4">
                                <h2 className="text-lg font-medium mb-2 text-black">Road Features</h2>
                                <p className="text-gray-500 text-sm">
                                    Select a feature type, then click on the map to place it.
                                </p>
                            </div>
                        </div>

                        {/* Road Problems */}
                        <div>
                            <div className="bg-pink-50 rounded-lg border border-pink-200 p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-pink-200 rounded-full px-2 py-1 text-xs font-bold text-pink-800">Road Problems</span>
                                </div>
                                <div className="space-y-3">
                                    {roadProblems.map(({ id, title, desc, color }) => (
                                        <FeatureItem
                                            key={id}
                                            featureId={id}
                                            title={title}
                                            description={desc}
                                            colorClass={color}
                                            bgClass="bg-pink-200"
                                            borderColorClass="border-pink-400"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Construction */}
                        <div>
                            <div className="bg-orange-50 rounded-lg border border-orange-200 p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-orange-200 rounded-full px-2 py-1 text-xs font-bold text-orange-800">Construction</span>
                                </div>
                                <div className="space-y-3">
                                    {constructionFeatures.map(({ id, title, desc, color }) => (
                                        <FeatureItem
                                            key={id}
                                            featureId={id}
                                            title={title}
                                            description={desc}
                                            colorClass={color}
                                            bgClass="bg-orange-200"
                                            borderColorClass="border-orange-400"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Traffic Control */}
                        <div>
                            <div className="bg-blue-50 rounded-lg border border-blue-200 p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-blue-200 rounded-full px-2 py-1 text-xs font-bold text-blue-800">Traffic Control</span>
                                </div>
                                <div className="space-y-3">
                                    {trafficControlFeatures.map(({ id, title, desc, color }) => (
                                        <FeatureItem
                                            key={id}
                                            featureId={id}
                                            title={title}
                                            description={desc}
                                            colorClass={color}
                                            bgClass="bg-blue-200"
                                            borderColorClass="border-blue-400"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Map Area */}
                    <div className="flex-1">
                        <div className="bg-gradient-to-br from-green-100 to-blue-100 border rounded-xl h-[400px] flex items-center justify-center relative">
                            <div className="text-center">
                                <svg
                                    width="48"
                                    height="48"
                                    fill="none"
                                    aria-hidden="true"
                                    className="mx-auto"
                                >
                                    <circle cx="24" cy="24" r="22" stroke="#BCE3D4" strokeWidth="4" />
                                    <path
                                        d="M24 16v8h8"
                                        stroke="#56B893"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="mt-3 text-lg font-medium text-gray-600">
                                    Click to place road features
                                </div>
                                <div className="mt-1 text-sm text-gray-400">
                                    Select a feature type from the sidebar, then click on the map
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-end mt-5 gap-2">
                            <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium rounded px-3 py-2 border border-blue-200 transition">
                                AI Suggestions
                            </button>
                            <button className="bg-gray-50 hover:bg-gray-100 text-gray-600 font-medium rounded px-3 py-2 border border-gray-200 transition">
                                Clear All
                            </button>
                        </div>

                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center mt-12">
                    <Link href="/choose-template" passHref>
                        <button className="px-5 py-2 rounded border border-gray-300 bg-white text-gray-900 hover:bg-gray-50">
                            Back to Templates
                        </button>
                    </Link>
                    <div className="flex-1" />
                    <Link href="/vehicle-behavior" passHref>
                        <button className="px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">
                            Continue to Vehicle Behavior
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

