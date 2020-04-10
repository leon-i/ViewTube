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
            thumbnailFile: null,
            thumbnailUrl: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleThumbnail = this.handleThumbnail.bind(this);
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

    handleThumbnail(e) {
        const imgFile = e.target.files[0];
        if (imgFile) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(imgFile);
            fileReader.onloadend = () => {
                this.setState({
                    thumbnailFile: imgFile,
                    thumbnailUrl: fileReader.result
                });
            }
        } else {
            this.setState({ thumbnailFile: null, thumbnailUrl: ''})
        }
    }

    handleUpload(e) {
        const file = e.target.files[0];


        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onloadend = () => {
                this.setState({
                    title: file.name,
                    videoFile: file,
                    videoUrl: fileReader.result
                })
            }
        } else {
            this.setState({ videoFile: null, videoUrl: '' })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { title, description, videoFile, thumbnailFile } = this.state;
        debugger
        const formData = new FormData();
        formData.append('video[title]', title);
        formData.append('video[description]', description);
        formData.append('video[uploader_id]', this.props.currentUser.id)
        formData.append('video[video]', videoFile);
        formData.append('video[thumbnail]', thumbnailFile);
        this.props.createVideo(formData);
    }

    render() {
        const { closeModal } = this.props;
        const { title, videoFile, videoUrl, thumbnailFile, thumbnailUrl } = this.state;
        const currentStep = !videoFile ? (
            <Step1 closeModal={closeModal}
                findFileInput={this.findFileInput}
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
}

export default VideoUploadForm;