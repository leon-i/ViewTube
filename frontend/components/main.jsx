import React from 'react';
import HeaderContainer from './header/header_container';
import Splash from './splash/splash';
import VideoShowContainer from './video/video_show/video_show_container';
import UserChannelContainer from './user_channel/user_channel_container';
import SearchResultIndexContainer from './search/search_result_index_container';
import SubscribedVideoIndexContainer from './subscriptions/subscribed_video_index_container';
import { Route, Switch } from "react-router-dom";

const Main = () => (
    <main className='main-content'>
        <HeaderContainer />
        <Switch>
            <Route exact path='/' component={Splash} />
            <Route path='/videos/:videoId' component={VideoShowContainer} />
            <Route path='/users/:userId' component={UserChannelContainer} />
            <Route path='/results' component={SearchResultIndexContainer} />
            <Route path='/subscriptions' component={SubscribedVideoIndexContainer} />
        </Switch>
    </main> 
)

export default Main;