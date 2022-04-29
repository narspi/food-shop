import React from "react";
import "./styles.scss";
import LogoImg from "./logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <div className="logo-head">
        <img className="logo-img" src={LogoImg} alt="logo" />
        <span>
          <b>Taste</b>
        </span>
      </div>
      <p className="logo-descr">
        <b>Restaurant & BBQ</b>
      </p>
    </Link>
  );
};

export default Logo;
