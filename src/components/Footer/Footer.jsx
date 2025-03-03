import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (



        <div className="flex justify-around py-4 bg-[#000000] border-t border-gray-700 text-white ">
            <button onClick={() => navigate("/mybank")} className="flex flex-col items-center">
                <span className="text-2xl">🏦</span>
                <p>MY BANK</p>
            </button>
            <button onClick={() => navigate("/myteam")} className="flex flex-col items-center">
                <span className="text-2xl">👥</span>
                <p>MY TEAM</p>
            </button>
            <button onClick={() => navigate("/energystaking")} className="flex flex-col items-center">
                <span className="text-2xl">⚡</span>
                <p>BTM</p>
            </button>
            <button onClick={() => navigate("/energy")} className="flex flex-col items-center">
                <span className="text-2xl">💪</span>
                <p>GET ENERGY</p>
            </button>
        </div>

    );
};

export default Footer;
