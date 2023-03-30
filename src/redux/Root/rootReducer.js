import {combineReducers} from 'redux'
import hotelChainReducer from '../Reducers/hotelChainReducer'
import hotelFilterReducer from '../Reducers/hotelFilterReducer'
import hotelReducer from '../Reducers/hotelReducer'


const rootReducer = combineReducers({
    hotelChainState: hotelChainReducer,
    hotelState: hotelReducer,
    hotelFilters: hotelFilterReducer
})
export default rootReducer
