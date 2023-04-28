import React from "react";

const CourseHeader = () => {
  return (
    <div
      className="grid grid-cols-11 [&>div]:p-4
                    [&>div]:border
                    [&>div]:rounded
                    [&>div]:bg-[#FFFFFF22]
                    [&>div]:border-[#FFFFFF22]
                    gap-1                    

                    hover:[&>div]:bg-pink-500
                    hover:[&>div]:text-white"
    >
      <div className="col-span-1">Week</div>
      <div className="col-span-4">Contents</div>
      <div className="col-span-2">Task 1</div>
      <div className="col-span-2">Task 2</div>
      <div className="col-span-2">Task 3</div>
    </div>
  );
};

export default CourseHeader;
