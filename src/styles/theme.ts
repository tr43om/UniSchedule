import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {Theme} from '@react-navigation/native';

export const darkTheme: Theme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#121212',
    card: '#23242A',
  },
};

export const lightTheme: Theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    text: '#23242A',
  },
};
