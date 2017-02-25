import React from 'react';
import '../../public/css/Footer.css';

const MenuItem = ({active, children, to}) => (
    <div className="menu-item">
            {children}
    </div>
)

const Footer = () => {
    return (
            <div className="menu">
                <MenuItem>온숨소개</MenuItem>
                <MenuItem>온숨문의</MenuItem>
                <MenuItem>온숨위치</MenuItem>
                <MenuItem>온유다음카페</MenuItem>
                <MenuItem>개발자문의</MenuItem>
            </div>
    );
};

export default Footer;
