import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <img src={logo} alt='neflix' />
                <ul>Home</ul>
                <ul>TV News</ul>
                <ul>Movies</ul>
                <ul>New and Popular</ul>
                <ul>My List</ul>
                <ul>Browse and Languages</ul>
            </div>
            <div className='navbar-right'>
                <img src={search_icon} alt='search' className='icon' />
                <p>Children</p>
                <img src={bell_icon} alt='search' className='bell' />
                <div className='navbar-profile'>
                    <img src={profile_img} alt='profile' className='profile' />
                    <img src={caret_icon} alt='caret' className='caret_icon' />
                    <div className='dropdown'>
                        <p>Sign Out Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
