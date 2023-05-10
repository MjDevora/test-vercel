import './login-card.css';
import React from 'react';
import { LoginButton } from '../login/login-button';

export interface LoginCardProps {
    className?: string;
    loginHandler:any;
}

export const LoginCard: React.FC<LoginCardProps> = ({ className = '', loginHandler }) => (
    <div className={className}>
        <div className="login-card">
            <h1 className="login-card-h1">Iniciar sesión</h1>
            <h2 className="login-button-h2">Inicia sesión en cuestión de segundos</h2>
            <LoginButton
                buttonImage="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                buttonText="Usar Google"
                onClickHandler={loginHandler}
            /></div></div>
);