import React from 'react';

const Button = ({ handleClick,className,children }) => {
    return (
        <button type='button' onClick={handleClick} className={className ? className : ''}>{children}</button>
    );
};

export default Button;