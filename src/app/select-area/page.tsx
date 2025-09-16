'use client';

import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import { StepperNavbar } from '@/components/Steppernavbar';

const popularLocations = [
    'Mumbai - BandraKurla Complex',
    'Delhi - Connaught Place',
    'Bangalore - Electronic City',
    'Chennai - T. Nagar',
    'Kolkata - Park Street',
    'Pune - Hinjewadi',
];

export default function SelectArea() {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className="min-h-screen bg-gray-50 px-10 pt-4 pb-10 font-sans">
            <StepperNavbar currentStep={currentStep} onStepChange={setCurrentStep} />

            <h1 className="text-2xl font-semibold mb-2 text-gray-900 mt-6">Select Modeling Area</h1>
            <p className="text-gray-600 mb-6">
                Choose a location in India where you want to create your road model for traffic simulation.
            </p>

            <div className="flex gap-8">
                {/* Sidebar */}
                <div className="flex flex-col gap-6 w-80">
                    {/* Search Card */}
                    <div className="flex flex-col bg-white rounded-xl shadow p-5">
                        <h2 className="font-semibold text-gray-900 mb-3">Search Location</h2>
                        <div className="relative mb-3">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
                            <input
                                type="text"
                                placeholder="Search for a city or area..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-900">
                            🔍 <span>Search</span>
                        </button>
                    </div>

                    {/* Popular Locations */}
                    <div className="bg-white rounded-xl shadow p-5">
                        <h2 className="font-semibold text-gray-900 mb-3">Popular Locations</h2>
                        <div className="flex flex-col gap-2">
                            {popularLocations.map((loc) => (
                                <button
                                    key={loc}
                                    className="flex items-center gap-2 w-full bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 text-gray-800"
                                >
                                    <FaMapMarkerAlt className="text-blue-500" />
                                    {loc}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Map Controls */}
                    <div className="bg-white rounded-xl shadow p-5">
                        <h2 className="font-semibold text-gray-900 mb-3">Map Controls</h2>
                        <div className="flex flex-col gap-3">
                            <button className="flex items-center gap-2 w-full border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-800">
                                🔍 Zoom to Fit
                            </button>
                            <button className="flex items-center gap-2 w-full border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-800">
                                📍 Reset View
                            </button>
                            <button className="flex items-center gap-2 w-full border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-800">
                                ⬇️ Import Map Data
                            </button>
                        </div>
                    </div>

                    {/* Back to Home */}
                    <Link href="/home" passHref>
                        <button className="mt-4 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 shadow-sm w-full">
                            Back to Home
                        </button>
                    </Link>
                </div>

                {/* Main Map */}
                <div className="flex-1 flex flex-col items-center">
                    <div className="w-full h-[500px] bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl overflow-hidden mb-6">
                        <img src="/assets/map.jpg" alt="Map Illustration" className="w-full h-full object-cover" />
                    </div>

                    <Link href="/choose-template" passHref>
                        <button className="ml-auto bg-blue-600 text-white px-5 py-2 rounded-lg font-medium mt-3 hover:bg-blue-700">
                            Continue to Template
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
