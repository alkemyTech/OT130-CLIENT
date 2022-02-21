import React from 'react';
import { Marker, Tooltip, useMapEvents } from 'react-leaflet';
import GetIconMarker from './iconMarker/GetIconMarker';

function UserLocationMarker({ setUserPosition, userPosition, positionMain }) {
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setUserPosition(e.latlng);
      map.flyTo(positionMain, map.getZoom());
    },
  });

  return userPosition ? (
    <Marker position={userPosition} icon={GetIconMarker()}>
      <Tooltip>Tu Ubicación</Tooltip>
    </Marker>
  ) : null;
}

export default UserLocationMarker;
