import React from "react";
import "./Marquee.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Marquee = (props) => {
  return (
    <>
      <div
        className="ml-6 lg:ml-20 text-[32px] lg:text-[64px] "
        style={{ marginTop: 48, marginBottom: -30 }}
      >
        <span className="block lg:inline">Cultivating </span>
        <span className="block lg:inline ml-[56px] lg:ml-0 -mt-2">
          a culture of
        </span>
      </div>

      <div id="container1" className="relative mt-6 lg:mt-4 hidden lg:block">
        <Splide
          options={{
            autoWidth: true,
            autoHeight: true,
            autoplay: true,
            interval: 3500,
            speed: 300,
            padding: "30%",
            perPage: 1,
            perMove: 1,
            pagination: false,
            focus: "center center",
            type: "loop",
            easing: "ease",
            arrows: false,
            gap: 30,
            drag: false,
          }}
        >
          <SplideSlide>
            <div>Data Analysis</div>
          </SplideSlide>
          <SplideSlide>
            <div> Machine Learning </div>
          </SplideSlide>
          <SplideSlide>
            <div>Artificial Intelligence </div>
          </SplideSlide>
        </Splide>
      </div>

      <div id="container1" className="relative mt-8 lg:mt-4 lg:hidden">
        <Splide
          options={{
            autoWidth: true,
            autoHeight: true,
            autoplay: true,
            interval: 3500,
            speed: 300,
            padding: "15%",
            perPage: 1,
            perMove: 1,
            pagination: false,
            focus: "center center",
            type: "loop",
            easing: "ease",
            arrows: false,
            gap: 10,
            drag: false,
          }}
        >
          <SplideSlide>
            <div>Data Analysis</div>
          </SplideSlide>
          <SplideSlide>
            <div> Machine Learning </div>
          </SplideSlide>
          <SplideSlide>
            <div>Artificial Intelligence </div>
          </SplideSlide>
        </Splide>
      </div>

      <div
        style={{
          // marginLeft: 260,
          // marginRight: 700,
          fontStyle: "normal",
          fontSize: 14,
          fontFamily: "Nohemi ExtLt",
          opacity: 0.7,
        }}
        className="font-light text-[#FFFFFF] lg:ml-[260px] lg:mr-[700px]  w-3/4 lg:w-auto ml-8 mt-6"
      >
        We are the AI student community of IIT Guwahati, working on real
        world projects and research publications in the domain of AI/ML.
      </div>
    </>
  );
};

export default Marquee;
