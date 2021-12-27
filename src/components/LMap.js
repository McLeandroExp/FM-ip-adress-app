import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import {icon,latLng} from 'leaflet' 
export const LMap = ({coors}) => {
  const crs = latLng(...coors)
  // map.setView(crs,13)
  const MyIcon = icon({
    iconUrl: './assets/images/icon-location.svg',
    iconSize: [32,32],
    className: 'Leaflet-venue-icon'
  })
  const CambiarCentro = ()=> {
    const map = useMap()
    map.setView(crs,13)
    return null
  }
  console.log(`mapa generado`)
  return (
      <MapContainer center={coors} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CambiarCentro/>
        <Marker position={coors} icon={MyIcon}>
          <Popup>
            Not exact position
          </Popup>
        </Marker>
        
      </MapContainer>
  );
};
