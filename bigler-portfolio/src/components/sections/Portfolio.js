import React from 'react';
import Project from '../Project';
import MyProjects from '../MyProjects';

export default function Portfolio() {
  // TODO add map function
  return (
    <div>
      <h1>Portfolio</h1>
      <div className='container'>
        <div className='row'>
          <Project project={MyProjects}/>
        </div>
      </div>
    </div>
  );
}