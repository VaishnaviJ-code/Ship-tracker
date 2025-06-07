import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ shipPosition }) => {
  return (
    <MapContainer 
      center={[51.505, -0.09]} 
      zoom={13} 
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shipPosition && (
        <Marker position={shipPosition}>
          <Popup>Ship Position</Popup>
        </Marker>
      )}
    </MapContainer>
  )
}

export default MapComponent