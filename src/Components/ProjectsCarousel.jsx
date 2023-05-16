import React from "react";
import "@splidejs/splide/css";
// import Splide from "@splidejs/splide";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import RightArrowIcon from "../Icons/RightArrowIcon";
import LeftArrowIcon from "../Icons/LeftArrowIcon";
import TempCard from "../Images/tempcard.svg";
import ProjectDescription from "./Landing/ProjectDescription";
import "./ProjectCarousel.css";

const ProjectsCarousel = () => {
  return (
    <>
      {/* desktop view */}
      <div className="max-lg:hidden">
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
            arrows: true,
            // focus: 1,
            gap: 20,
            padding: 100,
          }}
        >
          <SplideTrack className="mx-20">
            <SplideSlide
              id="carouselCard1"
              onMouseOver={(e) => {
                console.log(e.target);
              }}
            >
              <div>
                <img
                  src="/projects/vital_extraction.png"
                  alt=""
                  height="200px"
                  width="360px"
                />
                <ProjectDescription
                  hidden={1}
                  heading="Knowledge Base QA"
                  description="Implementation of an accurate and efficient pipeline for Knowledge Base Question Answering. We optimize this pipeline for performance, latency and resource usage. The availability of diverse knowledge bases makes this task challenging."
                  url="https://github.com/iitg-ai/Inter-IIT-11-Devrev"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <img
                src="/projects/qa_chatbot.jpg"
                alt=""
                height="200px"
                width="360px"
              />
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
                src="/projects/qa_chatbot.jpg"
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
