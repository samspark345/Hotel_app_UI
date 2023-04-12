export const GET_ALL_CUSTOMER_BOOKINGS = 'GET_ALL_CUSTOMER_BOOKINGS'
export const GET_ALL_CUSTOMER_BOOKINGS_ON_SUCCESS = 'GET_ALL_CUSTOMER_BOOKINGS_ON_SUCCESS'
export const GET_ALL_CUSTOMER_RENTINGS = 'GET_ALL_CUSTOMER_RENTINGS'
export const GET_ALL_CUSTOMER_RENTINGS_ON_SUCCESS = 'GET_ALL_CUSTOMER_RENTINGS_ON_SUCCESS'
export const GET_PAST_CUSTOMER_BOOKINGS = 'GET_PAST_CUSTOMER_BOOKINGS'
export const GET_PAST_CUSTOMER_BOOKINGS_ON_SUCCESS = 'GET_PAST_CUSTOMER_BOOKINGS_ON_SUCCESS'
export const GET_CURRENT_CUSTOMER_BOOKINGS = 'GET_CURRENT_CUSTOMER_BOOKINGS'
export const GET_CURRENT_CUSTOMER_BOOKINGS_ON_SUCCESS = 'GET_CURRENT_CUSTOMER_BOOKINGS_ON_SUCCESS'
export const GET_CURRENT_CUSTOMER_RENTINGS = 'GET_CURRENT_CUSTOMER_RENTINGS'
export const GET_CURRENT_CUSTOMER_RENTINGS_ON_SUCCESS = 'GET_CURRENT_CUSTOMER_RENTINGS_ON_SUCCESS'
export const GET_PAST_CUSTOMER_RENTINGS = 'GET_PAST_CUSTOMER_RENTINGS'
export const GET_PAST_CUSTOMER_RENTINGS_ON_SUCCESS = 'GET_PAST_CUSTOMER_RENTINGS_ON_SUCCESS'
export const CREATE_CUSTOMER_RENTING = 'CREATE_CUSTOMER_RENTING'
export const DELETE_SELECTED_BOOKINGS = 'DELETE_SELECTED_BOOKINGS'




export function GetAllCurrentCustomerBookings(){
    return {
        type: GET_ALL_CUSTOMER_BOOKINGS
    }; 
}

export function GetAllCustomerBookingOnSuccess(payload){
    return {
        type: GET_ALL_CUSTOMER_BOOKINGS_ON_SUCCESS,
        payload: payload
    }; 
}

export function GetPastCustomerBookings(payload){
    return {
        type: GET_PAST_CUSTOMER_BOOKINGS,
        payload: payload
    }; 
}

export function GetPastCustomerBookingOnSuccess(payload){
    return {
        type: GET_PAST_CUSTOMER_BOOKINGS_ON_SUCCESS,
        payload: payload
    }; 
}
export function GetCurrentCustomerBookings(payload){
    return {
        type: GET_CURRENT_CUSTOMER_BOOKINGS,
        payload: payload
    }; 
}

export function GetCurrentCustomerBookingOnSuccess(payload){
    return {
        type: GET_CURRENT_CUSTOMER_BOOKINGS_ON_SUCCESS,
        payload: payload
    }; 
}

export function GetCurrentCustomerRenting(payload){
    return {
        type: GET_CURRENT_CUSTOMER_RENTINGS,
        payload: payload
    }; 
}

export function GetCurrentCustomerRentingOnSuccess(payload){
    return {
        type: GET_CURRENT_CUSTOMER_RENTINGS_ON_SUCCESS,
        payload: payload
    }; 
}

export function GetPastCustomerRenting(payload){
    return {
        type: GET_PAST_CUSTOMER_RENTINGS,
        payload: payload
    }; 
}

export function GetPastCustomerRentingOnSuccess(payload){
    return {
        type: GET_PAST_CUSTOMER_RENTINGS_ON_SUCCESS,
        payload: payload
    }; 
}

export function createCustomerRenting(payload){
    return {
        type: CREATE_CUSTOMER_RENTING,
        payload: payload
    }; 
}

export function deleteSelectedBookings(payload){
    return {
        type: DELETE_SELECTED_BOOKINGS,
        payload: payload
    }; 
}
// export function populateAllFIlters(payload){
//     return {
//         type: POPULATE_ALL_FILTERS,
//         payload: payload
//     }; 
// }