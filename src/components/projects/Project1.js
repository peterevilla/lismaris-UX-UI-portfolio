import React, {useState} from "react";
import iphone from '../../images/iphone.svg'
import Fade from "react-reveal/Fade";


const Project1 = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  window.addEventListener("scroll", (event) => {
    if (window.scrollY > 400) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });
  return (
    <div className="h-screen bg-myblack flex flex-col lg:flex-row justify-around  ">
      <p className="text-mywhite self-center">Project1</p>
      <div className="mt-20">
      <Fade right>
      <Fade right when={isScrolled}>
      <img src={iphone} alt="alt"/>
      </Fade>
      </Fade>
      </div>
    </div>
  );
};

export default Project1;
