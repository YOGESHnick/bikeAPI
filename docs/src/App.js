import React from "react";
import Documentation from "./pages/Documentation"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/docs" element={<Documentation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
