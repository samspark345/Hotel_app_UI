import React from 'react'
import { AUTHENTICATE_CUSTOMER_ON_SUCCESS, AUTHENTICATE_EMPLOYEE_ON_SUCCESS, SET_AUTHENTICATE_STATUS } from '../Actions/AuthenticateActions'


const initAuthState = {
    authenticateError: false,
    customerInfo : null,
    employeeInfo : null
}

// {email, password, customerId}

const authenticateReducer = (state=initAuthState, action) => {
    switch(action.type){

        case(AUTHENTICATE_CUSTOMER_ON_SUCCESS) : {

            return({
                customerInfo: action.payload,
                employeeInfo: null
            })
        }
        case(AUTHENTICATE_EMPLOYEE_ON_SUCCESS) : {

            return({
                customerInfo: null,
                employeeInfo: action.payload
            })
        }
        case(SET_AUTHENTICATE_STATUS) : {

            return({
                ...state,
                authenticateError: action.payload
            })
        }
        default:
            return state
    }
}

export default authenticateReducer