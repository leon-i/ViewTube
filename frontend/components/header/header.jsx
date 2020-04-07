import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './search_bar/search_bar';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this._loginClick = this._loginClick.bind(this);
    }

    _loginClick(e) {
        this.props.history.push('/login');
    }

    render(){
        const { currentUser, logout } = this.props;
        return (
            <nav className='header-nav'>
                <Link to='/'>
                    <img src={window.logo} className='logo' alt='ViewTube'/>
                </Link>
                <SearchBar />
                <button className='sign-in-button' onClick={this._loginClick}>
                    <FontAwesomeIcon icon={faUserCircle} />
                    SIGN IN
                </button>
            </nav>
        ) 
    }
}

export default Header;