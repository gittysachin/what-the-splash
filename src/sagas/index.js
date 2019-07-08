// import { 
//     // takeEvery, 
//     takeEvery, 
//     // put, 
//     // call 
// } from 'redux-saga/effects';

// import { IMAGES } from '../constants';

// // function* workerSaga() {
// //     console.log('Hey from worker');
// //     console.log(put({ type: 'ACTION_FROM_WORKER' }));
// //     yield put({ type: 'ACTION_FROM_WORKER' });
// // }

// // function* byebyeSaga() {
// //     console.log('bye bye');
// // }

// // // watcher saga
// // function* rootSaga(){
// //     // yield takeEvery('HELLO', workerSaga);

// //     yield take('LOGIN'); // we are using `take` here because we want the action to execute once
// //     yield call(workerSaga);
// //     // yield take('ADD_TO_CART');
// //     // yield take('BUY');
// //     yield take('LOGOUT');
// //     yield call(byebyeSaga);
// // }


// function* handleImagesLoad() {
//     console.log('fetching images from unsplash');
// }

// // function* handleDang(){
// //     console.log('DANG !!');
// // }

// watcher saga -> actions -> worker saga

// // watcher saga
// function* rootSaga() {
//     // yield take('DANG');
//     // yield call(handleDang);
//     // yield take(IMAGES.LOAD);
//     // yield call(handleImagesLoad);
//     yield takeEvery(IMAGES.LOAD, handleImagesLoad);

// }

import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';

export default function* rootSaga() {
    yield all([
        imagesSaga(),
        statsSaga()
    ]);
}