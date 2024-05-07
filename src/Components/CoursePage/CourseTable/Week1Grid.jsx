import React from "react";
import GridCell from "./GridCell";
import { Week1contents } from "../../../Constants/CourseContents/Week1contents";

const Week1Grid = () => {
  const Cells = Week1contents.map((object, index) => {
    return (
      <GridCell
        key={index}
        text={object.text}
        url={object.url}
        message={object.message}
      />
    );
  });

  return (
    <div
      className="grid grid-cols-11 
                
                [&>div:nth-child(5n+1)]:col-span-1
                [&>div:nth-child(5n+2)]:col-span-4
                [&>div:nth-child(5n+3)]:col-span-2
                [&>div:nth-child(5n+4)]:col-span-2
                [&>div:nth-child(5n+5)]:col-span-2

                hover:[&>div]:bg-[#1a1a1a]

                [&>div]:p-4
                [&>div]:border
                [&>div]:border-white/20
                [&>div]:rounded
                gap-1
                "
    >
      {Cells}
    </div>
  );
};

export default Week1Grid;
