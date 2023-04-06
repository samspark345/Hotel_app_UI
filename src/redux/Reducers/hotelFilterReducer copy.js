import React from 'react'
import { GET_HOTELS_ON_SUCCESS } from '../Actions/hotelActions'
import { GET_CITY_FILTER_ON_SUCCESS, GET_ROOM_CAPACITY_ON_SUCCESS, GET_ROOM_COUNT_FILTER_ON_SUCCESS } from '../Actions/hotelFilterOptionsActions'


const initHighlightState = {
    Room_Capacity: [],
    Hotel_Name: [],
    City: [],
    No_Of_Rooms: [],
    Star_No: [1,2,3,4,5]
}

const hotelReducer = (state=initHighlightState, action) => {
    switch(action.type){
        case(GET_CITY_FILTER_ON_SUCCESS) : {

            return({
                ...state,
                City: action.payload
            })
        }

        case(GET_HOTELS_ON_SUCCESS) : {

            return({
                ...state,
                Hotel_Name: action.payload
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