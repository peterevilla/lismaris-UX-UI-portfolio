import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import hand_icon from '../images/hand_icon.svg'

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.addEventListener("scroll", (event) => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });
  return (
    <div className="h-screen">
      <div className="px-16 py-24 lg:py-40  ">
        <Fade top>
          {" "}
          <Fade top when={!isScrolled}>
            <h1 className=" font-volkhov lg:text-6xl text-4xl">Hi!, I'm Lis</h1>
          </Fade>
        </Fade>

        <Fade bottom>
          {" "}
          <Fade bottom when={!isScrolled}>
            <h2 className=" font-volkhov  lg:text-6xl text-5xl">UX|UI</h2>
          </Fade>{" "}
        </Fade>
        <Fade left>
          {" "}
          <Fade left when={!isScrolled}>
           <div className="flex flex-col lg:flex-row"><img className="self-start" src={hand_icon} /><h3 className=" lg:text-2xl text-lg text-gray-700 text-justify">I am a UX/UI designer and Industrial Engineer based in Chicago, USA.<br/>I'm passionate about improving the lives of others through design and I'am constantly looking to learn new things everyday.</h3></div>
          </Fade>{" "}
        </Fade>
      </div>
    </div>
  );
};

export default Home;
