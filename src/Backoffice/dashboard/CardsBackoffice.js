import React from 'react'
import { BiCategoryAlt, BiListCheck, BiMessageSquareDetail, BiNews, BiSlideshow } from 'react-icons/bi';
import {GiOrganigram} from 'react-icons/gi';
import {FaUsers} from 'react-icons/fa';
import {ImUsers} from 'react-icons/im';
import CardBackoffice from './CardBackoffice';
import { BACKOFFICE_PATHS } from '../../routes/config';
import { Container } from 'react-bootstrap';

const CardsBackoffice = () => {
    const cardsBackoffice = [
        {
            id: 1,
            title: 'Home',
            icon: <BiNews />,
            path: '/backoffice/home'
        },
        {
            id: 2,
            title: 'Actividades',
            icon: <BiListCheck />,
            path: '/backoffice/activities'
        },
        {
            id: 3,
            title: 'Categorias',
            icon: <BiCategoryAlt />,
            path: '/backoffice/create-category'
        },
        {
            id: 4,
            title: 'Testimonios',
            icon: <BiMessageSquareDetail />,
            path: '/backoffice/create-testimonials'
        },
        {
            id: 5,
            title: 'Organización',
            icon: <GiOrganigram />,
            path: '/backoffice/organization'

        },
        {
            id: 6,
            title: 'Slides',
            icon: <BiSlideshow />,
            path: '/backoffice/slides'
        },
        {
            id: 7,
            title: 'Usuarios',
            icon: <FaUsers />,
            path: '/backoffice/users'
        },
        {
            id: 8,
            title: 'Miembros',
            icon: <ImUsers />,
            path: '/backoffice/members/create'
        },
    ]

    const mapCardsBackoffice = cardsBackoffice?.map((cardInfo) => (
        <CardBackoffice key={cardInfo.id} paths={BACKOFFICE_PATHS} cardInfo={cardInfo}/>
      ));

  return (
    <Container className='row row-cols-4 justify-content-center aling-items-center'>
        {mapCardsBackoffice}
    </Container>
  )
}

export default CardsBackoffice