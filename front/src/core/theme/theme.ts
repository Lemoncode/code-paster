import merge from 'lodash.merge';
import { createTheme } from '@mui/material/styles';
import { Theme } from './theme.vm';

const defaultTheme = createTheme();

export const theme: Theme = merge(defaultTheme, {
  palette: {
    background: {
      default: '#fff',
    },
    customPalette: {
      background: '#fff',
      primary: '#d9d900',
      secondary: '#2E2800',
      successLight: '#11ae64',
      successDark: '#0f834c',
      alertLight: 'rgb(255, 87, 51)',
      alertDark: 'rgb(207, 70, 41)',
      greyLight: '#eee',
      greyMedium: '#ccc',
    },
  },
  breakpoints: {
    values: {
      xs: 380,
      sm: 578,
      md: 728,
      lg: 1100,
    },
  },
  spacing: (factor: number) => `${0.5 * factor}rem`, // 1 unit = 8px / 0.5rem
});
