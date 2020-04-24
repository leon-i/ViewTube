import React from 'react';
import SearchIndexItem from './search_index_item';
import SideNavOpen from '../sidenav/sidenav_open';
import SideNavClosed from '../sidenav/sidenav_closed';

class SearchResultIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSearch: this.props.location.search
        }

        this._loginClick = this._loginClick.bind(this);
    }

    _loginClick(e) {
        this.props.history.push('/login');
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            const { location: { search } } = this.props;
            const query = search.split('=')[1].split('+').join(' ');
            this.props.searchVideos(query);
        }
    }
    
    componentDidMount() {
        const { location: { search } } = this.props;
        const query = search.split('=')[1].split('+').join(' ');
        this.props.searchVideos(query);
    }

    render() {
        const { currentUser, sideNavOpen, videos } = this.props;
        const results = Object.values(videos);
        const searchIndexClass = sideNavOpen ? 'search-index pushed-right' : 'search-index pushed-left';
        const thumbnails = results.map((video, idx) => (
            <SearchIndexItem key={idx} video={video} />
        ));

        const sidenav = sideNavOpen ? (
            <SideNavOpen currentUser={currentUser} login={this._loginClick} />
        ) : (
                <SideNavClosed />
        );
        return (
            <>
            { sidenav }
            <div className={searchIndexClass}>
                { thumbnails }
            </div>
            </>
        )
    }
}

export default SearchResultIndex;