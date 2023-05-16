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
          description="Phasellus condimentum eros ac efficitur aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        />
        <div className="mt-4 lg:mt-0">
          <button
            className="border rounded-3xl border-slate-200 flex items-center"
            style={{ padding: "14px 24px 10px" }}
            onClick={() => {
              window.open(iitgaiGithub);
            }}
          >
            <GithubIcon2 className="inline mr-2" />
            EXPLORE MORE
          </button>
        </div>
      </div>
      <div className="mt-10">
        <ProjectsCarousel />
      </div>

      <ProjectDescription
        hidden={1}
        heading="Knowledge Base QA"
        description="Implementation of an accurate and efficient pipeline for Knowledge Base Question Answering. We optimize this pipeline for performance, latency and resource usage. The availability of diverse knowledge bases makes this task challenging."
        url="https://github.com/iitg-ai/Inter-IIT-11-Devrev"
      />
      <ProjectDescription
        hidden={1}
        heading="Vitals Extraction"
        description="Implementation of a pipeline to quickly extract and map vitals information from ICU room footage. The pipeline was composed of 4 parts : Screen Extraction, Vital Detection, Vital Recognition and finally Vital Mapping."
        url="https://github.com/iitg-ai/CloudPhysician-s-Vital-Extraction-Challenge"
      />
      <ProjectDescription
        hidden={1}
        heading="Animal-AI Olympics"
        description="We implemented a reformed architecture which uses Proximal Policy Optimization for training the agent and also uses Behavior Cloning for incorporating Expert Trajectories."
        url="https://github.com/IITGuwahati-AI/AnimalAI"
      />
    </>
  );
};

export default LandingPageProjects;
