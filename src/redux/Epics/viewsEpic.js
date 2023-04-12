import axios from "axios";
import { combineEpics, ofType } from "redux-observable";
import {
    Observable,
    Observer
}from 'rxjs'
import { mergeMap } from "rxjs/operators";
import { AUTHENTICATE_CUSTOMER, AuthenticateCustomerOnSuccess, AUTHENTICATE_EMPLOYEE, AuthenticateEmployeeOnSuccess, SIGN_UP, setAuthenticateErrorStatus } from "../Actions/AuthenticateActions";
import { GetHotelsOnSuccess, GET_HOTELS, GET_HOTELS_ON_SUCCESS } from "../Actions/hotelActions";
import { GET_CHAIN_NAMES, GET_CHAIN_NAMES_ON_SUCCESS } from "../Actions/hotelChainActions";
import { GET_CITY_FILTER, GET_HOTEL_NAMES, GET_ROOM_CAPACITY, GET_ROOM_COUNT_FILTER, POPULATE_ALL_FILTERS } from "../Actions/hotelFilterOptionsActions";
import { GET_CUSTOMER_BOOKINGS, GetCustomerBookingOnSuccess } from "../Actions/CustomerInfoActions";
import { GET_CITY_CAPACITY_VIEW, GET_HOTEL_CAPACITY_VIEW, GetCityCapacityView, GetCityCapacityViewOnSuccess, GetHotelCapacityViewOnSuccess } from "../Actions/ViewActions";

// function getYtVideosApiRequest(){
//     request  
// }

const options = {
    method: 'POST',
    url: 'http://localhost:3001',
    data: {}
};



const getHotelCapacityView = (action$, state$) =>
    action$.pipe(
        ofType(GET_HOTEL_CAPACITY_VIEW),
        mergeMap((action) => {
            return new Observable((observer) => {
                const options = {
                    method: 'GET',
                    url: 'http://localhost:3001/queries/',
                };
                  
                console.log(action)
                console.log(state$.value)
                const baseUrl = 'http://localhost:3001/queries/hotel_capacities/'
                options.url = baseUrl

                console.log(options)
                axios.request(
                    options
                ).then((response) => {
                    console.log(response.data)
                    observer.next(GetHotelCapacityViewOnSuccess(response.data.rows));
                    observer.complete()
                    console.log(state$.value)
                    // observer.next(IncreaseVideosToGet(response.data.));
                }).catch(()=> {
                    console.log("errr")
                    observer.complete()
                })
            })
        })
    )    


const getCityCapacityView = (action$, state$) =>
    action$.pipe(
        ofType(GET_CITY_CAPACITY_VIEW),
        mergeMap((action) => {
            return new Observable((observer) => {
                const options = {
                    method: 'GET',
                    url: 'http://localhost:3001/queries/',
                };
                  
                console.log(action)
                console.log(state$.value)
                const baseUrl = ' http://localhost:3001/queries/cities/available_rooms'

                options.url = baseUrl

                console.log(options)
                axios.request(
                    options
                ).then((response) => {
                    console.log(response.data)
                    observer.next(GetCityCapacityViewOnSuccess(response.data.rows));
                    observer.complete()
                    console.log(state$.value)
                    // observer.next(IncreaseVideosToGet(response.data.));
                }).catch(()=> {
                    console.log("errr")
                    observer.complete()
                })
            })
        })
    )    


export const viewsEpic = combineEpics(
    getHotelCapacityView,
    getCityCapacityView
)