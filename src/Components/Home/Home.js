import React from "react";
import "./home.scss";
import { FiDownloadCloud } from "react-icons/fi";
import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import { BsMouse, BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { scrollTo } from "../../utils/scroll";

const Home = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/Nazrin_Nasirova_UI_UX.pdf';
        link.download = 'Nazrin_Nasirova_UI_UX.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      

  return (
    <div id="home" className="home">
      <div className="img-container">
        <div className="home-elms">
          <div className="introText">Hello World ! My name is</div>

          <h1 className="title">Nazrin Nasirova</h1>
          <p className="subTitle">
            A self-taught Web designer and Front-end developer
          </p>

          <div className="lowerHomeSec">
          <div className="btnDiv">
    <button className="cvBtn" onClick={handleDownload}>
      Download CV{" "}
      <span className="downld-icon">
        <FiDownloadCloud />
      </span>
    </button>
  </div>

            <div onClick={() => scrollTo("skills")} className="scrollDiv">
              <div className="flex">
                <span>
                  <BsMouse className="altIcon" />
                </span>
                <h6 className="scroll">Scroll Down</h6>
                <span className="arrow">
                  <BsArrowDown />
                </span>
              </div>
            </div>
          </div>
        </div>

        <img
          className="me"
          src={process.env.PUBLIC_URL + "/me.png"}
          alt="My image"
        />
      </div>

      <div className="front-elms">
        <div className="icons-container">
          <div className="icons">
            <a className="altIcon" href='https://www.linkedin.com/in/nazrin-nasirova-46201920b' target="_blank">
              <SiLinkedin />
            </a>
            <a className="altIcon" href="https://www.instagram.com/nasrinettee" target="_blank">
              <SiInstagram />
            </a>
            <a className="altIcon" href="https://github.com/nasrinette" target="_blank">
              <SiGithub />
            </a>
          </div>
        </div>

        <div className="email-container">
          <a href={`mailto:${"nsrvansrn@gmail.com"}`}
        target="_blank"
        rel="noopener noreferrer" className="email-text">nsrvansrn@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
