export const AUTHENTICATE_CUSTOMER = 'AUTHENTICATE_CUSTOMER'
export const AUTHENTICATE_CUSTOMER_ON_SUCCESS = 'AUTHENTICATE_CUSTOMER_ON_SUCCESS'
export  const AUTHENTICATE_EMPLOYEE = 'AUTHENTICATE_EMPLOYEE'
export const AUTHENTICATE_EMPLOYEE_ON_SUCCESS = 'AUTHENTICATE_EMPLOYEE_ON_SUCCESS'
export const SIGN_UP = 'SIGN_up'
export const SET_AUTHENTICATE_STATUS = 'SET_AUTHENTICATE_STATUS'




export function AuthenticateCustomer(payload){
    return {
        type: AUTHENTICATE_CUSTOMER,
        payload: payload
    }; 
}

export function AuthenticateCustomerOnSuccess(payload){
    return {
        type: AUTHENTICATE_CUSTOMER_ON_SUCCESS,
        payload: payload
    }; 
}

export function AuthenticateEmployee(payload){
    return {
        type: AUTHENTICATE_EMPLOYEE,
        payload: payload
    }; 
}

export function AuthenticateEmployeeOnSuccess(payload){
    return {
        type: AUTHENTICATE_EMPLOYEE_ON_SUCCESS,
        payload: payload
    }; 
}

export function SignUp(payload){
    return{
        type: SIGN_UP,
        payload
    };
}

export function setAuthenticateStatus(payload){
    return{
        type: SET_AUTHENTICATE_STATUS,
        payload: payload
    }
}