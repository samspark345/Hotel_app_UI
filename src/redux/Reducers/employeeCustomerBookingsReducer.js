import React from 'react'
import { AUTHENTICATE_CUSTOMER_ON_SUCCESS, AUTHENTICATE_EMPLOYEE_ON_SUCCESS, SET_AUTHENTICATE_STATUS } from '../Actions/AuthenticateActions'
import { GET_CUSTOMER_BOOKINGS_ON_SUCCESS } from '../Actions/CustomerInfoActions'
import { GET_ALL_CUSTOMER_BOOKINGS_ON_SUCCESS, GET_CURRENT_CUSTOMER_BOOKINGS_ON_SUCCESS, GET_CURRENT_CUSTOMER_RENTINGS_ON_SUCCESS, GET_PAST_CUSTOMER_BOOKINGS_ON_SUCCESS, GET_PAST_CUSTOMER_RENTINGS_ON_SUCCESS } from '../Actions/EmployeeBookingsPageActions'


const initCustState = {
    bookings: [ {
        "booking_id": '',
        "customer_id": '',
        "booking_start_date": "",
        "booking_end_date": "",
        "room_number": '',
        "hotel_id": ''
    }],

    currentBookings: [ {
        "booking_id": '',
        "customer_id": '',
        "booking_start_date": "",
        "booking_end_date": "",
        "room_number": '',
        "hotel_id": ''
    }],
    pastBookings: [ {
        "booking_id": '',
        "customer_id": '',
        "booking_start_date": "",
        "booking_end_date": "",
        "room_number": '',
        "hotel_id": ''
    }],

    currentRentings:  [ {
        "renting_id": '',
        "customer_id": '',
        "check_in_date": "",
        "check_out_date": "",
        "room_number": '',
        "hotel_id": ''
    }],
    pastRentings:  [ {
        "renting_id": '',
        "customer_id": '',
        "check_in_date": "",
        "chek_out_date": "",
        "room_number": '',
        "hotel_id": ''
    }],

}

//2023-04-10T04:00:00.000Z is example of start or end date

const employeeCustomerBookingsReducer = (state=initCustState, action) => {
    switch(action.type){

        case(GET_ALL_CUSTOMER_BOOKINGS_ON_SUCCESS) : {

            return({
                ...state,
                bookings: action.payload
            })
        }
        case(GET_CURRENT_CUSTOMER_BOOKINGS_ON_SUCCESS) : {

            return({
                ...state,
                currentBookings: action.payload
            })
        }
        case(GET_PAST_CUSTOMER_BOOKINGS_ON_SUCCESS) : {

            return({
                ...state,
                pastBookings: action.payload
            })
        }

        case(GET_CURRENT_CUSTOMER_RENTINGS_ON_SUCCESS) : {

            return({
                ...state,
                currentRentings: action.payload
            })
        }

        case(GET_PAST_CUSTOMER_RENTINGS_ON_SUCCESS) : {

            return({
                ...state,
                pastRentings: action.payload
            })
        }
        
        default:
            return state
    }
}

export default employeeCustomerBookingsReducer