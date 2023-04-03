import React from "react";
import "./projects.scss";
import img1 from "./assets/SuretKargo.png";
import img2 from "./assets/Trinity.png";
import img3 from './assets/Yoga.png'
import img4 from './assets/Mind.png'
import img5 from './assets/travel.png'
import img6 from './assets/Crypto.png'
import img7 from './assets/parkcinema.png'

const projects = [
  {
    id: 1,
    title: "Suret Kargo",
    description: "It is a website for a cargo service in Azerbaijan.",
    image: img1,
    technologies: ["React", "CSS", "Figma", "HTML"],
    liveLink: "https://www.suretkargo.az/#",
    sourceLink:
      "https://www.figma.com/file/zccqPacXHrgVyUb6STkeBa/Surat-Kargo?node-id=0%3A1&t=rjItxJNDY2sQSLwd-1",
  },
  {
    id: 2,
    title: "Trinity private school",
    description: "It is a website and LMS system for a private school",
    image: img2,
    technologies: ["HTML", "CSS", "React", "Figma"],
    liveLink: "https://trinity.cy",
    sourceLink:
      "https://www.figma.com/file/yheEgJXrZsAAljDhTpTGqy/LMS-for-Trinity?node-id=0%3A1&t=M8KK7UTa0Kk67AIE-1",
  },
  {
    id: 3,
    title: "ProYoga Buddy",
    description: "A website to find yoga partner",
    image: img3,
    technologies: ["HTML", "CSS", "React", "Figma"],
    liveLink: "/",
    sourceLink:
      "https://www.figma.com/proto/hpF9t1NYW8YY7gTZ5CT3E5/YogaApp?node-id=35%3A261&scaling=min-zoom&page-id=35%3A108&starting-point-node-id=35%3A261&fuid=1110271128923199998",
  },
  {
    id: 4,
    title: "The Mind Game",
    description: "It is a website for digital version of a table game",
    image: img4,
    technologies: ["Figma"],
    liveLink: "/",
    sourceLink:
      "https://www.figma.com/file/yheEgJXrZsAAljDhTpTGqy/LMS-for-Trinity?node-id=0%3A1&t=M8KK7UTa0Kk67AIE-1",
  },
  {
    id: 5,
    title: "Travel Agency",
    description: "Web design for a travel agency that provides world tours",
    image: img5,
    technologies: ["Figma"],
    liveLink: "/",
    sourceLink:"https://www.figma.com/proto/mJKOIUjVJzEz71dwwkCH38/Travel%2BWebsite?node-id=29%3A219&scaling=min-zoom&page-id=29%3A81" 
},
{
  id: 6,
  title: "CryptoMoney",
  description: "Web design for a platform for Investing in Crypto and Manage Your Finance",
  image: img6,
  technologies: ["Figma"],
  liveLink: "/",
  sourceLink:"https://www.figma.com/proto/bMTy61JBeTOy9eRWru6Xyb/CryptoMoney?node-id=201%3A436&scaling=min-zoom&page-id=201%3A58" 
},
{
  id: 7,
  title: "Park Cinema",
  description: "It is a mobile app design for a cinema in Azerbaijan.",
  image: img7,
  technologies: ["Figma"],
  liveLink: "https://play.google.com/store/apps/details?id=az.parkcinema.app&hl=en&gl=US&pli=1",
  sourceLink:"https://www.figma.com/file/KprDRcYI21CHDGdnFbKWJz/parkcinema?node-id=0%3A1&t=EdFA0ZrRY5QeoZR5-1" 
},

];

const Project = ({ project }) => {
  return (
    <div className="project">
      <img className="img" src={project.image} alt={project.title} />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live
          </a>
          <a
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

// Projects component
const Projects = () => {
  return (
    <section className="Projects" id="projects">
      <h1>PROJECTS</h1>
      <p className="subtit">
        Here are some of the projects with in my experience.
      </p>

      <div className="projects">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
