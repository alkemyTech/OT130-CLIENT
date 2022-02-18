import React, { useEffect } from 'react';
import { useRequestActivities } from '../../customHooks/useRequestActivities';
import { Container, Spinner, Row, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivities } from '../../actions/activitiesActions';
import { selectActivities } from '../../reducers/activitiesReducer';
import { UNKNOWN_ERROR, NETWORK_ERROR } from '../../Helpers/messagesText';
import { ErrorAlert } from '../Alert';
import '../CardListStyles.css';
import { Spinner } from '../Spinner/Spinner';

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
      <Row className="text-center my-3"><h1>Listado Actividades</h1></Row>
      <Row>
        {activities.length > 0 ? (
          activities.map((activity) => {
            return (
              <div className="p-2 card-info" key={activity.id}>
                <Card.Title>{activity.name}</Card.Title>
                <p>{activity.description}</p>
              </div>
            );
          })
        ) : isLoading ? (
          <div className="text-center">
            <Spinner/>
          </div>
        ) : (
          <p>{!error && 'No hay actividades'}</p>
        )}
      </Row>
    </Container>
  );
};

export default ActivitiesList;
