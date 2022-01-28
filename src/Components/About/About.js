import React from 'react';

import ListTexts from '../ListTexts/ListTexts';
const data = require('./about.json');

const About = () => {
    
    return (
        <>
            <ListTexts itemsSection={data}/>
        </>
    )
};

export default About;