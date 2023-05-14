import React, { useState } from "react";
import Logo from "../Images/Logo.svg";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const emailId = "iitgai@iitg.ac.in";
  const [justCopied, setJustCopied] = useState(false);
  const foo = () => {
    console.log(justCopied);
    navigator.clipboard.writeText(emailId);
    setTimeout(() => {
      setJustCopied((prev) => {
        return !prev;
      });
    }, 5000);
    setJustCopied((prev) => {
      return !prev;
    });
  };
  return (
    <div className="flex items-center justify-between py-10 px-20 relative">
      <img src={Logo} />
      <nav className="[&>a]:m-4 [&>a]:font-light [&>a]:text-[#FFFFFF]">
        <Link to="/">Home</Link>
        <Link to="projects">Projects</Link>
        <Link to="publications">Publications</Link>
        <Link to="events">Events</Link>
        <Link to="team">Team</Link>
        <Link to="mlrw">MLRW</Link>
        <Link to="coursePage">Summer Course</Link>
      </nav>
      <div className="flex flex-col items-center">
        <button
          className="rounded-3xl px-6 pt-3.5 pb-2.5 border"
          style={{ fontFamily: "Nohemi" }}
          onClick={() => {
            foo();
          }}
        >
          GET IN TOUCH
        </button>
        <label
          className={`mt-14 absolute ${justCopied == 0 ? "hidden" : "visible"}`}
        >
          Copied to clipboard!
        </label>
      </div>
    </div>
  );
};

export default MainHeader;
