
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import "leaflet/dist/leaflet.css";
// Correction du bug d’icônes en prod
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MyMap() {
  return (
    <MapContainer
      center={[5.30466, -3.99734]} // Coordonnées (ici Abidjan)
      zoom={13}
      className="h-[500px] w-full"
    >
      <TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  // ici attribution est bien reconnu
  
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
/>
      <Marker position={[5.30466, -3.99734]}>
        <Popup>Festival des pates d'Abidjan</Popup>
      </Marker>
    </MapContainer>
  );
}