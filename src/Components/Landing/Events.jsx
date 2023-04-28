import React from "react";
import Card from "./Card";
import temp1 from "../../Images/temp1.svg";
import temp2 from "../../Images/temp2.svg";
const Events = () => {
  return (
    <div className="mx-20 mt-40 bg-black flex justify-between">
      <div className="w-1/2">
        <img src={temp1} />
        <Card
          className="ml-8 -mt-44"
          flag={1}
          anchor="Keynotes"
          heading="MLRW"
          description="Phasellus condimentum eros ac efficitur aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        />
      </div>

      <div className="self-end">
        <Card
        className="ml-10 mb-10"
          anchor="Events"
          heading="How do we give back?"
          description="Phasellus condimentum eros ac efficitur aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        />
        <div >
          <img src={temp2} />
          <Card
            className="ml-24 -mt-44"
            flag={1}
            anchor="Keynotes"
            heading="MLRW"
            description="Phasellus condimentum eros ac efficitur aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
