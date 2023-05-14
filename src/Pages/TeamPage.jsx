import React from "react";
import TeamMemberCard from "../Components/TeamMemberCard";
import MainHeader from "../ConstantComponents/MainHeader";
import Team from "../Components/Team";

const TeamPage = () => {
  return (
    <div style={{ backgroundColor: "#0E0D0E" }}>
      <MainHeader />
      <Team />
    </div>
  );
};

export default TeamPage;
