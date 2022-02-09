import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useRequestActivities } from '../../customHooks/useRequestActivities';
import { selectActivities, fetchActivities } from '../../features/activities/activitiesSlice';
import { UNKNOWN_ERROR, NETWORK_ERROR } from '../../Helpers/messagesText';
import { ErrorAlert } from '../Alert';
import '../CardListStyles.css';

const ActivitiesList = () => {
  const dispatch = useDispatch();

  const { loading, error, activities } = useSelector(selectActivities);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [fetchActivities, dispatch]);

  const getErrorMessage = (error) => {
    if (error === "Network Error") {
      return NETWORK_ERROR;
    }
    return UNKNOWN_ERROR;
  };

  if (error) ErrorAlert(getErrorMessage(error));
  
  return (
    <div>
      <h1 className="text-center my-3">Listado Actividades</h1>
      <ul className="list-container row">
        {!loading &&
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
        {loading && (
          <div className="position-absolute text-center">
            <Spinner variant="primary" animation="border" role="status" />
          </div>
        )}
      </ul>
    </div>
  );
};

export default ActivitiesList;
