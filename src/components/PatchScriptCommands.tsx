import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

export const PatchScriptCommands: React.FC = () => {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const linuxCmd = 'curl -fsSL https://raw.githubusercontent.com/tawroot/antigravity-cleaner/main/install.sh | bash';
  const winCmd = 'irm https://raw.githubusercontent.com/tawroot/antigravity-cleaner/main/install.ps1 | iex';

  const handleCopy = (cmd: string, key: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(key);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <section id="patch-commands" className="py-7 border-b border-neutral-850">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-[11px] font-mono">
            ۴
          </span>
          <span>دستورات اجرای اسکریپت پچ</span>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-neutral-100 tracking-tight mb-2">
          اجرای اسکریپت پچ Antigravity Cleaner
        </h2>

        <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
          آنتی‌گراویتی را ببندید، وی‌پی‌ان را متصل کنید و دستور مربوط به سیستم‌عامل خود را در ترمینال یا PowerShell اجرا نمایید:
        </p>

        <div className="space-y-3">
          {/* Linux / Mac */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-3 sm:p-3.5 text-xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-semibold text-neutral-200">لینوکس / مک / WSL:</span>
              <button
                onClick={() => handleCopy(linuxCmd, 'linux')}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
              >
                {copiedCmd === 'linux' ? (
                  <>
                    <Check className="h-3 w-3 text-cyan-400" />
                    <span className="text-cyan-400 font-medium">کپی شد</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>کپی دستور</span>
                  </>
                )}
              </button>
            </div>
            <div className="rounded-lg bg-black/90 border border-neutral-850 p-2.5 font-mono text-cyan-300 overflow-x-auto text-left" dir="ltr">
              <code>{linuxCmd}</code>
            </div>
          </div>

          {/* Windows PowerShell */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-3 sm:p-3.5 text-xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-semibold text-neutral-200">ویندوز (PowerShell):</span>
              <button
                onClick={() => handleCopy(winCmd, 'win')}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
              >
                {copiedCmd === 'win' ? (
                  <>
                    <Check className="h-3 w-3 text-cyan-400" />
                    <span className="text-cyan-400 font-medium">کپی شد</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>کپی دستور</span>
                  </>
                )}
              </button>
            </div>
            <div className="rounded-lg bg-black/90 border border-neutral-850 p-2.5 font-mono text-cyan-300 overflow-x-auto text-left" dir="ltr">
              <code>{winCmd}</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
