import { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { CURRENT_RELEASE } from '../data/downloadData';

interface NavbarProps {
  onOpenDownload: () => void;
}

export const Navbar = ({ onOpenDownload }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Features', href: '#features' },
    { label: 'In-Game HUD', href: '#simulator' },
    { label: 'Download', href: '#download' },
    { label: 'Setup Guide', href: '#install' },
    { label: 'Compatibility', href: '#compatibility' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1f2736]/80 bg-[#0b0d11]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <a href="#overview" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-sky-600 shadow-md shadow-emerald-500/20 ring-1 ring-emerald-400/40 transition group-hover:scale-105 group-hover:shadow-emerald-500/40">
            {/* Pokéball custom SVG inner with green/cyan glow */}
            <div className="h-4.5 w-4.5 sm:h-5 sm:w-5 rounded-full border-2 border-white/90 relative overflow-hidden flex flex-col justify-between">
              <div className="h-2 w-full bg-emerald-500/90" />
              <div className="h-0.5 w-full bg-slate-900" />
              <div className="h-2 w-full bg-white" />
              <div className="absolute inset-0 m-auto h-2 w-2 rounded-full border border-slate-900 bg-white" />
            </div>
            <div className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0b0d11] animate-ping" />
            <div className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0b0d11]" />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-extrabold tracking-tight text-base sm:text-lg text-white">PgSphere-NR</span>
              <span className="rounded-full bg-emerald-500/15 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-emerald-400 border border-emerald-500/30 uppercase tracking-wide">
                Non-Root
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-zinc-400 font-mono hidden xs:inline-block">Standalone Game Mod</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-zinc-300 hover:text-emerald-400 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA button (Tablet / Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Target: {CURRENT_RELEASE.testedGameVersion}</span>
          </div>
          
          <button
            type="button"
            onClick={onOpenDownload}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 px-3.5 sm:px-4 py-2 text-xs font-bold text-white shadow-lg shadow-emerald-600/25 ring-1 ring-emerald-400/30 hover:from-emerald-500 hover:to-sky-500 hover:scale-[1.02] active:scale-95 transition cursor-pointer"
          >
            <Download className="h-4 w-4" />
            <span>Download APK</span>
            <span className="text-[10px] opacity-80 font-mono">({CURRENT_RELEASE.fileSize})</span>
          </button>
        </div>

        {/* Mobile controls (Smartphones) */}
        <div className="flex sm:hidden items-center gap-1.5">
          <button
            type="button"
            onClick={onOpenDownload}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-2.5 py-1.5 text-xs font-bold text-white shadow-md active:scale-95 transition"
          >
            <Download className="h-3.5 w-3.5" />
            <span>APK</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-1.5 text-zinc-300 hover:bg-[#151922] hover:text-white transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer with smooth animation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#202738] bg-[#0c0f16]/98 backdrop-blur-xl px-4 pt-3 pb-5 space-y-1.5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between px-3 py-1 mb-1 text-[11px] font-mono text-zinc-400 border-b border-[#1b2332]">
            <span>Version: {CURRENT_RELEASE.tag}</span>
            <span className="text-emerald-400 font-semibold">100% Non-Root</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-[#161c28] hover:text-emerald-400 transition"
            >
              <span>{link.label}</span>
              <span className="text-zinc-600 text-xs">→</span>
            </a>
          ))}
          
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-600/30 active:scale-95 transition"
            >
              <Download className="h-4 w-4" />
              <span>Download PgSphere-NR APK ({CURRENT_RELEASE.fileSize})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
