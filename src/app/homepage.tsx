import IPFormSection from "../features/ip-form-section/components/ip-form-section";
import MapAddress from "../features/map-address/components/map-address";

export default function Homepage() {
  return (
    <main className="flex flex-col w-full h-dvh">
      <IPFormSection />
      <MapAddress />
    </main>
  );
}
