import React from 'react';
import './Translation.css';

function Translation({ translation }) {
    return (
        <div className="translation-container">
            <h2>Translation</h2>
            <p>{translation}</p>
        </div>
    );
}

export default Translation;
