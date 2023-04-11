export const GET_ALL_CUSTOMER_BOOKINGS = 'GET_ALL_CUSTOMER_BOOKINGS'
export const GET_ALL_CUSTOMER_BOOKINGS_ON_SUCCESS = 'GET_ALL_CUSTOMER_BOOKINGS_ON_SUCCESS'
export const GET_ALL_CUSTOMER_RENTINGS = 'GET_ALL_CUSTOMER_RENTINGS'
export const GET_ALL_CUSTOMER_RENTINGS_ON_SUCCESS = 'GET_ALL_CUSTOMER_RENTINGS_ON_SUCCESS'




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
// export function populateAllFIlters(payload){
//     return {
//         type: POPULATE_ALL_FILTERS,
//         payload: payload
//     }; 
// }