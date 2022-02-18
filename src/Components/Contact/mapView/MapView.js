import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { MapContainer, Marker, TileLayer, Tooltip, useMapEvents, useMapEvent, useMap } from 'react-leaflet';
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

  function ButtonLocations({ parentMap, zoom }) {
    const minimap = useMap()

    // Clicking a point on the minimap sets the parent's map center
    const onClick = useCallback(
      (e) => {
        parentMap.setView(e.latlng, parentMap.getZoom())
      },
      [parentMap],
    )
    useMapEvent('click', onClick)
  
    // Keep track of bounds in state to trigger renders
    const [bounds, setBounds] = useState(parentMap.getBounds())
    const onChange = useCallback(() => {
      setBounds(parentMap.getBounds())
      // Update the minimap's view to match the parent map's center and zoom
      minimap.setView(parentMap.getCenter(), zoom)
    }, [minimap, parentMap, zoom])




    return L.easyButton ({
      position: 'topleft',
        stateName: 'remove-legend',
        icon: '<span>masquer la légende</span>',
        title: 'masquer la légende',
        onClick: function(map) {
          setPositionMain(userPosition)
          map.flyTo(positionMain, map.getZoom());
        } 
        })
      }

  return ( 
    <div className="row map-div-container d-flex justify-content-center my-5 p-0">
      <div className='d-flex justify-content-center aling-items-center mb-2'>
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
        {/* <GetButton/> */}
      </MapContainer>
    </div>
  );
};
