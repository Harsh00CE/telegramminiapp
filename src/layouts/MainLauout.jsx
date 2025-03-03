import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import BackButton from "../components/Backbtn/src_components_BackButton";
import Footer from "../components/Footer/Footer";
import Herosection from "../components/Herosection/Herosection";
import { useTelegram } from "../Hooks/useTelegram";

const MainLayout = () => {

    const [tg, setTg] = useState(null);
    const [username, setUsername] = useState("");
    const { webApp } = useTelegram();

    useEffect(() => {
        if (window.Telegram?.WebApp) {
            webApp.expand();
            setTg(webApp);

            console.log("WebApp initialized", webApp);

            setUsername(webApp.initDataUnsafe?.user?.first_name || "User");
        }
    }, []);


    return (
        <div>
            <main>
                <BackButton />
                <Outlet />
                <Footer />
            </main>
        </div>
    );
};

export default MainLayout;