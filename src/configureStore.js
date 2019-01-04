import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './redux/reducers/rootReducers';
import watchSagas from './redux/sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(){
    let store
    store = createStore(rootReducers,applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(watchSagas)
    return store
}