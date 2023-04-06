import React from 'react'
import { APPLY_HOTEL_FILTERS_ON_SUCCESS, FILTER_HOTEL_RESULT_ON_SUCCESS, GET_HOTELS_ON_SUCCESS, MODIFY_SELECTED_HOTEL_FILTERS, MODIFY_SELECTED_ROOM_FILTERS, SELECT_HOTEL } from '../Actions/hotelActions'


const initHotelState = {
    hotels: [],
    selectedFilters : {
        chain_name: [],
        No_Of_Rooms: [],
        city: [],
        star_rating: [],
        country: [],
    },
    
}

const hotelReducer = (state=initHotelState, action) => {
    switch(action.type){
        case(GET_HOTELS_ON_SUCCESS) : {

            return({
                ...state,
                hotels: action.payload
            })
        }

        case(APPLY_HOTEL_FILTERS_ON_SUCCESS) : {

            return({

                ...state,
                hotels: action.payload
            })
        }


        case(MODIFY_SELECTED_HOTEL_FILTERS) : {

            if(action.payload.filterName === 'chain_name') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        chain_name: action.payload.filterValue
                    }
                })
            }
            else if(action.payload.filterName === 'No_Of_Rooms') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        No_Of_Rooms: action.payload.filterValue
                    }
                })
            }
            else if(action.payload.filterName === 'star_rating') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        star_rating: action.payload.filterValue
                    }
                })
            }
            else if(action.payload.filterName === 'country') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        country: action.payload.filterValue
                    }
                })
            }

            else if(action.payload.filterName === 'city') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        city: action.payload.filterValue
                    }
                })
            }
           
            else{
                console.log(action.payload)
                return state}
            
        }

        default:
            return state
    }
}

export default hotelReducer