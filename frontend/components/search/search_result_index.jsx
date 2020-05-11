import React from 'react';
import SearchIndexItem from './search_index_item';
import SideNav from '../sidenav/sidenav';

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
        const { sideNav, videos } = this.props;
        const results = Object.values(videos);
        const searchIndexClass = sideNav ? 'search-index pushed-right' : 'search-index pushed-left';
        const thumbnails = results.map((video, idx) => (
            <SearchIndexItem key={idx} video={video} />
        ));

        return (
            <>
            <SideNav />
            <div className={searchIndexClass}>
                { thumbnails }
            </div>
            </>
        )
    }
}

export default SearchResultIndex;