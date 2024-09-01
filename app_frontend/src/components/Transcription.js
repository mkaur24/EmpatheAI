import React from 'react';
import './Transcription.css';

function Transcription({ transcription }) {
    return (
        <div className="transcription-container">
            <h2>Transcription</h2>
            <p>{transcription}</p>
        </div>
    );
}

export default Transcription;

