import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { LoginCard } from '../../../app/components/login-card/login-card';

export default createBoard({
    name: 'LoginCard',
    Board: () => <LoginCard />
});
