import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }  
    if (currentPage === 'Contact'){
      return <Contact />;
    } 
    if (currentPage === 'Resume'){
      return <Resume />;
    }
   
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="wrapper">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
