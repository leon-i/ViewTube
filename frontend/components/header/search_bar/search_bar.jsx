import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    return (
        <div className='search-bar flex'>
            <input type="text" placeholder='Search'/>
            <button className='search-btn'>
                <FontAwesomeIcon icon={faSearch} className='XS-icon' />
            </button>
        </div>
    )
}

export default SearchBar;