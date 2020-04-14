import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: this.props.comment,
            open: false
        }
        this.handleTextAreaClick = this.handleTextAreaClick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextAreaClick(e) {
        const { currentUser, history } = this.props;
        if (currentUser) {
            this.setState({ open: true });
        } else {
            history.push('/login');
        }
    }

    handleCancel(e) {
        this.setState({ open: false });
    }

    handleChange(field) {
        return (e) => {
            this.setState({ comment: { [field]: e.target.value } });
        }
    }

    handleSubmit(e) {
        const { currentUser, videoId, formType, createComment } = this.props
        if (formType === 'comment') {
            this.setState({
                comment: {
                    author_id: currentUser.id,
                    commentable_id: videoId,
                    commentable_type: 'Video'
                }
            });

            createComment(this.state.comment);
        }
    }

    render() {
        const { open, comment: { body } } = this.state;
        const submitButtonText = this.props.formType === 'comment' ? 'COMMENT' : 'REPLY';
        const submitButtonRender = body.length ? (
            <button className = 'submit-btn' onClick={this.handleSubmit}>{submitButtonText}</button>
        ) : (
            <button className='submit-btn disabled'>{submitButtonText}</button>
        )
        const formRender = open ? (
            <>
                <div className='open-form flex'>
                    <textarea className='comment-area open' cols="30" rows="10"
                        placeholder='Add a public comment...'
                        onChange={this.handleChange('body')}
                        onClick={this.handleTextAreaClick}>
                    </textarea>
                    <section className='comment-form-btns flex'>
                        <button onClick={this.handleCancel}>CANCEL</button>
                        { submitButtonRender }
                    </section>
                </div>
            </>
        ) : (
            <>
                < textarea className = 'comment-area closed' cols = "30" rows = "10"
                    placeholder = 'Add a public comment...'
                    onChange = {this.handleChange('body')}
                    onClick={this.handleTextAreaClick}>
                </textarea >
            </>
        );
        return (
            <div className='comment-form-container flex'>
                <FontAwesomeIcon icon={faUserCircle} />
                { formRender }
            </div>
        )
    }
}

export default CommentForm;