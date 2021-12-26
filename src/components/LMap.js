import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import {icon} from 'leaflet' 
export const LMap = () => {
  const MyIcon = icon({
    iconUrl: './assets/images/icon-location.svg',
    iconSize: [32,32],
    className: 'Leaflet-venue-icon'
  })
  return (
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09] } icon={MyIcon}>
          <Popup>
            A pretty CSS3 popup. Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  );
};
