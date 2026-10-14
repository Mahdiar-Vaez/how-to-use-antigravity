import React from 'react';

export const HeroIntro: React.FC = () => {
  return (
    <section id="intro" className="pt-6 sm:pt-8 pb-6 border-b border-neutral-850">
      <div className="mx-auto max-w-4xl">
        {/* Subtle Kicker */}
        <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium mb-2.5">
          <span>مستندات بای‌پس و رفع محدودیت ریجن</span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="text-neutral-400">نسخه ۵.۲</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-100 leading-snug mb-3">
          راهنمای عملی راه‌اندازی و دور زدن تحریم <span className="text-cyan-400">آنتی‌گراویتی (Antigravity)</span>
        </h1>

        {/* Concise Paragraph */}
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
          آنتی‌گراویتی محیط نوین توسعه و کدنویسی هوش مصنوعی گوگل و دیپ‌مایند است. در این مستند، روش حل خطای ۴۰۳، پچ کدهای باینری، تنظیمات وی‌پی‌ان و نحوه استفاده از اکانت به صورت مرحله‌به‌مرحله و با تصاویر واقعی بررسی می‌شود.
        </p>
        <p className="mt-3 text-xs sm:text-sm text-cyan-200 leading-relaxed">
          برای اینکه مراحل را درست و بدون مشکل انجام دهید، لطفاً پیش از شروع کل این راهنما را بخوانید؛ مطالعه‌ی آن کمتر از ۵ دقیقه زمان می‌برد.
        </p>
      </div>
    </section>
  );
};
