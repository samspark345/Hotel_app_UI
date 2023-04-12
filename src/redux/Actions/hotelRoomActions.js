export const GET_ROOMS = 'GET_ROOMS'
export const GET_ROOMS_ON_SUCCESS = 'GET_ROOMS_ON_SUCCESS'
export const MODIFY_SELECTED_ROOM_FILTERS = 'MODIFY_SELECTED_ROOM_FILTERS'
export const APPLY_ROOM_FILTERS = 'APPLY_ROOM_FILTERS'
export const APPLY_ROOM_FILTERS_ON_SUCCESS = 'APPLY_ROOM_FILTERS_ON_SUCCESS'
export const SELECT_HOTEL = 'SELECT_HOTEL'
export const BOOK_ROOM = 'BOOK_ROOM'
export const BOOK_ROOM_SUCCESS = 'BOOK_ROOM_SUCCESS'
export const RESET_ROOM_FILTERS = 'RESET_ROOM_FILTERS'





// Room_Capacity: [],
//         Room_Chain: [],
//         City: [],
//         No_Of_Rooms: [],
//         Star_No: [],
//         Views: [],
//         Amenities: []


export function GetRooms(){
    return {
        type: GET_ROOMS
    }; 
}

export function GetRoomsOnSuccess(payload){
    return {
        type: GET_ROOMS_ON_SUCCESS,
        payload: payload
    }; 
}

export function ModifySelectedRoomFilters(payload){
    return {
        type: MODIFY_SELECTED_ROOM_FILTERS,
        payload
    }; 
}

export function applyRoomFilters(){
    return {
        type: APPLY_ROOM_FILTERS,
    }; 
}

export function applyRoomFiltersOnSuccess(payload){
    return {
        type: APPLY_ROOM_FILTERS_ON_SUCCESS,
        payload
    }; 
}

export function selectHotel(payload){
    return {
        type: SELECT_HOTEL,
        payload
    }; 
}

export function bookRoom(payload){
    return {
        type: BOOK_ROOM,
        payload
    }; 
}

export function bookRoomOnSuccess(payload){
    return {
        type: BOOK_ROOM_SUCCESS,
        payload
    }; 
}

export function resetRoomFilters(){
    return {
        type: RESET_ROOM_FILTERS,
    }; 
}