import React from 'react';
import { Typography } from '@mui/material';

interface ResultProps {
  bankersOffer: number | null;
}

export const Result: React.FC<ResultProps> = ({ bankersOffer }) => {
  return (
    <Typography variant="h5" component="div" color="text.primary">
      Banker's Offer: {bankersOffer ? `$${bankersOffer}` : 'No offer'}
    </Typography>
  );
};
