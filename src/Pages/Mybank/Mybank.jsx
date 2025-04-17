import React from "react";
import BackButton from "../../components/Backbtn/src_components_BackButton";

const MyBank = () => {
  // Sample data from the screenshot (you can make these dynamic or fetch from an API)
  const totalPlayers = 1662755;
  const btnEarned = 3904841;
  const energyMined = 117000000000; // 117 B (billion)
  const mainBalance = 0.0101; // BTN
  const affiliateBalance = 0; // USDT/BTC

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center font-bold">
      
      <BackButton />
      <div className="w-full max-w-md p-4">
        <div className="flex items-center mb-6">
          <span className="text-2xl mr-2">🏦</span>
          <h1 className="text-2xl">MY BANK</h1>
        </div>

        <div className="bg-[#1d2025] rounded-lg p-4 mb-6">
          <h2 className="text-xl mb-4 text-center">BITTON PROJECT STATISTICS</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-[#2d3a4b] p-3 rounded-lg">
              <span className="text-yellow-500">👤</span>
              <p className="text-sm">PLAYERS TOTAL</p>
              <p className="text-lg">{totalPlayers.toLocaleString()}</p>
            </div>

            <div className="flex items-center justify-between bg-[#2d3a4b] p-3 rounded-lg">
              <span className="text-yellow-500">💰</span>
              <p className="text-sm">BTN</p>
              <p className="text-lg">{btnEarned.toLocaleString()}</p>
            </div>

            <div className="flex items-center justify-between bg-[#2d3a4b] p-3 rounded-lg">
              <span className="text-yellow-500">⚡</span>
              <p className="text-sm">ENERGY MINED</p>
              <p className="text-lg">{energyMined.toLocaleString()} B</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1d2025] rounded-lg p-4 mb-6">
          <h2 className="text-xl mb-4 text-center">MAIN BALANCE</h2>
          <div className="flex flex-col items-center">
            <p className="text-2xl mb-4">{mainBalance} BTN</p>
            <button className="w-full bg-[#8b6e3c] text-white py-3 rounded-lg hover:bg-[#7a5f2e] transition-colors">
              WITHDRAW FUNDS
            </button>
          </div>
        </div>

        <div className="bg-[#1d2025] rounded-lg p-4">
          <h2 className="text-xl mb-4 text-center">AFFILIATE BALANCE USDT/BTC</h2>
          <div className="flex flex-col items-center">
            <p className="text-2xl mb-4">{affiliateBalance} USDT</p>
            <button className="w-full bg-yellow-500 text-black py-3 rounded-lg hover:bg-yellow-400 transition-colors">
              WITHDRAW FUNDS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBank;