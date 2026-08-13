import { useEffect } from "react";
import { playIntro } from "../animations/intro";
import "../css/Intro.css";

const Intro = ({ onFinish }) => {

  useEffect(() => {

    playIntro(onFinish);

  }, []);

  return (

    <div className="intro-wrapper">

      <div className="intro-top"></div>

      <div className="intro-bottom"></div>

      <div className="intro-content">

        <h1 className="intro-logo">
          Shubham<span>.</span>
        </h1>

        <p className="intro-subtitle">
          Full Stack MERN Developer
        </p>

        <div className="intro-line">

          <div className="intro-line-fill"></div>

        </div>

      </div>

    </div>

  );
};

export default Intro;
