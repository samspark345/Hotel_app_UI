export const GET_HOTELS = 'GET_HOTELS'
export const GET_HOTELS_ON_SUCCESS = 'GET_HOTELS_ON_SUCCESS'
export const MODIFY_SELECTED_FILTERS = 'MODIFY_SELECTED_FILTERS'


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

export function ModifySelectedFilters(payload){
    return {
        type: MODIFY_SELECTED_FILTERS,
        payload
    }; 
}