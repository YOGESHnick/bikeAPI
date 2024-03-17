import React from "react";
// import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  return (
      <div className="navbar">
        <div className="nav">
          <ul>
            <li onClick={() => navigate("docs")}>Docs
            </li>
            <li onClick={() => navigate("pricing")}>Pricing</li>
            <li onClick={() => navigate("support")}>Support</li>
            <li onClick={() => navigate("sign-in")}>Sign In</li>
          </ul>
        </div>

      </div>

  );
};

export default Navbar;