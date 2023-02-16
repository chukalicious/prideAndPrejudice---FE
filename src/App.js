import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import Navbar from "./common/Navbar";
import Dashboard from "./components/UserDashboardComponent/Dashboard";
import Footer from "./common/Footer";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div>
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
