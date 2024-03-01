// Game.tsx
import React, { useState } from 'react';
import { Board } from './components/board';
import { DealButton, NoDealButton } from './components/dealOrNoDealButton';
import { Result } from './components/result';

export interface CaseInteface {
  value: number
  selected: boolean
}

const App: React.FC = () => {
  const casesList = Array.from({ length: 13 }, (_, i) => ({ value: i + 1, selected: false }));
  const [cases, setCases] = useState<CaseInteface[]>(casesList);
  const [playerCase, setPlayerCase] = useState<number>(15);
  const [selectedCase, setSelectedCase] = useState<number>(1);
  const [bankersOffer, setBankersOffer] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const selectCase = (index: number) => {
    setCases(
      cases.map( (cs, idx) => {
        if (idx === index) {
          return { 
            ...cs,
            selected: !cs.selected
          }
        }

        return cs
      } )
    )
  };

  const takeDeal = () => {
    if (bankersOffer !== null) {
      setGameOver(true);
    }
  };

  const continuePlaying = () => {
    setSelectedCase(1);
    setBankersOffer(null);
  };

  return (
    <div>
      <Board
        cases={cases}
        playerCase={playerCase}
        selectedCase={selectedCase}
        onSelectCase={selectCase}
        gameOver={gameOver}
      />
      {selectedCase !== null && !gameOver && (
        <>
          <DealButton onClick={takeDeal} />
          <NoDealButton onClick={continuePlaying} />
        </>
      )}
      {gameOver && <Result bankersOffer={bankersOffer} />}
    </div>
  );
};

export default App