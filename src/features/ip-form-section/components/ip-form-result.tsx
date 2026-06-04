import { AnimatePresence, motion } from "motion/react";
import { useIpifyStore } from "../../../stores/ipify.stores";

export default function IPFormResult() {
  const trackedIP = useIpifyStore((s) => s.tracked);

  const show = trackedIP !== undefined;

  return (
    <div className="relative z-10">
      <AnimatePresence>
        {show && (
          <motion.div
            key={trackedIP.ip}
            initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: 20, opacity: 0, filter: "blur(8px)" }}
            id="search-result"
            className="p-6 bg-white shadow-2xl shadow-slate-800/20 rounded-xl w-full text-center grid grid-cols-1 gap-5 lg:grid-cols-4 lg:text-left max-w-6xl mx-auto lg:px-0 lg:py-8 absolute left-1/2 -translate-x-1/2"
          >
            <div className="space-y-2 lg:px-6 lg:pl-7">
              <p className="font-semibold tracking-widest text-slate-400 text-[10px]">IP ADDRESS</p>
              <p className="font-medium tracking-tight text-slate-700 text-xl lg:text-3xl">{trackedIP.ip}</p>
            </div>

            <div className="space-y-2 lg:px-6 lg:pl-7 lg:border-l border-slate-300">
              <p className="font-semibold tracking-widest text-slate-400 text-[10px]">LOCATION</p>
              <p className="font-medium tracking-tight text-slate-700 text-xl lg:text-3xl">
                {trackedIP.location.city}, {trackedIP.location.region} {trackedIP.location.postalCode} - {trackedIP.location.country}
              </p>
            </div>

            <div className="space-y-2 lg:px-6 lg:pl-7 lg:border-l border-slate-300">
              <p className="font-semibold tracking-widest text-slate-400 text-[10px]">TIMEZONE</p>
              <p className="font-medium tracking-tight text-slate-700 text-xl lg:text-3xl">UTC {trackedIP.location.timezone}</p>
            </div>

            <div className="space-y-2 lg:px-6 lg:pl-7 lg:border-l border-slate-300">
              <p className="font-semibold tracking-widest text-slate-400 text-[10px]">ISP</p>
              <p className="font-medium tracking-tight text-slate-700 text-xl lg:text-3xl">{trackedIP.isp}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
