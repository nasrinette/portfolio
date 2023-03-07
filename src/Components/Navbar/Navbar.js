import React from "react";
import './navbar.css'

import {SlDiamond} from "react-icons/sl"

const Navbar = ()=>{
    return(
        <header className="header">
            <div className="logoDiv">   
                <h1 className="logo"><a href="#home">
                    <SlDiamond className="icon"/>PORTFOLIO
                </a>                  
                </h1>
            </div>
        <div className="navbar">
            <ul className="navLists">
                <li className="navItem">
                    <a href="#about" className="navLink">About </a>
                </li>
                <li className="navItem">
                    <a href="#skills" className="navLink">Skills </a>
                </li>
                <li className="navItem">
                    <a href="#projects" className="navLink">Projects </a>
                </li>
                <li className="navItem">
                    <a href="#contact" className="navLink">Contact </a>
                </li>

            </ul>
        </div>

        </header>
    )
}

export default Navbar;