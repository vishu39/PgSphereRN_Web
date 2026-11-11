import { useState } from 'react';
import { CheckCircle, AlertTriangle, XCircle, Sparkles, Smartphone, Cpu, ShieldCheck, Key } from 'lucide-react';

export const CompatibilityChecker = () => {
  const [androidVer, setAndroidVer] = useState<'supported' | 'unsupported'>('supported');
  const [rootType, setRootType] = useState<'none' | 'rooted'>('none');
  const [arch, setArch] = useState<'arm64' | 'arm32'>('arm64');
  const [accountType, setAccountType] = useState<'ptc' | 'google'>('ptc');

  const getStatus = () => {
    if (arch === 'arm32') {
      return {
        title: "64-Bit Device Required",
        message: "PgSphere-NR requires ARM64-v8a. Older 32-bit phones cannot run the native IL2CPP game binary.",
        status: "error"
      };
    }
    if (androidVer === 'unsupported') {
      return {
        title: "Android 10+ Required",
        message: "Android 9 (Pie) or below lacks modern 64-bit runtime and overlay permissions required by Pokémon GO.",
        status: "warning"
      };
    }
    if (rootType === 'none') {
      return {
        title: "Fully Compatible (No Root Needed!)",
        message: "Your phone is 100% ready for PgSphere-NR standalone APK installation with zero root or LSPosed required.",
        status: "success"
      };
    }
    return {
      title: "Compatible (Rooted or Non-Root)",
      message: "PgSphere-NR runs standalone on both unrooted and rooted phones. (For LSPosed injection, check sibling project PokeSphere).",
      status: "success"
    };
  };

  const status = getStatus();

  return (
    <section id="compatibility" className="py-14 sm:py-20 bg-[#0b0d13] overflow-hidden">
      <div className="mx-auto max-w-5xl px-3.5 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl border border-[#232c3d] bg-[#11151f] p-4 sm:p-8 lg:p-10 shadow-xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-[#1f2838]">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                <Sparkles className="h-3.5 w-3.5" />
                Pre-Flight Hardware Check
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Device Compatibility Tester</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Verify if your Android phone and configuration can run PgSphere-NR without root.
              </p>
            </div>
            
            {/* Status indicator */}
            <div className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold border shrink-0 ${
              status.status === 'success' 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                : status.status === 'warning'
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
            }`}>
              {status.status === 'success' && <CheckCircle className="h-4 w-4 shrink-0" />}
              {status.status === 'warning' && <AlertTriangle className="h-4 w-4 shrink-0" />}
              {status.status === 'error' && <XCircle className="h-4 w-4 shrink-0" />}
              <span className="text-center">{status.title}</span>
            </div>
          </div>

          {/* Interactive Selectors */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            
            {/* Root status */}
            <div className="rounded-2xl border border-[#20293a] bg-[#0c0e14] p-3.5 sm:p-4 text-left">
              <span className="flex items-center gap-1.5 text-xs font-bold text-zinc-300 mb-2">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                Phone Root Status
              </span>
              <div className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => setRootType('none')}
                  className={`w-full rounded-xl px-3 py-2 text-xs font-semibold text-left transition ${
                    rootType === 'none'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-[#151a24] text-zinc-400 hover:text-white'
                  }`}
                >
                  ✓ Non-Root (Stock)
                </button>
                <button
                  type="button"
                  onClick={() => setRootType('rooted')}
                  className={`w-full rounded-xl px-3 py-2 text-xs font-semibold text-left transition ${
                    rootType === 'rooted'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-[#151a24] text-zinc-400 hover:text-white'
                  }`}
                >
                  Rooted Phone
                </button>
              </div>
            </div>

            {/* Architecture */}
            <div className="rounded-2xl border border-[#20293a] bg-[#0c0e14] p-3.5 sm:p-4 text-left">
              <span className="flex items-center gap-1.5 text-xs font-bold text-zinc-300 mb-2">
                <Cpu className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                Device Architecture
              </span>
              <div className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => setArch('arm64')}
                  className={`w-full rounded-xl px-3 py-2 text-xs font-semibold text-left transition ${
                    arch === 'arm64'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-[#151a24] text-zinc-400 hover:text-white'
                  }`}
                >
                  64-bit ARM64
                </button>
                <button
                  type="button"
                  onClick={() => setArch('arm32')}
                  className={`w-full rounded-xl px-3 py-2 text-xs font-semibold text-left transition ${
                    arch === 'arm32'
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'bg-[#151a24] text-zinc-400 hover:text-white'
                  }`}
                >
                  32-bit (ARMv7)
                </button>
              </div>
            </div>

            {/* Android Version */}
            <div className="rounded-2xl border border-[#20293a] bg-[#0c0e14] p-3.5 sm:p-4 text-left">
              <span className="flex items-center gap-1.5 text-xs font-bold text-zinc-300 mb-2">
                <Smartphone className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                Android OS Version
              </span>
              <div className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => setAndroidVer('supported')}
                  className={`w-full rounded-xl px-3 py-2 text-xs font-semibold text-left transition ${
                    androidVer === 'supported'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-[#151a24] text-zinc-400 hover:text-white'
                  }`}
                >
                  Android 10 - 15
                </button>
                <button
                  type="button"
                  onClick={() => setAndroidVer('unsupported')}
                  className={`w-full rounded-xl px-3 py-2 text-xs font-semibold text-left transition ${
                    androidVer === 'unsupported'
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-[#151a24] text-zinc-400 hover:text-white'
                  }`}
                >
                  Android 9 or older
                </button>
              </div>
            </div>

            {/* Account Type */}
            <div className="rounded-2xl border border-[#20293a] bg-[#0c0e14] p-3.5 sm:p-4 text-left">
              <span className="flex items-center gap-1.5 text-xs font-bold text-zinc-300 mb-2">
                <Key className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                Account Provider
              </span>
              <div className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => setAccountType('ptc')}
                  className={`w-full rounded-xl px-3 py-2 text-xs font-semibold text-left transition ${
                    accountType === 'ptc'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-[#151a24] text-zinc-400 hover:text-white'
                  }`}
                >
                  PTC (Recommended)
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType('google')}
                  className={`w-full rounded-xl px-3 py-2 text-xs font-semibold text-left transition ${
                    accountType === 'google'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-[#151a24] text-zinc-400 hover:text-white'
                  }`}
                >
                  Google Browser
                </button>
              </div>
            </div>

          </div>

          {/* Result explanation box */}
          <div className="mt-5 sm:mt-6 p-3.5 sm:p-4 rounded-2xl bg-[#0c0e14] border border-[#1f283a] text-xs text-zinc-300 flex items-start gap-3">
            <div className="rounded-lg bg-emerald-500/10 p-1.5 sm:p-2 text-emerald-400 shrink-0 mt-0.5">
              <CheckCircle className="h-4 w-4" />
            </div>
            <div>
              <div className="font-bold text-white mb-0.5">{status.title}</div>
              <div className="text-zinc-400 leading-relaxed">{status.message}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
