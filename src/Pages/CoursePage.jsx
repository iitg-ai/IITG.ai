import React, { useState } from "react";
import FancyWords from "../Images/FancyWords.svg";
import CourseTable from "../Components/CoursePage/CourseTable";
import CourseCards from "../Components/CoursePage/6Cards";
import Weekss from "../Images/Weekss.svg";
import "./Bored.css";
import CourseHeader from "../Components/CoursePage/CourseHeader";

const CoursePage = () => {
  return (
    <div>
      <CourseHeader />
      <div className="mt-20 z-10 w-full flex">
        <div>
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

      <div id="about" className="mt-48">
        <div className="h-10"></div>
        <CourseCards />
      </div>

      <div className="mt-32">
        <img className="w-full h-auto" src={FancyWords} />
      </div>

      <div id="curriculum" className="mx-28 mt-20">
        <div className="h-10"></div>
        <CourseTable />
      </div>
    </div>
  );
};

export default CoursePage;
