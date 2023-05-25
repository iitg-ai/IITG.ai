import React from "react";

const GridCell = (props) => {
  return (
    <div
      onMouseOver={(event) => {
        let elem = event.target;
        while (elem.nodeName != "DIV") {
          elem = elem.parentElement;
        }

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
      dangerouslySetInnerHTML={{ __html: props.text }}
    ></div>
  );
};

export default GridCell;
