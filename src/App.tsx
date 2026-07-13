import { DarshanCard } from './components/DarshanCard';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans">

      {/* ── Navbar ─────────────────────────────────────────────── */}
      <nav className="w-full px-6 md:px-12 py-5 flex justify-between items-center border-b border-black/[0.04]">
        <div className="flex items-center space-x-2">
          {/* Minimal wordmark */}
          <span className="font-serif text-lg font-bold tracking-tight text-[#111111]">
            Kasht Nivaran
          </span>
          <span className="hidden md:inline-block text-[10px] font-semibold tracking-widest uppercase text-[#111111]/30 mt-0.5">
            — Kashtbhanjan Dev
          </span>
        </div>

        {/* Right side: subtle location */}
        <span className="text-[11px] font-semibold tracking-widest uppercase text-[#111111]/35">
          Salangpur · Gujarat
        </span>
      </nav>

      {/* ── Main ────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-12 md:py-16">

        {/* Eyebrow label */}
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#B89253] mb-6 text-center">
          ✦ Nitya Darshan ✦
        </p>

        {/* Card — constrained width for premium feel */}
        <div className="w-full max-w-sm md:max-w-md">
          <DarshanCard />
        </div>

        {/* Sub-caption */}
        <p className="mt-8 text-sm text-[#111111]/40 font-medium tracking-wide text-center max-w-xs">
          Move your cursor over the image for depth.<br />
          Toggle between Still and Live darshan.
        </p>
      </main>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="w-full px-6 md:px-12 py-5 border-t border-black/[0.04] flex justify-between items-center">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-[#111111]/30">
          Kasht Nivaran
        </span>
        <span className="text-[10px] font-semibold tracking-widest uppercase text-[#111111]/25">
          जय हनुमान
        </span>
      </footer>

    </div>
  );
}

export default App;
