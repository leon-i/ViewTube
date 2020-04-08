import React from 'react';
import HeaderContainer from './header/header_container';
import SplashContainer from './splash/splash_container';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideNavOpen: true
        }
        this.handleSideNavClick = this.handleSideNavClick.bind(this);
    }

    handleSideNavClick(e) {
        this.setState({
            sideNavOpen: !this.state.sideNavOpen
        })
    }

    render() {
        return (
            <main className='main-content'>
                <HeaderContainer handleSideNavClick={this.handleSideNavClick} />
                <SplashContainer sideNavOpen={this.state.sideNavOpen} />
            </main> 
        )
    }
}

export default Main;