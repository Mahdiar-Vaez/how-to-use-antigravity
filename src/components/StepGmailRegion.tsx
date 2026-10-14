import React from 'react';
import { CreditCard, ExternalLink, Smartphone, FileText, Info } from 'lucide-react';

export const StepGmailRegion: React.FC = () => {
  return (
    <section id="step-gmail" className="py-7 border-b border-neutral-850">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-[11px] font-mono">
            ۱
          </span>
          <span>بررسی دقیق و چندمرحله‌ای ریجن جیمیل</span>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-neutral-100 tracking-tight mb-2">
          نحوه تشخیص دقیق کشور و ریجن اکانت جیمیل
        </h2>

        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
          گوگل موقعیت جغرافیایی حساب شما را در چندین بخش پروفایل نگهداری می‌کند. برای اطلاع دقیق از ریجن اکانت خود، یکی از سه روش معتبر زیر را بررسی کنید:
        </p>

        {/* 3 Detailed Check Methods */}
        <div className="space-y-3 mb-4 text-xs sm:text-sm">
          {/* Method 1: Google Payments Center */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
            <div className="flex items-center gap-2 text-cyan-400 font-bold mb-2">
              <CreditCard className="h-4 w-4 shrink-0" />
              <h3>روش اول (دقیق‌ترین منبع): مرکز پرداخت گوگل (pay.google.com)</h3>
            </div>
            <ol className="list-decimal list-inside space-y-1.5 text-neutral-300 pr-1 leading-relaxed text-xs">
              <li>
                وارد سایت <a href="https://pay.google.com" target="_blank" rel="noreferrer" className="text-cyan-400 underline font-mono">pay.google.com</a> شوید و با اکانت جیمیل خود لاگین کنید.
              </li>
              <li>
                از منوی بالا یا منوی کناری، روی گزینه <strong>Settings (تنظیمات)</strong> کلیک کنید.
              </li>
              <li>
                به پایین صفحه اسکرول کرده و بخش <strong>Payments profile (پروفایل پرداخت)</strong> را پیدا کنید.
              </li>
              <li>
                سطر <strong>Country/Region (کشور/منطقه)</strong> را ببینید: نام کشوری که در اینجا ثبت شده (مثلاً Iran یا United States) ریجن رسمی حساب شماست.
              </li>
              <li>
                همچنین در تب <strong>Payment methods (روش‌های پرداخت)</strong>، می‌توانید کارت‌ها یا آدرس‌های ذخیره‌شده را بررسی نمایید.
              </li>
            </ol>
          </div>

          {/* Method 2: Google Play Store Mobile */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
            <div className="flex items-center gap-2 text-cyan-400 font-bold mb-2">
              <Smartphone className="h-4 w-4 shrink-0" />
              <h3>روش دوم: اپلیکیشن Google Play Store در گوشی هوشمند</h3>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-neutral-300 pr-1 leading-relaxed text-xs">
              <li>اپلیکیشن گوگل‌پلی را باز کرده و روی آیکون عکس پروفایل خود در گوشه بالا بزنید.</li>
              <li>گزینه <strong>Settings (تنظیمات)</strong> را انتخاب کنید.</li>
              <li>روی بخش <strong>General (عمومی)</strong> بزنید و سپس <strong>Account and device preferences (تنظیمات برگزیده حساب و دستگاه)</strong> را باز کنید.</li>
              <li>در بخش <strong>Country and profiles</strong>، نام کشور فعال اکانت همراه با علامت تیک یا پرچم نشان داده می‌شود.</li>
            </ol>
          </div>

          {/* Method 3: Policies Terms */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-3 text-xs text-neutral-400 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-neutral-300">
              <FileText className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>روش سوم: انتهای صفحه <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="text-cyan-400 underline">قوانین گوگل (Terms)</a> و مشاهده سطر <strong>Country version</strong></span>
            </div>
            <a
              href="https://policies.google.com/country-association-form"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline inline-flex items-center gap-1 font-medium"
            >
              <span>فرم رسمی درخواست تغییر کشور گوگل</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Iran Region Realistic Behavior */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 text-xs">
          <div className="font-bold text-neutral-100 mb-1.5 flex items-center gap-2">
            <Info className="h-4 w-4 text-cyan-400 shrink-0" />
            <span>آیا اگر ریجن اکانت همچنان ایران باشد، پچر آنتی‌گراویتی می‌تواند مشکل را حل کند؟</span>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            <strong>در بعضی مواقع کار کرده و در بعضی مواقع نه.</strong> اسکریپت تلاش می‌کند با پچ کردن فایل‌های <code className="bg-neutral-950 px-1 py-0.5 rounded font-mono text-[11px] text-cyan-300">language_server.exe</code> و <code className="bg-neutral-950 px-1 py-0.5 rounded font-mono text-[11px] text-cyan-300">main.js</code> شرط احراز صلاحیت مکانی را دور بزند، اما اگر برای اکانت شما کار نکرد، <strong>می‌بایست ریجن اکانت را از فرم بالا تغییر دهید و یا یک اکانت جیمیل جدید با ریجن غیر ایران بسازید.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
