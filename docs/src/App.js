import React from "react";
import Documentation from "./pages/Documentation";
import Intro from "./pages/Intro";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/docs" element={<Documentation />} />
      </Routes>
    </div>
  );
}

export default App;
