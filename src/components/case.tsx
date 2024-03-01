import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface CaseProps {
  value: number;
  selected: boolean;
  onClick: () => void;
}

export const Case: React.FC<CaseProps> = ({ value, selected, onClick }) => {
  return (
    <Paper
      sx={{
        p: 5,
        m: 2,
        backgroundColor: selected ? '#ff9800' : '#fff',
        cursor: selected ? 'not-allowed' : 'pointer',
      }}
      onClick={onClick}
    >
      <Typography variant="h5" component="div" color={selected ? 'text.primary' : 'text.secondary'}>
        {selected ? 'Selected' : `${value}`}
      </Typography>
    </Paper>
  );
};
