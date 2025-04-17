import React from "react";
import BackButton from "../../components/Backbtn/src_components_BackButton";
import { ConnectButton, WalletButton } from '@rainbow-me/rainbowkit';

const EnergyPage = () => {
  const airdrops = [
    { name: "Bitton", logo: "🅱️", rewards: 2000 },
    { name: "Blove Dapp", logo: "🔥", rewards: 2000 },
    { name: "Not Bored Puppies", logo: "🐶", rewards: 3000 },
    { name: "Bee Verse", logo: "🐝", rewards: 3000 },
    { name: "Egg Tapper", logo: "🐣", rewards: 3000 },
    { name: "Vameon", logo: "🔴", rewards: 200000, unit: "VON" },
    { name: "HTX", logo: "🔥", rewards: 3000 },
    { name: "Cess Network", logo: "💧", rewards: 2000 },
    { name: "Airdrop on TON", logo: "💎", rewards: 1000, unit: "TON" },
  ];

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center font-bold">
      <BackButton />
      <div className="w-full max-w-md p-4">
        <div className="flex items-center mb-6">
          <span className="text-2xl mr-2">⚡</span>
          <h1 className="text-2xl">GET ENERGY</h1>
        </div>

        <div className="mb-6">
          <p className="text-sm flex justify-center items-center text-white mb-2">WALLET FOR AIRDROPS</p>
          <div className="w-full flex justify-center items-center">
            <WalletButton wallet="metamask"/>
          </div>  
        </div>


        <div className="mb-6">
          <h2 className="text-lg mb-4">ACTIVE AIRDROPS</h2>
          {airdrops.map((drop, index) => (
            <div
              key={index}
              className="bg-[#1d2025] rounded-lg p-4 mb-2 flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{drop.logo}</span>
                <div>
                  <p className="text-sm">{drop.name}</p>
                  <p className="text-sm text-gray-400">
                    AVAILABLE REWARDS: ⚡ {drop.rewards} {drop.unit || ""}
                  </p>
                </div>
              </div>
              <button className="bg-yellow-500 text-black p-2 rounded-full hover:bg-yellow-400 transition-colors">
                ✔
              </button>
            </div>
          ))}
        </div>

        <div className="bg-[#1d2025] rounded-lg p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🎁</span>
            <p className="text-sm">HAVE A PROMO CODE?</p>
          </div>
          <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors">
            APPLY
          </button>
        </div>

        <div className="bg-[#1d2025] rounded-lg p-4 mb-6 text-center">
          <h2 className="text-lg mb-2">MORE AIRDROPS ARE COMING SOON!</h2>
          <p className="text-sm text-gray-400">STAY TUNED</p>
        </div>

        <div className="text-center text-sm text-gray-400">
          <p>COMPLETED AIRDROPS</p>
        </div>
      </div>
    </div>
  );
};

export default EnergyPage;
