import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle, 
  Shield, 
  Smartphone, 
  Terminal, 
  Download,
  Menu, 
  X,
  Sliders,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onOpenChecklist: () => void;
  progress: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onOpenChecklist, progress }) => {
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const navItems = [
    { id: 'prerequisites', label: 'پیش‌نیازها و لوکیشن‌های امن', icon: Shield },
    { id: 'download-antigravity', label: 'دانلود و نصب آنتی‌گراویتی', icon: Download },
    { id: 'step-gmail', label: 'بررسی ریجن در Payments', icon: FileText },
    { id: 'step-numberland', label: 'نامبرلند و اسکن QR Code', icon: Smartphone },
    { id: 'step-vpn', label: 'تنظیم Windscribe و IKEv2', icon: Shield },
    { id: 'patch-commands', label: 'دستورات اجرای پچ Cleaner', icon: Terminal },
    { id: 'execution-steps', label: 'مراحل تصویری اجرایی (زیر هم)', icon: Sliders },
    { id: 'cleaner-guide', label: 'نکات گزینه‌ها و رفع ۴۰۳ مجدد', icon: Sparkles },
  ];

  return (
    <>
      {/* Mobile trigger */}
      <div className="lg:hidden fixed top-3 right-3 z-50">
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200 shadow-xl text-xs font-semibold"
          aria-label="Toggle navigation"
        >
          {isOpenMobile ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          <span>فهرست راهنما</span>
        </button>
      </div>

      {/* Backdrop */}
      {isOpenMobile && (
        <div
          onClick={() => setIsOpenMobile(false)}
          className="lg:hidden fixed inset-0 z-40 bg-black/75 backdrop-blur-xs"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen w-64 bg-neutral-950 border-l border-neutral-850 z-40 flex flex-col transition-transform duration-200 ease-in-out ${
          isOpenMobile ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="p-4 border-b border-neutral-850 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400">
              <Terminal className="h-3.5 w-3.5" />
            </div>
            <div className="text-sm font-bold text-neutral-100">راهنمای آنتی‌گراویتی</div>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-1.5 py-0.5 rounded">
            v5.2
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1 text-xs">
          <div className="text-[10px] font-bold text-neutral-500 px-2 py-1 uppercase tracking-wider">سرفصل‌ها</div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpenMobile(false)}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-neutral-850 text-cyan-300 font-semibold border border-neutral-700'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-neutral-500'}`} />
                <span className="truncate">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Bottom checklist trigger */}
        <div className="p-3 border-t border-neutral-850 bg-neutral-950">
          <div className="mb-2">
            <div className="flex items-center justify-between text-[10px] text-neutral-400 mb-1">
              <span>پیشرفت مطالعه:</span>
              <span className="font-mono text-cyan-400">{progress}%</span>
            </div>
            <div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <button
            onClick={() => {
              onOpenChecklist();
              setIsOpenMobile(false);
            }}
            className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-300 text-xs transition-colors"
          >
            <CheckCircle className="h-3 w-3 text-cyan-400" />
            <span>چک‌لیست مراحل</span>
          </button>
        </div>
      </aside>
    </>
  );
};
