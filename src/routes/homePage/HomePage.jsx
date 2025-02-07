import { Link } from "react-router-dom";
import "./homePage.css";

import React, { useState } from "react";

import orbital from "../../Images/orbital.png";
import bot from "../../Images/bot.png";
import human1 from "../../Images/human1.jpeg";
import human2 from "../../Images/human2.jpeg";

import { TypeAnimation } from "react-type-animation";

const Homepage = () => {

  const[typingStatus, setTypingStatus] = useState("human1")

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
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src={bot} alt="" className="bot" />
          <div className="chat">
            <img src={typingStatus === "human1" ? human1 : typingStatus === "human2" ? human2 : bot} alt="" />
            <TypeAnimation
              sequence={[
                "Human: We produce food for Mice",
                1000,() =>{
                  setTypingStatus('bot')
                },
                "Bot: We produce food for Hamsters",
                1000,() =>{
                  setTypingStatus('human2')
                },
                "Human: We produce food for Guinea Pigs",
                1000,() =>{
                  setTypingStatus('bot')
                },
                "Bot: We produce food for Chinchillas",
                1000,() =>{
                  setTypingStatus('human1')
                },
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
