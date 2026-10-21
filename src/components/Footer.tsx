import React from 'react';
import { Terminal, Github, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-neutral-200 bg-white text-neutral-500 text-xs">
      <div className="mx-auto max-w-4xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-cyan-600" />
          <span className="font-bold text-neutral-800">راهنمای جامع دور زدن آنتی‌گراویتی</span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span>امیدوارم براتون مفید باشه</span>
        </div>

        {/* Author Credit & Email */}
        <div className="flex flex-wrap items-center gap-2.5 text-neutral-600">
          <span>نویسنده:</span>
          <span className="font-bold text-neutral-900">مهدیار واعظ</span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <a
            href="mailto:mahdyarvaez@gmail.com"
            className="text-cyan-600 hover:text-cyan-700 inline-flex items-center gap-1 font-mono hover:underline"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>mahdyarvaez@gmail.com</span>
          </a>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <a
            href="https://github.com/Mahdiar-Vaez"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-1 font-mono hover:underline"
          >
            <Github className="h-3.5 w-3.5" />
            <span>Mahdiar-Vaez</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
