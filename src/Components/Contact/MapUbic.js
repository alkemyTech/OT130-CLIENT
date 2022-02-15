import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './mapUbic.css';

export const MapUbic = () => {


  return (
    <div className='map-cointainer'>
        <MapContainer className='map-container' center={[51.505, -0.09]} zoom={13}>
        {/* <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker> */}
        </MapContainer>
    </div>
  )
}
