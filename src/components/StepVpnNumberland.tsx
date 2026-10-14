import React, { useState } from 'react';
import { Smartphone, KeyRound, QrCode, ZoomIn, X, Info } from 'lucide-react';

export const StepVpnNumberland: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="step-numberland" className="py-7 border-b border-neutral-850">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-[11px] font-mono">
            ۲
          </span>
          <span>تهیه شماره و احتمال اسکن کد QR</span>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-neutral-100 tracking-tight mb-2">
          تهیه شماره از نامبرلند و اسکن QR Code در موبایل
        </h2>

        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
          در صورتی که حین ثبت‌نام نیاز به تایید تلفن داشته باشید، می‌توانید از سایت <a href="https://numberland.ir/" target="_blank" rel="noreferrer" className="text-cyan-400 underline font-medium">نامبرلند</a> یک شماره موقت تهیه کنید:
        </p>

        {/* QR Code Scan Tip */}
        <div className="rounded-xl border border-cyan-900/40 bg-cyan-950/20 p-3.5 mb-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-cyan-300 font-bold mb-1">
            <QrCode className="h-4 w-4 text-cyan-400 shrink-0" />
            <span>نکته اسکن QR Code با گوشی هوشمند:</span>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            گاهی ممکن است گوگل به جای شماره، یک کد QR نمایش دهد تا با دوربین موبایل اسکن کنید. در این صورت، <strong>بهتر است</strong> وی‌پی‌ان گوشی شما هم روشن و آی‌پی یا کشور آن با سیستم یکی باشد (این مورد توصیه می‌شود، اما الزامی و اجباری نیست).
          </p>
        </div>

        {/* Real Static Numberland Screenshot */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-3.5 sm:p-4 mb-4">
          <div className="flex items-center justify-between mb-2.5 text-xs">
            <span className="font-bold text-neutral-200">
              تصویر پنل سایت نامبرلند (سرویس جیمیل و دریافت پیامک فعال‌سازی):
            </span>
            <button
              onClick={() => setIsZoomed(true)}
              className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ZoomIn className="h-3.5 w-3.5" />
              <span>مشاهده سایز اصلی</span>
            </button>
          </div>

          <div
            onClick={() => setIsZoomed(true)}
            className="cursor-zoom-in group overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950"
          >
            <img
              src="/images/numberland.png"
              alt="پنل کاربری نامبرلند"
              className="w-full max-h-[500px] object-contain mx-auto group-hover:scale-[1.008] transition-transform duration-200"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-2 text-center text-[11px] text-neutral-500">
            نمونه واقعی: شماره کشور آلمان با کد پیامک تایید (۷۳۶۹۱۸)
          </div>
        </div>

        {/* Will it ask for phone number next time? */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-3.5 text-xs text-neutral-300">
          <div className="flex items-center gap-1.5 text-cyan-300 font-bold mb-1">
            <KeyRound className="h-4 w-4 text-cyan-400 shrink-0" />
            <span>آیا در ورودهای بعدی دوباره به شماره نامبرلند نیاز داریم؟</span>
          </div>
          <p className="leading-relaxed">
            خیر؛ شماره نامبرلند موقت است. پس از اولین ورود، در تنظیمات اکانت گوگل یک <strong>Recovery Email (ایمیل پشتیبان)</strong> اضافه کنید تا در دفعات بعدی کد تایید به ایمیل ارسال شود و نیازی به شماره نباشد.
          </p>
        </div>
      </div>

      {/* Modal Zoom */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-3"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-6xl max-h-[92vh] bg-neutral-900 p-2 rounded-xl border border-neutral-700">
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-neutral-800 border border-neutral-600 text-white flex items-center justify-center shadow-lg"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src="/images/numberland.png"
              alt="نامبرلند بزرگ‌نمایی"
              className="max-h-[86vh] max-w-full rounded object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
