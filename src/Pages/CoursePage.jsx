import React, { useState } from "react";
import FancyWords from "../Images/FancyWords.svg";
import CourseTable from "../Components/CoursePage/CourseTable";
import CourseCards from "../Components/CoursePage/6Cards";

const CoursePage = () => {
  return (
    <div>
      <CourseCards />
      <div className="mt-40">
        <img className="w-full h-auto" src={FancyWords} />
      </div>
      <CourseTable />
    </div>
  );
};

export default CoursePage;
