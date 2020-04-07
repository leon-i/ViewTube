import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this._loginClick = this._loginClick.bind(this);
    }

    _loginClick(e) {
        this.props.history.push('/login');
    }

    render() {
        const { currentUser, logout } = this.props;
        return (
            <>
            <div>
                splash
            </div>
            </>
        )
    }
}

export default Splash;