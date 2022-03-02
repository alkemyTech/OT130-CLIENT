import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ActivityItem } from './ActivityItem';
import { Spinner } from '../Spinner/Spinner';
import { deleteActivity } from '../../Services/activitiesService';
import { fetchActivities } from '../../actions/activitiesActions';
import { selectActivities } from '../../reducers/activitiesReducer';
import { ErrorAlert, SuccessAlert } from '../Alert';
import '../CardListStyles.css';
import { NETWORK_ERROR, UNKNOWN_ERROR } from '../../Helpers/messagesText';

const BackoficeActivitiesList = () => {
  const dispatch = useDispatch();

  const { activities, error, isLoading } = useSelector(selectActivities);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [fetchActivities]);

  const handleDeleteActivity = async (id) => {
    const { error, data } = await deleteActivity(id);
    if (data?.success) {
      SuccessAlert('Actividad eliminada correctamente.');
      dispatch(fetchActivities());
    } else {
      ErrorAlert('Error', error?.message === 'NetworkError' ? NETWORK_ERROR : UNKNOWN_ERROR);
    }
  };

  if (error) {
    ErrorAlert(
      'Error al cargar actividades',
      error === 'Network Error' ? NETWORK_ERROR : UNKNOWN_ERROR,
    );
  }

  return (
    <Container>
      <h1 className="">Listado de actividades</h1>
      <Link to="/backoffice/activities/create" className="m-2 btn btn-primary">
        Agregar actividad
      </Link>
      <Row className="justify-content-center">
        {activities.length > 0 ? (
          activities.map((activity) => {
            return (
              <ActivityItem
              backoffice
                key={activity.id}
                activity={activity}
                handleDeleteActivity={handleDeleteActivity}
              />
            );
          })
        ) : isLoading ? (
          <Spinner />
        ) : (
          <p className="fs-2">No hay actividades</p>
        )}
      </Row>
    </Container>
  );
};

export default BackoficeActivitiesList;
