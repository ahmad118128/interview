'use client';
import React from 'react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import { palette } from './palette';
import { typography } from './typography';

// Create a theme instance.
const costumeTheme = createTheme({
  ...palette,
  typography,
  spacing: (value: number) => value * 4,
});

const theme = responsiveFontSizes(costumeTheme);

export default theme;
