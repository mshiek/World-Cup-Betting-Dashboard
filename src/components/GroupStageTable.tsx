import React from 'react';
import { Info, ChevronDown } from 'lucide-react';
interface TeamEntry {
  id: string;
  team: string;
  icon: string;
  odds: string;
  currentProb: string;
  simProb: string;
  simValue: string;
}
interface GroupData {
  name: string;
  teams: TeamEntry[];
}
const groups: GroupData[] = [
{
  name: 'Group A',
  teams: [
  {
    id: 'A1',
    team: 'Mexico',
    icon: '🇲🇽',
    odds: '-150',
    currentProb: '60.0%',
    simProb: '55.0%',
    simValue: '5.0%'
  },
  {
    id: 'A2',
    team: 'Korea Republic',
    icon: '🇰🇷',
    odds: '+250',
    currentProb: '28.6%',
    simProb: '30.1%',
    simValue: '-1.5%'
  },
  {
    id: 'A3',
    team: 'South Africa',
    icon: '🇿🇦',
    odds: '+600',
    currentProb: '14.3%',
    simProb: '10.5%',
    simValue: '3.8%'
  },
  {
    id: 'A4',
    team: 'TBD (Playoff)',
    icon: '⚽',
    odds: '+1200',
    currentProb: '7.7%',
    simProb: '4.4%',
    simValue: '3.3%'
  }]

},
{
  name: 'Group B',
  teams: [
  {
    id: 'B1',
    team: 'Switzerland',
    icon: '🇨🇭',
    odds: '+110',
    currentProb: '47.6%',
    simProb: '42.1%',
    simValue: '5.5%'
  },
  {
    id: 'B2',
    team: 'Canada',
    icon: '🇨🇦',
    odds: '+180',
    currentProb: '35.7%',
    simProb: '38.2%',
    simValue: '-2.5%'
  },
  {
    id: 'B3',
    team: 'Qatar',
    icon: '🇶🇦',
    odds: '+450',
    currentProb: '18.2%',
    simProb: '15.0%',
    simValue: '3.2%'
  },
  {
    id: 'B4',
    team: 'TBD (Playoff)',
    icon: '⚽',
    odds: '+1500',
    currentProb: '6.3%',
    simProb: '4.7%',
    simValue: '1.6%'
  }]

},
{
  name: 'Group C',
  teams: [
  {
    id: 'C1',
    team: 'Brazil',
    icon: '🇧🇷',
    odds: '-400',
    currentProb: '80.0%',
    simProb: '75.5%',
    simValue: '4.5%'
  },
  {
    id: 'C2',
    team: 'Morocco',
    icon: '🇲🇦',
    odds: '+450',
    currentProb: '18.2%',
    simProb: '16.8%',
    simValue: '1.4%'
  },
  {
    id: 'C3',
    team: 'Scotland',
    icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    odds: '+800',
    currentProb: '11.1%',
    simProb: '6.2%',
    simValue: '4.9%'
  },
  {
    id: 'C4',
    team: 'Haiti',
    icon: '🇭🇹',
    odds: '+2500',
    currentProb: '3.8%',
    simProb: '1.5%',
    simValue: '2.3%'
  }]

},
{
  name: 'Group D',
  teams: [
  {
    id: 'D1',
    team: 'USA',
    icon: '🇺🇸',
    odds: '+120',
    currentProb: '45.5%',
    simProb: '48.0%',
    simValue: '-2.5%'
  },
  {
    id: 'D2',
    team: 'Australia',
    icon: '🇦🇺',
    odds: '+200',
    currentProb: '33.3%',
    simProb: '30.1%',
    simValue: '3.2%'
  },
  {
    id: 'D3',
    team: 'Paraguay',
    icon: '🇵🇾',
    odds: '+350',
    currentProb: '22.2%',
    simProb: '18.4%',
    simValue: '3.8%'
  },
  {
    id: 'D4',
    team: 'TBD (Playoff)',
    icon: '⚽',
    odds: '+1000',
    currentProb: '9.1%',
    simProb: '3.5%',
    simValue: '5.6%'
  }]

},
{
  name: 'Group E',
  teams: [
  {
    id: 'E1',
    team: 'Germany',
    icon: '🇩🇪',
    odds: '-250',
    currentProb: '71.4%',
    simProb: '68.2%',
    simValue: '3.2%'
  },
  {
    id: 'E2',
    team: 'Ecuador',
    icon: '🇪🇨',
    odds: '+300',
    currentProb: '25.0%',
    simProb: '22.5%',
    simValue: '2.5%'
  },
  {
    id: 'E3',
    team: "Côte d'Ivoire",
    icon: '🇨🇮',
    odds: '+650',
    currentProb: '13.3%',
    simProb: '8.1%',
    simValue: '5.2%'
  },
  {
    id: 'E4',
    team: 'Curaçao',
    icon: '🇨🇼',
    odds: '+3000',
    currentProb: '3.2%',
    simProb: '1.2%',
    simValue: '2.0%'
  }]

},
{
  name: 'Group F',
  teams: [
  {
    id: 'F1',
    team: 'Netherlands',
    icon: '🇳🇱',
    odds: '-200',
    currentProb: '66.7%',
    simProb: '62.4%',
    simValue: '4.3%'
  },
  {
    id: 'F2',
    team: 'Japan',
    icon: '🇯🇵',
    odds: '+250',
    currentProb: '28.6%',
    simProb: '29.5%',
    simValue: '-0.9%'
  },
  {
    id: 'F3',
    team: 'Tunisia',
    icon: '🇹🇳',
    odds: '+700',
    currentProb: '12.5%',
    simProb: '6.8%',
    simValue: '5.7%'
  },
  {
    id: 'F4',
    team: 'TBD (Playoff)',
    icon: '⚽',
    odds: '+1800',
    currentProb: '5.3%',
    simProb: '1.3%',
    simValue: '4.0%'
  }]

},
{
  name: 'Group G',
  teams: [
  {
    id: 'G1',
    team: 'Belgium',
    icon: '🇧🇪',
    odds: '-180',
    currentProb: '64.3%',
    simProb: '60.1%',
    simValue: '4.2%'
  },
  {
    id: 'G2',
    team: 'Egypt',
    icon: '🇪🇬',
    odds: '+350',
    currentProb: '22.2%',
    simProb: '24.5%',
    simValue: '-2.3%'
  },
  {
    id: 'G3',
    team: 'Iran',
    icon: '🇮🇷',
    odds: '+450',
    currentProb: '18.2%',
    simProb: '12.4%',
    simValue: '5.8%'
  },
  {
    id: 'G4',
    team: 'New Zealand',
    icon: '🇳🇿',
    odds: '+1200',
    currentProb: '7.7%',
    simProb: '3.0%',
    simValue: '4.7%'
  }]

},
{
  name: 'Group H',
  teams: [
  {
    id: 'H1',
    team: 'Spain',
    icon: '🇪🇸',
    odds: '-300',
    currentProb: '75.0%',
    simProb: '72.5%',
    simValue: '2.5%'
  },
  {
    id: 'H2',
    team: 'Uruguay',
    icon: '🇺🇾',
    odds: '+300',
    currentProb: '25.0%',
    simProb: '21.8%',
    simValue: '3.2%'
  },
  {
    id: 'H3',
    team: 'Saudi Arabia',
    icon: '🇸🇦',
    odds: '+1000',
    currentProb: '9.1%',
    simProb: '4.5%',
    simValue: '4.6%'
  },
  {
    id: 'H4',
    team: 'Cabo Verde',
    icon: '🇨🇻',
    odds: '+2000',
    currentProb: '4.8%',
    simProb: '1.2%',
    simValue: '3.6%'
  }]

},
{
  name: 'Group I',
  teams: [
  {
    id: 'I1',
    team: 'France',
    icon: '🇫🇷',
    odds: '-350',
    currentProb: '77.8%',
    simProb: '74.2%',
    simValue: '3.6%'
  },
  {
    id: 'I2',
    team: 'Senegal',
    icon: '🇸🇳',
    odds: '+400',
    currentProb: '20.0%',
    simProb: '18.5%',
    simValue: '1.5%'
  },
  {
    id: 'I3',
    team: 'Norway',
    icon: '🇳🇴',
    odds: '+600',
    currentProb: '14.3%',
    simProb: '6.1%',
    simValue: '8.2%'
  },
  {
    id: 'I4',
    team: 'TBD (Playoff)',
    icon: '⚽',
    odds: '+2500',
    currentProb: '3.8%',
    simProb: '1.2%',
    simValue: '2.6%'
  }]

},
{
  name: 'Group J',
  teams: [
  {
    id: 'J1',
    team: 'Argentina',
    icon: '🇦🇷',
    odds: '-400',
    currentProb: '80.0%',
    simProb: '78.5%',
    simValue: '1.5%'
  },
  {
    id: 'J2',
    team: 'Austria',
    icon: '🇦🇹',
    odds: '+450',
    currentProb: '18.2%',
    simProb: '15.4%',
    simValue: '2.8%'
  },
  {
    id: 'J3',
    team: 'Algeria',
    icon: '🇩🇿',
    odds: '+800',
    currentProb: '11.1%',
    simProb: '5.2%',
    simValue: '5.9%'
  },
  {
    id: 'J4',
    team: 'Jordan',
    icon: '🇯🇴',
    odds: '+3000',
    currentProb: '3.2%',
    simProb: '0.9%',
    simValue: '2.3%'
  }]

},
{
  name: 'Group K',
  teams: [
  {
    id: 'K1',
    team: 'Portugal',
    icon: '🇵🇹',
    odds: '-250',
    currentProb: '71.4%',
    simProb: '69.1%',
    simValue: '2.3%'
  },
  {
    id: 'K2',
    team: 'Colombia',
    icon: '🇨🇴',
    odds: '+300',
    currentProb: '25.0%',
    simProb: '22.4%',
    simValue: '2.6%'
  },
  {
    id: 'K3',
    team: 'Uzbekistan',
    icon: '🇺🇿',
    odds: '+1000',
    currentProb: '9.1%',
    simProb: '6.5%',
    simValue: '2.6%'
  },
  {
    id: 'K4',
    team: 'TBD (Playoff)',
    icon: '⚽',
    odds: '+1500',
    currentProb: '6.3%',
    simProb: '2.0%',
    simValue: '4.3%'
  }]

},
{
  name: 'Group L',
  teams: [
  {
    id: 'L1',
    team: 'England',
    icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    odds: '-200',
    currentProb: '66.7%',
    simProb: '64.2%',
    simValue: '2.5%'
  },
  {
    id: 'L2',
    team: 'Croatia',
    icon: '🇭🇷',
    odds: '+250',
    currentProb: '28.6%',
    simProb: '25.1%',
    simValue: '3.5%'
  },
  {
    id: 'L3',
    team: 'Ghana',
    icon: '🇬🇭',
    odds: '+600',
    currentProb: '14.3%',
    simProb: '9.4%',
    simValue: '4.9%'
  },
  {
    id: 'L4',
    team: 'Panama',
    icon: '🇵🇦',
    odds: '+1200',
    currentProb: '7.7%',
    simProb: '1.3%',
    simValue: '6.4%'
  }]

}];

