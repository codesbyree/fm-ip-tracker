export default function IPFormResult() {
  return (
    <div
      id="search-result"
      className="p-6 bg-white shadow-2xl shadow-slate-800/20 rounded-xl w-full relative z-10 text-center grid grid-cols-1 gap-5 lg:grid-cols-4 lg:text-left max-w-5xl mx-auto lg:px-0 lg:py-8"
    >
      <div className="space-y-2 lg:px-6 lg:pl-7">
        <p className="font-semibold tracking-widest text-slate-400 text-[10px]">IP ADDRESS</p>
        <p className="font-medium tracking-tight text-slate-700 text-xl lg:text-3xl">192.212.174.101</p>
      </div>

      <div className="space-y-2 lg:px-6 lg:pl-7 lg:border-l border-slate-300">
        <p className="font-semibold tracking-widest text-slate-400 text-[10px]">LOCATION</p>
        <p className="font-medium tracking-tight text-slate-700 text-xl lg:text-3xl">Brooklyn, NY 10001</p>
      </div>

      <div className="space-y-2 lg:px-6 lg:pl-7 lg:border-l border-slate-300">
        <p className="font-semibold tracking-widest text-slate-400 text-[10px]">TIMEZONE</p>
        <p className="font-medium tracking-tight text-slate-700 text-xl lg:text-3xl">UTC -05:00</p>
      </div>

      <div className="space-y-2 lg:px-6 lg:pl-7 lg:border-l border-slate-300">
        <p className="font-semibold tracking-widest text-slate-400 text-[10px]">ISP</p>
        <p className="font-medium tracking-tight text-slate-700 text-xl lg:text-3xl">SpaceX Starlink</p>
      </div>
    </div>
  );
}
