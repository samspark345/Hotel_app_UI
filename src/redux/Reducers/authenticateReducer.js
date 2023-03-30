import React from 'react'
import { AUTHENTICATE_ON_SUCCESS } from '../Actions/AuthenticateActions'
import { GET_HOTELS_ON_SUCCESS } from '../Actions/hotelActions'
import { GET_CITY_FILTER_ON_SUCCESS, GET_ROOM_CAPACITY_ON_SUCCESS, GET_ROOM_COUNT_FILTER_ON_SUCCESS } from '../Actions/hotelFilterOptionsActions'


const initHighlightState = {
    CustomerId : null
}

const hotelFilterReducer = (state=initHighlightState, action) => {
    switch(action.type){

        case(AUTHENTICATE_ON_SUCCESS) : {

            return({
                ...state,
                CustomerId: payload
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