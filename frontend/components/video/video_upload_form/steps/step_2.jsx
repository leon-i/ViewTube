import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faImage } from '@fortawesome/free-solid-svg-icons';

const Step2 = ({ closeModal, title, fileName, videoUrl, thumbnailFile, thumbnailUrl, findFileInput, handleThumbnail, handleChange, handleSubmit }) => {
    const errorClass = title.length ? 'textarea-container title' : ' textarea-container title-error';
    const thumbnail = thumbnailFile ? (
        <img className='thumbnail' src={thumbnailUrl} alt="thumbnail"/>
    ) : (
        <div></div>
    );
    
    return (
        <>
            <header className='video-upload-header flex'>
                <h2>{title}</h2>
                <FontAwesomeIcon icon={faTimes} onClick={closeModal} />
            </header>
            <section className='video-form-2 flex'>
                <section className='video-details-form flex'>
                    <h2>Details</h2>
                    <div className={errorClass}>
                        <div className='outer'>
                            <p className='textarea-header'>Title(required)</p>
                            <textarea className='textarea' cols="30" rows="10" 
                                placeholder='Add a title that describes your video' 
                                onChange={handleChange('title')}
                                value={title}>
                            </textarea>
                        </div>
                    </div>
                    <div className='textarea-container description'>
                        <div className='outer'>
                            <p className='textarea-header'>Description(optional)</p>
                            <textarea className='textarea' cols="30" rows="10"
                                placeholder='Tell viewers about your video' onChange={handleChange('description')}>
                            </textarea>
                        </div>
                    </div>
                    <div className='thumbnail-upload-form flex'>
                        <h4>Thumbnail</h4>
                        <p>Select or upload a picture that shows what's in your video.
                            A good thumbnail stands out and draws viewers' attention.
                        </p>
                        <div className='thumbnail-upload-container flex'>
                            <div className='upload-btn flex' onClick={findFileInput}>
                                <FontAwesomeIcon icon={faImage} />
                                <p>Upload thumbnail</p>
                                <input type="file" name="file" id='file' accept='image/*' onChange={handleThumbnail} />
                            </div>
                            { thumbnail }
                        </div>
                    </div>
                </section>
                <section className='video-mini-player flex'>
                    <div className='video-upload-player-container'>
                        <video src={videoUrl}
                            controls={true}></video>
                    </div>
                    <div className='video-info flex'>
                        <p>Filename</p>
                        <h4>{fileName}</h4>
                    </div>
                    <button onClick={handleSubmit}>PUBLISH</button>
                </section>
            </section>
        </>
    )
};

export default Step2;