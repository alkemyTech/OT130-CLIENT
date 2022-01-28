import React, { useEffect, useState } from 'react';
import { getData } from '../../Services/aboutService';
import ListTexts from '../ListTexts/ListTexts';
/* const data = require('./about.json'); */
import Title from '../Title/Title';
const About = () => {

    const [dataTexts, seteDataTexts] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);

    const handleGetData = async () => {
        const { data , error } = await getData(); // Se debe cambiar por el endpoint correspondiente de la API
        error ? setErrorMessage(error.error) : seteDataTexts(data.data);
    }

    useEffect(() => {
        handleGetData()
    }, []);

    return (
        errorMessage.length 
        ?   <h1>{errorMessage}</h1> 
        :   <>
                <section>
                    <Title text='Nosotros'  />
                </section>
                <section >
                    <ListTexts itemSection={dataTexts} />
                </section>
            </>
    )
};

export default About;