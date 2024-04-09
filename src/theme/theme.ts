import React from 'react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import { palette } from './palette';
import { typography } from './typography';
interface IOverrides {
  MuiTooltip: {
    tooltip: {
      fontSize: string;
    };
  };
}

type Gradient = {
  landingHome: string[];
  landingGaas: string[];
  landingAaas: string[];
  landingPlatform: string[];
  registerButton: string;
  apiMarketHeader: string;
};

declare module '@mui/material/styles' {
  interface ThemeOptions {
    height?: object;
    overrides?: IOverrides;
  }
  interface Palette {
    custom: Palette['primary'];
  }
  interface PaletteColor {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
  }
  //   interface PaletteOptions {
  //     custom?: PaletteOptions['primary'];
  //   }
  interface TypeText {
    white: string;
    light1: string;
    light2: string;
    light3: string;
    dark1: string;
    dark2: string;
    dark3: string;
    dark4: string;
    dark5: string;
    dark6: string;
    dark7: string;
    dark8: string;
    gray1: string;
    gray2: string;
    secondary1: string;
  }
  interface TypeBackground {
    white: string;
    light1: string;
    light2: string;
    light3: string;
    dark1: string;
    dark2: string;
    dark3: string;
    red: string;
    lightBlue: string;
    green: string;
    gray2: string;
    gradient: Gradient;
  }
  interface TypographyVariants {
    input: React.CSSProperties;
    smallButton: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    input?: React.CSSProperties;
    smallButton?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    input: true;
    body3: true;
    smallButton: true;
  }
}

// Create a theme instance.
const costumeTheme = createTheme({
  ...palette,
  typography,
  spacing: (value: number) => value * 4,
});

const theme = responsiveFontSizes(costumeTheme);

export default theme;
