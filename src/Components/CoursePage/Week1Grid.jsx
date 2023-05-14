import React from "react";

const Week1Grid = () => {
  return (
    <div
      className="grid grid-cols-11 
                
                
                [&>div:nth-child(5n+1)]:col-span-1
                [&>div:nth-child(5n+2)]:col-span-4
                [&>div:nth-child(5n+3)]:col-span-2
                [&>div:nth-child(5n+4)]:col-span-2
                [&>div:nth-child(5n+5)]:col-span-2

                hover:[&>div]:bg-pink-500
                hover:[&>div]:text-white

                [&>div]:p-4
                [&>div]:border
                [&>div]:border-white/20
                [&>div]:rounded
                gap-1
                "
      // hover:[&>div>div:nth-child(2)]:text-indigo-500
    >
      <div>
        <p>this is week 1</p>Day 1
      </div>
      <div
        id="mydiv"
        className="fsdsdddk"
        title="darling"
        onMouseOver={() => {
          let elem = document.getElementById("mydiv");
          let coords = elem.getBoundingClientRect();
          let message = document.getElementById("hover");

          message.hidden = 0;
          message.innerText =
            "Phasellus condimentum eros ac efficitur aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
          message.style.width = coords.width * 1.5 + "px";
          message.style.marginLeft = coords.left + "px";
          message.style.marginTop = elem.offsetTop + 4 + coords.height + "px";
        }}
        onMouseOut={() => {
          const message = document.getElementById("hover");
          message.hidden = 1;
        }}
      >
        Python Environment Setup and Introduction to Python
      </div>
      <div>Anaconda Installation for Windows</div>
      <div>Anaconda Installation for Mac</div>
      <div>Anaconda Installation for Linux</div>

      <div>Day 2</div>
      <div>
        Python Data Structures like Dictionary and insight into the OS Library
      </div>
      <div>Python Dictionary</div>
      <div>OS Module</div>
      <div></div>

      <div>Day 3</div>
      <div>A complete walkthrough of the very essential Numpy Library</div>
      <div>Numpy Part - 1</div>
      <div>Numpy Part - 2</div>
      <div>Numpy Part - 3</div>

      <div>Day 4</div>
      <div>
        An introduction to the Pandas Library which is used to preprocess data
        and work with datasets
      </div>
      <div>Pandas ( Till video 13 )</div>
      <div></div>
      <div></div>

      <div>Day 5</div>
      <div>A deeper dive into the Pandas Library</div>
      <div>Pandas - Kaggle Micro Course</div>
      <div></div>
      <div></div>

      <div>Day 6</div>
      <div>
        A walkthrough of the Matplotlib Library, a multi-platform data
        visualization library built on NumPy arrays
      </div>
      <div>Matplotlib Beginner notebook 1</div>
      <div>Matplotlib Beginner notebook 2</div>
      <div>Matplotlib Documentation</div>
    </div>
  );
};

export default Week1Grid;
