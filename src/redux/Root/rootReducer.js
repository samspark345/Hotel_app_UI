import {combineReducers} from 'redux'
import authenticateReducer from '../Reducers/authenticateReducer'
import hotelChainReducer from '../Reducers/hotelChainReducer'
import hotelFilterOptionReducer from '../Reducers/hotelFilterOptionsReducer'
import hotelReducer from '../Reducers/hotelReducer'
import hotelRoomsReducer from '../Reducers/hotelRoomsReducer'
import customerBookingReducer from '../Reducers/customerBookingReducer'
import employeeCustomerBookingsReducer from '../Reducers/employeeCustomerBookingsReducer'
import customerProfileReducer from '../Reducers/customerProfileReducer'
import viewsReducer from '../Reducers/viewsReducer'


const rootReducer = combineReducers({
    hotelChainState: hotelChainReducer,
    hotelState: hotelReducer,
    hotelFiltersOptions: hotelFilterOptionReducer,
    User: authenticateReducer,
    hotelRoomState: hotelRoomsReducer,
    customerBookingState: customerBookingReducer,
    employeeBookingsPageState: employeeCustomerBookingsReducer,
    customerProfileState: customerProfileReducer,
    viewsState: viewsReducer
})
export default rootReducer
