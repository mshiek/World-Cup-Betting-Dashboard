import React from 'react';
import { Info, ChevronDown } from 'lucide-react';
interface FuturesEntry {
  id: string;
  team: string;
  icon: string;
  group: string;
  odds: string;
  probability: string;
  simProbability: string;
  simValue: string;
}
const entries: FuturesEntry[] = [
{
  id: '1',
  team: 'France',
  icon: '🇫🇷',
  group: 'Group F',
  odds: '+350',
  probability: '22.4%',
  simProbability: '13.7%',
  simValue: '8.7%'
},
{
  id: '2',
  team: 'Argentina',
  icon: '🇦🇷',
  group: 'Group A',
  odds: '+400',
  probability: '19.8%',
  simProbability: '12.5%',
  simValue: '7.3%'
},
{
  id: '3',
  team: 'Brazil',
  icon: '🇧🇷',
  group: 'Group G',
  odds: '+500',
  probability: '16.2%',
  simProbability: '10.1%',
  simValue: '6.1%'
},
{
  id: '4',
  team: 'England',
  icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  group: 'Group B',
  odds: '+600',
  probability: '13.5%',
  simProbability: '8.1%',
  simValue: '5.4%'
},
{
  id: '5',
  team: 'Spain',
  icon: '🇪🇸',
  group: 'Group E',
  odds: '+700',
  probability: '11.1%',
  simProbability: '6.9%',
  simValue: '4.2%'
},
{
  id: '6',
  team: 'Germany',
  icon: '🇩🇪',
  group: 'Group E',
  odds: '+800',
  probability: '9.4%',
  simProbability: '5.8%',
  simValue: '3.6%'
},
{
  id: '7',
  team: 'Netherlands',
  icon: '🇳🇱',
  group: 'Group D',
  odds: '+1000',
  probability: '7.8%',
  simProbability: '4.9%',
  simValue: '2.9%'
},
{
  id: '8',
  team: 'Portugal',
  icon: '🇵🇹',
  group: 'Group H',
  odds: '+1200',
  probability: '6.2%',
  simProbability: '4.1%',
  simValue: '2.1%'
},
{
  id: '9',
  team: 'Belgium',
  icon: '🇧🇪',
  group: 'Group F',
  odds: '+1400',
  probability: '4.7%',
  simProbability: '3.2%',
  simValue: '1.5%'
},
{
  id: '10',
  team: 'Italy',
  icon: '🇮🇹',
  group: 'Group A',
  odds: '+1800',
  probability: '3.5%',
  simProbability: '2.7%',
  simValue: '0.8%'
},
{
  id: '11',
  team: 'Croatia',
  icon: '🇭🇷',
  group: 'Group C',
  odds: '+2500',
  probability: '2.1%',
  simProbability: '1.7%',
  simValue: '0.4%'
},
{
  id: '12',
  team: 'Uruguay',
  icon: '🇺🇾',
  group: 'Group H',
  odds: '+3000',
  probability: '1.6%',
  simProbability: '1.4%',
  simValue: '0.2%'
}];

