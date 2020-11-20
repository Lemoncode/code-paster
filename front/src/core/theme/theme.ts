import merge from 'lodash.merge';
import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from './theme.vm';

const defaultTheme = createMuiTheme();

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
  spacing: (pixel: number): string => `${pixel / 16}rem`,
  breakpoints: {
    values: {
      xs: 380,
      sm: 578,
      md: 728,
      lg: 1100,
    },
  },
});
