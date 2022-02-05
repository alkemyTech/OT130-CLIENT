import React, { useEffect, useState } from 'react';
import ListTexts from '../ListTexts/ListTexts';
import Title from '../Title/Title';
import { getData } from '../../Services/aboutService';
import { Spinner } from '../Spinner/Spinner';
import { ErrorMessage } from '../ErrorMesage/ErrorMessage';

const About = () => {
  const [dataTexts, setDataTexts] = useState();
  const [errorMessage, setErrorMessage] = useState( null );
  const [loading, setLoading] = useState( false );

  useEffect(() => {
    setLoading( true );
    handleGetData();
  }, [])

  const handleGetData = async () => {
    const { error, data } = await getData();
    if ( error ) {
      setErrorMessage( error );
    } else {
      setDataTexts( data );
      setErrorMessage( null );
    }
    setLoading( false );
  };

  return (
    <>
      {loading && <Spinner />}
      {errorMessage && <ErrorMessage message={ errorMessage } />}
      {dataTexts &&
        <>
          <Title text={dataTexts[0].title} />
          <ListTexts itemSection={dataTexts} />
        </>
      }
    </>
  )
};

export default About;