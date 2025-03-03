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

function App() {
  const [tg, setTg] = useState(null);
  const [username, setUsername] = useState("");
  const { webApp } = useTelegram();
  const navigate = useNavigate();
  // const webApp = window.Telegram.WebApp;

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      webApp.expand();
      setTg(webApp);

      console.log("WebApp initialized", webApp);

      setUsername(webApp.initDataUnsafe?.user?.first_name || "User");
    }
  }, []);



  const onBackClick = useCallback(() => {
    navigate(-1)
  }, [navigate])

  const onMainClick = useCallback(() => {
    webApp.showAlert("Main button click")
  }, [webApp])

  useEffect(() => {
    webApp.ready()
    webApp.BackButton.onClick(onBackClick)
    webApp.MainButton.onClick(onMainClick)
    return () => {
      webApp.BackButton.offClick(onBackClick)
      webApp.MainButton.offClick(onMainClick)
    };
  }, [webApp])



  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <Routes>
        <Route path="/" element={<Herosection username={username} />} />
        <Route path="/mybank" element={<Mybank />} />
        <Route path="/myteam" element={<Myteam />} />
        <Route path="/energystaking" element={<EnergyStakingPage />} />
        <Route path="/energy" element={<EnergyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
