/* eslint-disable @next/next/no-img-element */
// components/ProjectItem.js
import React from "react";

const ProjectItem = ({ project, onEdit }) => {
  return (
    <div className="project-item">
      <img src={project.thumbnail} alt={project.name} />
      <h3>{project.name}</h3>
      <button onClick={() => onEdit(project)}>Edit</button>
    </div>
  );
};

export default ProjectItem;
