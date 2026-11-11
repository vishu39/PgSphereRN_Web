import { useState } from 'react';
import { Eye, RotateCw, Sparkles, ChevronDown, Compass, Target } from 'lucide-react';

export const InGameSimulator = () => {
  const [hudExpanded, setHudExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState<'encounter' | 'map'>('encounter');
  const [autoSpinLog, setAutoSpinLog] = useState<string[]>([
    '[15:30:00] PgSphere-NR BootstrapProvider initialized',
    '[15:30:01] In-game menu overlay rendered successfully'
  ]);
  const [spinnedCount, setSpinnedCount] = useState(18);
  const [bagSlots, setBagSlots] = useState({ current: 642, max: 750 });
  const [playerCoord, setPlayerCoord] = useState({ lat: 37.7749, lng: -122.4194 });

  const triggerSpinSimulation = () => {
    const stops = ['Fountain PokéStop', 'Historic Clocktower Gym', 'Downtown Plaza Stop', 'Memorial Garden Stop'];
    const randomStop = stops[Math.floor(Math.random() * stops.length)];
    const time = new Date().toLocaleTimeString();
    setAutoSpinLog((prev) => [`[${time}] Spun ${randomStop}: +3 Ultra Balls, +1 Max Revive`, ...prev.slice(0, 3)]);
    setSpinnedCount((c) => c + 1);
    setBagSlots((b) => ({ ...b, current: Math.min(b.max, b.current + 4) }));
  };

  const nudgeLocation = (dir: 'N' | 'S' | 'E' | 'W') => {
    const delta = 0.0002;
    setPlayerCoord((prev) => {
      const next = { ...prev };
      if (dir === 'N') next.lat += delta;
      if (dir === 'S') next.lat -= delta;
      if (dir === 'E') next.lng += delta;
      if (dir === 'W') next.lng -= delta;
      return next;
    });
    const time = new Date().toLocaleTimeString();
    setAutoSpinLog((prev) => [`[${time}] Joystick move ${dir}: coords updated in-game`, ...prev.slice(0, 3)]);
  };

  return (
    <section id="simulator" className="py-14 sm:py-20 bg-[#090b10] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-3">
            <Eye className="h-3.5 w-3.5" />
            Interactive In-Game Preview
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            See How PgSphere-NR Operates In-Game
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-zinc-400 px-2 sm:px-0">
            PgSphere-NR renders a discreet, non-intrusive floating HUD directly over Pokémon GO with zero background services or root permissions.
          </p>
        </div>

        {/* Interactive Simulator Container */}
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl border border-[#20293b] bg-[#0f131c] p-3.5 sm:p-8 shadow-2xl">
          
          {/* Top Controls / View switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-[#1c2434]">
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 w-full sm:w-auto">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider hidden xs:inline">Preview:</span>
              <div className="grid grid-cols-2 gap-1.5 w-full xs:w-auto rounded-xl bg-[#141b26] p-1 border border-[#212c3e]">
                <button
                  onClick={() => setActiveTab('encounter')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition text-center ${
                    activeTab === 'encounter'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Wild Encounter
                </button>
                <button
                  onClick={() => setActiveTab('map')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition text-center ${
                    activeTab === 'map'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  World Map & Joystick
                </button>
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-400 flex items-center justify-center sm:justify-end gap-2 pt-1 sm:pt-0">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Target: Pokémon GO 0.435.2</span>
            </div>
          </div>

          {/* Simulated Game Canvas */}
          <div className="relative mt-4 sm:mt-6 rounded-xl sm:rounded-2xl overflow-hidden border border-[#273246] bg-gradient-to-b from-[#101b2a] via-[#0c1422] to-[#070b13] min-h-[380px] sm:min-h-[460px] flex flex-col justify-between p-3.5 sm:p-6">
            
            {/* Background gaming scene visual */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.12),transparent_70%)] pointer-events-none" />

            {/* In-Game Floating PgSphere-NR Overlay HUD */}
            <div className="relative z-10 w-full max-w-sm">
              <div className="rounded-2xl border border-emerald-500/40 bg-[#0d1219]/95 shadow-2xl backdrop-blur-md p-3.5 sm:p-4 text-white ring-1 ring-white/10 transition-all">
                
                {/* HUD Header */}
                <div 
                  className="flex items-center justify-between cursor-pointer select-none"
                  onClick={() => setHudExpanded(!hudExpanded)}
                >
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    {/* Glowing sphere logo */}
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-tr from-emerald-500 to-sky-400 flex items-center justify-center p-0.5 shadow-md shadow-emerald-500/30 shrink-0">
                      <div className="h-full w-full rounded-full border border-white/80 bg-[#0a0d14] flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold flex items-center gap-1.5">
                        <span>PgSphere-NR HUD</span>
                        <span className="rounded bg-emerald-500/20 text-emerald-400 text-[9px] px-1.5 font-mono font-bold">ACTIVE</span>
                      </div>
                      <div className="text-[10px] text-zinc-400 font-mono">Non-Root In-Game Menu</div>
                    </div>
                  </div>

                  <button className="text-zinc-400 hover:text-white p-1" aria-label="Toggle HUD details">
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${hudExpanded ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* HUD Body */}
                {hudExpanded && (
                  <div className="mt-3 pt-3 border-t border-[#1b2332] space-y-2.5 sm:space-y-3">
                    
                    {/* Scene Specific Content */}
                    {activeTab === 'encounter' ? (
                      <div className="space-y-2.5">
                        {/* Live IV Scanner Card */}
                        <div className="rounded-xl bg-[#141b26] p-2.5 sm:p-3 border border-[#212c3e]">
                          <div className="flex items-center justify-between text-xs font-bold text-emerald-400">
                            <span className="flex items-center gap-1 text-white">
                              <Sparkles className="h-3 w-3 text-emerald-400" />
                              Mewtwo (Armored)
                            </span>
                            <span className="font-mono bg-emerald-500/20 px-1.5 py-0.2 rounded text-[10px]">100% IV</span>
                          </div>

                          <div className="mt-2 grid grid-cols-3 gap-1.5 text-center font-mono">
                            <div className="rounded bg-[#0d121a] p-1 border border-[#1b2536]">
                              <span className="block text-[9px] text-zinc-400">ATK</span>
                              <span className="text-xs font-bold text-emerald-400">15 / 15</span>
                            </div>
                            <div className="rounded bg-[#0d121a] p-1 border border-[#1b2536]">
                              <span className="block text-[9px] text-zinc-400">DEF</span>
                              <span className="text-xs font-bold text-emerald-400">15 / 15</span>
                            </div>
                            <div className="rounded bg-[#0d121a] p-1 border border-[#1b2536]">
                              <span className="block text-[9px] text-zinc-400">STA</span>
                              <span className="text-xs font-bold text-emerald-400">15 / 15</span>
                            </div>
                          </div>

                          <div className="mt-2 flex items-center justify-between text-[10px] text-zinc-400 pt-1 border-t border-[#1b2434]">
                            <span>CP: <strong className="text-white">2387</strong> • Lv: <strong className="text-white">20</strong></span>
                            <span className="text-sky-300 font-semibold">Master League: #1</span>
                          </div>
                        </div>

                        {/* Fast Catch Helpers */}
                        <div className="flex items-center justify-between text-xs bg-[#121822] p-2 rounded-xl border border-[#1d2638]">
                          <span className="flex items-center gap-1.5 text-zinc-300">
                            <Target className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                            <span>Fast Catch & Curveball</span>
                          </span>
                          <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">ENABLED</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        {/* Auto-Spin Status */}
                        <div className="rounded-xl bg-[#141b26] p-2.5 sm:p-3 border border-[#212c3e]">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-zinc-200">Auto-Spin Disks</span>
                            <span className="text-xs font-bold text-emerald-400">{spinnedCount} Spun</span>
                          </div>
                          
                          <div className="mt-1.5 flex items-center justify-between text-[11px] text-zinc-400">
                            <span>Bag Space:</span>
                            <span className="font-mono text-white">{bagSlots.current} / {bagSlots.max}</span>
                          </div>
                          
                          <div className="mt-1 w-full bg-[#0a0d14] rounded-full h-1.5 overflow-hidden">
                            <div 
                              className="bg-emerald-500 h-full rounded-full transition-all"
                              style={{ width: `${(bagSlots.current / bagSlots.max) * 100}%` }}
                            />
                          </div>

                          <button
                            type="button"
                            onClick={triggerSpinSimulation}
                            className="mt-2.5 w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2 flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
                          >
                            <RotateCw className="h-3 w-3" />
                            <span>Simulate PokéStop Spin</span>
                          </button>
                        </div>

                        {/* Built-in Joystick Preview */}
                        <div className="rounded-xl bg-[#121822] p-2.5 border border-[#1d2638]">
                          <div className="flex items-center justify-between text-xs text-zinc-300 mb-2">
                            <span className="flex items-center gap-1.5 font-semibold">
                              <Compass className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                              Internal Joystick Control
                            </span>
                            <span className="text-[10px] font-mono text-zinc-400">9.3 km/h</span>
                          </div>

                          {/* D-Pad Buttons */}
                          <div className="grid grid-cols-3 gap-1 max-w-[120px] mx-auto text-center font-mono text-xs">
                            <div />
                            <button
                              onClick={() => nudgeLocation('N')}
                              className="rounded bg-[#1b2536] hover:bg-emerald-600 active:scale-90 text-white p-1.5 transition cursor-pointer"
                              aria-label="Move North"
                            >
                              ▲
                            </button>
                            <div />
                            <button
                              onClick={() => nudgeLocation('W')}
                              className="rounded bg-[#1b2536] hover:bg-emerald-600 active:scale-90 text-white p-1.5 transition cursor-pointer"
                              aria-label="Move West"
                            >
                              ◀
                            </button>
                            <div className="flex items-center justify-center text-[10px] text-zinc-400 font-bold">•</div>
                            <button
                              onClick={() => nudgeLocation('E')}
                              className="rounded bg-[#1b2536] hover:bg-emerald-600 active:scale-90 text-white p-1.5 transition cursor-pointer"
                              aria-label="Move East"
                            >
                              ▶
                            </button>
                            <div />
                            <button
                              onClick={() => nudgeLocation('S')}
                              className="rounded bg-[#1b2536] hover:bg-emerald-600 active:scale-90 text-white p-1.5 transition cursor-pointer"
                              aria-label="Move South"
                            >
                              ▼
                            </button>
                            <div />
                          </div>

                          <div className="mt-2 text-[10px] text-center font-mono text-zinc-400 truncate">
                            Lat: {playerCoord.lat.toFixed(4)}, Lng: {playerCoord.lng.toFixed(4)}
                          </div>
                        </div>

                      </div>
                    )}

                  </div>
                )}

              </div>
            </div>

            {/* Bottom Live Activity Feed */}
            <div className="relative z-10 mt-4 sm:mt-6 rounded-xl border border-[#1e2738] bg-[#0c1017]/90 p-2.5 sm:p-3 font-mono text-[10px] sm:text-[11px] text-zinc-400 space-y-1">
              <div className="flex items-center justify-between text-[10px] font-bold text-zinc-300 pb-1 border-b border-[#182030]">
                <span>PgSphere-NR Runtime Stream</span>
                <span className="text-emerald-400">100% Local</span>
              </div>
              {autoSpinLog.map((log, i) => (
                <div key={i} className="truncate text-zinc-300">{log}</div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
