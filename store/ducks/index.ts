import {all, call, spawn} from 'redux-saga/effects';
import {settingsReducer} from './settings';
import {userReducer} from './user';

export * from './settings';
export * from './user';

export const reducers = {
  settings: settingsReducer,
  user: userReducer,
};

// export default function* rootSaga(): Generator<any, void, any> {
//   const sagas = [{}];

//   const retrySagas = yield sagas.map(saga => {
//     return spawn(function* () {
//       while (true) {
//         try {
//           yield call(saga);
//           break;
//         } catch (error) {
//           console.log(error);
//         }
//       }
//     });
//   });

//   yield all(retrySagas);
// }
