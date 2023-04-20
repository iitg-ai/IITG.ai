import React, { useDebugValue } from "react";
import TeamMemberCard from "./TeamMemberCard";

const TeamPage = () => {
  return (
    <div>
      <h1>Core Team</h1>
      <div className="grid grid-cols-3">
        <TeamMemberCard />
      </div>
    </div>
  );
};

export default TeamPage;
