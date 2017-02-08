import React from 'react';
import { Link } from 'react-router';
import './Header.css';

const MenuItem = ({active, children, to}) => (
    <Link to={to} className="my-buttons">
            {children}
    </Link>
)

const Header = () => {
    return (
        <div>
            <div className="dm-buttons">
            <MenuItem to={'/login'}>로그인</MenuItem>
            <MenuItem to={'/register'}>회원가입</MenuItem>
            </div>
        </div>
    );
};

export default Header;
