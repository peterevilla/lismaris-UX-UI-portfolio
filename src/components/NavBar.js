import React, { useState } from "react";
import Scrollchor from "react-scrollchor";
import logo from "../images/logo.svg"


const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.addEventListener("scroll", (event) => {
    if (window.scrollY > 250) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <div className=" h-32 flex flex-col lg:flex-row lg:justify-between">
      <div className="lg:py-6 lg:px-16 self-center py-6" >
        <img className="w-20 h-auto" src={logo} alt="logo"/>
      </div>
      <div className="flex self-center px-32">
          <p className="mx-5">Home</p>
          <p className="mx-5">About</p>
          <p className="mx-5">Contact</p>
      </div>
    </div>
  );
};

export default NavBar;
