import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: UserSliceType = {
  isAuthorized: false,
  username: '',
  year: 1,
  group: '',
};

type UserSliceType = {
  isAuthorized: boolean;
  username: string;
  year: number;
  group: string;
};

const {actions, reducer} = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state: UserSliceType, {payload}: PayloadAction<string>) => {
      state.username = payload;
    },
    setAcademicLevel: (
      state: UserSliceType,
      {payload}: PayloadAction<number>,
    ) => {
      state.year = payload;
    },
    setGroupName: (state: UserSliceType, {payload}: PayloadAction<string>) => {
      state.group = payload;
    },
  },
});

export const {setUsername} = actions;
export const userReducer = reducer;
