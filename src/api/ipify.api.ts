import { toast } from "react-toastify";

export const getLocationByIP = async (ip?: string) => {
  try {
    const endPoint = "/api/v2/country,city?";
    const apiKey = import.meta.env.VITE_IPIFY;
    const url = endPoint + "apiKey=" + apiKey + "&ipAddress=" + ip;

    const response = await fetch(url, { method: "GET" });

    const data = await response.json();
    return data;
  } catch (e: unknown) {
    const err = e as Error;
    toast.error(err.message);
  }
};
