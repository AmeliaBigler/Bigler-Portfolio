import React from 'react';

// Project accepts a single project as a prop
// This component is solely responsible for displaying the specific information for a given project
const Project = ({ project }) => {
  return (
    <div className='col'>
      <div className="card">
        {/* <img src={project.screenshot} className="card-img-top" alt="screenshot of deployed app"></img> */}
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <a href={project.deployedLink} className="btn btn-primary">Open App</a>
          <a href={project.githubRepo} className="btn btn-primary">Open Repo</a>
        </div>
      </div>
    </div>
  );
};

export default Project;