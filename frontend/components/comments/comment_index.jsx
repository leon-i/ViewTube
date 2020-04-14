import React from 'react';
import CommentFormContainer from './comment_form/comment_form_container';

class CommentIndex extends React.Component {
    componentDidMount() {
        const { currentVideoId, requestComments } = this.props;
        requestComments(currentVideoId)
    }
    render() {
        return (
            <CommentFormContainer />
        )
    }
}

export default CommentIndex;