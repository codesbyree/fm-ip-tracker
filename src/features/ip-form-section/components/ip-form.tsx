import type { SyntheticEvent } from "react";

import iconArrow from "../../../assets/icon-arrow.svg";

export default function IPForm() {
  const handleSubmit = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
    } catch (e: unknown) {
      const err = e as Error;
      console.log(err.message);
    }
  };

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
        />

        <span className="absolute top-0 right-0 w-15 h-15 bg-linear-to-l from-white to-transparent via-white/40" />
      </div>

      <button className="bg-slate-950 text-white w-15 h-15 shrink-0 rounded-r-2xl grid place-items-center">
        <span className="sr-only">Submit</span>
        <img src={iconArrow} alt="" aria-hidden="true" unselectable="on" />
      </button>
    </form>
  );
}
