import React from 'react'

const SearchBar = ( {setSearch} ) => {
  return (
    <div>
          <input
                  type="search"
                  onChange={(event) => setSearch(event.target.value)}
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />


    </div>
  )
}

export default SearchBar