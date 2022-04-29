import React from "react";
import "./styles.scss";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__descr">
        We're a team of Profeccional cooks who are excited about their food,
        amazing skills and experience and expertiness in cooking.
      </p>
      <Logo />
    </footer>
  );
};

export default Footer;
