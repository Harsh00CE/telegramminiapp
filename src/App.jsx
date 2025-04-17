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
import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { getDefaultConfig } from '@rainbow-me/rainbowkit';


const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});

const queryClient = new QueryClient();

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
        {/* <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/Harsh00CE/telegramminiapp/refs/heads/master/ton.json"> */}
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider theme={darkTheme({
              // accentColor: '#7b3fe4',
              // accentColorForeground: 'white',
              // borderRadius: 'small',
              // fontStack: 'system',
              // overlayBlur: 'small',
            })}>
              <Routes>
                <Route path="/" element={<Herosection username={username} />} />
                <Route path="/mybank" element={<Mybank />} />
                <Route path="/myteam" element={<Myteam />} />
                <Route path="/energystaking" element={<EnergyStakingPage />} />
                <Route path="/energy" element={<EnergyPage />} />
              </Routes>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
        {/* </TonConnectUIProvider> */}
      </div>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}


export default App;
