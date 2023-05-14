import React, { useState } from "react";
import FancyWords from "../Images/FancyWords.svg";
import CourseTable from "../Components/CoursePage/CourseTable";
import CourseCards from "../Components/CoursePage/6Cards";
import Weekss from "../Images/Weekss.svg";
import Group55png from "../Images/Group 55.png";
import Group55svg from "../Images/Group 55.svg";
import "./Bored.css";

const CoursePage = () => {
  return (
    <div>
      <div className="mt-20 z-10 w-full flex">
        <div className="bg-black">
          <img src={Weekss} />
        </div>
        <div className="bg-transparent top-0 ml-10">
          <p className="anchor1 mt-20">{"IITG.ai’s Summer Course for AI"}</p>
          <p className="heading1 mt-5">The perfect start</p>
          <p className="heading1 ml-40 mt-5">for your AI journey.</p>
          <p className="desc1 mt-5 ml-20">
            Phasellus condimentum eros ac efficitur aliquet. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </p>
        </div>
      </div>

      <div className="mt-60">
        <CourseCards />
      </div>

      <div className="mt-40">
        <img className="w-full h-auto" src={FancyWords} />
      </div>

      <div>
        <CourseTable />
      </div>
    </div>
  );
};

export default CoursePage;
