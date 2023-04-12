export const GET_ARCHIVED_CUSTOMER_BOOKINGS = 'GET_ARCHIVED_CUSTOMER_BOOKINGS'
export const GET_ARCHIVED_CUSTOMER_BOOKINGS_ON_SUCCESS = 'GET_ARCHIVED_CUSTOMER_BOOKINGS_ON_SUCCESS'
export const GET_ARCHIVED_CUSTOMER_RENTINGS = 'GET_ARCHIVED_CUSTOMER_RENTINGS'
export const GET_ARCHIVED_CUSTOMER_RENTINGS_ON_SUCCESS = 'GET_ARCHIVED_CUSTOMER_RENTINGS_ON_SUCCESS'




export function GetArchivedCustomerBookings(){
    return {
        type: GET_ARCHIVED_CUSTOMER_BOOKINGS
    }; 
}

export function GetArchivedCustomerBookingOnSuccess(payload){
    return {
        type: GET_ARCHIVED_CUSTOMER_BOOKINGS_ON_SUCCESS,
        payload: payload
    }; 
}

export function GetArchivedRentings(){
    return {
        type: GET_ARCHIVED_CUSTOMER_RENTINGS,
    }; 
}

export function GetArchivedCustomerRentingsOnSuccess(payload){
    return {
        type: GET_ARCHIVED_CUSTOMER_RENTINGS_ON_SUCCESS,
        payload: payload
    }; 
}

// export function populateAllFIlters(payload){
//     return {
//         type: POPULATE_ALL_FILTERS,
//         payload: payload
//     }; 
// }