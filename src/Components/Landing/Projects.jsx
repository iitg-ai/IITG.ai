import React from "react";
import ProjectDescription from "./ProjectDescription";
import Card from "./Card";
import ProjectsCarousel from "./../ProjectsCarousel";

const LandingPageProjects = (props) => {
  return (
    <>
      <div className="ml-32 mr-20 mt-40 flex justify-between bg-black">
        <Card
          anchor="Projects"
          heading="What do we do?"
          description="Phasellus condimentum eros ac efficitur aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        />
        <div>
          <button
            className="border rounded-3xl border-slate-200"
            style={{ padding: "14px 24px 10px" }}
          >
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
