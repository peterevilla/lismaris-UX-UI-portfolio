import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from './components/About'
import NavBar from "./components/NavBar";
import Project1 from "./components/projects/Project1";
import Project2 from "./components/projects/Project2";
import Project3 from "./components/projects/Project3";
import CityPups from "./components/projects/CityPups";
import SongBird from "./components/projects/SongBird";



const bg = require("./bg/bg.svg");


function App() {
 

  return (
    <div className="h-screen font-gothic text-myblack bg-mywhite">
      <Switch>
        <Route exact path="/">
      <section className="h-screen" id="home">
      <NavBar/>
        <Home/>
      </section>
     
      <section className="h-screen" id="project1">
      <Link to="songbird"><Project1/></Link>
      </section>
      <section className="h-screen" id="project2">
        <Link to="citypups" ><Project2/></Link>
      </section>   
      <section className="h-screen" id="project3">
        <Project3/>
      </section>
      <Footer/>
      </Route>
          <Route path="/about">
          <NavBar/>
            <About />
            <Footer/>
          </Route>
          <Route path="/contact">
          <NavBar/>
            <Contact />
            <Footer/>
          </Route>
          <Route path="/citypups">
          <NavBar/>
            <CityPups/>
          </Route>
          <Route path="/songbird">
          <NavBar/>
            <SongBird/>
          </Route>
        </Switch>    
    </div>
  );
}

export default App;
