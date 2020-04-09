import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars, faVideo } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './search_bar/search_bar';
import DropdownMenu from './dropdown_menu/dropdown_menu';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this._loginClick = this._loginClick.bind(this);
    }

    _loginClick(e) {
        this.props.history.push('/login');
    }

    render(){
        const { currentUser, handleSideNavClick, logout, openModal } = this.props;
        const rightRender = currentUser ? (
                <DropdownMenu currentUser={currentUser} logout={logout} />
        ) : (<div className='signin-btn flex' onClick={this._loginClick}>
                <FontAwesomeIcon icon={faUserCircle} className='small-icon'/>
                <p>SIGN IN</p>
            </div>);
        
        return (
            <nav className='header-nav flex'>
                <section className='left flex'>
                    <button onClick={handleSideNavClick}><FontAwesomeIcon icon={faBars} className='bars large-icon'/></button>
                    <Link to='/'>
                        <img src={window.logo} className='logo' alt='ViewTube'/>
                    </Link>
                </section>
                
                <section className='center'>
                    <SearchBar />
                </section>

                <section className='right flex'>
                    <button className='video-btn' onClick={() => openModal('videoUpload')}>
                        <FontAwesomeIcon icon={faVideo} className='XS-icon'/>
                    </button>
                    {rightRender}
                </section>
            </nav>
        ) 
    }
}

export default Header;