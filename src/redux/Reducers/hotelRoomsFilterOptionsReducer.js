import React from 'react'
import { GET_HOTELS_ON_SUCCESS } from '../Actions/hotelActions'
import { GET_ROOM_CAPACITY_ON_SUCCESS, GET_ROOM_COUNT_FILTER_ON_SUCCESS } from '../Actions/hotelFilterOptionsActions'


const initHotelRoomFilterState = {
    dropdowns: {
    Room_Capacity: [1, 2, 3, 4, 5, 6],
    Views: ['City view', 'Moutain view', 'Sea View'],
    Amenities: ['room service', 'extendable', 'tv', 'a/c', 'fridge', 'wifi'],
    }
}

const hotelRoomsFilterOptionReducer = (state=initHotelRoomFilterState, action) => {
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

export default hotelRoomsFilterOptionReducer