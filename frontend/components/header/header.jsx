import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars, faVideo } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './search_bar/search_bar';
import DropdownMenu from './dropdown_menu/dropdown_menu';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        }
        this._loginClick = this._loginClick.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    _loginClick(e) {
        this.props.history.push('/login');
    }

    handleEnter(e) {
        if (e.key === 'Enter') {
            this.handleSearchSubmit(e);
        }
    }

    handleSearch(e) {
        this.setState({
            searchQuery: e.target.value
        })
    }

    handleSearchSubmit(e) {
        e.preventDefault();
        const { history, clearVideos } = this.props;
        const { searchQuery } = this.state;
        const searchUrl = searchQuery.split(' ').join('+');

        clearVideos();
        history.push(`/results?search_query=${searchUrl}`);
    }

    render() {
        const { currentUser, sideNav, logout, openModal, openSideNav, closeSideNav, history } = this.props;
        const sideNavButton = sideNav ? (
            <button onClick={closeSideNav}><FontAwesomeIcon icon={faBars} className='bars large-icon' /></button>
        ) : (
            <button onClick={openSideNav}><FontAwesomeIcon icon={faBars} className='bars large-icon' /></button>
        )
        const rightRender = currentUser ? (
                <DropdownMenu currentUser={currentUser} logout={() => logout().then(history.push('/'))} />
        ) : (<div className='signin-btn flex' onClick={this._loginClick}>
                <FontAwesomeIcon icon={faUserCircle} className='small-icon'/>
                <p>SIGN IN</p>
            </div>);
        
        return (
            <nav className='header-nav flex'>
                <section className='left flex'>
                    { sideNavButton }
                    <Link to='/'>
                        <img src={window.logo} className='logo' alt='ViewTube'/>
                    </Link>
                </section>
                
                <section className='center'>
                    <SearchBar searchQuery={this.state.searchQuery}
                        handleEnter={this.handleEnter}
                        handleSearch={this.handleSearch}
                        handleSearchSubmit={this.handleSearchSubmit} />
                </section>

                <section className='right flex'>
                    <button className='video-btn' 
                    onClick={() => currentUser ? openModal('videoUpload') : this._loginClick() }>
                        <FontAwesomeIcon icon={faVideo} className='XS-icon'/>
                    </button>
                    {rightRender}
                </section>
            </nav>
        ) 
    }
}

export default Header;