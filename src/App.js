import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
