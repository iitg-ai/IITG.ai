import React from "react";
import "./Marquee.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Marquee = (props) => {
  return (
    <>
      <div
        className="ml-20"
        style={{ fontSize: 64, marginTop: 48, marginBottom: -30 }}
      >
        Cultivating a culture of
      </div>
      {/* <div class="Marquee">
        <div class="Marquee-content">
          <div class="Marquee-tag">Data Analysis</div>
          <div class="Marquee-tag">Machine Learning</div>
          <div class="Marquee-tag">Artificial Intelligence</div>
          <div class="Marquee-tag">Data Analysis</div>
          <div class="Marquee-tag">Machine Learning</div>
          <div class="Marquee-tag">Artificial Intelligence</div>
          <div class="Marquee-tag">Data Analysis</div>
          <div class="Marquee-tag">Machine Learning</div>
          <div class="Marquee-tag">Artificial Intelligence</div>
          <div class="Marquee-tag">Data Analysis</div>
          <div class="Marquee-tag">Machine Learning</div>
          <div class="Marquee-tag">Artificial Intelligence</div>
        </div>
      </div> */}
      <div id="container1" className="relative mt-4">
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

      <div
        style={{
          marginLeft: 260,
          marginRight: 700,
          fontStyle: "normal",
          fontSize: 14,
          fontFamily: "Nohemi ExtLt",
          opacity: 0.7,
        }}
        className="font-light text-[#FFFFFF]"
      >
        Phasellus condimentum eros ac efficitur aliquet. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </div>
    </>
  );
};

export default Marquee;
