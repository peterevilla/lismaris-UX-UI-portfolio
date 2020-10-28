import React from "react";
import city from "../../images/citypups/city.svg";
import lispup from "../../images/citypups/lispup.svg";

const Project2Page = () => {
  window.scrollTo(0, 0);
  return (
    <div className=" bg-mywhite">
      <div className="lg:h-screen lg:px-48 "> //Page 1
        <div className="h-48 bg-green-950">
          <p className=" font-chewy text-5xl text-white text-center p-12">
            {" "}
            CityPups
          </p>
          {/* <img className="-mt-20 mx-10" src={city} alt="city"/> */}
        </div>
        <div className="lg:px-48">
          <p className="font-chewy text-4xl text-green-950 text-center mt-6">
            Dedicated to all dog lovers around the big cities
          </p>
          <p className="my-6 text-justify">
            CityPups was created during a Design Sprint Project, which main
            purpose is to answer critical business questions through designs in
            a five-day process. I chose to develop this website just because I
            am a dog lover in Chicago, who struggled to find my furry friend
            called Koffee (a mix of dark and white real coffee)
          </p>

          <div className="lg:px-64">
            <img src={lispup} alt="city" />
          </div>
        </div>
      </div>
      <div className="lg:h-screen px-48 "> //Page 2
      <div ><img src={city} alt="city" /></div>
      
       
      </div>
    </div>
  );
};

export default Project2Page;
