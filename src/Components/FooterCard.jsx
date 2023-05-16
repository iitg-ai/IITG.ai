import React from "react";

const FooterCard = (props) => {
  return (
    <div className={`${props.className}`}>
      <h1 className="ml-4 mt-2 text-[20px] lg:text-[38px] ">
        {props.title}
      </h1>
    </div>
  );
};

export default FooterCard;
