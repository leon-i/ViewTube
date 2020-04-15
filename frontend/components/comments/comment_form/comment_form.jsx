import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author_id: '',
            commentable_type: '',
            commentable_id: '',
            body: '',
            open: false
        }

        this.resetState = this.resetState.bind(this);
        this.handleTextAreaClick = this.handleTextAreaClick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetState() {
        this.setState({
            author_id: '',
            commentable_type: '',
            commentable_id: '',
            body: '',
            open: false
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

    handleCancel(e) {
        this.setState({ open: false });
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value } );
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { currentUser, videoId, formType, createComment } = this.props

        if (formType === 'comment') {
            const comment = Object.assign({}, {
                author_id: currentUser.id,
                commentable_id: videoId,
                commentable_type: 'Video'
            }, { body: this.state.body });

            createComment(comment);
            this.resetState();
        }
    }

    render() {
        const { open, body } = this.state;
        const commentAreaClass = open ? 'comment-area open' : 'comment-area'
        const submitButtonText = this.props.formType === 'comment' ? 'COMMENT' : 'REPLY';
        const submitButtonRender = body.length ? (
            <button className = 'comment-btn' onClick={this.handleSubmit}>{submitButtonText}</button>
        ) : (
            <button className='comment-btn disabled'>{submitButtonText}</button>
        )
        const formRender = open ? (
            <section className='comment-form-btns flex'>
                <button className='cancel-btn'onClick={this.handleCancel}>CANCEL</button>
                { submitButtonRender }
            </section>
        ) : (
            <>
            </>
        );
        return (
            <div className='comment-form-container flex'>
                <div className='open-form flex'>
                    <FontAwesomeIcon icon={faUserCircle} />
                    <textarea className={commentAreaClass} cols="30" rows="10"
                        placeholder='Add a public comment...'
                        value={body}
                        onChange={this.handleChange('body')}
                        onClick={this.handleTextAreaClick}>
                    </textarea>
                </div>
                {formRender}
            </div>
        )
    }
}

export default CommentForm;