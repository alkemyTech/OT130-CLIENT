import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './mapView.css';

function GetIcon(_iconSize) {
  return L.icon({
    iconUrl: require('./iconMarker/icon_marker_location.png'),
    iconAnchor: null,
    iconSize: [50, 50],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
  });
}
export const MapView = () => {
  const positionONG = [-34.603465109247814, -58.375943679254284];

  return (
    <div className="d-flex justify-content-center my-5">
      <MapContainer center={positionONG} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionONG} icon={GetIcon()}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          <Tooltip>Tooltip for Marker</Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};
