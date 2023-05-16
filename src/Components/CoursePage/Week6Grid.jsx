import React from "react";

const Week6Grid = () => {
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
      {/* <div className="grid grid-cols-5"> */}
      <div>
        <p>this is week 6</p>Day 1
      </div>
      <div>Python Environment Setup and Introduction to Python</div>
      <div>Anaconda Installation for Windows</div>
      <div>Anaconda Installation for Mac</div>
      <div>Anaconda Installation for Linux</div>
      {/* </div> */}

      {/* <div className="grid grid-cols-5"> */}
      <div>Day 2</div>
      <div>
        Python Data Structures like Dictionary and insight into the OS Library
      </div>
      <div>Python Dictionary</div>
      <div>OS Module</div>
      <div></div>
      {/* </div> */}

      {/* <div className="grid grid-cols-5"> */}
      <div>Day 3</div>
      <div>A complete walkthrough of the very essential Numpy Library</div>
      <div>Numpy Part - 1</div>
      <div>Numpy Part - 2</div>
      <div>Numpy Part - 3</div>
      {/* </div> */}

      {/* <div className="grid grid-cols-5"> */}
      <div>Day 4</div>
      <div>
        An introduction to the Pandas Library which is used to preprocess data
        and work with datasets
      </div>
      <div>Pandas ( Till video 13 )</div>
      <div></div>
      <div></div>
      {/* </div> */}

      {/* <div className="grid grid-cols-5"> */}
      <div>Day 5</div>
      <div>A deeper dive into the Pandas Library</div>
      <div>Pandas - Kaggle Micro Course</div>
      <div></div>
      <div></div>
      {/* </div> */}

      {/* <div className="grid grid-cols-5"> */}
      <div>Day 6</div>
      <div>
        A walkthrough of the Matplotlib Library, a multi-platform data
        visualization library built on NumPy arrays
      </div>
      <div>Matplotlib Beginner notebook 1</div>
      <div>Matplotlib Beginner notebook 2</div>
      <div>Matplotlib Documentation</div>
      {/* </div> */}
    </div>
  );
};

export default Week6Grid;
