import React from "react";
import { Link } from "react-router-dom";
import "./FooterNav.css";
import QuotationIcon from "../Icons/QuotationIcon";

const FooterNav = () => {
  const INSTAGRAM = "https://instagram.com/iitg.ai";
  const GITHUB = "https://github.com/IITGuwahati-AI";
  const LINKEDIN = "https://www.linkedin.com/company/iitg-ai/";

  return (
    <div className="mx-6 pb-6 lg:flex lg:justify-between lg:mx-32">
      <QuotationIcon className="absolute lg:-ml-8 -mt-8 w-10 -ml-4" />
      <h1 className="quote lg:w-1/2 lg:text-[64px] text-[32px]">
        There is no other place like IITG.ai if you love what you do
      </h1>
      <div className="mt-10 flex w-full lg:w-1/3 lg:mt-0 justify-between">
        <div className="flex flex-col [&>*]:my-2">
          <h3 className="h3">Links</h3>
          <Link to="projects">PROJECTS</Link>
          <Link to="publications">PUBLICATIONS</Link>
          <Link to="events">EVENTS</Link>
          <Link to="team">TEAM</Link>
        </div>
        <div className="flex flex-col [&>*]:my-2">
          <h3 className="h3">Initiatives</h3>
          <Link to="mlrw">MLRW</Link>
          <Link to="coursePage">MLAI</Link>
        </div>
        <div className="flex flex-col [&>*]:my-2">
          <h3 className="h3">Socials</h3>
          <a href={INSTAGRAM}>INSTAGRAM</a>
          <a href={GITHUB}>GITHUB</a>
          <a href={LINKEDIN}>LINKEDIN</a>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
