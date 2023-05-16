import React from "react";
import Card from "../Landing/Card";
import WeekDescCard from "./WeekDescCard";
import Hackathon1 from "../../Images/Hackathon1.svg";
import Hackathon2 from "../../Images/Hackathon2.svg";

const CourseCards = () => {
  return (
    <div className="mx-20">
      <Card
        className=""
        flag={0}
        anchor="The Process"
        heading="How does it work?"
        description="Phasellus condimentum eros ac efficitur aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />
      <div className="mt-8">
        <div className="flex justify-between">
          <WeekDescCard
            tag1="SUPERVISED LEARNING"
            tag2="SUPERVISED LEARNING"
            tag3="SUPERVISED LEARNING"
            whichWeek="Week 1"
            description="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
          />
          <WeekDescCard
            tag1="SUPERVISED LEARNING"
            tag2="SUPERVISED LEARNING"
            tag3="SUPERVISED LEARNING"
            whichWeek="Week 2"
            description="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
          />
          <WeekDescCard
            tag1="SUPERVISED LEARNING"
            tag2="SUPERVISED LEARNING"
            tag3="SUPERVISED LEARNING"
            whichWeek="Week 3"
            description="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
          />
          <img src={Hackathon1} />
        </div>
        <div className="grid grid-cols-3 ml-40 gap-24 mt-4 h-50">
          <WeekDescCard
            tag1="SUPERVISED LEARNING"
            tag2="SUPERVISED LEARNING"
            tag3="SUPERVISED LEARNING"
            whichWeek="Week 5"
            description="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
          />
          <WeekDescCard
            tag1="SUPERVISED LEARNING"
            tag2="SUPERVISED LEARNING"
            tag3="SUPERVISED LEARNING"
            whichWeek="Week 6"
            description="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
          />
          <img src={Hackathon2} />
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
