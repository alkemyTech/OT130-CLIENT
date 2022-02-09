import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './Progress.css';

const Progress = ({ progressValue }) => {
    return (
        <ProgressBar className='progress' now={progressValue}/>
    );
};

export default Progress;
