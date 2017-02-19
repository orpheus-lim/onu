import React from 'react';
import { Link } from 'react-router';
import './MyButton.css';

const MyButton = ({active, children, to}) => (
    <Link to={to} className="my-buttons">
            {children}
    </Link>
)

export default MyButton;
