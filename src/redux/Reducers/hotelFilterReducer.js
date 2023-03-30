import React from 'react'
import { GET_HOTELS_ON_SUCCESS } from '../Actions/hotelActions'
import { GET_CITY_FILTER_ON_SUCCESS, GET_ROOM_CAPACITY_ON_SUCCESS, GET_ROOM_COUNT_FILTER_ON_SUCCESS } from '../Actions/hotelFilterOptionsActions'


const initHighlightState = {
    Room_Capacity: [1, 2, 3, 4, 5, 6],
    Hotel_Chain: ['Hilton', '8inn', 'Marriott', 'Novotel', 'Westin'],
    City: ['Toronto','Vancouver', 'Montreal', 'New York','Chicago', 'Washington', 'Dallas', 'San Francisco', 'Peubla'],
    No_Of_Rooms: [],
    Star_No: [1,2,3,4,5],
    Views: ['City view', 'Moutain view', 'Sea View'],
    Amenities: ['room service', 'extendable', 'tv', 'a/c', 'fridge', 'wifi']
}

const hotelFilterReducer = (state=initHighlightState, action) => {
    switch(action.type){

        case(GET_HOTELS_ON_SUCCESS) : {

            return({
                ...state,
                Hotel_Chain: action.payload
            })
        }
        case(GET_ROOM_CAPACITY_ON_SUCCESS) : {

            return({
                ...state,
                Room_Capacity: action.payload
            })
        }
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

export default hotelFilterReducer