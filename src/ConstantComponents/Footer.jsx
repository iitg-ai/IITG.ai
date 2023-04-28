import React from "react";
import FooterCards from "../Components/FooterCards";
import FooterNav from "../Components/FooterNav";

const Footer = () => {
  return (
    <div className="overflow-y-hidden">
      <div className="mb-60">
        <FooterNav />
      </div>
      <div>
        <FooterCards />
      </div>
    </div>
  );
};

export default Footer;
