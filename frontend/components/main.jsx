import React from 'react';
import HeaderContainer from './header/header_container';
import SplashContainer from './splash/splash_container';

const Main = props => (
    <main className='main-content'>
        <HeaderContainer />
        <SplashContainer />
    </main>
)

export default Main;