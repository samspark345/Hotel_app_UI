export const GET_CHAIN_NAMES = 'GET_CHAIN_NAMES'
export const GET_CHAIN_NAMES_ON_SUCCESS = 'GET_CHAIN_NAMES_ON_SUCCESS'

export function GetChainName(){
    return {
        type: GET_CHAIN_NAMES
    }; 
}

export function GetChainNameOnSuccess(payload){
    return {
        type: GET_CHAIN_NAMES_ON_SUCCESS,
        payload: payload
    }; 
}