import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar/SearchBar'


const endpointProducts = 'https://fakestoreapi.com/products'


const App = () => {

  const [ products, setProducts ] = useState([])

  useEffect( () => {
    fetch(endpointProducts)
      .then( res => res.json() )
      .then( payload => {
        const newProducts = payload.map(
            (p) => { return p }
        )
        setProducts(newProducts)
        console.log(payload)
      })
  }, [])

  const hasProducts = products.length > 0;

  return (
    <div>
      { hasProducts ? <SearchBar products={products} /> : "Loading" }
    </div>
  )

}

export default App
