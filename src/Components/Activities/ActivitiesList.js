import React from "react";
import { useRequestActivities } from "../../customHooks/useRequestActivities";
import "../CardListStyles.css";


const ActivitiesList = () => {
  const [allActivities, isLoading] = useRequestActivities([]);
  
  return (
    <div>
            <h1 className='text-center my-3'>Listado Actividades</h1>
            <ul className="list-container row">
                {!isLoading && allActivities.length > 0 ? (
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
            </ul>
    </div>
  );
};

export default ActivitiesList;
