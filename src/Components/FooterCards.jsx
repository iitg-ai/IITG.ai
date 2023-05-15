import React from "react";
import FooterTiles1 from "./../Images/FooterTiles1.svg";
import FooterTiles2 from "./../Images/FooterTiles2.svg";
import FooterCard from "./FooterCard";
import "./FooterCard.css";
import { Link } from "react-router-dom";

const FooterCards = () => {
  return (
    <div className="bottom-0 relative container z-0 w-full">
      <Link to="publications">
        <FooterCard className="publications" title="Publications" />
      </Link>
      <Link to="projects">
        <FooterCard className="projects" title="Projects" />
      </Link>
      <Link to="team">
        <FooterCard className="team" title="Team" />
      </Link>
      <Link to="events">
        <FooterCard className="events" title="Events" />
      </Link>
      <div className="z-0 w-full">
        <img src={FooterTiles1} className="w-full	h-auto" />
        <img
          src={FooterTiles2}
          className="w-full	h-auto"
          style={{ marginTop: -8 }}
        />
      </div>
    </div>
  );
};

export default FooterCards;
