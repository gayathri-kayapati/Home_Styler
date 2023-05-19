import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import "./App.css";
import Home from "./Pages/HomePage/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
