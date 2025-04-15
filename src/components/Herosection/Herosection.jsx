import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import { autumn_promo, btn, cryptocoin, leader_board, usdt } from "../../assets/imgs";

const Herosection = ({ username }) => {
    const [energy, setEnergy] = useState(81);
    const [tapsLeft, setTapsLeft] = useState(100);
    const [autoClicker, setAutoClicker] = useState(false);
    const [tapEffects, setTapEffects] = useState([]);
    const [rotation, setRotation] = useState(0);
    const [scale, setScale] = useState(1);
    const [showAutoclickerInfo, setShowAutoclickerInfo] = useState(false);

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
                x: Math.random() * 100 - 40,
                y: Math.random() * -100 - 10,
            };

            setTapEffects([...tapEffects, newEffect]);

            setTimeout(() => {
                setTapEffects((prev) => prev.filter((effect) => effect.id !== newEffect.id));
            }, 600);
        }
    };

    const toggleAutoclicker = () => {
        setAutoClicker(!autoClicker);
        if (!autoClicker) {
            setShowAutoclickerInfo(true); 
        }
    };

    const closeAutoclickerInfo = () => {
        setShowAutoclickerInfo(false);
    };

    return (
        <div className="text-white flex flex-col items-center p-4 no-zoom relative overflow-y-scroll overflow-x-hidden">
            <div className="w-full flex justify-between items-center p-4 bg-gray-900 rounded-lg">
                <span>Hello , {username}</span>
                <div className="flex gap-2">
                    <button className="bg-yellow-500 text-black px-4 py-1 rounded">Referral Link</button>
                    <button className="bg-yellow-500 text-black px-4 py-1 rounded">Upgrade</button>
                </div>
            </div>

            <div className="mt-4 bg-gray-800 p-4 text-center rounded-lg w-full max-w-sm">
                <p className="text-yellow-500">TODAY ENERGY BALANCE</p>
                <h1 className="text-4xl font-bold">{energy}</h1>
            </div>


            <div className="p-6 m-6 bg-gray-800 rounded-lg w-full" style={{ background: 'rgba(29, 32, 37, 0.8)' }}>


                <div className="flex justify-between w-full max-w-sm mt-4">
                    <div className="relative mt-2">
                        <div className="flex items-center space-x-2 "
                        >


                            <span className="text-white text-sm">AUTOCUCKER</span>
                            <button
                                onClick={() => setShowAutoclickerInfo(true)}
                                className="text-black rounded-full w-5 h-5 flex items-center justify-center text-xs"
                            >
                                ℹ️
                            </button>
                        </div>
                        <button
                            onClick={toggleAutoclicker}
                            className="px-4 py-2 flex items-center space-x-2"
                        >
                            <div className="flex items-center">
                                <span
                                    className={`w-12 h-6 rounded-full flex items-center p-1 ${autoClicker ? "bg-green-500 justify-end" : "bg-red-500 justify-start"
                                        }`}
                                >
                                    <span className="w-4 h-4 bg-white rounded-full"></span>
                                </span>
                            </div>
                        </button>
                    </div>

                    <div className="text-white px- transition-colors m-2">
                        <div className="flex items-center space-x-2 text-lg">
                            Leaderboard
                        </div>
                        <div className="flex items-center space-x-2 item-right">
                            <img src={leader_board} width={35} alt="" srcset="" />
                        </div>
                    </div>
                </div>

                <div className="mt-6 p-5 relative flex justify-center items-center" onClick={handleTap}>
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
                            initial={{ opacity: 10, y: 0, scale: 1 }}
                            animate={{ opacity: 0, y: effect.y, scale: 3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            style={{ left: `50%`, transform: `translate(-50%, 0) translate(${effect.x}px, 0)` }}
                        >
                            {"⚡"}
                        </motion.span>
                    ))}
                </div>

                <div className="flex justify-between w-full max-w-sm mt-4">
                    <div className="flex-col items-center space-x-2">
                        <img src={autumn_promo} alt="" width={35} />
                        <div>BitMEM</div>
                    </div>
                    <div className="flex-col items-center">
                        <img src={btn} alt="" width={35} />
                        <div>BitMEM</div>
                    </div>
                </div>

                <p className="mt-2 text-yellow-400">TAPS LEFT: ⚡ {tapsLeft}</p>
                <div className="w-full max-w-sm bg-gray-700 rounded-full h-4 mt-2">
                    <div
                        className="bg-yellow-500 h-4 rounded-full"
                        style={{ width: `${(tapsLeft / 100) * 100}%` }}
                    ></div>
                </div>
            </div>

            {showAutoclickerInfo && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                >
                    <motion.div
                        className="bg-[#0d1b2a] p-4 rounded-lg max-w-md w-full mx-4 border border-[#2d3a4b] shadow-lg"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-lg font-bold text-yellow-500">AUTOCUCKER</h2>
                            <button
                                onClick={closeAutoclickerInfo}
                                className="text-white text-sm hover:text-yellow-500"
                            >
                                ✕
                            </button>
                        </div>
                        <p className="text-white text-sm mb-2">
                            Autoclicker is a bot that collects energy and BitMEM for you in exchange for taps. The bot’s commission is 15%. Enable it every 24 hours to keep it running. Available higher from NFT Premium and higher.
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                            <span className="text-yellow-500 text-xs">ℹ️</span>
                            <button
                                onClick={closeAutoclickerInfo}
                                className="bg-yellow-500 text-black px-3 py-1 rounded text-xs hover:bg-yellow-400 transition-colors"
                            >
                                CLOSE
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default Herosection;