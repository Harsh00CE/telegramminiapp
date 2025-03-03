import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import { usdt } from "../../assets/imgs";

const Herosection = ({ username }) => {
    const [energy, setEnergy] = useState(81);
    const [tapsLeft, setTapsLeft] = useState(100);
    const [autoClicker, setAutoClicker] = useState(false);
    const [tapEffects, setTapEffects] = useState([]);
    const [rotation, setRotation] = useState(0);
    const [scale, setScale] = useState(1); 

    useEffect(() => {
        
        document.addEventListener("gesturestart", (e) => e.preventDefault());
    }, []);

    const handleTap = (e) => {
        const tap = e.currentTarget;
        const rect = tap.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        if (tapsLeft > 0) {
            setEnergy(energy + 1);
            setTapsLeft(tapsLeft - 1);

            setRotation((prev) => prev + 360); 
            setScale(1.2);

            setTimeout(() => setScale(1), 200);

           const newEffect = {
                id: Date.now(),
                x: x,
                y: y,
            };

            setTapEffects([...tapEffects, newEffect]);

            setTimeout(() => {
                setTapEffects((prev) => prev.filter((effect) => effect.id !== newEffect.id));
            }, 600);
        }
    };

    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center p-4 no-zoom">
            <div className="w-full flex justify-between items-center p-4 bg-gray-900 rounded-lg">
                <span>Hello, {username}</span>
                <div className="flex gap-2">
                    <button className="bg-yellow-500 text-black px-4 py-1 rounded">Referral Link</button>
                    <button className="bg-yellow-500 text-black px-4 py-1 rounded">Upgrade</button>
                </div>
            </div>

            <div className="mt-4 bg-gray-800 p-4 text-center rounded-lg w-full max-w-sm">
                <p className="text-yellow-500">TODAY ENERGY BALANCE</p>
                <h1 className="text-4xl font-bold">{energy}</h1>
            </div>

            <div className="flex justify-between w-full max-w-sm mt-4">
                <button
                    onClick={() => setAutoClicker(!autoClicker)}
                    className="bg-gray-700 px-4 py-2 rounded"
                >
                    Autoclicker: {autoClicker ? "ON" : "OFF"}
                </button>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded">🏆 Leaderboard</button>
            </div>

            <div className="mt-6 p-10 relative flex justify-center items-center" onClick={handleTap}>
                <motion.img
                    src={usdt}
                    alt="coin"
                    className="w-40 cursor-pointer select-none"
                    animate={{ rotate: rotation, scale: scale }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                />

                {tapEffects.map((effect) => (
                    <motion.span
                        key={effect.id}
                        className="absolute text-yellow-400 text-lg font-bold"
                        initial={{ opacity: 1, y: 0, scale: 1 }}
                        animate={{ opacity: 0, y: effect.y, scale: 3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={{ left: `50%`, transform: `translate(-50%, 0) translate(${effect.x}px, 0)` }}
                    >
                        {/* {Math.random() > 0.5 ? "+1" : "⚡"} */}
                        {"⚡"}
                    </motion.span>
                ))}
            </div>

            <p className="mt-2 text-yellow-400">TAPS LEFT: ⚡ {tapsLeft}</p>

            {/* Progress Bar */}
            <div className="w-full max-w-sm bg-gray-700 rounded-full h-4 mt-2">
                <div
                    className="bg-yellow-500 h-4 rounded-full"
                    style={{ width: `${(tapsLeft / 100) * 100}%` }}
                ></div>
            </div>

        </div>
    );
};

export default Herosection;
