import React from 'react';
import { Container } from "react-bootstrap";

import Title from '../Title/Title';
import './ListTexts.css';

const ListTexts = ({ itemsSection }) => {

    return (
        <>
            {itemsSection.map(({title, subtitle, description, image}, index) => {
                return(
                    <div key={index}>
                        <Title text={title} image={image}/>
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