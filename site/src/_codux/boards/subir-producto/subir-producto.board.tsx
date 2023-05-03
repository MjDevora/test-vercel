import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { SubirProducto } from '../../../../components/subir-producto/subir-producto';

export default createBoard({
    name: 'SubirProducto',
    Board: () => <SubirProducto />
});
