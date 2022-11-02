import {
  DefaultTheme as NavigationLightTheme,
  Theme as NavigationTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {
  MD3LightTheme as PaperLightTheme,
  MD3DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {
  Theme as PaperTheme,
  MD3Theme,
} from 'react-native-paper/lib/typescript/types';

import merge from 'deepmerge';

export const darkTheme: NavigationTheme = {
  ...NavigationDarkTheme,
  dark: true,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: '#c1175b',

    background: '#23293d',
    card: '#23242A',
  },
};

export const paperDarkTheme: PaperTheme = {
  ...PaperDarkTheme,
  dark: true,
  roundness: 10,
  colors: {
    ...PaperDarkTheme.colors,
    background: '#23293d',
    secondary: '#8DBBFF',
    primary: '#c1175b',
  },
};

export const paperLightTheme: MD3Theme = {
  ...PaperLightTheme,

  colors: {
    ...PaperLightTheme.colors,
    background: '#e5e6ed',
    primary: '#c1175b',
    tertiary: '#919091',
  },
};

export const lightTheme: NavigationTheme = {
  ...NavigationLightTheme,
  colors: {
    ...NavigationLightTheme.colors,
    background: '#e5e6ed',
    primary: '#c1175b',
    text: '#23293d',
  },
};

type PaperLightTheme = typeof CombinedLightTheme;
type PaperDarkTheme = typeof CombinedDarkTheme;

export const CombinedLightTheme = merge(paperLightTheme, lightTheme);
export const CombinedDarkTheme = merge(paperDarkTheme, darkTheme);

export interface CustomThemeType extends PaperLightTheme, PaperDarkTheme {}
