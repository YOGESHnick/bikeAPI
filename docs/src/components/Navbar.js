import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Documentation from "../pages/Documentation";

const Navbar = () => {
    const navigate = useNavigate();
  return (

      <div className="navbar">
        <div className="nav">
          <ul>
            <li onClick={() => navigate("docs")}>Docs
              {/* <Link to="/online/docs">Docs</Link> */}
            </li>
            <li onClick={() => navigate("pricing")}>Pricing</li>
            <li onClick={() => navigate("support")}>Support</li>
            <li onClick={() => navigate("sign-in")}>Sign In</li>
            {/* <li>
              <Link to="/online/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/online/support">Support</Link>
            </li> */}
          </ul>
        </div>

      </div>

  );
};

// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="nav">
//         <ul>
//           <li>
//             <a href="/docs">Docs</a>
//           </li>
//           <li>
//             <a href="/pricing">Pricing</a>
//           </li>
//           <li>
//             <a href="/signin">Sign In</a>
//           </li>
//           <li>
//             <a href="/support">Support</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
export default Navbar;
