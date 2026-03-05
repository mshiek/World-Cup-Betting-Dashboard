import React from 'react';
import { BettingHeader } from '../components/BettingHeader';
import { FilterBar } from '../components/FilterBar';
import { MoneylineTable } from '../components/MoneylineTable';
export function MoneylinePredictionPage() {
  return (
    <div>
      <BettingHeader title="World Cup Betting - Moneyline 1x2 Guide" />
      <div className="w-full bg-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
          <div className="bg-white rounded-t-lg px-8 py-6 border-b border-gray-100">
            <p className="text-xs text-gray-500 leading-relaxed">
              Daily moneyline betting projections for the 2026 FIFA World Cup.
              Our model simulates each matchup to project the probability of a
              Home Win, Away Win, or Draw. Use these 3-way moneyline projections
              alongside your own research to find value in today's games.
            </p>
          </div>
        </div>
      </div>
      <FilterBar betTypeLabel="MONEYLINE" />
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <MoneylineTable />
      </main>
    </div>);

}