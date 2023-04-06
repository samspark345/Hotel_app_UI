export const GET_HOTELS = 'GET_HOTELS'
export const GET_HOTELS_ON_SUCCESS = 'GET_HOTELS_ON_SUCCESS'
export const MODIFY_SELECTED_HOTEL_FILTERS = 'MODIFY_SELECTED_HOTEL_FILTERS'
export const FILTER_HOTEL_RESULT = 'FILTER_HOTEL_RESULT'
export const FILTER_HOTEL_RESULT_ON_SUCCESS = 'FILTER_HOTEL_RESULT_ON_SUCCESS'
export const APPLY_HOTEL_FILTERS = 'APPLY_HOTEL_FILTERS'
export const APPLY_HOTEL_FILTERS_ON_SUCCESS = 'APPLY_HOTEL_FILTERS_ON_SUCCESS'


// Room_Capacity: [],
//         Hotel_Chain: [],
//         City: [],
//         No_Of_Rooms: [],
//         Star_No: [],
//         Views: [],
//         Amenities: []


export function Gethotels(){
    return {
        type: GET_HOTELS
    }; 
}

export function GetHotelsOnSuccess(payload){
    return {
        type: GET_HOTELS_ON_SUCCESS,
        payload: payload
    }; 
}

export function ModifySelectedHotelFilters(payload){
    return {
        type: MODIFY_SELECTED_HOTEL_FILTERS,
        payload
    }; 
}

export function filterHotelResults(){
    return {
        type: FILTER_HOTEL_RESULT,
    }; 
}

export function filterHotelResultsOnSuccess(payload){
    return {
        type: FILTER_HOTEL_RESULT_ON_SUCCESS,
        payload
    }; 
}

export function applyFilters(){
    return {
        type: APPLY_HOTEL_FILTERS
    }
}

export function applyFiltersOnSuccess(payload){
    return {
        type: APPLY_HOTEL_FILTERS_ON_SUCCESS,
        payload
    }
}