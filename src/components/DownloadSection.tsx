import { useState } from 'react';
import { Download, Copy, Check, ShieldCheck, RefreshCw, Terminal, FileCheck, CheckCircle, Smartphone, ExternalLink } from 'lucide-react';
import { CURRENT_RELEASE } from '../data/downloadData';

interface DownloadSectionProps {
  onOpenDownload: () => void;
}

export const DownloadSection = ({ onOpenDownload }: DownloadSectionProps) => {
  const [copied, setCopied] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<'stable' | 'nightly'>('stable');

  const getDownloadHref = () => {
    if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
      return CURRENT_RELEASE.mirrorDownloadUrl;
    }
    return CURRENT_RELEASE.mediafireUrl;
  };

  const copyHash = () => {
    navigator.clipboard.writeText(CURRENT_RELEASE.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="download" className="relative py-14 sm:py-20 bg-[#0d0f15] border-y border-[#1e2330] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[420px] max-w-[90vw] h-[320px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[380px] max-w-[80vw] h-[300px] bg-sky-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-3">
            <Download className="h-3.5 w-3.5" />
            Official Release Center
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Download PgSphere-NR APK
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-zinc-400 px-2 sm:px-0">
            Get the standalone ARM64 APK installer. Seamlessly loads on stock, unrooted Android phones with zero root or LSPosed required.
          </p>

          {/* Release Channel Selector - Responsive for Mobile & Desktop */}
          <div className="mt-5 sm:mt-6 inline-flex flex-col xs:flex-row w-full sm:w-auto rounded-xl bg-[#141822] p-1 border border-[#242a38] gap-1 xs:gap-0">
            <button
              onClick={() => setSelectedChannel('stable')}
              className={`rounded-lg px-4 sm:px-5 py-2 text-xs font-bold transition ${
                selectedChannel === 'stable'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Stable Release (Recommended)
            </button>
            <button
              onClick={() => setSelectedChannel('nightly')}
              className={`rounded-lg px-4 sm:px-5 py-2 text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                selectedChannel === 'nightly'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Canary / Nightly</span>
              <span className="rounded bg-amber-500/20 text-amber-400 text-[10px] px-1 py-0.2">Dev</span>
            </button>
          </div>
        </div>

        {/* Main Download Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Main Primary Download Card (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl border border-[#263140] bg-[#121620] p-4 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Top badge */}
            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-[#1f2838]">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xl sm:text-2xl font-black text-white break-all">{CURRENT_RELEASE.fileName}</span>
                  <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-2.5 py-0.5 text-[11px] font-semibold">
                    100% Non-Root
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-zinc-400 mt-1">
                  Build date: {CURRENT_RELEASE.date} • Standalone Package Edition
                </p>
              </div>

              <div className="text-left xs:text-right">
                <span className="text-lg sm:text-xl font-bold text-emerald-400 font-mono">{CURRENT_RELEASE.fileSize}</span>
                <span className="block text-[10px] sm:text-[11px] text-zinc-500">Android APK</span>
              </div>
            </div>

            {/* Release Specs Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 my-5 sm:my-6">
              <div className="rounded-xl bg-[#0c0e14] border border-[#1f2636] p-2.5 sm:p-3 text-center">
                <span className="block text-[9px] sm:text-[10px] uppercase font-bold text-zinc-400">Architecture</span>
                <span className="mt-0.5 sm:mt-1 text-xs font-bold text-white font-mono">{CURRENT_RELEASE.targetArchitecture}</span>
              </div>
              <div className="rounded-xl bg-[#0c0e14] border border-[#1f2636] p-2.5 sm:p-3 text-center">
                <span className="block text-[9px] sm:text-[10px] uppercase font-bold text-zinc-400">Min Android</span>
                <span className="mt-0.5 sm:mt-1 text-xs font-bold text-white">Android 10+</span>
              </div>
              <div className="rounded-xl bg-[#0c0e14] border border-[#1f2636] p-2.5 sm:p-3 text-center">
                <span className="block text-[9px] sm:text-[10px] uppercase font-bold text-zinc-400">Tested Target</span>
                <span className="mt-0.5 sm:mt-1 text-xs font-bold text-white">v0.435.2</span>
              </div>
              <div className="rounded-xl bg-[#0c0e14] border border-[#1f2636] p-2.5 sm:p-3 text-center">
                <span className="block text-[9px] sm:text-[10px] uppercase font-bold text-zinc-400">Root Status</span>
                <span className="mt-0.5 sm:mt-1 text-xs font-bold text-emerald-400">Not Required</span>
              </div>
            </div>

            {/* SHA-256 Checksum Card */}
            <div className="rounded-xl bg-[#0a0c12] border border-[#1d2432] p-3 sm:p-3.5 mb-5 sm:mb-6">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5 font-medium">
                <span className="flex items-center gap-1.5 text-zinc-300 text-[11px] sm:text-xs">
                  <FileCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  SHA-256 Checksum Signature
                </span>
                <button
                  onClick={copyHash}
                  className="flex items-center gap-1 text-[11px] sm:text-xs text-emerald-400 hover:text-emerald-300 transition cursor-pointer"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-zinc-400 break-all select-all leading-relaxed bg-[#11151f] p-2 sm:p-2.5 rounded-lg border border-[#1e2638]">
                {CURRENT_RELEASE.sha256}
              </div>
            </div>

            {/* Big Download Action Button */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onOpenDownload}
                className="flex-1 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-emerald-600/30 hover:from-emerald-500 hover:to-sky-500 hover:scale-[1.01] active:scale-95 transition cursor-pointer"
              >
                <Download className="h-5 w-5 shrink-0" />
                <span>Download Official APK</span>
                <span className="text-xs opacity-80 font-mono">({CURRENT_RELEASE.fileSize})</span>
              </button>

              <a
                href={getDownloadHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#2b3548] bg-[#161c28] px-4 py-3.5 sm:py-4 text-xs font-bold text-zinc-300 hover:bg-[#1f283a] hover:text-white transition cursor-pointer"
                title="Download directly from high-speed MediaFire mirror"
              >
                <RefreshCw className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>MediaFire (⚡ High-Speed)</span>
              </a>

              <a
                href={CURRENT_RELEASE.mediafireFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-2xl border border-[#2b3548] bg-[#10141e] px-3.5 py-3.5 sm:py-4 text-xs font-bold text-sky-400 hover:bg-[#171d2b] transition cursor-pointer"
                title="View poke tools release folder"
              >
                <ExternalLink className="h-4 w-4 shrink-0" />
                <span>Folder Archive</span>
              </a>

              <a
                href={CURRENT_RELEASE.githubReleaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-2xl border border-[#2b3548] bg-[#10141e] px-3.5 py-3.5 sm:py-4 text-xs font-bold text-zinc-400 hover:bg-[#171d2b] hover:text-white transition cursor-pointer"
                title="View Release on GitHub"
              >
                <ExternalLink className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>

            {/* Security Guarantee */}
            <div className="mt-5 sm:mt-6 flex flex-col xs:flex-row items-start xs:items-center justify-between text-[11px] sm:text-xs text-zinc-400 gap-2 sm:gap-3 pt-3.5 sm:pt-4 border-t border-[#1d2636]">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="h-4 w-4 shrink-0" /> 100% VirusTotal & Play Protect Verified Clean
              </span>
              <span className="text-zinc-400 font-mono text-[10px] sm:text-xs">Zero telemetry / Local memory only</span>
            </div>
          </div>

          {/* Right Column: Changelog & Device Compatibility (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Changelog Card */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#263140] bg-[#121620] p-4 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-emerald-400 shrink-0" />
                  What's New in {CURRENT_RELEASE.tag}
                </h3>
                <span className="text-[11px] sm:text-xs text-zinc-400 font-mono">{CURRENT_RELEASE.date}</span>
              </div>

              <ul className="space-y-2.5 sm:space-y-3">
                {CURRENT_RELEASE.changelog.map((log, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{log}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Prerequisites Card */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#263140] bg-[#121620] p-4 sm:p-6 shadow-xl">
              <h3 className="text-sm sm:text-base font-bold text-white mb-3 flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-sky-400 shrink-0" />
                Device Compatibility
              </h3>

              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0c0e14] border border-[#1f2636]">
                  <span className="text-zinc-400">Architecture</span>
                  <span className="font-mono font-bold text-white">ARM64 (aarch64)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0c0e14] border border-[#1f2636]">
                  <span className="text-zinc-400">Root Solution</span>
                  <span className="font-semibold text-emerald-400">NOT REQUIRED (Stock OS)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0c0e14] border border-[#1f2636]">
                  <span className="text-zinc-400">Android Version</span>
                  <span className="font-semibold text-sky-400">Android 10 - Android 15</span>
                </div>
              </div>

              <div className="mt-3.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 leading-relaxed">
                Note: 32-bit devices (ARMv7) are not supported. Works with Pokémon Trainer Club (PTC) or Google browser sign-in.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
