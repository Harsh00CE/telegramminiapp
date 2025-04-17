import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-2 bg-[#1d2025]/90 border-t border-gray-700 z-50 text-amber-100">
            {/* Left Side */}
            <button onClick={() => navigate("/mybank")} className="flex flex-col items-center">
                <span className="text-xl">🏦</span>
                <p>Bank</p>
            </button>
            <button onClick={() => navigate("/myteam")} className="flex flex-col items-center">
                <span className="text-xl">👥</span>
                <p>Team</p>
            </button>
            <div className="relative">
                <button
                    onClick={() => navigate("/")}
                    className="w-14 h-14 rounded-full bg-yellow-400 text-black shadow-md shadow-yellow-300 flex items-center justify-center text-3xl border-4 border-white hover:scale-110 transition-transform"
                >
                    🏠
                </button>
            </div>

            <button onClick={() => navigate("/energystaking")} className="flex flex-col items-center">
                <span className="text-xl">⚡</span>
                <p>BTM</p>
            </button>
            <button onClick={() => navigate("/energy")} className="flex flex-col items-center">
                <span className="text-xl">💪</span>
                <p>Energy</p>
            </button>
        </div>
    );
};

export default Footer;
