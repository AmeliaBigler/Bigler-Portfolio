import React from 'react';
import Project from '../Project';
import MyProjects from '../MyProjects';

export default function Portfolio() {
  return (
    <div id="portfolio-div">
      <h1>Portfolio</h1>
      <div className='container'>
          <Project projects={MyProjects}/>
      </div>
    </div>
  );
}