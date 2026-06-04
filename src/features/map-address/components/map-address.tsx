import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import { useIpifyStore } from "../../../stores/ipify.stores";
import type { IpifyResponse } from "../../../types/ipify.type";

const customIcon = new L.Icon({
  iconUrl: "/icon-location.svg",
  iconRetinaUrl: "/icon-location.svg",
  iconSize: [32, 40],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function MapAddress() {
  const trackedIP = useIpifyStore((s) => s.tracked);
  const lat = trackedIP ? trackedIP.location.lat : 0;
  const lang = trackedIP ? trackedIP.location.lng : 0;
  const location = trackedIP ? `${trackedIP.location.city}, ${trackedIP.location.region} - ${trackedIP.location.country}` : "";

  return (
    <MapContainer center={[lat, lang]} zoom={17} scrollWheelZoom={true} zoomControl={false} className="h-[calc(100dvh-300px)] w-full relative z-0">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={[lat, lang]} icon={customIcon}>
        <Popup>{location}</Popup>
      </Marker>

      <MapLocationChanger trackedIP={trackedIP} />
    </MapContainer>
  );
}

function MapLocationChanger({ trackedIP }: { trackedIP?: IpifyResponse }) {
  const map = useMap();

  useEffect(() => {
    if (!trackedIP) return;
    const { location } = trackedIP;
    const foundLat = location.lat;
    const foundLang = location.lng;

    map.setView([foundLat, foundLang], 17);
  }, [trackedIP, map]);

  return null;
}
