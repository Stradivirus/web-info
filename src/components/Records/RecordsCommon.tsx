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
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
    openBorder: 'border-indigo-300',
    openHeaderBg: 'bg-indigo-50/40',
    titleHover: 'group-hover:text-indigo-600',
    titleOpen: 'text-indigo-700',
    iconBtnOpen: 'bg-indigo-600 text-white',
  },
  emerald: {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    openBorder: 'border-emerald-300',
    openHeaderBg: 'bg-emerald-50/40',
    titleHover: 'group-hover:text-emerald-600',
    titleOpen: 'text-emerald-700',
    iconBtnOpen: 'bg-emerald-600 text-white',
  },
  sky: {
    badge: 'bg-sky-50 text-sky-700 border-sky-200/80',
    openBorder: 'border-sky-300',
    openHeaderBg: 'bg-sky-50/40',
    titleHover: 'group-hover:text-sky-600',
    titleOpen: 'text-sky-700',
    iconBtnOpen: 'bg-sky-600 text-white',
  },
  purple: {
    badge: 'bg-purple-50 text-purple-700 border-purple-200/80',
    openBorder: 'border-purple-300',
    openHeaderBg: 'bg-purple-50/40',
    titleHover: 'group-hover:text-purple-600',
    titleOpen: 'text-purple-700',
    iconBtnOpen: 'bg-purple-600 text-white',
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
          ? `${currentTheme.openBorder} shadow-lg`
          : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
      }`}
    >
      <button
        type="button"
        className={`w-full px-5 py-4 md:px-6 md:py-4 text-left focus:outline-none transition-colors duration-200 ${
          isOpen ? `${currentTheme.openHeaderBg} border-b border-slate-200/80` : 'hover:bg-slate-50/80'
        }`}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between gap-4">
          {/* 좌측: 카테고리 배지 + 제목 */}
          <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
            <span
              className={`inline-flex items-center justify-center px-2.5 py-1 rounded-md text-xs font-semibold border flex-shrink-0 w-32 text-center truncate ${currentTheme.badge}`}
            >
              {category}
            </span>

            <h2
              className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-200 truncate ${
                isOpen ? currentTheme.titleOpen : `text-slate-800 ${currentTheme.titleHover}`
              }`}
            >
              {title}
            </h2>
          </div>

          {/* 우측: 날짜 + 화살표 버튼 */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {date}
            </span>

            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                isOpen
                  ? currentTheme.iconBtnOpen
                  : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800'
              }`}
            >
              {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="p-6 md:p-8 bg-slate-50/30">
          {children}
        </div>
      )}
    </div>
  );
};