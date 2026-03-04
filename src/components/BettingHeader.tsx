import React from 'react';
export function BettingHeader() {
  return (
    <header className="w-full bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white py-8 px-4 md:px-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          World Cup Betting Guide
        </h1>
        <p className="text-gray-300 text-sm md:text-base max-w-3xl leading-relaxed">
          Check out all the latest World Cup Odds, Lines, Spreads, and Top Picks
          and Live Odds to help you find profitable betting opportunities.
          <br className="hidden md:block" />
          All paid subscribers get access!
        </p>
      </div>
    </header>);

}