import React, { useEffect, useState } from 'react';
import ListTexts from '../ListTexts/ListTexts';
import Title from '../Title/Title';
import SocialMediaWidgets from '../SocialMediaWidgets/SocialMediaWidgets';
import { getData } from '../../Services/aboutService';

const About = () => {
    const [dataTexts, setDataTexts] = useState();
    const [errorMessage, setErrorMessage] = useState();

    useEffect(() => {
        handleGetData();
    }, [])

    const handleGetData = async () => {
        const { error, data } = await getData();
        (error) ? setErrorMessage(error) : setDataTexts(data);
    }

    return (    
        <>
            { dataTexts
            ?  <>
                    <Title text={dataTexts[0].title}/>
                    <ListTexts itemSection={dataTexts}/>
                    <SocialMediaWidgets/>
                </>
            : <h1>{errorMessage}</h1>
            }
        </>
    )
};

export default About;