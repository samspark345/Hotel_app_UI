export const GET_HOTELS = 'GET_HOTELS'
export const GET_HOTELS_ON_SUCCESS = 'GET_HOTELS_ON_SUCCESS'


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