import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import "./App.css";
import { SearchBar } from "./Components/Searchbar/SearchBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </div>
  );
}

export default App;
