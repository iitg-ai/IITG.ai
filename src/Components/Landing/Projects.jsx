import React from "react";
import ProjectDescription from "./ProjectDescription";
import Card from "./Card";
import ProjectsCarousel from "./../ProjectsCarousel";
import GithubIcon2 from "../../Icons/GithubIcon2";

const LandingPageProjects = (props) => {
  const iitgaiGithub = "https://github.com/IITGuwahati-AI";
  return (
    <>
      <div className="ml-6 lg:ml-32 lg:mr-20 mt-40 lg:flex justify-between bg-black">
        <Card
          anchor="Projects & Publications"
          heading="What do we do?"
          description="As the AI club of our college, we actively engage in real-world projects and research initiatives. Through collaborative efforts, we explore diverse areas of AI, including Natural Language Processing, Computer Vision, and Reinforcement Learning. "
        />
        <div className="mt-4 lg:mt-0">
          <button
            className="border rounded-3xl border-slate-200 flex items-center w-48 justify-around"
            style={{ padding: "14px 20px 10px 20px" }}
            onClick={() => {
              window.open(iitgaiGithub);
            }}
          >
            <GithubIcon2 className="mr-2" />
            EXPLORE MORE
          </button>
        </div>
      </div>
      <div className="mt-10">
        <ProjectsCarousel />
      </div>

      
    </>
  );
};

export default LandingPageProjects;
