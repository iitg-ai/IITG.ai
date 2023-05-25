import React from "react";
import "./leaderboard.css";

const LeaderboardRow = (props) => {
  return (
    <div
      id="leaderboard-row"
      
      className=" [&>div]:p-4
                    [&>div]:border
                    [&>div]:rounded
                    [&>div]:text-[12px]
                    [&>div]:bg-[#FFFFFF22]
                    [&>div]:border-[#FFFFFF22]
                    gap-1                    

                    "
    >
      <div className="col-span-1">#{props.hash}</div>
      <div className="col-span-2">{props.uniqueID}</div>
      <div className="col-span-3">{props.name}</div>
      <div className="col-span-2">{props.w1}</div>
      <div className="col-span-2">{props.w2}</div>
      <div className="col-span-2">{props.w3}</div>
      <div className="col-span-2">{props.hack1}</div>
      <div className="col-span-2">{props.w5}</div>
      <div className="col-span-2">{props.w6}</div>
      <div className="col-span-2">{props.hack2}</div>
      <div className="col-span-2">{props.total}</div>
    </div>
  );
};

export default LeaderboardRow;
