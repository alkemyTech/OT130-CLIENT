import React from 'react';
import { Container } from 'react-bootstrap';
import { LOGOJUGUETES } from '../../assets';
/* 
Criterios de aceptacion: El componente debe estar diseñado para visualizarse primero para dispositivos moviles y contener breaking points para los diferentes tamaños de pantalla. El componente debe tener:

Logo ONG, Logo campaña, Eslogan de campaña

En dispositivos moviles móviles: solo va el logo campaña.

En dispositivos tablet: va logo de campaña + logo de ONG

Para pc de escritorio : va logo de campaña + logo de ONG + eslogan.

Para smart tv: va logo de campaña + logo de ONG + eslogan. Se debe agregar color al fondo de header con transparencia.



*/


const Header = () => {
  return (
    <header className="header">
      <Container>
    
      </Container>
    </header>
  );
}
 
export default Header;