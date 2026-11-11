import { Download, ShieldCheck, ArrowUp } from 'lucide-react';
import { CURRENT_RELEASE } from '../data/downloadData';

interface FooterProps {
  onOpenDownload: () => void;
}

export const Footer = ({ onOpenDownload }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090d] border-t border-[#1a202c] text-zinc-400 text-xs py-10 sm:py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 sm:pb-10 border-b border-[#181e2b]">
          
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-600 shadow-md shrink-0">
                <div className="h-4 w-4 sm:h-4.5 sm:w-4.5 rounded-full border border-white/90 relative overflow-hidden flex flex-col justify-between">
                  <div className="h-1.5 w-full bg-emerald-500" />
                  <div className="h-0.5 w-full bg-slate-900" />
                  <div className="h-1.5 w-full bg-white" />
                </div>
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">PgSphere-NR</span>
              <span className="rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] px-2 py-0.5 font-bold uppercase">
                Non-Root Edition
              </span>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              The high-performance standalone Android mod engineered for phones without root. Native memory hooks, instant IV scanner, auto-spin, and in-game floating HUD.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-zinc-400">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>Tested on Pokémon GO {CURRENT_RELEASE.testedGameVersion}</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-bold text-white text-xs uppercase tracking-wider block mb-2 sm:mb-3">Navigation</span>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              <li><a href="#overview" className="hover:text-emerald-400 transition">Overview</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition">Features</a></li>
              <li><a href="#simulator" className="hover:text-emerald-400 transition">In-Game HUD</a></li>
              <li><a href="#download" className="hover:text-emerald-400 transition">Download</a></li>
              <li><a href="#install" className="hover:text-emerald-400 transition">Setup Guide</a></li>
              <li><a href="#compatibility" className="hover:text-emerald-400 transition">Compatibility</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Release Download Summary (4 cols) */}
          <div className="md:col-span-4 rounded-2xl border border-[#20283a] bg-[#0e121a] p-4 sm:p-5 space-y-3">
            <span className="font-bold text-white text-xs block">Official Release Package</span>
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400">Package:</span>
              <span className="font-mono text-white font-bold truncate pl-2">{CURRENT_RELEASE.fileName}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400">Size & Tag:</span>
              <span className="font-mono text-emerald-400">{CURRENT_RELEASE.fileSize} • {CURRENT_RELEASE.tag}</span>
            </div>
            
            <button
              type="button"
              onClick={onOpenDownload}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-sky-600 px-4 py-2.5 sm:py-3 text-xs font-bold text-white shadow-md hover:from-emerald-500 hover:to-sky-500 transition active:scale-95 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>Download Official APK</span>
            </button>
          </div>

        </div>

        {/* Bottom Legal Disclaimer */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] text-zinc-400">
          <p className="max-w-2xl text-center sm:text-left leading-relaxed">
            PgSphere-NR is an independent educational reverse-engineering research project. 
            Pokémon GO and Pokémon are trademarks of Niantic, Inc., The Pokémon Company, and Nintendo. 
            This project is not affiliated with or endorsed by Niantic or Nintendo. Use responsibly on spare accounts.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-lg border border-[#222b3e] bg-[#121622] px-3 py-1.5 text-zinc-400 hover:text-white hover:border-zinc-500 transition cursor-pointer shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
