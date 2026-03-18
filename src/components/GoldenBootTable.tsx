import React from 'react';
import { Info, ChevronDown } from 'lucide-react';
interface Player {
  id: string;
  name: string;
  team: string;
  image: string;
  odds: string;
  winProjection: string;
  projectedGoals: number;
  totalShots: number;
  shotsOnGoal: number;
}
const players: Player[] = [
{
  id: '1',
  name: 'Kylian Mbappé',
  team: 'France',
  image: 'https://randomuser.me/api/portraits/men/1.jpg',
  odds: '+350',
  winProjection: '18.5%',
  projectedGoals: 5.2,
  totalShots: 3.3,
  shotsOnGoal: 1.92
},
{
  id: '2',
  name: 'Lionel Messi',
  team: 'Argentina',
  image: 'https://randomuser.me/api/portraits/men/2.jpg',
  odds: '+500',
  winProjection: '14.8%',
  projectedGoals: 4.6,
  totalShots: 3.0,
  shotsOnGoal: 1.76
},
{
  id: '3',
  name: 'Julián Álvarez',
  team: 'Argentina',
  image: 'https://randomuser.me/api/portraits/men/3.jpg',
  odds: '+600',
  winProjection: '11.2%',
  projectedGoals: 4.1,
  totalShots: 2.7,
  shotsOnGoal: 1.58
},
{
  id: '4',
  name: 'Olivier Giroud',
  team: 'France',
  image: 'https://randomuser.me/api/portraits/men/4.jpg',
  odds: '+700',
  winProjection: '9.5%',
  projectedGoals: 3.7,
  totalShots: 2.4,
  shotsOnGoal: 1.41
},
{
  id: '5',
  name: 'Cody Gakpo',
  team: 'Netherlands',
  image: 'https://randomuser.me/api/portraits/men/5.jpg',
  odds: '+800',
  winProjection: '7.8%',
  projectedGoals: 3.2,
  totalShots: 2.1,
  shotsOnGoal: 1.22
},
{
  id: '6',
  name: 'Marcus Rashford',
  team: 'England',
  image: 'https://randomuser.me/api/portraits/men/6.jpg',
  odds: '+900',
  winProjection: '6.4%',
  projectedGoals: 2.8,
  totalShots: 1.8,
  shotsOnGoal: 1.05
},
{
  id: '7',
  name: 'Richarlison',
  team: 'Brazil',
  image: 'https://randomuser.me/api/portraits/men/7.jpg',
  odds: '+1000',
  winProjection: '5.1%',
  projectedGoals: 2.4,
  totalShots: 1.5,
  shotsOnGoal: 0.88
},
{
  id: '8',
  name: 'Bukayo Saka',
  team: 'England',
  image: 'https://randomuser.me/api/portraits/men/8.jpg',
  odds: '+1200',
  winProjection: '4.2%',
  projectedGoals: 2.1,
  totalShots: 1.2,
  shotsOnGoal: 0.71
},
{
  id: '9',
  name: 'Álvaro Morata',
  team: 'Spain',
  image: 'https://randomuser.me/api/portraits/men/9.jpg',
  odds: '+1400',
  winProjection: '3.5%',
  projectedGoals: 1.8,
  totalShots: 1.0,
  shotsOnGoal: 0.54
},
{
  id: '10',
  name: 'Gonçalo Ramos',
  team: 'Portugal',
  image: 'https://randomuser.me/api/portraits/men/10.jpg',
  odds: '+1600',
  winProjection: '2.9%',
  projectedGoals: 1.5,
  totalShots: 0.8,
  shotsOnGoal: 0.38
},
{
  id: '11',
  name: 'Enner Valencia',
  team: 'Ecuador',
  image: 'https://randomuser.me/api/portraits/men/11.jpg',
  odds: '+2000',
  winProjection: '2.1%',
  projectedGoals: 1.2,
  totalShots: 0.7,
  shotsOnGoal: 0.25
},
{
  id: '12',
  name: 'Romelu Lukaku',
  team: 'Belgium',
  image: 'https://randomuser.me/api/portraits/men/12.jpg',
  odds: '+2200',
  winProjection: '1.7%',
  projectedGoals: 1.0,
  totalShots: 0.6,
  shotsOnGoal: 0.16
}];

