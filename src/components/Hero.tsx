import { useState } from 'react';
import { Download, ChevronRight, ShieldCheck, Zap, Sliders, Compass, Target, RotateCw, CheckCircle2 } from 'lucide-react';
import { CURRENT_RELEASE } from '../data/downloadData';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero = ({ onOpenDownload }: HeroProps) => {
  // Mock interactive preview controls
  const [autoSpin, setAutoSpin] = useState(true);
  const [ivOverlay, setIvOverlay] = useState(true);
  const [fastCatch, setFastCatch] = useState(true);
  const [joystick, setJoystick] = useState(false);

  return (
    <section id="overview" className="relative overflow-hidden pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Ambient background glows with max-w-full and overflow control */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-[90vw] h-[320px] bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] max-w-[80vw] h-[350px] bg-sky-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Action CTA */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tag pill */}
            <div className="inline-flex max-w-full flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] sm:text-xs font-semibold text-emerald-300 backdrop-blur-md mb-5 sm:mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span className="font-bold">ZERO ROOT REQUIRED</span>
              <span className="text-zinc-500 hidden xs:inline">•</span>
              <span className="text-sky-200">{CURRENT_RELEASE.tag} Standalone APK</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.12]">
              Elevate Your Pokémon GO Experience with{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                PgSphere-NR
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              The high-performance standalone Android mod engineered specifically for phones <span className="text-white font-semibold underline decoration-emerald-500/50 underline-offset-4">without root</span>. 
              Featuring an integrated floating HUD, instant 100% IV scanner, smart PokéStop auto-spin, precision fast catch, and built-in location joystick.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
              <button
                type="button"
                onClick={onOpenDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 px-5 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-emerald-600/30 ring-1 ring-emerald-400/40 hover:from-emerald-500 hover:to-sky-500 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <Download className="h-5 w-5 shrink-0" />
                <div className="text-left">
                  <div className="leading-tight">Download PgSphere-NR APK</div>
                  <div className="text-[11px] opacity-80 font-mono font-normal">
                    {CURRENT_RELEASE.fileName} • {CURRENT_RELEASE.fileSize}
                  </div>
                </div>
              </button>

              <a
                href="#install"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-[#262e3e] bg-[#131722]/80 px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-zinc-200 hover:bg-[#1a2130] hover:border-emerald-500/50 hover:text-white transition"
              >
                <span>Setup Guide</span>
                <ChevronRight className="h-4 w-4 text-zinc-400" />
              </a>
            </div>

            {/* Key feature highlights */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#1e2636] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
              <div className="flex items-center sm:items-start gap-3 sm:gap-2.5 p-2 sm:p-0 rounded-xl sm:rounded-none bg-[#11151f]/50 sm:bg-transparent">
                <div className="rounded-lg bg-emerald-500/10 p-2 sm:p-1.5 text-emerald-400 shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">No Root / No LSPosed</div>
                  <div className="text-[11px] text-zinc-400">Installs directly on stock phones</div>
                </div>
              </div>

              <div className="flex items-center sm:items-start gap-3 sm:gap-2.5 p-2 sm:p-0 rounded-xl sm:rounded-none bg-[#11151f]/50 sm:bg-transparent">
                <div className="rounded-lg bg-teal-500/10 p-2 sm:p-1.5 text-teal-400 shrink-0">
                  <Sliders className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Floating In-Game HUD</div>
                  <div className="text-[11px] text-zinc-400">On-screen live control menu</div>
                </div>
              </div>

              <div className="flex items-center sm:items-start gap-3 sm:gap-2.5 p-2 sm:p-0 rounded-xl sm:rounded-none bg-[#11151f]/50 sm:bg-transparent">
                <div className="rounded-lg bg-sky-500/10 p-2 sm:p-1.5 text-sky-400 shrink-0">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Direct IL2CPP C++</div>
                  <div className="text-[11px] text-zinc-400">Zero frame drop execution</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Phone Mockup with Interactive In-Game HUD Preview */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[310px] xs:max-w-[340px] sm:max-w-[360px] rounded-[32px] sm:rounded-[36px] border-4 border-[#252c3c] bg-[#0c0e14] p-2.5 sm:p-3 shadow-2xl shadow-emerald-950/40 ring-1 ring-white/10">
              
              {/* Phone speaker notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-3.5 sm:h-4 rounded-full bg-[#181d28] flex items-center justify-center">
                <div className="w-8 sm:w-10 h-1 rounded-full bg-[#2a3243]" />
              </div>

              {/* Game View Screen Inside Phone */}
              <div className="mt-3 rounded-[24px] sm:rounded-[28px] overflow-hidden border border-[#1f2636] bg-gradient-to-b from-[#101b2b] via-[#0d1624] to-[#080d16] p-3 sm:p-4 text-left relative min-h-[440px] sm:min-h-[460px] flex flex-col justify-between">
                
                {/* Floating Game Scene Top Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-300 font-bold">PgSphere-NR Active</span>
                  </div>
                  <span className="rounded bg-[#172030] px-2 py-0.5 text-zinc-300">0.435.2</span>
                </div>

                {/* Simulated In-Game Floating HUD Overlay */}
                <div className="my-auto space-y-2.5 sm:space-y-3">
                  
                  {/* Floating Menu Card */}
                  <div className="rounded-2xl border border-emerald-500/40 bg-[#0c1017]/95 p-3 sm:p-3.5 shadow-xl backdrop-blur-md ring-1 ring-emerald-500/20">
                    <div className="flex items-center justify-between pb-2 border-b border-[#1c2434]">
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-tr from-emerald-500 to-sky-400 flex items-center justify-center p-0.5">
                          <div className="h-full w-full rounded-full bg-[#0a0e14] flex items-center justify-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          </div>
                        </div>
                        <span className="text-xs font-bold text-white">NR Overlay Menu</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">
                        NON-ROOT
                      </span>
                    </div>

                    {/* Interactive Toggles */}
                    <div className="mt-2.5 space-y-2">
                      <div 
                        onClick={() => setAutoSpin(!autoSpin)}
                        className="flex items-center justify-between p-1.5 rounded-lg bg-[#121824] hover:bg-[#162030] cursor-pointer transition text-xs"
                      >
                        <span className="flex items-center gap-1.5 text-zinc-300">
                          <RotateCw className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                          <span>Auto-Spin PokéStops</span>
                        </span>
                        <div className={`w-8 h-4.5 rounded-full transition p-0.5 shrink-0 ${autoSpin ? 'bg-emerald-500' : 'bg-zinc-700'}`}>
                          <div className={`w-3.5 h-3.5 rounded-full bg-white transition transform ${autoSpin ? 'translate-x-3.5' : 'translate-x-0'}`} />
                        </div>
                      </div>

                      <div 
                        onClick={() => setIvOverlay(!ivOverlay)}
                        className="flex items-center justify-between p-1.5 rounded-lg bg-[#121824] hover:bg-[#162030] cursor-pointer transition text-xs"
                      >
                        <span className="flex items-center gap-1.5 text-zinc-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                          <span>100% IV Encounter HUD</span>
                        </span>
                        <div className={`w-8 h-4.5 rounded-full transition p-0.5 shrink-0 ${ivOverlay ? 'bg-emerald-500' : 'bg-zinc-700'}`}>
                          <div className={`w-3.5 h-3.5 rounded-full bg-white transition transform ${ivOverlay ? 'translate-x-3.5' : 'translate-x-0'}`} />
                        </div>
                      </div>

                      <div 
                        onClick={() => setFastCatch(!fastCatch)}
                        className="flex items-center justify-between p-1.5 rounded-lg bg-[#121824] hover:bg-[#162030] cursor-pointer transition text-xs"
                      >
                        <span className="flex items-center gap-1.5 text-zinc-300">
                          <Target className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                          <span>Fast Catch Assist</span>
                        </span>
                        <div className={`w-8 h-4.5 rounded-full transition p-0.5 shrink-0 ${fastCatch ? 'bg-emerald-500' : 'bg-zinc-700'}`}>
                          <div className={`w-3.5 h-3.5 rounded-full bg-white transition transform ${fastCatch ? 'translate-x-3.5' : 'translate-x-0'}`} />
                        </div>
                      </div>

                      <div 
                        onClick={() => setJoystick(!joystick)}
                        className="flex items-center justify-between p-1.5 rounded-lg bg-[#121824] hover:bg-[#162030] cursor-pointer transition text-xs"
                      >
                        <span className="flex items-center gap-1.5 text-zinc-300">
                          <Compass className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                          <span>On-Screen Joystick</span>
                        </span>
                        <div className={`w-8 h-4.5 rounded-full transition p-0.5 shrink-0 ${joystick ? 'bg-emerald-500' : 'bg-zinc-700'}`}>
                          <div className={`w-3.5 h-3.5 rounded-full bg-white transition transform ${joystick ? 'translate-x-3.5' : 'translate-x-0'}`} />
                        </div>
                      </div>
                    </div>

                    {/* Encounter IV Banner Preview */}
                    {ivOverlay && (
                      <div className="mt-2.5 p-2 rounded-xl bg-gradient-to-r from-emerald-950/70 to-teal-950/70 border border-emerald-500/30 text-[11px]">
                        <div className="flex items-center justify-between font-bold">
                          <span className="text-white truncate pr-1">Rayquaza #384</span>
                          <span className="text-emerald-400 font-mono shrink-0">100% IV (15/15/15)</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-zinc-400 text-[10px]">
                          <span>CP 2191 • Lv 20</span>
                          <span className="text-sky-300 font-semibold">Master League #1</span>
                        </div>
                      </div>
                    )}

                  </div>

                </div>

                {/* Bottom Game Status */}
                <div className="rounded-xl bg-[#0f141f] border border-[#1e2738] p-2 text-center text-[10px] text-zinc-400">
                  <span>In-Process Bootstrap • Local Memory Only</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
