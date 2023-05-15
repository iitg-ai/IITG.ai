import React from "react";
import Logo from "../../Images/Logo.svg";

const 
CourseHeader = () => {
  const formLink = "#";
  const foo = () => {
    window.open(formLink);
  };

  const discordInvite = "";

  return (
    <div className="flex items-center justify-between py-10 px-20 relative">
      <img src={Logo} />
      <nav className="[&>a]:m-4 [&>a]:font-light [&>a]:text-[#FFFFFF]">
        <a href="#about">About</a>
        <a href="#curriculum">Curriculum</a>
        <a href={discordInvite} target="_blank" rel="noopener noreferrer">
          Discord
        </a>
      </nav>
      <div className="flex flex-col items-center">
        <button
          className="rounded-3xl px-6 pt-3.5 pb-2.5 border"
          style={{ fontFamily: "Nohemi" }}
          onClick={() => {
            foo();
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default CourseHeader;
