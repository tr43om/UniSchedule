import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: ScheduleSliceType = {
  selectedGroupId: '',
};

type ScheduleSliceType = {
  selectedGroupId: string;
};

const {actions, reducer} = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setGroupId: (
      state: ScheduleSliceType,
      {payload}: PayloadAction<string>,
    ) => {
      state.selectedGroupId = payload;
    },
  },
});

export const {setGroupId} = actions;
export const scheduleReducer = reducer;
