import React, { useEffect } from "react";

const BackButton = () => {
    useEffect(() => {
        const backButton = Telegram.WebApp.BackButton;

        backButton.show();

        const handleBackButtonClick = () => {
            window.history.back();
        };

        backButton.onClick(handleBackButtonClick);
        return () => {
            backButton.offClick(handleBackButtonClick);
            backButton.hide();
        };
    }, []);

    return null;
};

export default BackButton;