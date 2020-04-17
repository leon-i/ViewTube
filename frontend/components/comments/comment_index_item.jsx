import React from 'react';
import ReplyFormContainer from './comment_form/reply_form_container';
import ReplyIndex from './reply_index';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

class CommentIndexItem extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            repliesOpen: false,
            replyFormOpen: false
        }

        this.handleViewReplies = this.handleViewReplies.bind(this);
        this.openReplies = this.openReplies.bind(this);
        this.handleReply = this.handleReply.bind(this);
        this.handleReplyClose = this.handleReplyClose.bind(this);
    }

    openReplies() {
        this.setState({ repliesOpen: true });
    }

    handleViewReplies(e) {
        this.setState({repliesOpen: !this.state.repliesOpen});
    }

    handleReply(e) {
        this.setState({replyFormOpen: true});
    }

    handleReplyClose() {
        this.setState({ replyFormOpen: false });
    }

    render() {
        const { comment, isReply, currentUser } = this.props;
        if (!comment.author) return null;
        const { repliesOpen, replyFormOpen } = this.state;
        const replyLength = comment.replies ? comment.replies.length : 0;
        const hasReplies = replyLength ? true : false;
        const iconClass = isReply ? 'reply-icon' : 'comment-icon';
        let replyMessage;
        let iconType;

        if (!repliesOpen) {
            replyMessage = replyLength === 1 ? 'View reply' : `View ${replyLength} replies`;
            iconType = faCaretDown;

        } else {
            replyMessage = replyLength === 1 ? 'Hide reply' : `Hide ${replyLength} replies`;
            iconType = faCaretUp;
        }

        const viewReplesRender = hasReplies ? (
            <div className='show-replies flex' onClick={this.handleViewReplies}>
                <FontAwesomeIcon icon={iconType} />
                <p>{replyMessage}</p>
            </div>
        ) : (
            <>
            </>
        );
        
        const repliesRender = repliesOpen && comment.replies ? (
            <ReplyIndex key={comment.replies.length} replies={comment.replies} />
        ) : (
            <>
            </>
        )

        const replyFormRender = replyFormOpen ? (
            <div className='outer-reply-form'>
                <ReplyFormContainer comment={comment} 
                closeForm={this.handleReplyClose}
                openReplies={this.openReplies} />
            </div>
        ) : (
            <>
            </>
        );
        
        // const replyButton = currentUser ? (
        //     <button className='reply-btn-transparent' onClick={this.handleReply}>REPLY</button>
        // ) : (
        //     <button className='reply-btn-transparent'>
        //         <Link to='/login'>REPLY</Link>
        //     </button>
        // )

        return (
            <li className='comment flex'>
                <section className='comment-main flex'>
                    <FontAwesomeIcon className={iconClass} icon={faUserCircle} />
                    <div className='comment-content flex'>
                        <div className='comment-info flex'>
                            <h4>{comment.author.username}</h4>
                            <p>{comment.timeSinceCommented}</p>
                        </div>
                        <p className='comment-body'>{comment.body}</p>
                        <div className='likes-reply flex'>
                            <p>Likes placeholder</p>
                            <button className='reply-btn-transparent' onClick={this.handleReply}>REPLY</button>
                        </div>
                    </div>
                </section>
                <section className='comment-footer'>
                    {replyFormRender}
                    {viewReplesRender}
                    {repliesRender}
                </section>
            </li>
        )
    }

}

export default CommentIndexItem;