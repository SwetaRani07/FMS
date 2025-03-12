import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for missing marker icons
const customIcon = new L.Icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  shadowSize: [41, 41],
});

// Component to keep map centered on the marker
const CenterMap = ({ location }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(location, map.getZoom());
  }, [location, map]);
  return null;
};

const LiveLocation = () => {
  const [location, setLocation] = useState([12.9716, 77.5946]); // Default Bangalore

  useEffect(() => {
    const updateLocation = () => {
      setLocation([
        location[0] + (Math.random() - 0.005) * 0.01, // Simulating movement
        location[1] + (Math.random() - 0.005) * 0.01,
      ]);
    };

    const interval = setInterval(updateLocation, 5000);
    return () => clearInterval(interval);
  }, [location]);

  return (
    <MapContainer center={location} zoom={15} style={{ height: "300px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={location} icon={customIcon} />
      <CenterMap location={location} />
    </MapContainer>
  );
};

export default LiveLocation;