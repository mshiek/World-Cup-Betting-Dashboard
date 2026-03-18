import React from 'react';
import { GamePredictionPage } from './pages/GamePredictionPage';
import { MoneylinePredictionPage } from './pages/MoneylinePredictionPage';
import { ToWinPredictionPage } from './pages/ToWinPredictionPage';
import { SpreadPredictionPage } from './pages/SpreadPredictionPage';
import { PlayerGoalsPredictionsPage } from './pages/PlayerGoalsPredictionsPage';
import { GoldenBootPredictionsPage } from './pages/GoldenBootPredictionsPage';
import { FuturePredictionsPage } from './pages/FuturePredictionsPage';
import { GroupStagePredictionsPage } from './pages/GroupStagePredictionsPage';
import { GroupAdvancePredictionsPage } from './pages/GroupAdvancePredictionsPage';
import { BracketSimulatorPage } from './pages/BracketSimulatorPage';
import { SimulateBracketPage } from './pages/SimulateBracketPage';
export function App() {
  return (
    <div className="min-h-screen bg-[#1a1f2e] pb-20">
      <GamePredictionPage />
      <MoneylinePredictionPage />
      <ToWinPredictionPage />
      <SpreadPredictionPage />
      <PlayerGoalsPredictionsPage />
      <FuturePredictionsPage />
      <GroupStagePredictionsPage />
      <GroupAdvancePredictionsPage />
      <GoldenBootPredictionsPage />
      <SimulateBracketPage />
      <BracketSimulatorPage />
    </div>);

}