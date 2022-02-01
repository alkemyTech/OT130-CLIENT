import React from 'react';
import { Card } from 'react-bootstrap';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import '../CardListStyles.css';

const MembersList = () => {
  // Mock de prueba cambiar por data de api.
  const membersMock = [
    {
      id: 1,
      name: 'Titulo de prueba',
      image:
        'https://tse3.mm.bing.net/th?id=OIP.5GtIUbFAWh5wMljmcMGgKgHaHa&pid=Api&P=0&w=172&h=172',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam',
      facebookUrl: '',
      linkedinUrl: '',
    },
    {
      id: 2,
      name: 'Titulo de prueba',
      image:
        'https://tse3.mm.bing.net/th?id=OIP.5GtIUbFAWh5wMljmcMGgKgHaHa&pid=Api&P=0&w=172&h=172',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam',
      facebookUrl: '',
      linkedinUrl: '',
    },
    {
      id: 3,
      name: 'Titulo de prueba',
      image:
        'https://tse3.mm.bing.net/th?id=OIP.5GtIUbFAWh5wMljmcMGgKgHaHa&pid=Api&P=0&w=172&h=172',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam',
      facebookUrl: '',
      linkedinUrl: '',
    },
    {
      id: 4,
      name: 'Titulo de prueba',
      image:
        'https://tse3.mm.bing.net/th?id=OIP.5GtIUbFAWh5wMljmcMGgKgHaHa&pid=Api&P=0&w=172&h=172',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam',
      facebookUrl: '',
      linkedinUrl: '',
    },
  ];

  return (
    <div>
      <h1 className="my-4">Listado De Miembros</h1>
      <ul className="row row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-around">
        {membersMock.length > 0 ? (
          membersMock.map((member) => {
            return (
              <div className="card-info m-1" key={member.id}>
                <Card.Img
                  variant="top"
                  className=" col-12 col-lg-6 my-2 mx-auto"
                  src={member.image}
                />
                <Card.Body className="p-0">
                  <Card.Title className="text-center my-3">{member.name}</Card.Title>
                  <Card.Text className="description-text">{member.description}</Card.Text>
                  <div className="d-flex justify-content-around">
                    <a href={member.facebookUrl} className="icon-social-media mx-2">
                      <FaFacebook />
                    </a>
                    <a href={member.linkedinUrl} className="icon-social-media mx-2">
                      <FaLinkedin />
                    </a>
                  </div>
                </Card.Body>
              </div>
            );
          })
        ) : (
          <p>No hay actividades</p>
        )}
      </ul>
    </div>
  );
};

export default MembersList;
