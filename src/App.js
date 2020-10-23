import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project1 from "./components/projects/Project1";
import Project2 from "./components/projects/Project2";



const bg = require("./bg/bg.svg");


function App() {
 

  return (
    <div className="h-screen font-gothic text-myblack bg-mywhite">
      
      <section className="h-screen" id="home">
      <NavBar/>
        <Home/>
      </section>
     
      <section className="h-screen" id="project1">
        <Project1/>
      </section>
      <section className="h-screen" id="project2">
        <Project2/>
      </section>     
    </div>
  );
}

export default App;
