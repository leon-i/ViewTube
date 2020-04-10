import React from 'react';
import Step1 from './steps/step_1';
import Step2 from './steps/step_2';

class VideoUploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            videoFile: null,
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

        fileReader.onloadend = () => {
            this.setState({
                title: file.name,
                videoFile: file,
                videoUrl: fileReader.result
            })
        }

        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            this.setState({ videoFile: null, videoUrl: '' })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { title, description, videoFile } = this.state;
        const formData = new FormData();
        formData.append('video[title]', title);
        formData.append('video[description]', description);
        formData.append('video[uploader_id]', this.props.currentUser.id)
        formData.append('video[video]', videoFile);
        this.props.createVideo(formData);
    }

    render() {
        const { closeModal } = this.props;
        const currentStep = !this.state.videoFile ? (
            <Step1 closeModal={closeModal}
                findFileInput={this.findFileInput}
                handleUpload={this.handleUpload} />
        ) : (
                <Step2 closeModal={closeModal}
                    title= {this.state.title}
                    fileName={this.state.videoFile.name}
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