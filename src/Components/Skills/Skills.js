import React from "react";
import "./skills.scss";
import { AiFillHtml5, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import {
  SiTailwindcss,
  SiCss3,
  SiBootstrap,
  SiSass,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-cont">
        <h1 className="my-skills">MY SKILLS</h1>

        <div className="pos-cont">
          <div className="pos-elements">
            <h3 className="skill-name">Frontend</h3>
            <p>3 years of experience </p>
            <div className="icons">
              <AiFillHtml5 className="icn" />
              <SiCss3 className="icn" />
              <SiTailwindcss className="icn" />
              <SiBootstrap className="icn" />
              <SiSass className="icn" />
              <SiJavascript className="icn" />
              <SiReact className="icn" />
              <SiTypescript className="icn" />
            </div>
          </div>

          <div className="pos-elements">
            <h3 className="skill-name">Design</h3>
            <p>2 years of experience </p>
            <div className="icons">
              <FiFigma className="icn" />
              <SiAdobephotoshop className="icn" />
              <SiAdobeillustrator className="icn" />
            </div>
          </div>

          <div className="pos-elements">
            <h3 className="skill-name">Other Skills</h3>
            <p>3 years of experience </p>
            <div className="icons">
              <AiFillGitlab className="icn" />
              <AiFillGithub className="icn" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
