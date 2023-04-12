import React from 'react'
import { GET_CITY_CAPACITY_VIEW_ON_SUCCESS, GET_HOTEL_CAPACITY_VIEW_ON_SUCCESS } from '../Actions/ViewActions'


const initCustState = {
    hotelCapacityView:{

    },

    cityCapacityView: {

    }

}

//{hotel_id, total_capacity}

//2023-04-10T04:00:00.000Z is example of start or end date

const viewsReducer = (state=initCustState, action) => {
    switch(action.type){

        case(GET_HOTEL_CAPACITY_VIEW_ON_SUCCESS) : {

            return({
                ...state,
                hotelCapacityView: action.payload
            })
        }
        
        case(GET_CITY_CAPACITY_VIEW_ON_SUCCESS) : {

            return({
                ...state,
                cityCapacityView: action.payload
            })
        }
        default:
            return state
    }
}

export default viewsReducer