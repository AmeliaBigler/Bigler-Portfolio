import React from 'react';

// Project accepts a single project as a prop
// This component is solely responsible for displaying the specific information for a given project
const Project = (props) => {
  return (
    <div className='row'>
      {props.projects.map( project => 
        <div className='col-sm-6 mb-3' key={project.name}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className='card-text'>{project.description}</p>
              <a href={project.deployedLink} className="btn btn-primary">Open App</a>
              <a href={project.githubRepo} className="btn btn-primary">Open Repo</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;