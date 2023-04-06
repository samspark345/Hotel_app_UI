import {combineReducers} from 'redux'
import authenticateReducer from '../Reducers/authenticateReducer'
import hotelChainReducer from '../Reducers/hotelChainReducer'
import hotelFilterOptionReducer from '../Reducers/hotelFilterOptionsReducer'
import hotelReducer from '../Reducers/hotelReducer'
import hotelRoomsReducer from '../Reducers/hotelRoomsReducer'


const rootReducer = combineReducers({
    hotelChainState: hotelChainReducer,
    hotelState: hotelReducer,
    hotelFiltersOptions: hotelFilterOptionReducer,
    User: authenticateReducer,
    hotelRoomState: hotelRoomsReducer,
})
export default rootReducer
