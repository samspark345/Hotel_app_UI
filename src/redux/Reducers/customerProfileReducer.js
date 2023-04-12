import React from 'react'
import { AUTHENTICATE_CUSTOMER_ON_SUCCESS, AUTHENTICATE_EMPLOYEE_ON_SUCCESS, SET_AUTHENTICATE_STATUS } from '../Actions/AuthenticateActions'
import { GET_CUSTOMER_BOOKINGS_ON_SUCCESS, GET_CUSTOMER_PROFILE_ON_SUCCESS } from '../Actions/CustomerInfoActions'


const initProfileState = {
    customerAccountInfo:  {
        "customer_id": "",
        "first_name": "",
        "last_name": "",
        "address_country": "",
        "address_city": "",
        "address_street_name": "",
        "address_street_number": "",
        "address_unit_number": "",
        "ssn_sin": "",
        "registration_date": "",
        "password": "",
        "phone_number": "",
        "email": ""
    }
}
//1-613-261-9845
//2023-04-10T04:00:00.000Z is example of reg date

const customerProfileReducer = (state=initProfileState, action) => {
    switch(action.type){

        case(GET_CUSTOMER_PROFILE_ON_SUCCESS) : {

            return({
                ...state,
                customerAccountInfo: action.payload
            })
        }
        
        default:
            return state
    }
}

export default customerProfileReducer