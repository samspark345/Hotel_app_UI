import React from 'react'
import { GET_HOTELS_ON_SUCCESS } from '../Actions/hotelActions'

const initHotelState = {
    hotels: [
        {hotelName: 'krebs', hotelChainName: 'malibu', city: 'fsjns fbsj'}, 
        {hotelName: 'msm', hotelChainName: 'reka', city: 'atlanta'},
        {hotelName: 'frsna', hotelChainName: 'lema', city: 'ottawa'},
        {hotelName: 'nggsk', hotelChainName: 'boro', city: 'toronto'},
        {hotelName: 'hilton', hotelChainName: 'slander', city: 'winnipeg'}
    ]
}

const hotelReducer = (state=initHotelState, action) => {
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