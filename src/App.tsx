import React from 'react';
import { GamePredictionPage } from './pages/GamePredictionPage';
import { PlayerGoalsPredictionsPage } from './pages/PlayerGoalsPredictionsPage';
import { FuturePredictionsPage } from './pages/FuturePredictionsPage';
export function App() {
  return (
    <div className="min-h-screen bg-[#1a1f2e] pb-20">
      <GamePredictionPage />
      <PlayerGoalsPredictionsPage />
      <FuturePredictionsPage />
    </div>);

}