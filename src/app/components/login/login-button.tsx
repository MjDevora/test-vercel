/* eslint-disable @next/next/no-img-element */
import './login-button.css';
import React from 'react';


export interface LoginButtonProps {
    className?: string;
    buttonImage: any;
    buttonText: string;
    onClickHandler: any;
}

export const LoginButton: React.FC<LoginButtonProps> = (props: LoginButtonProps) => (
    <div className={`${props.className} login-button`} onClick={props.onClickHandler}>
        <span className="login-span">
            <img
                src={props.buttonImage}
                className="login-button-img"
                alt="logo"
            />
            {props.buttonText}
        </span>
    </div>
);