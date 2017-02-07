import React from 'react';
import './Header.css';

const MenuItem = ({active, children, to}) => (
    <div className="my-buttons">
            {children}
    </div>
)

const Header = () => {
    return (
        <div>
            <div className="dm-buttons">
            <MenuItem>로그인</MenuItem>
            <MenuItem>회원가입</MenuItem>
            </div>
        </div>
    );
};

export default Header;
