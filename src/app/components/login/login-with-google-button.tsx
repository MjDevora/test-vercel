import './login-with-google-button.css';
import React from 'react';

export interface LoginWithGoogleButtonProps {
    className?: string;
}

export const LoginWithGoogleButton: React.FC<LoginWithGoogleButtonProps> = ({ className = '' }) => (
    <div className={`${className} login-button`}>
        <span className="login-span">
            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" className="login-button-img" />Usar Google</span></div>
);