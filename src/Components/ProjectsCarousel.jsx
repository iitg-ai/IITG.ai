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
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(projects[0]);

  const foo = (prevIndex, newIndex, destIndex) => {
    console.log(newIndex);
    // console.log(activeProject);
    // setActiveIndex((prev) => {
    //   return newIndex;
    // });
    setActiveProject(() => projects[newIndex]);
    // console.log(activeIndex);
  };

  useEffect(() => {
    // console.log("activeIndex", activeIndex);
    // setActiveProject(projects[(activeIndex + 1) % 4]);
    console.log("activeProject", activeProject);
  }, [activeProject]);

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
            // focus: "center center",
            type: "loop",
            easing: "ease",
            arrows: true,
            // focus: 1,
            gap: 20,
            padding: 100,
          }}
        >
          <SplideTrack className="mx-20">
            <SplideSlide>
              <img
                src="/projects/qa_chatbot.jpg"
                alt=""
                height="200px"
                width="360px"
              />
            </SplideSlide>
            <SplideSlide>
              <div>
                <img
                  src="/projects/vital_extraction.png"
                  alt=""
                  height="200px"
                  width="360px"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <img
                src="/projects/animal_ai_olympics.png"
                alt=""
                height="200px"
                width="360px"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/projects/cover_generator.jpeg"
                alt=""
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
        <div>
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
            // focus: "center center",
            type: "loop",
            easing: "ease",
            arrows: false,
            // focus: 1,
            gap: 10,
            padding: 24,
          }}
        >
          <SplideTrack className="">
            <SplideSlide
              id="carouselCard1"
              onMouseOver={(e) => {
                console.log(e.target);
              }}
            >
              <div>
                <img src={TempCard} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <img src={TempCard} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={TempCard} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={TempCard} alt="" />
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>
    </>
  );
};

export default ProjectsCarousel;
