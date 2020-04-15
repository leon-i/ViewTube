import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class ReplyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author_id: '',
            commentable_type: '',
            commentable_id: '',
            body: ''
        }

        this.resetState = this.resetState.bind(this);
        this.handleTextAreaClick = this.handleTextAreaClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetState() {
        this.setState({
            author_id: '',
            commentable_type: '',
            commentable_id: '',
            body: ''
        })
    }

    handleTextAreaClick(e) {
        const { currentUser, history } = this.props;
        if (currentUser) {
            this.setState({ open: true });
        } else {
            history.push('/login');
        }
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { currentUser, comment, createReply } = this.props;

        if (comment.commentable_type !== 'Comment') {
            const reply = Object.assign({}, {
                author_id: currentUser.id,
                commentable_id: comment.id,
                commentable_type: 'Comment'
            }, { body: this.state.body });

            createReply(reply);
            this.resetState();
        } else {
            const reply = Object.assign({}, {
                author_id: currentUser.id,
                commentable_id: comment.commentable_id,
                commentable_type: 'Comment'
            }, { body: this.state.body });

            createReply(reply);
            this.resetState();
        }
    }

    render() {
        const { body } = this.state;
        const { comment, closeForm } = this.props;
        const prefill = comment.commentable_type === 'Comment' && !body.length ? `@${comment.author.username} ` : '';

        const submitButtonRender = body.length ? (
            <button className='comment-btn' onClick={this.handleSubmit}>REPLY</button>
        ) : (
                <button className='comment-btn disabled'>REPLY</button>
            )
        return (
            <div className='comment-form-container flex'>
                <div className='open-form flex'>
                    <FontAwesomeIcon className='reply-icon' icon={faUserCircle} />
                    <textarea className='comment-area reply-area' cols="30" rows="10"
                        placeholder='Add a public reply...'
                        value={`${prefill}${body}`}
                        onChange={this.handleChange('body')}
                        onClick={this.handleTextAreaClick}>
                    </textarea>
                </div>
                <section className='comment-form-btns flex'>
                    <button className='cancel-btn' onClick={closeForm}>CANCEL</button>
                    {submitButtonRender}
                </section>
            </div>
        )
    }
}

export default ReplyForm;