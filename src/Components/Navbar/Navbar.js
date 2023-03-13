import React, { useState } from "react";
import './navbar.scss'

import {IoDiamond} from "react-icons/io5"
import {AiFillCloseCircle} from "react-icons/ai"
import {CgMenuGridO} from "react-icons/cg"

const Navbar = ()=>{
    const [active, setActive] = useState("navbar")
    const showNavBar= ()=>{
        setActive('navbar activeNavbar')
    }
    const hideNavbar = ()=>{
        setActive("navbar")
    }
    const [activeHeader, setAcH] = useState("header");
    const addBg = ()=>{
        if(window.scrollY>=10){
            setAcH('header activeH')
        }
        else{
            setAcH('header')
        }
    }
    window.addEventListener('scroll', addBg)

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
                    <a href="#home" className="navLink">Home </a>
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