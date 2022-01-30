import React, { useEffect, useState } from 'react';
import ListTexts from '../ListTexts/ListTexts';
import Title from '../Title/Title';
import { getData } from '../../Services/aboutService';


const About = () => {
    const [dataTexts, setDataTexts] = useState();
    const [errorMessage, setErrorMessage] = useState();

    useEffect(() => {
        handleGetData();
    }, [])

    const handleGetData = async () => {
        const response = await getData();
        response.error ?  setErrorMessage(response) : setDataTexts(response);
    }

    return (    
        <>
            {dataTexts ?
            <>
                <Title text={dataTexts[0].title}/>
                <ListTexts itemSection={dataTexts}/>
            </>
            :<h1>{errorMessage}</h1>}   
        </>
    )
};

export default About;