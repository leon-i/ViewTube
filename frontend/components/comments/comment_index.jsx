import React from 'react';
import CommentFormContainer from './comment_form/comment_form_container';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { currentVideoId, requestComments } = this.props;
        requestComments(currentVideoId)
    }

    render() {
        const comments = Object.values(this.props.comments);
        const commentAmount = comments.length;
        const commentLis = comments.map((comment, idx) => (
            <CommentIndexItem key={idx} comment={comment} />
        ))
        return (
            <section className='comment-index'>
                <section className='comment-header flex'>
                    <h1>{commentAmount} Comments</h1>
                <CommentFormContainer />
                </section>
                <ul className='comment-list'>
                    {commentLis}
                </ul>
            </section>
        )
    }
}

export default CommentIndex;