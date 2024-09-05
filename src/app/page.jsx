"use client";

import React, { useState } from "react";
import ProjectFormModal from "./_components/project-form-modal";
import ProjectList from "./_components/project-list";

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const handleAddProject = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleSaveProject = (project) => {
    if (editingProject) {
      setProjects((prev) =>
        prev.map((p) => (p.name === editingProject.name ? project : p))
      );
    } else {
      setProjects((prev) => [...prev, project]);
    }
  };

  return (
    <div className="container">
      <h1>Projects</h1>
      <button onClick={handleAddProject}>Add Project</button>
      <ProjectList projects={projects} onEdit={handleEditProject} />
      <ProjectFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveProject}
        initialData={editingProject}
      />
    </div>
  );
};

export default HomePage;
