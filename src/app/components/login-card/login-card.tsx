import './login-card.css';
import React from 'react';
import { LoginButton } from '../login/login-button';

export interface LoginCardProps {
    className?: string;
}



export const LoginCard: React.FC<LoginCardProps> = ({ className = '' }) => (
    <div className={className}>
        <div className="login-card">
            <h2>Iniciar Sesión</h2>Inicia sesión en cuestión de  segundos<LoginButton
                buttonImage="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                buttonText="Usar Google"
            /></div></div>
);