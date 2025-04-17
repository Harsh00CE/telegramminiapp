import { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Herosection from "./components/Herosection/Herosection";
import Mybank from "./Pages/Mybank/Mybank";
import Myteam from "./Pages/Myteam/Myteam";
import EnergyPage from "./Pages/EnergyPage/EnergyPage";
import EnergyStakingPage from "./Pages/EnergyStakingPage/EnergyStakingPage";
import { useTelegram } from "./Hooks/useTelegram";
import Footer from "./components/Footer/Footer";
import MainLayout from "./layouts/MainLauout";
import { bg } from "./assets/imgs";
import NewHerosection from "./components/Herosection/NewHerosection";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

function App() {
  const [tg, setTg] = useState(null);
  const [username, setUsername] = useState("");
  const { webApp } = useTelegram();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      webApp.expand();
      setTg(webApp);
      console.log("WebApp initialized", webApp);
      setUsername(webApp.initDataUnsafe?.user?.first_name || "User");
    }
  }, []);

  const onBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onMainClick = useCallback(() => {
    webApp.showAlert("Main button click");
  }, [webApp]);

  useEffect(() => {
    webApp.ready();
    webApp.BackButton.onClick(onBackClick);
    webApp.MainButton.onClick(onMainClick);
    return () => {
      webApp.BackButton.offClick(onBackClick);
      webApp.MainButton.offClick(onMainClick);
    };
  }, [webApp]);

  return (
    <div className="flex flex-col min-h-screen bg-[#0f1115] relative overflow-hidden">
      {/* Main Scrollable Area */}
      <div
        className="flex-1 overflow-y-auto pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('${bg}')`,
        }}
      >
        <TonConnectUIProvider manifestUrl="">
          <Routes>
            <Route path="/" element={<Herosection username={username} />} />
            <Route path="/mybank" element={<Mybank />} />
            <Route path="/myteam" element={<Myteam />} />
            <Route path="/energystaking" element={<EnergyStakingPage />} />
            <Route path="/energy" element={<EnergyPage />} />
          </Routes>
        </TonConnectUIProvider>
      </div>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}


export default App;
