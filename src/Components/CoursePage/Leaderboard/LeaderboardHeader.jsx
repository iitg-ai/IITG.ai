import React from "react";
import "./leaderboard.css";

const LeaderboardHeader = () => {
  return (
    <div
      id="leaderboard-header"
      
      className=" [&>div]:p-4
                    [&>div]:border
                    [&>div]:rounded
                    [&>div]:text-[12px]
                    [&>div]:bg-[#FFFFFF22]
                    [&>div]:border-[#FFFFFF22]
                    gap-1                    

                    "
    >
      <div className="col-span-1">#</div>
      <div className="col-span-2">Unique ID</div>
      <div className="col-span-3">Name</div>
      <div className="col-span-2">Week 1</div>
      <div className="col-span-2">Week 2</div>
      <div className="col-span-2">Week 3</div>
      <div className="col-span-2">Hackathon 1</div>
      <div className="col-span-2">Week 5</div>
      <div className="col-span-2">Week 6</div>
      <div className="col-span-2">Hackathon 2</div>
      <div className="col-span-2">Total Score</div>
    </div>
  );
};

export default LeaderboardHeader;
