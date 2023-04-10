import React from 'react'
import { AUTHENTICATE_CUSTOMER_ON_SUCCESS, AUTHENTICATE_EMPLOYEE_ON_SUCCESS, SET_AUTHENTICATE_STATUS } from '../Actions/AuthenticateActions'
import { GET_CUSTOMER_BOOKINGS_ON_SUCCESS } from '../Actions/CustomerInfoActions'


const initCustState = {
    bookings: [ {
        "booking_id": '',
        "customer_id": '',
        "booking_start_date": "",
        "booking_end_date": "",
        "room_number": '',
        "hotel_id": ''
    }]
}

//2023-04-10T04:00:00.000Z is example of start or end date

const customerBookingReducer = (state=initCustState, action) => {
    switch(action.type){

        case(GET_CUSTOMER_BOOKINGS_ON_SUCCESS) : {

            return({
                ...state,
                bookings: action.payload
            })
        }
        
        default:
            return state
    }
}

export default customerBookingReducer