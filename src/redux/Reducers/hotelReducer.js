import React from 'react'
import { GET_HOTELS_ON_SUCCESS, MODIFY_SELECTED_FILTERS } from '../Actions/hotelActions'


const initHotelState = {
    hotels: [],
    selectedFilters : {
        Room_Capacity: [],
        chain_name: [],
        city: [],
        No_Of_Rooms: [],
        star_rating: [],
        Views: [],
        Amenities: []
    }
}

const hotelReducer = (state=initHotelState, action) => {
    switch(action.type){
        case(GET_HOTELS_ON_SUCCESS) : {

            return({
                ...state,
                hotels: action.payload
            })
        }


        case(MODIFY_SELECTED_FILTERS) : {
            if(action.payload.filterName == 'Room_Capacity') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        Room_Capacity: action.payload.filterValue
                    }
                })
            }

            else if(action.payload.filterName == 'Hotel_Chain') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        Hotel_Chain: action.payload.filterValue
                    }
                })
            }
            else if(action.payload.filterName == 'No_Of_Rooms') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        No_Of_Rooms: action.payload.filterValue
                    }
                })
            }
            else if(action.payload.filterName == 'Star_No') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        Star_No: action.payload.filterValue
                    }
                })
            }
            else if(action.payload.filterName == 'Views') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        Views: action.payload.filterValue
                    }
                })
            }
            else if(action.payload.filterName == 'Amenities') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        Amenities: action.payload.filterValue
                    }
                })
            }
            else{return state}
            
        }

        default:
            return state
    }
}

export default hotelReducer