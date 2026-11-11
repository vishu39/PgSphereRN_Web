import { useState } from 'react';
import { BookOpen, Copy, Check, Terminal, ShieldAlert, ArrowRight, Smartphone } from 'lucide-react';
import { INSTALL_STEPS } from '../data/downloadData';

export const InstallGuide = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [copiedCmd, setCopiedCmd] = useState(false);

  const copyAdbCommand = () => {
    navigator.clipboard.writeText("adb install PgSphere-NR.apk");
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section id="install" className="py-14 sm:py-20 bg-[#0d0f15] border-t border-[#1e2330] overflow-hidden">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            Quick Setup Walkthrough
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Step-by-Step Non-Root Installation Guide
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-zinc-400 px-2 sm:px-0">
            Follow these 4 straightforward steps to install PgSphere-NR on any stock Android device.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Steps List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
            {INSTALL_STEPS.map((step, idx) => (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl border p-3.5 sm:p-4 transition-all text-left flex items-start gap-3 sm:gap-4 ${
                  activeStep === idx
                    ? 'border-emerald-500/50 bg-[#161c27] shadow-lg shadow-emerald-500/10'
                    : 'border-[#202738] bg-[#11151f] hover:bg-[#141a26]'
                }`}
              >
                <div className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl font-mono text-xs sm:text-sm font-bold ${
                  activeStep === idx
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-[#1a2130] text-zinc-400'
                }`}>
                  {step.step}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs sm:text-sm font-bold text-white truncate">{step.title}</span>
                    <span className="text-[9px] sm:text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#1e2738] text-zinc-400 shrink-0">
                      {step.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] sm:text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {step.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Step Detail Interactive Card (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl border border-[#263144] bg-[#121622] p-4 sm:p-8 shadow-2xl relative overflow-hidden text-left">
            
            {/* Step header */}
            <div className="flex items-center justify-between pb-3.5 sm:pb-4 border-b border-[#1f283a]">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="font-mono text-xs font-bold text-emerald-400">
                  STEP {INSTALL_STEPS[activeStep].step} OF 04
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs font-semibold text-zinc-400">
                  {INSTALL_STEPS[activeStep].badge}
                </span>
              </div>

              {activeStep < 3 ? (
                <button
                  onClick={() => setActiveStep((prev) => prev + 1)}
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>Next Step</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              ) : (
                <span className="text-xs text-emerald-400 font-bold">Complete!</span>
              )}
            </div>

            {/* Title */}
            <h3 className="mt-3.5 sm:mt-4 text-xl sm:text-2xl font-bold text-white">
              {INSTALL_STEPS[activeStep].title}
            </h3>

            {/* Extended instructions */}
            <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {INSTALL_STEPS[activeStep].details}
            </div>

            {/* Step contextual info */}
            {activeStep === 0 && (
              <div className="mt-5 sm:mt-6 rounded-2xl bg-[#0b0e14] border border-[#1f283a] p-3.5 sm:p-4 text-xs text-zinc-400 space-y-2">
                <div className="font-semibold text-white flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-emerald-400 shrink-0" />
                  Direct Download Option
                </div>
                <p className="leading-relaxed">
                  You can download the APK directly using your phone's Chrome or Brave browser. The file will be saved in your device's Downloads folder.
                </p>
              </div>
            )}

            {activeStep === 1 && (
              <div className="mt-5 sm:mt-6 rounded-2xl bg-[#0b0e14] border border-[#1f283a] p-3.5 sm:p-4 text-xs text-zinc-400 space-y-3">
                <div className="font-semibold text-white flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-sky-400 shrink-0" />
                  Alternative: Install via USB / Wireless ADB
                </div>
                <p>
                  If you prefer installing from your computer via ADB terminal:
                </p>
                <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-between bg-[#151c28] p-2.5 rounded-xl border border-[#222d40] font-mono text-zinc-300 text-[11px] sm:text-xs gap-2">
                  <span className="truncate">adb install PgSphere-NR.apk</span>
                  <button
                    onClick={copyAdbCommand}
                    className="text-emerald-400 hover:text-emerald-300 text-xs flex items-center justify-end gap-1 cursor-pointer"
                  >
                    {copiedCmd ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedCmd ? "Copied" : "Copy Command"}</span>
                  </button>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="mt-5 sm:mt-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 p-3.5 sm:p-4 text-xs text-amber-300 space-y-2">
                <div className="font-bold flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0" />
                  Overlay Permission Required
                </div>
                <p className="leading-relaxed">
                  The in-game floating HUD menu requires Android's "Display over other apps" permission so it can draw on top of Pokémon GO without interrupting game rendering.
                </p>
              </div>
            )}

            {activeStep === 3 && (
              <div className="mt-5 sm:mt-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-3.5 sm:p-4 text-xs text-emerald-300 space-y-2">
                <div className="font-bold flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  You're Ready to Play!
                </div>
                <p className="leading-relaxed">
                  Open the game! The floating sphere icon will appear in the top corner. Tap it anytime to toggle features, adjust joystick speed, or review IV rankings.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
