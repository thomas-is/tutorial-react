import React from 'react'
import './ProductOverview.css'

const ProductOverview = ( props ) => {

  const product = props.product;
  console.log(product);

  return (
    <div class="productOverview">
      <div className="image" ><img src={product.image} alt={product.title}/></div>
      <div className="title" >{product.title}</div>
      <div className="price" >{product.price} €</div>
      <div className="description" >{product.description}</div>
    </div>
  )

}

export default ProductOverview
