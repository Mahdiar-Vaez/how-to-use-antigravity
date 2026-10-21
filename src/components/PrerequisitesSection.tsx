import React from 'react';
import { Mail, Shield, Smartphone, Globe, Info } from 'lucide-react';

export const PrerequisitesSection: React.FC = () => {
  return (
    <section id="prerequisites" className="py-7 border-b border-neutral-200">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-2">
          پیش‌نیازها و لوکیشن‌های پیشنهادی و بدون مشکل
        </h2>

        <p className="text-xs sm:text-sm text-neutral-600 mb-4 leading-relaxed">
          برای تجربه پایدار، اتصال وی‌پی‌ان خود را روی یکی از کشورهای تست‌شده و مطمئن زیر تنظیم کنید:
        </p>

        {/* Safe Locations */}
        <div className="rounded-xl border border-neutral-200 bg-white p-4 mb-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 mb-2.5">
            <Globe className="h-4 w-4 text-cyan-600" />
            <span>کشورهای بدون مشکل و تضمین‌شده برای آنتی‌گراویتی:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200 text-center font-medium text-neutral-800 shadow-2xs">
              🇩🇪 آلمان (Germany)
            </div>
            <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200 text-center font-medium text-neutral-800 shadow-2xs">
              🇺🇸 آمریکا (United States)
            </div>
            <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200 text-center font-medium text-neutral-800 shadow-2xs">
              🇳🇱 هلند (Netherlands)
            </div>
            <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200 text-center font-medium text-neutral-800 shadow-2xs">
              🇹🇷 ترکیه (Turkey)
            </div>
          </div>
        </div>

        {/* Note on Vless / No-TUN in clean light scheme */}
        <div className="rounded-xl border border-cyan-200 bg-cyan-50/80 p-4 mb-4 text-xs text-neutral-800 leading-relaxed shadow-xs">
          <div className="flex items-center gap-2 text-cyan-900 font-bold mb-1">
            <Info className="h-4 w-4 text-cyan-600 shrink-0" />
            <span>نکته مهم نوع وی‌پی‌ان (تونل در مقابل Vless و معمولی):</span>
          </div>
          اگر وی‌پی‌ان شما قابلیت تونل ندارد (مثلاً کانفیگ‌های معمولی Vless یا پروکسی‌های بدون حالت TUN)، نگران نباشید؛ در ادامه با اسکریپت کلینر (گزینه ۴ Smart Proxy) می‌توان این مسئله را کاملاً هندل کرد. با این حال، <strong className="text-cyan-900">توصیه اکید می‌شود که وی‌پی‌ان شما قابلیت لایه تونل (TUN) داشته باشد</strong> (مانند Windscribe IKEv2) تا هیچ‌گونه نشت آی‌پی رخ ندهد.
        </div>

        {/* 3 Prereqs List */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div className="rounded-xl border border-neutral-200 bg-white p-3.5 shadow-xs">
            <div className="font-bold text-neutral-900 flex items-center gap-1.5 mb-1">
              <Mail className="h-3.5 w-3.5 text-cyan-600" />
              <span>۱. جیمیل معتبر</span>
            </div>
            <p className="text-neutral-600 leading-relaxed">ترجیحاً اکانتی که کشور آن غیر از ایران باشد (روش چک کردن در گام بعد).</p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-3.5 shadow-xs">
            <div className="font-bold text-neutral-900 flex items-center gap-1.5 mb-1">
              <Shield className="h-3.5 w-3.5 text-cyan-600" />
              <span>۲. وی‌پی‌ان با لایه تونل</span>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              Windscribe با پروتکل IKEv2 توصیه اول است، اما الزامی نیست و می‌توانید از سایر ابزارها (مثل v2ray، Sing-box و NekoBox با حالت TUN فعال) نیز استفاده کنید.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-3.5 shadow-xs">
            <div className="font-bold text-neutral-900 flex items-center gap-1.5 mb-1">
              <Smartphone className="h-3.5 w-3.5 text-cyan-600" />
              <span>۳. شماره نامبرلند</span>
            </div>
            <p className="text-neutral-600 leading-relaxed">در صورتی که حین ساخت جیمیل شماره تلفن درخواست شود.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
