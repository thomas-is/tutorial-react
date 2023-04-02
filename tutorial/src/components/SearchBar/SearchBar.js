import React, {useState} from 'react'
import './SearchBar.css'
import ProductOverview from '../ProductOverview/ProductOverview'


const SearchBar = ( props ) => {

  const [ searchValue, setSearchValue ] = useState("")

  const handleInputChange = ( ev ) => {
    setSearchValue( ev.target.value )
  }

  const handleClear = () => {
    setSearchValue( "" )
  }

  const filteredProducts = props.products.filter(
    (p) => {
      return p.title.toUpperCase().includes(searchValue.toUpperCase())
    }
  )

  const isClearButtonVisible = searchValue.length > 0

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange}/>
      { isClearButtonVisible && <button onClick={handleClear} >clear</button> }
      <div className="products">
      { filteredProducts.map(
          (p) => { return ( <ProductOverview key={p.id} product={p} /> ) }
        )
      }
      </div>
    </div>
  )
}

export default SearchBar
