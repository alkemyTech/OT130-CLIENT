import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './Progress.css';

const Progress = ({ progressDone }) => {
    return (
        <ProgressBar className='progress' progressDone={progressDone}/>
    );
};

export default Progress;
