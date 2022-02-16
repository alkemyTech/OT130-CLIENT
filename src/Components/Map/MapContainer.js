import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { getCoors } from '../../Services/mapsService';
import { useState } from 'react';

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
  const [address, setaddress] = useState('');

  const handleSubmit = async () => {
    const res = await getCoors(address);
    //Asignar cordenadas cuando tenga la apiKey
    console.log(res);
  };

  return (
    <>
      <div>
        <input
          id="adress"
          type="text"
          placeholder="direccion"
          onChange={(e) => setaddress(e.target.value)}
        />
        <input type="button" value="Buscar" onClick={handleSubmit} />
      </div>
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
