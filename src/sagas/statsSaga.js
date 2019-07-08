import { take, fork, put, call } from 'redux-saga/effects';

import { IMAGES } from "../constants";
import { fetchImageStats } from '../api';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';

function* handleStatsRequest(id) {
    for (let i = 0; i < 3; i++) { // in case of hitting the server failure we want to send max 3 requests not more than that
        try{
            // console.log('fetching stats for', id);
            yield put(loadImageStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImageStats(id, res.downloads.total));
            return true; 
        }
        catch(e) { }
    }

    yield put(setImageStatsError(id));

}

export default function* watchStatsRequest() {
    while(true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);
        
        // images.forEach(image => {
        //     yield fork(handleStatsRequest, image.id);
        // });
        
        for(let i = 0; i < images.length; i++){
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}