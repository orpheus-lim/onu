import React from 'react';
import './Header.css';

const MenuItem = ({active, children, to}) => (
    <div className="menu-item">
            {children}
    </div>
)

const Header = () => {
    return (
            <div className="menu">
                <MenuItem>온숨</MenuItem>
            </div>
    );
};

export default Header;
