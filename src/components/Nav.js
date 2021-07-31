import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    <header>
        <div className="brand">Lindsey Lauria</div>
        <nav className="navbar navbar-dark navbar-expand-md">
            <ul className="nav nav-tabs w-100">
            <li className="nav-item">
                <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                About
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                Contact
                </a>
            </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;
