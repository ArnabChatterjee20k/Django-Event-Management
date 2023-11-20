import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useParams } from "react-router-dom";
import useEventDetails from "../../services/useEventDetails";
import 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';
const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
export default function Map() {
  const { id } = useParams();
  const { data } = useEventDetails(id as string);
  const center = [
    parseInt(data?.venue.location.lat as string),
    parseInt(data?.venue.location.long as string),
  ];
  console.log(center);
  return (
    <MapContainer
      //  @ts-ignore
      center={center}
      zoom={13}
      style={{ width: "100%", height: "500px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* @ts-ignore */}
      <Marker position={center} icon={customIcon}>
        <Popup>
          {data?.venue.name}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
