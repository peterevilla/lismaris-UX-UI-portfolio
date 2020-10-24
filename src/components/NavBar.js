import React, { useState } from "react";
import Scrollchor from "react-scrollchor";
import logo from "../images/logo.svg"
import { Link } from 'react-router-dom'


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
        <img className="w-20 h-auto transition delay-150 
        transition duration-500 ease-in-out hover:text-indigo-500 transform hover:-translate-y-1 hover:scale-80
        " src={logo} alt="logo"/>
      </div>
      <div className="flex self-center px-16">
          <p className="mx-5 font-extrabold hover:text-myred "><Link to="/">Home</Link></p>
          <p className="mx-5 font-extrabold hover:text-myred  "><Link to="/about">About</Link></p>
          <p className="mx-5 font-extrabold hover:text-myred  "><Link to="/contact">Contact</Link></p>
      </div>
    </div>
  );
};

export default NavBar;
