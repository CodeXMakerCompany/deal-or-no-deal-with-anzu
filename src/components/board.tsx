import React from 'react';
import { Box, Typography } from '@mui/material';
import { Case } from './case';
import { CaseInteface } from '../App';

interface BoardProps {
  cases: CaseInteface[];
  playerCase: number;
  selectedCase: number;
  onSelectCase: (index: number) => void;
  gameOver: boolean;
}

export const Board: React.FC<BoardProps> = ({
  cases,
  playerCase,
  selectedCase,
  onSelectCase,
  gameOver,
}) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {cases.map((cs, index) => (
        <Case
          key={index}
          value={cs.value}
          selected={cs.selected}
          onClick={() => onSelectCase(index)}
        />
      ))}
      {gameOver && (
        <Typography variant="h5" component="div" color="text.primary">
          Game Over!
        </Typography>
      )}
    </Box>
  );
};
