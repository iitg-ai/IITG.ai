import React, { useEffect, useState } from "react";
import Leaderboard from "../Components/CoursePage/Leaderboard/Leaderboard";
import CourseHeader from "../Components/CoursePage/CourseHeader";

const LeaderboardPage = () => {
  return (
    <div>
      <CourseHeader />
      <div className="mx-[72px] mt-20">
        <p className="text-white/[0.7] text-[14px]">
          IITG.ai’s Summer Course for AI
        </p>
        <p className="text-[64px] text-white mb-4">Leaderboard</p>
        <Leaderboard />
      </div>
    </div>
  );
};

export default LeaderboardPage;
