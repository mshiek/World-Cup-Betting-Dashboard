import React, { useState } from 'react';
interface Team {
  id: string;
  name: string;
  icon: string;
  seed: number;
}
const INITIAL_TEAMS: Team[] = [
{
  id: 't1',
  name: 'Brazil',
  icon: '🇧🇷',
  seed: 1
},
{
  id: 't2',
  name: 'Japan',
  icon: '🇯🇵',
  seed: 16
},
{
  id: 't3',
  name: 'France',
  icon: '🇫🇷',
  seed: 8
},
{
  id: 't4',
  name: 'Australia',
  icon: '🇦🇺',
  seed: 9
},
{
  id: 't5',
  name: 'Argentina',
  icon: '🇦🇷',
  seed: 5
},
{
  id: 't6',
  name: 'Saudi Arabia',
  icon: '🇸🇦',
  seed: 12
},
{
  id: 't7',
  name: 'England',
  icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  seed: 4
},
{
  id: 't8',
  name: 'South Korea',
  icon: '🇰🇷',
  seed: 13
},
{
  id: 't9',
  name: 'Germany',
  icon: '🇩🇪',
  seed: 6
},
{
  id: 't10',
  name: 'Morocco',
  icon: '🇲🇦',
  seed: 11
},
{
  id: 't11',
  name: 'Spain',
  icon: '🇪🇸',
  seed: 3
},
{
  id: 't12',
  name: 'Canada',
  icon: '🇨🇦',
  seed: 14
},
{
  id: 't13',
  name: 'Portugal',
  icon: '🇵🇹',
  seed: 7
},
{
  id: 't14',
  name: 'Ecuador',
  icon: '🇪🇨',
  seed: 10
},
{
  id: 't15',
  name: 'Netherlands',
  icon: '🇳🇱',
  seed: 2
},
{
  id: 't16',
  name: 'USA',
  icon: '🇺🇸',
  seed: 15
},
{
  id: 't17',
  name: 'Belgium',
  icon: '🇧🇪',
  seed: 1
},
{
  id: 't18',
  name: 'Iran',
  icon: '🇮🇷',
  seed: 16
},
{
  id: 't19',
  name: 'Mexico',
  icon: '🇲🇽',
  seed: 8
},
{
  id: 't20',
  name: 'Qatar',
  icon: '🇶🇦',
  seed: 9
},
{
  id: 't21',
  name: 'Italy',
  icon: '🇮🇹',
  seed: 5
},
{
  id: 't22',
  name: 'Cameroon',
  icon: '🇨🇲',
  seed: 12
},
{
  id: 't23',
  name: 'Uruguay',
  icon: '🇺🇾',
  seed: 4
},
{
  id: 't24',
  name: 'Ghana',
  icon: '🇬🇭',
  seed: 13
},
{
  id: 't25',
  name: 'Croatia',
  icon: '🇭🇷',
  seed: 6
},
{
  id: 't26',
  name: 'Tunisia',
  icon: '🇹🇳',
  seed: 11
},
{
  id: 't27',
  name: 'Denmark',
  icon: '🇩🇰',
  seed: 3
},
{
  id: 't28',
  name: 'Senegal',
  icon: '🇸🇳',
  seed: 14
},
{
  id: 't29',
  name: 'Serbia',
  icon: '🇷🇸',
  seed: 7
},
{
  id: 't30',
  name: 'Switzerland',
  icon: '🇨🇭',
  seed: 10
},
{
  id: 't31',
  name: 'Colombia',
  icon: '🇨🇴',
  seed: 2
},
{
  id: 't32',
  name: 'Nigeria',
  icon: '🇳🇬',
  seed: 15
}];

