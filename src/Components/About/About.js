import React from 'react';


import Title from '../Title/Title';
import Texts from '../About/Texts';
const data = require('./about.json');
const About = () => {
    
    /* 
    
        Criterios de aceptacion: Se deberá crear una carpeta /About donde se agregaran todos los componentes referidos a esta página.
        El componente principal deberá renderizarse al ingresar a la ruta /nosotros.
        En la sección superior, mostrará el título "Nosotros", utilizando el componente para mostrar títulos.
        Luego, mostrará el texto "Sobre Nosotros" de la ONG, que deberá poder recibir un texto a renderizar de forma dinámica, ya que se obtendrá de la API.
    */
    return (
        <>
            <Title text="Nosotros" />
            <Texts texts={data}/>
        </>
    )
};

export default About;
