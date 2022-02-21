import React, {  useState } from 'react';
import { MapContainer , Marker, TileLayer, Tooltip } from 'react-leaflet';
import GetIconMarker from './iconMarker/GetIconMarker';
import UserLocationMarker from './UserLocationMarker';
import { LOGO } from '../../../assets';
import 'leaflet/dist/leaflet.css';
import './leafletMap.css';


export const LeafletMap = () => {

  const positionONG = [6.465593913151558, -73.89847666374078];
  const [userPosition, setUserPosition] = useState(null);
  const [positionMain, setPositionMain] = useState(positionONG);
  const [nameLocationMain, setNameLocationMain] = useState('ONG SOMOS MAS')

  const goToUserLocation = () => {
    setPositionMain(userPosition)
    setNameLocationMain('Mi Ubicación')
  } 

  const goToONGLocation = () => {
    setPositionMain(positionONG)
    setNameLocationMain('ONG SOMOS MAS')
  
  }

  return ( 
    <div className="row map-div-container d-flex justify-content-center my-5 p-0">
      <div className='buttons-locations-container d-flex flex-column  mb-2'>
        <div className='n d-flex justify-content-center '>
          <span className='span-button-location'>
            {`Click map to go: ${nameLocationMain}`}
          </span>
        </div>
        <div className='d-flex justify-content-center aling-items-center'>
          <button className='btn-location-style' onClick={(e) => goToUserLocation(e)}>Mi Ubicación</button>
          <button className='btn-location-style' onClick={(e) => goToONGLocation(e)}>SOMOS MAS</button>
        </div>
      </div>
      <MapContainer className='col-12' center={positionMain} zoom={13}  >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UserLocationMarker
           setUserPosition={setUserPosition} 
           userPosition={userPosition}
           positionMain={positionMain}
        />
          <Marker position={positionONG} icon={GetIconMarker()}>
          <Tooltip>
            <img className="logo-somos-mas-map" src={LOGO} alt="LOGO-SOMOS-MAS" />
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};
