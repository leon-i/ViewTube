import React from 'react';
import Step1 from './steps/step_1';
import Step2 from './steps/step_2';

class VideoUploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploader_id: this.props.currentUser.id,
            title: '',
            description: '',
            fileName: '',
            videoUrl: '',
            step: 1
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    findFileInput() {
        document.getElementById('file').click();
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleUpload(e) {
        const file = e.target.files[0];
        const fileReader = new FileReader();

        if (file) {
            fileReader.readAsDataURL(file);
        }

        fileReader.onloadend = () => {
            this.setState({
                title: file.name,
                fileName: file.name,
                videoUrl: fileReader.result,
            })
        }
    }

    handleSubmit(e) {
        this.props.createVideo(this.state);
    }

    render() {
        const { closeModal } = this.props;
        const currentStep = this.state.step === 1 ? (
            <Step1 closeModal={closeModal}
                findFileInput={this.findFileInput}
                handleUpload={this.handleUpload} />
        ) : (
                <Step2 closeModal={closeModal}
                    title= {this.state.title}
                    fileName={this.state.fileName}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} />
        );
        return (
            <div className='video-upload-form flex'>
                { currentStep }
            </div>
        )
    }
}

export default VideoUploadForm;