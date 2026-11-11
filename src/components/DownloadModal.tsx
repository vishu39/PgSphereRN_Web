import { useState, useEffect, useRef } from 'react';
import { X, Download, CheckCircle2, Copy, Check, ShieldCheck, Smartphone, ExternalLink } from 'lucide-react';
import { CURRENT_RELEASE } from '../data/downloadData';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal = ({ isOpen, onClose }: DownloadModalProps) => {
  const [copied, setCopied] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const hasTriggeredRef = useRef(false);

  const getDownloadHref = () => {
    if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
      return CURRENT_RELEASE.mirrorDownloadUrl;
    }
    return CURRENT_RELEASE.downloadUrl;
  };

  const triggerSingleDownload = () => {
    setDownloadStarted(true);
    const link = document.createElement('a');
    link.href = getDownloadHref();
    link.download = CURRENT_RELEASE.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (isOpen) {
      hasTriggeredRef.current = false;

      // Automatically trigger ONE download after 600ms
      const timer = setTimeout(() => {
        if (!hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          triggerSingleDownload();
        }
      }, 600);

      return () => {
        clearTimeout(timer);
        setDownloadStarted(false);
      };
    }
  }, [isOpen]);

  const copyHash = () => {
    navigator.clipboard.writeText(CURRENT_RELEASE.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl border border-[#2a3446] bg-[#11151f] p-4 sm:p-6 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 rounded-xl p-1.5 text-zinc-400 hover:bg-[#1f2838] hover:text-white transition cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4 sm:mb-5 pr-8">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
            <Download className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-white truncate">Downloading PgSphere-NR</h3>
              <span className="rounded bg-emerald-500/20 text-emerald-400 text-[9px] sm:text-[10px] px-1.5 font-bold uppercase shrink-0">Non-Root</span>
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-400 font-mono mt-0.5 truncate">{CURRENT_RELEASE.fileName} • {CURRENT_RELEASE.fileSize}</p>
          </div>
        </div>

        {/* Download Status Card */}
        <div className="mb-4 sm:mb-5 rounded-xl border border-[#20293a] bg-[#0c0e14] p-3.5 sm:p-4">
          <div className="flex items-center justify-between text-xs font-semibold mb-1">
            <span className="text-zinc-300 text-[11px] sm:text-xs">
              {downloadStarted ? "Download In Progress In Your Browser" : "Preparing Non-Root Release Package..."}
            </span>
            <span className="text-emerald-400 font-mono text-[11px] sm:text-xs">
              {downloadStarted ? "Active" : "Starting..."}
            </span>
          </div>

          <div className="mt-2.5 sm:mt-3 flex flex-col xs:flex-row xs:items-center justify-between gap-1.5">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-emerald-400 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span>{downloadStarted ? "APK transfer initiated" : "Ready to install on Android"}</span>
            </div>
            <button
              type="button"
              onClick={triggerSingleDownload}
              className="text-left xs:text-right text-[11px] sm:text-xs text-sky-400 hover:text-sky-300 underline font-semibold cursor-pointer"
            >
              Click here if download didn't start
            </button>
          </div>

          <div className="mt-2.5 pt-2 border-t border-[#1a2130] flex items-center justify-between text-[11px] text-zinc-400">
            <span>Mirror / Releases page:</span>
            <a
              href={CURRENT_RELEASE.githubReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 font-semibold"
            >
              <span>GitHub Releases</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Next Steps for Non-Root Installation */}
        <div className="mb-4 sm:mb-5 rounded-xl border border-[#20293a] bg-[#141924] p-3 sm:p-3.5 space-y-2 text-xs text-zinc-300">
          <div className="font-bold text-white flex items-center gap-1.5 text-xs">
            <Smartphone className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Next Steps on Your Phone:</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-zinc-300 text-[11px] leading-relaxed">
            <li>Open the downloaded <span className="font-mono text-emerald-300">PgSphere-NR.apk</span> in your file manager.</li>
            <li>Allow installation from unknown sources when prompted.</li>
            <li>If Google Play Protect warns, tap <span className="text-white font-semibold">"Install anyway"</span>.</li>
            <li>Grant <span className="text-white font-semibold">"Display over other apps"</span> permission when opening the app.</li>
          </ol>
        </div>

        {/* Checksum details */}
        <div className="rounded-xl bg-[#090b10] border border-[#1b2230] p-2.5 sm:p-3 mb-4">
          <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              SHA-256 Hash
            </span>
            <button
              onClick={copyHash}
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
            >
              {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
          <div className="font-mono text-[9px] sm:text-[10px] text-zinc-400 break-all select-all leading-tight">
            {CURRENT_RELEASE.sha256}
          </div>
        </div>

        {/* Modal footer */}
        <div className="flex items-center justify-between pt-2 border-t border-[#1e2636]">
          <span className="text-[10px] sm:text-[11px] text-zinc-400">100% Non-Root • Zero telemetry</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-[#1c2434] px-4 py-1.5 sm:py-2 text-xs font-semibold text-zinc-200 hover:bg-[#253046] hover:text-white transition cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
