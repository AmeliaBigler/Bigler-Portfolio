import React from 'react';
import Project from '../Project';
import MyProjects from '../MyProjects';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className='container'>
        <div className='row'>
          <Project projects={MyProjects}/>
        </div>
      </div>
    </div>
  );
}