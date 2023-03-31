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

export function GetCityFilterOnSuccess(payload){
    return {
        type: GET_CITY_FILTER_ON_SUCCESS,
        payload: payload
    }; 
}

export function GetRoomCapacity(){
    return {
        type: GET_ROOM_CAPACITY
    }; 
}

export function GetRoomCapacityOnSuccess(payload){
    return {
        type: GET_ROOM_CAPACITY_ON_SUCCESS,
        payload: payload
    }; 
}
export function GetHotelNames(){
    return {
        type: GET_HOTEL_NAMES
    }; 
}

export function GetHotelNamesOnSuccess(payload){
    return {
        type: GET_HOTEL_NAMES_ON_SUCCESS,
        payload: payload
    }; 
}
export function GetRoomCount(){
    return {
        type: GET_ROOM_COUNT_FILTER
    }; 
}

export function GetRoomCountOnSuccess(payload){
    return {
        type: GET_ROOM_COUNT_FILTER_ON_SUCCESS,
        payload: payload
    }; 
}

export function populateAllFIlters(payload){
    return {
        type: POPULATE_ALL_FILTERS,
        payload: payload
    }; 
}