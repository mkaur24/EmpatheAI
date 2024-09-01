import React, { useState } from 'react';
import UploadAudio from './components/UploadAudio';
import Transcription from './components/Transcription';
import Translation from './components/Translation';
import Summary from './components/Summary';
import './App.css';

function App() {
    const [transcription, setTranscription] = useState('');
    const [translation, setTranslation] = useState('');
    const [summary, setSummary] = useState('');

    return (
        <div className="app-container">
            <h1>EmpatheAI</h1>
            <UploadAudio setTranscription={setTranscription} setTranslation={setTranslation} setSummary={setSummary} />
            <div className="content-container">
                {transcription && <Transcription transcription={transcription} />}
                {translation && <Translation translation={translation} />}
            </div>
            {summary && <Summary summary={summary} />}
        </div>
    );
}

export default App;
