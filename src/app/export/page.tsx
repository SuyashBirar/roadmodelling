'use client';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { StepperNavbar } from "@/components/Steppernavbar";
import { FiDownload } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

const formats = [
    {
        id: "csv",
        title: "CSV (Comma-Separated Values)",
        desc: "Tabular data format for spreadsheet applications",
        ext: ".csv",
        recommended: false,
        color: "border-gray-200",
    },
    {
        id: "json",
        title: "JSON (JavaScript Object Notation)",
        desc: "Structured data format for web applications",
        ext: ".json",
        recommended: true,
        color: "border-blue-400",
    },
    {
        id: "mat",
        title: "MATLAB MAT-file",
        desc: "Native MATLAB format for direct import",
        ext: ".mat",
        recommended: true,
        color: "border-blue-400",
    },
    {
        id: "xml",
        title: "XML (OpenDRIVE Format)",
        desc: "Standard format for road network descriptions",
        ext: ".xodr",
        recommended: false,
        color: "border-gray-200",
    }
];

export default function ExportPage() {
    const router = useRouter();
    const [selected, setSelected] = useState<string[]>(["json", "mat"]);

    function toggleFormat(id: string) {
        setSelected(s =>
            s.includes(id) ? s.filter(x => x !== id) : [...s, id]
        );
    }

    // Export button handler
    function handleExport() {
        // Show toast message
        toast.success("File downloaded successfully");

        // Redirect to home after short delay so the toast is visible
        setTimeout(() => {
            router.push("/home");
        }, 1500);
    }

    return (
        <>
            {/* Toaster container for toast messages */}
            <Toaster position="top-right" reverseOrder={false} />

            <div className="min-h-screen bg-white">
                <StepperNavbar currentStep={5} />

                <div className="max-w-4xl mx-auto px-6 py-10">
                    <h1 className="text-3xl font-bold mb-2 text-black">Export & Integration</h1>
                    <p className="text-gray-600 mb-7">
                        Export your road model in various formats and learn how to integrate with MATLAB tools.
                    </p>
                    {/* Export Format selection cards */}
                    <div className="bg-white p-8 rounded-2xl border mb-8">
                        <div className="text-lg font-semibold mb-4 text-black">Select Export Formats</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {formats.map(f => (
                                <label
                                    key={f.id}
                                    className={`flex items-start gap-4 p-4 rounded-xl transition-all border-2 cursor-pointer ${selected.includes(f.id) ? "border-blue-500 shadow" : f.color
                                        }`}
                                    htmlFor={`format-${f.id}`}
                                    tabIndex={0}
                                >
                                    <input
                                        id={`format-${f.id}`}
                                        type="checkbox"
                                        checked={selected.includes(f.id)}
                                        onChange={() => toggleFormat(f.id)}
                                        className="mt-2 w-5 h-5 accent-blue-600 cursor-pointer"
                                    />
                                    <div>
                                        <div className="flex items-center gap-2 font-semibold text-black">
                                            {f.title}
                                            {f.recommended && (
                                                <span className="px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-medium">
                                                    Recommended
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-gray-600 text-sm">{f.desc}</div>
                                        <div className="text-gray-400 text-xs mt-1">File extension: <span className="font-mono font-semibold">{f.ext}</span></div>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center mt-8">
                        <Link href="/preview" passHref>
                            <button className="px-5 py-2 rounded border border-gray-300 bg-white text-gray-900 hover:bg-gray-50">
                                Back to Preview
                            </button>
                        </Link>
                        <div className="flex-1" />
                        <button
                            type="button"
                            onClick={handleExport}
                            className={`px-7 py-3 rounded-xl font-semibold flex items-center gap-2 text-white bg-green-600 hover:bg-green-700 transition`}
                            disabled={selected.length === 0}
                        >
                            <FiDownload className="text-lg" />
                            Export {selected.length} Format{selected.length !== 1 ? "s" : ""}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
