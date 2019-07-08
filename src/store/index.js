import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()    
        )
    );
    sagaMiddleware.run(rootSaga);

    store.dispatch({ type: 'DANG' });
    // store.dispatch({ type: 'LOGOUT' }); // just for demonstration purposes
    // store.dispatch({ type: 'LOGIN' });
    // store.dispatch({ type: 'LOGOUT' }); // `take` will only accept dispatched action once nomatter how many times it has been triggered
    // action dispatching should be in the order as they are taken in rootSaga otherwise it will not handle the action
    return store;
}

export default configureStore;