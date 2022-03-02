import React, { useEffect, useState } from 'react';
import ListTexts from '../ListTexts/ListTexts';
import Title from '../Title/Title';
import SocialMediaWidgets from '../SocialMediaWidgets/SocialMediaWidgets';
import { getData } from '../../Services/aboutService';
import { Spinner } from '../Spinner/Spinner';
import { ErrorAlert } from '../Alert';

const About = () => {
  const [dataTexts, setDataTexts] = useState();
  const [loading, setLoading] = useState( false );

  useEffect(() => {
    setLoading( true );
    handleGetData();
  }, [])

  const handleGetData = async () => {
    const { error, data } = await getData();
    if ( error ) {
      ErrorAlert( error );
    } else {
      setDataTexts( data );      
    }
    setLoading( false );
  };

  return (
    <>
      {loading && <Spinner />}
      {dataTexts &&
        <>
          <Title text={dataTexts[0].title} />
          <ListTexts itemSection={dataTexts} />
          <SocialMediaWidgets />
        </>
      }
    </>
  )
};

export default About;