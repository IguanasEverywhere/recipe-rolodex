import React from 'react';

function SearchBar({handleSearchEntry, searchVal}) {



  function handleSearchChange(e) {
    handleSearchEntry(e.target.value);
  }

  return (
    <input onChange={handleSearchChange} placeholder="Search Recipes..." value={searchVal}></input>
  )
}

export default SearchBar