
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { LoginCard } from '../../../app/components/login-card/login-card';

const loginFunction = () => {}

export default createBoard({
    name: 'LoginCard',
    Board: () => 
    <LoginCard 
        loginHandler = {loginFunction}
    />
});
