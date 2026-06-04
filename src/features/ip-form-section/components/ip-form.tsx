import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { toast } from "react-toastify";

import { getLocationByIP } from "../../../api/ipify.api";
import { checkIsIPValid } from "../../../utils/ipify.utils";
import { useIpifyStore } from "../../../stores/ipify.stores";

import iconArrow from "../../../assets/icon-arrow.svg";
import { cn } from "../../../utils/cn.utils";

export default function IPForm() {
  const setTrackedIP = useIpifyStore((s) => s.setTrackedIP);

  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      checkIsIPValid(ip);
      setLoading(true);

      const data = await getLocationByIP(ip);
      setTrackedIP(data);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIp(e.target.value);
  };

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        setLoading(true);

        const data = await getLocationByIP(ip);
        setIp(data.ip);
        setTrackedIP(data);
      } catch (e: unknown) {
        const err = e as Error;
        toast.error(err.message);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    getUserLocation();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="relative z-10 flex items-center w-full max-w-lg lg:mb-4 mx-auto">
      <div className="w-full relative">
        <label htmlFor="ip-input" className="sr-only">
          Enter IP address
        </label>
        <input
          id="ip-input"
          className="h-15 pl-4 bg-white rounded-l-2xl w-full placeholder:text-slate-400 text-slate-700 font-sans outline-none border-none text-lg"
          placeholder="Search for any IP address or domain"
          value={ip}
          onChange={handleChange}
        />

        <span className="absolute top-0 right-0 w-15 h-15 bg-linear-to-l from-white to-transparent via-white/40" />
      </div>

      <button disabled={loading} className="bg-slate-950 hover:bg-slate-800 text-white w-15 h-15 shrink-0 rounded-r-2xl grid place-items-center cursor-pointer">
        <span className="sr-only">Submit</span>
        <img src={iconArrow} alt="" aria-hidden="true" unselectable="on" className={cn("block", loading && "hidden")} />
        <span className={cn("w-4 h-4 rounded-full border-t-2 border-l-2 border-b-2 border-white animate-spin hidden", loading && "block")} />
      </button>
    </form>
  );
}
