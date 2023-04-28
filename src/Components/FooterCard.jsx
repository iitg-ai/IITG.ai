import React from "react";

const FooterCard = (props) => {
  return (
    <div className={`${props.className}`}>
      <h1 className="ml-4 mt-2" style={{ fontSize: 38 }}>
        {props.title}
      </h1>
    </div>
  );
};

export default FooterCard;
