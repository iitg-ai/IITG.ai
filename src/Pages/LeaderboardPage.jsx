import React from "react";
import Leaderboard from "../Components/CoursePage/Leaderboard/Leaderboard";
import CourseHeader from "../Components/CoursePage/MainPage/CoursePageHeader";

const LeaderboardPage = () => {
  return (
    <div>
      <CourseHeader />
      <div className="mx-6 lg:mx-[72px] mt-[60px] lg:mt-20">
        <p className="text-white/[0.7] text-[14px] max-lg:hidden">
          IITG.ai’s Summer Course for AI
        </p>
        <p className="text-[32px] lg:text-[64px] text-white mb-4  ">
          Leaderboard
        </p>
        <p className="text-white/[0.7] lg:hidden max-lg:-mt-4">
          Open on desktop to see the leaderboard.
        </p>

        <Leaderboard />
      </div>
    </div>
  );
};

export default LeaderboardPage;
