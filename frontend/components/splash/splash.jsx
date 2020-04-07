import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        debugger
        super(props);
    }
    render() {
        const { currentUser, logout } = this.props;
        return (
            <>
            <button onClick={logout}>Log Out</button>
            </>
        )
    }
}

export default Splash;