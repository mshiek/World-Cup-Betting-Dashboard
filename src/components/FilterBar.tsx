import React from 'react';
import { ChevronDown, Monitor } from 'lucide-react';
interface FilterBarProps {
  betTypeLabel?: string;
}
export function FilterBar({ betTypeLabel = 'TOTAL' }: FilterBarProps) {
  const filters = [
  {
    label: 'MODEL BETS'
  },
  {
    label: betTypeLabel
  },
  {
    label: 'Group Stage'
  }];

  return (
    <div className="w-full bg-[#1a1f2e] py-4 px-4 md:px-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
        <button className="flex items-center justify-center w-10 h-9 bg-white rounded text-gray-800 hover:bg-gray-100 transition-colors">
          <Monitor size={18} />
        </button>

        {filters.map((filter, index) =>
        <div key={index} className="relative group">
            <button className="flex items-center space-x-2 bg-white text-gray-800 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors min-w-[140px] justify-between">
              <span>{filter.label}</span>
              <ChevronDown size={14} className="text-gray-500" />
            </button>
          </div>
        )}
      </div>
    </div>);

}