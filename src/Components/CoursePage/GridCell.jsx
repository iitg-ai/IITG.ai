import React from "react";

const GridCell = (props) => {
  return (
    <div
      onMouseOver={(event) => {
        let elem = event.target;
        let coords = elem.getBoundingClientRect();
        let message = document.getElementById("hover");

        message.hidden = props.message === "" ? 1 : 0;
        message.innerText = props.message;
        message.style.width = coords.width * 1.5 + "px";
        message.style.marginLeft = coords.left + "px";
        message.style.marginTop = elem.offsetTop + 4 + coords.height + "px";
      }}
      onMouseOut={() => {
        const message = document.getElementById("hover");
        message.hidden = 1;
      }}
      onMouseDown={() => {
        window.open(props.url);
      }}
      className={props.url == "" ? "" : "cursor-pointer"}
    >
      {props.text}
    </div>
  );
};

export default GridCell;
