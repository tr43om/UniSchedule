import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectGroupId = createSelector(
  ({schedule: {selectedGroupId}}: RootState) => selectedGroupId,
  selectedGroupId => selectedGroupId,
);
