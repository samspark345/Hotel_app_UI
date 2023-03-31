import React from 'react'
import { AUTHENTICATE_CUSTOMER_ON_SUCCESS, AUTHENTICATE_EMPLOYEE_ON_SUCCESS } from '../Actions/AuthenticateActions'


const initAuthState = {
    CustomerId : null,
    EmployeeId : null
}

const authenticateReducer = (state=initAuthState, action) => {
    switch(action.type){

        case(AUTHENTICATE_CUSTOMER_ON_SUCCESS) : {

            return({
                CustomerId: action.payload,
                EmployeeId: null
            })
        }
        case(AUTHENTICATE_EMPLOYEE_ON_SUCCESS) : {

            return({
                CustomerId: null,
                EmployeeId: action.payload
            })
        }
        
        default:
            return state
    }
}

export default authenticateReducer