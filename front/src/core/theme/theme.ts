import { createMuiTheme, Theme } from '@material-ui/core/styles';

export const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#625261',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#89beb3',
    },
    text: {
      primary: '#2E2800',
      secondary: '#323300',
    },
    background: {
      paper: '#ffffff',
      default: '#ffffff',
    },
  },
  spacing: (pixel: number): string => `${pixel / 16}rem`,
});
