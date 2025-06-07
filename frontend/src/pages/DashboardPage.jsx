// DashboardPage.jsx
import { useState } from 'react';
import MapComponent from '../components/MapComponent';
import ShipAnimation from '../components/ShipAnimation';

const DashboardPage = () => {
  const [shipPosition, setShipPosition] = useState(null);

  return (
    <div>
      <h1>Ship Tracking Dashboard</h1>
      <div style={{ height: 'calc(100vh - 60px)' }}>
        <MapComponent shipPosition={shipPosition} />
        <ShipAnimation onPositionChange={setShipPosition} />
      </div>
    </div>
  );
};

export default DashboardPage;