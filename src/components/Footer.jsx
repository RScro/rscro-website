import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between mx-auto sm:flex-none sm:text-center flex-wrap">
        <span>
          <img src={logo} width={100} height={100} />
        </span>
        <p className="text-slate-600">
          Copyright Ⓒ 2023 RScro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
