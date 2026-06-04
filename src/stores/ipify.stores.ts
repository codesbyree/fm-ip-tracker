import { create } from "zustand";
import type { IpifyResponse } from "../types/ipify.type";

interface Store {
  tracked?: IpifyResponse;
  setTrackedIP: (val: IpifyResponse) => void;
}

export const useIpifyStore = create<Store>((set) => ({
  tracked: undefined,
  setTrackedIP: (val: IpifyResponse) => set({ tracked: val }),
}));
