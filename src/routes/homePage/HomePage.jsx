import { Link } from "react-router-dom";
import "./homePage.css";

import React from "react";

const Homepage = () => {
  return (
    <div >
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Homepage;
