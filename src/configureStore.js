import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './redux/reducers/rootReducers';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(){
    let store
    store = createStore(rootReducers)
    sagaMiddleware.run()
    return store
}