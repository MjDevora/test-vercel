import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Success } from '../../../app/components/success/success';

const message = "El componente esta creado"

export default createBoard({
    name: 'Success',
    Board: () => <Success 
        message={message}
    />
});
