import React, { useCallback, useMemo, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, Tooltip, useMap, useMapEvent, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './mapView.css';
import { LOGO } from '../../../assets';
import { Button } from 'react-bootstrap';

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
  // const [position, setPosition] = useState(positionONG);
  const [userPosition, setUserPosition] = useState(null);
  
  function UserLocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setUserPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
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

  function ONGLocationMarker() {

    return (
      <Marker position={positionONG} icon={GetIcon()}>
        <Tooltip>
          <img className="logo-somos-mas-map" src={LOGO} alt="LOGO-SOMOS-MAS" />
        </Tooltip>
      </Marker>
    )
  }
  
  return ( 
    <div className="row map-div-container d-flex justify-content-center my-5 p-0">
      {/* <Button onClick={(e) => goToUserLocation(e)}>Mi Ubicación</Button> */}
      <MapContainer className='col-12' center={positionONG} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UserLocationMarker />
        < ONGLocationMarker />
      </MapContainer>
    </div>
  );
};
