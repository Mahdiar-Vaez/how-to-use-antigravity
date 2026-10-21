import React from 'react';
import { Shield, Sliders, Info } from 'lucide-react';

export const VpnProtocolSection: React.FC = () => {
  return (
    <section id="step-vpn" className="py-7 border-b border-neutral-200">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 text-[11px] font-mono font-bold">
            ۳
          </span>
          <span>اتصال وی‌پی‌ان و پروتکل شبکه</span>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-2">
          تنظیم وی‌پی‌ان Windscribe و الزامات اتصال
        </h2>

        {/* Softened callout */}
        <div className="rounded-xl border border-cyan-200 bg-cyan-50/80 p-4 mb-4 text-xs sm:text-sm text-neutral-800 leading-relaxed shadow-xs">
          <div className="flex items-center gap-2 text-cyan-900 font-bold mb-1">
            <Info className="h-4 w-4 text-cyan-600 shrink-0" />
            <span>نکته مهم اتصال:</span>
          </div>
          موقع ثبت‌نام و اجرای آنتی‌گراویتی، وی‌پی‌ان شما حتماً باید روشن باشد تا ارتباط با سرورها برقرار شده و خطای ۴۰۳ دریافت نکنید.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          {/* Windscribe */}
          <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-xs">
            <div className="flex items-center gap-2 text-cyan-800 font-bold mb-2">
              <Shield className="h-4 w-4 shrink-0 text-cyan-600" />
              <h3>تنظیم در نرم‌افزار Windscribe:</h3>
            </div>
            <p className="text-neutral-700 leading-relaxed mb-2.5">
              در نرم‌افزار Windscribe به بخش <strong>Preferences</strong> و سپس تب <strong>Connection</strong> بروید. حالت <strong>Connection Mode</strong> را روی <strong>Manual</strong> و پروتکل را روی <strong>IKEv2</strong> قرار دهید (با همان پورت پیش‌فرض یا هر پورتی که روی اینترنت شما متصل شد و کار کرد).
            </p>
            <div className="text-[11px] text-neutral-500">
              این پروتکل به دلیل عملکرد در سطح هسته سیستم، کمترین افت پکت و نشت آی‌پی را دارد.
            </div>
          </div>

          {/* Other tools */}
          <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-xs">
            <div className="flex items-center gap-2 text-cyan-800 font-bold mb-2">
              <Sliders className="h-4 w-4 shrink-0 text-cyan-600" />
              <h3>استفاده از سایر ابزارها (v2ray، NekoBox و...):</h3>
            </div>
            <p className="text-neutral-700 leading-relaxed mb-2.5">
              از سایر کلاینت‌های فیلترشکن هم می‌توانید استفاده کنید، به شرطی که قابلیت <strong>TUN Mode (کارت شبکه مجازی)</strong> فعال باشد تا تمام سوکت‌های پروسس‌های پس‌زمینه را هدایت کند.
            </p>
            <div className="text-[11px] text-cyan-900 font-medium bg-cyan-50 border border-cyan-200/80 p-2.5 rounded-lg">
              در v2rayN تیک Enable TUN Mode و در کلاینت‌های سینگ‌باکس یا NekoBox گزینه TUN را فعال کنید تا مشکل نشت آی‌پی و خطای ۴۰۳ به طور کامل رفع شود.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
