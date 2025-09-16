'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Next.js 13+ App Router
import { FiMapPin, FiLayers, FiPlusCircle, FiSettings, FiEye, FiDownload } from 'react-icons/fi';

type StepperNavbarProps = {
    currentStep: number;
    onStepChange?: (step: number) => void;
};

const stepRoutes = [
    '/select-area',         // Select Area
    '/choose-template',     // Choose Template
    '/add-features',        // Add Features
    '/vehicle-behavior',    // Vehicle Behavior
    '/preview',             // Preview
    '/export',              // Export
];

const steps = [
    { label: 'Select Area', icon: <FiMapPin /> },
    { label: 'Choose Template', icon: <FiLayers /> },
    { label: 'Add Features', icon: <FiPlusCircle /> },
    { label: 'Vehicle Behavior', icon: <FiSettings /> },
    { label: 'Preview', icon: <FiEye /> },
    { label: 'Export', icon: <FiDownload /> },
];

export function StepperNavbar({ currentStep, onStepChange }: StepperNavbarProps) {
    const router = useRouter();

    function handleStepClick(idx: number) {
        router.push(stepRoutes[idx]);
        if (onStepChange) {
            onStepChange(idx);
        }
    }

    return (
        <nav className="flex items-center px-10 pt-0 pb-3 bg-gray-50 space-x-8">
            {steps.map((step, idx) => {
                const icon = step.icon as React.ReactElement<any>;
                return (
                    <button
                        key={step.label}
                        onClick={() => handleStepClick(idx)}
                        className={`
              flex items-center space-x-2 text-md font-medium transition-all
              ${currentStep === idx ? 'text-blue-700 bg-blue-100 px-3 py-1 rounded-md shadow' : 'text-gray-400 hover:text-blue-500'}
            `}
                        aria-current={currentStep === idx ? 'step' : undefined}
                        type="button"
                    >
                        {React.cloneElement(icon, {
                            className: `text-lg ${currentStep === idx ? 'text-blue-700' : 'text-gray-400'}`,
                        })}
                        <span>{step.label}</span>
                    </button>
                );
            })}
            <span className="ml-auto text-gray-400 text-sm">
                Step {currentStep + 1} of {steps.length}
            </span>
        </nav>
    );
}
