import React from 'react';
import { Card } from 'react-bootstrap';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { useRequestMembers } from '../../customHooks/useRequestMembers';
import '../CardListStyles.css';

const MembersList = () => {
  const [allMembers, isLoading] = useRequestMembers([]);

  return (
    <div>
      <h1 className="my-4">Listado De Miembros</h1>
      <ul className="row row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-around">
        {!isLoading &&  allMembers.length > 0 ? (
          allMembers.map((member) => {
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
