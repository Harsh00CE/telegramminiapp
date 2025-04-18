import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { autumn_promo, btn, cryptocoin, leader_board } from "../../assets/imgs";

const Herosection = ({ username }) => {
    const [energy, setEnergy] = useState(81);
    const [tapsLeft, setTapsLeft] = useState(100);
    const [autoClicker, setAutoClicker] = useState(false);
    const [tapEffects, setTapEffects] = useState([]);
    const [rotation, setRotation] = useState(0);
    const [scale, setScale] = useState(1);
    const [showAutoclickerInfo, setShowAutoclickerInfo] = useState(false);
    const tapSectionRef = useRef(null);
    const coinRef = useRef(null);

    // Prevent zoom gestures and handle touch events
    useEffect(() => {
        const preventDefault = (e) => e.preventDefault();
        document.addEventListener("gesturestart", preventDefault);

        const tapSection = tapSectionRef.current;
        if (tapSection) {
            tapSection.addEventListener('touchmove', preventDefault, { passive: false });
        }

        return () => {
            document.removeEventListener("gesturestart", preventDefault);
            if (tapSection) {
                tapSection.removeEventListener('touchmove', preventDefault);
            }
        };
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setTapsLeft((prev) => (prev < 100 ? prev + 1 : prev));
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        if (!autoClicker) return;

        const interval = setInterval(() => {
            setTapsLeft((prevTaps) => {
                if (prevTaps <= 0) return prevTaps;

                setEnergy((prevEnergy) => prevEnergy + 1);

                // Add a ⚡ visual effect too (optional)
                const newEffect = {
                    id: Date.now() + Math.random(),
                    x: Math.random() * 100 - 40,
                    y: Math.random() * -100 - 10,
                };
                setTapEffects((prev) => [...prev, newEffect]);

                setTimeout(() => {
                    setTapEffects((prev) => prev.filter((fx) => fx.id !== newEffect.id));
                }, 600);

                return prevTaps - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [autoClicker]);



    // Initialize Telegram WebApp
    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            const tg = window.Telegram.WebApp;
            tg.ready();
            tg.expand();
            console.log(window.Telegram?.WebApp?.version);

            if (typeof tg.showCloseButton === "function") {
                tg.showCloseButton();
            } else {
                console.warn("showCloseButton is not supported in this environment.");
            }
        }
    }, []);

    const handleMultiTouchTap = (e) => {
        e.preventDefault();

        const touches = e.touches;
        if (tapsLeft <= 0 || !touches) return;

        let tapCount = Math.min(touches.length, tapsLeft);
        setEnergy((prev) => prev + tapCount);
        setTapsLeft((prev) => prev - tapCount);

        // Apply visual effects for each touch
        const rect = e.currentTarget.getBoundingClientRect();
        const newEffects = Array.from(touches).slice(0, tapCount).map(() => ({
            id: Date.now() + Math.random(),
            x: Math.random() * 100 - 40,
            y: Math.random() * -100 - 10,
        }));

        setTapEffects((prev) => [...prev, ...newEffects]);

        setRotation((prev) => prev + 360);
        setScale(1.2);
        setTimeout(() => setScale(1), 200);

        setTimeout(() => {
            setTapEffects((prev) =>
                prev.filter((effect) => !newEffects.some((ne) => ne.id === effect.id))
            );
        }, 600);
    };


    const handleTap = (e) => {
        e.preventDefault();

        if (tapsLeft <= 0) return;

        const tap = e.currentTarget;
        const rect = tap.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

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
        <div className="text-white flex flex-col items-center p-4 no-zoom relative overflow-y-auto overflow-x-hidden min-h-screen">
            {/* Header Section */}
            <div className="w-full flex justify-between items-center p-3 bg-gray-900 rounded-lg sticky top-0 z-10">
                <span>Hello, {username}</span>
                <div className="flex gap-2">
                    <button className="bg-yellow-500 text-black px-4 py-1 rounded text-sm">
                        Referral Link
                    </button>
                    <button className="bg-yellow-500 text-black px-4 py-1 rounded text-sm">
                        Upgrade
                    </button>
                </div>
            </div>

            {/* Energy Balance */}
            <div className="mt-3 bg-gray-800 p-3 text-center rounded-lg w-full">
                <p className="text-yellow-300 text-sm">TODAY ENERGY BALANCE</p>
                <h1 className="text-3xl font-bold">{energy}</h1>
            </div>

            {/* Tap Section */}
            <div
                ref={tapSectionRef}
                className="p-4 m-3 bg-gray-800 rounded-lg w-full touch-none select-none"
                style={{ background: 'rgba(29, 32, 37, 0.8)' }}
            >
                {/* Autoclicker and Leaderboard */}
                <div className="flex justify-between w-full">
                    <div className="relative">
                        <div className="flex items-center space-x-2">
                            <span className="text-white text-sm">AUTOCLICKER</span>
                            <button
                                onClick={() => setShowAutoclickerInfo(true)}
                                className="text-black rounded-full w-5 h-5 flex items-center justify-center text-xs"
                            >
                                ℹ️
                            </button>
                        </div>
                        <button
                            onClick={toggleAutoclicker}
                            className="px-4 py-2 flex"
                        >
                            <div className="flex">
                                <span
                                    className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors ${autoClicker ? "bg-green-500 justify-end" : "bg-red-500 justify-start"
                                        }`}
                                >
                                    <span className="w-4 h-4 bg-white rounded-full"></span>
                                </span>
                            </div>
                        </button>
                    </div>

                    <div className="text-white transition-colors">
                        <div className="flex space-x-2 text-lg">
                            Leaderboard
                        </div>
                        <div className="flex items-center space-x-2 item-right">
                            <img src={leader_board} width={35} alt="Leaderboard" />
                        </div>
                    </div>
                </div>

                {/* Coin Tap Area */}
                <div
                    className="mt-3 p-3 relative flex justify-center touch-none"
                    onTouchStart={handleMultiTouchTap}
                >

                    <motion.img
                        ref={coinRef}
                        src={cryptocoin}
                        alt="coin"
                        className="w-40 cursor-pointer select-none touch-none"
                        animate={{ rotate: rotation, scale: scale }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    />

                    {tapEffects.map((effect) => (
                        <motion.span
                            key={effect.id}
                            className="absolute text-yellow-400 text-lg font-bold select-none touch-none"
                            initial={{ opacity: 100, y: 0, scale: 1 }}
                            animate={{ opacity: 0, y: effect.y, scale: 3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            style={{ left: `50%`, transform: `translate(-50%, 0) translate(${effect.x}px, 0)` }}
                        >
                            {"⚡"}
                        </motion.span>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between w-full mt-3">
                    <div className="flex flex-col items-center">
                        <img src={autumn_promo} alt="Promo" width={35} />
                        <div className="text-xs mt-1">BitMEM</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={btn} alt="Button" width={35} />
                        <div className="text-xs mt-1">BitMEM</div>
                    </div>
                </div>

                {/* Taps Progress */}
                <p className="mt-2 text-yellow-400 text-center">TAPS LEFT: ⚡ {tapsLeft}</p>
                <div className="w-full max-w-sm bg-gray-700 rounded-full h-4 mt-2 mx-auto">
                    <div
                        className="bg-yellow-500 h-4 rounded-full transition-all duration-300"
                        style={{ width: `${tapsLeft}%` }}
                    ></div>
                </div>
            </div>

            {/* Autoclicker Info Modal */}
            {showAutoclickerInfo && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeAutoclickerInfo}
                >
                    <motion.div
                        className="bg-[#0d1b2a] p-4 rounded-lg max-w-md w-full mx-4 border border-[#2d3a4b] shadow-lg"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-lg font-bold text-yellow-500">AUTOCLICKER</h2>
                            <button
                                onClick={closeAutoclickerInfo}
                                className="text-white hover:text-yellow-500 text-xl"
                            >
                                ✕
                            </button>
                        </div>
                        <p className="text-white text-sm mb-4">
                            Autoclicker is a bot that collects energy and BitMEM for you in exchange for taps.
                            The bot's commission is 15%. Enable it every 24 hours to keep it running.
                            Available higher from NFT Premium and higher.
                        </p>
                        <div className="flex justify-end">
                            <button
                                onClick={closeAutoclickerInfo}
                                className="bg-yellow-500 text-black px-4 py-2 rounded text-sm hover:bg-yellow-400 transition-colors"
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