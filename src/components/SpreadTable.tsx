import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
const SPORTSBOOK_LOGOS = ["/image.png", "/image-1.png"];



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
  spread: {
    home: string;
    away: string;
  };
  projectedScore: {
    home: number;
    away: number;
  };
  prediction: 'home' | 'away' | 'even';
  stats: {
    botql: string;
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
  spread: {
    home: '-0.5 & -1',
    away: '+0.5 & +1'
  },
  projectedScore: {
    home: 2,
    away: 1
  },
  prediction: 'home',
  stats: {
    botql: '9.9%'
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
  spread: {
    home: '-0.5',
    away: '+0.5'
  },
  projectedScore: {
    home: 1,
    away: 0
  },
  prediction: 'home',
  stats: {
    botql: '7.8%'
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
  spread: {
    home: '+0.5',
    away: '-0.5'
  },
  projectedScore: {
    home: 1,
    away: 2
  },
  prediction: 'away',
  stats: {
    botql: '5.5%'
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
  spread: {
    home: 'Even',
    away: 'Even'
  },
  projectedScore: {
    home: 1,
    away: 1
  },
  prediction: 'even',
  stats: {
    botql: '3.2%'
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
  spread: {
    home: '-0.5',
    away: '+0.5'
  },
  projectedScore: {
    home: 2,
    away: 1
  },
  prediction: 'home',
  stats: {
    botql: '1.5%'
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
  spread: {
    home: 'Even',
    away: 'Even'
  },
  projectedScore: {
    home: 0,
    away: 0
  },
  prediction: 'even',
  stats: {
    botql: '0.1%'
  }
}];

export function SpreadTable() {
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full md:min-w-[1000px] border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-[10px] md:text-xs text-gray-500 uppercase tracking-wider text-left">
                <th className="p-3 md:p-4 font-medium w-auto md:w-[28%] sticky left-0 bg-gray-50 z-10">
                  Matchup
                </th>
                <th className="p-3 md:p-4 font-medium w-auto md:w-[20%] text-center whitespace-nowrap">
                  Spread
                </th>
                <th className="p-3 md:p-4 font-medium w-auto md:w-[14%] text-center">
                  <div className="flex flex-col items-center leading-tight">
                    <span>Projected</span>
                    <span className="whitespace-nowrap">Score</span>
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
                    <span>Analysis</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {matches.map((match, matchIndex) =>
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
                        <div className="flex items-center justify-between h-5 md:h-6">
                          <div className="flex items-center space-x-1.5 md:space-x-2">
                            <span
                            className="text-sm md:text-lg"
                            role="img"
                            aria-label={match.homeTeam.name}>
                            
                              {match.homeTeam.icon}
                            </span>
                            <span
                            className={`text-xs md:text-sm ${match.prediction === 'home' || match.prediction === 'even' ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                            
                              {match.homeTeam.name}
                            </span>
                          </div>
                          {(match.prediction === 'home' ||
                        match.prediction === 'even') &&
                        <Play
                          size={12}
                          className="text-green-600 fill-current" />

                        }
                        </div>
                        <div className="flex items-center justify-between h-5 md:h-6">
                          <div className="flex items-center space-x-1.5 md:space-x-2">
                            <span
                            className="text-sm md:text-lg"
                            role="img"
                            aria-label={match.awayTeam.name}>
                            
                              {match.awayTeam.icon}
                            </span>
                            <span
                            className={`text-xs md:text-sm ${match.prediction === 'away' ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                            
                              {match.awayTeam.name}
                            </span>
                          </div>
                          {match.prediction === 'away' &&
                        <Play
                          size={12}
                          className="text-green-600 fill-current" />

                        }
                        </div>
                      </div>
                      <button className="text-[9px] md:text-[10px] text-blue-600 font-medium hover:underline text-left">
                        See Full Analysis
                      </button>
                    </div>
                  </td>

                  {/* Spread Column */}
                  <td className="p-3 md:p-4 align-top text-center border-r border-gray-100">
                    <div className="flex flex-col items-center space-y-1.5 md:space-y-3 mt-7 md:mt-10">
                      <div
                      className={`text-[11px] md:text-sm h-5 md:h-6 flex items-center justify-center gap-1 whitespace-nowrap ${match.prediction === 'home' || match.prediction === 'even' ? 'font-bold text-gray-900' : 'font-medium text-gray-500'}`}>
                      
                        {match.prediction === 'home' ||
                      match.prediction === 'even' ?
                      <img
                        src={SPORTSBOOK_LOGOS[0]}
                        alt="Sportsbook"
                        className="w-4 h-4 md:w-5 md:h-5 rounded object-cover flex-shrink-0" /> :


                      <span className="w-4 md:w-5 flex-shrink-0" />
                      }
                        <span>{match.spread.home}</span>
                        {match.prediction === 'home' ||
                      match.prediction === 'even' ?
                      <a
                        href="#"
                        className="ml-0.5 px-1.5 py-0.5 bg-blue-900 text-white text-[7px] md:text-[9px] font-bold rounded hover:bg-blue-800 whitespace-nowrap flex-shrink-0">
                        
                            Bet Now
                          </a> :

                      <span className="ml-0.5 w-[42px] md:w-[50px] flex-shrink-0" />
                      }
                      </div>
                      <div
                      className={`text-[11px] md:text-sm h-5 md:h-6 flex items-center justify-center gap-1 whitespace-nowrap ${match.prediction === 'away' ? 'font-bold text-gray-900' : 'font-medium text-gray-500'}`}>
                      
                        {match.prediction === 'away' ?
                      <img
                        src={SPORTSBOOK_LOGOS[0]}
                        alt="Sportsbook"
                        className="w-4 h-4 md:w-5 md:h-5 rounded object-cover flex-shrink-0" /> :


                      <span className="w-4 md:w-5 flex-shrink-0" />
                      }
                        <span>{match.spread.away}</span>
                        {match.prediction === 'away' ?
                      <a
                        href="#"
                        className="ml-0.5 px-1.5 py-0.5 bg-blue-900 text-white text-[7px] md:text-[9px] font-bold rounded hover:bg-blue-800 whitespace-nowrap flex-shrink-0">
                        
                            Bet Now
                          </a> :

                      <span className="ml-0.5 w-[42px] md:w-[50px] flex-shrink-0" />
                      }
                      </div>
                    </div>
                  </td>

                  {/* Projected Score Column */}
                  <td className="p-3 md:p-4 align-top text-center border-r border-gray-100">
                    <div className="flex flex-col items-center space-y-1.5 md:space-y-3 mt-7 md:mt-10">
                      <div className="h-5 md:h-6 flex items-center justify-center">
                        <span className="inline-flex items-center justify-center w-8 md:w-9 py-0.5 rounded bg-gray-100 text-xs md:text-sm font-bold text-gray-900">
                          {match.projectedScore.home}
                        </span>
                      </div>
                      <div className="h-5 md:h-6 flex items-center justify-center">
                        <span className="inline-flex items-center justify-center w-8 md:w-9 py-0.5 rounded bg-gray-100 text-xs md:text-sm font-bold text-gray-900">
                          {match.projectedScore.away}
                        </span>
                      </div>
                    </div>
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
                    
                      See Full Analysis
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