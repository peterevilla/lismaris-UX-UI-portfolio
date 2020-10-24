import React from "react";
import logo from "./../images/logo.svg";

const Footer = () => {
  return (
    <div className="h-64 flex flex-col p-16 px-20 text-mywhite bg-myblack">
      <div className="mb-10 flex">
        <img
          className="w-16 h-auto transition delay-150 
        transition duration-500 ease-in-out hover:text-indigo-500 transform hover:-translate-y-1 hover:scale-80
        "
          src={logo}
          alt="logo"
        />
        <p className="self-center mx-4 text-2xl ">Lis Molina</p>
      </div>
      <div className="flex flex-col lg:flex-row">
      <a className="underline hover:text-myred lg:ml-2 my-4" href="#">Linkedin</a>
      <a className="underline hover:text-myred lg:mx-6 my-4"  href="#">Instagram</a>
      </div>
      <p className=" text-gray-400 lg:ml-2 my-4">Made with care using React.js</p>
    </div>
  );
};

export default Footer;
