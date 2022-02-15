import React from 'react';
import { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Get } from '../../Services/privateApiService';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const geocodingApiKey = 'AIzaSyDI3UYfTLEqW_CbzGChiR-MyJUhbeBL7OE';
const googleMapsApiKey = `AIzaSyBiZJqFwPbLFNBGwrsID7-VNsaqtkkZwcE`;

const MapContainer = (e) => {
  const [adress, setAdress] = useState('');
  const adressHandleChange = (e) => {
    const res = Get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${e.target.value}&key=${geocodingApiKey}`,
    );
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
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          options={{ mapId: 'ae17bb4f15fc8c48' }}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default MapContainer;
