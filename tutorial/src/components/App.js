import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar/SearchBar'
import axios from 'axios'

const endpointProducts = 'https://fakestoreapi.com/products'


const App = () => {

  const [ products, setProducts ] = useState([])

  const fetchProducts = async () => {
    const res = await axios.get(endpointProducts)
    setProducts(res.data)
  }

  useEffect( () => {
    fetchProducts();
  }, [])

  const hasProducts = products.length > 0;

  return (
    <div>
      { hasProducts ? <SearchBar products={products} /> : "Loading" }
    </div>
  )

}

export default App
