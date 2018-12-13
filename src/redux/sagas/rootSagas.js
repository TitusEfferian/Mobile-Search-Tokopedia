import {all,takeEvery} from 'redux-saga/effects'
import * as Types from '../actions/types'
import { fetchProduct } from './product';
export default function* watchSagas(){
    yield all([
        yield takeEvery(Types.REQUEST_PRODUCT,fetchProduct)
    ])
}