import React from 'react'
import { GET_HOTELS_ON_SUCCESS } from '../Actions/hotelActions'
import { GET_ROOM_CAPACITY_ON_SUCCESS, GET_ROOM_COUNT_FILTER_ON_SUCCESS } from '../Actions/hotelFilterOptionsActions'


const initHotelFilterState = {
    Room_Capacity: [1, 2, 3, 4, 5, 6],
    chain_name: ['Lumina', 'HavenStay', 'WanderLust', 'Oasis', 'Aqua'],
    city: ['Toronto','Miami', 'Montreal', 'New York','Ottawa', 'Los Angeles'],
    No_Of_Rooms: [],
    star_rating: [1,2,3,4,5],
    Views: ['City view', 'Moutain view', 'Sea View'],
    Amenities: ['room service', 'extendable', 'tv', 'a/c', 'fridge', 'wifi']
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