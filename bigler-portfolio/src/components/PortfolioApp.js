import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';

function PortfolioApp() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
          return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        else return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return  (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <div className='section-content'>
                {renderPage()}
            </div>
            <Footer />
        </div>
    );
}

export default PortfolioApp;
