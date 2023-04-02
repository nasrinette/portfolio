import React, { useState, useEffect } from "react";
import './navbar.scss'
import { Link} from "react-router-dom";

import {IoDiamond} from "react-icons/io5"
import {AiFillCloseCircle} from "react-icons/ai"
import {CgMenuGridO} from "react-icons/cg"

const Navbar = () => {

    const [active, setActive] = useState("navbar")
    const [activeHeader, setAcH] = useState("header");

    const showNavBar = () => {
        setActive('navbar activeNavbar')
    }
    const hideNavbar = () => {
        setActive("navbar")
    }
    useEffect(() => {
        const addBg = () => {
            if(window.scrollY>=10) 
                setAcH('header activeH')
            else 
                setAcH('header')
        }
        window.addEventListener('scroll', addBg)
        return () => window.removeEventListener('scroll', addBg)
    }, []);

    return(
        <header className={activeHeader}>
            <div className="logoDiv">   
                <h1 className="logo">
                    <a href="#home">
                    <IoDiamond className="icon"/>PORTFOLIO
                    </a>                  
                </h1>
                
     
            </div>
        <div className={active}>
            <ul className="navLists">
                <li className="navItem">
                    <Link to="/" className="navLink">Home </Link>
                </li>
                <li className="navItem">
                    <Link to="/skills" className="navLink">Skills </Link>
                </li>
                <li className="navItem">
                    <Link to="/projects" className="navLink">Projects </Link>
                </li>
                <li className="navItem">
                    <Link to="/contact" className="navLink">Contact </Link>
                </li>

            </ul>
        
        <div onClick={hideNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
        </div>
         </div>

       <div onClick={showNavBar} className="toggleNavbar">
                <CgMenuGridO className="icon"/>
       </div>


        </header>
    )
}

export default Navbar;