import React from 'react';
import './BigText.css';

const BigText = ({children}) => {
    return (
        <div className="big-text">
            {children}
        </div>
    );
};

const OnSum = () => {
  return (
    <div>
      <BigText>온숨</BigText>
    </div>
  );
};

export default OnSum;
