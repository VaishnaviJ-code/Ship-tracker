import { useEffect, useState } from 'react';

const ShipAnimation = ({ onPositionChange }) => {
  const [coordinates, setCoordinates] = useState([51.505, -0.09]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate ship movement
      const newCoords = [
        coordinates[0] + (Math.random() * 0.01 - 0.005),
        coordinates[1] + (Math.random() * 0.01 - 0.005)
      ];
      setCoordinates(newCoords);
      onPositionChange(newCoords);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [coordinates, onPositionChange]);

  return null;
}

export default ShipAnimation;