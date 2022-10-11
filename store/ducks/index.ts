import {all, call, spawn} from 'redux-saga/effects';
import {settingsReducer} from './settings';

export * from './settings';

export const reducers = {
  settings: settingsReducer,
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
