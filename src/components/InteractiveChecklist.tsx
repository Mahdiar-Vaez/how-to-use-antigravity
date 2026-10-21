import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, RotateCcw, X, CheckSquare, Sparkles } from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  hint: string;
}

const DEFAULT_ITEMS: ChecklistItem[] = [
  {
    id: 'c1',
    title: 'بررسی ریجن اکانت جیمیل در policies.google.com/terms',
    hint: 'اگر ریجن اکانت ایران بود، باید حتماً اکانت جدید آمریکا بسازید.',
  },
  {
    id: 'c2',
    title: 'اتصال به وی‌پی‌ان با لایه تونل (TUN) یا Windscribe پروتکل IKEv2',
    hint: 'کل ترافیک سیستم‌عامل باید به صورت عمیق روت شود تا نشت IP صورت نگیرد.',
  },
  {
    id: 'c3',
    title: 'تهیه شماره مجازی از سایت نامبرلند (Numberland.ir) در صورت نیاز',
    hint: 'در صورتی که گوگل در فرایند ثبت‌نام درخواست شماره کرد.',
  },
  {
    id: 'c4',
    title: 'افزودن Recovery Email و غیرفعال‌سازی وابستگی به شماره موقت',
    hint: 'تا در ورودهای بعدی نیازی به دریافت مجدد اس‌ام‌اس نباشد.',
  },
  {
    id: 'c5',
    title: 'نصب ادیتور یا CLI رسمی Antigravity',
    hint: 'نصب پکیج یا نرم‌افزار روی ویندوز یا لینوکس.',
  },
  {
    id: 'c6',
    title: 'اجرای دستور پچ Antigravity Cleaner در ترمینال یا PowerShell',
    hint: 'دستور لینوکس یا ویندوز را کپی و اجرا نمایید.',
  },
  {
    id: 'c7',
    title: 'انتخاب گزینه [1] Quick Auto-Fix در منوی ترمینال',
    hint: 'پچ خودکار باینری‌ها و فعال‌سازی اسمارت پروکسی هوشمند.',
  },
  {
    id: 'c8',
    title: 'اجرای ادیتور و تایید رفع کامل خطای ۴۰۳ و تحریم ریجن',
    hint: 'شروع کدنویسی آزاد با دستیار هوش مصنوعی دیپ‌مایند!',
  },
];

interface InteractiveChecklistProps {
  isOpen: boolean;
  onClose: () => void;
  onProgressChange: (progress: number) => void;
}

export const InteractiveChecklist: React.FC<InteractiveChecklistProps> = ({
  isOpen,
  onClose,
  onProgressChange,
}) => {
  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('antigravity_checklist_progress');
      return saved ? JSON.parse(saved) : ['c1'];
    } catch {
      return ['c1'];
    }
  });

  const toggleItem = (id: string) => {
    const next = completedIds.includes(id)
      ? completedIds.filter((item) => item !== id)
      : [...completedIds, id];
    setCompletedIds(next);
    try {
      localStorage.setItem('antigravity_checklist_progress', JSON.stringify(next));
    } catch {}
  };

  const handleReset = () => {
    setCompletedIds([]);
    try {
      localStorage.setItem('antigravity_checklist_progress', JSON.stringify([]));
    } catch {}
  };

  const percentage = Math.round((completedIds.length / DEFAULT_ITEMS.length) * 100);

  useEffect(() => {
    onProgressChange(percentage);
  }, [percentage, onProgressChange]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-xs p-4">
      <div className="relative w-full max-w-xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl text-right">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-4">
          <div className="flex items-center gap-2">
            <CheckSquare className="h-5 w-5 text-cyan-600" />
            <h3 className="text-base font-bold text-neutral-900">چک‌لیست گام‌به‌گام راه‌اندازی</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-5">
          <div className="flex items-center justify-between text-xs text-neutral-600 mb-1.5 font-medium">
            <span>پیشرفت کل مراحل:</span>
            <span className="font-mono text-cyan-700 font-bold">{percentage}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100 border border-neutral-200">
            <div
              className="h-full bg-cyan-600 transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
          {DEFAULT_ITEMS.map((item, idx) => {
            const isDone = completedIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`cursor-pointer rounded-xl border p-3 transition-all flex items-start gap-3 ${
                  isDone
                    ? 'border-cyan-200 bg-cyan-50/70 text-neutral-900 shadow-2xs'
                    : 'border-neutral-200 bg-neutral-50/70 text-neutral-800 hover:border-neutral-300 hover:bg-neutral-100/60'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isDone ? (
                    <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                  ) : (
                    <Circle className="h-4 w-4 text-neutral-400" />
                  )}
                </div>
                <div className="flex-1">
                  <div className={`text-xs sm:text-sm font-semibold ${isDone ? 'line-through text-neutral-400' : 'text-neutral-900'}`}>
                    <span className="ml-1 font-mono text-neutral-400">#{idx + 1}</span> {item.title}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5 leading-relaxed">{item.hint}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer controls */}
        <div className="mt-5 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>بازنشانی پیشرفت</span>
          </button>
          <button
            onClick={onClose}
            className="rounded-lg bg-neutral-900 hover:bg-neutral-800 px-4 py-2 font-medium text-white shadow-xs transition-colors"
          >
            بستن و ادامه مطالعه
          </button>
        </div>
      </div>
    </div>
  );
};
