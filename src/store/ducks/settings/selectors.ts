import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectIsDarkMode = createSelector(
  ({settings: {darkMode}}: RootState) => darkMode,
  darkMode => darkMode,
);

export const selectTheme = createSelector(
  ({settings: {theme}}: RootState) => theme,
  theme => theme,
);
