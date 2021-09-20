import {combineReducers} from 'redux'
import incrementReducer from './increment-reducer'

export default combineReducers({
    increment: incrementReducer
})