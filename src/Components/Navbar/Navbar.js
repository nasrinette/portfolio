import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { scrollTo } from "../../utils/scroll";

import { IoDiamond } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  const [active, setActive] = useState("navbar");
  const [activeHeader, setAcH] = useState("header");

  const showNavBar = () => {
    setActive("navbar activeNavbar");
  };

  const hideNavbar = () => {
    setActive("navbar");
  };

  useEffect(() => {
    const addBg = () => {
      if (window.scrollY >= 10) setAcH("header activeH");
      else setAcH("header");
    };
    window.addEventListener("scroll", addBg);
    return () => window.removeEventListener("scroll", addBg);
  }, []);

  return (
    <header className={activeHeader}>
      <div className="logoDiv">
        <h1 className="logo">
          <p onClick={() => scrollTo("home")}>
            <IoDiamond className="icon" />
            PORTFOLIO
          </p>
        </h1>
      </div>
      <div className={active}>
        <ul className="navLists">
          <li className="navItem" onClick={() => scrollTo("home")}>
            <p className="navLink">Home</p>
          </li>
          <li className="navItem" onClick={() => scrollTo("skills")}>
            <p className="navLink">Skills</p>
          </li>
          <li className="navItem" onClick={() => scrollTo("projects")}>
            <p className="navLink">Projects</p>
          </li>
          <li className="navItem" onClick={() => scrollTo("contact")}>
            <p className="navLink">Contact</p>
          </li>
        </ul>

        <div onClick={hideNavbar} className="closeNavbar">
          <AiFillCloseCircle className="icon" />
        </div>
      </div>

      <div onClick={showNavBar} className="toggleNavbar">
        <CgMenuGridO className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
