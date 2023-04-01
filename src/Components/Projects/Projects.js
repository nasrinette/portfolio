import React from "react";
import './projects.scss'
import img1 from './assets/SuretKargo.png'
import img2 from './assets/Trinity.png'

const projects = [
    {
      id: 1,
      title: 'Suret Kargo',
      description: 'It is a website for a cargo service in Azerbaijan.',
      image: img1,
      technologies: ['React', 'CSS', 'Figma', "HTML"],
      liveLink: 'https://www.suretkargo.az/#',
      sourceLink: 'https://www.figma.com/file/zccqPacXHrgVyUb6STkeBa/Surat-Kargo?node-id=0%3A1&t=rjItxJNDY2sQSLwd-1'
    },
    {
      id: 2,
      title: 'Trinity private school',
      description: 'It is a website and LMS system for a private school',
      image: img2,
      technologies: ['HTML', 'CSS', 'React', 'Figma'],
      liveLink: 'https://trinity.cy',
      sourceLink: 'https://www.figma.com/file/yheEgJXrZsAAljDhTpTGqy/LMS-for-Trinity?node-id=0%3A1&t=M8KK7UTa0Kk67AIE-1'
    },
    {
        id: 3,
        title: 'Trinity private school',
        description: 'It is a website and LMS system for a private school',
        image: img2,
        technologies: ['HTML', 'CSS', 'React', 'Figma'],
        liveLink: 'https://trinity.cy',
        sourceLink: 'https://www.figma.com/file/yheEgJXrZsAAljDhTpTGqy/LMS-for-Trinity?node-id=0%3A1&t=M8KK7UTa0Kk67AIE-1'
      },
      {
        id: 4,
        title: 'Trinity private school',
        description: 'It is a website and LMS system for a private school',
        image: img2,
        technologies: ['HTML', 'CSS', 'React', 'Figma'],
        liveLink: 'https://trinity.cy',
        sourceLink: 'https://www.figma.com/file/yheEgJXrZsAAljDhTpTGqy/LMS-for-Trinity?node-id=0%3A1&t=M8KK7UTa0Kk67AIE-1'
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
            {project.technologies.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="project-links">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live</a>
            <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">Source</a>
          </div>
        </div>
      </div>
    );
  };

// Projects component
const Projects = () => {

    return (
      <section className="Projects">
      <h1>PROJECTS</h1>
      <p className="subtit">Here are some of the projects with in my experience.</p>
      
      <div className="projects">
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      </section>
    );
  };

export default Projects;