import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import axios from "axios";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/questions`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <div></div>;
}

export default App;
