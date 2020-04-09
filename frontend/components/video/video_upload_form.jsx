import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUpload } from '@fortawesome/free-solid-svg-icons';

class VideoUploadForm extends React.Component {
    render() {
        return (
            <div className='video-upload-form flex'>
                <header className='video-upload-header flex'>
                    <h2>Upload Video</h2>
                    <FontAwesomeIcon icon={faTimes} />
                </header>
                <section className='video-upload-form-content flex'>
                    <img src={window.uploadIcon} alt="upload-icon"/>
                    <h4>Drag and drop a file you want to upload</h4>
                    <p>Your video will be private until you publish it</p>
                    <button>SELECT FILE</button>
                </section>
            </div>
        )
    }
}

export default VideoUploadForm;