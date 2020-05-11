import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideNavOpen from './sidenav_open';
import SideNavClosed from './sidenav_closed';

const SideNav = ({ currentUser, sideNav, history }) => {
    if (!sideNav) {
        return <SideNavClosed />
    } else {
        return <SideNavOpen currentUser={currentUser} login={() => history.push('/login')} />
    }
}

const mapStateToProps = ({ session, entities: { users }, ui: { sideNav } }) => ({
    currentUser: users[session.currentUserId],
    sideNav
});

export default withRouter(connect(mapStateToProps, null)(SideNav));