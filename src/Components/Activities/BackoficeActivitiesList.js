import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import '../CardListStyles.css';
import { ActivityItem } from './ActivityItem';

const activitiesMock = [
  { id: 1,
    name: 'Titulo de prueba1',
    image: 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
    createdAt: "date", 
  },
  { id: 2,
    name: 'Titulo de prueba2',
    image: 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
    createdAt: "date", 
  },
  { id: 3,
    name: 'Titulo de prueba3',
    image: 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
    createdAt: "date", 
  },   
];

const BackoficeActivitiesList = () => {
 
  const [ activitiesList, setActivities ] = useState( activitiesMock );

  const handleDeleteActivity = ( id ) => {  
    const newActivitiesList = activitiesList.filter( activity => activity.id !== id )
    setActivities( newActivitiesList );
  };
 
  return (
    <div className="container-xl">
      <h1 className="m-4">Listado de actividades</h1>
      <Link 
        to="/backoffice/activities/create" 
        className="ms-5 btn btn-primary"
      >
        Agregar actividad
      </Link>
      <div className="row m-5 d-flex justify-content-between">
        {
          activitiesList.length > 0 
          ? activitiesList.map(( activity ) => {
            return (              
            <ActivityItem
              key={activity.id}            
              activity={ activity }
              handleDeleteActivity={ handleDeleteActivity }     
            />
            )
            })
          : <p className="fs-2">No hay actividades</p>
        }
      </div>     
    </div>
  );
}

export default BackoficeActivitiesList;

