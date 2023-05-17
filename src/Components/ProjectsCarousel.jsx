import React, { useState, useEffect } from "react";
import "@splidejs/splide/css";
// import Splide from "@splidejs/splide";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import RightArrowIcon from "../Icons/RightArrowIcon";
import LeftArrowIcon from "../Icons/LeftArrowIcon";
import TempCard from "../Images/tempcard.svg";
import ProjectDescription from "./Landing/ProjectDescription";
import "./ProjectCarousel.css";
import { projects } from "../Constants/ProjectsData";

const ProjectsCarousel = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const foo = (prevIndex, newIndex, destIndex) => {
    // console.log(newIndex);
    setActiveProject(() => projects[newIndex]);
  };

  useEffect(() => {
    // console.log("activeProject", activeProject);
  }, [activeProject]);

  const [activeProjectMobile, setActiveProjectMobile] = useState(projects[0]);

  const fooMobile = (prevIndex, newIndex, destIndex) => {
    // console.log(newIndex);
    setActiveProjectMobile(() => projects[newIndex]);
  };

  useEffect(() => {
    // console.log("activeProjectMobile", activeProjectMobile);
  }, [activeProjectMobile]);

  return (
    <>
      {/* desktop view */}
      <div className="max-lg:hidden">
        <Splide
          onMoved={(prevIndex, newIndex, destIndex) => {
            foo(prevIndex, newIndex, destIndex);
          }}
          hasTrack={false}
          options={{
            rewind: true,
            autoWidth: true,
            autoplay: true,
            interval: 2000,
            lazyLoad: "sequential",
            keyboard: "global",
            perPage: 2,
            perMove: 1,
            pagination: false,
            focus: "center center",
            type: "loop",
            easing: "ease",
            arrows: true,
            // focus: 1,
            gap: 20,
            padding: 100,
          }}
        >
          <SplideTrack className="mx-20 h-[300px] ">
            <SplideSlide>
              <div>
                <img
                  src="/projects/vital_extraction.png"
                  alt="vital_extraction"
                  height="200px"
                  width="360px"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <img
                src="/projects/qa_chatbot.png"
                alt="qa_chatbot"
                height="200px"
                width="360px"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/projects/animal_ai_olympics.png"
                alt="animal_ai_olympics"
                height="200px"
                width="360px"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/projects/cover_generator.png"
                alt="cover_generator"
                height="200px"
                width="360px"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/projects/stylegan.png"
                alt="stylegan"
                height="200px"
                width="360px"
              />
            </SplideSlide>
          </SplideTrack>

          <div className="splide__arrows">
            <LeftArrowIcon
              style={{ backgroundColor: "black" }}
              className="splide__arrow splide__arrow--prev "
            />
            <RightArrowIcon
              style={{ backgroundColor: "black" }}
              className="splide__arrow splide__arrow--next"
            />
          </div>
        </Splide>
        <div className="-mt-20">
          <ProjectDescription
            // hidden={1}
            heading={activeProject.title}
            description={activeProject.description}
            url={activeProject.url}
          />
        </div>
      </div>

      {/* mobile view */}
      <div className="lg:hidden">
        <Splide
          onMoved={(prevIndex, newIndex, destIndex) => {
            fooMobile(prevIndex, newIndex, destIndex);
          }}
          hasTrack={false}
          options={{
            rewind: true,
            autoWidth: true,
            autoplay: true,
            interval: 2000,
            lazyLoad: "sequential",
            perPage: 2,
            perMove: 1,
            pagination: false,
            focus: "center center",
            type: "loop",
            easing: "ease",
            arrows: false,
            gap: 10,
            padding: 12,
          }}
        >
          <SplideTrack>
            <SplideSlide>
              <div>
                <img
                  src="/projects/vital_extraction.png"
                  alt="vital_extraction"
                  height="200px"
                  width="360px"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <img
                src="/projects/qa_chatbot.png"
                alt="qa_chatbot"
                height="200px"
                width="360px"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/projects/animal_ai_olympics.png"
                alt="animal_ai_olympics"
                height="200px"
                width="360px"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/projects/cover_generator.png"
                alt="cover_generator"
                height="200px"
                width="360px"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/projects/stylegan.png"
                alt="stylegan"
                height="200px"
                width="360px"
              />
            </SplideSlide>
          </SplideTrack>
        </Splide>
        <div className="-ml-8 mt-8">
          <ProjectDescription
            // hidden={1}
            heading={activeProjectMobile.title}
            description={activeProjectMobile.description}
            url={activeProjectMobile.url}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectsCarousel;
