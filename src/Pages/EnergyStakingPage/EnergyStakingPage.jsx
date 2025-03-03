import React from "react";
import { ball } from "../../assets/imgs";

const EnergyStakingPage = () => {
    
    const energyToday = 341;
    const btnBalance = 0.0101; 
    const usdBalance = 0; 
    const stakingRate = "0.0001 BTN"; 

    return (
        <div className="text-white min-h-screen flex flex-col items-center justify-center font-bold">
            <div className="w-full max-w-md p-4">
                <div className="flex items-center mb-6">
                    <span className="text-2xl mr-2">⚡</span>
                    <h1 className="text-2xl">ENERGY STAKING</h1>
                </div>

                <div className="flex justify-center mb-6">
                    <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-[#1d2025] to-[#2d3a4b] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center opacity-50">
                            <img src={ball} alt=""/>
                        </div>
                        <div className="relative z-10 text-center">
                            <p className="text-lg">YOUR ENERGY TODAY</p>
                            <p className="text-4xl text-yellow-500">⚡ {energyToday}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#1d2025] rounded-lg p-4 mb-6">
                    <div className="bg-yellow-500 text-black p-4 rounded-lg text-center">
                        <h2 className="text-2xl mb-2">YOUR BALANCE</h2>
                        <p className="text-xl">{btnBalance} BTN</p>
                        <p className="text-xl">0 USD</p>
                    </div>
                </div>

                <div className="bg-[#1d2025] rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-400">BTN/STAKED RATE @ USD</p>
                    <p className="text-lg">{stakingRate}</p>
                    <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition-colors">
                        ENERGY + {stakingRate}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EnergyStakingPage;