'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiFile, FiHome, FiShoppingCart, FiUser } from 'react-icons/fi';
import { StepperNavbar } from '@/components/Steppernavbar';

const templates = [
    {
        id: 0,
        label: 'Start with Blank Map',
        description: 'Create a custom road model from scratch with complete control over all elements.',
        icon: (
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-100">
                <FiFile className="text-2xl text-gray-400" />
            </span>
        ),
        features: [],
        complexity: null,
        complexityColor: '',
    },
    {
        id: 1,
        label: 'School Zone',
        description: 'Heavy pedestrian traffic, speed bumps, crossing guards, and erratic parking.',
        icon: (
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-blue-100">
                <FiHome className="text-2xl text-blue-500" />
            </span>
        ),
        features: ['Speed Bumps', 'Pedestrian Crossings', 'Parking Issues', 'Traffic Signals'],
        complexity: 'Medium',
        complexityColor: 'bg-yellow-100 text-yellow-700',
    },
    {
        id: 2,
        label: 'Market Area',
        description: 'Dense traffic, street vendors, narrow lanes, and frequent stops.',
        icon: (
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-orange-100">
                <FiShoppingCart className="text-2xl text-orange-500" />
            </span>
        ),
        features: ['Street Vendors', 'Narrow Lanes', 'Heavy Traffic', 'Loading Zones'],
        complexity: 'High',
        complexityColor: 'bg-orange-100 text-orange-700',
    },
    {
        id: 3,
        label: 'Highway Section',
        description: 'High-speed traffic, lane changes, toll booths, and construction zones.',
        icon: (
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-green-100">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M8 17l4-8 4 8" />
                </svg>
            </span>
        ),
        features: ['High Speed', 'Lane Changes', 'Toll Booths', 'Construction'],
        complexity: 'High',
        complexityColor: 'bg-orange-100 text-orange-700',
    },
    {
        id: 4,
        label: 'Residential Area',
        description: 'Quiet streets, speed breakers, parked vehicles, and children playing.',
        icon: (
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-purple-100">
                <FiUser className="text-2xl text-purple-600" />
            </span>
        ),
        features: ['Speed Breakers', 'Parked Cars', 'Low Speed', 'Pedestrians'],
        complexity: 'Low',
        complexityColor: 'bg-green-100 text-green-700',
    },
    {
        id: 5,
        label: 'Construction Zone',
        description: 'Lane closures, diverted traffic, heavy machinery, and safety hazards.',
        icon: (
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-red-100">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="6" y="6" width="12" height="12" />
                </svg>
            </span>
        ),
        features: ['Lane Closures', 'Diversions', 'Heavy Machinery', 'Safety Zones'],
        complexity: 'Very High',
        complexityColor: 'bg-red-100 text-red-700',
    },
];

export default function ChooseTemplatePage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-gray-50 px-10 pt-4 pb-10 font-sans">
            <StepperNavbar currentStep={currentStep} onStepChange={setCurrentStep} />

            <h1 className="text-3xl font-extrabold text-black mb-2 mt-6">Choose a Template</h1>
            <p className="text-gray-600 mb-8">
                Start with a predefined scenario that matches your simulation needs, or create a custom model from scratch.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {templates.map((tpl) => {
                    const selected = selectedId === tpl.id;
                    return (
                        <button
                            key={tpl.id}
                            onClick={() => setSelectedId(tpl.id)}
                            className={`w-full h-full text-left rounded-2xl border-2 p-8 relative transition-all bg-white flex flex-col justify-between ${selected
                                ? 'border-blue-600 ring-2 ring-blue-300 shadow-lg'
                                : 'border-gray-200 hover:border-blue-300 hover:ring-2 hover:ring-blue-100'
                                }`}
                            aria-selected={selected}
                            style={{ minHeight: '340px' }}
                        >
                            <div>
                                <div className="flex items-center mb-3">
                                    {tpl.icon}
                                    <span className={`ml-4 text-xl font-bold ${selected ? 'text-black' : 'text-gray-800'}`}>{tpl.label}</span>
                                </div>
                                <p className={`text-base mb-4 ${selected ? 'text-gray-900' : 'text-gray-700'}`}>{tpl.description}</p>
                                <div className="flex items-center mb-3">
                                    <span className={`text-xs font-semibold px-2 py-1 rounded-md ${tpl.complexityColor}`}>{tpl.complexity}</span>
                                </div>
                                <span className="block text-xs font-medium mb-2 text-gray-500">Includes:</span>
                                <div className="flex flex-wrap gap-2">
                                    {tpl.features.map((f) => (
                                        <span key={f} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">{f}</span>
                                    ))}
                                </div>
                            </div>
                            {selected && (
                                <div className="absolute left-0 bottom-0 w-full py-1 px-3 bg-blue-50 border-t border-blue-600 text-blue-700 text-xs font-bold rounded-b-xl">
                                    Selected Template
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="flex justify-between items-center mt-10">
                <button
                    className="bg-white px-5 py-2 rounded-md border border-gray-200 text-gray-800 font-medium hover:bg-gray-100 transition-all"
                    onClick={() => router.push('/select-area')}
                >
                    Back to Area Selection
                </button>
                <button
                    className={`px-6 py-2 rounded-md text-white font-bold transition-all ${selectedId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'
                        }`}
                    disabled={!selectedId}
                    onClick={() => {
                        if (selectedId) {
                            router.push('/add-features');
                        }
                    }}
                >
                    Continue to Add Features
                </button>
            </div>
        </div>
    );
}
