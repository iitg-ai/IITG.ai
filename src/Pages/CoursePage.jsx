import React, { useState } from "react";
import FancyWords from "../Images/FancyWords.svg";
import CourseTable from "../Components/CoursePage/CourseTable/CourseTable";
import CourseCards from "../Components/CoursePage/MainPage/6Cards";
import Weekss from "../Images/Weekss.svg";
import "./Bored.css";
import CourseHeader from "../Components/CoursePage/MainPage/CoursePageHeader";
import { Link } from "react-router-dom";

const CoursePage = () => {
  const discordInvite = "https://discord.gg/f77NPvPzwB";
  const regFormLink = "https://forms.gle/z7EgSHUKU2mHmih59";
  return (
    <div>
      <CourseHeader />
      <div className="mt-12 z-10 w-full lg:flex">
        <div className="lg:w-2/3">
          <img src={Weekss} />
        </div>
        <div className="bg-transparent top-0 ml-6 lg:ml-10">
          <p className="anchor1 mt-20">{"IITG.ai’s Summer Course for AI"}</p>
          <p className="heading1 mt-5">The perfect start</p>
          <p className="heading1 text-right mt-5 mr-6 lg:ml-40 lg:mr-0 lg:text-left">
            for your AI journey.
          </p>
          <div className="mt-5 lg:ml-20">
            <p className="desc1">
              The summer course on Data Science and Machine Learning offers a
              comprehensive blend of high-quality resources sourced from the
              internet, including engaging videos, informative blogs, weekly
              assignments, and culminating in an exciting hackathon to assess
              your knowledge and skills.
            </p>
            <div className="mt-5">
              <button
                className="rounded-3xl px-6 pt-3.5 pb-2.5 border register-button"
                onClick={() => {
                  window.open(regFormLink);
                }}
              >
                REGISTER FOR MLAI
              </button>
              <button
                className="rounded-3xl px-6 pt-3.5 pb-2.5 border lg:ml-4"
                onClick={() => {
                  window.open(discordInvite);
                }}
              >
                JOIN DISCORD SERVER
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="lg:mt-48 mt-10">
        <div className="h-10"></div>
        <CourseCards />
      </div>

      <div className="lg:mt-32 mt-10">
        <img className="w-full h-auto" src={FancyWords} />
      </div>

      <div className="lg:hidden text-center mt-10 text-lg">
        Course Table is visible only in desktop mode.
      </div>
      <div id="curriculum" className="mx-20 lg:mt-20">
        <div className="h-10"></div>

        <div
          className={`
          [&>button]:border-[#ffffff22]
                      [&>button]:text-white
                      [&>button]:pt-3 [&>button]:px-4 [&>button]:pb-2 
                      [&>button]:text-left
                      [&>button]:rounded-md
                      w-full
                      flex justify-center
                      mb-4
          `}
        >
          <button>
            <Link to="/coursePage/leaderboard">
              <u>Leaderboard</u>
            </Link>
          </button>
        </div>
        <CourseTable />
      </div>
    </div>
  );
};

export default CoursePage;
