import React from "react";

const Card = (props) => {
  return (
    <div className={props.className}>
      <h6
        style={{
          fontSize: 12,
          fontFamily: "Nohemi",
          opacity: 0.5,
          display: "inline",
          boxSizing: "border-box",
          padding: "10px 12px 6px 12px",
          borderRadius: "100px",
        }}
        className={
          props.flag === 1
            ? `text-[#FFFFFF] backdrop-blur-sm bg-[#282828] pl-12`
            : `pl-0`
        }
      >
        {props.anchor}
      </h6>
      <h1 className="text-[24px] lg:text-[44px] ">{props.heading}</h1>
      <p style={{ fontSize: 14, opacity: 0.7 }} className="lg:w-4/5">
        {props.description}
      </p>
    </div>
  );
};

export default Card;