function slugify(name: string) {
  return name.
  toLowerCase().
  normalize('NFD').
  replace(/[\u0300-\u036f]/g, '').
  replace(/\s+/g, '-');
}
export function FuturesTable() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="relative w-full h-48 bg-blue-900 overflow-hidden rounded-t-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="World Cup Trophy"
          className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-60" />
        
        <div className="relative z-20 h-full flex flex-col justify-center px-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            World Cup Tournament - Futures Bets
          </h2>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center space-x-3 overflow-x-auto">
        <button className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide whitespace-nowrap">
          Tournament Winner
        </button>
        <button className="bg-white text-gray-600 border border-gray-200 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-gray-50 whitespace-nowrap">
          Group Stage Winner
        </button>
        <button className="bg-white text-gray-600 border border-gray-200 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-gray-50 whitespace-nowrap">
          Group – Finish 1st
        </button>
        <button className="bg-white text-gray-600 border border-gray-200 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-gray-50 whitespace-nowrap">
          Group – Advance
        </button>
        <button className="bg-white text-gray-600 border border-gray-200 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-gray-50 whitespace-nowrap">
          Group – Not to Advance
        </button>
        <button className="bg-white text-gray-600 border border-gray-200 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-gray-50 whitespace-nowrap">
          Group - Over Goals / Under Goals
        </button>
        <button className="bg-white text-gray-600 border border-gray-200 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-gray-50 whitespace-nowrap">
          Finals
        </button>
        <button className="bg-white text-gray-600 border border-gray-200 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-gray-50 whitespace-nowrap">
          Semifinals
        </button>
        <button className="bg-white text-gray-600 border border-gray-200 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-gray-50 whitespace-nowrap">
          Quarterfinals
        </button>
      </div>

      {/* Explanation Text */}
      <div className="bg-white px-8 py-6 border-b border-gray-100">
        <p className="text-xs text-gray-500 leading-relaxed">
          Futures betting projections for the World Cup tournament. Our model
          calculates each team's probability of winning based on simulations
          incorporating team strength, group draw difficulty, historical
          performance, and current form. Simulation value shows the difference
          between the current odds probability and our simulation probability.
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-b-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full md:min-w-[900px]">
            <thead>
              <tr className="border-b border-gray-100 text-[9px] md:text-[10px] text-gray-400 uppercase tracking-wider">
                <th className="px-3 md:px-8 py-3 text-left w-auto md:w-[22%] sticky left-0 bg-white z-10">
                  Team
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
                      Current Odds
                      <ChevronDown size={8} />
                    </span>
                    <span>Probability</span>
                  </div>
                </th>
                <th className="px-3 md:px-4 py-3 text-center w-auto md:w-[14%]">
                  <div className="flex flex-col items-center leading-tight whitespace-nowrap">
                    <span>Simulation</span>
                    <span>Probability</span>
                  </div>
                </th>
                <th className="px-3 md:px-4 py-3 text-center w-auto md:w-[14%]">
                  <div className="flex flex-col items-center leading-tight whitespace-nowrap">
                    <span>Simulation</span>
                    <span>Value</span>
                  </div>
                </th>
                <th className="px-3 md:px-4 py-3 text-center w-auto md:w-[16%]">
                  <div className="flex flex-col items-center leading-tight whitespace-nowrap">
                    <span>See Full</span>
                    <span>Prediction</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {entries.map((entry) =>
              <tr
                key={entry.id}
                className="hover:bg-gray-50 transition-colors">
                
                  <td className="px-3 md:px-8 py-3 md:py-4 sticky left-0 bg-white z-10">
                    <div className="flex items-center space-x-2 md:space-x-4">
                      <span
                      className="text-lg md:text-xl flex-shrink-0"
                      role="img"
                      aria-label={entry.team}>
                      
                        {entry.icon}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs md:text-sm font-bold text-gray-900 truncate">
                          {entry.team}
                        </span>
                        <span className="text-[10px] md:text-xs text-gray-500">
                          {entry.group}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                    <span className="text-[10px] md:text-xs font-bold text-gray-900">
                      {entry.odds}
                    </span>
                  </td>

                  <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                    <span className="inline-flex items-center justify-center px-2.5 md:px-3 py-1 rounded bg-gray-100 text-[10px] md:text-xs font-bold text-gray-900 whitespace-nowrap">
                      {entry.probability}
                    </span>
                  </td>

                  <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                    <span className="inline-flex items-center justify-center px-2.5 md:px-3 py-1 rounded bg-gray-100 text-[10px] md:text-xs font-bold text-gray-900 whitespace-nowrap">
                      {entry.simProbability}
                    </span>
                  </td>

                  <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                    <span className="inline-flex items-center justify-center px-2.5 md:px-3 py-1 rounded bg-green-600 text-[10px] md:text-xs font-bold text-white whitespace-nowrap">
                      {entry.simValue}
                    </span>
                  </td>

                  <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                    <a
                    href={`/futures-predictions/${slugify(entry.team)}`}
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