function slugify(name: string) {
  return name.
  toLowerCase().
  normalize('NFD').
  replace(/[\u0300-\u036f]/g, '').
  replace(/\s+/g, '-');
}
export function GoldenBootTable() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="relative w-full h-48 bg-blue-900 overflow-hidden rounded-t-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="World Cup Football"
          className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-60" />
        
        <div className="relative z-20 h-full flex flex-col justify-center px-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            World Cup - Golden Boot Winner
          </h2>
        </div>
      </div>

      {/* Explanation Text */}
      <div className="bg-white px-8 py-6 border-b border-gray-100">
        <p className="text-xs text-gray-500 leading-relaxed">
          Golden Boot Winner projections for the 2026 FIFA World Cup. The Golden
          Boot is awarded to the player who scores the most goals across the
          entire tournament. Our model simulates the full tournament to project
          each player's probability of finishing as the top scorer, based on
          historical goal-scoring rates, team strength, expected minutes, and
          path through the knockout rounds.
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-b-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full md:min-w-[900px]">
            <thead>
              <tr className="border-b border-gray-100 text-[9px] md:text-[10px] text-gray-400 uppercase tracking-wider">
                <th className="px-3 md:px-8 py-3 text-left w-auto md:w-[22%] sticky left-0 bg-white z-10">
                  Player
                </th>
                <th className="px-3 md:px-4 py-3 text-center w-auto md:w-[10%]">
                  <div className="flex flex-col items-center">
                    <span className="flex items-center gap-1 whitespace-nowrap">
                      Odds <Info size={8} />
                    </span>
                  </div>
                </th>
                <th className="px-3 md:px-4 py-3 text-center w-auto md:w-[14%]">
                  <div className="flex flex-col items-center leading-tight">
                    <span className="flex items-center gap-1 whitespace-nowrap">
                      Win
                      <ChevronDown size={8} />
                    </span>
                    <span>Projection</span>
                  </div>
                </th>
                <th className="px-3 md:px-4 py-3 text-center w-auto md:w-[12%]">
                  <div className="flex flex-col items-center leading-tight whitespace-nowrap">
                    <span>Projected</span>
                    <span>Goals</span>
                  </div>
                </th>
                <th className="px-3 md:px-4 py-3 text-center w-auto md:w-[16%]">
                  <div className="flex flex-col items-center leading-tight whitespace-nowrap">
                    <span>See Full Game</span>
                    <span>Prediction</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {players.map((player) =>
              <tr
                key={player.id}
                className="hover:bg-gray-50 transition-colors">
                
                  <td className="px-3 md:px-8 py-3 md:py-4 sticky left-0 bg-white z-10">
                    <div className="flex items-center space-x-2 md:space-x-4">
                      <img
                      src={player.image}
                      alt={player.name}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-gray-200 flex-shrink-0" />
                    
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs md:text-sm font-bold text-gray-900 truncate">
                          {player.name}
                        </span>
                        <span className="text-[10px] md:text-xs text-gray-500">
                          {player.team}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                    <span className="text-[10px] md:text-xs font-bold text-gray-900">
                      {player.odds}
                    </span>
                  </td>

                  <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                    <span className="inline-flex items-center justify-center px-2.5 md:px-3 py-1 rounded bg-green-600 text-[10px] md:text-xs font-bold text-white whitespace-nowrap">
                      {player.winProjection}
                    </span>
                  </td>

                  <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                    <span className="text-[10px] md:text-xs font-bold text-gray-900">
                      {player.projectedGoals.toFixed(1)}
                    </span>
                  </td>

                  <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                    <a
                    href={`/player-predictions/${slugify(player.name)}`}
                    className="text-[10px] md:text-xs font-bold text-blue-600 hover:underline whitespace-nowrap">
                    
                      See Full Game Prediction
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