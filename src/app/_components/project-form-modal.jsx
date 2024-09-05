import React, { useState, useEffect } from "react";

const ProjectFormModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [projectName, setProjectName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  useEffect(() => {
    if (initialData) {
      setProjectName(initialData.name);
      setThumbnail(initialData.thumbnail);
      setThumbnailPreview(initialData.thumbnail); // Assuming initialData.thumbnail is a URL
    }
  }, [initialData]);

  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setThumbnail(file);
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    const projectData = {
      name: projectName,
      thumbnail: thumbnailPreview, // Here, we're saving the preview URL for display
    };
    onSave(projectData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{initialData ? "Edit Project" : "Add Project"}</h2>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Project Name"
        />
        <input type="file" accept="image/*" onChange={handleThumbnailChange} />
        {thumbnailPreview && (
          <div>
            <p>Thumbnail Preview:</p>
            <img
              src={thumbnailPreview}
              alt="Thumbnail Preview"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        )}
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ProjectFormModal;
