import React from "react";
import Card from "../Landing/Card";
import WeekDescCard from "./WeekDescCard";

const CourseCards = () => {
  return (
    <div className="mx-32">
      <Card
        className=""
        flag={0}
        anchor="The Process"
        heading="How does it work?"
        description="Phasellus condimentum eros ac efficitur aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />
      <div className="mt-8">
        <div className="flex">
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
            whichWeek="Week 1"
            description="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
          />
          <WeekDescCard
            tag1="SUPERVISED LEARNING"
            tag2="SUPERVISED LEARNING"
            tag3="SUPERVISED LEARNING"
            whichWeek="Week 1"
            description="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
          />
        </div>
        <div className="flex ml-8 -mr-8 mt-4">
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
            whichWeek="Week 1"
            description="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
          />
          <WeekDescCard
            tag1="SUPERVISED LEARNING"
            tag2="SUPERVISED LEARNING"
            tag3="SUPERVISED LEARNING"
            whichWeek="Week 1"
            description="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
