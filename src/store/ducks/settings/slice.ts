import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  CustomThemeType,
  CombinedDarkTheme,
  CombinedLightTheme,
} from '../../../styles';

const initialState: SettingsSliceType = {
  darkMode: true,
  theme: CombinedLightTheme,
};

type SettingsSliceType = {
  darkMode: boolean;
  theme: CustomThemeType;
};

const {actions, reducer} = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.darkMode = !state.darkMode;

      if (state.darkMode) {
        state.theme = CombinedDarkTheme;
      } else {
        state.theme = CombinedLightTheme;
      }
    },
  },
});

export const {toggleTheme} = actions;
export const settingsReducer = reducer;
