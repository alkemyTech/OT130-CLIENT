import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import ActivitiesContent from './ActivitiesContent'

export const ActivityItem = ({ activity, handleDeleteActivity, backoffice }) => {
  const { id, name, image, updated_at } = activity;

  return (
    <>
    <div className="m-2 card shadow cardWidth col-6">
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img src={image} className="img-fluid rounded-start" alt="Imagen de actividad" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3>Nombre: {name}</h3>
            <p className="card-text">
              <small className="text-muted">
                Última actualización: {updated_at.substring(0, 10)}
              </small>
            </p>
           {backoffice ? <div className="d-flex justify-content-between">
              <NavLink to={`/backoffice/activities/edit/${id}`} className="btn btn-secondary">
                Editar
              </NavLink>
              <button className="btn btn-danger" onClick={() => handleDeleteActivity(id)}>
                Eliminar
              </button>
            </div>: <ActivitiesContent contentHtml={activity.description}/>}
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};