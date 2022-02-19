import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MapContainer , Marker, TileLayer, Tooltip, useMapEvents, useMapEvent, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './mapView.css';
import { LOGO } from '../../../assets';

function GetIcon() {
  return L.icon({
    iconUrl: require('./iconMarker/icon_marker_location.png'),
    iconRetinaUrl: require('./iconMarker/icon_marker_location.png'),
    iconSize: [50, 50],
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
  });
}

export const MapView = () => {
  const positionONG = [-34.603465109247814, -58.375943679254284];
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
  function UserLocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setUserPosition(e.latlng);
        map.flyTo(positionMain, map.getZoom());
      },
    });
    return userPosition === null ? null : (
      <Marker position={userPosition} icon={GetIcon()}>
        <Tooltip>
          Tu Ubicación
        </Tooltip>
      </Marker>
    );
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
        <UserLocationMarker />
          <Marker position={positionONG} icon={GetIcon()}>
          <Tooltip>
            <img className="logo-somos-mas-map" src={LOGO} alt="LOGO-SOMOS-MAS" />
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};
