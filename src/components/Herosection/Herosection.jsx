import React, { useState } from 'react'
import Footer from '../Footer/Footer';

const Herosection = ({ username }) => {

    const [energy, setEnergy] = useState(81);
    const [tapsLeft, setTapsLeft] = useState(100);
    const [autoClicker, setAutoClicker] = useState(false);

    const handleTap = () => {
        if (tapsLeft > 0) {
            setEnergy(energy + 1);
            setTapsLeft(tapsLeft - 1);
        }
    };

    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center p-4">
            {/* Header */}
            <div className="w-full flex justify-between items-center p-4 bg-gray-900 rounded-lg">
                <span>Hello, {username}</span>
                <div className="flex gap-2">
                    <button className="bg-yellow-500 text-black px-4 py-1 rounded">Referral Link</button>
                    <button className="bg-yellow-500 text-black px-4 py-1 rounded">Upgrade</button>
                </div>
            </div>

            {/* Energy Balance */}
            <div className="mt-4 bg-gray-800 p-4 text-center rounded-lg w-full max-w-sm">
                <p className="text-yellow-500">TODAY ENERGY BALANCE</p>
                <h1 className="text-4xl font-bold">{energy}</h1>
            </div>

            {/* Auto Clicker & Leaderboard */}
            <div className="flex justify-between w-full max-w-sm mt-4">
                <button
                    onClick={() => setAutoClicker(!autoClicker)}
                    className="bg-gray-700 px-4 py-2 rounded"
                >
                    Autoclicker: {autoClicker ? "ON" : "OFF"}
                </button>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded">🏆 Leaderboard</button>
            </div>

            {/* Main Tap Button */}
            <div className="mt-6" onClick={handleTap}>
                <img src="/coin.png" alt="coin" className="w-40 cursor-pointer" />
                <p className="mt-2 text-yellow-400">TAPS LEFT: ⚡ {tapsLeft}</p>
                <div className="w-full max-w-sm bg-gray-700 rounded-full h-4 mt-2">
                    <div className="bg-yellow-500 h-4 rounded-full" style={{ width: `${(tapsLeft / 1000) * 100}%` }}></div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Herosection