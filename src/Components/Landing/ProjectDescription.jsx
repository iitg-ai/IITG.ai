import React from "react";
import GithubIcon2 from "../../Icons/GithubIcon2";
import "./ProjectDescription.css";

const ProjectDescription = (props) => {
  return (
    <div
      id="project_description"
      className={`lg:ml-[162px] lg:mt-[100px] ml-[56px] mr-6 h-60`}
      hidden={props.hidden}
    >
      <h1 className="lg:text-[64px] text-[32px] ">{props.heading}</h1>
      <p
        style={{ fontSize: 14, fontWeight: 300, opacity: 0.7 }}
        className="lg:w-2/5"
      >
        {props.description}
      </p>
      <button
        className="flex items-center py-2 px-4 border-2 border-slate-300 rounded-3xl mt-4"
        onClick={() => {
          window.open(props.url);
        }}
      >
        <GithubIcon2 />
        <span style={{ fontSize: 14, marginLeft: 10 }}>VISIT</span>
      </button>
    </div>
  );
};

export default ProjectDescription;
