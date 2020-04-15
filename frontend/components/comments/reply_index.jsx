import React from 'react';
import CommentIndexItem from './comment_index_item';

// const ReplyIndex = ({ replies }) => {
//     const replyLis = Object.values(replies).map((reply, idx) => (
//         <CommentIndexItem key={idx} comment={reply} isReply={true} />
//     ))

//     return (
//         <ul className='reply-index'>
//             {replyLis}
//         </ul>
//     )
// }

class ReplyIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            replies: Object.values(this.props.replies)
        }
    }
    render() {
        const { replies } = this.state;
        const replyLis = replies.map((reply, idx) => (
            <CommentIndexItem key={idx} comment={reply} isReply={true} />
        ))

        return (
            <ul className='reply-index'>
                {replyLis}
            </ul>
        )  
    }
    
}

export default ReplyIndex;