import React from 'react'

const SearchBar = ({setQuery}) => {
  return (
    <div>
        <input
                  type="search"
                  onChange={(event) => setQuery(event.target.value)}
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />  

    </div>
  )
}

export default SearchBar