import React, { ReactNode } from 'react';
import { Calendar, GitBranch, ChevronDown, ChevronUp } from 'lucide-react';

export interface StudyAccordionProps {
  title: string;
  date: string;
  category: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export const StudyAccordion: React.FC<StudyAccordionProps> = ({ title, date, category, isOpen, onToggle, children }) => {
  return (
    <div className="bg-slate-50 rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
      <button
        className="w-full p-6 text-left border-b border-gray-200 focus:outline-none"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
            <div className="flex gap-4 mt-2 text-gray-600">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {date}
              </span>
              <span className="flex items-center gap-2">
                <GitBranch className="w-4 h-4" />
                {category}
              </span>
            </div>
          </div>
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      
      {isOpen && (
        <div className="p-6">
          {children}
        </div>
      )}
    </div>
  );
};