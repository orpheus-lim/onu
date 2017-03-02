import React from 'react';
import { Link } from 'react-router';
import './DmButtons.css';

const MyButton = ({active, children, to}) => (
    <Link to={to} className="my-buttons">
            {children}
    </Link>
)

const DmButtons = () => {
    return (
        <div>
            <div className="dm-buttons">
            <MyButton to={'/signup'}>SignUp</MyButton>
            <MyButton to={'/register'}>회원가입</MyButton>
            </div>
        </div>
    );
};

export default DmButtons;
