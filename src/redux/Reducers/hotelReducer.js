import React from 'react'
import { GET_HOTELS, GET_HOTELS_ON_SUCCESS } from '../Actions/hotelActions'
import { GET_CHAIN_NAMES_ON_SUCCESS } from '../Actions/hotelChainActions'

const initHighlightState = {
    hotels: [
        {hotelName: 'krebs', hotelChainName: 'malibu', city: 'fsjns fbsj'}, 
        {hotelName: 'msm', hotelChainName: 'reka', city: 'atlanta'},
        {hotelName: 'frsna', hotelChainName: 'lema', city: 'ottawa'},
        {hotelName: 'nggsk', hotelChainName: 'boro', city: 'toronto'},
        {hotelName: 'hilton', hotelChainName: 'slander', city: 'winnipeg'}
    ]
}

const hotelReducer = (state=initHighlightState, action) => {
    switch(action.type){
        case(GET_HOTELS_ON_SUCCESS) : {

            return({
                ...state,
                hotels: action.payload.hotels
            })
        }
        
        default:
            return state
    }
}

export default hotelReducer