function slugify(name: string) {
  return name.
  toLowerCase().
  normalize('NFD').
  replace(/[\u0300-\u036f]/g, '').
  replace(/\s+/g, '-');
}
export function GroupStageTable() {
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
            World Cup - Group Stage Winner
          </h2>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center space-x-3 overflow-x-auto">
        <button className="bg-white text-gray-600 border border-gray-200 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-gray-50 whitespace-nowrap">
          Tournament Winner
        </button>
        <button className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide whitespace-nowrap">
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
          Group Stage Winner betting projections for the World Cup tournament.
          Our model calculates each team's probability of winning their
          respective group based on simulations incorporating team strength,
          group draw difficulty, historical performance, and current form.
          Simulation value shows the difference between the current odds
          probability and our simulation probability.
        </p>
      </div>

      {/* Group Tables */}
      <div className="space-y-8 mt-8">
        {groups.map((group) =>
        <div key={group.name} className="w-full">
            <h2 className="text-xl font-bold text-white mb-4 pl-2">
              {group.name}
            </h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full md:min-w-[900px]">
                  <thead>
                    <tr className="border-b border-gray-100 text-[9px] md:text-[10px] text-gray-400 uppercase tracking-wider">
                      <th className="px-3 md:px-8 py-3 text-left w-auto md:w-[24%] sticky left-0 bg-white z-10">
                        Team
                      </th>
                      <th className="px-3 md:px-4 py-3 text-center w-auto md:w-[12%]">
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
                          <span>Analysis</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {group.teams.map((entry) =>
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
                            {entry.currentProb}
                          </span>
                        </td>

                        <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                          <span className="inline-flex items-center justify-center px-2.5 md:px-3 py-1 rounded bg-gray-100 text-[10px] md:text-xs font-bold text-gray-900 whitespace-nowrap">
                            {entry.simProb}
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
                        
                            See Full Analysis
                          </a>
                        </td>
                      </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>);

}