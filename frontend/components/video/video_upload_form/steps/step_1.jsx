import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Step1 = ({closeModal, fileError, findFileInput, handleDragOver, handleDrop, handleUpload}) => {
    const errorClass = fileError ? 'file-error' : 'no-file-error';
    return (
        <div onDragOver={handleDragOver} onDrop={handleDrop}>
            <header className='video-upload-header flex'>
                <h2>Upload Video</h2>
                <FontAwesomeIcon icon={faTimes} onClick={closeModal} />
            </header>
            <section className='video-upload-form-content flex'>
                <img src={window.uploadIcon} alt="upload-icon" />
                <h4>Drag and drop a file you want to upload</h4>
                <p>Your video will be private until you publish it</p>
                <div className={errorClass}>
                    <FontAwesomeIcon className='XS-icon' icon={faExclamationTriangle} />
                    <p className='file-error'>Invalid file format</p>
                </div>
                
                <button onClick={findFileInput}>SELECT FILE
                    <input type="file" name="file" id='file' accept='video/*' onChange={handleUpload} />
                </button>
            </section>
        </div>
    )

};

export default Step1;