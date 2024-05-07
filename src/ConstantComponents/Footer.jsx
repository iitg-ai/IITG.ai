import React from "react";
import FooterCards from "../Components/Footer/FooterCards";
import FooterNav from "../Components/Footer/FooterNav";

const Footer = () => {
  return (
    <div className="overflow-hidden -mt-40 lg:-mt-20">
      <div className="mb-72 lg:mb-60">
        <FooterNav />
      </div>
      <div>
        <FooterCards />
      </div>
    </div>
  );
};

export default Footer;
