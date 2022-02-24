import L from 'leaflet';

function GetIconMarker() {
    return L.icon({
      iconUrl: require('./icon_marker_location.png'),
      iconRetinaUrl: require('./icon_marker_location.png'),
      iconSize: [50, 50],
      iconAnchor: null,
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
    });
  }
export default GetIconMarker