import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <input type="text" placeholder='Search'/>
            <button>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    )
}

export default SearchBar;