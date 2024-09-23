import { Theme as DefaultTheme } from '@mui/material/styles';
import { Palette as DefaultPalette } from '@mui/material/styles/createPalette';

interface Palette extends DefaultPalette {
  customPalette: {
    background: string;
    primary: string;
    secondary: string;
    successLight: string;
    successDark: string;
    alertLight: string;
    alertDark: string;
    greyLight: string;
    greyMedium: string;
  };
}

export interface Theme extends Omit<DefaultTheme, 'palette'> {
  palette: Palette;
}
