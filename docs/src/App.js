import React from "react";
import Documentation from "./pages/Documentation";
import Navbar from "./components/Navbar";
import CopyToClip from "./components/copyToClip";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Routes>
        <Route path="/online" element={<Navbar />}>
          {/* <Route path="docs" element={<CopyToClip />} /> */}
        </Route>
        <Route path="/docs" element={<Documentation />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
