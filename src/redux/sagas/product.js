import { call, put } from 'redux-saga/effects'
import { productApi } from '../apis/product';
import { REQUEST_PRODUCT_SUCCESS, REQUEST_PRODUCT_FAILED } from '../actions/types';

export function* fetchProduct() {
    try {
        const data = yield call(productApi)
        yield put({ type: REQUEST_PRODUCT_SUCCESS, data })
    } catch (e) {
        yield put({ type: REQUEST_PRODUCT_FAILED, errData: { message: e.message } })
    }
}