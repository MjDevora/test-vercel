import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { LoginWithGoogleButton } from '../../../app/components/login/login-with-google-button';

export default createBoard({
    name: 'LoginWithGoogleButton',
    Board: () => <LoginWithGoogleButton />,
    environmentProps: {
        canvasHeight: 37,
        canvasWidth: 539
    }
});
