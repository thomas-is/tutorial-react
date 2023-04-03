import React from 'react'
//import PropTypes from 'prop-types';
import './ProductOverview.css'

const ProductOverview = ( props ) => {

//  console.log(props.product);

  const { image, title, price, description } = props.product;

  return (
    <div className="productOverview">
      <div className="image" ><img src={image} alt={title}/></div>
      <div className="title" >{title}</div>
      <div className="price" >{price} €</div>
      <div className="description" >{description}</div>
    </div>
  )

}

export default ProductOverview

//ProductOverview.propTypes = {
//    image:       PropTypes.string,
//    title:       PropTypes.string,
//    price:       PropTypes.string,
//    description: PropTypes.string
//};
