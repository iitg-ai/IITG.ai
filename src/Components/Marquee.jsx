import React from "react";
import "./Marquee.css";

const Marquee = (props) => {
  return (
    <>
      <div className="ml-20" style={{ fontSize: 64, marginTop: 108 }}>
        Cultivating a culture of
      </div>
      <div class="Marquee">
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
