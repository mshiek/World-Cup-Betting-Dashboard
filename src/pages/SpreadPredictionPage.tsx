import React from 'react';
import { BettingHeader } from '../components/BettingHeader';
import { FilterBar } from '../components/FilterBar';
import { SpreadTable } from '../components/SpreadTable';
export function SpreadPredictionPage() {
  return (
    <div>
      <BettingHeader title="World Cup Betting - Spread Guide" />
      <div className="w-full bg-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
          <div className="bg-white rounded-t-lg px-8 py-6 border-b border-gray-100">
            <p className="text-xs text-gray-500 leading-relaxed">
              Daily spread betting projections for the 2026 FIFA World Cup. Our
              model simulates each matchup to project goal-line spreads for both
              teams. Use these spread projections alongside your own research to
              find value in today's games.
            </p>
          </div>
        </div>
      </div>
      <FilterBar betTypeLabel="SPREAD" />
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <SpreadTable />
      </main>
    </div>);

}