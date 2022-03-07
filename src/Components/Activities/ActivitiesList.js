import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivities } from '../../actions/activitiesActions';
import { selectActivities } from '../../reducers/activitiesReducer';
import { ErrorAlert } from '../Alert';
import { Spinner } from '../Spinner/Spinner';
import { ActivityItem } from './ActivityItem';
import { selectUserAuth } from '../../reducers/auth/authReducer';
import ActivitySearchForm from './ActivitySearchForm';
import { UNKNOWN_ERROR, NETWORK_ERROR } from '../../Helpers/messagesText';
import '../CardListStyles.css';

const ActivitiesList = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUserAuth);
  const { isLoading, error, activities } = useSelector(selectActivities);
  const isAdmin = currentUser?.user?.role_id  ? currentUser.user.role_id === 2 : false;

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  if (error) {
    ErrorAlert(error === 'Network Error' ? NETWORK_ERROR : UNKNOWN_ERROR);
  }


  return (
    <Container>
      <Row className="text-center my-3">
        <h1>Listado Actividades</h1>
        <ActivitySearchForm className="d-flex justify-content-center m-auto" activities={activities}/>
      </Row>
      <Row className='justify-content-center'>
        {activities.length > 0 ? (
          activities.map((activity,index) => {
            return (
             <ActivityItem backoffice={isAdmin} key={index} activity={activity}/>
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