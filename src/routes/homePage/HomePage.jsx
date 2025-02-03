import { Link } from "react-router-dom";
import "./homePage.css";

import React from "react";

import orbital from "../../Images/orbital.png";
import bot from "../../Images/bot.png";

const Homepage = () => {
  return (
    <div className="homepage">
      <img src={orbital} alt="" className="orbital" />
      <div className="left">
        <h1>Luci AI</h1>
        <h2>Lucid AI – Intelligence Made Clear.</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          veniam! Sunt quae porro qui facere, dolores tempore magni sit
          perspiciatis ad sed illo consectetur quas consequuntur. 
        </h3>
        <Link to="/dashboard">
          Get Started
        </Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg">

            </div>
            <img src={bot} alt="" className="bot"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
