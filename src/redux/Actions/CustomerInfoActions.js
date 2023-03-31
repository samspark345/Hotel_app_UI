export const GET_CUSTOMER_BOOKINGS = 'GET_CUSTOMER_BOOKINGS'
export const GET_CUSTOMER_BOOKINGS_ON_SUCCESS = 'GET_CUSTOMER_BOOKINGS_ON_SUCCESS'
export const GET_CUSTOMER_RENTS = 'GET_CUSTOMER_RENTS'
export const GET_CUSTOMER_RENTS_ON_SUCCESS = 'GET_CUSTOMER_RENTS_ON_SUCCESS'
export const GET_CUSTOMER_BOOKING_ARCHIVES = 'GET_CUSTOMER_BOOKING_ARCHIVES'
export const GET_CUSTOMER_BOOKING_ARCHIVES_ON_SUCCESS = 'GET_CUSTOMER_BOOKING_ARCHIVES_ON_SUCCESS'
export const GET_CUSTOMER_RENTING_ARCHIVES = 'GET_CUSTOMER_RENTING_ARCHIVES'
export const GET_CUSTOMER_RENTING_ARCHIVES_ON_SUCCESS = 'GET_CUSTOMER_RENTING_ARCHIVES_ON_SUCCESS'




export function GetCustomerBooking(){
    return {
        type: GET_CUSTOMER_BOOKINGS
    }; 
}

export function GetCustomerBookingOnSuccess(payload){
    return {
        type: GET_CUSTOMER_BOOKINGS_ON_SUCCESS,
        payload: payload
    }; 
}

export function GetCustomerRents(){
    return {
        type: GET_CUSTOMER_RENTS
    }; 
}

export function GetCustomerRentsOnSuccess(payload){
    return {
        type: GET_CUSTOMER_RENTS_ON_SUCCESS,
        payload: payload
    }; 
}
export function GetCustomerBookArchives(){
    return {
        type: GET_CUSTOMER_BOOKING_ARCHIVES
    }; 
}

export function GetCustomerBookArchivesOnSuccess(payload){
    return {
        type: GET_CUSTOMER_BOOKING_ARCHIVES_ON_SUCCESS,
        payload: payload
    }; 
}
export function GetCustomerRentsArchives(){
    return {
        type: GET_CUSTOMER_RENTING_ARCHIVES
    }; 
}

export function GetCustomerRentsArchivesOnSuccess(payload){
    return {
        type: GET_CUSTOMER_RENTING_ARCHIVES_ON_SUCCESS,
        payload: payload
    }; 
}

// export function populateAllFIlters(payload){
//     return {
//         type: POPULATE_ALL_FILTERS,
//         payload: payload
//     }; 
// }