import type { ReactNode } from 'react';
import { ShieldCheck, Sliders, Scan, RotateCw, Target, Compass, Sparkles } from 'lucide-react';
import { FEATURES_LIST } from '../data/downloadData';

const iconMap: Record<string, ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
  Sliders: <Sliders className="h-5 w-5 text-teal-400" />,
  Scan: <Scan className="h-5 w-5 text-sky-400" />,
  RotateCw: <RotateCw className="h-5 w-5 text-emerald-400" />,
  Target: <Target className="h-5 w-5 text-amber-400" />,
  Compass: <Compass className="h-5 w-5 text-purple-400" />
};

export const Features = () => {
  return (
    <section id="features" className="py-14 sm:py-20 bg-[#0d0f15] border-t border-[#1e2330] overflow-hidden">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Core Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Pure Performance Without Root
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-zinc-400 px-2 sm:px-0">
            Everything you need for an elevated gameplay experience, executing directly within the game memory with zero external dependencies.
          </p>
        </div>

        {/* Features 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {FEATURES_LIST.map((feature) => (
            <div
              key={feature.id}
              className="group relative rounded-2xl sm:rounded-3xl border border-[#222a3a] bg-[#121620] p-5 sm:p-7 shadow-lg hover:border-emerald-500/40 hover:bg-[#151b27] transition-all duration-200"
            >
              {/* Top Row: Icon + Badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-[#171e2c] border border-[#242f42] group-hover:scale-105 transition">
                  {iconMap[feature.icon] || <Sparkles className="h-5 w-5 text-emerald-400" />}
                </div>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-emerald-400">
                  {feature.badge}
                </span>
              </div>

              {/* Category */}
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                {feature.category}
              </span>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
