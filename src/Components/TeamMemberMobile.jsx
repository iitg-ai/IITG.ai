import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import "./TeamMemberMobile.css";

const TeamMemberMobile = (props) => {
  return (
    <div className="box-mobile">
      <div
        style={{
          borderRadius: "12px 0 0 0",
          width: 192,
          clipPath:
            "polygon(0 0, 100% 0, 100% 100%, 46px 100%, 0 calc(100% - 46px))",
        }}
      >
        <img
          src="/team/devansh.jpg"
          style={{ maxHeight: 192, width: "auto", borderTopLeftRadius: 12 }}
        />
      </div>
      <div className="self-start h-full flex flex-col justify-between">
        <div>
          <div className="flex flex-row items-center name ">
            <p> {props.name}</p>
            <a href={props.githubUrl} className="ml-4">
              <GithubIcon />
            </a>
          </div>
          <p className="por">{props.por}</p>
        </div>
        <p className="one-liner mt-10 lg:mt-0">{props.oneLiner}</p>
      </div>
    </div>
  );
};

export default TeamMemberMobile;
