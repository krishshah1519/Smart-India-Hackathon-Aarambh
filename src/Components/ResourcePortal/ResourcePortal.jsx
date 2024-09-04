import React from "react";
import "./ResourcePortal.css";

const ResourcePortal = () => {
  return (
    <div className="resource-portal">
      <h1>Comprehensive Career Resource Portal</h1>
      <p>
        Access a wide range of resources on career options, required skills, educational pathways, and job market trends.
      </p>
      <div className="resources-content">
        {/* Add career resource portal content here */}
        <button className="resources-button">Access Resources</button>
      </div>
    </div>
  );
};

export default ResourcePortal;
