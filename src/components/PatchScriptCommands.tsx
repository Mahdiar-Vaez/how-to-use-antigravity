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
    <section id="patch-commands" className="py-7 border-b border-neutral-200">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 text-[11px] font-mono font-bold">
            ۴
          </span>
          <span>دستورات اجرای اسکریپت پچ</span>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-2">
          اجرای اسکریپت پچ Antigravity Cleaner
        </h2>

        <p className="text-xs text-neutral-600 mb-4 leading-relaxed">
          آنتی‌گراویتی را ببندید، وی‌پی‌ان را متصل کنید و دستور مربوط به سیستم‌عامل خود را در ترمینال یا PowerShell اجرا نمایید:
        </p>

        <div className="space-y-3">
          {/* Linux / Mac */}
          <div className="rounded-xl border border-neutral-200 bg-white p-3.5 sm:p-4 text-xs shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-neutral-800">لینوکس / مک / WSL:</span>
              <button
                onClick={() => handleCopy(linuxCmd, 'linux')}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-neutral-700 font-medium transition-colors shadow-2xs"
              >
                {copiedCmd === 'linux' ? (
                  <>
                    <Check className="h-3 w-3 text-cyan-600" />
                    <span className="text-cyan-700 font-semibold">کپی شد</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 text-neutral-500" />
                    <span>کپی دستور</span>
                  </>
                )}
              </button>
            </div>
            <div className="rounded-lg bg-neutral-900 border border-neutral-800 p-2.5 font-mono text-cyan-300 overflow-x-auto text-left shadow-inner" dir="ltr">
              <code>{linuxCmd}</code>
            </div>
          </div>

          {/* Windows PowerShell */}
          <div className="rounded-xl border border-neutral-200 bg-white p-3.5 sm:p-4 text-xs shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-neutral-800">ویندوز (PowerShell):</span>
              <button
                onClick={() => handleCopy(winCmd, 'win')}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-neutral-700 font-medium transition-colors shadow-2xs"
              >
                {copiedCmd === 'win' ? (
                  <>
                    <Check className="h-3 w-3 text-cyan-600" />
                    <span className="text-cyan-700 font-semibold">کپی شد</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 text-neutral-500" />
                    <span>کپی دستور</span>
                  </>
                )}
              </button>
            </div>
            <div className="rounded-lg bg-neutral-900 border border-neutral-800 p-2.5 font-mono text-cyan-300 overflow-x-auto text-left shadow-inner" dir="ltr">
              <code>{winCmd}</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
