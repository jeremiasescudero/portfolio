// src/components/ProjectCard.js

import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ imageSrc, description }) => {
  return (
    <div className="project-card">
      <img src={imageSrc} alt="Project" className="project-image" />
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
