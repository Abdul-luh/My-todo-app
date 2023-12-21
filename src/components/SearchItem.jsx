import React from 'react'

function SearchItem({search, setSearch}) {
  return (
      <form className='search' onSubmit={(e)=>{e.preventDefault()}}>
          <label htmlFor="SearchItem">Search-Item</label>
          <input type="text"
              id='search'
              role='searchbox'
              value={search}
              placeholder='Search Item'
              onChange={(e)=>{setSearch(e.target.value)}}
          />
    </form>
  )
}

export default SearchItem