import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: UserSliceType = {
  isAuthorized: false,
  name: '',
  email: '',
};

type UserSliceType = {
  isAuthorized: boolean;
  name: string;
  email: string;
};

const {actions, reducer} = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = actions;
export const userReducer = reducer;
