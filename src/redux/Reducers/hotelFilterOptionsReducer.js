import React from 'react'
import { GET_HOTELS_ON_SUCCESS } from '../Actions/hotelActions'
import { GET_ROOM_CAPACITY_ON_SUCCESS, GET_ROOM_COUNT_FILTER_ON_SUCCESS } from '../Actions/hotelFilterOptionsActions'


const initHotelFilterState = {
    dropdowns: {
    chain_name: ['Lumina', 'HavenStay', 'Wanderlust', 'Oasis', 'Aqua'],
    city: ['Toronto','Miami', 'Montreal', 'New York','Ottawa', 'Los Angeles'],
    star_rating: [1,2,3,4,5],
    country: ['Canada', 'USA']
    }
}

const hotelFilterOptionReducer = (state=initHotelFilterState, action) => {
    switch(action.type){
        case(GET_ROOM_COUNT_FILTER_ON_SUCCESS) : {

            return({
                ...state,
                No_Of_Rooms: action.payload
            })
        }
        
        default:
            return state
    }
}

export default hotelFilterOptionReducer