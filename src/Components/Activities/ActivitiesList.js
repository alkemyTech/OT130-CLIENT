import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivities } from '../../actions/activitiesActions';
import { selectActivities } from '../../reducers/activitiesReducer';
import { UNKNOWN_ERROR, NETWORK_ERROR } from '../../Helpers/messagesText';
import { ErrorAlert } from '../Alert';
import '../CardListStyles.css';

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
    <div>
      <h1 className="text-center my-3">Listado Actividades</h1>
      <ul className="list-container row">
        {!isLoading &&
          (activities.length > 0 ? (
            activities.map((activity) => {
              return (
                <li className="card-info " key={activity.id}>
                  <h3>{activity.name}</h3>
                  <p>{activity.description}</p>
                </li>
              );
            })
          ) : (
            <p>{!error && 'No hay actividades'}</p>
          ))}
        {isLoading && (
          <div className="position-absolute text-center">
            <Spinner variant="primary" animation="border" role="status" />
          </div>
        )}
      </ul>
    </div>
  );
};

export default ActivitiesList;
