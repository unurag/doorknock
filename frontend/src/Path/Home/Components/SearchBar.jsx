import React from 'react'
import './style.css'

const SearchBar = () => {
  return (
    <div className="search-container">
        <input 
            type='search'
            maxLength='100'
            inputMode='search'
            placeholder="Search &quot;maggie&quot;"
            className='search-container__input'
        />
    </div>
  )
}

export default SearchBar