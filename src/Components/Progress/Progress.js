import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './Progress.css';

const Progress = ({ now }) => {

    return (
        <ProgressBar className='progress' now={now}/>
    );
};

export default Progress;
