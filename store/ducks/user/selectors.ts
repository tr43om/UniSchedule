import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectAuthorizationStatus = createSelector(
  ({user: {isAuthorized}}: RootState) => isAuthorized,
  isAuthorized => isAuthorized,
);

export const selectUsername = createSelector(
  ({user: {username}}: RootState) => username,
  username => username,
);
