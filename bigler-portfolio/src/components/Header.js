import React from 'react';
// import Navigation from './Navigation';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg App-header">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Amelia Bigler</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#AboutMe">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Resume">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
</nav>
  );
}

export default Header;