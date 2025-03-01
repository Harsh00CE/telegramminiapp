import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Herosection from "./components/Herosection/Herosection";
import Footer from "./components/Footer/Footer";
import Mybank from "./Pages/Mybank/Mybank";
import Myteam from "./Pages/Myteam/Myteam";
import EnergyPage from "./Pages/EnergyPage/EnergyPage";
import EnergyStakingPage from "./Pages/EnergyStakingPage/EnergyStakingPage";

function App() {
  const [tg, setTg] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      webApp.expand(); // Expand to full screen
      setTg(webApp);

      console.log("WebApp initialized", webApp);

      setUsername(webApp.initDataUnsafe?.user?.first_name || "User");
    }
  }, []);

  return (
    <Router> {/* Ensure everything is inside Router */}
      <Routes>
        <Route path="/" element={<Herosection username={username} />} />
        <Route path="/mybank" element={<Mybank />} />
        <Route path="/myteam" element={<Myteam />} />
        <Route path="/energystaking" element={<EnergyStakingPage />} />
        <Route path="/energy" element={<EnergyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
