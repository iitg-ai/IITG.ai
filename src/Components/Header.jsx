import React from "react";
import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between">
      <img src={Logo} />
      <nav>
        <Link to="/">Home</Link>
        <Link to="coursePage">CoursePage</Link>
      </nav>
      <div>
        <button className="rounded-3xl px-4 py-2">Get in Touch</button>
      </div>
    </div>
  );
};

export default Header;
