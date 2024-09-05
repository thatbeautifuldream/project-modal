import React from "react";
import ProjectItem from "./project-item";

const ProjectList = ({ projects, onEdit }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectItem key={project.name} project={project} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default ProjectList;
