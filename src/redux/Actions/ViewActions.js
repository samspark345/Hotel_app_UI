export const GET_CITY_CAPACITY_VIEW = 'GET_CITY_CAPACITY_VIEW'
export const GET_CITY_CAPACITY_VIEW_ON_SUCCESS = 'GET_CITY_CAPACITY_VIEW_ON_SUCCESS'
export const GET_HOTEL_CAPACITY_VIEW = 'GET_HOTEL_CAPACITY_VIEW'
export const GET_HOTEL_CAPACITY_VIEW_ON_SUCCESS = 'GET_HOTEL_CAPACITY_VIEW_ON_SUCCESS'






export function GetHotelCapacityView(){
    return {
        type: GET_HOTEL_CAPACITY_VIEW,
    }; 
}

export function GetHotelCapacityViewOnSuccess(payload){
    return {
        type: GET_HOTEL_CAPACITY_VIEW_ON_SUCCESS,
        payload
    }; 
}

export function GetCityCapacityView(){
    return {
        type: GET_CITY_CAPACITY_VIEW,
    }; 
}

export function GetCityCapacityViewOnSuccess(payload){
    return {
        type: GET_CITY_CAPACITY_VIEW_ON_SUCCESS,
        payload
    }; 
}
// export function populateAllFIlters(payload){
//     return {
//         type: POPULATE_ALL_FILTERS,
//         payload: payload
//     }; 
// }