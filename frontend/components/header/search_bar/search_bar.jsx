import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ searchQuery, handleEnter, handleSearch, handleSearchSubmit }) => {
    return (
        <div className='search-bar flex'>
            <input type="text" placeholder='Search' 
                onChange={handleSearch} 
                onKeyDown={handleEnter}
                value={searchQuery} />
            <button className='search-btn' onClick={handleSearchSubmit}>
                <FontAwesomeIcon icon={faSearch} className='XS-icon' />
            </button>
        </div>
    )
}

export default SearchBar;