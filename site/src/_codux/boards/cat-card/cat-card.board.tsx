import React from 'react'
import { createBoard } from '@wixc3/react-board'
import { CatCard } from '../../../../components/cat-card/cat-card'

export default createBoard({
  name: 'CatCard',
  Board: () => (
    <CatCard
      images="https://cdn.shopify.com/s/files/1/0588/2812/8433/products/Hb50a9ded5b8d40b28c109685b878a425y.jpg?v=1638445133"
      price={150}
      title="Anillo de gato"
    />
  ),
  environmentProps: {
    windowWidth: 998,
    windowHeight: 640,
  },
})
