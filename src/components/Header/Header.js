import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <NavLink className={({isActive})=> isActive ? 'active': undefined } to='/home'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/quiz'>Quiz</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/stats'>Stats</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/blogs'>Blogs</NavLink>
            </div>
        </div>
       
    );
};

export default Header;