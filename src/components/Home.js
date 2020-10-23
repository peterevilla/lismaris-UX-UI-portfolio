import React, { useState } from "react";
import Fade from "react-reveal/Fade";

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
      <div className="px-16 py-48  ">
        <Fade top>
          {" "}
          <Fade top when={!isScrolled}>
            <h1 className=" font-volkhov lg:text-6xl text-4xl">Lis Molina</h1>
          </Fade>
        </Fade>

        <Fade bottom>
          {" "}
          <Fade bottom when={!isScrolled}>
            <h2 className=" font-volkhov  lg:text-6xl text-5xl">UX|UI</h2>
          </Fade>{" "}
        </Fade>
      </div>
    </div>
  );
};

export default Home;
