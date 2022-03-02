import React, { useEffect } from 'react';
import { useRequestActivities } from '../../customHooks/useRequestActivities';
import { Container, Row, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivities } from '../../actions/activitiesActions';
import { selectActivities } from '../../reducers/activitiesReducer';
import { UNKNOWN_ERROR, NETWORK_ERROR } from '../../Helpers/messagesText';
import { ErrorAlert } from '../Alert';
import '../CardListStyles.css';
import { Spinner } from '../Spinner/Spinner';
import { ActivityItem } from './ActivityItem';

const ActivitiesList = () => {
  const dispatch = useDispatch();

  const { isLoading, error, activities } = useSelector(selectActivities);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [fetchActivities, dispatch]);

  if (error) {
    ErrorAlert(error === 'Network Error' ? NETWORK_ERROR : UNKNOWN_ERROR);
  }

  return (
    <Container>
      <Row className="text-center my-3">
        <h1>Listado Actividades</h1>
      </Row>
      <Row className='justify-content-center'>
        {activities.length > 0 ? (
          activities.map((activity) => {
            return (
             <ActivityItem activity={activity}/>
            );
          })
        ) : isLoading ? (
          <div className="text-center">
            <Spinner />
          </div>
        ) : (
          <p>{!error && 'No hay actividades'}</p>
        )}
      </Row>
    </Container>
  );
};

export default ActivitiesList;
