import { useEffect, useState } from "react";

function App() {
  const [tg, setTg] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      webApp.expand(); // Expand to full screen
      setTg(webApp);

      // Get user data
      setUsername(webApp.initDataUnsafe?.user?.first_name || "User");
    }
  }, []);

  const sendMessage = () => {
    if (tg) {
      tg.sendData("Hello from Mini App!");
    }
  };

  return (
    <div className="app-container" style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome, {username}!</h1>
      <p>This is a Telegram Mini App built with Vite + React.</p>

      <button
        style={{ padding: "10px 20px", backgroundColor: "#0088cc", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        onClick={sendMessage}
      >
        Send Data to Telegram
      </button>
    </div>
  );
}

export default App;
