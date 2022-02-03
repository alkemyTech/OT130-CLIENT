import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useRequestActivities } from '../../customHooks/useRequestActivities';
import '../CardListStyles.css';

const ActivitiesList = () => {
  const [allActivities, isLoading] = useRequestActivities([]);
  console.log(
    '🚀 ~ file: ActivitiesList.js ~ line 9 ~ ActivitiesList ~ allActivities',
    allActivities,
  );
  console.log('🚀 ~ file: ActivitiesList.js ~ line 9 ~ ActivitiesList ~ isLoading', isLoading);

  return (
    <div>
      <h1 className="text-center my-3">Listado Actividades</h1>
      <ul className="list-container row">
        {allActivities.length > 0 ? (
          allActivities.map((activity) => {
            return (
              <li className="card-info " key={activity.id}>
                <h3>{activity.name}</h3>
                <p>{activity.description}</p>
              </li>
            );
          })
        ) : (
          <p>No hay actividades</p>
        )}
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
