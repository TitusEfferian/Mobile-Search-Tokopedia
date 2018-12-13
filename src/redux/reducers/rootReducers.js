import {combineReducers} from 'redux'

export default combineReducers({
    product:require('./product').reducer
})