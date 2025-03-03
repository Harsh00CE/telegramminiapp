import React from "react";
import { Outlet } from "react-router-dom";
import BackButton from "../components/Backbtn/src_components_BackButton";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-900 text-white p-4">Header Content</header>
            <main className="flex-grow">
                <BackButton />
                <Outlet />
                <Footer/>
            </main>
        </div>
    );
};

export default MainLayout;