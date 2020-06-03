import { connect } from 'react-redux';
import { searchVideos } from '../../actions/video_actions';
import SearchResultIndex from './search_result_index';

const mapStateToProps = ({ session, entities: { users, videos }, ui: { sideNav } }) => ({
    currentUser: users[session.currentUserId],
    videos,
    sideNav
});

const mapDispatchToProps = dispatch => ({
    searchVideos: searchQuery => dispatch(searchVideos(searchQuery)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultIndex);