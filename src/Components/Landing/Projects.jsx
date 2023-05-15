import React from "react";
import ProjectDescription from "./ProjectDescription";
import Card from "./Card";
import ProjectsCarousel from "./../ProjectsCarousel";
import GithubIcon2 from "../../Icons/GithubIcon2";
const LandingPageProjects = (props) => {
  const iitgaiGithub = "";
  return (
    <>
      <div className="ml-6 lg:ml-32 lg:mr-20 mt-40 lg:flex justify-between bg-black">
        <Card
          anchor="Projects"
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
            EXPLORE ALL
          </button>
        </div>
      </div>
      <div className="mt-10">
        <ProjectsCarousel />
      </div>

      <ProjectDescription
        hidden={1}
        heading="Image Classifier Model"
        description="Phasellus condimentum eros ac efficitur aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />
    </>
  );
};

export default LandingPageProjects;
