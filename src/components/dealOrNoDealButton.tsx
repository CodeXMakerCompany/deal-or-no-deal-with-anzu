import React from 'react';
import { Button } from '@mui/material';

interface DealButtonProps {
  onClick: () => void;
}

export const DealButton: React.FC<DealButtonProps> = ({ onClick }) => {
  return <Button variant="contained" onClick={onClick}>Deal</Button>;
};

interface NoDealButtonProps {
  onClick: () => void;
}

export const NoDealButton: React.FC<NoDealButtonProps> = ({ onClick }) => {
  return <Button variant="contained" onClick={onClick}>No Deal</Button>;
};
