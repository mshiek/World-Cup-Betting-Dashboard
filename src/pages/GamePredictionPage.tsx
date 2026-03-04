import React from 'react';
import { BettingHeader } from '../components/BettingHeader';
import { FilterBar } from '../components/FilterBar';
import { WorldCupTable } from '../components/WorldCupTable';
export function GamePredictionPage() {
  return (
    <div>
      <BettingHeader />
      <FilterBar />
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <WorldCupTable />
      </main>
    </div>);

}