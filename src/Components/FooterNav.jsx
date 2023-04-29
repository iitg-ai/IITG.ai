import React from "react";
import { Link } from "react-router-dom";
import "./FooterNav.css";
import QuotationIcon from "../Icons/QuotationIcon";

const FooterNav = () => {
  return (
    <div className="flex justify-between mx-32">
      <QuotationIcon className="absolute -ml-8 -mt-8" />
      <h1 className="quote">
        There is no other place like IITG.ai if you love what you do
      </h1>
      <div className="flex w-1/3 justify-between">
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
          <Link to="course">MLAI</Link>
        </div>
        <div className="flex flex-col [&>*]:my-2">
          <h3 className="h3">Socials</h3>
          <a href="">INSTAGRAM</a>
          <a href="">GITHUB</a>
          <a href="">LINKEDIN</a>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
