import React, { useEffect, useState } from "react";
import Week1Grid from "./Week1Grid";
import Week2Grid from "./Week2Grid";
import Week3Grid from "./Week3Grid";
import Week5Grid from "./Week5Grid";
import Week6Grid from "./Week6Grid";
import AdditionalMaterials from "./AdditionalMaterials";
import TableHeader from "./TableHeader";
import "./navstyles.css";

const CourseTable = () => {
  const [whichWeek, setWhichWeek] = useState(1);
  const changeWeek = (newWeek) => {
    // console.log(document.getElementById("btn-panel").childNodes);

    setWhichWeek(newWeek);

    const btns = document.getElementById("btn-panel").childNodes;
    btns.forEach((btn) => {
      if (btn.className === "btn-enabled") {
        btn.style.color = "rgba(255, 255, 255, 0.5)";
        btn.style.backgroundColor = "black";
        btn.style.borderLeftColor = "black";
      }
    });
    const targetBtn =
      document.getElementById("btn-panel").childNodes[newWeek - 1];
    targetBtn.style.borderLeftColor = "#0AB1BC";
    targetBtn.style.backgroundColor = "#FFFFFF22";
    targetBtn.style.color = "white";
  };

  // changeWeek(2);
  useEffect(() => {
    changeWeek(5);
  }, []);

  return (
    <div className="lg:flex w-full">
      <div
        id="btn-panel"
        className={`grid gap-1 grid-cols-1 
                      h-1/2 w-auto
                      mr-4
                      justify-items-start

                      [&>button:nth-child(${1})]:border-[#0AB1BC]
                      [&>button:nth-child(${1})]:bg-[#FFFFFF22]
                      [&>button:nth-child(${1})]:text-white
                      
                      [&>button]:pt-3 [&>button]:px-4 [&>button]:pb-2 
                      
                      [&>button]:w-full
                      [&>button]:text-left
                      [&>button]:rounded-md

                      `}
      >
        <button
          className="btn-enabled"
          onClick={() => {
            changeWeek(1);
          }}
        >
          Week 1
        </button>
        <button
          className="btn-enabled"
          onClick={() => {
            changeWeek(2);
          }}
        >
          Week 2
        </button>
        <button
          className="btn-enabled"
          onClick={() => {
            changeWeek(3);
          }}
        >
          Week 3
        </button>
        {/* <button
          disabled
          className="btn-disabled"
          onClick={() => {
            setWhichWeek(4);
          }}
        >
          Week 4 (coming soon)
        </button> */}
        <button
          className="btn-enabled"
          onClick={() => {
            changeWeek(4);
          }}
        >
          Week 5
        </button>
        <button
          className="btn-enabled"
          onClick={() => {
            changeWeek(5);
          }}
        >
          Week 6
        </button>
        <button
          disabled
          className="btn-disabled"
          onClick={() => {
            changeWeek(6);
          }}
        >
          Additional Materials
        </button>
      </div>

      {whichWeek !== 0 && (
        <div className="w-4/5 max-lg:hidden">
          <div>
            <TableHeader />
          </div>
          <div className="mt-1">
            {whichWeek === 1 ? (
              <Week1Grid />
            ) : whichWeek === 2 ? (
              <Week2Grid />
            ) : whichWeek === 3 ? (
              <Week3Grid />
            ) : whichWeek === 4 ? (
              <Week5Grid />
            ) : whichWeek === 5 ? (
              <Week6Grid />
            ) : whichWeek === 6 ? (
              <Week6Grid />
            ) : (
              <AdditionalMaterials />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseTable;
