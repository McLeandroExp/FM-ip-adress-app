import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon, latLng } from "leaflet";

//componente encargado de renderizar el mapa y mostrarlo en las coordenadas
//que recibe como argumento

export const LMap = ({ coors }) => {
  const crs = latLng(...coors);
  const MyIcon = icon({
    iconUrl: "./assets/images/icon-location.svg",
    iconSize: [32, 32],
    className: "Leaflet-venue-icon",
  });
  const ChangeCenter = () => {
    const map = useMap();
    map.setView(crs, 13);
    return null;
  };
  return (
    <MapContainer center={coors} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeCenter />
      <Marker position={coors} icon={MyIcon}>
        <Popup>{`${coors[0]} ${coors[1]}`}</Popup>
      </Marker>
    </MapContainer>
  );
};
