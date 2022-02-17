import React from 'react';
import { SideBar } from '../Components/SideBar/SideBar';
import { BACKOFFICE_PATHS } from '../rutas/config';

export const ScreenDashboard = () => {
  return(  
    <>
        <h1>
            <SideBar paths={BACKOFFICE_PATHS}/>
        </h1>    
    </>
  ) 
};
