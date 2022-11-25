import {AnyAction, combineReducers} from 'redux';
import {reducers} from './ducks';

const appReducer = combineReducers(reducers);

type RootReducerState = ReturnType<typeof appReducer>;

const rootReducer = (
  state: RootReducerState | undefined,
  action: AnyAction,
) => {
  return appReducer(state, action);
};

export default rootReducer;
