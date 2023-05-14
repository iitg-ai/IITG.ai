import React from "react";
import FooterCards from "../Components/FooterCards";
import FooterNav from "../Components/FooterNav";

const Footer = () => {
  return (
    <div className="overflow-y-hidden w-full">
      <div className="mb-60 w-full">
        <FooterNav />
      </div>
      <div className="w-full">
        <FooterCards />
      </div>
    </div>
  );
};

export default Footer;
