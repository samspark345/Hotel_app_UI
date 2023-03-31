export const AUTHENTICATE_CUSTOMER = 'AUTHENTICATE_CUSTOMER'
export const AUTHENTICATE_CUSTOMER_ON_SUCCESS = 'AUTHENTICATE_CUSTOMER_ON_SUCCESS'
export  const AUTHENTICATE_EMPLOYEE = 'AUTHENTICATE_EMPLOYEE'
export const AUTHENTICATE_EMPLOYEE_ON_SUCCESS = 'AUTHENTICATE_EMPLOYEE_ON_SUCCESS'
export const SIGN_UP = 'SIGN_up'




export function AuthenticateCustomer(){
    return {
        type: AUTHENTICATE_CUSTOMER
    }; 
}

export function AuthenticateCustomerOnSuccess(payload){
    return {
        type: AUTHENTICATE_CUSTOMER_ON_SUCCESS,
        payload: payload
    }; 
}

export function AuthenticateEmployee(){
    return {
        type: AUTHENTICATE_EMPLOYEE
    }; 
}

export function AuthenticateEmployeeOnSuccess(payload){
    return {
        type: AUTHENTICATE_EMPLOYEE_ON_SUCCESS,
        payload: payload
    }; 
}

export function SignUp(){
    return{
        type: SIGN_UP
    }
}