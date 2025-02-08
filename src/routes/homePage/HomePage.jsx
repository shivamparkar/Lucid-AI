import { Link } from "react-router-dom";
import "./homePage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

import orbital from "../../Images/orbital.png";
import bot from "../../Images/bot.png";
import human1 from "../../Images/human1.jpeg";
import human2 from "../../Images/human2.jpeg";
import logo from "../../Images/logo.png";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src={orbital} alt="" className="orbital" />
      <div className="left">
        <h1>LAMA AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sint
          dolorem doloribus, architecto dolor.
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
            <img
              src={
                typingStatus === "human1"
                  ? human1
                  : typingStatus === "human2"
                  ? human1
                  : bot
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                "Human: How do I improve my AI model?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: You can fine-tune it with domain-specific data for better accuracy.",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2: What is the best way to handle biases in AI?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: Implement diverse datasets and ethical guidelines to reduce biases.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
              style={{
                fontSize: "0.7em",
                backgroundImage: "linear-gradient(to right, #a1cfff, #773bd9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src={logo} alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
