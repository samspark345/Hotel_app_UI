export const GET_CITY_FILTER = 'GET_CITY_FILTER'
export const GET_CITY_FILTER_ON_SUCCESS = 'GET_CITY_FILTER_ON_SUCCESS'
export const GET_ROOM_CAPACITY = 'GET_ROOM_CAPACITY'
export const GET_ROOM_CAPACITY_ON_SUCCESS = 'GET_ROOM_CAPACITY_ON_SUCCESS'
export const GET_HOTEL_NAMES = 'GET_HOTEL_NAMES'
export const GET_HOTEL_NAMES_ON_SUCCESS = 'GET_HOTEL_NAMES_ON_SUCCESS'
export const GET_ROOM_COUNT_FILTER = 'GET_ROOM_COUNT_FILTER'
export const GET_ROOM_COUNT_FILTER_ON_SUCCESS = 'GET_ROOM_COUNT_ON_SUCCESS'
export const POPULATE_ALL_FILTERS = 'POPULATE_ALL_FILTERS'




export function GetCityFilter(){
    return {
        type: GET_CITY_FILTER
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
// export function GetHotelNames(){
//     return {
//         type: GET_HOTEL_NAMES
//     }; 
// }

// export function GetHotelNamesOnSuccess(payload){
//     return {
//         type: GET_HOTEL_NAMES_ON_SUCCESS,
//         payload: payload
//     }; 
// }
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