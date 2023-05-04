import React from 'react';
import Navigation from './Navigation';

function Header({currentPage, handlePageChange}) {
    
    return (
    <nav className="navbar navbar-expand-lg App-header">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Amelia Bigler</span>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
</nav>
  );
}

export default Header;