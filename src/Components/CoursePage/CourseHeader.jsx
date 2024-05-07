import React from "react";
import Logo from "../../Images/Logo.svg";
import { DeployedUrl } from "../../Constants/Deployed";
import { Link } from "react-router-dom";

const CourseHeader = () => {
  const regFormLink = "https://forms.gle/z7EgSHUKU2mHmih59";

  const foo = () => {
    window.open(regFormLink);
  };

  const discordInvite = "https://discord.gg/f77NPvPzwB";

  const currUrl = window.location.href;
  const homePageUrl = currUrl.replace("/coursePage", "");

  return (
    <div className="flex items-center justify-between py-6 px-6 lg:px-20 lg:py-10 relative">
      <img src={Logo} />
      <nav className="[&>a]:m-4 [&>a]:font-light [&>a]:text-[#FFFFFF] hidden lg:inline">
        <a href={homePageUrl}>IITG.ai</a>
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