type NullableTeam = Team | null;
interface MatchBlockProps {
  team1: NullableTeam;
  team2: NullableTeam;
  onSelect: (team: NullableTeam) => void;
  selectedTeamId?: string;
  align?: 'left' | 'right';
  isFinal?: boolean;
}
function MatchBlock({
  team1,
  team2,
  onSelect,
  selectedTeamId,
  isFinal = false
}: MatchBlockProps) {
  return (
    <div
      className={`flex flex-col justify-center ${isFinal ? 'w-48' : 'w-36 md:w-40'} my-1`}>
      
      <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden flex flex-col text-xs">
        <button
          onClick={() => onSelect(team1)}
          disabled={!team1}
          className={`flex items-center px-2 py-1.5 transition-colors border-b border-gray-100 text-left ${selectedTeamId && selectedTeamId === team1?.id ? 'bg-[#1a1f2e] text-white font-bold' : 'hover:bg-gray-50'} ${!team1 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}>
          
          <span className="w-4 text-[9px] text-left opacity-60">
            {team1?.seed || '-'}
          </span>
          <span className="mr-1.5">{team1?.icon || '⚪'}</span>
          <span
            className={`truncate text-left flex-1 ${selectedTeamId === team1?.id ? 'text-white' : 'text-gray-800'}`}>
            
            {team1?.name || 'TBD'}
          </span>
        </button>
        <button
          onClick={() => onSelect(team2)}
          disabled={!team2}
          className={`flex items-center px-2 py-1.5 transition-colors text-left ${selectedTeamId && selectedTeamId === team2?.id ? 'bg-[#1a1f2e] text-white font-bold' : 'hover:bg-gray-50'} ${!team2 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}>
          
          <span className="w-4 text-[9px] text-left opacity-60">
            {team2?.seed || '-'}
          </span>
          <span className="mr-1.5">{team2?.icon || '⚪'}</span>
          <span
            className={`truncate text-left flex-1 ${selectedTeamId === team2?.id ? 'text-white' : 'text-gray-800'}`}>
            
            {team2?.name || 'TBD'}
          </span>
        </button>
      </div>
    </div>);

}
interface MatchPair {
  t1: NullableTeam;
  t2: NullableTeam;
}
interface BracketColumnProps {
  matches: MatchPair[];
  nextRound: NullableTeam[];
  onAdvance: (team: NullableTeam, index: number) => void;
  align?: 'left' | 'right';
}
function BracketColumn({
  matches,
  nextRound,
  onAdvance,
  align = 'left'
}: BracketColumnProps) {
  return (
    <div className="flex flex-col justify-around h-full px-1 md:px-3">
      {matches.map((m, i) =>
      <div key={i} className="flex-1 flex flex-col justify-center relative">
          <MatchBlock
          team1={m.t1}
          team2={m.t2}
          onSelect={(t) => onAdvance(t, i)}
          selectedTeamId={nextRound[i]?.id}
          align={align} />
        
          <div
          className={`hidden md:block absolute top-1/2 w-4 md:w-6 border-t-2 ${nextRound[i] ? align === 'left' ? 'border-blue-600' : 'border-orange-500' : 'border-gray-300'} ${align === 'left' ? '-right-1 md:-right-3' : '-left-1 md:-left-3'}`} />
        
        </div>
      )}
    </div>);

}
interface BracketSimulatorProps {
  buttonText?: string;
  buttonClassName?: string;
}
export function BracketSimulator({
  buttonText = 'Reset Bracket',
  buttonClassName = 'bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-4 py-2 rounded transition-colors'
}: BracketSimulatorProps) {
  const [r16, setR16] = useState<NullableTeam[]>(Array(16).fill(null));
  const [qf, setQf] = useState<NullableTeam[]>(Array(8).fill(null));
  const [sf, setSf] = useState<NullableTeam[]>(Array(4).fill(null));
  const [finalRound, setFinalRound] = useState<NullableTeam[]>(
    Array(2).fill(null)
  );
  const [champion, setChampion] = useState<NullableTeam>(null);
  function clearDownstream(roundIndex: number, slotIndex: number) {
    // Simple cascade: when picking in R32, clear everything downstream
    // This is a simplified approach — clears all picks after the current round
    if (roundIndex === 0) {
      // R32 pick → might need to clear R16+ downstream
      const r16Slot = slotIndex;
      const qfSlot = Math.floor(r16Slot / 2);
      const sfSlot = Math.floor(qfSlot / 2);
      const finalSlot = Math.floor(sfSlot / 2);
      setQf((prev) => {
        const next = [...prev];
        if (next[qfSlot]?.id === r16[r16Slot]?.id) {
          next[qfSlot] = null;
        }
        return next;
      });
      setSf((prev) => {
        const next = [...prev];
        if (next[sfSlot]?.id === r16[r16Slot]?.id) {
          next[sfSlot] = null;
        }
        return next;
      });
      setFinalRound((prev) => {
        const next = [...prev];
        if (next[finalSlot]?.id === r16[r16Slot]?.id) {
          next[finalSlot] = null;
        }
        return next;
      });
      if (champion?.id === r16[r16Slot]?.id) {
        setChampion(null);
      }
    }
  }
  function handleR32Pick(team: NullableTeam, matchIndex: number) {
    if (!team) return;
    clearDownstream(0, matchIndex);
    setR16((prev) => {
      const next = [...prev];
      next[matchIndex] = team;
      return next;
    });
  }
  function handleR16Pick(
  team: NullableTeam,
  matchIndex: number,
  offset: number)
  {
    if (!team) return;
    const actualIndex = offset + matchIndex;
    setQf((prev) => {
      const next = [...prev];
      next[actualIndex] = team;
      return next;
    });
  }
  function handleQFPick(
  team: NullableTeam,
  matchIndex: number,
  offset: number)
  {
    if (!team) return;
    const actualIndex = offset + matchIndex;
    setSf((prev) => {
      const next = [...prev];
      next[actualIndex] = team;
      return next;
    });
  }
  function handleSFPick(
  team: NullableTeam,
  matchIndex: number,
  offset: number)
  {
    if (!team) return;
    const actualIndex = offset + matchIndex;
    setFinalRound((prev) => {
      const next = [...prev];
      next[actualIndex] = team;
      return next;
    });
  }
  function handleFinalPick(team: NullableTeam) {
    if (!team) return;
    setChampion(team);
  }
  function resetBracket() {
    setR16(Array(16).fill(null));
    setQf(Array(8).fill(null));
    setSf(Array(4).fill(null));
    setFinalRound(Array(2).fill(null));
    setChampion(null);
  }
  // Build match pairs for each round
  const r32Left: MatchPair[] = [];
  const r32Right: MatchPair[] = [];
  for (let i = 0; i < 8; i++) {
    r32Left.push({
      t1: INITIAL_TEAMS[i * 2],
      t2: INITIAL_TEAMS[i * 2 + 1]
    });
    r32Right.push({
      t1: INITIAL_TEAMS[16 + i * 2],
      t2: INITIAL_TEAMS[16 + i * 2 + 1]
    });
  }
  const r16Left: MatchPair[] = [];
  const r16Right: MatchPair[] = [];
  for (let i = 0; i < 4; i++) {
    r16Left.push({
      t1: r16[i * 2],
      t2: r16[i * 2 + 1]
    });
    r16Right.push({
      t1: r16[8 + i * 2],
      t2: r16[8 + i * 2 + 1]
    });
  }
  const qfLeft: MatchPair[] = [];
  const qfRight: MatchPair[] = [];
  for (let i = 0; i < 2; i++) {
    qfLeft.push({
      t1: qf[i * 2],
      t2: qf[i * 2 + 1]
    });
    qfRight.push({
      t1: qf[4 + i * 2],
      t2: qf[4 + i * 2 + 1]
    });
  }
  const sfLeftMatch: MatchPair[] = [
  {
    t1: sf[0],
    t2: sf[1]
  }];

  const sfRightMatch: MatchPair[] = [
  {
    t1: sf[2],
    t2: sf[3]
  }];

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 md:px-8 sticky left-0 z-20">
        <div className="flex items-center justify-between max-w-full">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              World Cup 2026 Bracket Simulator
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Simulate the entire World Cup bracket in full, or add any picks
              and simulate with those selections.
            </p>
          </div>
          <button onClick={resetBracket} className={buttonClassName}>
            {buttonText}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        {/* Round Headers */}
        <div className="flex justify-between min-w-[1400px] px-2 py-3 bg-white border-b border-gray-200 text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          <div className="w-36 md:w-40 text-center">Round of 32</div>
          <div className="w-36 md:w-40 text-center">Round of 16</div>
          <div className="w-36 md:w-40 text-center">Quarterfinals</div>
          <div className="w-36 md:w-40 text-center">Semifinals</div>
          <div className="w-48 text-center text-gray-700 text-xs">Final</div>
          <div className="w-36 md:w-40 text-center">Semifinals</div>
          <div className="w-36 md:w-40 text-center">Quarterfinals</div>
          <div className="w-36 md:w-40 text-center">Round of 16</div>
          <div className="w-36 md:w-40 text-center">Round of 32</div>
        </div>

        {/* Bracket */}
        <div
          className="flex justify-between min-w-[1400px] p-2 md:p-4"
          style={{
            height: '1100px'
          }}>
          
          {/* LEFT SIDE */}
          <div className="flex h-full">
            <BracketColumn
              matches={r32Left}
              nextRound={r16.slice(0, 8)}
              onAdvance={(t, i) => handleR32Pick(t, i)}
              align="left" />
            
            <BracketColumn
              matches={r16Left}
              nextRound={qf.slice(0, 4)}
              onAdvance={(t, i) => handleR16Pick(t, i, 0)}
              align="left" />
            
            <BracketColumn
              matches={qfLeft}
              nextRound={sf.slice(0, 2)}
              onAdvance={(t, i) => handleQFPick(t, i, 0)}
              align="left" />
            
            <BracketColumn
              matches={sfLeftMatch}
              nextRound={finalRound.slice(0, 1)}
              onAdvance={(t, i) => handleSFPick(t, i, 0)}
              align="left" />
            
          </div>

          {/* CENTER — FINAL + CHAMPION */}
          <div className="flex flex-col justify-center items-center px-2 md:px-4 relative z-20">
            <div className="text-center mb-4">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                World Champion
              </h3>
              <div className="w-28 h-28 bg-white rounded-full shadow-lg border-4 border-yellow-400 flex flex-col items-center justify-center mx-auto">
                {champion ?
                <>
                    <span className="text-3xl mb-1">{champion.icon}</span>
                    <span className="text-xs font-bold text-gray-900 text-center leading-tight px-2">
                      {champion.name}
                    </span>
                  </> :

                <span className="text-gray-300 text-3xl">🏆</span>
                }
              </div>
            </div>

            <MatchBlock
              team1={finalRound[0]}
              team2={finalRound[1]}
              onSelect={handleFinalPick}
              selectedTeamId={champion?.id}
              isFinal={true} />
            
          </div>

          {/* RIGHT SIDE */}
          <div className="flex h-full">
            <BracketColumn
              matches={sfRightMatch}
              nextRound={finalRound.slice(1, 2)}
              onAdvance={(t, i) => handleSFPick(t, i, 1)}
              align="right" />
            
            <BracketColumn
              matches={qfRight}
              nextRound={sf.slice(2, 4)}
              onAdvance={(t, i) => handleQFPick(t, i, 2)}
              align="right" />
            
            <BracketColumn
              matches={r16Right}
              nextRound={qf.slice(4, 8)}
              onAdvance={(t, i) => handleR16Pick(t, i, 4)}
              align="right" />
            
            <BracketColumn
              matches={r32Right}
              nextRound={r16.slice(8, 16)}
              onAdvance={(t, i) => handleR32Pick(t, i + 8)}
              align="right" />
            
          </div>
        </div>
      </div>
    </div>);

}