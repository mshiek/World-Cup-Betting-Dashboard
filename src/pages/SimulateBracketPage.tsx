import React from 'react';
import { BetQLNav } from '../components/BetQLNav';
import { BracketSimulator } from '../components/BracketSimulator';
export function SimulateBracketPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BetQLNav />
      <BracketSimulator
        buttonText="Simulate Bracket"
        buttonClassName="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded transition-colors" />
      
    </div>);

}