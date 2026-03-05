import React from 'react';
import { GamePredictionPage } from './pages/GamePredictionPage';
import { MoneylinePredictionPage } from './pages/MoneylinePredictionPage';
import { SpreadPredictionPage } from './pages/SpreadPredictionPage';
import { PlayerGoalsPredictionsPage } from './pages/PlayerGoalsPredictionsPage';
import { FuturePredictionsPage } from './pages/FuturePredictionsPage';
import { GroupStagePredictionsPage } from './pages/GroupStagePredictionsPage';
import { GroupAdvancePredictionsPage } from './pages/GroupAdvancePredictionsPage';
export function App() {
  return (
    <div className="min-h-screen bg-[#1a1f2e] pb-20">
      <GamePredictionPage />
      <MoneylinePredictionPage />
      <SpreadPredictionPage />
      <PlayerGoalsPredictionsPage />
      <FuturePredictionsPage />
      <GroupStagePredictionsPage />
      <GroupAdvancePredictionsPage />
    </div>);

}