import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.container = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    handleClick(e) {
        this.setState({ show: !this.state.show });
    }

    handleOutsideClick(e) {
        const current = this.container.current;
        const outside = current ? current.contains(e.target) ? false : true : false;
        if (outside) this.setState({ show: false });
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    }

    render() {
        const { currentUser, logout } = this.props;
        const dropdownClass = this.state.show ? 'dropdown show' : 'dropdown'
        return (
            <div className='dropdown-container' ref={this.container}>
                <button className='profile-button' onClick={this.handleClick}>
                    <FontAwesomeIcon icon={faUserCircle} className='XL-icon' />
                </button>
                <div className={dropdownClass}>
                    <section className='dropdown-profile flex'>
                        <FontAwesomeIcon icon={faUserCircle} className='XXL-icon'/>
                        <div>
                            <h3>{currentUser.username}</h3>
                            <h4>{currentUser.email}</h4>
                        </div>
                    </section>
                    <ul className='dropdown-links'>
                        <li>
                            <FontAwesomeIcon icon={faUser} className='XS-icon'/>
                            Your channel
                        </li>
                        <li onClick={logout}>
                            <FontAwesomeIcon icon={faSignOutAlt} className='XS-icon'/>
                            Sign out
                        </li>
                    </ul>
                </div>
            </div>
        )  
    }
    
}

export default DropdownMenu;