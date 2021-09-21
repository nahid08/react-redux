import {combineReducers} from 'redux'
import incrementReducer from './increment-reducer'
import powerReducer from './power-reducer'

export default combineReducers({
    increment: incrementReducer,
    power: powerReducer
})