import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/quiz'>Quiz</Link>
            <Link to='/stats'>Stats</Link>
            <Link to='/blogs'>Blogs</Link>
        </div>
    );
};

export default Header;