import {combineReducers} from 'redux'
import authenticateReducer from '../Reducers/authenticateReducer'
import hotelChainReducer from '../Reducers/hotelChainReducer'
import hotelFilterOptionReducer from '../Reducers/hotelFilterOptionsReducer'
import hotelReducer from '../Reducers/hotelReducer'


const rootReducer = combineReducers({
    hotelChainState: hotelChainReducer,
    hotelState: hotelReducer,
    hotelFilters: hotelFilterOptionReducer,
    User: authenticateReducer
})
export default rootReducer
