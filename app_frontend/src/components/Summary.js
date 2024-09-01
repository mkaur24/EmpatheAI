import React from 'react';
import './Summary.css';

function Summary({ summary }) {
    return (
        <div className="summary-container">
            <h2>Summary</h2>
            <p>{summary}</p>
        </div>
    );
}

export default Summary;
