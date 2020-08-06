import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar text-info">
            <Link to='/' className="navbar-brand">BYU Survival Guide</Link>
            <div className="row">
                <Link to='/' className="nav-item nav-link">Home</Link>
                <Link to='/topics' className="nav-item nav-link">Topics</Link>
                <Link to='/about' className="nav-item nav-link">About</Link>
            </div>
        </nav>
    );
};

export default NavBar;