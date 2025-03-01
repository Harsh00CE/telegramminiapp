import { useEffect, useState } from "react";
import Herosection from "./components/Herosection/Herosection";

function App() {
  const [tg, setTg] = useState(null);
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      webApp.expand(); // Expand to full screen
      setTg(webApp);
      
      console.log( "WebApp initialized" , webApp);
      
      setUsername(webApp.initDataUnsafe?.user?.first_name || "User");
    }
  }, []);


  return (
    <div>
      <Herosection username={username} />
    </div>
  );
}

export default App;
