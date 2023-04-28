import React from "react";
import Marquee from "../Components/Marquee";
import Carousel from "../Components/Carousel";
import LandingPageProjects from "../Components/Landing/Projects";
import ProjectDescription from "../Components/Landing/ProjectDescription";
import Events from "../Components/Landing/Events";
import { Splide } from "@splidejs/splide";
import LandingPageImg from "../Images/temp3.svg";

const LandingPage = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide");
    splide.mount();
  });

  return (
    <div>
      {/* <Carousel /> */}
      <Marquee />
      <div className="mt-20">
        <img src={LandingPageImg} className="bg-black " />
      </div>
      {/* <TeamMemberCard /> */}
      <LandingPageProjects />

      <Events />
      {/* <FooterNav /> */}
    </div>
  );
};

export default LandingPage;
