import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import { useIpifyStore } from "../../../stores/ipify.stores";

export default function MapAddress() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={17} scrollWheelZoom={true} zoomControl={false} className="h-[calc(100dvh-300px)] w-full relative z-0">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      <MapLocationChanger />
    </MapContainer>
  );
}

function MapLocationChanger() {
  const trackedIP = useIpifyStore((s) => s.tracked);
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
