import React from 'react';
import SideNavOpen from '../sidenav/sidenav_open';
import SideNavClosed from '../sidenav/sidenav_closed';
import VideoIndexContainer from '../video/video_index/video_index_container';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this._loginClick = this._loginClick.bind(this);
    }

    _loginClick(e) {
        this.props.history.push('/login');
    }

    render() {
        const { currentUser, sideNavOpen, logout } = this.props;
        const sidenav = sideNavOpen ? (
            <SideNavOpen currentUser={currentUser} login={this._loginClick} />
        ) : (
            <SideNavClosed />
        );
        return (
            <>
            { sidenav }
            </>
        )
    }
}

export default Splash;