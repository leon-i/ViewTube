import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { searchVideos } from '../../actions/video_actions';
import SearchResultIndex from './search_result_index';

const mapStateToProps = ({ session, entities: { users, videos } }) => ({
    currentUser: users[session.currentUserId],
    videos
});

const mapDispatchToProps = dispatch => ({
    searchVideos: searchQuery => dispatch(searchVideos(searchQuery)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultIndex);