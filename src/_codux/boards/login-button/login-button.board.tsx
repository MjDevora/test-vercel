import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { LoginButton, LoginButtonProps } from '../../../app/components/login/login-button';

const image: string = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg";
const text: string = "Usar Google";
const loginHandlerFun = () => {};

export default createBoard({
    name: 'LoginButton',
    Board: () => <LoginButton 
    buttonImage={image} 
    buttonText={text}
    onClickHandler={loginHandlerFun}
    />,
    environmentProps: {
        windowWidth: 1024
    }
});