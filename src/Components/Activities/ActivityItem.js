import React, { useRef } from 'react';
import { Modal as BootstrapModal } from "bootstrap";
import ActivitiesForm from './ActivitiesForm';

export const ActivityItem = ({ activity, handleDeleteActivity }) => {

  const modalRef = useRef();

  const showModal = () => {
    const modalEle = modalRef.current;
    const bsModal = new BootstrapModal( modalEle, {
      backdrop: "static",
      keyboard: false
    });
    bsModal.show();
  };

  const hideModal = () => {
    const modalEle = modalRef.current;
    const bsModal = BootstrapModal.getInstance( modalEle );
    bsModal.hide();
  };
  const { id, name, image, createdAt } = activity;

  return <>
    <div className="card shadow m-1 cardWidth col-6" key={id}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image}
            className="img-fluid rounded-start"
            alt="Imagen de actividad"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3>Nombre: {name}</h3>
            <p className="card-text">
              <small className="text-muted">Fecha de creacion: {createdAt}</small>
            </p>
            <div className='d-flex justify-content-between'>
              <button
                type="button"
                className="btn btn-primary"
                onClick={showModal}
              >
                Editar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteActivity(id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        ref={modalRef}
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalLabel"
              >
                {name}
              </h5>
            </div>
            <div className="modal-body">
              <ActivitiesForm
                activity={activity}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={hideModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};
