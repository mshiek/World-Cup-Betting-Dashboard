import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
interface Match {
  id: string;
  date: string;
  homeTeam: {
    name: string;
    icon: string;
  };
  awayTeam: {
    name: string;
    icon: string;
  };
  odds: {
    home: string;
    away: string;
    draw: string;
  };
  projectedTotal: number;
  stats: {
    botql: string;
    sharp: string;
    accu: string;
    public: string;
  };
}
const matches: Match[] = [
{
  id: '1',
  date: 'Sat 12/13, 10:00 AM',
  homeTeam: {
    name: 'France',
    icon: '🇫🇷'
  },
  awayTeam: {
    name: 'Argentina',
    icon: '🇦🇷'
  },
  odds: {
    home: 'O 2.5',
    away: 'U 2.5',
    draw: 'Draw'
  },
  projectedTotal: 5,
  stats: {
    botql: '9.9%',
    sharp: 'U 2.5',
    accu: 'O 2.5',
    public: 'O 2.5'
  }
},
{
  id: '2',
  date: 'Sat 12/13, 10:00 AM',
  homeTeam: {
    name: 'Brazil',
    icon: '🇧🇷'
  },
  awayTeam: {
    name: 'Netherlands',
    icon: '🇳🇱'
  },
  odds: {
    home: 'O 2.5',
    away: 'U 2.5',
    draw: 'Draw'
  },
  projectedTotal: 2,
  stats: {
    botql: '7.8%',
    sharp: 'U 2.5',
    accu: 'O 2.5',
    public: 'O 2.5'
  }
},
{
  id: '3',
  date: 'Sun 12/14, 9:00 AM',
  homeTeam: {
    name: 'England',
    icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
  },
  awayTeam: {
    name: 'Spain',
    icon: '🇪🇸'
  },
  odds: {
    home: 'O 2.5',
    away: 'U 2.5',
    draw: 'Draw'
  },
  projectedTotal: 4,
  stats: {
    botql: '5.5%',
    sharp: 'U 2.5',
    accu: 'O 2.5',
    public: 'O 2.5'
  }
},
{
  id: '4',
  date: 'Sun 12/14, 9:00 AM',
  homeTeam: {
    name: 'Germany',
    icon: '🇩🇪'
  },
  awayTeam: {
    name: 'Portugal',
    icon: '🇵🇹'
  },
  odds: {
    home: 'O 2.5',
    away: 'U 2.5',
    draw: 'Draw'
  },
  projectedTotal: 4,
  stats: {
    botql: '3.2%',
    sharp: 'U 2.5',
    accu: 'O 2.5',
    public: 'O 2.5'
  }
},
{
  id: '5',
  date: 'Sun 12/14, 9:00 AM',
  homeTeam: {
    name: 'Belgium',
    icon: '🇧🇪'
  },
  awayTeam: {
    name: 'Italy',
    icon: '🇮🇹'
  },
  odds: {
    home: 'O 4.0',
    away: 'U 4.0',
    draw: 'Draw'
  },
  projectedTotal: 3,
  stats: {
    botql: '1.5%',
    sharp: 'O 4.0',
    accu: 'No Pick',
    public: 'No Pick'
  }
},
{
  id: '6',
  date: 'Sun 12/14, 9:00 AM',
  homeTeam: {
    name: 'Uruguay',
    icon: '🇺🇾'
  },
  awayTeam: {
    name: 'Croatia',
    icon: '🇭🇷'
  },
  odds: {
    home: 'O 4.1',
    away: 'U 4.1',
    draw: 'Draw'
  },
  projectedTotal: 1,
  stats: {
    botql: '0.1%',
    sharp: 'O 4.1',
    accu: 'U 4.1',
    public: 'U 4.1'
  }
}];

