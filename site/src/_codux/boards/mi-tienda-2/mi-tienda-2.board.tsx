import React from 'react'
import { createBoard } from '@wixc3/react-board'
import { MiTienda2 } from '../../../../components/mi-tienda-2/mi-tienda-2'

export default createBoard({
  name: 'MiTienda2',
  Board: () => (
    <MiTienda2
      title="Mi Michi"
      image="https://fotografias-compromiso.atresmedia.com/clipping/cmsimages02/2016/02/26/5659A6D3-EDA9-4B90-BB58-E124E432F1A6/58.jpg"
    />
  ),
})
