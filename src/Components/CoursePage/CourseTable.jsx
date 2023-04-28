import React, { useState } from "react";
import Week1Grid from "./Week1Grid";
import Week2Grid from "./Week2Grid";
import Week3Grid from "./Week3Grid";
import Week4Grid from "./Week4Grid";
import Week5Grid from "./Week5Grid";
import Week6Grid from "./Week6Grid";
import AdditionalMaterials from "./AdditionalMaterials";
import CourseHeader from "./CourseHeader";

const CourseTable = () => {
  const [whichWeek, setWhichWeek] = useState(1);

  return (
    <div className="flex mx-28 mt-40">
      <div
        className={`grid gap-1 grid-cols-1 
                      h-1/2 w-96 
                      mr-4
                      justify-items-start
                      [&>button]:pt-3 [&>button]:pl-4 [&>button]:pb-2 [&>button]:text-white/[.30]
                      
                      [&>button:nth-child(${whichWeek})]:border-s-4
                      [&>button:nth-child(${whichWeek})]:border-[#0AB1BC]
                      [&>button:nth-child(${whichWeek})]:rounded-md
                      [&>button:nth-child(${whichWeek})]:bg-[#FFFFFF22]

                      [&>button]:w-full
                      [&>button]:text-left
                      
                      `}
      >
        <button
          onClick={() => {
            setWhichWeek(1);
          }}
        >
          Week 1
        </button>
        <button
          onClick={() => {
            setWhichWeek(2);
          }}
        >
          Week 2
        </button>
        <button
          onClick={() => {
            setWhichWeek(3);
          }}
        >
          Week 3
        </button>
        <button
          onClick={() => {
            setWhichWeek(4);
          }}
        >
          Week 4
        </button>
        <button
          onClick={() => {
            setWhichWeek(5);
          }}
        >
          Week 5
        </button>
        <button
          onClick={() => {
            setWhichWeek(6);
          }}
        >
          Week 6
        </button>
        <button
          onClick={() => {
            setWhichWeek(7);
          }}
        >
          Additional Materials
        </button>
      </div>
      <div>
        <div>
          <CourseHeader />
        </div>
        <div className="mt-1">
          {whichWeek === 1 ? (
            <Week1Grid />
          ) : whichWeek === 2 ? (
            <Week2Grid />
          ) : whichWeek === 3 ? (
            <Week3Grid />
          ) : whichWeek === 4 ? (
            <Week4Grid />
          ) : whichWeek === 5 ? (
            <Week5Grid />
          ) : whichWeek === 6 ? (
            <Week6Grid />
          ) : (
            <AdditionalMaterials />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseTable;
