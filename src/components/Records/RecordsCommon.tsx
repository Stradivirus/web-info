import React from 'react';
import type { ReactNode } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

export type RecordAccentTheme = 'indigo' | 'emerald' | 'sky' | 'purple';

export interface StudyAccordionProps {
  title: string;
  date: string;
  category: string;
  theme?: RecordAccentTheme;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

const themeStyles: Record<
  RecordAccentTheme,
  {
    badge: string;
    openBorder: string;
    openHeaderBg: string;
    titleHover: string;
    titleOpen: string;
    iconBtnOpen: string;
  }
> = {
  indigo: {
    badge: 'bg-indigo-50/60 text-indigo-600/90 border-indigo-100',
    openBorder: 'border-indigo-200/80',
    openHeaderBg: 'bg-indigo-50/25',
    titleHover: 'group-hover:text-indigo-600',
    titleOpen: 'text-indigo-700',
    iconBtnOpen: 'bg-indigo-100/80 text-indigo-600',
  },
  emerald: {
    badge: 'bg-emerald-50/60 text-emerald-600/90 border-emerald-100',
    openBorder: 'border-emerald-200/80',
    openHeaderBg: 'bg-emerald-50/25',
    titleHover: 'group-hover:text-emerald-600',
    titleOpen: 'text-emerald-700',
    iconBtnOpen: 'bg-emerald-100/80 text-emerald-600',
  },
  sky: {
    badge: 'bg-sky-50/60 text-sky-600/90 border-sky-100',
    openBorder: 'border-sky-200/80',
    openHeaderBg: 'bg-sky-50/25',
    titleHover: 'group-hover:text-sky-600',
    titleOpen: 'text-sky-700',
    iconBtnOpen: 'bg-sky-100/80 text-sky-600',
  },
  purple: {
    badge: 'bg-purple-50/60 text-purple-600/90 border-purple-100',
    openBorder: 'border-purple-200/80',
    openHeaderBg: 'bg-purple-50/25',
    titleHover: 'group-hover:text-purple-600',
    titleOpen: 'text-purple-700',
    iconBtnOpen: 'bg-purple-100/80 text-purple-600',
  },
};

export const StudyAccordion: React.FC<StudyAccordionProps> = ({
  title,
  date,
  category,
  theme = 'indigo',
  isOpen,
  onToggle,
  children,
}) => {
  const currentTheme = themeStyles[theme];

  return (
    <div
      className={`group bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
        isOpen
          ? `${currentTheme.openBorder} shadow-md`
          : 'border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300/80'
      }`}
    >
      <button
        type="button"
        className={`w-full px-6 py-4 md:px-7 md:py-5 text-left focus:outline-none transition-colors duration-200 ${
          isOpen ? `${currentTheme.openHeaderBg} border-b border-slate-200/60` : 'hover:bg-slate-50/60'
        }`}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between gap-4">
          {/* 좌측: 카테고리 배지 + 제목 */}
          <div className="flex items-center gap-3.5 md:gap-4 min-w-0 flex-1">
            <span
              className={`inline-flex items-center justify-center px-3 py-1 rounded-md text-sm font-semibold border flex-shrink-0 w-36 text-center truncate ${currentTheme.badge}`}
            >
              {category}
            </span>

            <h2
              className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-200 truncate ${
                isOpen ? currentTheme.titleOpen : `text-slate-700 ${currentTheme.titleHover}`
              }`}
            >
              {title}
            </h2>
          </div>

          {/* 우측: 날짜 + 화살표 버튼 */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-sm font-mono text-slate-400">
              <Calendar className="w-4 h-4 text-slate-400" />
              {date}
            </span>

            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                isOpen
                  ? currentTheme.iconBtnOpen
                  : 'bg-slate-100/80 text-slate-400 group-hover:bg-slate-200/70 group-hover:text-slate-600'
              }`}
            >
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="p-6 md:p-8 bg-slate-50/20">
          {children}
        </div>
      )}
    </div>
  );
};