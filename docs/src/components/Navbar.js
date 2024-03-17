// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Documentation from "../pages/Documentation";

// const Navbar = () => {
//     const navigate = useNavigate();
//   return (
//     <Router>
//       <div className="navbar">
//         <div className="nav">
//           <ul>
//             <li>
//               <Link to="/docs">Docs</Link>
//             </li>
//             <li onClick={() => navigate("/docs")} >
//               {/* <Link to="/pricing">Pricing</Link> */}Pricing
//             </li>
//             <li>
//               <Link to="/signin">Sign In</Link>
//             </li>
//             <li>
//               <Link to="/support">Support</Link>
//             </li>
//           </ul>
//         </div>
//         <Routes>
//           <Route path="/docs" component={Documentation} />
//           {/* <Route path="/pricing" component={Pricing} /> */}
//           {/* <Route path="/signin" component={SignIn} /> */}
//           {/* <Route path="/support" component={Support} /> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <ul>
          <li>
            <a href="/docs">Docs</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/signin">Sign In</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
