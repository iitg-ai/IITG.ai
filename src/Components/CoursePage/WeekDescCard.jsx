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
          <div className="bottom-0">
            <h1>{whichWeek}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <svg
        style={{ visibility: "hidden", position: "absolute" }}
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="round">
            {/* <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" /> */}
            
            {/* <feComposite in="SourceGraphic" in2="goo" operator="atop" /> */}
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default WeekDescCard;
