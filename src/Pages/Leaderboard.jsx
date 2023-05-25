import React from "react";
import LeaderboardHeader from "../Components/CoursePage/Leaderboard/LeaderboardHeader";
import LeaderboardBody from "../Components/CoursePage/Leaderboard/LeaderboardBody";

const Leaderboard = () => {
  return (
    <div className="grid grid-cols-1">
      <div>
        <LeaderboardHeader />
      </div>
      <div>
        <LeaderboardBody />
      </div>
    </div>
  );
};

export default Leaderboard;
