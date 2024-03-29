import React from 'react'
import { GET_CHAIN_NAMES_ON_SUCCESS } from '../Actions/hotelChainActions'

const initHotelChainState = {
    hotelChainNames: ['malibu', 'reka','lema','boro', 'slander']
}

const hotelChainReducer = (state=initHotelChainState, action) => {
    switch(action.type){
        case(GET_CHAIN_NAMES_ON_SUCCESS) : {

            return({
                ...state,
                hotelChainNames: action.payload.hotelChainNames
            })
        }
        
        default:
            return state
    }
}

export default hotelChainReducer