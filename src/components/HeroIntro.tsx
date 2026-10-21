import React from 'react';

export const HeroIntro: React.FC = () => {
  return (
    <section id="intro" className="pt-6 sm:pt-8 pb-6 border-b border-neutral-200">
      <div className="mx-auto max-w-4xl">
        {/* Subtle Kicker */}
        <div className="flex items-center gap-2 text-xs text-cyan-700 font-semibold mb-2.5">
          <span>مستندات بای‌پس و رفع محدودیت ریجن</span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span className="text-neutral-500">نسخه ۵.۲</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 leading-snug mb-3">
          راهنمای عملی راه‌اندازی و دور زدن تحریم <span className="text-cyan-700">آنتی‌گراویتی (Antigravity)</span>
        </h1>

        {/* Concise Paragraph */}
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
          آنتی‌گراویتی محیط نوین توسعه و کدنویسی هوش مصنوعی گوگل و دیپ‌مایند است. در این مستند، روش حل خطای ۴۰۳، پچ کدهای باینری، تنظیمات وی‌پی‌ان و نحوه استفاده از اکانت به صورت مرحله‌به‌مرحله و با تصاویر واقعی بررسی می‌شود.
        </p>
        <p className="mt-3 p-3 rounded-xl bg-cyan-50 border border-cyan-200/80 text-xs sm:text-sm text-cyan-900 leading-relaxed font-medium">
          برای اینکه مراحل را درست و بدون مشکل انجام دهید، لطفاً پیش از شروع کل این راهنما را بخوانید؛ مطالعه‌ی آن کمتر از ۵ دقیقه زمان می‌برد.
        </p>
      </div>
    </section>
  );
};
