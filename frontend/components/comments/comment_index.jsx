import React from 'react';
import CommentFormContainer from './comment_form/comment_form_container';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments,
        }
    }

    componentDidMount() {
        const {currentVideoId, requestComments } = this.props;
        requestComments(currentVideoId);
    }

    render() {
        const comments = Object.values(this.props.comments);
        let commentCount = comments.length;
        comments.forEach(comment => commentCount += comment.replyCount);
        const commentLis = comments.map((comment, idx) => (
            <CommentIndexItem key={idx} comment={comment} 
            currentUser={this.props.currentUser} />
        ));
        
        return (
            <section className='comment-index'>
                <section className='comment-header flex'>
                    <h1>{commentCount} Comments</h1>
                    <CommentFormContainer />
                </section>
                <ul className='comment-list'>
                    {commentLis}
                </ul>
            </section>
        )
    }
}

// const CommentIndex = ({ comments }) => {
//     const commentArr = Object.values(comments);
//     const commentAmount = commentArr.length;
//     const commentLis = commentArr.map((comment, idx) => (
//         <CommentIndexItem key={idx} comment={comment} />
//     ))
//     return (
//         <section className='comment-index'>
//             <section className='comment-header flex'>
//                 <h1>{commentAmount} Comments</h1>
//                 <CommentFormContainer />
//             </section>
//             <ul className='comment-list'>
//                 {commentLis}
//             </ul>
//         </section>
//     )
// }

export default CommentIndex;