import React from 'react'
import { createBoard } from '@wixc3/react-board'
import { Test } from '../../../../components/test/test'

export default createBoard({
  name: 'Test',
  Board: () => <Test />,
  environmentProps: {
    canvasHeight: 658,
    canvasWidth: 1230,
    windowWidth: 1080,
    windowHeight: 642,
  },
})
