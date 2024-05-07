import React from "react";
import devansh from "./devansh.jpg";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedInIcon from "../../Icons/LinkedInIcon";

const TeamMemberCard = () => {
  return (
    <div className="flex flex-col items-center w-full p-4">
      <img src={devansh} className="h-36 w-36 " />
      <p className="text-xl font-bold">Devansh Bhardwaj</p>
      <p>Competitions Head</p>
      <div className="flex justify-center items-center flex-row">
        <a href="https://github.com/devansh-bhardwaj">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/devansh2202">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default TeamMemberCard;
