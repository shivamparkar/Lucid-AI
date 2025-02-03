import { Link } from "react-router-dom";
import "./homePage.css";

import React from "react";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="left">
        <h1>Luci AI</h1>
        <h2>Lucid AI – Intelligence Made Clear.</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          veniam! Sunt quae porro qui facere, dolores tempore magni sit
          perspiciatis ad sed illo consectetur quas consequuntur. Excepturi
          velit distinctio vitae.
        </h3>
        <button>
          Get Started
        </button>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Homepage;
