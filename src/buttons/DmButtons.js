import React from 'react';
// import { Link } from 'react-router';
import MyButton from './MyButton';

const DmButtons = () => {
    return (
        <div>
            <div className="dm-buttons">
            <MyButton to={'/login'}>로그인</MyButton>
            <MyButton to={'/register'}>회원가입</MyButton>
            </div>
        </div>
    );
};

export default DmButtons;
