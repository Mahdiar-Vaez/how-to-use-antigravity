import React, { useState } from 'react';
import { ZoomIn, X, Terminal } from 'lucide-react';

export const ExecutionStepsGallery: React.FC = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const steps = [
    {
      stepNumber: '۱',
      title: 'مرحله ۱: زمانی که آنتی‌گراویتی ارور داره (Agent execution terminated)',
      description:
        'هنگامی که بدون پچ یا در شرایط تحریم وارد می‌شوید، پس از اولین پرامپت با خطای ۴۰۳ و پیام «Error Agent execution terminated due to error» روبرو می‌شوید.',
      image: '/images/step1-error.png',
      imageCaption: 'اسکرین‌شات ارور آنتی‌گراویتی در کلاینت (Screenshot 13)',
    },
    {
      stepNumber: '۲',
      title: 'مرحله ۲: روشن کردن وی‌پی‌ان (ویندسکرایب با پروتکل IKEv2)',
      description:
        'وی‌پی‌ان Windscribe روشن شده و با پروتکل IKEv2 روی سرور آمریکا (Chicago Cub) بدون نشت آی‌پی متصل می‌شود. سپس صفحه لاگین در مرورگر تایید می‌گردد.',
      image: '/images/step2-windscribe.png',
      secondImage: '/images/step2-browser-auth.png',
      imageCaption: 'اسکرین‌شات اتصال Windscribe روی آنتی‌گراویتی و مرورگر (Screenshot 000308 & 000323)',
    },
    {
      stepNumber: '۳',
      title: 'مرحله ۳: اجرای اسکریپتی که پیش‌تر دانلود کردین و انتخاب گزینه [1] (Quick Auto-Fix)',
      description:
        'اجرای اسکریپتی که پیش‌تر دانلود کردین: ابتدا با فشردن کلید Y پروسس‌های فعال را می‌بندیم، سپس با زدن گزینه ۱ پچ کدهای ماشین language_server.exe و agy.exe انجام شده و پیام سبز رنگ AUTO-FIX COMPLETED SUCCESSFULLY صادر می‌گردد.',
      image: '/images/step3-script-prompt.png',
      secondImage: '/images/step3-patch-success.png',
      imageCaption: 'اسکرین‌شات تایید بستن پروسس‌ها (Y) و اتمام پچ با گزینه ۱ (Screenshot 000336 & 000346)',
    },
    {
      stepNumber: '۴',
      title: 'مرحله ۴: ثبت گزینه و پاسخ موفقیت‌آمیز آنتی‌گراویتی به درخواست تست',
      description:
        'آنتی‌گراویتی مجدداً باز شده و پرامپت test ارسال می‌شود. هوش مصنوعی دیپ‌مایند (Gemini 3.8 Flash High) ظرف ۷ ثانیه پاسخ کامل «Systems are operational and ready. How can I help you today?» را برمی‌گرداند.',
      image: '/images/step4-working-chat.png',
      imageCaption: 'اسکرین‌شات عملیاتی شدن کامل آنتی‌گراویتی و پاسخ به پرامپت (Screenshot 000420)',
    },
  ];

  return (
    <section id="execution-steps" className="py-8 border-b border-neutral-200">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 mb-1.5">
          <span>روایت تصویری ترتیبی</span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span>مشاهده متوالی زیر هم</span>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-2">
          مراحل تصویری اجرایی به ترتیب (زیر هم)
        </h2>

        <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed">
          تمام مراحل از زمان ارور تا اجرای موفق به صورت پیوسته در زیر نمایش داده شده است (برای مشاهده تمام‌صفحه روی هر عکس کلیک کنید):
        </p>

        {/* Vertical Step-by-Step Cards */}
        <div className="space-y-6">
          {steps.map((st) => (
            <div
              key={st.stepNumber}
              className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6 shadow-xs"
            >
              {/* Step Header */}
              <div className="flex items-start gap-3 pb-3 mb-3 border-b border-neutral-200">
                <div className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 text-xs font-bold font-mono">
                  {st.stepNumber}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900">
                    {st.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>

              {/* Primary Image */}
              <div
                onClick={() => setZoomedImage(st.image)}
                className="cursor-zoom-in group overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100/70 shadow-xs relative mb-2 p-1"
              >
                <img
                  src={st.image}
                  alt={st.title}
                  className="w-full max-h-[540px] object-contain mx-auto rounded-lg group-hover:scale-[1.008] transition-transform duration-200"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-white/95 border border-neutral-200/90 shadow-xs text-[10px] sm:text-[11px] text-neutral-700 font-medium flex items-center gap-1">
                  <ZoomIn className="h-3 w-3 text-cyan-600" />
                  <span>بزرگ‌نمایی</span>
                </div>
              </div>

              {/* Second Image if available */}
              {st.secondImage && (
                <div className="mt-3 pt-3 border-t border-neutral-200">
                  <div
                    onClick={() => setZoomedImage(st.secondImage!)}
                    className="cursor-zoom-in group overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100/70 shadow-xs relative p-1"
                  >
                    <img
                      src={st.secondImage}
                      alt={`${st.title} - تصویر تکمیلی`}
                      className="w-full max-h-[440px] object-contain mx-auto rounded-lg group-hover:scale-[1.008] transition-transform duration-200"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-white/95 border border-neutral-200/90 shadow-xs text-[10px] sm:text-[11px] text-neutral-700 font-medium flex items-center gap-1">
                      <ZoomIn className="h-3 w-3 text-cyan-600" />
                      <span>بزرگ‌نمایی</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-2 text-center text-[11px] text-neutral-500">
                {st.imageCaption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Zoom */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[94vh] bg-white p-2.5 rounded-2xl border border-neutral-300 shadow-2xl">
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white border border-neutral-300 text-neutral-800 hover:bg-neutral-100 flex items-center justify-center shadow-lg transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={zoomedImage}
              alt="بزرگ‌نمایی تصویر مرحله"
              className="max-h-[88vh] max-w-full rounded object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
