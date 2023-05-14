import React from "react";
import GithubIcon from "../../Icons/GithubIcon";

const ProjectDescription = (props) => {
  return (
    <div style={{ marginLeft: 162, marginTop:100 }}>
      <h1 style={{ fontSize: 64, fontWeight: 400 }}>{props.heading}</h1>
      <p style={{ fontSize: 14, fontWeight: 300, opacity: 0.7, width: "40%" }}>
        {props.description}
      </p>
      <button className="flex items-center py-2 px-4 border-2 border-slate-300 rounded-3xl mt-4">
        <GithubIcon />
        <span style={{ fontSize: 14, marginLeft: 10 }}>VISIT</span>
      </button>
    </div>
  );
};

export default ProjectDescription;
