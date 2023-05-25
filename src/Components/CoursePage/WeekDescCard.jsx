import React from "react";
import TempCard from "../../Images/tempcard.svg";
import "./WeekDescCard.css";

const WeekDescCard = ({ tag1, tag2, tag3, whichWeek, description }) => {
  return (
    <>
      <div id="container" className="relative">
        <div
          id="content"
          className="px-6 py-5 h-full flex flex-col justify-between"
        >
          <div id="tags" className="grid grid-cols-2 gap-2">
            <span>{tag1}</span>
            <span>{tag2}</span>
            <span>{tag3}</span>
          </div>
          <div className="mt-4">
            <h1>{whichWeek}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default WeekDescCard;
