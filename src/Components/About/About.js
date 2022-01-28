import React from 'react';
import ListTexts from '../ListTexts/ListTexts';
import Title from '../Title/Title';
const data = require('./about.json');

const About = () => {

    return (
        <>
            <section>
                <Title text='Nosotros'/>
            </section>
            <section >
                <ListTexts itemSection={data} />
            </section>
        </>
    )
};

export default About;