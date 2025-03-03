import React from "react";

const Myteam = () => {
    // Sample data from the screenshot (you can make these dynamic or fetch from an API)
    const totalTeamTurnover = 0; // USDT
    const totalTeamMembers = 0;
    const paidMembers = 0;
    const currentRankBonus = "0%";
    const nextRankBonus = "8%";
    const nextRankProgress = "0 USD / 0 USD";
    const affiliateIncome = 0; // USDT
    const energyBonusYesterday = 0;
    const weeklyTeamTurnover = 0;
    const poolBonusTier = "-";
    const poolBonusReceived = 0;

    return (
        <div className="bg-[#0d1b2a] text-white min-h-screen flex flex-col items-center justify-center font-bold">
            <div className="w-full max-w-md p-4">
                {/* Header */}
                <div className="flex items-center mb-6">
                    <span className="text-2xl mr-2">👥</span>
                    <h1 className="text-2xl">TEAM</h1>
                </div>

                {/* Total Section */}
                <div className="bg-[#1d2025] rounded-lg p-4 mb-6">
                    <button className="w-full bg-yellow-500 text-black py-3 rounded-lg mb-4 hover:bg-yellow-400 transition-colors">
                        TOTAL
                    </button>
                    <div className="space-y-4">
                        {/* Total Team Turnover */}
                        <div className="flex items-center justify-between bg-[#2d3a4b] p-3 rounded-lg">
                            <span className="text-yellow-500">💰</span>
                            <p className="text-sm">TOTAL TEAM TURNOVER</p>
                            <p className="text-lg">{totalTeamTurnover} USDT</p>
                        </div>

                        {/* Total Team Members */}
                        <div className="flex items-center justify-between bg-[#2d3a4b] p-3 rounded-lg">
                            <span className="text-yellow-500">👥</span>
                            <p className="text-sm">TOTAL TEAM MEMBERS</p>
                            <p className="text-lg">{totalTeamMembers}</p>
                        </div>

                        {/* Paid Members */}
                        <div className="flex items-center justify-between bg-[#2d3a4b] p-3 rounded-lg">
                            <span className="text-yellow-500">💸</span>
                            <p className="text-sm">PAID</p>
                            <p className="text-lg">{paidMembers}</p>
                        </div>
                    </div>
                </div>

                {/* Rank Progress */}
                <div className="bg-[#1d2025] rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl">CURRENT RANK</h2>
                        <h2 className="text-xl text-yellow-500">→ NEXT RANK 1</h2>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-full text-center">
                            <p className="text-lg">CURRENT RANK BONUS</p>
                            <p className="text-2xl">{currentRankBonus}</p>
                        </div>
                        <div className="w-full text-center">
                            <p className="text-lg">NEXT RANK BONUS</p>
                            <p className="text-2xl">{nextRankBonus}</p>
                        </div>
                        <p className="text-sm text-gray-400">NEXT RANK PROGRESS</p>
                        <p className="text-lg">{nextRankProgress}</p>
                        <p className="text-sm text-red-500">NEXT RANK NFT</p>
                        <p className="text-sm text-red-500">START ×</p>
                        <button className="w-full bg-yellow-500 text-black py-3 rounded-lg hover:bg-yellow-400 transition-colors">
                            UPGRADE NFT
                        </button>
                    </div>
                </div>

                {/* Linear Bonus */}
                <div className="bg-[#1d2025] rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500 text-2xl">✨</span>
                        <h2 className="text-xl ml-2">LINEAR BONUS</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-lg">AFFILIATE INCOME USDT/BTC</p>
                        <p className="text-2xl mb-4">{affiliateIncome} USDT</p>
                        <button className="w-full bg-yellow-500 text-black py-3 rounded-lg hover:bg-yellow-400 transition-colors">
                            SHOW TEAM →
                        </button>
                    </div>
                </div>

                {/* Energy Bonus */}
                <div className="bg-[#1d2025] rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500 text-2xl">⚡</span>
                        <h2 className="text-xl ml-2">ENERGY BONUS</h2>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <p className="text-lg">YESTERDAY WEEK ALL</p>
                        <p className="text-2xl mb-2">{energyBonusYesterday}</p>
                        <p className="text-sm text-gray-400">
                            Get 10% of daily generated energy by non-NFT holders in your first line
                        </p>
                    </div>
                </div>

                {/* Pool Bonus */}
                <div className="bg-[#1d2025] rounded-lg p-4">
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500 text-2xl">✨</span>
                        <h2 className="text-xl ml-2">POOL BONUS</h2>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4">
                        <p className="text-lg">YOUR WEEKLY TEAM TURNOVER</p>
                        <p className="text-2xl">{weeklyTeamTurnover}</p>
                        <p className="text-lg">YOUR TIER</p>
                        <p className="text-2xl">{poolBonusTier}</p>
                        <p className="text-lg">BONUS RECEIVED</p>
                        <p className="text-2xl">{poolBonusReceived}</p>
                        <button className="w-full bg-yellow-500 text-black py-3 rounded-lg hover:bg-yellow-400 transition-colors">
                            SHOW MY TEAM
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myteam;