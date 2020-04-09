import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Step1 = ({closeModal, findFileInput, handleUpload}) => (
    <>
        <header className='video-upload-header flex'>
            <h2>Upload Video</h2>
            <FontAwesomeIcon icon={faTimes} onClick={closeModal} />
        </header>
        <section className='video-upload-form-content flex'>
            <img src={window.uploadIcon} alt="upload-icon" />
            <h4>Drag and drop a file you want to upload</h4>
            <p>Your video will be private until you publish it</p>
            <button onClick={findFileInput}>SELECT FILE
                <input type="file" name="file" id='file' accept='video/*' onClick={handleUpload} />
            </button>
        </section>
    </>
);

export default Step1;