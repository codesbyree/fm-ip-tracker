import mobileBgPattern from "../../../assets/pattern-bg-mobile.png";
import desktopBgPattern from "../../../assets/pattern-bg-desktop.png";

import IPForm from "./ip-form";
import IPFormResult from "./ip-form-result";

export default function IPFormSection() {
  return (
    <section id="form-section" className="p-6 bg-linear-30 from-blue-700 to-blue-400 relative h-75 lg:h-70 overflow-y-visible flex flex-col gap-6 lg:gap-8">
      <h1 className="relative z-10 font-medium text-center text-2xl lg:text-3xl tracking-wide text-white">IP Address Tracker</h1>
      <IPForm />
      <IPFormResult />

      <img src={mobileBgPattern} alt="" unselectable="on" className="absolute pointer-events-none inset-0 z-1 w-full h-full object-cover lg:hidden" />
      <img src={desktopBgPattern} alt="" unselectable="on" className="absolute pointer-events-none inset-0 z-1 w-full h-full object-cover hidden lg:block" />
    </section>
  );
}
