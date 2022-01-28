import React from 'react';
import { Container } from "react-bootstrap";


import './ListTexts.css';

const ListTexts = ({ itemSection }) => {

    return (
        <>
            {itemSection.map(({subtitle, description ,id}, index) => {
                return(
                    <div key={index}>
                        <Container className="mt-5" >
                            <h2 className="list-texts-subtitle mb-4">{subtitle}</h2>
                            <p className="list-texts-description">{description}</p>
                        </Container>
                    </div>
                )
            })}
        </>
    );
};

export default ListTexts;