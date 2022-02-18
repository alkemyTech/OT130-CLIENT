import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getCoors } from '../../Services/mapsService';
import res from '../../Services/mocks/geocode.json';

const containerStyle = {
  width: 'auto',
  height: '400px',
};

const initialCoord = {
  lat: -38.416097,
  lng: -63.616672,
};

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const apiId = process.env.REACT_APP_GOOGLE_MAPS_ID;

const MapContainer = ({ address }) => {
  const [coords, setCoords] = useState(null);
  const [center, setCenter] = useState(initialCoord);
  const [zoom, setZoom] = useState(4);

  const findCoords = async () => {
    //const res = await getCoors(address);
    //Asignar cordenadas cuando tenga la apiKey
    if (address) {
      setCoords(res.results[0].geometry.location);
      setCenter(coords);
      setZoom(15);
    }
  };

  useEffect(() => {
    findCoords();
  }, [address, coords]);

  return (
    <>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          options={{ mapId: apiId }}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          onCenterChanged
          onZoomChanged
        >
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={coords} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default MapContainer;
