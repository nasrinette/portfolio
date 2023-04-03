import React from "react";
import "./projects.scss";
import {projects} from './data'

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