export function WorldCupTable() {
  return (
    <div className="w-full">
      {/* Description */}
      <div className="bg-white rounded-t-lg px-8 py-6 border-b border-gray-100">
        <p className="text-xs text-gray-500 leading-relaxed">
          Daily betting projections for the 2026 FIFA World Cup. Our model
          simulates each matchup to project winners, moneyline odds, point
          spreads, and over/under totals. Use these projections alongside your
          own research to find value in today's games.
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full md:min-w-[1000px] border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-[10px] md:text-xs text-gray-500 uppercase tracking-wider text-left">
                <th className="p-3 md:p-4 font-medium w-auto md:w-[28%] sticky left-0 bg-gray-50 z-10">
                  Matchup
                </th>
                <th className="p-3 md:p-4 font-medium w-auto md:w-[15%] text-center whitespace-nowrap">
                  Odds
                </th>
                <th className="p-3 md:p-4 font-medium w-auto md:w-[14%] text-center">
                  <div className="flex flex-col items-center leading-tight">
                    <span>Projected</span>
                    <span className="whitespace-nowrap">Total Goals</span>
                  </div>
                </th>
                <th className="p-3 md:p-4 font-medium w-auto md:w-[14%] text-center">
                  <div className="flex flex-col items-center leading-tight">
                    <span>Simulation</span>
                    <span>Value</span>
                  </div>
                </th>
                <th className="p-3 md:p-4 font-medium w-auto md:w-[18%] text-center">
                  <div className="flex flex-col items-center leading-tight">
                    <span>See Full</span>
                    <span>Prediction</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {matches.map((match) =>
              <tr
                key={match.id}
                className="hover:bg-gray-50 transition-colors group">
                
                  {/* Matchup Column */}
                  <td className="p-3 md:p-4 align-top border-r border-gray-100 sticky left-0 bg-white z-10 group-hover:bg-gray-50">
                    <div className="flex flex-col space-y-2 md:space-y-4">
                      <div className="text-[9px] md:text-[10px] text-gray-500 font-medium">
                        {match.date}
                      </div>
                      <div className="space-y-1.5 md:space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1.5 md:space-x-2">
                            <span
                            className="text-sm md:text-lg"
                            role="img"
                            aria-label={match.homeTeam.name}>
                            
                              {match.homeTeam.icon}
                            </span>
                            <span className="text-xs md:text-sm font-bold text-gray-900">
                              {match.homeTeam.name}
                            </span>
                          </div>
                          <Play
                          size={12}
                          className="text-green-600 fill-current opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hidden md:block" />
                        
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1.5 md:space-x-2">
                            <span
                            className="text-sm md:text-lg"
                            role="img"
                            aria-label={match.awayTeam.name}>
                            
                              {match.awayTeam.icon}
                            </span>
                            <span className="text-xs md:text-sm font-medium text-gray-700">
                              {match.awayTeam.name}
                            </span>
                          </div>
                          <ChevronRight
                          size={14}
                          className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                        
                        </div>
                      </div>
                      <button className="text-[9px] md:text-[10px] text-blue-600 font-medium hover:underline text-left">
                        See Full Analysis
                      </button>
                    </div>
                  </td>

                  {/* Odds Column */}
                  <td className="p-3 md:p-4 align-middle text-center border-r border-gray-100">
                    <div className="flex flex-col items-center space-y-1.5 md:space-y-3">
                      <div className="text-[11px] md:text-sm font-medium text-gray-900">
                        {match.odds.home}
                      </div>
                      <div className="text-[11px] md:text-sm font-bold text-gray-900">
                        {match.odds.away}
                      </div>
                    </div>
                  </td>

                  {/* Projected Total Goals Column */}
                  <td className="p-3 md:p-4 align-middle text-center border-r border-gray-100">
                    <span className="inline-flex items-center justify-center px-2.5 md:px-3 py-1 rounded bg-gray-100 text-xs md:text-sm font-bold text-gray-900">
                      {match.projectedTotal}
                    </span>
                  </td>

                  {/* Simulation Value Column */}
                  <td className="p-3 md:p-4 align-middle text-center border-r border-gray-100">
                    <span className="inline-flex items-center justify-center px-2.5 md:px-3 py-1 rounded bg-green-600 text-[10px] md:text-xs font-bold text-white whitespace-nowrap">
                      {match.stats.botql}
                    </span>
                  </td>

                  {/* See Full Prediction Column */}
                  <td className="p-3 md:p-4 align-middle text-center">
                    <a
                    href={`/game-predictions/${match.homeTeam.name.toLowerCase()}-${match.awayTeam.name.toLowerCase()}-${match.date.includes('12/13') ? '12-13-2025' : '12-14-2025'}`}
                    className="text-[10px] md:text-xs font-bold text-blue-600 hover:underline whitespace-nowrap">
                    
                      See Full Prediction
                    </a>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>);

}