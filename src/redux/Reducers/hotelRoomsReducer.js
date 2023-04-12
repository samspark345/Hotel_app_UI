import React from 'react'
import { APPLY_ROOM_FILTERS_ON_SUCCESS, GET_ROOMS_ON_SUCCESS , MODIFY_SELECTED_ROOM_FILTERS, RESET_ROOM_FILTERS, SELECT_HOTEL} from '../Actions/hotelRoomActions'


const initHotelState = {
    rooms: [],
    selectedFilters : {
        Room_Capacity: [],
        Views: [],
        Amenities: [],
        Start_date: '',
        End_date: '',
        Min_price: '',
        Max_price: ''
    },
    selectedHotelInfo : {
        chain_name: '',
        city: '',
        country: '',
        hotel_id: '', 
        address: ''
    },

}

const hotelRoomsReducer = (state=initHotelState, action) => {
    console.log(action)
    switch(action.type){
        case(GET_ROOMS_ON_SUCCESS) : {

            return({
                ...state,
                rooms: action.payload
            })
        }

        case(APPLY_ROOM_FILTERS_ON_SUCCESS) : {

            return({
                ...state,
                rooms: action.payload
            })
        }

        case(RESET_ROOM_FILTERS) : {

            return({
                ...state,
                rooms: [],
                selectedFilters : {
                    Room_Capacity: [],
                    Views: [],
                    Amenities: [],
                    Start_date: '',
                    End_date: '',
                    Min_price: '',
                    Max_price: ''
                },
            
            })
        }


        case(MODIFY_SELECTED_ROOM_FILTERS) : {
            if(action.payload.filterName === 'Room_Capacity') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        Room_Capacity: action.payload.filterValue
                    }
                })
            }

            else if(action.payload.filterName === 'Views') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        Views: action.payload.filterValue
                    }
                })
            }
            else if(action.payload.filterName === 'Amenities') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        Amenities: action.payload.filterValue
                    }
                })
            }

            else if(action.payload.filterName === 'Start_Date') {
                console.log('here')
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        Start_date: action.payload.filterValue
                    }
                    
                })
            }
            else if(action.payload.filterName === 'End_Date') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        End_date: action.payload.filterValue
                    }
                })
            }
            else if(action.payload.filterName === 'Min_price') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        Min_Price: action.payload.filterValue
                    }
                })
            }
            else if(action.payload.filterName === 'Max_price') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        Max_price: action.payload.filterValue
                    }
                })
            }
            else{
                console.log(action.payload)
                return state}
            
        }

        case(SELECT_HOTEL) : {
            console.log(action)
            return({
                ...state,
                selectedHotelInfo :  {
                    chain_name: action.payload.chain_name,
                    city: action.payload.city,
                    country: action.payload.country,
                    hotel_id: action.payload.hotel_id, 
                    address: action.payload.address, 
                }
            })
        }

        default:
            return state
    }
}

export default hotelRoomsReducer