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
        Amenities: [],
        country: [],
        Start_date: '',
        End_date: '',
        Min_price: '',
        Max_Price: ''
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
            if(action.payload.filterName === 'Room_Capacity') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        Room_Capacity: action.payload.filterValue
                    }
                })
            }

            else if(action.payload.filterName === 'Hotel_Chain') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        Hotel_Chain: action.payload.filterValue
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
            else if(action.payload.filterName === 'Star_No') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        Star_No: action.payload.filterValue
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
            else if(action.payload.filterName === 'country') {
                return({
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        country: action.payload.filterValue
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
                        Max_Price: action.payload.filterValue
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