import React from 'react';
import Title from '../Title/Title';
import Texts from '../About/Texts';

const data = require('./about.json');
const About = () => {
    
    return (
        <>
            <Title text="Nosotros" />
            <Texts texts={data}/>
        </>
    )
};

export default About;
