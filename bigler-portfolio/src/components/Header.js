import React from 'react';
import Navigation from './Navigation';

function Header({currentPage, handlePageChange}) {
    
    return (
    <nav className="App-header">
        <div className="container-fluid">
            <span className="navbar-brand mb-0"><h1>Amelia Bigler</h1></span>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    </nav>
  );
}

export default Header;