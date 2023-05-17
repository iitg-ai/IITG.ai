import React from "react";
import Card from "./Card";
import temp1 from "../../Images/temp1.svg";
import temp2 from "../../Images/temp2.svg";
import { Link } from "react-router-dom";
const Events = () => {
  return (
    <>
      {/* desktop view */}
      <div className="mx-20 mt-28 flex flex-row justify-between max-lg:hidden">
        <div className="w-1/2">
          <Link to="/coursePage">
            <img src="images/mlrw.png" />
          </Link>
          <Card
            // className="ml-8 -mt-72 mr-8"
            className="absolute w-2/5 ml-8 -mt-72 mr-8"
            flag={1}
            anchor="KEYNOTES"
            heading="MLRW"
            description="MLRW (Machine Learning Research Week) is an innovative platform designed to provide students with a unique opportunity to engage with and learn from high-achieving individuals in the field of Artificial Intelligence (AI) and Machine Learning (ML). This week-long event brings together renowned researchers, industry professionals, and educators who have made significant contributions to the field, offering students an invaluable chance to broaden their knowledge and expand their network within the AI community."
          />
        </div>

        <div className="w-1/2 self-end">
          <Card
            className="ml-10 mb-10"
            anchor="Events"
            heading="How do we give back?"
            description="We conduct informative workshops, challenging hackathons, insightful conferences and useful projects as well."
          />
          <div>
            <Link to="mlrw">
              <img src="images/mlai.png" />
            </Link>
            <Card
              // className="ml-20 -mt-56 "
            className="absolute ml-20 -mt-[200px]"
              flag={1}
              anchor="COURSE"
              heading="ML.AI"
              description="The course offers a comprehensive blend of high-quality resources including engaging videos, informative blogs, weekly assignments, and exciting hackathons to assess your knowledge and skills. The course is one of a kind, free, open for all and has no prerequisites."
            />
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="lg:hidden mx-6 mt-28 bg-black">
        <Card
          flag={0}
          anchor="Events"
          heading="How do we give back?"
          description="Phasellus condimentum eros ac efficitur aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        />
        <div className="mt-8">
          <img src={temp1} />
          <Card
            className="-mt-48 p-6"
            flag={1}
            anchor="Keynotes"
            heading="MLRW"
            description="Phasellus condimentum eros ac efficitur aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          />
        </div>

        <div className="mt-6">
          <img src={temp2} />
          <Card
            className="-mt-48 p-6"
            flag={1}
            anchor="Keynotes"
            heading="MLRW"
            description="Phasellus condimentum eros ac efficitur aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          />
        </div>
      </div>
    </>
  );
};

export default Events;
