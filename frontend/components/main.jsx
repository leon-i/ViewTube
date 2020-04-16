import React from 'react';
import HeaderContainer from './header/header_container';
import SplashContainer from './splash/splash_container';
import VideoShowContainer from './video/video_show/video_show_container';
import UserChannelContainer from './user_channel/user_channel_container';
import { Route, Switch } from "react-router-dom";

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
                <Switch>
                    <Route exact path='/' 
                    render={props => <SplashContainer {...props} sideNavOpen={this.state.sideNavOpen} />} />
                    <Route path='/videos/:videoId' component={VideoShowContainer} />
                    <Route path='/users/:userId'
                        render={props => <UserChannelContainer {...props} sideNavOpen={this.state.sideNavOpen} />} />
                </Switch>
            </main> 
        )
    }
}

export default Main;