import React from 'react';
import { RefreshCw, Play, Zap } from 'lucide-react';

export const CleanerOptionsGuide: React.FC = () => {
  return (
    <section id="cleaner-guide" className="py-7 border-b border-neutral-850">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-1.5">
          <span>راهنمای استراتژیک گزینه‌ها</span>
          <span aria-hidden="true">·</span>
          <span>پاسخ به سوالات و خطاهای احتمالی</span>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-neutral-100 tracking-tight mb-2">
          نکات کلیدی برای رفع خطای ۴۰۳ مجدد و انتخاب گزینه‌ها
        </h2>

        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
          این سه دستورالعمل طلایی را مد نظر داشته باشید:
        </p>

        <div className="space-y-3 text-xs sm:text-sm">
          {/* Rule 1: Re-running patch if 403 happens */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-3.5 sm:p-4">
            <div className="flex items-center gap-2 text-cyan-300 font-bold mb-1.5">
              <RefreshCw className="h-4 w-4 shrink-0 text-cyan-400" />
              <span>اگر بعد از نصب و لاگین باز هم با ارور ۴۰۳ مواجه شدید چه کنیم؟</span>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              نگران نباشید؛ کافیست آنتی‌گراویتی را ببندید، <strong className="text-cyan-300">پچ را مجدداً در ترمینال اجرا کنید و گزینه ۱ (Quick Auto-Fix) را دوباره بزنید.</strong> این کار فایل‌های جدیدی که ممکن است توسط آپدیت خودکار جایگزین شده باشند را دوباره پچ می‌کند.
            </p>
          </div>

          {/* Rule 2: Option 4 for No-TUN VPN */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-3.5 sm:p-4">
            <div className="flex items-center gap-2 text-cyan-300 font-bold mb-1.5">
              <Play className="h-4 w-4 shrink-0 text-cyan-400" />
              <span>اگر وی‌پی‌ان شما فاقد قابلیت تونل (TUN) است: گزینه ۴</span>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              ابتدا وی‌پی‌ان خود را متصل کنید، سپس اسکریپت را اجرا کرده و <strong className="text-cyan-300">گزینه ۴ (Launch Antigravity with Smart Proxy)</strong> را انتخاب کنید. این گزینه یک اسمارت پروکسی مستقل محلی ایجاد کرده و ادیتور را مستقیماً از آن عبور می‌دهد بدون اینکه نیازی به تونل کل سیستم باشد.
            </p>
          </div>

          {/* Rule 3: Option 5 for auto-proxy shortcut */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-3.5 sm:p-4">
            <div className="flex items-center gap-2 text-cyan-300 font-bold mb-1.5">
              <Zap className="h-4 w-4 shrink-0 text-cyan-400" />
              <span>اجرای اتوماتیک بدون نیاز به ست کردن پروکسی دستی: گزینه ۵</span>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              اگر می‌خواهید آنتی‌گراویتی موقع هر بار اجرا به صورت کاملاً خودکار از وی‌پی‌ان و اسمارت پروکسی استفاده کند و دیگر هر بار نیازی به ست کردن سیستم پروکسی نباشد، در منوی ترمینال <strong className="text-cyan-300">گزینه ۵ (Create Desktop Shortcut with Injected Proxy)</strong> را انتخاب کنید تا شورتکات آماده برایتان ساخته شود.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
