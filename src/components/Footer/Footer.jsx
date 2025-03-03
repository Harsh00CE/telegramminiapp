import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-4 gap-2 w-full max-w-sm">
            <button onClick={() => navigate("/")} className="bg-gray-700 p-2 rounded"> 
                Home
            </button>
            <button onClick={() => navigate("/mybank")} className="bg-gray-700 p-2 rounded">
                My Bank
            </button>
            <button onClick={() => navigate("/myteam")} className="bg-gray-700 p-2 rounded">
                My Team
            </button>
            <button onClick={() => navigate("/energystaking")} className="bg-gray-700 p-2 rounded">
                Energy Staking
            </button>
            <button onClick={() => navigate("/energy")} className="bg-yellow-500 text-black p-2 rounded">
                Get Energy
            </button>
        </div>
    );
};

export default Footer;
