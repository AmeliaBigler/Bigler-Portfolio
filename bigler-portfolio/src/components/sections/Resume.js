import React from 'react';
import resume from "../../assets/AB2023.pdf"

export default function Resume() {
  return (
    <div className='content'>
      <h1>My Resume</h1>
        <p>Download <a href={resume} download={resume}>my resume</a></p>
    </div>
  );
}