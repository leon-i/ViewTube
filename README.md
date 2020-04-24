# ViewTube
[Live site](https://viewtubeapp.herokuapp.com/#/)

> Fullstack YouTube clone. Made with **React**, **Redux**, and **Rails**.

## Technologies Used  
 * **Backend**
    * PostgreSQL
    * Ruby on Rails
 * **Frontend**
    * React.js
    * Redux
* **Storage**
    * Amazon Web Services S3
  
## Features
  
### Comments Section
  
![comments_demo](https://user-images.githubusercontent.com/56734437/79587091-fc57f680-809f-11ea-9402-436774f73121.gif)
  
As seen below, each `CommentIndexItem` fully contains its own replies, and reply forms.
  
*CommentIndex Render*
```javascript
    render() {
        const comments = Object.values(this.props.comments);
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
```

*CommentIndexItem Render*
```javascript
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

```

This is done by having separate `ReplyIndex` and `ReplyForm` components, which conditionally render based on whether or not the individual comment item has replies, or if the user wants to make a reply. A challenged I faced was getting the comments section to render between clicks on videos nested in the `VideoSideIndex` of the `VideoShow` component, but adding unique keys to each `CommentIndex` component based on the current video's id fixed this issue.
  
### Multi-step Video Upload Form
  
![video_form_demo_1](https://user-images.githubusercontent.com/56734437/79588289-b56b0080-80a1-11ea-861d-9564d2e9a3c3.gif)
![video_form_demo_2](https://user-images.githubusercontent.com/56734437/79588322-c156c280-80a1-11ea-8493-2da2c769a7b5.gif)
  
The `VideoUploadForm` component has 2 steps, and transitions between them based on whether or not a video has been uploaded.  
  
*VideoUploadForm Render*
```javascript
  render() {
        const { closeModal } = this.props;
        const { title, videoFile, videoUrl, thumbnailFile, thumbnailUrl, fileError } = this.state;
        const currentStep = !videoFile ? (
            <Step1 closeModal={closeModal}
                fileError={fileError}
                findFileInput={this.findFileInput}
                handleDragOver={this.handleDragOver}
                handleDrop={this.handleDrop}
                handleUpload={this.handleUpload} />
        ) : (
                <Step2 closeModal={closeModal}
                    title= {title}
                    fileName={videoFile.name}
                    videoUrl={videoUrl}
                    thumbnailFile={thumbnailFile}
                    thumbnailUrl={thumbnailUrl}
                    findFileInput={this.findFileInput}
                    handleThumbnail={this.handleThumbnail}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} />
        );
        return (
            <div className='video-upload-form flex'>
                { currentStep }
            </div>
        )
    }
```
  
As soon as a video has been uploaded, the state updates, and the form renders `Step2`, where users can edit the details of the video and add thumbnails.  
  
## Future Features  
  
 * **Likes**  
    * Likeable/dislikeable videos, comments, replies
 * **Search**  
    * Users are able to search for specific videos
 * **Full video preview in video upload form**
    * Users are able to see their full uploaded video in the second step of the video upload form
