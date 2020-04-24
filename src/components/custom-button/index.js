import React from 'react';

import './styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...props }) => (
    <button type="button" className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} { ...props }>
        { children }
    </button>
);

export default CustomButton;