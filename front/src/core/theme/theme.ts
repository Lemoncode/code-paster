import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
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
    divider: '#D9D900',
    background: {
      paper: '#ffffff',
      default: '#ffffff',
    },
  },
  spacing: (n: number): string => {
    return `${n / 16}rem`;
  },
});
