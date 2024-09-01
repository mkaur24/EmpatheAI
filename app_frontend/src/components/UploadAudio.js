import React, { useState } from 'react';
import axios from 'axios';
import './UploadAudio.css';

function UploadAudio({ setTranscription, setTranslation, setSummary }) {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        setLoading(true);
        setError('');
        try {
            console.log('Uploading file...');
            const response = await axios.post('https://b95c-104-196-227-156.ngrok-free.app/upload', formData); // Replace with your actual ngrok URL
            console.log('Response received:', response.data);
            setTranscription(response.data.transcription);
            setTranslation(response.data.translation);
            setSummary(response.data.summary);
        } catch (error) {
            console.error('Error uploading file:', error);
            setError('Failed to upload file. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="upload-container">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {loading && <div className="spinner"></div>}
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default UploadAudio;
