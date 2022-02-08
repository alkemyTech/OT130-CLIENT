import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

function Loader() {
    return (
        <>
            <Spinner animation="border" role="status" />
        </>
    )
}

export default Loader;
