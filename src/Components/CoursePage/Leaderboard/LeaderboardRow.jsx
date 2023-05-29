import React from "react";
import "./leaderboard.css";

const LeaderboardRow = (props) => {
  const hash = props.index;
  const uniqueID = props.uniqueID;
  const name = props.name;
  let w1 = props.w1 ? props.w1 : 0;
  w1 = parseInt(w1);
  const w2 = props.w2 ? props.w2 : 0;
  const w3 = props.w3 ? props.w3 : 0;
  const w5 = props.w5 ? props.w5 : 0;
  const w6 = props.w6 ? props.w6 : 0;
  const hack1 = props.hack1 ? props.hack1 : 0;
  const hack2 = props.hack2 ? props.hack2 : 0;
  const total = w1 + w2 + w3 + w5 + w6 + hack1 + hack2;

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
                    mt-1
                    "
    >
      <div className="col-span-1">#{hash}</div>
      <div className="col-span-2">{uniqueID}</div>
      <div className="col-span-3">{name}</div>
      <div className="col-span-2">{w1}</div>
      <div className="col-span-2">{w2}</div>
      <div className="col-span-2">{w3}</div>
      <div className="col-span-2">{hack1}</div>
      <div className="col-span-2">{w5}</div>
      <div className="col-span-2">{w6}</div>
      <div className="col-span-2">{hack2}</div>
      <div className="col-span-2">{total}</div>
    </div>
  );
};

export default LeaderboardRow;
