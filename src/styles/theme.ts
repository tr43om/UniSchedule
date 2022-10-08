import {DefaultTheme, DarkTheme} from '@react-navigation/native';

export const darkTheme = {
  ...DarkTheme,

  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#121212',
    card: '#23242A',
  },
};

export const lightTheme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};
