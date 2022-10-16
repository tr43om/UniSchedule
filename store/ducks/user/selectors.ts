import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectTheme = createSelector(
  ({settings: {darkMode}}: RootState) => darkMode,
  darkMode => darkMode,
);
