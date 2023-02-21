import Navbar from "./Navbar";
import styles from "../styles/App.module.css";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home"
import Fleet from "../pages/Fleet"
import BS from "../pages/BS"
import TCSS from "../pages/TCSS"
import RJS from "../pages/RJS"

function App() {
  return (
    <div className="App">
      <Navbar className={styles} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fleet" element={<Fleet />}/>
        <Route path="/bs" element={<BS />}/>
        <Route path="/tcss" element={<TCSS />}/>
        <Route path="/rjs" element={<RJS />}/>
      </Routes>
    </div>
  );
}

export default App;
