import React from "react";
import TeamMemberCard from "../Components/TeamMemberCard";

const TeamPage = () => {
  return (
    <div className="flex justify-center">
      <h1 className="self-center text-4xl font-bold ml-10 my-10">Core Team</h1>
      <div className="grid grid-cols-3 w-4/5">
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
      </div>
    </div>
  );
};

export default TeamPage;
