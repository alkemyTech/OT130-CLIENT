import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { getCoors } from '../../Services/mapsService';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -38.416097,
  lng: -63.616672,
};

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const MapContainer = (e) => {
  const adressHandleChange = (e) => {
    const res = getCoors(e.target.value);
    console.log(res.data.results[0].geometry);
  };

  return (
    <>
      <input
        id="adress"
        type="text"
        placeholder="direccion"
        onChange={(e) => adressHandleChange(e)}
      />
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          options={{ mapId: 'ae17bb4f15fc8c48' }}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}
        >
          {/* Child components, such as markers, info windows, etc. */}
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default MapContainer;
