import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Step2 = ({ closeModal, title, fileName, handleChange, handleSubmit }) => {
    const errorClass = title.length ? 'textarea-container title' : ' textarea-container title-error';
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
                </section>
                <section className='video-mini-player flex'>
                    <div className='video-container'>
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