import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ handleSearchEntry, searchVal }) {

  function handleSearchChange(e) {
    handleSearchEntry(e.target.value);
  }

  return (
    <div className={styles['search-div']}>
      <input onChange={handleSearchChange} placeholder="Search Recipes..." value={searchVal}></input>
    </div>
  )
}

export default SearchBar