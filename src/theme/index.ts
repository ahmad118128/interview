'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { typography } from './typography';
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    input: true;
    body3: true;
    smallButton: true;
  }
}
// Create a theme instance.
const costumeTheme = createTheme({
  palette: {
    primary: {
      main: '#383838',
      light: '#7EBC59',
      dark: '#5B913B',
    },
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EDEDEF',
      300: '#AAAAAA',
    },
    success: {
      main: '#40A945',
    },
    warning: {
      main: '#ED6C02',
    },
    info: {
      main: '#0288D1',
    },
    error: {
      main: '#D01739',
    },
  },
  typography,
  spacing: (value: number) => value * 4,
});

const theme = responsiveFontSizes(costumeTheme);

export default theme;
