import React from 'react';
import { BetQLNav } from '../components/BetQLNav';
import { BracketSimulator } from '../components/BracketSimulator';
export function BracketSimulatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BetQLNav />
      <BracketSimulator />
    </div>);

}