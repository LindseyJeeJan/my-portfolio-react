import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
      <div>
        <a id='skip-nav' className='screenreader-text' href='#content'>
                Skip Navigation
        </a>
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
                    About Me
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
                <li className="nav-item">
                    <a href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                    Resume
                    </a>
                </li>
                </ul>
            </nav>
        </header>
    </div>
  );
}

export default Nav;
