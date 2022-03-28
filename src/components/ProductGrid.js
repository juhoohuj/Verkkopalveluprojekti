import React from 'react'
import ProductCard from './ProductCard'

function ProductGrid() {
  return (
    <div className='container'>
      <h1>Suosituimmat tuotteet</h1>
      <div className='ProductGrid'>
          <ProductCard></ProductCard>
      </div>
    </div>
  )
}

export default ProductGrid