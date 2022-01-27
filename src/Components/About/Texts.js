import React from 'react';
import { Container } from "react-bootstrap";

const Texts = ({ texts }) => {

    return (
        <Container>
            {texts.map((text, index) => {
                return (
                    <div key={index}>
                        <h1 className='mt-4'>{text.title}</h1>
                        <p>
                            {text.description}
                        </p>
                    </div> 
                )
            })}
        </Container>
    );
};

export default Texts;
