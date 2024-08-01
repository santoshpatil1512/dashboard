import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <input type="text" placeholder="Search..." />
            <div className="user-info">
                <img src="/path/to/profile-pic.jpg" alt="Profile" />
            </div>
        </header>
    );
};

export default Header;
