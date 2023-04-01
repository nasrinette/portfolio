import React from "react";
import './home.scss'
import {FiDownloadCloud} from "react-icons/fi"
import {SiLinkedin,SiInstagram, SiGithub} from "react-icons/si"
import {BsMouse, BsArrowDown} from 'react-icons/bs'
const Home = ()=>{
    return(
        <div id="home" className="home">
            <div className="img-container">

            <div className="home-elms">

            <div className="introText">
            Hello World ! My name is
            </div>

            <h1 className="title">Nazrin Nasirova</h1>
            <p className="subTitle">A self-taught Web designer and Front-end developer</p>
            
            <div className="lowerHomeSec">
                <div className="btnDiv">
                    <button className="cvBtn">Download CV  <span className="downld-icon"><FiDownloadCloud /></span></button>
                </div>
                
                <div className="scrollDiv">
                    <a href="#skills" className="flex"><span><BsMouse className="altIcon"/></span>
                    <h6 className="scroll">Scroll Down</h6> 
                    <span className="arrow"><BsArrowDown /></span></a>
                </div>
            </div>
            
            </div>

            <img className="me" src={process.env.PUBLIC_URL + '/me.png'} alt="My image" />
    </div>


           <div className="front-elms">
                <div className="icons-container">
                <div className="icons">
                    <a className="altIcon" href="" target=""><SiLinkedin/></a>
                    <a className="altIcon" href="" target=""><SiInstagram/></a>
                    <a className="altIcon" href="" target=""><SiGithub/></a>
                </div>   
                </div>

                <div className="email-container">
                <span className="email-text">nsrvansrn@gmail.com</span>
                </div>
            </div>

        </div>
    )
}

export default Home;