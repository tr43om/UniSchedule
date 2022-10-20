import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: SettingsSliceType = {
  darkMode: false,
};

type SettingsSliceType = {
  darkMode: boolean;
};

const {actions, reducer} = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const {toggleTheme} = actions;
export const settingsReducer = reducer;
