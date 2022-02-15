import React, { useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvent, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './mapView.css';

export const MapView = () => {

  const position = [-34.603465109247814, -58.375943679254284];
  const animateRef = useRef(false)
  
  function LocationMarker() {

    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }
  function SetViewOnClick({ animateRef }) {
    const map = useMapEvent('click', (e) => {
      map.setView(e.latlng, map.getZoom(), {
        animate: animateRef.current || false,
      })
    })
  
    return null
  }

  return (
    <div className="d-flex justify-content-center my-5">
      <MapContainer
        className="leaflet-container"
        center={position}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        <SetViewOnClick animateRef={animateRef} />

      </MapContainer>
    </div>
  );
};
