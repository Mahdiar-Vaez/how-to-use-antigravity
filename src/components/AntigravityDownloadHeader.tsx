import React from 'react';
import { Download, ExternalLink, Info } from 'lucide-react';

export const AntigravityDownloadHeader: React.FC = () => {
  return (
    <section id="download-antigravity" className="py-6 border-b border-neutral-200">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 shadow-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-800 font-bold text-xs sm:text-sm">
              <Download className="h-4 w-4 text-cyan-600" />
              <span>دانلود و نصب کلاینت آنتی‌گراویتی</span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              نسخه رسمی ادیتور یا CLI را از وب‌سایت گوگل دریافت و نصب کنید.
            </p>
            <div className="text-[11px] text-cyan-800 font-medium flex items-center gap-1.5 pt-0.5">
              <Info className="h-3.5 w-3.5 text-cyan-600 shrink-0" />
              <span>نکته مهم: موقع دانلود و نصب آنتی‌گراویتی نیز حتماً باید وی‌پی‌ان شما روشن باشد.</span>
            </div>
          </div>

          <a
            href="https://antigravity.google/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold shrink-0 transition-colors shadow-xs"
          >
            <span>ورود به سایت رسمی Antigravity</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
